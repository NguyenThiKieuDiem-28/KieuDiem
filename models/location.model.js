const mongoose = require('mongoose')


 const locationSchema = new mongoose.Schema(
    {
    lat: {type: String},
    long: {type: String},
 },
 { timestamps: true}
 );

 const locationModel = mongoose.model('location', locationSchema);
 module.exports = locationModel;