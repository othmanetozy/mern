import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose";
import ReservationRouter from "./routes/reservationRoute.js";



const app = express()
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//Routes : 
//app.use('/api/auth/' ,ReservationRouter);
app.use('/api/auth/' ,ReservationRouter);


//connexion au mongodb : 
dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(() =>{
            console.log("connecter avec succes avec la BD!")
    }).catch((error) => {
        console.log(error.message)
    })

    
//creation du port 
const port = process.env.PORT || 5000;
app.listen(port,() =>{
    console.log(`Server running at http://localhost:${port}`);
})    