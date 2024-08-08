const mongoose = require('mongoose');

const expSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    categories:String,
    date:Date,
    description:String,
    amount:Number
 
    
});

const Expenses = mongoose.model('Expenses', expSchema); // Changed from 'sample' to 'Attendance'
module.exports = Expenses;
