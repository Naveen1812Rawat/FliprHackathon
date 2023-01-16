const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`Hello world from the server router js`);
});

// Registration Route
router.post("http://flipr-hackathon1.onrender.com/login", (req, res)=>{
    const { username, password} = req.body;
    console.log(req.body);
    if(!username || !password){
        return  res.status(422).json({error: "Input Fields are missing"});
    }

    User.findOne({ username: username})
        .then((userExists)=>{
            if(userExists){
                return res.status(422).json({error: "Email Already Exists" });
            }

            const user = new User({username, password});
            user.save().then(()=>{
                res.status(201).json({ message: "User Registered Successfully" });
                console.log(res.json());
            }).catch((err)=>{
                res.status(500).json({ error: "Failed to register"});
            })
        }).catch(err => {console.log(err); });

});

// Login Route

router.post('http://flipr-hackathon1.onrender.com/login', (req, res)=>{
    const { username, password} = req.body;

    if(!username || !password){
        return  res.status(422).json({error: "Input Fields are missing"});
    }

    User.findOne({username: username})
        .then((userLogin)=>{
            res.status(201).json({ message: `User's database found`});
        }).catch(err => {console.log("Invalid User"); });
    
    User.findOne({password: password})
    .then((userLogin)=>{
        res.status(201).json({ message: `User's database found`});
    }).catch(err => {console.log("Invalid User"); });
});

module.exports = router;