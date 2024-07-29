const db = require("../config/mysql");

async function getData() {
    const rows = await db.query(`SELECT * FROM fornecedores`);
    return rows;
}

module.exports = {
    getData
};