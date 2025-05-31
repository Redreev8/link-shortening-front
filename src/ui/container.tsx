import { type AreaHTMLAttributes, type FC } from 'react'
import classNames from 'classnames'

export interface ContainerProps extends AreaHTMLAttributes<HTMLDivElement> {
    isFull?: boolean
    isSmall?: boolean
}

const Container: FC<ContainerProps> = ({
    className,
    children,
    isFull,
    isSmall,
    ...props
}) => {
    const cl = classNames(className, 'w-full mx-auto', {
        'max-w-[1600px] px-2 lg:px-10': !isFull && !isSmall,
        'max-w-[1920px] pt-1 pb-2 px-1': isFull,
        'max-w-[600px] px-2 lg:px-10': isSmall,
    })
    return (
        <div className={cl} {...props}>
            {children}
        </div>
    )
}

export default Container
