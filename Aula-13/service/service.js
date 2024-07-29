const db = require("../config/mysql.js");

async function getData() {
    const rows = await db.query(`SELECT * FROM fornecedores`);
    return rows;
}

module.exports = {
    getData
};