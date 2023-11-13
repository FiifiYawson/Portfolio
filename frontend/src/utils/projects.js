import weather from "../images/projects/weatherApp/weather app.png"
import weather2 from "../images/projects/weatherApp/weather 2.png"
import weather3 from "../images/projects/weatherApp/weather 3.png"



import chat from "../images/projects/helloChat/hello chat.png"
import chat2 from "../images/projects/helloChat/chat2.png"
import chat3 from "../images/projects/helloChat/chat3.png"

const projects = [
    {
        name: "Hello Chat",
        desc: "A Full-stack chatting application that facilitates the communication of individuals in far-away locations",
        link: "https://hello-chat.onrender.com",
        github: "https://github.com/FiifiYawson/chat-app",
        images: [chat, chat2, chat3],
    },
    {
        name: "Weather App",
        desc: "A weather app that provides forcast and current weather of the user in realtime",
        link: "https://fiifiyawson.github.io/Weather-app",
        github: "https://github.com/FiifiYawson/Weather-app",
        images: [weather, weather2, weather3]
    },
]

export default projects