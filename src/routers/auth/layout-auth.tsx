import { createContext, useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { Outlet, useNavigate } from 'react-router'
import checkToken from './api/check-token'

export const LayoutAuthContext = createContext<{
    setSignal: Dispatch<SetStateAction<symbol>>
}>({
    setSignal: () => {},
})

const LayoutAuth = () => {
    const [signal, setSignal] = useState<symbol>(Symbol('signal'))
    const navigate = useNavigate()
    const checkTokenLocalStorage = async () => {
        const token = localStorage.getItem('auth-token')
        try {
            await checkToken({ headers: { token } })
            navigate('/links')
        } catch {
            navigate('/auth')
        }
    }
    useEffect(() => {
        checkTokenLocalStorage()
    }, [signal])

    return (
        <LayoutAuthContext.Provider value={{ setSignal }}>
            <Outlet />
        </LayoutAuthContext.Provider>
    )
}

export default LayoutAuth
