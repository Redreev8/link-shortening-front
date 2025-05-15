import { type AreaHTMLAttributes, type FC } from 'react'
import classNames from 'classnames'

interface ContainerProps extends AreaHTMLAttributes<HTMLDivElement> {
    isFull?: boolean
}

const Container: FC<ContainerProps> = ({
    className,
    children,
    isFull,
    ...props
}) => {
    const cl = classNames(className, 'w-full mx-auto', {
        'max-w-[1600px] px-4 lg:px-10': !isFull,
        'max-w-full px-1': isFull,
    })
    return (
        <div className={cl} {...props}>
            {children}
        </div>
    )
}

export default Container
