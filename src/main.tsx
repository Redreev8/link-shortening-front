import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Popover } from 'radix-ui'
import './index.css'
import Routers from './routers'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Popover.Root>
            <QueryClientProvider client={queryClient}>
                <Routers />
            </QueryClientProvider>
        </Popover.Root>
    </StrictMode>,
)
