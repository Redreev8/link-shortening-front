import type { AxiosError, AxiosRequestConfig } from 'axios'
import fetchAuth from './fetch'

const logout = async (
    config?: AxiosRequestConfig,
): Promise<{ data: string } | AxiosError> => {
    return await fetchAuth.post<
        { data: string },
        AxiosError<{ message: string }>
    >('/logut', null, {
        headers: {
            'auth-token': localStorage.getItem('auth-token'),
        },
        ...config,
    })
}

export default logout
