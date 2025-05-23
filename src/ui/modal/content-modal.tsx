import classNames from 'classnames'
import { Dialog } from 'radix-ui'
import type { AreaHTMLAttributes, FC } from 'react'
import Card from '../card'

const ContentModal: FC<AreaHTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    ...props
}) => {
    const cl = classNames(
        className,
        'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30',
        'data-[state=open]:animate-contentShow',
    )
    return (
        <Dialog.Content asChild>
            <Card className={cl} {...props}>
                {children}
            </Card>
        </Dialog.Content>
    )
}

export default ContentModal
