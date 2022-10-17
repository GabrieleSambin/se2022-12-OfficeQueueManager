'use strict';
const dayjs = require('dayjs');


/**
 * Constructor function for new Queue objects
 * @param {char} ST_ID service type id 
 * @param {dayjs} date ticket date
 * @param {number} first first ticket of the line
 * @param {number} last last ticket number to get in line
 */

function Queue (ST_ID, date, first=0, last=0){
    this.ST_ID = ST_ID;
    this.date = date === null? dayjs() : dayjs(date);
    this.first = first;
    this.last = last;

    this.enqueue = function(){
        this.last++;
    }
    this.dequeue = function(){
        if(this.first<this.last)
        {
            this.first++;
            return this.first-1;
        }
    }
    this.getLenght = function(){
        return this.last-this.first;
    }
    this.isEmpty = function(){
        return this.getLenght === 0;
    }
}


let QueueList = [new Queue(1, dayjs(), 0, 0), new Queue(2, dayjs(), 0, 0), new Queue(3, dayjs(), 0, 0), new Queue(4, dayjs(), 0, 0)]; // these values will be read from db (and done with a cicle)

exports.Queue = Queue;
exports.QueueList = QueueList;