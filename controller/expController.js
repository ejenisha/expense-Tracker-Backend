const Expenses=require('../model/expenseModel')
exports.getExp = async (req, res) => {
    const userEmail = req.userEmail; // Get the user email from the request (set by middleware)
    try {
        // Find the user by email and populate their expenses
        const user = await Users.findOne({ mail: userEmail }).populate('expenses');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({
            msg: "Success",
            data: {
                expenses: user.expenses,
                income: user.income
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching expenses' });
    }
};
exports.postExp = async (req, res) => {
    const newExp=await Expenses.create(req.body)
    res.status(200).json({
        msg:"Success",
        data:{
            newExp
        }
    })
    
};
exports.updateExp=async(req,res)=>{
    const {id}=req.params;
    const updatedExp=await Expenses.findByIdAndUpdate(id,req.body,{new:true,runValidatiors:true});
    res.status(200).json({
        message:"success",
        data:{
            updatedExp
        }
    })
}
exports.deleteExp=async(req,res)=>{
   const {id}=req.params;
   const deleteExp=await Expenses.findByIdAndDelete(id);
   res.status(200).json({
     message:"Success",
     data:{
        deleteExp
     }
   })
}