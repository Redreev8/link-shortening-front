import classNames from 'classnames'
import { ScrollArea } from 'radix-ui'
import type { FC, ReactNode, RefAttributes } from 'react'

export interface ScrollContent extends RefAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
}

const ScrollContent: FC<ScrollContent> = ({
    children,
    className,
    ...props
}) => {
    const cl = classNames(className, 'size-full')
    return (
        <ScrollArea.Viewport className={cl} {...props}>
            {children}
        </ScrollArea.Viewport>
    )
}

export default ScrollContent
