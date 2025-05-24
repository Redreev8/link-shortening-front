import axios from 'axios'

const fetchLinks = () =>
    axios.create({
        baseURL: 'http://localhost:3000/api/links/',
        headers: {
            'auth-token': localStorage.getItem('auth-token'),
        },
    })

export default fetchLinks
