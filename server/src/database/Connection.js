const { query } = require('express');
const mysql = require('mysql');

const DB = mysql.createPool({
    host: 'localhost',
    user: 'root',
    pass: '',
    database: 'projects'
})

module.exports = (query, id, bookName, bookAuthor) => {
    return new Promise((resolve, reject) => {
        DB.getConnection((err, con) => {
            if (err) {
                reject(err);
            } else {
                con.query(query, [id, bookName, bookAuthor], (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                    con.release();
                })
            }
        })
    })
}