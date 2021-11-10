// https://node-postgres.com/guides/async-express
// https://www.postgresql.org/docs/
const { Pool } = require('pg');



const pool = new Pool();  



module.exports = {
	query: (text, params) => pool.query(text, params),
}


