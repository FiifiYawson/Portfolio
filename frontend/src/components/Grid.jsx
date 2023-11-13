import { useEffect, useRef, useCallback, useState } from "react"
import {gsap} from "gsap"

function Grid({width, height, gap, style}) {
    const grid = useRef()
    
    const [boxes, setBoxes] = useState({
        xNumber: 0,
        yNumber: 0
    })

    const calcGridBoxes = useCallback(() => {
        const width = grid.current.offsetWidth 
        const height = grid.current.offsetHeight

        const maxBoxWidth = 30

        const noOfBoxesX = Math.floor(width / maxBoxWidth)
        const noOfBoxesY = Math.floor(height / maxBoxWidth)
        
        setBoxes({
            xNumber: noOfBoxesX,
            yNumber: noOfBoxesY
        })
    }, [])

    const gridClickEffect = (e, index) => {
        const tl = gsap.timeline()

        tl.to(".gridBox" , {
            backgroundColor: "#00B0FC",
            scale: 1.3,
            duration: 0.2,
            stagger: {
                grid: [boxes.yNumber, boxes.xNumber],
                from: index,
                amount: 2,
            },
        })
        tl.to(".gridBox", {
            backgroundColor: "#013769",
            duration: 0.5,
            delay: 0.3,
            stagger: {
                grid: [boxes.yNumber, boxes.xNumber],
                from: index,
                amount: 2,
            }
        }, "<")
        tl.to(".gridBox", {
            scale: 0,
            stagger: {
                grid: [boxes.yNumber, boxes.xNumber],
                from: index,
                amount: 2,
            }
        }, "<")
        tl.to(".gridBox", {
            scale: 1,
            delay: 0.5,
            duration: 0.5,
            stagger: {
                grid: [boxes.yNumber, boxes.xNumber],
                from: index,
                amount: 2,
            }
        },"<")
    }

    const gridHoverEffect = (e, index) => {
        const tl = gsap.timeline()

        tl.to(".gridBox", {
            scale: 1.3,
            duration: 0.1,
            stagger: {
                grid: [boxes.yNumber, boxes.xNumber],
                from: index,
                amount: 2,
            }
        }, "<")
        .to(".gridBox", {
            scale: 1,
            duration: 0.5,
            delay: 0.3,
                stagger: {
                grid: [boxes.yNumber, boxes.xNumber],
                from: index,
                amount: 2,
            },
        },"<")
    }

    const gridParallax = useCallback(() => {
        gsap.to(grid.current, {
            translateY: 90,
            ease: "linear",
            scrollTrigger: {
                trigger: grid.current,
                scrub: 1,
                start: "top bottom",
                end: "bottom top",
            }
        })
    }, [])

    useEffect(() => {
        calcGridBoxes()

        window.addEventListener("resize", () => {
            calcGridBoxes()
        })

        gridParallax()

    }, [calcGridBoxes, gridParallax])

    return (
        <div ref={grid} className="grid absolute"
            style={{
                gridTemplateColumns: `repeat(${boxes.xNumber}, 1fr)`,
                gridTemplateRows: `repeat(${boxes.yNumber}, 1fr)`,
                width,
                height,
                gap,
                ...style
            }}
        >
            {new Array(boxes.xNumber * boxes.yNumber).fill(0).map((box, index) => 
                <div key={index} className="gridBox bg-secondary-color" onClick={(e) => gridClickEffect(e, index)}
                onMouseMove={(e)=>gridHoverEffect(e, index)}
                ></div>    
            )}
    </div>
    )
}

export default Grid