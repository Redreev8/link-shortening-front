import axios from 'axios'

const apiToken = axios.create({
    baseURL: 'http://localhost:3000/api/',
})

export default apiToken
