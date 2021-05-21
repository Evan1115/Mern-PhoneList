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

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    List.findByIdAndDelete(id)
        .then(() => res.json("list deleted!"))
        .catch(err => res.status(400).json('Error:' + err))
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    List.findById(id)
        .then(list => res.json(list))
        .catch(err => res.status(400).json("Error:" + err))
})

router.post('/update/:id', (req, res) => {
    const id = req.params.id

    const username = req.body.username
    const phonenumber = req.body.phonenumber

    List.findById(id)
        .then(list => {
            list.username = username
            list.phonenumber = phonenumber

            list.save()
                .then(() => res.json("list updated!"))
                .catch(err => res.status(400).json('Error:' + err))
        })
        .catch(err => res.status(400).json("Error:" + err))
})

module.exports = router;