const Books = require('../models/Books')
const mongoose = require('mongoose')

// get all books
const getBooks = async (req, res) => {
    const books = await Books.find({})
    res.status(200).json(books)
}


// get a single book
const getBook = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such book'})
    }
    
    const book = await Books.findById(id)

    if(!book) {
        return res.status(404).json({error: 'No such book'})
    }
    res.status(200).json(book)
}


// create/save a book in the list
const saveBook = async (req, res,) => {
    const { title, author } = req.body

    try {
        const book = await Books.create({ title, author })
        res.status(200).json(book)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}


// delete one


// update one


module.exports = {
    saveBook,
    getBooks,
    getBook
}