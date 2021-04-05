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
            response.status(400).send({ "message": "failed to insert data", "status": "fail" })
            return;
        }
        response.status(201).send({"message":"Registered successfully","status":"success"})
        // client.end();
    });

})
router.post('/signin', (request, response) => {
    console.log("request", request)
    const query = `select * from signuptable where email=$1`
    client.query(query, [request.body.email], (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        else{
            if (res.rows.length<1)
            {
                response.status(404).send({"message" : "User not found", "status": "fail"})
            }
            else if (request.body.password !== res.rows[0].password)
            {
                response.status(400).send({ "message": "password not matched", "status": "fail" })
            }
            else
            {
                response.status(200).send({"message":"loged in succesfully", "status":"success"})
            }
        }
        // client.end();
    });
})

module.exports = router