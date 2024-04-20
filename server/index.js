const pool=require('./db');
const express=require('express');
const app = express();
const server = require('http').createServer(app);

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
