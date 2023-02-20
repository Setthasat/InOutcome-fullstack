const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express()
const FormsModel = require('./model/FormsModel')

const PORT = process.env.PORT || '8888'

dotenv.config()

app.use(cors());
app.use(express.json());

// const DBAddress = process.env.DB_URL || "localhost:8888";
// set("strictQuery", true);
// mongoose.connect(DBAddress);
// console.log('database connected ...')

app.get('/', (req, res) => {
    res.send("hello")
})
 

app.listen(PORT, console.log(`app running at http://localhost:${PORT}`));