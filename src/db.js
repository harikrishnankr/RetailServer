import mongoose from "mongoose";
import { MONGO_DB_URL, MONGO_OPTIONS } from "./config";

let count = 0;
export const connectDBWithRetry = () => {
    mongoose
    .connect(MONGO_DB_URL, MONGO_OPTIONS)
    .then(() => console.log('MongoDB is connected'))
    .catch((err) => {
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count, err);
        setTimeout(connectDBWithRetry, 5000)
    })
};
