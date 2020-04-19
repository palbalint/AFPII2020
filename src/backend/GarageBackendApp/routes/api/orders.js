const express = require("express")
const router = express.Router()
const ObjectId = require("mongodb").ObjectID

const Order = require("../../models/order")

calculatePrice = (items) => {
    var sum = 0
    for(let i = 0; i < items.length; i++){
        var obj = items[i]
        for(var prop in obj){
            if(prop === "price"){
                sum += obj[prop]
            }
            
        }
    }
    return sum
}

//Place new order
router.post("/add", (req, res) => {

    

    const newOrder = new Order({
        userEmail: req.body.userEmail,
        userId: new ObjectId(req.body.userId),
        address: req.body.address,
        items: req.body.items,
        price: calculatePrice(req.body.items),
        currency: req.body.currency
    });

    newOrder.save().then(() => res.json(newOrder))
        .catch(err => console.log(err))
});
//List orders belongs to the user with id passed in URL
router.get("/orders/:id", (req, res) => {
    Order.find({userId: req.params.id})
        .then(order => res.json(order))
        .catch(err => console.log(err))
});
//Lists all orders
router.get("/", (req, res) => {
    Order.find()
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json('Error ' + err))
});
//Deletes an order by id
router.delete("/delete/:id", (req, res) => {
    Order.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json('Success.'))
        .catch(err => res.status(400).json('Error ' + err))
});
//Modifies an order's data
router.put("/modify/:id", (req, res) => {
    Order.findOneAndUpdate({_id: req.params.id}, {
        address: req.body.address,
        items: req.body.items,
        price: calculatePrice(req.body.items),
        currency: req.body.currency
    }).then(() => res.json(res.body))
        .catch(err => res.status(400).json('Error ' + err))
})

module.exports = router;