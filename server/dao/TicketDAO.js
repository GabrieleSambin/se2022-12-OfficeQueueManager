'use strict';

const sqlite = require('sqlite3');
const { Queue } = require('../models/queueModel');
//const dayjs = require('dayjs');

const db = new sqlite.Database('office_queue_manager.db', err => { if (err) throw err; });

exports.insertTicket = (ID_Counter, ST_ID, TDate, State) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO Ticket(ID_Counter, ST_ID, Date, State) VALUES (?,?,?,?)";
        db.run(sql, [ID_Counter, ST_ID, TDate, State], function (err) {
            if (err) {
                reject(err);
            }else{
                resolve(this.lastId);
            }
        });
    });
}

exports.getTicketbyCounter = (ID_Counter) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT ID FROM Ticket WHERE ID_Counter = ? AND State = "OPEN"';
        db.all(sql, [ID_Counter], (err, rows) => {
            if (err) {
                reject(err);
            }
            const counters = rows.map((r) => (
                {
                    ID: r.ID,
                }
            ));
            resolve(counters[0]);
        });
    });

}

exports.getTicket = (id, service, date) => {    
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Ticket WHERE Ticket_Number = ? AND ST_ID = ? AND Date = ? ";
        db.get(sql, [id, service, date], (err, rows) => {
            if (err) {
                reject(err);
            }
            else {
                if(rows===undefined){
                    resolve(undefined);
                }
                else
                resolve(rows);
            }
        });
    });
}

exports.modifyTicket = (Ticket_Number, ST_ID, ID_Counter) => {
    return new Promise((resolve, reject) => {
        let newID_Counter = ID_Counter
        let newState = 1
        let Today = dayjs().hour(0).minute(0).second(0)
        const sql1 = 'SELECT COUNT(*) AS count FROM Ticket WHERE Ticket_Number = ? AND ST_ID = ? AND Date >= ?';
        db.get(sql1, [Ticket_Number, ST_ID, Today], (err, r) => {
            if (err) {
                reject(err);
            }
            const counters = rows.map((r) => (
                {
                    ID: r.ID,
                }
            ));
            resolve(counters[0]);
        });
    });

}

exports.getTicketbyServicesbyID = (ID) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT COUNT(*) as C FROM Ticket WHERE ST_ID = ? AND State = "OPEN"';
        db.all(sql, [ID], (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows[0].C);
        });
    });

}

// OLD COMMIT //

// exports.insertTicket = (ID_Counter, ST_ID, TDate, State, Ticket_Number) => {
//     return new Promise((resolve, reject) => {
//         const sql = "INSERT INTO Ticket(ID_Counter, ST_ID, Date, State, Ticket_Number) VALUES (?,?,?,?,?)";
//         db.run(sql, [ID_Counter, ST_ID, TDate, State, Ticket_Number], function (err) {
//             if (err) {
//                 reject(err);
//                 return;
//             } else {
//                 resolve(this.lastId);
//             }
//         });
//     });
// }

// exports.modifyTicket = (Ticket_Number, ST_ID, ID_Counter) => {
//     return new Promise((resolve, reject) => {
//         let newID_Counter = ID_Counter
//         let newState = 'CLOSE'
//         let Today = dayjs().hour(0).minute(0).second(0)
//         const sql1 = 'SELECT COUNT(*) AS count FROM Ticket WHERE Ticket_Number = ? AND ST_ID = ? AND Date >= ?';
//         db.get(sql1, [Ticket_Number, ST_ID, Today], (err, r) => {
//             if (err) {
//                 reject(err)
//             } else if (r.count === 0) {
//                 reject(new Error("ID not found"))
//             } else {
//                 const sql2 = 'UPDATE Ticket SET ID_Counter = ?, State = ? WHERE Ticket_Number = ? AND ST_ID = ? AND Date >= ?';
//                 db.run(sql2, [newID_Counter, newState, Ticket_Number, ST_ID, Today], (err) => {
//                     if (err) {
//                         reject(err);
//                     }
//                     resolve();
//                 });
//             }
//         });
//     });
// }