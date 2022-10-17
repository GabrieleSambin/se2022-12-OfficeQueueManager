'use strict'

const express = require('express');
const TicketDAO = require('../dao/TicketDAO');
const router = express.Router();
const {Queue, QueueList} = require('../models/queueModel');
const dayjs = require('dayjs')
const { check, param, body, validationResult } = require('express-validator');


router.post('/newTicket', [ body('ST_ID').notEmpty()], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        await TicketDAO.insertTicket( 0, req.body.ST_ID, req.body.TDate = dayjs(), req.body.State = 'OPEN');
        QueueList[req.body.ST_ID-1].enqueue();
        return res.status(201).end();
    } catch (err) {
        return res.status(err).end();
    }
});

module.exports= router;