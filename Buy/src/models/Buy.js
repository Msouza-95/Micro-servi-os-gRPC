const mongoose = require('mongoose');


const Buydb = new mongoose.Schema({
    userId: String,
    title: String,
    value:Number,

    
});





module.exports = mongoose.model('Buy', Buydb);