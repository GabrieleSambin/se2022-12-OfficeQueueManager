'use strict';

const sqlite = require('sqlite3');

const db = new sqlite.Database('office_queue_manager.db', err => { if (err) throw err; });

exports.getCounterbyID = (ID) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM Counter WHERE ID = ?';
        db.all(sql, [ID], (err, rows) => {
            if (err) {
                reject(err);
            }
            const services = rows.map((r) => (
                {
                    ST_ID: r.ST_ID
                }
            ));
            resolve(services);
        });
    });
}

exports.getCounters = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT DISTINCT ID FROM Counter';
        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err);
            }
            const services = rows.map((r) => (
                {
                    ID: r.ID,
                    ST_ID: r.ST_ID
                }
            ));
            resolve(services);
        });
    });

}

exports.getServices = (ID) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM Counter WHERE ID = ?';
        db.all(sql, [ID], (err, rows) => {
            if (err) {
                reject(err);
            }
            const services = rows.map((r) => (
                {
                    ST_ID: r.ST_ID
                }
            ));
            resolve(services);
        });
    });
}