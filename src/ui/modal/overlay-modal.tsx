import classNames from 'classnames'
import { Dialog } from 'radix-ui'
import type { AreaHTMLAttributes, FC } from 'react'

const OverlayModal: FC<AreaHTMLAttributes<HTMLDivElement>> = ({
    className,
    ...props
}) => {
    const cl = classNames(
        className,
        'bg-text data-[state=open]:animate-overlayShow fixed inset-0 opacity-50 z-20',
    )
    return <Dialog.Overlay className={cl} {...props} />
}

export default OverlayModal
