require('dotenv').config()

const apiRequest = require('./routes/apiRequest')

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

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port ', process.env.PORT);
})

