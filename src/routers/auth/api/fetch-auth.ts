import axios from 'axios'

const fetchAuth = axios.create({
    baseURL: 'http://localhost:3000/api/login/',
})

export default fetchAuth
