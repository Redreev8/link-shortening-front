import classNames from 'classnames'
import type { ButtonProps } from './btn-content'
import BtnContent from './btn-content'

const BtnText = ({
    className,
    children,
    ...props
}: ButtonProps): JSX.Element => {
    const cl = classNames(
        className,
        'text-xl p-0 border-none text-active px-1 rounded-xs',
        'bg-size-[100%_2px] bg-linear-[90deg,var(--color-active)_10%,var(--color-active)_100%]',
        'bg-no-repeat bg-[center_bottom]',
        'transition-[color, bg-size, background-image] duration-700',
        'hover:text-bg hover:bg-size-[100%_100%] active:bg-linear-[90deg,var(--color-active-f)_10%,var(--color-active-f)_100%]',
        'disabled:opacity-30 disabled:pointer-events-none',
    )

    return (
        <BtnContent className={cl} {...props}>
            {children}
        </BtnContent>
    )
}

export default BtnText
