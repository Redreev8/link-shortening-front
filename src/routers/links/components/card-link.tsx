import { useContext, useId, useState, type FC } from 'react'
import Title, { type TitleProps } from '../../../ui/title'
import Card from '../../../ui/card'
import Text from '../../../ui/text'
import type { Link } from '../type/link'
import FormLink from './form-link'
import Btn from '../../../ui/btn'
import useChangeLink from '../hooks/useChangeLink'
import { BtnModal } from '../../../ui/modal'
import { Dialog } from 'radix-ui'
import ModalRemoveLink from './modal-remove-link'
import QR from '../../../ui/qr'
import { LayoutAuthContext } from '../../auth/layout-auth'

interface CardLinkProps extends Link {
    as?: TitleProps['as']
}

const CardLink: FC<CardLinkProps> = ({ as, url, customUrl, description }) => {
    const { userData } = useContext(LayoutAuthContext)
    const { id } = userData! ?? {}
    const sizeTitleCustomUrl = (as ?? 2) + 1
    const [isChange, setIsChange] = useState<boolean>(false)
    const idForm = useId()
    const { register, onSubmitLink, errors, isLoading } = useChangeLink({
        url,
        customUrl,
        description,
        cbCreate: () => setIsChange(false),
    })
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    return (
        <Dialog.Root open={isOpen}>
            <Card className="flex h-full min-h-[360px] flex-col gap-5">
                {!isChange ? (
                    <div className="flex h-full flex-col justify-between">
                        {' '}
                        <div className="max-w-full overflow-hidden">
                            <Title className="text-nowrap" as={as} size={4}>
                                {url}
                            </Title>
                            <Title
                                size={5}
                                as={
                                    sizeTitleCustomUrl >= 7
                                        ? 6
                                        : (sizeTitleCustomUrl as TitleProps['as'])
                                }
                            >
                                {customUrl}
                            </Title>
                        </div>
                        {description && (
                            <Text className="mr-[80px]">{description}</Text>
                        )}
                    </div>
                ) : (
                    <FormLink
                        isLoading={isLoading}
                        className="h-full"
                        onSubmit={onSubmitLink}
                        register={register}
                        errors={errors}
                        id={idForm}
                    />
                )}
                <div className="flex items-end gap-2">
                    {!isChange ? (
                        <>
                            <Btn
                                as="btn"
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setIsChange(true)
                                }}
                                isOutline
                            >
                                Change
                            </Btn>
                            <BtnModal
                                onClick={openModal}
                                type="button"
                                isOutline
                                isTrigger
                            >
                                Remove
                            </BtnModal>

                            <div className="ml-auto flex h-[40px] items-end">
                                <QR
                                    title={`to http://localhost:3000/l/${id}/${customUrl}`}
                                    value={`http://localhost:3000/l/${id}/${customUrl}`}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <Btn
                                disabled={isLoading}
                                form={idForm}
                                type="submit"
                                as="btn"
                            >
                                Change
                            </Btn>
                            <Btn
                                disabled={isLoading}
                                as="btn"
                                type="button"
                                onClick={() => setIsChange(false)}
                                isOutline
                            >
                                Close
                            </Btn>
                        </>
                    )}
                </div>
            </Card>
            <ModalRemoveLink
                closeModal={closeModal}
                url={url}
                customUrl={customUrl}
                description={description}
            />
        </Dialog.Root>
    )
}

export default CardLink
