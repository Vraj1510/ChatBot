const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'vrajshah1510',
  password: 'vraj1510',
  host: 'localhost',
  port: 5432,
  database: 'chatbot',
});
module.exports = pool;
