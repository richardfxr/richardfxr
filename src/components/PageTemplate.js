// === IMPORTS ============================
// Sass
import './PageTemplate.scss';
// components
import Breadcrumbs from './Breadcrumbs';
import Footer from '../components/Footer';

export default function PageTemplate({ children }) {
    return (
        <div className="pageWrapper">
            <Breadcrumbs />
            <main id="main">
                {children}
            </main>
            <Footer />
        </div>
    )
}