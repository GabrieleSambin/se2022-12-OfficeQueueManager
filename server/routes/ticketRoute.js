'use strict'

const express = require('express');
const TicketDAO = require('../dao/TicketDAO');
const CounterDAO = require('../dao/CounterDAO');
const router = express.Router();
const { Queue, QueueList } = require('../models/queueModel');
const dayjs = require('dayjs')
const { check, param, body, validationResult } = require('express-validator');



router.post('/newTicket', [ body('ST_ID').notEmpty()], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        await TicketDAO.insertTicket(0, req.body.ST_ID, req.body.TDate = dayjs(), req.body.State = 'OPEN', QueueList[req.body.ST_ID-1].last+1);
        QueueList[req.body.ST_ID-1].enqueue();
        return res.status(201).end();
    } catch (err) {
        return res.status(err).end();
    }
});

router.put('/Ticket', [body('ST_ID').notEmpty()], [body('ID_Counter').notEmpty()], async (req, res) => {
    if (QueueList[req.body.ST_ID-1].getLenght() > 0) {
        try {
            console.log(req.body.ST_ID)
            let Ticket_Number = QueueList[req.body.ST_ID-1].dequeue();
            console.log(Ticket_Number)
            await TicketDAO.modifyTicket(Ticket_Number, req.body.ST_ID, req.body.ID_Counter);
            return res.status(201).json(Ticket_Number).end();
        } catch (err) {
            return res.status(err).end();
        }
    }
});

router.get('/ServiceCounter', async (req, res) => {
    try {
        let ID = req.query["ID"];
        const services = await CounterDAO.getServices(ID);
    
        //Algorithm to determine which service to attend
        let serviceMaxQueue = services[0].ST_ID
        for (let service of services) {
            if (QueueList[service.ST_ID-1].getLenght() > QueueList[serviceMaxQueue-1].getLenght()){
                serviceMaxQueue = service.ST_ID
            }
        }

        return res.status(201).json(serviceMaxQueue).end();
    } catch (err) {
        return res.status(err).end();
    }
});

module.exports = router;