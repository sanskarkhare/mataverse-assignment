const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    phoneNo: {
        type: String,
        required: true,
        trim: true,
        maxlength: 15
    },
    
}
, {
    timestamps: true
}
)

module.exports = mongoose.model('contact', contactSchema)