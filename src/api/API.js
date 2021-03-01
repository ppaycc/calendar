const API = {
    add:(event) => {
        return fetch('http://localhost:8008/api/calendar-event/create', {
            method: "POST",
            body: JSON.stringify(event),
            headers: {"Content-Type": "application/json;charset=utf-8"}
        }).then(data=>data.json());
    },
    delete: (id) => {
        return fetch('http://localhost:8008/api/calendar-event/delete/' + id).then(data=>data.json());
    },
    get: () => {
        return fetch('http://localhost:8008/api/calendar-event/get', {
            method: "POST",
            headers: {"Content-Type": "application/json;charset=utf-8"}
        }).then(data=>data.json());
    },
    edit: (event) => {
        return fetch('http://localhost:8008/api/calendar-event/update', {
            method: "POST",
            body: JSON.stringify(event),
            headers: {"Content-Type": "application/json;charset=utf-8"}
        }).then(data=>data.json())
    }
}

export default API;
// {name:'mo', id:"mo", color:"mo"}

// API.search({type: {$in: ['bus']}}).then(d=>console.log(d))