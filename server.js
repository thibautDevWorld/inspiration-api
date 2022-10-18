require('dotenv').config()

const apiRequest = require('./routes/apiRequest')
const mongoose = require('mongoose')
const express = require('express')

// express app
const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

app.use(express.json())

//routes
app.use('/api', apiRequest)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port ', process.env.PORT);
        })
    })
    .catch(error => console.log(error))

//listen for requests


