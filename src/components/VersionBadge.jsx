// === IMPORTS ============================
// Sass
import './VersionBadge.scss'

export default function VersionBadge() {
    return (
        <div className="versionBadge" aria-label='version badge'>
            <div className="number__container">
                <div className='ovals'></div>
                <span className="number">v10.1.0</span>
            </div>
            <span className="state">alpha</span>
        </div>
    )
}