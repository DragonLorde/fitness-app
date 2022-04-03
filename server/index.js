import express from "express";
import 'dotenv/config';
import cors from 'cors';
import mongoose from "mongoose";
import router from "./router/Router.js";

const app = express();
const port = process.env.PORT;

app.use(express.json( {extended:false} ));
app.use(cors());
app.use('/api' , router);

async function startApp() {
    try {
        await mongoose.connect( process.env.MONGO_URL, {
            useUnifiedTopology:true,
            useNewUrlParser:true,
        }, () => console.log('db connect'));
        app.listen(port , () => console.log('server is start port ' + port));
    } catch(e) {
        console.log(e);
    }
}

startApp();