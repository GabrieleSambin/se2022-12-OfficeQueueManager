'use strict';

const sqlite = require('sqlite3');
const {Queue} = require('./models/queueModel');

const db = sqlite.Database('office_queue_manager.db', err => { if (err) throw err;});

exports.insertTicket = (ID, ID_Counter, ST_ID, TDate, State) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO Ticket(ID, ID_Counter, ST_ID, Date, State) VALUES (?,?,?,?,?)";
        db.run(sql, [ID, ID_Counter, ST_ID, TDate, State], function(err) {
            if(err){
                reject(err);
                return;
            }else{
                resolve(this.lastId);
            }
        });
    });
}