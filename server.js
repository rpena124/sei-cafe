require('dotenv').config()
const express = require('express')
//facicon will need path
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const PORT = process.env.PORT || 3001

const app = express() 

//req.body
app.use(express.json())
app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

/*
    app.use('/api', routes) <=== finish code once you got it
 */
app.get('/api/test', (req, res) => {
    res.json({'eureka': 'you have found it'})
})

app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, ()=>{
    console.log(`I am listening on ${PORT}`)
})