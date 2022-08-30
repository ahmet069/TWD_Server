let mysql = require('mysql');
require('dotenv').config();


function connect(conn){
    conn.connect(function(err) {
        if(err) throw err;
        console.log('connected')
    })
}

module.exports = connect;