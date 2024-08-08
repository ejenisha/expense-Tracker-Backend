const express=require('express');
const router=express.Router();
const exproutes=require('../controller/expController');
const User=require('../model/userModel')
router.use(async (req, res, next) => {
    try {
        req.user = await User.findOne({ email: req.headers.email });
        if (!req.user) {
            return res.status(400).json({ message: 'User not found' });
        }
        next();
    } catch (err) {
        res.status(400).json(err);
    }
});
router.route('/')
.get(exproutes.getExp)
.post(exproutes.postExp)
router.route('/:id')
.delete(exproutes.deleteExp)
.patch(exproutes.updateExp)
module.exports = router;