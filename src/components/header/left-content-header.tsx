import classNames from 'classnames'
import type { AreaHTMLAttributes, FC } from 'react'

const LefContentHeader: FC<AreaHTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    ...props
}) => {
    const cl = classNames(className, 'col-start-1 col-end-2 border-right')
    return (
        <div className={cl} {...props}>
            {children}
        </div>
    )
}

export default LefContentHeader
