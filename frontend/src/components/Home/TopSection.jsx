import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Contacts from "../Contacts"
import {useRef, useEffect} from "react"
import { gsap } from "gsap";

export default function TopSection() {
    const headerText = useRef()
    const subText = useRef()
    const subTextContainer = useRef()
    const contacts = useRef()

    useEffect(() => {
        const headerTextanime = gsap.timeline()

        headerTextanime
            .from(headerText.current, {
                translateY: 50,
                opacity: 0,
                duration: 0.5,
                delay: 0.5
            })
            .from(subText.current, {
                opacity: 0,
                duration: 0.8,
            })
            .from(contacts.current, {
                opacity: 0,
                duration: 0.5,
            }, "<")
    }, [])

    return (
        <>
            <Stack className="px-app-padding" mt="100px" gap={5}>
                <Typography ref={headerText} id="header-intro" component="div" className="text-secondary-blue-text-color text-[36px] opacity-100 flex-grow-[1]">
                    <Typography component="p" display="inline" variant="h1" className='text-[64px]'>Hi, </Typography>
                    my name is
                    <Typography className='text-white text-[80px] font-extrabold md:text-[96px]'>FIIFI YAWSON.</Typography >
                    I am a <Typography variant="h2" display="inline"  className='text-primary-color text-[40px] font-[700]' >Full-stack Web Developer.</Typography>
                </Typography>
                <Contacts ref={contacts} bgColor="transparen"/>
            </Stack>
            <Box
                mt="100px"
                px="5%"
                className="subtextContainer "
                ref={subTextContainer}
            >
                <Typography ref={subText} variant="caption">
                    A web developer with the keen interest and skill for product quality, usability and delivery.
                </Typography>
                <div ref={subTextContainer} className="block w-[60%] h-[15px] rounded-tr-[100%] bg-primary-color blur-[25px]" />
            </Box>

        </>
    )
}