const express = require('express')
const router = express.Router()

const Books = require('../models/Books')
const User = require('../models/User')
const axios = require('axios')
const { saveBook, getBooks, getBook } = require('../controllers/booksController')


// Get the list of books from the db
router.get('/', getBooks)

// Post a new Book from googleBooks -- not finished yet
router.post('/', saveBook)

// Get a single book 
router.get('/:id', getBook)


// Looking for extern Api books 
router.post('/book-create', async (req, res, next) => {
   const { search } = req.body

   try {
    const bookSearch = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
    res.json(bookSearch.data.items) 
   }
   catch (error) {
    res.status(400).json({message: error.message})
   }
})



// // Create the book that you selected from googleBooks API
// router.post('/user/book-create/add', async (req, res, next) => {
//     let newBook = {
//         bookId: req.body.bookId,
//         title: req.body.title,
//         author: req.body.author,
//         cover: req.body.cover
//       }    //   const { bookId, title, author, cover } = req.body

//       try {
//         const book = await Books.create(newBook)
//         // let id = book._id
//         // User.findByIdAndUpdate(req.session.user._id, {$push: { books: id }})
//         res.status(200).json(book)
//       }
//       catch (error) {
//         res.status(400).json({error: error.message})
//       }
// })


// // Upload the book that need to be modify
// router.get('/user/:bookId/edit', (req, res, next) => {
//     res.json({message: 'Here it is the previous book selected'})
// })

// // Update the previous book
// router.patch('/user/:bookId/edit', (req, res, next) => {
//     res.json({message: 'The book has been modify'})
// })

// // Go inside a anonymous profile
// router.get('/:userId', (req, res, next) => {
//     res.json({message: 'You are in the profile n°'})
// })

// // Delete book
// router.delete('/user/:bookId', (req, res, next) => {
//     res.json({message: 'You deleted the book'})
// })



module.exports = router