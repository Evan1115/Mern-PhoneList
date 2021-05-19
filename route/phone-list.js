const express = require('express');
const router = express.Router();
const List = require("../model/phone-list.model");

router.get('/', (req, res) => {
    List.find()
        .then(lists => res.json(lists))
        .catch(err => res.status(400).json('Error:' + err));

});

router.post('/add', (req, res) => {
    const username = req.body.username;
    const phonenumber = req.body.phonenumber;

    const newList = new List({
        username: username,
        phonenumber: phonenumber
    })

    newList.save()
        .then(() => res.json("list added!"))
        .catch(err => res.status(400).json('Error:' + err));
})

module.exports = router;