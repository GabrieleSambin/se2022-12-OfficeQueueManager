//Imports
import axios from "axios";

const SERVER_URL = 'http://localhost:3001/';

const api = {

    getServices: () => {
        return new Promise((resolve, reject) => {
            axios.get(SERVER_URL + `api/getService`)
                .then(res => resolve(res.data))
                .catch(err => reject({ data: err.response.data, status: err.response.status }));
        })
    },

    getCounters: () => {
        return new Promise((resolve, reject) => {
            axios.get(SERVER_URL + `api/getCounters`)
                .then(res => resolve(res.data))
                .catch(err => reject({ data: err.response.data, status: err.response.status }));
        })
    },

    getService: (ID) => {
        return new Promise((resolve, reject) => {
            axios.get(SERVER_URL + `api/ServiceCounter/${ID}`)
                .then(res => resolve(res.data))
                .catch(err => reject({ data: err.response.data, status: err.response.status }))
        })
    },

    getTicketbyCounter: (ID) => {
        return new Promise((resolve, reject) => {
            axios.get(SERVER_URL + `api/getTicketbyCounter/${ID}`)
                .then(res => resolve(res.data))
                .catch(err => reject({ data: err.response.data, status: err.response.status }));
        })
    },

    getTicketbyService: (ID) => {
        return new Promise((resolve, reject) => {
            axios.get(SERVER_URL + `api/getTicketbyService/${ID}`)
                .then(res => resolve(res.data))
                .catch(err => reject({ data: err.response.data, status: err.response.status }));
        })
    },

    addTicket: (ST_ID) => {
        return new Promise((resolve, reject) => {
            axios.post(SERVER_URL + 'api/newTicket', { ST_ID: ST_ID })
                .then(res => resolve(res.data))
                .catch(err => reject({ data: err.response.data, status: err.response.status }))
        })
    },

    putTicket: (ST_ID, ID_Counter) => {
        return new Promise((resolve, reject) => {
            axios.put(SERVER_URL + 'api/Ticket', { ST_ID: ST_ID, ID_Counter: ID_Counter })
                .then(res => resolve(res.data))
                .catch(err => reject({ data: err.response.data, status: err.response.status }))
        })
    }
}

export default api;