import express from "express";
import dotenv from "dotenv";
// import morgan from "morgan";
import authrouter from "./router/Authrouter.js";
import categoryrouter from "./router/Categoryrouter.js";
import Productrouter from "./router/Productrouter.js";

import connectDB from "./db/config.js";




const app = express();

dotenv.config({path:'./config.env'});





app.use(express.json());
// app.use(morgan("dev"));


app.use("/api/v1/auth",authrouter);
app.use("/api/v1/category",categoryrouter);
app.use("/api/v1/product",Productrouter);
dotenv.config();

connectDB();


app.get('/', (req, res) => {
    res.send('Hello World');
  });

//PORT
const PORT = process.env.PORT || 8080;

//run listen

app.listen(PORT, () => {
    console.log(
        `Server Running on mode on port ${PORT}`.bgCyan.white
    );
});