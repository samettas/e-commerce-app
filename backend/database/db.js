const mongoose = require("mongoose");

const uri = "mongodb+srv://eticaretapp:1@ecommercedb.d2htioc.mongodb.net/?retryWrites=true&w=majority"

const connection = () => {
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>console.log("Basarili"))
    .catch((err)=>console.log("Hata :" + err.message));
}

module.exports = connection;