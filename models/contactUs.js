const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactForm = new Schema({
 
    
    firstName: {
        type:String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    },  

    company: {
        type:String,
        required: true

    },

    email: {
        type:String,
        required: true
    },

    subject:{
        type:String,
        required: true
    },

    message:{
        type:String,
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model('ContactUs',contactForm)