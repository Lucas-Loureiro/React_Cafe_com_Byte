import axios from 'axios';

const api = axios.create({
    baseURL: "https://ecomerce1finaly.herokuapp.com/"
})

export default api;