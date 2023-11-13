import React from "react"
import Stack from "@mui/material/Stack"
// import socials from "../utils/socials"
import "../styles/contacts.css"

const contacts = React.forwardRef((props, ref) => (
        <Stack ref={ref} direction="row" justifyContent="space-between" alignItems="center" gap={2} className="contacts w-fit rounded-full px-[20px] py-[10px] bg-white">
            <a href="tel:+233260824850">
                <svg className="social-container" width="22" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="socials" d="M30.4825 23.1619C30.2151 25.1945 29.2169 27.0602 27.6743 28.4106C26.1318 29.7609 24.1505 30.5037 22.1004 30.5C10.1902 30.5 0.500014 20.8099 0.500014 8.89978C0.496339 6.84969 1.23906 4.86837 2.58945 3.32587C3.93984 1.78336 5.80556 0.785159 7.83814 0.517697C8.35213 0.454937 8.87263 0.56009 9.32195 0.817457C9.77126 1.07482 10.1253 1.4706 10.3312 1.94571L13.4992 9.01828V9.03628C13.6569 9.39996 13.722 9.79703 13.6887 10.192C13.6555 10.587 13.5249 10.9676 13.3087 11.2998C13.2817 11.3403 13.2532 11.3778 13.2232 11.4153L10.1002 15.1173C11.2237 17.4004 13.6117 19.7674 15.9248 20.8939L19.5758 17.7874C19.6117 17.7572 19.6493 17.7292 19.6883 17.7034C20.0203 17.482 20.4022 17.3468 20.7995 17.3102C21.1968 17.2735 21.597 17.3365 21.9639 17.4934L21.9834 17.5024L29.05 20.6689C29.526 20.8741 29.9227 21.2278 30.1809 21.6771C30.4391 22.1265 30.5449 22.6474 30.4825 23.1619Z" fill="#00121D"/>
                </svg>
            </a>
            <a href="mailto:ghyawson@gmail.com">
                <svg className="social-container" width="25" height="31" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="socials" d="M34.2501 0.5H4.25006C2.18756 0.5 0.518811 2.1875 0.518811 4.25L0.500061 26.75C0.500061 28.8125 2.18756 30.5 4.25006 30.5H34.2501C36.3126 30.5 38.0001 28.8125 38.0001 26.75V4.25C38.0001 2.1875 36.3126 0.5 34.2501 0.5ZM34.2501 8L19.2501 17.375L4.25006 8V4.25L19.2501 13.625L34.2501 4.25V8Z" fill="#00121D"/>
                </svg>
            </a>
            <a href="https://github.com/FiifiYawson">
                <svg className="social-container" width="25" height="35" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="socials" d="M19.2499 0.75C16.7877 0.75 14.3495 1.24702 12.0746 2.21269C9.79977 3.17836 7.73279 4.59377 5.99169 6.37809C2.47538 9.9817 0.499939 14.8692 0.499939 19.9655C0.499939 28.4588 5.88119 35.6646 13.3249 38.2202C14.2624 38.374 14.5624 37.7783 14.5624 37.2595V34.012C9.36869 35.165 8.26244 31.4372 8.26244 31.4372C7.39994 29.2082 6.18119 28.6125 6.18119 28.6125C4.47494 27.4211 6.31244 27.4596 6.31244 27.4596C8.18744 27.5941 9.18119 29.4387 9.18119 29.4387C10.8124 32.3595 13.5687 31.4948 14.6374 31.0336C14.8062 29.7846 15.2937 28.9391 15.8187 28.4588C11.6562 27.9784 7.28744 26.3258 7.28744 19.0047C7.28744 16.8718 7.99994 15.1616 9.21869 13.7973C9.03119 13.3169 8.37494 11.3185 9.40619 8.72443C9.40619 8.72443 10.9812 8.20562 14.5624 10.6844C16.0437 10.2617 17.6562 10.0503 19.2499 10.0503C20.8437 10.0503 22.4562 10.2617 23.9374 10.6844C27.5187 8.20562 29.0937 8.72443 29.0937 8.72443C30.1249 11.3185 29.4687 13.3169 29.2812 13.7973C30.4999 15.1616 31.2124 16.8718 31.2124 19.0047C31.2124 26.3451 26.8249 27.9592 22.6437 28.4395C23.3187 29.0352 23.9374 30.2074 23.9374 31.9944V37.2595C23.9374 37.7783 24.2374 38.3932 25.1937 38.2202C32.6374 35.6454 37.9999 28.4588 37.9999 19.9655C37.9999 17.4421 37.515 14.9434 36.5727 12.612C35.6304 10.2807 34.2493 8.16242 32.5082 6.37809C30.7671 4.59377 28.7001 3.17836 26.4253 2.21269C24.1504 1.24702 21.7122 0.75 19.2499 0.75Z" fill="#666"/>
                </svg>
            </a>
            <a href="https://linkedin.com/in/fiifi-yawson">
                <svg className="social-container" width="25" height="39" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="socials" d="M19.5 3.5C20.0304 3.5 20.5391 3.71071 20.9142 4.08579C21.2893 4.46086 21.5 4.96957 21.5 5.5V19.5C21.5 20.0304 21.2893 20.5391 20.9142 20.9142C20.5391 21.2893 20.0304 21.5 19.5 21.5H5.5C4.96957 21.5 4.46086 21.2893 4.08579 20.9142C3.71071 20.5391 3.5 20.0304 3.5 19.5V5.5C3.5 4.96957 3.71071 4.46086 4.08579 4.08579C4.46086 3.71071 4.96957 3.5 5.5 3.5H19.5ZM19 19V13.7C19 12.8354 18.6565 12.0062 18.0452 11.3948C17.4338 10.7835 16.6046 10.44 15.74 10.44C14.89 10.44 13.9 10.96 13.42 11.74V10.63H10.63V19H13.42V14.07C13.42 13.3 14.04 12.67 14.81 12.67C15.1813 12.67 15.5374 12.8175 15.7999 13.0801C16.0625 13.3426 16.21 13.6987 16.21 14.07V19H19ZM7.38 9.06C7.82556 9.06 8.25288 8.883 8.56794 8.56794C8.883 8.25288 9.06 7.82556 9.06 7.38C9.06 6.45 8.31 5.69 7.38 5.69C6.93178 5.69 6.50193 5.86805 6.18499 6.18499C5.86805 6.50193 5.69 6.93178 5.69 7.38C5.69 8.31 6.45 9.06 7.38 9.06ZM8.77 19V10.63H6V19H8.77Z" fill="black"/>
                </svg>
            </a>
        </Stack>
    ))

export default contacts