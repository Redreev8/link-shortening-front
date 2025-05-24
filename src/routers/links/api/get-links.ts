import type { AxiosRequestConfig } from 'axios'
import fetchLinks from './fetch'
import type { Link } from '../type/link'

const getLinks = async (config?: AxiosRequestConfig): Promise<Link[]> => {
    try {
        const { data } = await fetchLinks()('/', config)
        return data.toReversed()
    } catch (error) {
        console.log(error)
        return []
    }
}

export default getLinks
