const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express()
const FormsModel = require('./model/FormsModel')

const PORT = process.env.PORT || 8888

dotenv.config()

app.use(cors());
app.use(express.json());

const {
    getItems,
    createItems,
    deleteItems
} = require('./controller/forms.js')

try {
    const DBAddress = process.env.DB_URL || "localhost:8888";
    // set("strictQuery", true);
    mongoose.connect(DBAddress);
    console.log('database connected ...')
} catch(err) {
    console.log(err)
}

// get all items (http://localhost:8888/)
app.get('/', getItems);
// create items (http://localhost:8888 /createItems)
app.post('/createItems', createItems);
// delete items (http://localhost:8888/Delete/:id(items id))
app.delete('/Delete/:id', deleteItems);

 
app.listen(PORT, console.log(`app running at http://localhost:${PORT}`));