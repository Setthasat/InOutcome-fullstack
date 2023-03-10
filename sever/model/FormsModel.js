const mongoose = require('mongoose')

const FormsSchema = new mongoose.Schema({
    id : {
        type : String,
        require : true 
    },
    title : {
        type: String,
        require: true,
    },
    cost : {
        type: Number,
        require: true
    },
    date : {
        type: String,
        require: true
    },
    InOrOut : {
        type: String,
        require: true
    },
});

const FormsModel = mongoose.model("forms", FormsSchema)

module.exports = FormsModel;