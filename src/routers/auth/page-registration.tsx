import type { FC } from 'react'
import Container from '../../ui/container'
import { VisuallyHidden } from 'radix-ui'
import Title from '../../ui/title'
import Card from '../../ui/card'
import FormRegistration from './components/form-registration'

const PageRegistration: FC = () => {
    return (
        <main>
            <section>
                <Container className="flex min-h-screen flex-col items-center justify-center">
                    <VisuallyHidden.Root asChild>
                        <Title as={1}>Registration</Title>
                    </VisuallyHidden.Root>
                    <Card className="w-full max-w-[720px]">
                        <FormRegistration />
                    </Card>
                </Container>
            </section>
        </main>
    )
}

export default PageRegistration
