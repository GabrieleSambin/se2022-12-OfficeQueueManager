'use strict'

const express = require('express');
const router = express.Router();
const {Queue, QueueList} = require('../models/queueModel');
const dayjs = require('dayjs')
const { check, param, body, validationResult } = require('express-validator');
const CounterDAO = require('../dao/CounterDAO');

function computeWaitingTime(serviceType) {
     //serviceType can be 1,2,3,4
     //THIS IS WHERE WE SET SERVICE TIME
    const serviceTime = [5,7,3,3]; // 1 cell of array for request type, each cell contains the service time in minutes

    //Counter service type list
    //THIS IS WHERE WE ASSIGN SERVICE TYPE TO COUNTERS
    const C1 = [1,2,3];
    const C2 = [4];
    const C3 = [1,3];
    const C4 = [1,2];
    const CList = [C1, C2, C3, C4];
    

    let sum = 0;

    for(let i=0; i<4; i++){

        if(CList[i].find(x => x === serviceType) !== undefined){
            sum = (1/CList[i].lenght) + sum;
        }  
     }

    //The service Type should be a number from 1 to 4 and this is why we subtract 1
    let Wt = serviceTime[serviceType - 1] * (QueueList[serviceType - 1].getLenght() / (sum + 1/2));
     return Wt;
 }



router.get('/getWaitingTime/:ST_ID', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        //console.log(req.params.ST_ID);
        let wt = computeWaitingTime(req.params.ST_ID);
        let strn = wt.toString() + " minutes";
        console.log(strn); //until here it works
        return res.status(200).json(strn).end();
    } catch (err) {
        return res.status(err).end();
    }

})


module.exports= router;