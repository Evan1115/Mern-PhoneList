const express = require("express")
//const cors = require('cors')
const mongoose = require('mongoose');



require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

//app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb connection established successfully")
})

const phoneListRoute = require('./route/phone-list')

//HTTP request 
app.use('/phonelist', phoneListRoute);



//Accessing the path module
const path = require("path");
//step1:
app.use(express.static(path.resolve(__dirname, "./client/build")));


app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"))
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})