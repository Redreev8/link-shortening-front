import type { FC, MouseEvent } from 'react'
import ModalConfirmation from '../../../components/modal-confirmation'
import { DescriptionModal, TitleModal } from '../../../ui/modal'
import type { Link } from '../type/link'
import useDeleteLink from '../hooks/useDeleteLink'
import Error from '../../../ui/error'

interface ModalRemoveLinkProps extends Link {
    closeModal: () => void
}

const ModalRemoveLink: FC<ModalRemoveLinkProps> = ({
    url,
    customUrl,
    closeModal,
}) => {
    const { handelRemove, isLoading, error } = useDeleteLink(customUrl)
    const handelYes = async (e: MouseEvent) => {
        e.preventDefault()
        await handelRemove()
        closeModal()
    }
    return (
        <ModalConfirmation
            onYes={handelYes}
            onNo={closeModal}
            isLoading={isLoading}
        >
            <TitleModal>Remove link</TitleModal>
            <div className="max-w-full overflow-hidden">
                <DescriptionModal>
                    Remove link <span className="text-nowrap">{url}?</span>
                </DescriptionModal>
                {error!.length > 0 && <Error>{error}</Error>}
            </div>
        </ModalConfirmation>
    )
}

export default ModalRemoveLink
