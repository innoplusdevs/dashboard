const mongoose = require('mongoose');



const dbConnection = async () => {

    try {
        await mongoose.connect('mongodb://localhost/dashboard', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false

        });

    } catch (error) {
        console.log(error);
        throw new Error("Error initializing database");
    }



}



module.exports = dbConnection;