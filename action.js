const express = require('express');
const { status } = require('express/lib/response');
const res = require('express/lib/response');
const router = express.Router();



let user =[];
router.post('/register',(req,res) => {
    
    const {email,password} = req.body;

    const data=user.filter(x=>x.email=='zead')

    user.push({email:email,password:password});

    return res.status(200).json({
        message:user        
    });
})

router.get('/greeting', (req,res) => {

    return res.status(200).json({
        message: 'welcome to my API'
    })

});

router.get('/greeting1', (req,res) => {

    return res.status(200).json({
        message: 10*10
    })

});


module.exports = router;