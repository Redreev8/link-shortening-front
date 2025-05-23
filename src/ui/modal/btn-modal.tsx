import { Dialog } from 'radix-ui'
import Btn, { type BtnAsButton } from '../btn'

interface BtnModalProps extends Omit<BtnAsButton, 'as'> {
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
