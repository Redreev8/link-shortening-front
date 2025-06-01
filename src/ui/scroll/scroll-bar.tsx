import classNames from 'classnames'
import { ScrollArea } from 'radix-ui'
import type { FC, ReactElement, ReactNode, RefAttributes } from 'react'
import type { ScrollContent } from './scroll-content'

interface ScrollBar extends Omit<RefAttributes<HTMLDivElement>, 'children'> {
    className?: string
    children: ReactElement<ScrollContent>
}

const ScrollBar: FC<ScrollBar> = ({ children, className, ...props }) => {
    const cl = classNames(className)
    return (
        <ScrollArea.Root className={cl} {...props}>
            {children as ReactNode}
            <ScrollArea.Viewport />
            <ScrollArea.Scrollbar orientation="horizontal">
                <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar orientation="vertical">
                <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner />
        </ScrollArea.Root>
    )
}

export default ScrollBar
