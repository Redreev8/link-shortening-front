import classNames from 'classnames'
import {
    type FC,
    type AreaHTMLAttributes,
    useEffect,
    useRef,
    useState,
} from 'react'

const Header: FC<AreaHTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    ...props
}) => {
    const cl = classNames(
        className,
        'rounded-xl bg-card min-w-[340px]',
        'sticky bottom-1 h-[72px]',
        'transition-[width] duration-300',
        'inline-grid gap-4 grid-cols-3 p-4 items-center',
        'border-2 border-bg',
    )
    const [width, setWidth] = useState<number>(0)
    const ref = useRef<HTMLDivElement>(null)
    const handelScroll = () => {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop
        if (
            Math.ceil(scrollTop) ==
            document.body.scrollHeight - window.innerHeight
        ) {
            ref.current!.style.width = '100%'
            return
        }
        ref.current!.style.width = `${width}px`
    }
    const handelResize = () => {
        if (ref.current) {
            const header = ref.current!
            const children = [...header.childNodes]
            let width = 0
            for (let i = 0; i < children.length; i++) {
                const el = children[i] as HTMLElement
                width += el.clientWidth
            }
            setWidth(width)
        }
    }
    useEffect(() => {
        handelResize()
        handelScroll()
        window.addEventListener('scroll', handelScroll)
        window.addEventListener('resize', handelResize)
        return () => {
            window.removeEventListener('scroll', handelScroll)
            window.removeEventListener('resize', handelResize)
        }
    }, [])
    return (
        <header className={cl} {...props} ref={ref}>
            {children}
        </header>
    )
}

export default Header
