import axios from 'axios'

const fetchLinks = axios.create({
    baseURL: 'http://localhost:3000/api/links/',
    headers: {
        'auth-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IjMyMWFzZGQiLCJyb2xlX2lkIjoyLCJpYXQiOjE3NDcwNzkyMDd9.Ri_bJTy25n_9uLO_E_tCG4CVbH7i_qe_OEKOmL1OcT4',
    },
})

export default fetchLinks
