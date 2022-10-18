'use strict';

const sqlite = require('sqlite3');
const {Queue} = require('../models/queueModel');
const dayjs = require('dayjs');

const db = new sqlite.Database('office_queue_manager.db', err => { if (err) throw err;});

exports.insertTicket = (ID_Counter, ST_ID, TDate, State, Ticket_Number) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO Ticket(ID_Counter, ST_ID, Date, State, Ticket_Number) VALUES (?,?,?,?,?)";
        db.run(sql, [ ID_Counter, ST_ID, TDate, State, Ticket_Number], function(err) {
            if(err){
                reject(err);
                return;
            }else{
                resolve(this.lastId);
            }
        });
    });
}

exports.modifyTicket = (Ticket_Number, ST_ID, ID_Counter) => {
    return new Promise((resolve, reject) => {
        let newID_Counter = ID_Counter
        let newState = 'CLOSE'
        //Missing date filter --> tipo: AND DATE = TODAYS DAY
        const sql1 = 'SELECT COUNT(*) AS count FROM Ticket WHERE Ticket_Number = ? AND ST_ID = ?';
        db.get(sql1, [Ticket_Number, ST_ID], (err, r) => {
            if (err) {
                reject(err)
            } else if (r.count === 0) {
                reject(new Error("ID not found"))
            } else {
                const sql2 = 'UPDATE Ticket SET ID_Counter = ?, State = ? WHERE Ticket_Number = ? AND ST_ID = ?';
                db.run(sql2, [newID_Counter, newState, Ticket_Number, ST_ID], (err) => {
                    if (err) {
                        reject(err);
                    }
                    resolve();
                });
            }
        });
    });
}