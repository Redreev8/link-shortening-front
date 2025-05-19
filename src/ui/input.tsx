import type { FC, InputHTMLAttributes } from 'react'
import classNames from 'classnames'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
    className,
    ...props
}) => {
    const cl = classNames(
        className,
        'text-text text-xl p-0 font-medium',
        'border-b-2 border-text outline-none',
        'transition-[border-color, opacity] duration-700',
        'hover:border-active focus:border-active',
        'placeholder:text-xl placeholder:text-placeholder',
        'disabled:opacity-50',
    )
    return <input type="text" className={cl} {...props} />
}

export default Input
