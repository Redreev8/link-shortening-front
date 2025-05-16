import classNames from 'classnames'
import { type FC, type AreaHTMLAttributes, useEffect, useRef } from 'react'

interface HeaderProps extends AreaHTMLAttributes<HTMLDivElement> {
    isContainer?: boolean
}

const Header: FC<HeaderProps> = ({
    isContainer,
    className,
    children,
    ...props
}) => {
    const cl = classNames(
        className,
        'rounded-xl bg-card',
        'sticky bottom-1 h-[72px]',
        'transition-[width] duration-300',
        {
            'inline-grid grid-cols-3 p-4': !isContainer,
        },
    )
    const ref = useRef<HTMLDivElement>(null)
    const handelScroll = () => {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop
        console.log(Math.ceil(scrollTop))
        console.log(document.body.scrollHeight - window.innerHeight)
        if (
            Math.ceil(scrollTop) <=
            document.body.scrollHeight - window.innerHeight
        ) {
            ref.current!.style.width = '100%'
            return
        }
        const header = ref.current!
        let width = 0
        const children = [...header.childNodes]
        for (let i = 0; i < children.length; i++) {
            const el = children[i] as HTMLElement
            width += el.clientWidth
        }
        ref.current!.style.width = `${width}px`
    }
    useEffect(() => {
        handelScroll()
        window.addEventListener('scroll', handelScroll)

        return () => {
            window.removeEventListener('scroll', handelScroll)
        }
    }, [])
    return (
        <header className={cl} {...props} ref={ref}>
            {children}
        </header>
    )
}

export default Header
