import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router'
import type { LinkProps } from 'react-router'

export type BaseProps = {
    children: React.ReactNode
    className?: string
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

const BtnContent = ({
    className,
    children,
    ...props
}: ButtonProps): JSX.Element => {
    if (props.as === 'router') {
        return (
            <Link className={className} {...props}>
                {children}
            </Link>
        )
    }
    if (props.as === 'link') {
        return (
            <a
                className={className}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        )
    }
    return (
        <button className={className} {...props}>
            {children}
        </button>
    )
}

export default BtnContent
