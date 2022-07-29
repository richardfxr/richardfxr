// === IMPORTS ============================
// React
import { createContext, useReducer } from "react"



export const SettingsContext = createContext()

const settingsReducer = (state, action) => {
    switch(action.type) {
        case 'initialLoad':
            return { ...state, initialLoad: action.payload }

        case 'colorScheme':
            console.log('change color scheme to:', action.payload)
            // store in local storage
            localStorage.setItem('colorScheme', action.payload)
            // set data-colorScheme attribute
            document.documentElement.setAttribute('data-colorScheme', action.payload)
            return { ...state, colorScheme: action.payload }
            
        case 'contrast':
            console.log('change contrast to:', action.payload)
            // store in local storage
            localStorage.setItem('contrast', action.payload)
            // set data-colorScheme attribute
            document.documentElement.setAttribute('data-contrast', action.payload)
            return { ...state, contrast: action.payload }

        default: 
            return state
    }
}

export function SettingsProvider({ children }) {
    const [state, dispath] = useReducer(settingsReducer, {
        initialLoad: true,
        colorScheme: 'auto',
        contrast: 'auto'
    })

    const changeSetting = (setting, value) => {
        dispath({ type: setting, payload: value })
    }

    return (
        <SettingsContext.Provider value={{ ...state, changeSetting }}>
            {children}
        </SettingsContext.Provider>
    )
}