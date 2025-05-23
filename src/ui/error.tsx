import classNames from 'classnames'
import type { AllHTMLAttributes, FC } from 'react'

const Error: FC<AllHTMLAttributes<HTMLSpanElement>> = ({
    className,
    children,
    ...props
}) => {
    const cl = classNames(className, 'text-red')

    return (
        <span className={cl} {...props}>
            {children}
        </span>
    )
}

export default Error
