
// Import the MySql connection 
const connection = require("../config/connection.js");


// create a ORM
var orm = {
    selectAll: function(table, callback){
        let queryString = "SELECT * FROM " + table;
        console.log(queryString);
        connection.query(queryString, function(err, results){
            if(err) {
                throw err;
            }
            callback(results);
        });
    },



    insertOne: function(table, cols, vals, callback){
        let queryString = "INSERT INTO " + table + " (" + cols + ") VALUES ('" + vals + "');";
        
        console.log(queryString);

        connection.query(queryString, vals, function(err, results) {
            if (err) {
                throw err;
            }
            callback(results)
        });
    },

    updateOne: function(table, cols, vals, equal, callback){
        let queryString = 'UPDATE ' + table + ' SET ' + cols + " = " + vals + " where id = " + equal;
 
        console.log(queryString);
        
        connection.query(queryString, vals, function(err, results){
            if (err) {
                throw err;
            }
            callback(results)
        });
    },  

}

module.exports = orm;




  