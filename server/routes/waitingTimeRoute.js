'use strict'

const express = require('express');
const router = express.Router();
const {Queue, QueueList} = require('../models/queueModel');
const dayjs = require('dayjs')
const { check, param, body, validationResult } = require('express-validator');
const CounterDAO = require('../dao/CounterDAO');

function computeWaitingTime(serviceType) {
    //serviceType can be 0,1,2,3
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
    //let Si=0; Si variable has no sense to exist

    for(let i=0; i<4; i++){
        if(CList[i].find(x => x === serviceType) !== undefined){
            sum = (1/CList[i].lenght) + sum;
        }  
    }

    //The service Type should be a number from 0 to 3
    let Wt = serviceTime[serviceType] * (QueueList[serviceType].getLenght() / (sum + 1/2));
    return Wt;
}



router.get('/getWaitingTime/:ST_ID', async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        //console.log(req.params.ST_ID);
        let wt = computeWaitingTime(req.params.ST_ID);
        let strn = wt.toString() + " minutes";
        console.log(strn); //until here it works
        return res.json(strn);
    } catch (err) {
        return res.status(err).end();
    }

})


module.exports= router;