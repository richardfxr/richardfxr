// === IMPORTS ============================
// Sass
import './VersionBadge.scss'

export default function VersionBadge() {
    return (
        <div className="versionBadge" aria-label='version badge'>
            <span className="number">v10.1.0</span>
            <span className="state">alpha</span>
        </div>
    )
}