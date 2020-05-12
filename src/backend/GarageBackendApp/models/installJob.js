const mongoose = require("mongoose")
const Schema = mongoose.Schema


const InstallJobSchema = new Schema({
    order: {type: Schema.Types.Mixed, required: true},
    installDate: {type: Date, required: true},
    month: {type: Number, required: true}
});

module.exports = InstallJob = mongoose.model("installjobs", InstallJobSchema);