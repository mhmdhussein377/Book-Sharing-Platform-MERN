const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")

// Routes
const AuthRoutes = require("./Routes/AuthRoutes")
const BookRoutes = require("./Routes/BookRoutes")

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
    
app.use("/api", AuthRoutes)
app.use("/api/books", BookRoutes)

app.listen(process.env.PORT, () => {
        console.log("Server running")
    })