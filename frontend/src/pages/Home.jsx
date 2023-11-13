import Triangles from "../components/Triangles"
import TopSection from "../components/Home/TopSection"
import ServicesSection from "../components/Home/ServicesSection"
import TechStack from "../components/Home/TechStack"
import ProjectsSection from "../components/Home/ProjectsSection"


function Home() {
    return (
        <>
            <Triangles />
            <TopSection />
            <ServicesSection/>
            <TechStack />
            <ProjectsSection />
        </>
    )
}

export default Home