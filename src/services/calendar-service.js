import axios from 'axios';

const url = 'http://localhost:3001/calendars/';

export const getEvents = (id) => {
    return axios.get(url + id);
}

export const listEvents = () => {
    
    return axios.get(url).then(rs => {
        if(rs.status = 200)
            return rs.data;
        return new [];
    });
}

export const createEvent = (name, day, hour) => {
    axios.post(url, {name, day, hour});
}

export const deleteEvent = (id) => {
    axios.delete(url, {id});
}