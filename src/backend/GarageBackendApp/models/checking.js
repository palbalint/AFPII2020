const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Order = require('../models/order');

const CheckingSchema = new Schema({
    order: {type: Schema.Types.Mixed, required: true},
    notes: {type: Array.of(Schema.Types.Mixed)},
    finished: {type: Boolean}
});

module.exports = Checking = mongoose.model("checkings", CheckingSchema);