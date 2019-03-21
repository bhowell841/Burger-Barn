// import orm
const orm = require("../config/orm.js");

// create the code that will call the ORM functions
var burger = {
    all: function(callback) {
        orm.all("burgers", function(res) {
            callback(res);
        });
    },

    create: function(cols, vals, callback) {
        orm.create("burgers", cols, vals, function(res) {
            callback(res);
        });
    },

    update: function(cols, vals, id, callback) {
        orm.update("burgers", col, vals, id, function(res) {
            callback(res)
        });
    }
};


module.exports = burger;





// export the burger.js