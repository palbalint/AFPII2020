const express = require("express");
const router = express.Router();


const Bid = require("../../models/bid");

router.post("/add", (req, res) => {

    const newBid = new Bid({
        total_price: req.body.total_price,
        accepted: false,
        date: Date.now()
    });

    newBid.save().then(() => res.json(newBid))
        .catch(err => console.log(err));
});

router.get('/:id', (req, res) => {
    Bid.findById(req.params.id)
        .then(bid => res.json(bid))
        .catch(err => console.log(err));
});

router.get('/', (req, res) =>{
    Bid.find()
        .then(bids => res.json(bids))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
    Bid.findByIdAndDelete(req.params.id)
        .then(bid => res.json('Bid deleted!'))
        .catch(err => res.status(400).json('Error' + err));
});



module.exports = router;