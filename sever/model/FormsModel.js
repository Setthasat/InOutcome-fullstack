const mongoose = require('mongoose')

const FormsSchema = new mongoose.Schema({
    title : {
        type: String,
        require: true,
    },
    cost : {
        type: Number,
        require: true
    },
    date : {
        type: Date,
        require: true
    },
    InOrOut : {
        type: String,
        require: true
    },
});

const FormsModel = mongoose.model("forms", FormsSchema)

module.exports = FormsModel;