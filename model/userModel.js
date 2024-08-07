const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    mail:String,
    password:String
    
});

const Users = mongoose.model('Users', userSchema); // Changed from 'sample' to 'Attendance'
module.exports = Users;
