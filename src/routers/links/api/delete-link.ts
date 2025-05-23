import type { AxiosError, AxiosRequestConfig } from 'axios'
import fetchLinks from './fetch'
import type { Link } from '../type/link'

const deleteLink = async (
    customUrl: Link['customUrl'],
    config?: AxiosRequestConfig,
): Promise<Link | AxiosError> => {
    return await fetchLinks.delete<Link, AxiosError<{ message: string }>>(
        '/' + customUrl,
        config,
    )
}

export default deleteLink
