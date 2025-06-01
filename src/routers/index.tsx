import type { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import PageLinksList from './links/page-links-list'
import PageAuth from './auth/page-auth'
import LayoutAuth from './auth/layout-auth'
import PageRegistration from './auth/page-registration'

const Routers: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutAuth />}>
                    <Route>
                        <Route path="/links" element={<PageLinksList />} />
                    </Route>
                    <Route>
                        <Route path="/" element={<PageAuth />} />
                    </Route>
                    <Route>
                        <Route path="/auth" element={<PageAuth />} />
                    </Route>
                    <Route>
                        <Route
                            path="/registration"
                            element={<PageRegistration />}
                        />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
