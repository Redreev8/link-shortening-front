import { Dialog } from 'radix-ui'
import type { AreaHTMLAttributes, FC } from 'react'
import Text from '../text'

const DescriptionModal: FC<AreaHTMLAttributes<HTMLParagraphElement>> = ({
    children,
    ...props
}) => {
    return (
        <Dialog.Description asChild>
            <Text {...props}>{children}</Text>
        </Dialog.Description>
    )
}

export default DescriptionModal
