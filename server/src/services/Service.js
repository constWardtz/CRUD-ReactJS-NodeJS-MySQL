const Connection = require('../database/Connection');

const Create = async(bookName, bookAuthor) => {
    try {
        const create = `INSERT INTO book_tbl(bookName, bookAuthor) VALUES(?, ?)`;

        await Connection(create, bookName, bookAuthor)
        return true;
    } catch (err) {
        return false;
    }
}


const Retrieve = async() => {
    try {
        const retrieve = `SELECT * FROM book_tbl`;

        return await Connection(retrieve)
    } catch (err) {
        return []
    }
}

const Update = async(id, bookName, bookAuthor) => {
    try {
        const update = `UPDATE book_tbl SET bookName = ?, bookAuthor = ? WHERE id = ?`;
        await Connection(update, bookName, bookAuthor, id)

        return true
    } catch (err) {
        return false
    }
}

const Delete = async(id) => {
    try {
        const deleteQuery = `DELETE from book_tbl WHERE id = ?`;
        await Connection(deleteQuery, id)

        return true
    } catch (err) {
        return false
    }
}

module.exports = {
    Create,
    Retrieve,
    Update,
    Delete
}