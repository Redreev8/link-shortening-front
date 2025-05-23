import type { FC, FormHTMLAttributes } from 'react'
import Input from '../../../ui/input'
import Label from '../../../ui/label'
import classNames from 'classnames'
import Textarea from '../../../ui/textarea'
import type { Link } from '../type/link'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import Error from '../../../ui/error'
import { VisuallyHidden } from 'radix-ui'

interface FormLinkProps extends FormHTMLAttributes<HTMLFormElement> {
    isLoading: boolean
    register: UseFormRegister<Link>
    errors: FieldErrors<Link>
}

const FormLink: FC<FormLinkProps> = ({
    isLoading,
    register,
    errors,
    className,
    ...props
}) => {
    const cl = classNames(className, 'flex flex-col justify-between gap-4')

    return (
        <form className={cl} {...props}>
            <fieldset className="flex flex-col gap-4">
                <VisuallyHidden.Root asChild>
                    <legend>Data URL</legend>
                </VisuallyHidden.Root>
                <Label>
                    <span>URL site</span>
                    <Input
                        disabled={isLoading}
                        placeholder="https://link"
                        type="url"
                        {...register('url')}
                    />
                    {errors.url && <Error>{errors.url.message}</Error>}
                </Label>
                <Label>
                    <span>Custom name URL</span>
                    <Input
                        disabled={isLoading}
                        placeholder="l"
                        type="text"
                        {...register('customUrl')}
                    />
                    {errors.customUrl && (
                        <Error>{errors.customUrl.message}</Error>
                    )}
                </Label>
            </fieldset>
            <Label>
                <span>Description</span>
                <Textarea
                    disabled={isLoading}
                    placeholder="Description"
                    {...register('description')}
                ></Textarea>
            </Label>
        </form>
    )
}

export default FormLink
