import type { AxiosError, AxiosRequestConfig } from 'axios'
import fetchAuth from './fetch-auth'
import type { FormFieldsAuth } from '../type/auth'

const apiAuth = async (
    body: FormFieldsAuth,
    config?: AxiosRequestConfig,
): Promise<{ data: string } | AxiosError> => {
    return await fetchAuth.post<
        { data: string },
        AxiosError<{ message: string }>
    >('/', body, config)
}

export default apiAuth
