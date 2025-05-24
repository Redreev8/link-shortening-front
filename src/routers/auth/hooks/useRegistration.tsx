import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    formSchemaRegistration,
    type FormFieldsRegistration,
} from '../type/registration'
import type { AxiosError } from 'axios'
import { useContext } from 'react'
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
    const { setSignal } = useContext(LayoutAuthContext)
    const registration = async (d: FormFieldsRegistration) => {
        try {
            const { data } = (await apiRegistration(d)) as { data: string }
            localStorage.setItem('auth-token', data)
            setSignal(Symbol('signal'))
        } catch (e) {
            const { response } = e as AxiosError
            const data = response!.data as string
            setError('name', { message: data })
            setError('password', { message: data })
        }
    }

    return {
        register,
        registration: handleSubmit(registration),
        errors,
    }
}

export default useRegistration
