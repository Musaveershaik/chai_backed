import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { error } from "console";

dotenv.config({
    path: './.env'
});

connectDB()
.then(() => {
    app.on('error',(error) => {
        console.log("ERROR",error);
        throw error;
    });
    app.listen(process.env.PORT || 3000, () => {
        console.log(`⚙️ Server is running on port ${process.env.PORT || 3000}`);
    });
})
.catch((error) => {
    console.log(`Mongo DB connection error: ${error}`);
})