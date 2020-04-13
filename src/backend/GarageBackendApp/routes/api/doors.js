const express = require("express");
const router = express.Router();


const Door = require("../../models/door")

router.post("/add", (req, res) => {

    const newDoor = new Door({
        height: req.body.height,
        width: req.body.width,
        price: req.body.price,
        currency: req.body.currency
    });

    newDoor.save().then(res => res.json(door))
        .catch(err => console.log(err));
});

router.get("/all", (req, res) => {
    Door.find({}, (err, doors) => {
        if(err){
            res.send(err)
        }
        res.json(doors)
    })
})

module.exports = router;