import type { AxiosError, AxiosRequestConfig } from 'axios'
import fetchLinks from './fetch'
import type { Link } from '../type/link'

const putLink = async (
    body: Link & { newCustomUrl: Link['customUrl'] },
    config?: AxiosRequestConfig,
): Promise<Link | AxiosError> => {
    return await fetchLinks().put<Link, AxiosError<{ message: string }>>(
        '/' + body.customUrl,
        body,
        config,
    )
}

export default putLink
