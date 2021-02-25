const express = require('express')
const app = express()
const fs = require('fs')

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"))

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(PORT, () => {
console.log(`Example app listening at http://localhost:${PORT}`)
})