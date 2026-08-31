const sql = require("mysql2");

const pool = sql.createPool({
  host: "localhost",
  user: "root",
  password: "NewPassword123!",
  database: "airbnb",
});

module.exports = pool.promise();
