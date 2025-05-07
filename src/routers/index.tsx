import type { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

const Routers: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>{/* <Route path="/" element} />*/}</Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
