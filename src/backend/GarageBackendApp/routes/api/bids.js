const express = require("express");
const router = express.Router();


const Bid = require("../../models/bid");

// Adds a bid to database
router.post("/add", (req, res) => {

    const newBid = new Bid({
        total_price: req.body.total_price,
        user_id: req.body.user_id,
        order_id: req.body.order_id,
        date: Date.now() 
    });

    newBid.save().then(() => res.json(newBid))
        .catch(err => console.log(err));
});

// Searches for a bid by user_id
router.get('/:id', (req, res) => {
    Bid.findOne({user_id : req.params.id})
        .then(bid => res.json(bid))
        .catch(err => console.log(err));
});

// Lists all bids
router.get('/', (req, res) =>{
    Bid.find()
        .then(bids => res.json(bids))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Deletes a bid by its id
router.delete('/:id', (req, res) => {
    Bid.findByIdAndDelete(req.params.id)
        .then(bid => res.json('Bid deleted!'))
        .catch(err => res.status(400).json('Error' + err));
});

// Accepts a bid by its id
router.put('/accept/:id', (req, res) => {
    Bid.findOneAndUpdate({_id: req.params.id}, {accepted : true})
         .then(() => res.json("Succesfully accepted!"))
         .catch(err => res.status(400).json('Error ' + err));
})

// Rejects a bid by its id
router.put('/reject/:id', (req, res) => {
    Bid.findOneAndUpdate({_id: req.params.id}, {accepted : false})
         .then(() => res.json("Succesfully rejected!"))
         .catch(err => res.status(400).json('Error ' + err));
})



module.exports = router;