'use strict';

const sqlite = require('sqlite3');
const { Queue } = require('../models/queueModel');

const db = new sqlite.Database('office_queue_manager.db', err => { if (err) throw err; });

exports.selectService = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Service_Type";
        db.all(sql, [], function (err, rows) {
            if (err) {
                reject(err);
                return;
            } else {
                if (rows.length == 0) {
                    resolve(404);
                }
                else {
                    resolve({ rows });
                }
            }
        });
    });
}