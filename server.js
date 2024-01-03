require("dotenv").config()
const express = require("express")
const {sendMail} = require("./nodeMailer")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("./frontend/build"))

app.post("/message", async (req, res) => {
    const {senderName, senderContacts, subject, message} = req.body

    // if(!senderName && !senderContacts?.length === 0) return res.status(400).json({
    //     message: "name or at least one contact must be provided",
    // })

    if(!message || message === "") return res.status(400).json({
        message: "a message must be provided"
    })

    const sendRes = await sendMail(senderName, senderContacts, subject, message)

    if(!sendRes) return res.status(500)

    return res.status(200).json(sendRes)
})

app.listen(5000)