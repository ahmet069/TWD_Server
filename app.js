const express = require('express');
const port = process.env.PORT || 2611;
const app = express();
app.use(express.json());
const connect = require('./src/connect')
const setQuestion = require('./src/setQuestion')
let mysql = require('mysql');

const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
})
require('dotenv').config();

app.listen(port, () => {
    console.log('port is ready')
})


app.get('/', (req, res) => {
    connect(conn)
    setQuestion(conn , res)
})

app.get('/test', (req, res) => {
    res.send('çalıştı')
})