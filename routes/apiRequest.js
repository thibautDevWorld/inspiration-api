const express = require('express')
const router = express.Router()


// Homepage --- will populate some books and some movies later
router.get('/', (req, res, next) => {
    res.json({message: 'You are in the homepage'})
})


// Userpage --- will populate some books and some movies later
router.get('/user', (req, res, next) => {
    res.json({message: 'You are in the user page'})
})


// Looking for extern Api books 
router.post('/user/book-create', (req, res, next) => {
    res.json({message: 'You are looking for a book'})
})

// Create the book that you selected from googleBooks API
router.post('/user/book-create/add', (req, res, next) => {
    res.json({message: 'Here it is your new book created'})
})


// Upload the book that need to be modify
router.get('/user/:bookId/edit', (req, res, next) => {
    res.json({message: 'Here it is the previous book selected'})
})

// Update the previous book
router.patch('/user/:bookId/edit', (req, res, next) => {
    res.json({message: 'The book has been modify'})
})

// Go inside a anonymous profile
router.get('/:userId', (req, res, next) => {
    res.json({message: 'You are in the profile n°'})
})

// Delete book
router.delete('/user/:bookId', (req, res, next) => {
    res.json({message: 'You deleted the book'})
})



module.exports = router