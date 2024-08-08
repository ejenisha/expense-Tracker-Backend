const Expenses=require('../model/expenseModel')
const User = require('../model/userModel');
exports.getExp=async (req,res)=>{
    const exp=await Expenses.find({ userId: req.user._id })
    res.status(200).json({
        exp
    })
}
exports.postExp = async (req, res) => {
    const { categories,date,description,amount } = req.body;
    console.log(req.body)
    console.log(req.user)
    console.log(req.user._id)
    try {
        const expense = new Expenses({
            userId: req.user._id,
            categories,
            date,
            description,
            amount
        });
        await expense.save();
        res.status(201).json(expense);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    
};
exports.updateExp=async(req,res)=>{
    const { categories,date,description,amount } = req.body;
    try {
        const expense = await Expenses.findByIdAndUpdate(req.params.id, { amount, description }, { new: true });
        res.status(200).json(expense);
    } catch (err) {
        res.status(400).json(err);
    }
}
exports.deleteExp=async(req,res)=>{
    try {
        await Expenses.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(400).json(err);
    }
}