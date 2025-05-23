import { zodResolver } from '@hookform/resolvers/zod'
import type { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import useCreateMutationLink from './useCreateMutationLink'
import { formSchemaLink, type FormFields, type Link } from '../type/link'

const useCreateLink = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        setError,
    } = useForm<FormFields>({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: zodResolver(formSchemaLink),
    })
    const resetValueField = () => {
        setValue('url', '')
        setValue('customUrl', '')
        setValue('description', '')
    }
    const mutation = useCreateMutationLink()
    const onSubmit = async (d: Link) => {
        try {
            await mutation.mutateAsync(d)
            resetValueField()
        } catch (e) {
            const { response } = e as AxiosError
            const data = response!.data as { message: string }
            if (data.message === 'duplicate key') {
                setError('customUrl', { message: 'Duplicate' })
            }
        }
    }

    return {
        register,
        onSubmitLink: handleSubmit(onSubmit),
        errors,
        isLoading: mutation.isPending,
    }
}

export default useCreateLink
