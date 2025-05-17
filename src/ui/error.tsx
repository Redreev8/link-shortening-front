import classNames from 'classnames'
import type { AllHTMLAttributes, FC } from 'react'

const Error: FC<AllHTMLAttributes<HTMLSpanElement>> = (
    { className, children, ...props },
    ref,
) => {
    const cl = classNames(className, 'text-red')

    return (
        <span className={cl} {...props} ref={ref}>
            {children}
        </span>
    )
}

export default Error
