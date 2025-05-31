import axios from 'axios'

const fetchLinks = () =>
    axios.create({
        baseURL: import.meta.env.VITE_BAKEND_API + '/api/links/',
        headers: {
            'auth-token': localStorage.getItem('auth-token'),
            'Access-Control-Allow-Origin': '*',
        },
    })

export default fetchLinks
