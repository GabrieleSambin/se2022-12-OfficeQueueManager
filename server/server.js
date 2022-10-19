'use strict';

//Imports
const express = require('express');
const res = require('express/lib/response');
const morgan = require('morgan');
const cors = require('cors');

//DAOs
const TicketDAO = require('./dao/TicketDAO');

//Init express and set-up middlewares
const app = express();
app.use(morgan('dev'));
app.use(express.json());

//Set up and enable Cross-Origin Resource Sharing (CORS)
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true
};
app.use(cors(corsOptions));

//Routes and model
const { Queue } = require('./models/queueModel');
const ticketRouter = require("./routes/ticketRoute");
const serviceRouter = require("./routes/serviceRoute");
const counterRouter = require("./routes/counterRoute");
//const waitingTimeRouter = require('./routes/waitingTimeRoute');


/* --- APIs --- */
app.use("/api", ticketRouter, serviceRouter, counterRouter);
//app.use('/api', waitingTimeRouter);


const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`));

module.exports = app;