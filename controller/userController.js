const User=require('../model/userModel')
exports.signup=async(req,res)=>{
    const{email,password}=req.body;
    const existingUser=await User.findOne({email});
    if(existingUser){
        return res.status(400).json({msg:'User already exists'});
    }
    const newUser=await User.create({email,password})
    newUser.save();
    res.status(201).json({msg:'User created successfully'});
}
exports.login=async(req,res)=>{
    const{email,password}=req.body;
    const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Check if the provided password matches
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
}
exports.getBal=async(req,res)=>{
    const{email}=req.headers;
    const userbal = await User.findOne({ email });
    res.status(200).json(userbal)
}
exports.updateBal = async (req, res) => {
    const { email}=req.headers;
        const {balance } = req.body;
  
    try {
      const user = await User.findOneAndUpdate({ email }, { balance }, { new: true });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'Balance updated successfully', balance: user.balance });
    } catch (error) {
      console.error('Error updating balance:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };