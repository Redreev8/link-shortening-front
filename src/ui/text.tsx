import classNames from 'classnames'
import type { AreaHTMLAttributes, FC } from 'react'

const Text: FC<AreaHTMLAttributes<HTMLParagraphElement>> = ({
    className,
    children,
    ...props
}) => {
    const cl = classNames(className, 'text-xl')

    return (
        <p className={cl} {...props}>
            {children}
        </p>
    )
}

export default Text
