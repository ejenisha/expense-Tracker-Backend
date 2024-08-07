const express=require('express');
const router=express.Router();
const exproutes=require('../controller/expController');
router.route('/')
.get(exproutes.getExp)
// .post(exproutes.postExp)
// router.route('/:id')
// .delete(exproutes.deleteExp)
// .patch(exproutes.updateExp)
module.exports = router;