import classNames from 'classnames'
import type { ButtonProps } from './btn-content'
import BtnContent from './btn-content'

export interface BtnProps {
    isOutline?: boolean
}

const Btn = ({
    className,
    isOutline,
    children,
    ...props
}: BtnProps & ButtonProps): JSX.Element => {
    const cl = classNames(
        className,
        'text-xl pt-[5px] pb-1 px-5 border-2 border-active text-center',
        'rounded-xl transition-[border-radius, border-color, background-color, opacity] duration-700',
        'hover:rounded-[40px]',
        'disabled:opacity-30 disabled:pointer-events-none',
        {
            'bg-active text-active-text focus:bg-active-f': !isOutline,
            'color-text focus:border-active-f': isOutline,
        },
    )

    return (
        <BtnContent className={cl} {...props}>
            {children}
        </BtnContent>
    )
}

export default Btn
