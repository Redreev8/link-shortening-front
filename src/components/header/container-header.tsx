import type { FC } from 'react'
import Container, { type ContainerProps } from '../../ui/container'
import classNames from 'classnames'

const ContainerHeader: FC<ContainerProps> = ({
    className,
    children,
    ...props
}) => {
    const cl = classNames(className, 'inline-grid grid-cols-3 p-4')
    return (
        <Container className={cl} {...props}>
            {children}
        </Container>
    )
}


export default ContainerHeader