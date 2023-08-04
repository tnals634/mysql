const mysql = require("mysql2/promise");
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "..", ".env"),
});

const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

const connect = async () => {
  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: "world",
    multipleStatements: true,
  });

  return connection;
};

const execute = async (sql, values) => {
  const connection = await connect();
  const [rows] = await connection.query(sql, values);

  connection.end();

  return rows;
};

module.exports = { execute };
