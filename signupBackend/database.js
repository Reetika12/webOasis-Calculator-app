const { Pool, Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'calculatordb',
    password: 'postgres',
    port: 5432,
})
client.connect((error)=>{
    if(error)
    {
        console.log(error)
    }
    else{
        console.log("database connected")
    }
})
const query = `
CREATE TABLE signuptable (
    fullName varchar,
    userName varchar,
    email varchar,
    password varchar
);
`;

client.query(query, (err, res) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log("table created")
    client.end()
})

