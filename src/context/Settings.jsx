// === IMPORTS ============================
// React
import { createContext, useReducer } from "react"



export const SettingsContext = createContext()

const settingsReducer = (state, action) => {
    switch(action.type) {
        case 'initialLoad' :
            return { ...state, initialLoad: action.payload }
        default: 
            return state
    }
}

export function SettingsProvider({ children }) {
    const [state, dispath] = useReducer(settingsReducer, {
        initialLoad: true
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