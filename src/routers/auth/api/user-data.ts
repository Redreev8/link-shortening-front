import type { AxiosError, AxiosRequestConfig } from 'axios'
import fetchAuth from './fetch'
import type { User } from '../type/user'

const UserData = async (
    config?: AxiosRequestConfig,
): Promise<{ data: User } | AxiosError<{ message: string }>> => {
    return await fetchAuth.get('/user', {
        headers: {
            'auth-token': localStorage.getItem('auth-token'),
        },
        ...config,
    })
}

export default UserData
