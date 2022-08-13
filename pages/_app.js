// === IMPORTS ============================
// Sass
import '../styles/_index.scss'
// components
import AppWrapper from '../components/AppWrapper'
import Navbar from '../components/Navbar'
// contexts
import { SettingsProvider } from '../context/Settings'

function MyApp({ Component, pageProps }) {
    return (
        <SettingsProvider>
            <AppWrapper>
                <Navbar />
                <Component {...pageProps} />
            </AppWrapper>
        </SettingsProvider>
    )
}

export default MyApp
