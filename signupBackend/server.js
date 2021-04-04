const express = require('express')
const app = express()
const { Pool, Client } = require('pg')
const routeUrls = require('./routes/routes')
const cors = require('cors')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'calculatordb',
    password: 'postgres'
})
client.connect((error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log("database connected")
    }
})
app.use(express.json())
app.use(cors())
app.use('/app', routeUrls)

app.listen(3001, ()=>console.log("server is up and running"))