'use strict'
const router = express.Router()
const express = require('express');
const {Queue} = require('../models/queueModel');


let QueueList = [new Queue(1, dayjs(), 0, 0), new Queue(2, dayjs(), 0, 0), new Queue(3, dayjs(), 0, 0), new Queue(4, dayjs(), 0, 0)]; // these values will be read from db (and done with a cicle)


app.post('/newTicket', [body('ID').notEmpty(), body('ID_Counter').notEmpty(), body('ST_ID').notEmpty()], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        await TicketDAO.insertTicket(req.body.ID, req.body.ID_Counter, req.body.ST_ID, req.body.TDate = dayjs(), req.body.State = 'OPEN');
        QueueList[req.body.ST_ID].enqueue();
        return res.status(201).end();
    } catch (err) {
        return res.status(503).end();
    }
});

module.exports= router;