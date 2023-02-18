require('dotenv').config()

const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;
const router = require('./routes') // ไฟล์ routes

app.use(express.json()) // config json
app.use('/api' , router) // localhost:3000/api
app.use(express.static(__dirname + '/www')) 

app.listen(3000 , () => {
    console.log('Server runing on port :' + PORT);
})  // << localhost:3000 , callback function