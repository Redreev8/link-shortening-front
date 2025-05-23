import classNames from 'classnames'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router'
import type { LinkProps } from 'react-router'

export type BaseProps = {
    children: React.ReactNode
    className?: string
    isOutline?: boolean
}

export type BtnAsButton = BaseProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
        as: 'btn'
    }

export type BtnAsLink = BaseProps &
    Omit<LinkProps, keyof BaseProps> & {
        as: 'router'
    }

export type BtnAsExternal = BaseProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
        as: 'link'
    }

export type ButtonProps = BtnAsButton | BtnAsExternal | BtnAsLink

const Btn = ({
    className,
    isOutline,
    children,
    ...props
}: ButtonProps): JSX.Element => {
    const cl = classNames(
        className,
        'text-xl pt-[5px] pb-1 px-5 border-2 border-active',
        'rounded-xl transition-[border-radius, border-color, background-color, opacity] duration-700',
        'hover:rounded-[40px]',
        'disabled:opacity-50',
        {
            'bg-active text-active-text focus:bg-active-f': !isOutline,
            'color-text focus:border-active-f': isOutline,
        },
    )

    if (props.as === 'router') {
        return (
            <Link className={cl} {...props}>
                {children}
            </Link>
        )
    }
    if (props.as === 'link') {
        return (
            <a
                className={cl}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        )
    }
    return (
        <button className={cl} {...props}>
            {children}
        </button>
    )
}

export default Btn
