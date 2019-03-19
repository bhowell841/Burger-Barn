// All good here

const mysql = require("mysql");

// set up the connections
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Liam2009",
    database: "burgers_db"
});

// Make a connection
connection.connect(err => {
    if (err) {
        console.error(`error connection: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

// Export the connection for the orm
module.exports = connection;



