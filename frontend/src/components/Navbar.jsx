import "../styles/navbar.css"
import yawsonDevLogo from "../images/YawsonDev_Logo.svg"
import Stack from "@mui/material/Stack"
import { gsap } from "gsap"
import { useEffect, useRef, useCallback } from "react"


function Navbar() {
  const logo = useRef()
  const nav = useRef() 

  const fadeIn = useCallback((refs) => {
    refs.forEach(ref => {
      gsap.from(ref.current, {
        opacity: 0,
        duration: 1.5,
        delay: 1.7,
      })
    })
  }, [])

  useEffect(() => {
    fadeIn([logo, nav])
  }, [fadeIn])


  return (
    <div className="h-[115px]">
      <div id="navbar" className='h-[200px]
      flex justify-between px-[5%] pt-[30px] items-start'>
        <img ref={logo} className="-translate-x-5" src={yawsonDevLogo} width="180" alt=""/>
        <Stack ref={nav} direction="row" alignItems="center" gap={3} className="h-[70px] rounded-[20px] shadow-[var(--nav-shadow)] bg-nav-color px-[17px] backdrop:blur-lg">
          <a href="/Fiifi Yawson - Resume.pdf" className="text-white text-[22px] font-extrabold hover:text-primary-color">View Resume</a>
        </Stack>
      </div>
    </div>
  )
}

export default Navbar