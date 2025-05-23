import type { FC, MouseEvent, ReactNode } from 'react'
import { BtnModal, ContentModal, OverlayModal } from '../ui/modal'

interface ModalConfirmationProps {
    children: ReactNode
    yesContent?: ReactNode
    noContent?: ReactNode
    onYes: (e: MouseEvent) => void
    onNo?: (e: MouseEvent) => void
    isLoading?: boolean
}

const ModalConfirmation: FC<ModalConfirmationProps> = ({
    yesContent = 'yes',
    noContent = 'no',
    children,
    onYes,
    onNo,
    isLoading,
}) => {
    return (
        <div>
            <OverlayModal onClick={onNo} />
            <ContentModal className="flex max-w-[480px] flex-col gap-5">
                {children && <div>{children}</div>}
                <div className="flex gap-2">
                    <BtnModal
                        disabled={isLoading}
                        className="w-full"
                        onClick={onYes}
                    >
                        {yesContent}
                    </BtnModal>
                    <BtnModal
                        disabled={isLoading}
                        className="w-full"
                        isOutline
                        onClick={onNo}
                    >
                        {noContent}
                    </BtnModal>
                </div>
            </ContentModal>
        </div>
    )
}

export default ModalConfirmation
