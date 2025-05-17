import type { FC, TextareaHTMLAttributes } from 'react'
import classNames from 'classnames'

const Textarea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
    className,
    children,
    ...props
}) => {
    const cl = classNames(
        className,
        'min-h-[320px]',
        'text-text text-xl p-0 font-medium',
        'border-b-2 border-text outline-none resize-none',
        'transition-[border-color] duration-700',
        'hover:border-active focus:border-active',
        'placeholder:text-xl placeholder:text-placeholder',
    )
    return (
        <textarea className={cl} {...props}>
            {children}
        </textarea>
    )
}

export default Textarea
