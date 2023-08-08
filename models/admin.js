const mongoose = require('mongoose');
const Tableschema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    pages : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    }
})
const Record = mongoose.model('Record',Tableschema);
module.exports = Record;