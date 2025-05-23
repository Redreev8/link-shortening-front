import type { FC } from 'react'
import Container from '../../ui/container'
import Title from '../../ui/title'
import GridLinks from './components/grid-links'
import { useQuery } from '@tanstack/react-query'
import getLinks from './api/get-links'
import Header, {
    LeftContentHeader,
    RightContentHeader,
} from '../../components/header'
import Btn from '../../ui/btn'
import { VisuallyHidden } from 'radix-ui'

const PageLinksList: FC = () => {
    const { isPending, data } = useQuery({
        queryKey: ['links'],
        queryFn: () => getLinks(),
    })
    if (isPending) return
    return (
        <Container
            isFull
            className="flex min-h-screen flex-col justify-between"
        >
            <main className="pb-1">
                <VisuallyHidden.Root asChild>
                    <Title as={1}>List of links you create</Title>
                </VisuallyHidden.Root>
                <GridLinks links={data!} />
            </main>
            <Header className="self-center">
                <LeftContentHeader></LeftContentHeader>
                <RightContentHeader>
                    <Btn isOutline as="router" to={'/links/create-link'}>
                        Add
                    </Btn>
                </RightContentHeader>
            </Header>
        </Container>
    )
}

export default PageLinksList
