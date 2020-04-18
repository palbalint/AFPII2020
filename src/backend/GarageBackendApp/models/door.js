const mongoose = require("mongoose")
const Schema = mongoose.Schema

const DoorSchema = new Schema({
    height: {type: Number, required: true},
    width: {type: Number, required: true},
    price: {type: Number, required: true},
    currency: {type: String, required: true}
});

module.exports = Door = mongoose.model("doors", DoorSchema);
