require('dotenv').config()

const apiRequest = require('./routes/apiRequest')
const mongoose = require('mongoose')
const express = require('express')
const userRoutes = require('./routes/user')

// express app
const app = express()
const cors = require('cors')



app.use('*',
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: "include"
    })
  );

app.use((req, res, next) => {
    res. header("Access-Control-Allow-Origin", "*");
    res. header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(express.json())

//routes
app.use('/api/books', apiRequest)
app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port ', process.env.PORT);
        })
    })
    .catch(error => console.log(error))

//listen for requests


