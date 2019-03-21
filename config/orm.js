// import the connection

// methods for necessary MySql commands
// selectAll()
// insertOne()
// updateOne()

// export the orm


// Import the MySql connection 
const connection = require("../config/connection.js");


// create a ORM
const orm = {
    selectAll: function(table, callback){
        let queryString = "SELECT * FROM " + table;
        
        connection.query(queryString, function(err, results){
            if(err) {
                throw err;
            }
            callback(results);
        })
    },



    insertOne: function(table, cols, vals, callback){
        let queryString = "INSERT INTO " + table + "(" + column + ") VALUES (?);";
        console.log(queryString);

        connection.query(queryString, function(err, results) {
            if (err) {
                throw err;
            }
            callback(results)
        });
    },

    updateOne: function(table, col, colValue, condition, conditionValue, callback){
        let queryString = 'UPDATE ' + table + ' SET ' + col + '=?' + 'WHERE ' + condition + '=?';

        connection.query(queryString,[conditionValue], function(err, results){
            if (err) {
                throw err;
            }
            callback(results)
        });
    }

}

module.exports = orm;




  