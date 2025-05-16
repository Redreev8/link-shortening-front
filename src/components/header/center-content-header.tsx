import classNames from 'classnames'
import type { AreaHTMLAttributes, FC } from 'react'

const CenterHeader: FC<AreaHTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    ...props
}) => {
    const cl = classNames(className, 'col-start-2 col-end-3')
    return (
        <div className={cl} {...props}>
            {children}
        </div>
    )
}

export default CenterHeader
