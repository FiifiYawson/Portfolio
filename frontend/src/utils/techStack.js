import react from "../images/techStack/frontend/React Logo.svg"
import materilUI from "../images/techStack/frontend/Material UI.svg"
import tailwind from "../images/techStack/frontend/Tailwind CSS.svg"
import html from "../images/techStack/frontend/HTML Logo.svg"
import css from "../images/techStack/frontend/CSS Logo.svg"
import js from "../images/techStack/frontend/Js Logo.svg"
import d3 from "../images/techStack/frontend/d3.svg"
import gsap from "../images/techStack/frontend/gsap.png"

//backend
import node from "../images/techStack/backend/Node Js  Logo.svg"
import express from "../images/techStack/backend/Express Logo.svg"
import ejs from "../images/techStack/backend/ejs.png"

//database
import mongodb from "../images/techStack/database/MongoDB Logo.svg"
import sql from "../images/techStack/database/sql.svg"

const techStack = {
    Frontend: [
        { name: "React", image: react },
        { name: "Material UI", image: materilUI },
        { name: "GSAP", image: gsap },
        { name: "D3", image: d3 },
        { name: "Tailwind CSS", image: tailwind },
        { name: "HTML", image: html },
        { name: "CSS", image: css },
        { name: "JS", image: js },
    ],
    Backend: [
        { name: "Node.JS", image: node },
        { name: "Express", image: express },
        { name: "EJS", image: ejs },
        { name: "JS", image: js },
    ],
    Database: [
        { name: "MongoDB", image: mongodb },
        { name: "SQL", image: sql },
    ],
    // Extras: [
    //     {
    //         name: "D3",
    //         image: ""
    //     }
    // ]
}

export const techSections = Object.keys(techStack)

export default techStack