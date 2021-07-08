const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const Userdb = new mongoose.Schema({
    id: Number,
    email: String,
    username:String,
    password: String,

});

Userdb.pre('save', async function (next){

    if(!this.isModified('password')) next();

    this.password = await bcrypt.hash(this.password, 8);

});

Userdb.methods = {
    compareHash(hash){
        return bcrypt.compare(hash, this.password);
    },
};


Userdb.statics = {
    generateToken({id}){
        return jwt.sign({id}, 'msouza', {
            expiresIn:'7d', 
        });  
    },
};

module.exports = mongoose.model('User', Userdb);