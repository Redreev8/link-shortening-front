import { ScrollArea } from 'radix-ui'
import type { FC, ReactNode, RefAttributes } from 'react'

export interface ScrollContent extends RefAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
}

const ScrollContent: FC<ScrollContent> = ({ children, ...props }) => {
    return <ScrollArea.Viewport {...props}>{children}</ScrollArea.Viewport>
}

export default ScrollContent
