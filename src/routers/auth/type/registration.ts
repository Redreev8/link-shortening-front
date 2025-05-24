import * as z from 'zod'

export const formSchemaRegistration = z
    .object({
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
        confirmPassword: z
            .string()
            .min(2, 'minimum number of characters 2')
            .max(255, 'maximum number of characters 255')
            .nonempty('required field'),
    })
    .superRefine(({ password, confirmPassword }, ctx) => {
        if (password !== confirmPassword) {
            ctx.addIssue({
                code: 'custom',
                path: ['confirmPassword', 'password'],
                message: 'The passwords did not match',
            })
        }
    })

export type FormFieldsRegistration = z.infer<typeof formSchemaRegistration>
