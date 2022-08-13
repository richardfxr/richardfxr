import '../styles/_index.scss'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
    return (
        <>
          <Navbar />
          <Component {...pageProps} />
        </>
    )
}

export default MyApp
