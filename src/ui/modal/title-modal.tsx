import { Dialog } from 'radix-ui'
import type { FC } from 'react'
import Title, { type TitleProps } from '../title'

const TitleModal: FC<TitleProps> = ({ children, ...props }) => {
    return (
        <Dialog.Title asChild>
            <Title as={2} size={4} {...props}>
                {children}
            </Title>
        </Dialog.Title>
    )
}

export default TitleModal
