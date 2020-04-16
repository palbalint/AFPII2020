const mongoose = require("mongoose")
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    userEmail: {type: String, required: true},
    address: {type: String, required: true},
    items: {type: Object, required: true},
    price: {type: Number, required: true},
    orderDate: {type: Date, default: Date.now}
});

module.exports = Order = mongoose.model("orders", OrderSchema);