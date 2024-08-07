const mongoose = require('mongoose');

const expSchema = mongoose.Schema({
    categories:String,
    date:Date,
    description:String,
    amount:Number
    
});

const Expenses = mongoose.model('Expenses', expSchema); // Changed from 'sample' to 'Attendance'
module.exports = Expenses;
