require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const BoxeventModel = require('./models/boxevents');
const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/', routes);

mongoose.connect(process.env.DB_CONNECTION, { dbName: process.env.DATABASE });
const db = mongoose.connection;
db.on('error', err => {
  console.log(err);
});
db.once('open', () => {
    console.log('connected to DB');
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ... `);
    }
});

app.get('/boxevents', async (req, res) => {
  const boxevents = await BoxeventModel.find();
  res.json(boxevents);
});

app.post('/boxevents', async (req, res) => {
  const newBoxevent = new BoxeventModel(req.body);
  const savedBoxevent = await newBoxevent.save();
  res.json(savedBoxevent);
});

app.put('/boxevents/:id', async (req, res) => {
  const updatedBoxevent = await BoxeventModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedBoxevent);
});

app.delete('/boxevents/:id', async (req, res) => {
  const deletedBoxevent = await BoxeventModel.findByIdAndDelete(req.params.id);
  res.json(deletedBoxevent);
});