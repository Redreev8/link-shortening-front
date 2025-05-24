import type { FC, FormHTMLAttributes } from 'react'
import Label from '../../../ui/label'
import Input from '../../../ui/input'
import Error from '../../../ui/error'
import classNames from 'classnames'
import useAuth from '../hooks/useAuth'
import Btn from '../../../ui/btn'

const FormAuth: FC<FormHTMLAttributes<HTMLFormElement>> = ({
    className,
    ...props
}) => {
    const cl = classNames(className, 'flex flex-col gap-10')
    const { register, auth, errors } = useAuth()

    return (
        <form onSubmit={auth} className={cl} {...props}>
            <div className="flex flex-col gap-5">
                <Label>
                    <span>Name</span>
                    <Input
                        placeholder="ivan5"
                        type="text"
                        {...register('name')}
                    />
                    {errors.name && <Error>{errors.name.message}</Error>}
                </Label>
                <Label>
                    <span>Password</span>
                    <Input
                        placeholder="******"
                        type="password"
                        {...register('password')}
                    />
                    {errors.password && (
                        <Error>{errors.password.message}</Error>
                    )}
                </Label>
            </div>
            <div className="flex gap-2">
                <Btn className="w-full" as="btn">
                    Login
                </Btn>
                <Btn
                    className="w-full"
                    as="router"
                    to="/registration"
                    isOutline
                >
                    registration
                </Btn>
            </div>
        </form>
    )
}

export default FormAuth
