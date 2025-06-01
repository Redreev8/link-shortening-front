import { Dialog } from 'radix-ui'
import Btn from '../btn'
import type { BtnProps } from '../btn/btn'
import type { BtnAsButton } from '../btn/btn-content'

interface BtnModalProps extends Omit<BtnAsButton, 'as'>, BtnProps {
    isTrigger?: boolean
}

const BtnModal = ({ children, isTrigger, ...props }: BtnModalProps) => {
    if (isTrigger) {
        return (
            <Dialog.Trigger asChild>
                <Btn as="btn" {...props}>
                    {children}
                </Btn>
            </Dialog.Trigger>
        )
    }
    return (
        <Dialog.Close asChild>
            <Btn as="btn" {...props}>
                {children}
            </Btn>
        </Dialog.Close>
    )
}

export default BtnModal
