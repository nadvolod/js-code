const router = require('express').Router();
const User = require('../model/Users');
const {DataValidation} = require('../dataValidation')


//app.use('/api/register'
router.post('/register', async(req, res) =>{
    //Validate that the body content matches our requirements
    const {error} = DataValidation.registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //check to make sure that user doesn't exist
    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send('Email already registered');

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
})

module.exports = router;