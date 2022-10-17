//Imports
import axios from "axios";

const SERVER_URL = 'http://localhost:3001';

const api = {

    addTicket: (ID_Counter, ST_ID , Date, State) => {
        return new Promise((resolve, reject) => {
            axios.post(SERVER_URL + 'newTicket', { ID_Counter, ST_ID, Date,State })
                .then(res => resolve(res.data))
                .catch(err => reject({ data: err.response.data, status: err.response.status }))
        })
    }

    /* getCourses: () => {
        return new Promise((resolve, reject) => {
            axios.get(SERVER_URL + `courses/all`)
                .then(res => resolve(res.data))
                .catch(err => reject({ data: err.response.data, status: err.response.status }));
        })
    },

    

    addStudyPlan: (courses, type_id, tot_credits) => {
        return new Promise((resolve, reject) => {
            axios.post(SERVER_URL + 'study-plans', { courses, type_id, tot_credits }, { withCredentials: true })
                .then(res => resolve(res.data))
                .catch(err => reject({ data: err.response.data, status: err.response.status }))
        })
    },

    updateStudyPlan: (id, tot_credits, old_course, new_course, type_id) => {
        return new Promise((resolve, reject) => {
            axios.put(SERVER_URL + `study-plans/${id}`, { old_course, new_course, tot_credits, type_id }, { withCredentials: true })
                .then(res => resolve(res.data))
                .catch(err => reject({ data: err.response.data, status: err.response.status }))
        })
    },

    deleteStudyPlan: (id_study_plan) => {
        return new Promise((resolve, reject) => {
            axios.delete(SERVER_URL + `study-plans/${id_study_plan}`, { withCredentials: true })
                .then(res => resolve(res.data))
                .catch(err => reject({ data: err.response.data, status: err.response.status }))
        })
    }
 */
}

export default api;