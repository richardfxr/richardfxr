// === IMPORTS ============================
// Next
import Head from 'next/head'
// React
import { useState, useRef, useEffect } from 'react'
// components
import { projects } from '../../components/AppWrapper'
import Layout from "../../components/Layout"
import ProjectInfo from "../../components/ProjectInfo"
import Button from "../../components/Button"
import Section from "../../components/Section"
import Img from "../../components/Img"
import ScrollContainer from "../../components/ScrollContainer"
import Table from "../../components/Table"
// hooks
import { useIsMotionOK } from "../../hooks/useMediaQuery"
// images
import WeatherDialConcept1 from '../../public/images/WeatherDial/WeatherDial-concept-1.jpg'
import WeatherDialConcept2 from '../../public/images/WeatherDial/WeatherDial-concept-2.jpg'
import WeatherDialConcept3 from '../../public/images/WeatherDial/WeatherDial-concept-3.jpg'
import WeatherDialDesign1 from '../../public/images/WeatherDial/WeatherDial-design-1.jpg'
import WeatherDialDesign2 from '../../public/images/WeatherDial/WeatherDial-design-2.jpg'
import WeatherDialDesign3 from '../../public/images/WeatherDial/WeatherDial-design-3.jpg'
import WeatherDialDarkMode1 from '../../public/images/WeatherDial/WeatherDial-darkMode-1.jpg'
import WeatherDialDarkMode2 from '../../public/images/WeatherDial/WeatherDial-darkMode-2.jpg'
import WeatherDialDarkMode3 from '../../public/images/WeatherDial/WeatherDial-darkMode-3.jpg'
import WeatherDialA11y1 from '../../public/images/WeatherDial/WeatherDial-a11y-1.jpg'
import WeatherDialA11y2 from '../../public/images/WeatherDial/WeatherDial-a11y-2.jpg'
import WeatherDialA11y3 from '../../public/images/WeatherDial/WeatherDial-a11y-3.jpg'
import WeatherDialA11y4 from '../../public/images/WeatherDial/WeatherDial-a11y-4.jpg'
// SVGs
import Stop from '../../public/SVGs/stop.svg'
import Play from '../../public/SVGs/play.svg'


// === SECTIONS ===========================
const sections = [
    {heading: "Concept", id: "concept"},
    {heading: "Design", id: "design"},
    {heading: "Dark Mode", id: "darkmode"},
    {heading: "Accessibility", id: "a11y"},
]

export default function Weatherdial() {
    // project title
    const title = 'Weather Dial'
    const headTitle =`${title} | Richard Fu`
    // get corresponding project object from projects array
    const project = projects.find(elem => elem.title === title)

    // states
    const isMotionOK = useIsMotionOK()
    const [iconAni, setIconAni] = useState(true)
    const [iconAniInterval, setIconAniInterval] = useState(null)
    const [iconAniTimeout1, setIconAniTimeout1] = useState(null)
    const [iconAniTimeout2, setIconAniTimeout2] = useState(null)
    const [iconAniTimeout3, setIconAniTimeout3] = useState(null)
    const [iconAniTimeout4, setIconAniTimeout4] = useState(null)
    const [iconAniTimeout5, setIconAniTimeout5] = useState(null)

    // refs
    const iconGrid = useRef(null)

    useEffect(() => {
        isMotionOK ? setIconAni(true) : setIconAni(false)
    }, [isMotionOK])

    useEffect(() => {
        // animate each icon sequentially
        if (!iconGrid.current) return

        // constants
        const icons = iconGrid.current.children
        const interval = 500

        // helper functions
        function playIconAni() {
            // temperature icon
            icons[0].setAttribute("data-animate", "true")
            // percipitation icon
            setIconAniTimeout1(setTimeout(() => icons[1].setAttribute("data-animate", "true"), interval))
            // cloud icon
            setIconAniTimeout2(setTimeout(() => icons[2].setAttribute("data-animate", "true"), 2 * interval))
            // humidity icon
            setIconAniTimeout3(setTimeout(() => icons[3].setAttribute("data-animate", "true"), 3 * interval))
            // wind icon
            setIconAniTimeout4(setTimeout(() => icons[4].setAttribute("data-animate", "true"), 4 * interval))
            // UV icon
            setIconAniTimeout5(setTimeout(() => icons[5].setAttribute("data-animate", "true"), 5 * interval))

            // reset all icons
            setTimeout(resetIcons, 5 * interval + 750)
        }

        function stopIconAni() {
            // clear iterval
            clearInterval(iconAniInterval)
            setIconAniInterval(null)

            // clear timeouts
            clearTimeout(iconAniTimeout1)
            clearTimeout(iconAniTimeout2)
            clearTimeout(iconAniTimeout3)
            clearTimeout(iconAniTimeout4)
            clearTimeout(iconAniTimeout5)
            setIconAniTimeout1(null)
            setIconAniTimeout2(null)
            setIconAniTimeout3(null)
            setIconAniTimeout4(null)
            setIconAniTimeout5(null)

            // reset all icons
            resetIcons()
        }

        function resetIcons() {
            // set all icons' data-animate to "false"
            for (const icon of icons) {
                icon.setAttribute("data-animate", "false")
            }
        }

        if (iconAni && !iconAniInterval) {
            playIconAni()
            setIconAniInterval(setInterval(playIconAni, 5* interval + 850))
        } else {
            stopIconAni()
        }

        // cleanup on unmount
        return () => stopIconAni()
    }, [iconAni])

    return (
        <>
            <Head>
            <title>{headTitle}</title>
                <meta
                    name="description"
                    content="A simple weather app that displays information in a circular barplot. The visualization is reminiscent of an analog clock, emphasizing the change in data over time."
                />
                <meta property="og:image" content="https://www.richardfxr.com/images/WeatherDial/WeatherDial-OGimage-1.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>

            <Layout heading={title} id="weatherdial">
                <ProjectInfo project={project}>
                    <p>Weather Dial is a simple weather app that displays information in a circular barplot. The visualization is reminiscent of an analog clock, emphasizing the change in data over time. This new yet familiar display enables the user to understand the day&#39;s weather at a glance.</p>
                    <Button styling="sm" href="https://weatherdial.richardfxr.com/" target="_blank">Visit Weather Dial</Button>
                </ProjectInfo>

                <Section sections={sections} index={0}>
                    <Img
                        img={WeatherDialConcept1}
                        alt="Two floating Pixel 6XLs displaying the temperature and humidity pages in dark and light modes respectively."
                    />

                    <p className='md top-4xl bottom-4xl'>Most weather apps present temperatures in a <em>line chart</em>. The passage of time is <em>not immediately obvious</em> and the long charts result in <em>horizontal scrolling</em> on smaller devices.</p>

                    <div className='twoCol'>
                        <Img
                            img={WeatherDialConcept2}
                            alt="A 24-hour circular barplot showing temperature changes throughout the day."
                            caption="early 24h concept"
                            captionAlign="center"
                            captionBottom="11"
                        />
                        <Img
                            img={WeatherDialConcept3}
                            alt="A 12-hour circular barplot showing temperature changes. The barplot is simpler and more readable than the 24-hour version."
                            caption="early 12h concept"
                            captionAlign="center"
                            captionBottom="11"
                        />
                    </div>

                    <p className='md top-4xl'>A 12-hour <em>circular barplot</em> mimics the layout of analog clocks, allowing for an <em>intuitive</em> sense of time. The circular graph is also <em>more responsive</em>, adapting to smaller screens without the need for scrolling.</p>
                </Section>

                <Section sections={sections} index={1}>
                    <div className='twoCol'>
                        <Img
                            img={WeatherDialDesign1}
                            alt="The Weather Dial logo."
                            caption="Logo"
                            captionAlign="center"
                            captionBottom="12"
                        />
                        <Img
                            img={WeatherDialDesign2}
                            alt="An iPhone 14 Pro displaying the precipitation page in light mode."
                        />
                    </div>

                    <Img
                        img={WeatherDialDesign3}
                        alt="A Surface Laptop Studio displaying the temperature page in light mode."
                    />

                    <p className='md top-4xl bottom-4xl'>The design of Weather Dial is <em>simple and clear</em>. The interface is filled with <em>fluid animations</em>, giving a sense of ease that elevates the overall user experience.</p>
                
                    <div className='iconAni'>
                        <div className='iconGrid' ref={iconGrid}>
                            <div className='temperature iconWrapper' data-animate="false">
                                <svg
                                    className="navIcon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 28 28">
                                    <title>Temperature icon.</title>
                                    <circle className="clr-tertiary" cx="14" cy="21.5" r="6.5"/>
                                    <rect className="clr-tertiary" x="9.5" y="0" width="9" height="24.15" rx="4.5" ry="4.5"/>
                                    <rect className="clr-secondary" x="11.5" y="2" width="5" height="22.15" rx="2.5" ry="2.5"/>
                                    <circle className="clr-secondary" cx="14" cy="21.5" r="4.5"/>
                                    <circle className="clr-tertiary dot__right" style={{"--index": 2}} cx="23" cy="3.5" r="1.5"/>
                                    <circle className="clr-tertiary dot__right" style={{"--index": 1}} cx="23" cy="9.5" r="1.5"/>
                                    <circle className="clr-tertiary dot__right" style={{"--index": 0}} cx="23" cy="15.5" r="1.5"/>
                                    <circle className="clr-tertiary dot__left" style={{"--index": 2}} cx="5" cy="3.5" r="1.5"/>
                                    <circle className="clr-tertiary dot__left" style={{"--index": 1}} cx="5" cy="9.5" r="1.5"/>
                                    <circle className="clr-tertiary dot__left" style={{"--index": 0}} cx="5" cy="15.5" r="1.5"/>
                                    <circle className="clr-main" cx="14" cy="21.5" r="3.5"/>
                                    <rect id="bar" className="clr-main" x="12.5" y="7" width="3" height="14" rx="1.5" ry="1.5"/>
                                </svg>
                            </div>

                            <div className='precipitation iconWrapper' data-animate="false">
                                <svg
                                    className="navIcon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 28 28">
                                    <title>Precipitation icon.</title>
                                    <circle className="clr-tertiary circle__top" style={{"--index": 1}} cx="20.36" cy="22" r="1.5"/>
                                    <circle className="clr-tertiary circle__top" style={{"--index": 0}} cx="14.36" cy="22" r="1.5"/>
                                    <circle className="clr-tertiary circle__top" style={{"--index": 2}} cx="8.36" cy="22" r="1.5"/>
                                    <circle className="clr-tertiary circle__bottom" style={{"--index": 0}} cx="17.36" cy="26.5" r="1.5"/>
                                    <circle className="clr-tertiary circle__bottom" style={{"--index": 1}} cx="11.36" cy="26.5" r="1.5"/>
                                    <path className="clr-secondary cloud" d="M22.67,7.57s-.02-.02-.03-.02c-1.06-.19-1.47-.92-1.72-1.45,0,0,0,0,0,0-1.13-2.7-3.8-4.6-6.92-4.6-2.45,0-4.62,1.18-5.99,3,0,0-.02,0-.02,.01-.56,.68-.96,.95-1.94,1.07,0,0-.01,0-.02,0-2.57,.46-4.53,2.7-4.53,5.41,0,3.04,2.46,5.5,5.5,5.5h15c2.49,0,4.5-2.01,4.5-4.5,0-2.26-1.67-4.11-3.83-4.43Z"/>
                                    <path className="clr-tertiary cloud" d="M22,17.5H7c-3.58,0-6.5-2.92-6.5-6.5,0-3.08,2.15-5.72,5.14-6.35h0l.32-.06c.67-.08,.85-.21,1.25-.71l.13-.16C8.97,1.67,11.39,.5,14,.5c3.43,0,6.51,2.04,7.84,5.21,.17,.37,.35,.63,.69,.77l.33,.09c2.65,.43,4.65,2.75,4.65,5.43,0,3.03-2.47,5.5-5.5,5.5ZM6.27,6.56h-.07c-2.15,.4-3.71,2.26-3.71,4.44,0,2.48,2.02,4.5,4.5,4.5h15c1.93,0,3.5-1.57,3.5-3.5,0-1.64-1.18-3.07-2.78-3.42l-.35-.06c-.36-.07-.66-.19-.92-.34l-.05-.02h0c-.86-.51-1.22-1.29-1.39-1.64-1.03-2.46-3.39-4.02-6.01-4.02-2.05,0-3.95,.95-5.19,2.6l-.13,.14c-.63,.74-1.23,1.16-2.41,1.32Z"/>
                                    <path className="clr-main cloud" d="M22.52,9.56l-.43-.08c-.39-.09-.76-.22-1.11-.4l-.77-.52c-.28-.24-.53-.53-.75-.85v.03c-.95-1-1.36-.98-2.57-.15-.01,0-.03,.01-.05,.02-1.29,1.07-2.94,1.72-4.75,1.72-.38,0-.76-.04-1.12-.1h0c-.52-.09-1.03,.3-1.27,.59,0,0,0,0-.01,0-1.01,1.27-2.55,2.09-4.3,2.09-.08,0-.15-.02-.22-.02-.02,0-.04,.01-.06,.01-1-.04-1.12,.94-.61,1.54,.63,.65,1.51,1.07,2.49,1.07h15c1.38,0,2.5-1.12,2.5-2.5,0-1.17-.84-2.19-1.98-2.44Z"/>
                                </svg>
                            </div>

                            <div className='cloud iconWrapper' data-animate="false">
                                <svg
                                    className="navIcon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 28 28">
                                    <title>Cloud cover icon.</title>
                                    <path className="clr-secondary cloud__top" d="M5.5,14.95c-2.49,0-4.5-2.01-4.5-4.5,0-2.07,1.4-3.81,3.31-4.34,1.07-.3,1.44-.56,1.76-1.26,1.01-2.27,3.29-3.85,5.94-3.85s4.78,1.48,5.84,3.64c.38,.78,1.15,1.35,1.85,1.62,1.68,.65,2.87,2.29,2.87,4.19,0,2.49-2.01,4.5-4.5,4.5H5.5Z"/>
                                    <path className="clr-tertiary cloud__top" d="M18.06,15.95H5.5c-3.03,0-5.5-2.47-5.5-5.5,0-2.46,1.66-4.64,4.04-5.3,.91-.25,.97-.39,1.11-.7C6.35,1.74,9.04,0,12,0s5.46,1.61,6.74,4.2c.28,.56,.88,.96,1.31,1.12,2.1,.81,3.51,2.87,3.51,5.13,0,3.03-2.47,5.5-5.5,5.5ZM12,2c-2.17,0-4.14,1.28-5.02,3.26-.49,1.1-1.22,1.49-2.4,1.82-1.52,.42-2.58,1.81-2.58,3.38,0,1.93,1.57,3.5,3.5,3.5h12.56c1.93,0,3.5-1.57,3.5-3.5,0-1.44-.89-2.75-2.23-3.26-1.04-.4-1.94-1.19-2.39-2.11-.93-1.9-2.83-3.08-4.94-3.08Z"/>
                                    <path className="clr-bg cloud__bottom" d="M28,16.69c-1.19-1.35-2.82-2.29-4.7-2.59-1.77-2.6-4.69-4.15-7.85-4.15-4.13,0-7.76,2.65-9.02,6.52-.03,.01-.07,.03-.1,.04-2.66,1.07-4.37,3.62-4.37,6.49,0,1.96,.81,3.73,2.11,5H27.27c.26-.23,.5-.47,.73-.73v-10.58Z"/>
                                    <path className="clr-secondary cloud__bottom" d="M8.94,27c-2.21,0-4-1.79-4-4,0-1.68,1.03-3.12,2.49-3.71,.95-.38,1.53-.78,1.72-1.51,.72-2.79,3.27-4.83,6.28-4.83,2.28,0,4.28,1.17,5.44,2.94,.38,.58,.93,1.06,1.64,1.13,2.51,.25,4.47,2.39,4.47,4.97,0,2.76-2.24,5-5,5H8.94Z"/>
                                    <path className="clr-tertiary cloud__bottom" d="M22,28H8.94c-2.76,0-5-2.24-5-5,0-2.05,1.22-3.87,3.12-4.63,.94-.38,1.07-.62,1.13-.83,.85-3.29,3.84-5.58,7.25-5.58,2.55,0,4.89,1.27,6.28,3.4,.19,.29,.5,.65,.9,.68,3.06,.3,5.37,2.87,5.37,5.97,0,3.31-2.69,6-6,6Zm-6.56-14.05c-2.5,0-4.69,1.68-5.32,4.08-.32,1.23-1.35,1.8-2.32,2.19-1.13,.46-1.87,1.55-1.87,2.78,0,1.65,1.35,3,3,3h13.06c2.21,0,4-1.79,4-4,0-2.07-1.54-3.78-3.57-3.98-.93-.09-1.78-.65-2.38-1.58-1.02-1.56-2.74-2.49-4.6-2.49Z"/>
                                    <path className="clr-main cloud__bottom" d="M22.33,19.02c-.68-.07-1.32-.33-1.89-.74h-.01c-.35-.27-.89-.33-1.13,.31,0,0,0,0,0,0-.72,2.38-2.93,4.12-5.55,4.12-.56,0-1.09-.08-1.6-.23,0,0-.01,0-.01,0-.42-.14-.9,.02-1,.49-.03,.15-.09,.31-.16,.47,0,0,0,.01,0,.02-.13,.31-.3,.59-.44,.75-.2,.24-.41,.79,.31,.79h11.17c1.65,0,3-1.35,3-3,0-1.52-1.17-2.83-2.67-2.98Z"/>
                                </svg>
                            </div>

                            <div className='humidity iconWrapper' data-animate="false">
                                <svg
                                    className="navIcon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 28 28">
                                    <title>Humidity icon.</title>
                                    <path className="clr-secondary drop__top" d="M14.41,8.32c-.85,1.15-1.35,2.57-1.35,4.11,0,3.83,3.1,6.93,6.93,6.93s6.93-3.1,6.93-6.93c0-1.54-.5-2.96-1.35-4.11L20.88,1.53c-.42-.61-1.33-.61-1.75,0l-4.71,6.8Z"/>
                                    <path className="clr-tertiary drop__top" d="M20,20.43c-4.41,0-8-3.59-8-8,0-1.72,.53-3.35,1.55-4.73L18.25,.92c.4-.57,1.05-.92,1.75-.92s1.36,.34,1.75,.92l4.71,6.8c1,1.36,1.54,2.99,1.54,4.72,0,4.41-3.59,8-8,8Zm0-18.3l-4.73,6.82c-.74,1.01-1.14,2.21-1.14,3.47,0,3.23,2.63,5.87,5.87,5.87s5.87-2.63,5.87-5.87c0-1.26-.39-2.46-1.14-3.47l-4.73-6.82Z"/>
                                    <circle className="clr-main drop__top" cx="22.67" cy="12.8" r="1.6"/>
                                    <path className="clr-bg drop__bottom" d="M11.91,6c-.78-1.12-2.05-1.79-3.41-1.79s-2.64,.67-3.41,1.79L.01,13.32s0,.01-.01,.02v12.3c.66,.91,1.45,1.7,2.36,2.36H14.64c2.64-1.91,4.36-5,4.36-8.5,0-2.26-.71-4.41-1.99-6.15l-5.09-7.35Z"/>
                                    <path className="clr-secondary drop__bottom" d="M2.46,15.06c-.92,1.24-1.46,2.78-1.46,4.44,0,4.14,3.36,7.5,7.5,7.5s7.5-3.36,7.5-7.5c0-1.66-.54-3.2-1.46-4.44l-5.09-7.35c-.46-.66-1.44-.66-1.9,0L2.46,15.06Z"/>
                                    <path className="clr-tertiary drop__bottom" d="M8.5,28C3.81,28,0,24.19,0,19.5c0-1.82,.57-3.56,1.64-5.02L6.73,7.14c.4-.58,1.06-.93,1.77-.93s1.37,.35,1.77,.93l5.09,7.35c1.06,1.44,1.63,3.19,1.63,5.01,0,4.69-3.81,8.5-8.5,8.5Zm0-19.79c-.05,0-.1,.02-.13,.07L3.26,15.65c-.83,1.12-1.26,2.45-1.26,3.85,0,3.58,2.92,6.5,6.5,6.5s6.5-2.92,6.5-6.5c0-1.4-.44-2.73-1.26-3.85l-5.11-7.38s-.07-.07-.13-.07Z"/>
                                    <path className="clr-main drop__bottom" d="M12.41,17.95c-.79,.45-1.55-.25-1.7,.65,0,.05-.03,.1-.04,.15-.26,2.21-1.89,4-4.03,4.46-.01,0-.03,.01-.04,.01-.94,.19-.56,.82,.17,1.16,.54,.2,1.12,.32,1.73,.32,2.87,0,5.19-2.32,5.19-5.19,0-.36-.04-.7-.11-1.04-.21-.71-.59-.84-1.17-.52Z"/>
                                    <circle className="clr-main drop__bottom" cx="10.5" cy="15.5" r="1.5"/>
                                </svg>
                            </div>

                            <div className='wind iconWrapper' data-animate="false">
                                <svg
                                    className="navIcon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 28 28">
                                    <title>Wind speed icon.</title>
                                    <path className="clr-secondary" d="M4,23.62c0,.6,.53,1.06,1.12,1,5.37-.56,9.55-5.1,9.55-10.62S10.49,3.95,5.12,3.38c-.6-.06-1.12,.4-1.12,1V23.62Z"/>
                                    <path className="stroke" style={{"--length": 26.9638, "--length-ani": -18.9638}} d="M9,2.36c.73-.83,1.81-1.36,3-1.36,2.21,0,4,1.79,4,4s-1.79,4-4,4H1"/>
                                    <path className="stroke delayed" style={{"--length": 32.709, "--length-ani": -24.709}} d="M20,3c2.76,0,5,2.24,5,5s-2.24,5-5,5H3"/>
                                    <path className="stroke" style={{"--length": 26.2589, "--length-ani": -18.2589}} d="M17.69,25c2.21,0,4-1.79,4-4s-1.79-4-4-4H4"/>
                                    <path className="stroke delayed" style={{"--length": 18.9188, "--length-ani": -10.9188}} d="M10.49,27c1.66,0,3-1.34,3-3s-1.34-3-3-3H1"/>
                                    <circle className="clr-main circle" style={{"--offset": 0}} cx="20" cy="8" r="1.5"/>
                                    <circle className="clr-main circle" style={{"--offset": 2}} cx="26.5" cy="16.45" r="1.5"/>
                                    <circle className="clr-main circle" style={{"--offset": 1}} cx="24.5" cy="26.5" r="1.5"/>
                                </svg>
                            </div>

                            <div className='uv iconWrapper' data-animate="false">
                                <svg
                                    className="navIcon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 28 28">
                                    <title>UV index icon.</title>
                                    <circle className="clr-tertiary circle" style={{"--index": 0}} cx="14" cy="1.5" r="1.5"/>
                                    <circle className="clr-tertiary circle" style={{"--index": 1}} cx="21.35" cy="3.89" r="1.5"/>
                                    <circle className="clr-tertiary circle" style={{"--index": 2}} cx="25.89" cy="10.14" r="1.5"/>
                                    <circle className="clr-tertiary circle" style={{"--index": 3}} cx="25.89" cy="17.86" r="1.5"/>
                                    <circle className="clr-tertiary circle" style={{"--index": 4}} cx="21.35" cy="24.11" r="1.5"/>
                                    <circle className="clr-tertiary circle" style={{"--index": 5}} cx="14" cy="26.5" r="1.5"/>
                                    <circle className="clr-tertiary circle" style={{"--index": 6}} cx="6.65" cy="24.11" r="1.5"/>
                                    <circle className="clr-tertiary circle" style={{"--index": 7}} cx="2.11" cy="17.86" r="1.5"/>
                                    <circle className="clr-tertiary circle" style={{"--index": 8}} cx="2.11" cy="10.14" r="1.5"/>
                                    <circle className="clr-tertiary circle" style={{"--index": 9}} cx="6.65" cy="3.89" r="1.5"/>
                                    <circle className="clr-tertiary" cx="14" cy="14" r="9"/>
                                    <circle className="clr-secondary" cx="14" cy="14" r="7"/>
                                    <circle className="clr-main" cx="14" cy="14" r="5"/>
                                </svg>
                            </div>
                        </div>

                        {iconAni ? 
                            <Button styling="sm" click={() => setIconAni(false)}>
                                <Stop />
                                Stop
                            </Button>
                            :
                            <Button styling="sm" click={() => setIconAni(true)}>
                                <Play />
                                Play
                            </Button>
                        }
                    </div>
                </Section>

                <Section sections={sections} index={2}>
                    <Img
                        img={WeatherDialDarkMode1}
                        alt="A Surface Pro 8 displaying the temperature page in dark mode."
                    />

                    <div className='twoCol'>
                        <Img
                            img={WeatherDialDarkMode2}
                            alt="A Nothing Phone (1) displaying the cloud cover page in dark mode."
                        />
                        <Img
                            img={WeatherDialDarkMode3}
                            alt="A Nothing Phone (1) displaying the UV index page in dark mode."
                        />
                    </div>
                </Section>

                <Section sections={sections} index={3}>
                    <Img
                        img={WeatherDialA11y1}
                        alt="A Yoga Tab displaying the temperature page in light mode."
                    />

                    <p className='md top-4xl bottom-xxxl'>The circular barplot is semantically represented as a <em>table</em> to ensure the <em>best compatibility</em> with assistive technologies. </p>

                    <ScrollContainer horizontal>
                        <Table
                            tableData={[
                                ['Time', 'Temperature'],
                                ['12 PM', '20 °C'],
                                ['1 PM', '21 °C'],
                                ['2 PM', '21 °C'],
                                ['3 PM', '22 °C'],
                                ['4 PM', '22 °C'],
                                ['5 PM', '21 °C'],
                                ['6 PM', '20 °C'],
                                ['7 PM', '19 °C'],
                                ['8 PM', '17 °C'],
                                ['9 PM', '17 °C'],
                                ['10 PM', '17 °C'],
                                ['11 PM', '16 °C'],
                            ]}
                            caption="Temperature" />
                    </ScrollContainer>

                    <p className='md top-xxxl bottom-4xl'>The interface also has <em>high contrast</em> and <em>forced-colors</em> styling, guaranteeing readability based on the user’s system settings.</p>
                
                    <div className='twoCol'>
                        <Img
                            img={WeatherDialA11y2}
                            alt="An iPhone 13 Pro displaying the temperature page in high-contrast light mode."
                            caption="high contrast light"
                            captionAlign="center"
                            captionBottom="6.5"
                        />
                        <Img
                            img={WeatherDialA11y3}
                            alt="An iPhone 13 Pro displaying the temperature page in high-contrast dark mode."
                            caption="high contrast dark"
                            captionAlign="center"
                            captionBottom="6.5"
                        />
                    </div>

                    <Img
                        img={WeatherDialA11y4}
                        alt="A Surface Pro 8 displaying the temperature page in Windows forced-colors mode."
                        caption="forced-colors"
                        captionAlign="center"
                        captionBottom="9"
                    />
                </Section>
            </Layout>
        </>
    )
}