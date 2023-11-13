import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Tooltip from "@mui/material/Tooltip"
import techStack, { techSections } from "../../utils/techStack"
import Stack from "@mui/material/Stack"
import Grid from "../Grid"

function TechStack() {
    return (
        <Box className="mt-[150px] px-app-padding relative">
            <Grid
                width="300px"
                height="300px"
                gap="5px"
                style={{
                    bottom: 90,
                    width:"80%"
                }}
            />
            <Typography className="relative text-[60px] text-right mb-10 text-white after:block after:rounded-tl-[100%] after:w-[500px] after:max-w-full after:ml-auto after:h-[20px] after:bg-primary-color after:blur-xl">My Tech Stack</Typography>
            {techSections.map((section, index) => 
                <Box className="mb-[40px]" key={index}>
                    <Typography variant="h3" className="relative ml-auto text-right text-[25px] w-[max-content] text-secondary-blue-text-color">{section}</Typography>
                    <Stack direction="row" justifyContent="flex-end" flexWrap="wrap">
                        {techStack[section].map((tech, index) => 
                            <Tooltip
                                title={tech.name}
                                color="primary"
                                enterDelay={0}
                                leaveDelay={500}
                                arrow
                                key={index}
                                className="mx-[15px] mb-[20px]"
                            >
                                <img className="relative" src={tech.image} width={60} height={60} alt=""/>
                            </Tooltip>
                        )}
                    </Stack>
                </Box>
            )}
        </Box>
    )
}

export default TechStack