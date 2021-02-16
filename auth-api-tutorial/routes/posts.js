const router = require('express').Router();
const verify = require('./verifyToken');

// http://localhost:3001/api/posts
//By adding the verify, we made this route private that requires a token
router.get('/', verify, async(req,res) => {
    res.json({
        posts:{
            title: 'my first post',
            description: 'data you shouldnt be able to access'
        }
    })
});


module.exports = router;