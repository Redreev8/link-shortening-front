import type { FC } from 'react'
import Title, { type TitleProps } from '../../../ui/title'
import Card from '../../../ui/card'
import Text from '../../../ui/text'
import type Link from '../type/link'
import { Link as LinkRouter } from 'react-router'

interface CardLinkProps extends Link {
    as?: TitleProps['as']
}

const CardLink: FC<CardLinkProps> = ({ as, url, customurl, description }) => {
    const sizeTitleCustomUrl = (as ?? 2) + 1
    return (
        <LinkRouter to={`/links/${customurl}`}>
            <Card className="flex min-h-[360px] flex-col justify-between">
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
                        {customurl}
                    </Title>
                </div>
                {description && <Text>{description}</Text>}
            </Card>
        </LinkRouter>
    )
}

export default CardLink
