//connects the mongoDB storage to out appimport mongoose, { Connection } from 'mongoose';

import mongoose, { Connection } from 'mongoose';

// Connects the MongoDB storage to our app
let isConnected: Connection | boolean = false;

const connectDB = async () => {
    if (isConnected) {
        console.log("MongoDB already connected");
        return isConnected;
    }
    try {
        const res = await mongoose.connect(process.env.MONGO_URI!);
        isConnected = res.connection;
        console.log("MongoDB connected");
        return isConnected;
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
