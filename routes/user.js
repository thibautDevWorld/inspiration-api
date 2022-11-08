const express = require('express')

const router = express.Router()

const { signupUser, loginUser } = require('../controllers/userControllers')

// login route
router.post('/login', loginUser, cors())

// signup route
router.post('/signup', signupUser)




module.exports = router