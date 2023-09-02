const express = require('express')
const app = express()
const PORT = 3001
const groceriesRoute = require('../routes/groceries')
const marketsRoute = require('../routes/markets')

app.use(express.json())
app.use(express.urlencoded())

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}`)
    next()
})

app.use('/api/groceries', groceriesRoute)
app.use('/api/markets', marketsRoute)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})




