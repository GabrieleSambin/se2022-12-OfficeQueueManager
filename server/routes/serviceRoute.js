'use strict'

const express = require('express');
const ServiceDAO = require('../dao/ServiceDAO');
const router = express.Router();
const { Queue } = require('../models/queueModel');
const dayjs = require('dayjs')
const { check, param, body, validationResult } = require('express-validator');


let QueueList = [new Queue(1, dayjs(), 0, 0), new Queue(2, dayjs(), 0, 0), new Queue(3, dayjs(), 0, 0), new Queue(4, dayjs(), 0, 0)]; // these values will be read from db (and done with a cicle)


router.get('/getService', [], async (req, res) => {
    try {
        let service = await ServiceDAO.selectService();
        return res.status(201).json(service);
    } catch (err) {
        return res.status(err).end();
    }
});

module.exports = router;