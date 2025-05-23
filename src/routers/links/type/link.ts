import * as z from 'zod'

export interface Link {
    url: string
    customUrl: string
    description?: string
}

export const formSchemaLink = z.object({
    url: z.string().url('field must be a url').nonempty('required field'),
    customUrl: z.string().nonempty('required field'),
    description: z
        .union([z.string().length(0), z.string()])
        .optional()
        .transform((e) => (e === '' ? '' : e)),
})

export type FormFields = z.infer<typeof formSchemaLink>
