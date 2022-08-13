// === IMPORTS ============================
// React
import { useEffect } from 'react'
// hooks
import { useSettings } from '../hooks/useSettings'
import { userSettings } from '../context/Settings'



export default function AppWrapper({ children }) {
    const { changeSetting } = useSettings()

    useEffect(() => {
        // initialize user settings
        userSettings.forEach((setting) => {
            localStorage.getItem(setting.name) ? changeSetting(setting.name, localStorage.getItem(setting.name)) : changeSetting(setting.name, setting.default)
        })
    }, [])

    return <>{children}</>

}