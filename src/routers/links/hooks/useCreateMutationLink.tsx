import { useMutation, useQueryClient } from '@tanstack/react-query'
import postLink from '../api/post-link'
import type { Link } from '../type/link'
import type { AxiosRequestConfig } from 'axios'

const useCreateMutationLink = (config?: AxiosRequestConfig) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (body: Link) => await postLink(body, config),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['links'] })
        },
    })
}

export default useCreateMutationLink
