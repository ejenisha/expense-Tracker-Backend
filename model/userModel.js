const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
   
    
});

const Users = mongoose.model('Users', userSchema); // Changed from 'sample' to 'Attendance'
module.exports = Users;
