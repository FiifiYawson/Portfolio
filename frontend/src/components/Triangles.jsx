import triangle1 from "../images/backgroundImgs/triangles/Polygon 1.svg"
import triangle2 from "../images/backgroundImgs/triangles/Polygon 2.svg"
import triangle3 from "../images/backgroundImgs/triangles/Polygon 3.svg"
import {gsap} from "gsap"
import {useRef, useEffect, useCallback} from "react"


export default function Triangles() {
    const tri1 = useRef()
    const tri2 = useRef()
    const tri3 = useRef()

    const addParallax = useCallback((triangles) => {
        triangles.forEach(tri => {
            gsap.to(tri.current, {
                translateY: "300px",
                ease: "linear",
                scrollTrigger: {
                    trigger: "html",
                    start: "top top",
                    end: "+=100%",
                    scrub: true,
                }
            })
        })
    }, [])

    useEffect(() => {
        addParallax([tri1, tri2, tri3])
    }, [addParallax])

    return (
        <>
            <img ref={tri1} className="absolute  top-[120px] right-[8%] z-[-1]" src={triangle1} alt="" />
            <img ref={tri2} className="absolute top-[250px] right-[8%] z-[-1]" src={triangle2} alt="" />
            <img ref={tri3} className="absolute top-[120px] right-[8%] z-[-1]" src={triangle3} alt="" />
        </>
    )
}