import type { AxiosError } from 'axios'
import { type Link } from '../type/link'
import useDeleteMutationLink from './useDeleteMutationLink'
import { useState } from 'react'

const useDeleteLink = (customUrl: Link['customUrl']) => {
    const [error, setError] = useState<string>('')
    const mutation = useDeleteMutationLink()
    const handelRemove = async () => {
        try {
            setError('')
            await mutation.mutateAsync(customUrl)
        } catch (e) {
            const { response } = e as AxiosError
            const data = response!.data as { message: string }
            setError(data.message)
        }
    }

    return {
        handelRemove,
        isLoading: mutation.isPending,
        error,
    }
}

export default useDeleteLink
