import { useMutation, useQueryClient } from '@tanstack/react-query'
import putLink from '../api/put-link'
import type { Link } from '../type/link'
import type { AxiosRequestConfig } from 'axios'

const useChangeMutationLink = (config?: AxiosRequestConfig) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (
            body: Link & { newCustomUrl: Link['customUrl'] },
        ) => {
            await putLink(body, config)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['links'] })
        },
    })
}

export default useChangeMutationLink
