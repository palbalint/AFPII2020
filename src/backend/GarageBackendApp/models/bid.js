const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BidSchema = new Schema({
    total_price: {type: Number, required: true},
    date: {type: Date, required: true},
    user_id: {type: String, required: true},
    order_id: {type: String, required: true},
    accepted: {type: Boolean}
});

module.exports = Bid = mongoose.model("bids", BidSchema);