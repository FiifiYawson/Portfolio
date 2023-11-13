import projects from "../../utils/projects"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import github from "../../images/socials/github.svg"
import world from "../../images/world.svg"
import {useEffect, useCallback } from "react"
import {gsap} from "gsap"

function ProjectsSection() {
    const projectImgParallax = useCallback(() => {
        document.querySelectorAll(".project-img").forEach((el) => {
            el.style.top = `calc(100% - ${el.offsetHeight}px)`
            
            gsap.to(el, {
                top: 0,
                ease: "linear",
                scrollTrigger: {
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    trigger: el.parentElement,
                }
            })
        })
    }, [])

    const projectImageSlide = useCallback(() => {
        document.querySelectorAll(".project-img").forEach(el => {
            let active = el.getElementsByClassName("active")[0]

            active.classList.remove("active")

            if (active.nextElementSibling) {
                active = active.nextElementSibling
            } else {
                active = el.firstElementChild
            }

            active.classList.add("active")

            el.childNodes.forEach((child) => {
                gsap.to(child, {
                    opacity: 0,
                    duration: 0.8,
                })
            })

            gsap.from(active, {
                opacity: 0.5,
                duration: 0.8
            })

            gsap.to(active, {
                opacity: 1,
                duration: 0.8
            })
        })
    }, [])

    useEffect(() => {
        projectImgParallax()

        setInterval(projectImageSlide, 10000)
    }, [projectImgParallax, projectImageSlide])

    return (
        <Box
            className="mt-[100px] px-app-padding "
        >
            <Typography variant="h3" className="text-[60px] text-white mb-10 after:block after:w-[400px] after-max-w-full after:h-[25px] after:bg-primary-color after:blur-xl after:rounded-tr-[100%]">My Projects</Typography>
            <Stack
                direction="row"
                justifyContent="flex-start"
                gap={10}
                flexWrap="wrap"
            >
                {projects.map((project, index) => 
                    <Box
                        key={index}
                        className="gap-10 block md:flex lg:block"
                    >
                        <Box>
                            <Typography variant="body2"
                                className="text-secondary-blue-text-color block md:hidden lg:block"
                            >{project.name}</Typography>
                            <a href={project.link}>
                                <div className="relative  my-5 w-[400px] max-w-full h-[250px] overflow-hidden bg-white shadow-inner rounded-[10px]">
                                    <div className="project-img top-0 w-full absolute h-[200%] ">
                                        {project.images.map((image, key) => 
                                            <img key={key} src={image} className={`${key === 0 ? "active" : ""} absolute object-cover object-left top-0 left-0 w-full h-full`} alt="" />
                                        )}
                                    </div>
                                </div>
                            </a>
                            <Stack
                                direction="row"
                                gap={2}
                                mb={1}
                                className="flex mt-5 md:hidden lg:flex"
                            >
                                <a href={project.github} className="cursor-pointer" rel="noreferrer" target="_blank"><img src={github} alt="" width={30} height={30} className="hover:fill-white" /></a>
                                <a href={project.link} className="cursor-pointer" rel="noreferrer" target="_blank"><img src={world} alt="" width={30} height={30} className="hover:fill-white" /></a>
                            </Stack>
                        </Box>
                        <Box>
                            <Typography variant="body2"
                                className="text-secondary-blue-text-color mt-5 mb-5 hidden md:block lg:hidden"
                            >
                                {project.name}
                            </Typography>
                            <Typography variant="body2" className="text-secondary-text-color block leading-[120%] max-w-[400px]">
                                {project.desc}
                            </Typography>
                            <Stack
                                direction="row"
                                mb={1}
                                className="hidden mt-5 md:flex lg:hidden "
                                gap={2}
                            >
                                <a href={project.github} className="cursor-pointer" rel="noreferrer" target="_blank"><img src={github} alt="" width={30} height={30} className="hover:fill-white" /></a>
                                <a href={project.link} className="cursor-pointer" rel="noreferrer" target="_blank"><img src={world} alt="" width={30} height={30} className="hover:fill-white" /></a>
                            </Stack>

                        </Box>
                    </Box>
                )}
            </Stack>    
        </Box>
    )
}

export default ProjectsSection