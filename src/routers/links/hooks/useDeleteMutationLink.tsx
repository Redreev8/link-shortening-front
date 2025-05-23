import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Link } from '../type/link'
import type { AxiosRequestConfig } from 'axios'
import deleteLink from '../api/delete-link'

const useDeleteMutationLink = (config?: AxiosRequestConfig) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (customUrl: Link['customUrl']) => {
            await deleteLink(customUrl, config)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['links'] })
        },
    })
}

export default useDeleteMutationLink
