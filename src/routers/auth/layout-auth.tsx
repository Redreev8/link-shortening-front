import { createContext, useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { Outlet, useNavigate } from 'react-router'
import checkToken from './api/check-token'
import type { User } from './type/user'
import UserData from './api/user-data'

export const LayoutAuthContext = createContext<{
    setSignal: Dispatch<SetStateAction<symbol>>
    userData: User | null
}>({
    setSignal: () => {},
    userData: null,
})

const LayoutAuth = () => {
    const [signal, setSignal] = useState<symbol>(Symbol('signal'))
    const [userData, setUserData] = useState<User | null>(null)
    const navigate = useNavigate()
    const checkTokenLocalStorage = async () => {
        const token = localStorage.getItem('auth-token')
        const url = window.location.href
        try {
            await checkToken({ headers: { token } })
            navigate('/links')
            const { data } = (await UserData()) as { data: User }
            setUserData(data)
        } catch {
            if (!url.includes('links')) return
            navigate('/auth')
            setUserData(null)
        }
    }
    useEffect(() => {
        checkTokenLocalStorage()
    }, [signal])

    return (
        <LayoutAuthContext.Provider value={{ setSignal, userData }}>
            <Outlet />
        </LayoutAuthContext.Provider>
    )
}

export default LayoutAuth
