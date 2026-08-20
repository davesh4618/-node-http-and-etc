const sql = require("mysql2");

const pool = sql.createPool({
  host: "localhost",
  user: "root",
  password: "jhumki98",
  database: "airbnb",
  port: 3306,
});

module.exports = pool.promise();
