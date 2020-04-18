const express = require("express")
const router = express.Router()
const ObjectId = require("mongodb").ObjectID

const Order = require("../../models/order")

router.post("/add", (req, res) => {
    const newOrder = new Order({
        userEmail: req.body.userEmail,
        userId: new ObjectId(req.body.userId),
        address: req.body.address,
        items: req.body.items,
        price: req.body.price,
        currency: req.body.currency,
        orderDate: req.body.orderDate
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
})

module.exports = router;