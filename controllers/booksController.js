const Books = require('../models/Books')
const mongoose = require('mongoose')

// get all books
const getBooks = async (req, res) => {
    const user_id = req.user._id
    const books = await Books.find({ user_id })
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
    const { bookId, title, authors, cover, description } = req.body

    try {
        const user_id = req.user._id
        const book = await Books.create({ bookId, title, authors, cover, description, user_id })
        res.status(200).json(book)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}


// delete one
const deleteBook = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such book'})
    }

    const book = await Books.findByIdAndDelete({ _id: id })

    if(!book) {
        return res.status(404).json({error: 'No such book'})
    }
    res.status(200).json(book)
}


// update one
const updateBook = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such book'})
    }

    const book = await Books.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })

    if(!book) {
        return res.status(404).json({error: 'No such book'})
    }
    res.status(200).json(book)
}


module.exports = {
    saveBook,
    getBooks,
    getBook,
    deleteBook,
    updateBook
}