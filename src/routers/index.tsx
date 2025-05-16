import type { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import PageLinksList from './links/page-links-list'

const Routers: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/links" element={<PageLinksList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
