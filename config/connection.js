// All good here

const mysql = require("mysql");
var dotenv = require("dotenv");



// set up the connections
var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Liam2009",
    database: "burgers_db"
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



