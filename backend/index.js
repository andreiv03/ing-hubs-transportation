require("dotenv").config()

const express = require("express")
const app = express()
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/hack", { useNewUrlParser: true })
const db = mongoose.connection
db.once("open", () => console.log("Connected to database"))

app.use(express.json())

// Routers
const UsersRouter = require("./routes/Users")
app.use("/users", UsersRouter)

app.listen(3000, function() {
    console.log("Server started on port 3000");
});