// === IMPORTS ============================
// React
import { useEffect, useState } from 'react'
// Next
import { useRouter } from 'next/router'
// components
import Layout from "../components/Layout"
import Section from "../components/Section"
import UnderlinedLink from "../components/UnderlinedLink"
import Button from "../components/Button"



// === SECTIONS ===========================
const sections = [
    {heading: "Error", id: "details"},
]

export default function Custom404() {
    const router = useRouter()
    const [curURL, setCurURL] = useState("https://www.richardfxr.com/unknown")

    useEffect(() => {
        if (router.isReady) setCurURL("https://www.richardfxr.com" + router.asPath)
    }, [router.isReady, router.asPath])

    return (
        <Layout heading="500" id="error">
            <Section sections={sections} index={0} first skipLinkHidden>
                <p className="md errorOutput">GET <span className='url'>{curURL}</span> 500 (Internal Server Error)</p>
                <p className='md'>The <em>server encountered errors</em>. Come back in a few hours and it should be resolved. If the problem persists, please <UnderlinedLink href="mailto:theguy@richardfxr.com?subject=A%20Witty%20Title" target="_blank" styling="em">contact me</UnderlinedLink> to report the issue. In the meantime, try the following links:</p>
                <ul className='row md'>
                        <li><Button href='https://richardfxr.vercel.app/' target="_blank" styling="sm">Alternate URL</Button></li>
                        <li><Button href='https://preview.richardfxr.com/' target="_blank" styling="sm">Dev preview</Button></li>
                    </ul>
            </Section>
        </Layout>
    )
}