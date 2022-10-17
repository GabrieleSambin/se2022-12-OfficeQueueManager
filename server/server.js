'use strict';

//Imports
const express = require('express');
const res = require('express/lib/response');
const morgan = require('morgan');
const dayjs = require('dayjs');
const cors = require('cors');
const { check, param, body, validationResult } = require('express-validator');

//DAOs
const TicketDAO = require('./TicketDAO');

//server options setup
const PORT = 3001;
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true
};

app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));

const { Queue } = require('./models/queueModel');

let serviceNumber = 4 // this value will be read from db

let QueueList = [new Queue(1, dayjs(), 0, 0), new Queue(2, dayjs(), 0, 0), new Queue(3, dayjs(), 0, 0), new Queue(4, dayjs(), 0, 0)]; // these values will be read from db (and done with a cicle)

const ticketRouter = require("./routes/ticketRoute");

app.use("/api", ticketRouter);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`));