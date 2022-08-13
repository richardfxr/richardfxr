// === IMPORTS ============================
// React
import { useContext } from "react"
import { SettingsContext } from "../context/Settings"

export const useSettings = () => {
    const context = useContext(SettingsContext)

    // throw error if context is not available
    if (context === undefined) throw new Error("useSettings() not within <SettingsProvider>")

    return context
}