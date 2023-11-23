const Pool = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config();

const conexionPG = new Pool({
    user: process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    password:process.env.DB_PASS,
    port:process.env.DB_PORT,
});

module.exports = conexionPG;