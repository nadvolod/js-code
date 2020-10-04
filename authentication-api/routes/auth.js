const router = require('express').Router();
const User = require('../model/Users');

//final url will be host/api/user/register
//coming from app.use('/api/user', authRoute); in index.js
router.post('/register', async(req,res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    //trying to save the user
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch (err){
        res.status(400).send(err);
    }
});

module.exports = router;