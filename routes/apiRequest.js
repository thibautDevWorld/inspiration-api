const express = require('express')
const router = express.Router()

const Books = require('../models/Books')
const User = require('../models/User')
const axios = require('axios')
const { saveBook, getBooks, getBook, deleteBook, updateBook } = require('../controllers/booksController')

const requireAuth = require('../middleware/requireAuth')


// require auth for all inspiration routes
router.use(requireAuth)

// Get the list of books from the db
router.get('/', getBooks)

// Post a new Book from googleBooks -- not finished yet
router.post('/', saveBook)

// Get a single book 
router.get('/:id', getBook)

// Get a single book 
router.delete('/:id', deleteBook)

// Get a single book 
router.patch('/:id', updateBook)


// Looking for extern Api books 
router.post('/book-create', async (req, res, next) => {
   const { search } = req.body

   try {
    const bookSearch = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40`)
    res.json(bookSearch.data.items) 
   }
   catch (error) {
    res.status(400).json({message: error.message})
   }
})

router.get("/home/user/book-create", (req, res, next)=>{
   res.json({books: response.data.items})
})

 router.post("/home/user/book-create/add", (req, res, next)=>{
   let newBook = {
     bookId: req.body.bookId,
     title: req.body.title,
     author: req.body.author,
     cover: req.body.cover
   }

   Books.create(newBook)
   .then(book => {
     let id = book._id
     return User.findByIdAndUpdate(req.session.user._id, {$push: {books: id}})
   })
   .then(()=>{
     res.redirect("/home/user")
   })
    .catch(error => {
     console.log("error creating Book in DB", error);
     next(error);
   })
})



module.exports = router