const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")

const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database Connected")
    })
    .catch(error => console.log(error))
    

app.listen("5000", () => {
        console.log("Server running")
    })