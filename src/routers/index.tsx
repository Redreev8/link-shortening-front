import type { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import PageLinksList from './links/page-links-list'
import PageAuth from './auth/page-auth'

const Routers: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/links" element={<PageLinksList />} />
                </Route>
                <Route>
                    <Route path="/auth" element={<PageAuth />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
