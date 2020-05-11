const express = require("express");
const router = express.Router();

const Checking = require('../../models/checking');
const Order = require('../../models/order')
const Note = require('../../models/note')

router.post("/add", (req, res) => {

    const newChecking = new Checking({
        order: new Order(req.body.order),
        finished: false
    });

    newChecking.save().then(() => res.json(newChecking))
        .catch(err => console.log(err))
});

// Lists all checkings
router.get('/', (req, res) =>{
    Checking.find()
        .then(checkings => res.json(checkings))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Adds a note to checking by id
router.put('/addnote/:id', (req, res) => {
    Checking.findOneAndUpdate({_id: req.params.id}, {$push: {notes: new Note( {note: req.body.note, noteDate: Date.now}) }})
         .then(() => res.json("Succesfully accepted!"))
         .catch(err => res.status(400).json('Error ' + err));
})

// Sets the finished option to true
router.put('/finished/:id', (req, res) => {
    Checking.findOneAndUpdate({_id: req.params.id}, {finished : true})
         .then(() => res.json("Succesfully accepted!"))
         .catch(err => res.status(400).json('Error ' + err));
})

// Deletes a checking by id
router.delete("/delete/:id", (req, res) => {
    Checking.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json('Successfully deleted.'))
        .catch(err => res.status(400).json('Error ' + err))
});

// Finds a checking's items by id checking_id
router.get('/items/:id', (req, res) => {
    Checking.findOne({_id : req.params.id})
        .then(checking => res.json(checking.order.items))
        .catch(err => console.log(err));
});

// Finds a checking's order by id checking_id
router.get('/order/:id', (req, res) => {
    Checking.findOne({_id : req.params.id})
        .then(checking => res.json(checking.order))
        .catch(err => console.log(err));
});

module.exports = router;