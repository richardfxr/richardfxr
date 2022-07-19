// === IMPORTS ============================
// React
import { useEffect, useState } from "react"

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    try {
        // browsers that support matchMedia().addEventListener

        // initial match
        const media = window.matchMedia(query)
        if (media.matches !== matches) {
            setMatches(media.matches)
            console.log(query.toString(), media.matches)
        }

        // event listener that fires every time match changes
        matchMedia(query).addEventListener("change", (e) => {
            setMatches(media.matches)
            console.log(query.toString(), e.matches)
        });
    } catch(err1) {
        try {
            // browsers that support window.matchMedia().addListener

            // initial match
            const media = window.matchMedia(query);
            if (media.matches !== matches) {
                setMatches(media.matches)
            }

            // listener that fires every time match changes
            media.addListener(() => {
                setMatches(media.matches)
            });
        } catch(err2) {
            console.error(err2)
        }
    }
  
    return matches;
}

// specific media query hooks
export const useIslaptop = () => useMediaQuery('(max-width: 1200px)')
export const useIsTablet = () => useMediaQuery('(max-width: 950px)')
export const useIsMobile = () => useMediaQuery('(max-width: 750px)')
export const useIsPortrait = () => useMediaQuery('(orientation: portrait)')