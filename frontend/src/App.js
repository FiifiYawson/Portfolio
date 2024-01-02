import './App.css';
import createTheme from "@mui/material/styles/createTheme"
import ThemeProvider from "@mui/material/styles/ThemeProvider"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Template from './Template'

const root = document.querySelector(":root")

const cssStyles = getComputedStyle(root)

const theme = createTheme({
  palette: {
    primary: {
      main: cssStyles.getPropertyValue("--primary-color"),
    },
    background: {
      main: cssStyles.getPropertyValue("--background"),
      light: cssStyles.getPropertyValue("--semantic-background"),
    },
    secondary: {
      main: cssStyles.getPropertyValue("--secondary-color"),
    },
    text: {
      main: cssStyles.getPropertyValue("--main-text-color"),
      dark: cssStyles.getPropertyValue("--secondary-text-color"),
      "100": cssStyles.getPropertyValue("--secondary-blue-text-color"),
    }
  },
  typography: {
    allVariants: {
      lineHeight: "100%",
      fontFamily: "Baloo, san-serif"
    },
    body1: {
      color: "#9C9C9C",
      fontSize: "40px",
    },
    body2: {
      color: "#9C9C9C",
      fontSize: "24px",
    },
    caption: {
      color: "#9C9C9C",
      fontSize: "36px"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route Component={Template} >
            <Route path="/" Component={Home} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
