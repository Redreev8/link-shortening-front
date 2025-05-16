import classNames from 'classnames'
import type { AreaHTMLAttributes, FC } from 'react'

const RightHeader: FC<AreaHTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    ...props
}) => {
    const cl = classNames(className, 'col-start-3 col-end-4')
    return (
        <div className={cl} {...props}>
            {children}
        </div>
    )
}

export default RightHeader
