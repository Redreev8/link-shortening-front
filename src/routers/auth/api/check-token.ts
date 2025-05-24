import type { AxiosError, AxiosRequestConfig } from 'axios'
import fetchToken from './fetch'

const checkToken = async (
    config?: AxiosRequestConfig,
): Promise<{ data: string } | AxiosError> => {
    return await fetchToken.get<
        { data: string },
        AxiosError<{ message: string }>
    >('/check-token', config)
}

export default checkToken
