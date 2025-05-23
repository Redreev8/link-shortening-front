import type { AxiosError, AxiosRequestConfig } from 'axios'
import fetchLinks from './fetch'
import type { Link } from '../type/link'

const postLink = async (
    body: Link,
    config?: AxiosRequestConfig,
): Promise<Link | AxiosError> => {
    return await fetchLinks.post<Link, AxiosError<{ message: string }>>(
        '/',
        body,
        config,
    )
}

export default postLink
