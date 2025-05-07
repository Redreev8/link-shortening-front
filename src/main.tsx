import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Popover } from 'radix-ui'
import './index.css'
import Routers from './routers'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Popover.Root>
            <Routers />
        </Popover.Root>
    </StrictMode>,
)
