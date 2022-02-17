//require in pool from postgres
const { Pool } = require('pg');

//create a new pool with the connection string
const PG_URI = 'postgres://uxjpwuxc:7h5mtdwAKwBDjlMjVVovGB48a0g5xntE@castor.db.elephantsql.com/uxjpwuxc';

const pool= new Pool({
  connectionString: PG_URI,
});

//export query
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
};