import type { FC, FormHTMLAttributes } from 'react'
import Label from '../../../ui/label'
import Input from '../../../ui/input'
import Error from '../../../ui/error'
import classNames from 'classnames'
import useRegistration from '../hooks/useRegistration'
import Btn, { BtnText } from '../../../ui/btn'

const FormRegistration: FC<FormHTMLAttributes<HTMLFormElement>> = ({
    className,
    ...props
}) => {
    const cl = classNames(className, 'flex flex-col gap-10')
    const { register, registration, errors, isLoading } = useRegistration()

    return (
        <form onSubmit={registration} className={cl} {...props}>
            <div className="flex flex-col gap-5">
                <Label>
                    <span>Name</span>
                    <Input
                        disabled={isLoading}
                        placeholder="ivan5"
                        type="text"
                        {...register('name')}
                    />
                    {errors.name && <Error>{errors.name.message}</Error>}
                </Label>
                <Label>
                    <span>Password</span>
                    <Input
                        disabled={isLoading}
                        placeholder="******"
                        type="password"
                        {...register('password')}
                    />
                    {errors.password && (
                        <Error>{errors.password.message}</Error>
                    )}
                </Label>
                <Label>
                    <span>Confirm password</span>
                    <Input
                        disabled={isLoading}
                        placeholder="******"
                        type="password"
                        {...register('confirmPassword')}
                    />
                    {errors.confirmPassword && (
                        <Error>{errors.confirmPassword.message}</Error>
                    )}
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Btn disabled={isLoading} className="w-full" as="btn">
                    registration
                </Btn>
                <div className="flex w-full items-center justify-center">
                    <BtnText as="router" to="/auth">
                        Login
                    </BtnText>
                </div>
            </div>
        </form>
    )
}

export default FormRegistration
