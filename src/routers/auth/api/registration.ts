import type { AxiosError, AxiosRequestConfig } from 'axios'
import fetchAuth from './fetch'
import type { FormFieldsAuth } from '../type/auth'

const apiRegistration = async (
    body: FormFieldsAuth,
    config?: AxiosRequestConfig,
): Promise<{ data: string } | AxiosError> => {
    return await fetchAuth.post<
        { data: string },
        AxiosError<{ message: string }>
    >('/register', body, config)
}

export default apiRegistration
