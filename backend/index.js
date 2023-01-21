const express = require('express');
const cors = require("cors")
require("dotenv").config()

const app = express();
const PORT = 8080 || process.env.PORT
app.use(express.json())
app.use(cors())


const {connection} = require("./config/db");
const { categoryController } = require('./routes/category.routes');

app.get("/",(req,res) => {
    res.send("HOMEPAG OF SPACE X")
})

app.use("/category" , categoryController )


app.listen( PORT , async ()=> {

    console.log(`Lintening to Port :-${PORT}`)
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
})