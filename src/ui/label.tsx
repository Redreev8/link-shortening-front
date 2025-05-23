import type { AreaHTMLAttributes, FC } from 'react'
import classNames from 'classnames'
import { Label as LabelRadix } from 'radix-ui'

const Label: FC<AreaHTMLAttributes<HTMLLabelElement>> = ({
    children,
    className,
    ...props
}) => {
    const cl = classNames(className, 'text-xl flex flex-col')
    return (
        <LabelRadix.Root className={cl} {...props}>
            {children}
        </LabelRadix.Root>
    )
}

export default Label
