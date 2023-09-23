const express = require("express");
const mongoose = require("mongoose");
const router  =require ("./Routes/user-routes");
const app = express();

app.use("/api/user", router)
const port = 8000;
mongoose.connect("mongodb+srv://dexterdd2:dexter.127@cluster0.zt5mgox.mongodb.net/BlogApp2?retryWrites=true&w=majority", { // Replace <your_password> with your actual password
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log("Error while connecting to MongoDB", err);
});
 
app.listen(port, () => {
    console.log("Server is running on port 8000");
});