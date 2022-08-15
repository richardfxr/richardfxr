// === IMPORTS ============================
// React
import { createContext, useReducer, useContext } from "react"



export const SettingsContext = createContext()

// user changable settings
export const userSettings = [
    {name: 'colorScheme', default: 'auto'},
    {name: 'contrast', default: 'auto'},
    {name: 'fontSize', default: 'small'},
    {name: 'motionPref', default: 'auto'},
    {name: 'targetSize', default: 'small'},
]

// initial settings object fed into useReducer() below
const initSettings = { initialLoad: true }
// loop through userSettings and add each to initSettings
userSettings.forEach((setting) => {
    initSettings[setting.name] = setting.default
})



const settingsReducer = (state, action) => {
    switch(action.type) {
        case 'initialLoad':
            return { ...state, initialLoad: action.payload }

        case 'colorScheme':
            // store in local storage
            localStorage.setItem('colorScheme', action.payload)
            // set data-colorScheme attribute
            document.documentElement.setAttribute('data-colorScheme', action.payload)
            return { ...state, colorScheme: action.payload }
            
        case 'contrast':
            // store in local storage
            localStorage.setItem('contrast', action.payload)
            // set data-colorScheme attribute
            document.documentElement.setAttribute('data-contrast', action.payload)
            return { ...state, contrast: action.payload }

        case 'fontSize':
            // store in local storage
            localStorage.setItem('fontSize', action.payload)
            // set data-colorScheme attribute
            document.documentElement.setAttribute('data-fontSize', action.payload)
            return { ...state, fontSize: action.payload }

        case 'motionPref':
            // store in local storage
            localStorage.setItem('motionPref', action.payload)
            // set data-colorScheme attribute
            document.documentElement.setAttribute('data-motionPref', action.payload)
            return { ...state, motionPref: action.payload }

        case 'targetSize':
            // store in local storage
            localStorage.setItem('targetSize', action.payload)
            // set data-targetSize attribute
            document.documentElement.setAttribute('data-targetSize', action.payload)
            return { ...state, targetSize: action.payload }

        default: 
            return state
    }
}

export function SettingsProvider({ children }) {
    const [state, dispath] = useReducer(settingsReducer, initSettings)

    const changeSetting = (setting, value) => {
        dispath({ type: setting, payload: value })
    }

    return (
        <SettingsContext.Provider value={{ ...state, changeSetting }}>
            {children}
        </SettingsContext.Provider>
    )
}