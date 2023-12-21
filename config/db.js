import mongoose from "mongoose";
import colors  from "colors";
const connectdb = async()=>{
    try{
const con = await mongoose.connect(process.env.Mongo_URL)
console.log(
    `Connected to Mongosb Database ${con.connection.host}`.bgMagenta.white);
    }
    catch(e){
        colors.zalgo(`Eroor in mongo ${e}`.bgRed.white);
    }
}
export default connectdb