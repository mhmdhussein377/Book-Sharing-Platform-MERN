const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const multer = require('multer');
const path = require('path');

const Book = require("./Models/Book")

// Routes
const AuthRoutes = require("./Routes/AuthRoutes")
const BookRoutes = require("./Routes/BookRoutes")
const UserRoutes = require("./Routes/UserRoutes")

const app = express()
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));
dotenv.config()
app.use(cors())

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database Connected")
    })
    .catch(error => console.log(error))

// Store images in the public folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    }
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
    res
        .status(200)
        .json("File has been uploaded");
});

app.use("/api", AuthRoutes)
app.use("/api/books", BookRoutes)
app.use("/api/users", UserRoutes)

app.listen(process.env.PORT, () => {
    console.log("Server running")
})
