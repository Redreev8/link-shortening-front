import axios from 'axios'

const apiToken = axios.create({
    baseURL: import.meta.env.VITE_BAKEND_API + '/api/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
})

export default apiToken
