import classNames from 'classnames'
import type { FC, AreaHTMLAttributes } from 'react'

interface HeaderProps extends AreaHTMLAttributes<HTMLDivElement> {
    isContainer?: boolean
}

const Header: FC<HeaderProps> = ({ isContainer, className, children }) => {
    const cl = classNames(
        className,
        'rounded-xl bg-card',
        'sticky bottom-1 w-full',
        {
            'inline-grid grid-cols-3 p-4': !isContainer,
        },
    )
    return <header className={cl}>{children}</header>
}

export default Header
