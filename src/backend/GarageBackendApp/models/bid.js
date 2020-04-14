const mongoose = require("mongoose")
const Schema = mongoose.Schema
const user = require('./user');

const BidSchema = new Schema({
    total_price: {type: Number, required: true},
    accepted: {type: Boolean, required: true},
    date: {type: Date, required: true}
});

module.exports = Bid = mongoose.model("bids", BidSchema);