const express = require('express')
const router = express.Router()
const { Client } = require('pg')

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

router.post('/signup', (request, response)=>{
    console.log("req", request)
    const { fullname, username, email, password} = request.body
        const query = `
    INSERT INTO signuptable (fullname, username, email, password)
    VALUES ($1, $2,$3, $4)`

    client.query(query, [fullname, username, email, password],(err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        response.status(201).send('Data insert successful')
        client.end();
    });

})

module.exports = router