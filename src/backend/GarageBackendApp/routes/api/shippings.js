const express = require("express");
const router = express.Router();

const Shipping = require("../../models/shipping");

getAddress = (order) => {
    var order_address = ""
    for(var prop in order){
        if(prop === "address"){
            order_address = order[prop]
        }
    }
    return order_address;
}

getDeadline = (order) => {
    for(var prop in order){
        if(prop === "orderDate"){
            var date = new Date(order[prop])
            date.setDate(date.getDate() + 14) //2 het a kiszallitas hatarideje a rendelestol szamitva
            return date
        }
    }
    return null
}
//Adds a shipping to database
router.post("/add", (req, res) => {

    const newShipping = new Shipping({
        order: req.body.order,
        address: getAddress(req.body.order),
        deadline: getDeadline(req.body.order)
    });

    newShipping.save().then(() => res.json(newShipping))
        .catch(err => console.log(err));
});
//Returns all shipping objects
router.get('/', (req, res) => {
    Shipping.find()
        .then(shipping => res.json(shipping))
        .catch(err => res.status(400).json('Error ' + err))
});
//Deletes a shipping by id
router.delete('/:id', (req,res) => {
    Shipping.findByIdAndDelete(req.params.id)
        .then(() => res.send('Successful deletion'))
        .catch(err => res.status(400).json('Error ' + err))
});
//Modifies a Shipping's address
router.put('/modify/:id', (req, res) => {
    Shipping.findByIdAndUpdate({_id: req.params.id}, {
        address: req.body.address
    }).then(() => res.send('Successful modification'))
        .catch(err => res.status(400).json('Eroor ' + err))
})


module.exports = router