# NodeJS
NodeJS stuff
A basic server setup that read index.html in \public directory and serves up to the web.
use "localhost:3000" as the url

const path = require('path')

const express = require('express')

const app = express()

const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})
