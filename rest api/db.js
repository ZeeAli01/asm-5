//this file handles our database (postgreSQL) connection:
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "items",
  password: "12345",
  port: 5432,
});

module.exports = pool;
