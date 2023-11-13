import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import backend from "../../images/backgroundImgs/backend.svg"
import frontend from "../../images/backgroundImgs/frontend.svg"
import { useEffect, useRef, useCallback } from "react"
import {gsap} from "gsap"

function ServicesSection() {
    const service1 = useRef()
    const service2 = useRef()

    const frontendIcon = useRef()
    const backendIcon = useRef()

    const addRevealAnimation = useCallback((refs) => {
        refs.forEach(ref => {
            gsap.from(ref.current, {
                opacity: 0,
                translateY: 100,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "30px 80%",
                    end: "+=150px",
                }
            })
        })
    }, [])

    const iconsParallax = useCallback((refs) => {
        refs.forEach(ref => {
            gsap.to(ref.current, {
                translateY: 110,
                ease: "linear",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            })
        })
    },[])

    useEffect(() => {
        addRevealAnimation([service1, service2])
        iconsParallax([frontendIcon, backendIcon])
    }, [addRevealAnimation, iconsParallax])

    return (
        <>
            <Grid
                container
                px="5%"
                mt="100px"
                direction="row"
                justifyContent="space-between"
                gap={"20px"}
            >
                <Grid
                    item
                    className="border-t-[1px] border-t-primary-color border-l-[1px] border-l-primary-color relative p-[30px] before:block before:absolute before:w-[20px] before:h-[20px] before:bg-primary-color before:-z-[1] before:-right-[10px] before:-top-[10px] before:rotate-[90deg] after:block after:absolute after:w-[20px] after:h-[20px] after:bg-primary-color after:-z-[1] after:-left-[10px] after:-bottom-[10px]"
                    md={5.5}
                    ref={service1}
                >
                    <Typography variant="body1"
                        className="text-white before:block before:bg-primary-color before:w-[30px] before:h-[1px] flex items-center gap-3"
                    >
                        Backend
                    </Typography>
                    <Typography variant="body2" mt="10px" className="leading-[120%]" >
                        My proficiency in backend includes the ability to implement robust backend APIs with full CRUD functionalities, Protected routes, user authentication and many more.  
                    </Typography>
                    <img src={backend} alt=""
                        ref={backendIcon}
                        width={80}
                        className="absolute -z-[1] top-10 right-0"
                    />
                </Grid>
                <Grid
                    item
                    className="border-b-[1px] border-b-primary-color relative p-[30px] before:block before:absolute before:w-[20px] before:h-[20px] before:bg-primary-color before:-z-[1] before:-left-[10px] before:-bottom-[10px] after:block after:absolute after:w-[20px] after:h-[20px] after:bg-primary-color after:-z-[1] after:-right-[10px] after:-bottom-[10px]"
                    md={5.5}
                    ref={service2}
                >
                    <Typography variant="body1"
                        className="text-white before:block before:bg-primary-color before:w-[30px] before:h-[1px] flex items-center gap-3"
                    >
                        Frontend
                    </Typography>
                    <Typography variant="body2" mt="10px" className="leading-[120%]">
                        I am skilled at making websites out of design templates and ideas. with the help of various frontend and UI  libraries and frameworks, I provide  pixel perfect and responsive websites suitable for all platforms and devices.
                    </Typography>
                    <img src={frontend} alt=""
                        ref={frontendIcon}
                        width={100}
                        className="absolute -z-[1] top-10 right-0"
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ServicesSection