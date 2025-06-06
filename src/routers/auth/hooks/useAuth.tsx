import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchemaAuth, type FormFieldsAuth } from '../type/auth'
import apiAuth from '../api/auth'
import type { AxiosError } from 'axios'
import { useContext, useState } from 'react'
import { LayoutAuthContext } from '../layout-auth'

const useAuth = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormFieldsAuth>({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: zodResolver(formSchemaAuth),
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { setSignal } = useContext(LayoutAuthContext)
    const auth = async (d: FormFieldsAuth) => {
        setIsLoading(true)
        try {
            const { data } = (await apiAuth(d)) as { data: string }
            localStorage.setItem('auth-token', data)
            setSignal(Symbol('signal'))
        } catch (e) {
            const { response } = e as AxiosError
            const data = response!.data as string
            setError('name', { message: data })
            setError('password', { message: data })
            setIsLoading(false)
        }
    }

    return {
        isLoading,
        register,
        auth: handleSubmit(auth),
        errors,
    }
}

export default useAuth
