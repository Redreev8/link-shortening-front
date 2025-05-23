import { useId, type FC } from 'react'
import Card from '../../../ui/card'
import FormLink from './form-link'
import Btn from '../../../ui/btn'
import useCreateLink from '../hooks/useCreateLink'

const CardLinkCreate: FC = () => {
    const idForm = useId()
    const { register, onSubmitLink, errors, isLoading } = useCreateLink()
    return (
        <Card className="flex h-full min-h-[360px] flex-col gap-5">
            <FormLink
                isLoading={isLoading}
                className="h-full"
                onSubmit={onSubmitLink}
                register={register}
                errors={errors}
                id={idForm}
            />
            <div className="flex gap-2">
                <Btn disabled={isLoading} form={idForm} type="submit" as="btn">
                    Add
                </Btn>
            </div>
        </Card>
    )
}

export default CardLinkCreate
