const pool = require('./db');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['POST', 'GET', 'PUT'],
    credentials: true,
  }),
);
app.use(express.json());
app.use(bodyParser.json());

const verifyUser = (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      if (!renewToken(req, res)) {
        return res.json({ valid: false });
      }
    } else {
      jwt.verify(accessToken, 'jwt-access-token-secret-key', (err, decoded) => {
        if (err) {
          return res.json({ valid: false });
        } else {
          req.username = decoded.username;
          console.log('decoded username');
          console.log(decoded.username);
          res.locals.userData = { valid: true, username: decoded.username };
          next();
        }
      });
    }
  } catch (err) {
    console.log(err.message);
  }
};

const renewToken = (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return false;
  } else {
    jwt.verify(refreshToken, 'jwt-refresh-token-secret-key', (err, decoded) => {
      if (err) {
        return false;
      } else {
        console.log(req.username);
        const accessToken = jwt.sign(
          { username: decoded.username },
          'jwt-access-token-secret-key',
          {
            expiresIn: '200m',
          },
        );
        res.cookie('accessToken', accessToken, { maxAge: 60000 });
        res.locals.userData = { valid: true, username: decoded.username };
        return true;
      }
    });
  }
};

app.post('/insert', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    // const saltRounds = 1; // Number of salt rounds
    // const salt = await bcrypt.genSalt(saltRounds);
    // const password1 = await bcrypt.hash(password, salt);
      const newTodo = await pool.query(
        'INSERT INTO users (username, password, email) VALUES($1, $2, $3) RETURNING *',
        [username, password, email],
      );
      res.json({success:true});
      // await newTodo.json();
      // req.session.user = {
      //   username,
      //   // id:newTodo.rows[0].id
      // };
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Internal Server Error');
  }
});
app.post('/handlelogin', async (req, res) => {
  try {
    console.log(req.body);
    const allUsers = await pool.query('SELECT * FROM users');
    const usersData = allUsers.rows;
    const { username, password } = req.body;
    // const password = await bcrypt.hash(plainTextPassword, salt);

    const isValidLogin = usersData.some(
      (user) => user.username === username && password===user.password,
    );
    if (isValidLogin) {
      return res.json({ ok:true });
    } else {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/registerjwttoken', async (req, res) => {
  try {
    console.log('registering token');
    const { username } = req.body;
    console.log(username);
    const accessToken = jwt.sign({ username: username }, 'jwt-access-token-secret-key', {
      expiresIn: '200m',
    });
    const refreshToken = jwt.sign({ username: username }, 'jwt-refresh-token-secret-key', {
      expiresIn: '500m',
    });
    res.cookie('accessToken', accessToken, { maxAge: 200 * 60 * 1000 });
    res.cookie('refreshToken', refreshToken, {
      maxAge: 500 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    res.json({ message: 'Registered' });
    console.log('token registered');
  } catch (err) {
    console.log(err.message);
  }
});
app.post('/checksession', verifyUser, (req, res) => {
  if (res.locals.userData === undefined) {
    return res.json({ valid: false, message: 'unauthorized' });
  } else {
    const { username } = res.locals.userData;
    return res.json({ valid: true, message: 'authorized', username });
  }
});

app.post('/logout', (req, res) => {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  return res.json({ message: 'Logout successful' });
});
app.post('/checkuser', async (req, res) => {
  try {
    const { username } = req.body;
    const userQuery = 'SELECT username FROM "users" WHERE username = $1';
    const { rowCount } = await pool.query(userQuery, [username]);

    if (rowCount > 0) {
      return res.status(401).json({ error: 'User Already Exists' });
    } else {
      return res.json({ message: 'SignUp successful' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

server.listen(3001, () => {
  console.log('Server has started');
  pool
    .connect()
    .then(() => {
      console.log('Connected to PostgreSQL database');
    })
    .catch((err) => {
      console.error('Error connecting to PostgreSQL database', err);
    });
});
