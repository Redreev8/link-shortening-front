import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import checkToken from './api/check-token'

const LayoutAuth = () => {
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
    }, [])

    return (
        <>
            <Outlet />
        </>
    )
}

export default LayoutAuth
