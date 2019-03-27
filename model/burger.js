// import orm
var orm = require("../config/orm.js");

// create the code that will call the ORM functions
var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },

    insertOne: function(name, callback) {
        orm.insertOne("burgers", "burger_name", name, function(res) {
            callback(res);
        });
    },

    updateOne: function(newID, callback) {
        orm.updateOne("burgers", "devoured", true, newID, function(res) {
            callback(res)
        });
    }
};


module.exports = burger;
