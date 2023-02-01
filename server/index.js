import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";

const app = express() 
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())


app.use('/posts',postRoutes);
app.use('/user', userRoutes)
//app.use('/posts',(req,res)=>{
 //   res.send('Hello')
//})


const Connection_url="mongodb://Atharv:Atharvk7@ac-q2ugnmd-shard-00-00.nolkfur.mongodb.net:27017,ac-q2ugnmd-shard-00-01.nolkfur.mongodb.net:27017,ac-q2ugnmd-shard-00-02.nolkfur.mongodb.net:27017/?ssl=true&replicaSet=atlas-pigdk9-shard-0&authSource=admin&retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;
//app.listen(PORT,()=>console.log("server is running in a sexy way"))
mongoose.connect(Connection_url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT, ()=>console.log("Server is running on port 5000, Database is connected successfully")))
.catch((error)=>console.log(error.message));
//mongoose.set('useFindAndModify',false)

