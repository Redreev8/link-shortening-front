import { zodResolver } from '@hookform/resolvers/zod'
import type { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import useChangeMutationLink from './useChangeMutationLink'
import { formSchemaLink, type FormFields, type Link } from '../type/link'

interface useChangeLinkProps extends Link {
    cbCreate?: () => void
}

const useChangeLink = ({
    url,
    customUrl,
    description,
    cbCreate,
}: useChangeLinkProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<FormFields>({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: zodResolver(formSchemaLink),
        defaultValues: {
            url,
            customUrl,
            description,
        },
    })
    const mutation = useChangeMutationLink()
    const onSubmit = async (d: Link) => {
        console.log({
            url: d.url,
            newCustomUrl: d.customUrl,
            description: d.description,
            customUrl,
        })
        try {
            await mutation.mutateAsync({
                url: d.url,
                newCustomUrl: d.customUrl,
                description: d.description,
                customUrl,
            })
            if (cbCreate) cbCreate()
        } catch (e) {
            const { response } = e as AxiosError
            const data = response!.data as { message: string }
            console.log(data)
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

export default useChangeLink
