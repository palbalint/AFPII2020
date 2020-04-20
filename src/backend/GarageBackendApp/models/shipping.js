const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ShippingSchema = new Schema({
    order: {type: Object, required: true}, //contains order object
    deadline: {type: Date, required: true},
    address: {type: Object, required: true}
});

module.exports = Shipping = mongoose.model("shipping", ShippingSchema);