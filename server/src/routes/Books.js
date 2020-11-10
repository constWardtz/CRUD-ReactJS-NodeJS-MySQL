const express = require('express');
const router = express.Router();

/* SERVICES */
const { Create } = require('../services/Service')
const { Retrieve } = require('../services/Service')
const { Update } = require('../services/Service')
const { Delete } = require('../services/Service')

/* Create */
router.post('/create', async(req, res) => {
    const { bookName, bookAuthor } = req.body;

    const results = await Create(bookName, bookAuthor);

    results ?
        res.status(200).json({
            results: results,
            message: "You have successfully inserted new book!"
        }) :
        res.status(500).json({
            results: results,
            message: "There were an error!"
        })
})

/* Retrieve */
router.get('/retrieve', async(req, res) => {
    const results = await Retrieve();

    results ?
        res.status(200).json({
            results: results,
            message: "You have successfully retrieve a book!"
        }) :
        res.status(500).json({
            results: results,
            message: "There were an error!"
        })
})

/* Update */
router.patch('/update', async(req, res) => {
    const { id, bookName, bookAuthor } = req.body;

    const results = await Update(id, bookName, bookAuthor);

    results ?
        res.status(200).json({
            results: results,
            message: "Book successfully updated!"
        }) :
        res.status(500).json({
            results: results,
            message: "There were an error!"
        })
})

/* Delete */
router.delete('/delete', async(req, res) => {
    const { id } = req.body;

    const results = await Delete(id);

    results ?
        res.status(200).json({
            results: results,
            message: "Book successfully deleted!"
        }) :
        res.status(500).json({
            results: results,
            message: "There were an error!"
        })
})

module.exports = router;