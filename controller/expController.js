const Expenses=require('../model/expenseModel')
exports.getExp=async (req,res)=>{
    const exp=await Expenses.find()
    res.status(200).json({
        msg:"Success",
        data:{
            exp
        }
    })
}
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