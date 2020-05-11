const mongoose = require("mongoose")
const Schema = mongoose.Schema


const NoteSchema = new Schema({
    note : {type: String, required: true},
    noteDate: {type: Date, default: Date.now}
});

module.exports = Note = mongoose.model("notes", NoteSchema);