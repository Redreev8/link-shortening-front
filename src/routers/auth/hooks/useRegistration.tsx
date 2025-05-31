import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    formSchemaRegistration,
    type FormFieldsRegistration,
} from '../type/registration'
import type { AxiosError } from 'axios'
import { useContext, useState } from 'react'
import { LayoutAuthContext } from '../layout-auth'
import apiRegistration from '../api/registration'

const useRegistration = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormFieldsRegistration>({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: zodResolver(formSchemaRegistration),
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { setSignal } = useContext(LayoutAuthContext)
    const registration = async (d: FormFieldsRegistration) => {
        setIsLoading(true)
        try {
            const { data } = (await apiRegistration(d)) as { data: string }
            localStorage.setItem('auth-token', data)
            setSignal(Symbol('signal'))
            setIsLoading(false)
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
        registration: handleSubmit(registration),
        errors,
    }
}

export default useRegistration
