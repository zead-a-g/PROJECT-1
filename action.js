const express = require('express');
const router = express.Router();

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