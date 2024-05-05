import mongoose, { connection } from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_DB_URI!);
        const db = mongoose.connection;
        connection.on("connected", ()=>{
            console.log(`Mongoose connected Successfully`)
        })
        connection.on("error", (err)=>{
            console.log(`Error Connecting to Mongo DB: ${err}`)
            process.exit();
        })
        
    } catch (error) {
        console.log("Something went wrong");
        console.log(error);
        
    }
}