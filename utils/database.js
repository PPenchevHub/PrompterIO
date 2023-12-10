import mongoose, { mongo } from "mongoose"

let isConnected = false //track the connection

export const connectToDB = async () =>{
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("MongoDB is connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: 'share_prompt',
            useNewUrlParser: true,
            usiUnifiedTopology: true,
        })
        isConnected = true;
        console.log("MongoDb is connected");
    } catch (error) {
        console.log(error)
    }

}