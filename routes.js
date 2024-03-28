const express = require('express');
const router = express.Router();
const BoxeventModel = require('./models/boxevents');

router.get('/boxevents', async(req, res) => {
    const allBoxevents = await BoxeventModel.find();
    console.log(allBoxevents);
    res.send(allBoxevents);
});

router.post('/boxevents', async(req, res) => {
    const newBoxevent = new BoxeventModel({
        name: req.body.name,
        date: req.body.date,
        location: req.body.location,
        description: req.body.description
    })
    await newBoxevent.save();
    res.send(newBoxevent);
});

router.get('/boxevents/:id', async(req, res) => {
    const Boxevent = await BoxeventModel.findOne({ _id: req.params.id });
    console.log(req.params);
    if(Boxevent) {
        res.send(Boxevent);
    } else {
        res.status(404);
        res.send({
            error: "Boxevent does not exist!"
        });
    }
})

router.patch('/boxevents/:id', async(req, res) => {
    try {
        const Boxevent = await BoxeventModel.findOne({ _id: req.params.id })

        if (req.body.name) {
            Boxevent.name = req.body.name
        }

        if (req.body.date) {
            Boxevent.date = req.body.date
        }

        if (req.body.location) {
            Boxevent.location = req.body.location
        }

        if (req.body.description) {
            Boxevent.description = req.body.description
        }

        await BoxeventModel.updateOne({ _id: req.params.id }, Boxevent);
        res.send(Boxevent)
    } catch {
        res.status(404)
        res.send({ error: "Boxevent does not exist!" })
    }
});

router.delete('/boxevents/:id', async(req, res) => {
    try {
        await BoxeventModel.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Boxevent does not exist!" })
    }
});


module.exports = router;