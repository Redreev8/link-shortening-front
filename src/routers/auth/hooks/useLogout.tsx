import { useContext } from 'react'
import fetchLogout from '../api/logout'
import { LayoutAuthContext } from '../layout-auth'

const useLogout = () => {
    const { setSignal } = useContext(LayoutAuthContext)
    const logout = () => {
        fetchLogout()
        localStorage.removeItem('auth-token')
        setSignal(Symbol('signal'))
    }
    return logout
}

export default useLogout