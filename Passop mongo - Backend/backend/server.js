import express from 'express';
import dotenv from 'dotenv';
import process from 'process';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

console.log(process.env.MONGO_URI)

//Connection URI
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
client.connect();

//database name
const dbName = 'passOp'
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(cors())


// get all the password
app.get('/', async(req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult);
});


//save password
app.post('/', async(req, res) => {
    const db = client.db(dbName);
    const password = req.body;
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password)
    res.send({success:true, result:findResult});
});

//delete the password
app.delete('/', async(req, res) => {
    const db = client.db(dbName);
    const password = req.body;
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password)
    res.send({success:true, result:findResult});
});



// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});