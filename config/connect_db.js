const mongoose = require('mongoose')
const connect = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
         console.log('Database connect');

    } catch(error){
        console.log('Database not connect');
    }

};

module.exports = connect;

