// All good here

const mysql = require("mysql");
// var dotenv = require("dotenv");

require('dotenv').config()

// set up the connections
var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // dotenv.load();

    connection = mysql.createConnection({
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,  
    database: process.env.DBDATABASE

});
}

// Make a connection
connection.connect(function(err) {
    if (err) {
        console.error(`Error connection: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadId}`);
});

// Export the connection for the orm
module.exports = connection;



