import type { FC } from 'react'
import Container from '../../ui/container'
import Title from '../../ui/title'
import GridLinks from './components/grid-links'
import { useQuery } from '@tanstack/react-query'
import getLinks from './api/get-links'

const PageLinksList: FC = () => {
    const { isPending, data } = useQuery({
        queryKey: ['links'],
        queryFn: () => getLinks(),
    })
    if (isPending) return
    return (
        <Container isFull className="pt-1 pb-2">
            <Title className="sr-only" as={1}>
                List of links you create
            </Title>
            <GridLinks links={data!} />
        </Container>
    )
}

export default PageLinksList
