import * as z from 'zod'

export const formSchemaAuth = z.object({
    name: z
        .string()
        .min(2, 'minimum number of characters 2')
        .max(50, 'maximum number of characters 50')
        .nonempty('required field'),
    password: z
        .string()
        .min(2, 'minimum number of characters 2')
        .max(255, 'maximum number of characters 255')
        .nonempty('required field'),
})

export type FormFieldsAuth = z.infer<typeof formSchemaAuth>
