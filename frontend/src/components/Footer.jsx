import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Contacts from "./Contacts"
import "../styles/footer.css"
import logo from "../images/YawsonDev_Logo.svg"
import location from "../images/location.svg"

function Footer() {
  return (
    <Stack id="footer" direction="row" flexWrap="wrap" gap={5} justifyContent="space-between" alignItems="flex-start" className='mt-[100px] px-app-padding py-[100px]'>
      <img src={logo} alt="" width="180" />
      <Stack gap={2}>
        <Contacts />
        <Stack direction="row" gap={2} alignItems="flex-start">
          <img src={location} alt="" />
          <Box>
            <Typography variant="h5" color="white">Ghana </Typography>
            <Typography variant="h6" color="white">Accra - Cantonments</Typography>
          </Box>
        </Stack>
        <a href="/Fiifi Yawson - Resume.pdf" className="text-white block underline text-[17px] ml-[40px]">Check Resume</a>
      </Stack>
    </Stack>
  )
}

export default Footer