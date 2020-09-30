const router = require('express').Router();

//final url will be host/api/user/register
//coming from app.use('/api/user', authRoute); in index.js
router.post('/register', (req,res) => {
    res.send('Register')
})

//final url will be host/api/user/login
//coming from app.use('/api/user', authRoute); in index.js
router.post('/login', (req,res) => {
    res.send('Login')
})

module.exports = router;