const mongoose = require("mongoose");

const database = async () => {
    try {

        await mongoose.connect(MONGODB);
        console.log("Database connected successfully");

    }catch(error) {
        console.error(error);
        process.exit(1);

    }
}