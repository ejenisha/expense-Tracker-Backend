const express=require('express');
const router=express.Router();
const userroutes=require('../controller/userController');
router.route('/signup')
.post(userroutes.signup)
router.route('/login')
.post(userroutes.login)
module.exports = router;