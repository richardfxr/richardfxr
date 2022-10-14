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
        <Layout heading="404" id="error">
            <Section sections={sections} index={0} first skipLinkHidden>
                <p className="md errorOutput">GET <span className='url'>{curURL}</span> 404 (Not Found)</p>
                <p className='md'>This page <em>does not exist</em>. Ensure the spelling of the URL above is correct. This page may have been in the <UnderlinedLink href="https://v9.richardfxr.com/" target="_blank" styling="em">previous version of this website</UnderlinedLink>.</p>
                <ul className='row md'>
                        <li><Button to='/' styling="sm">Home</Button></li>
                        <li><Button to='/projects' styling="sm">Projects</Button></li>
                        <li><Button href='https://v9.richardfxr.com/' target="_blank" styling="sm">Version 9</Button></li>
                    </ul>
            </Section>
        </Layout>
    )
}