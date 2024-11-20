

var mongoose = require('mongoose')
function dbconnection(){
    var connection = mongoose.connect("mongodb://127.0.0.1:27017/productDetails")
}

module.exports = dbconnection