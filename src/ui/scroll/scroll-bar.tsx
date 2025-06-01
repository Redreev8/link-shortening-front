import classNames from 'classnames'
import { ScrollArea } from 'radix-ui'
import type { FC, ReactElement, ReactNode, RefAttributes } from 'react'
import type { ScrollContent } from './scroll-content'

interface ScrollBar extends Omit<RefAttributes<HTMLDivElement>, 'children'> {
    className?: string
    children: ReactElement<ScrollContent>
}

const ScrollBar: FC<ScrollBar> = ({ children, className, ...props }) => {
    const cl = classNames(className, 'overflow-hidden')
    const clScrollBar =
        'bg-bg flex touch-none rounded-[10px] transition-colors duration-[160ms] ease-out select-none data-[orientation=horizontal]:flex-col data-[state=visible]:animate-fade-in data-[state=hidden]:animate-fade-out'
    const clThumb =
        'bg-text hover:bg-active transition-colors duration-[160ms] relative flex-1 rounded-[10px]'
    return (
        <ScrollArea.Root className={cl} {...props}>
            {children as ReactNode}
            <ScrollArea.Scrollbar
                className={clScrollBar}
                orientation="vertical"
                style={{ width: '4px' }}
            >
                <ScrollArea.Thumb className={clThumb} />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar
                className={clScrollBar}
                orientation="horizontal"
                style={{ height: '4px' }}
            >
                <ScrollArea.Thumb className={clThumb} />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="bg-blackA5" />
        </ScrollArea.Root>
    )
}

export default ScrollBar
