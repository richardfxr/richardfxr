// === IMPORTS ============================
// Sass
import './PageTemplate.scss';
// components
import Breadcrumbs from './Breadcrumbs';

export default function PageTemplate({ children }) {
    return (
        <div className="pageWrapper">
            <Breadcrumbs />
            {children}
        </div>
    )
}