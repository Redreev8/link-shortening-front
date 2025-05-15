import { type AreaHTMLAttributes, type FC } from 'react'
import classNames from 'classnames'

const Card: FC<AreaHTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    ...props
}) => {
    const cl = classNames(className, 'p-4 rounded-xl bg-card')
    return (
        <div className={cl} {...props}>
            {children}
        </div>
    )
}

export default Card
