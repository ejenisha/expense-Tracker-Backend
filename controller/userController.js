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