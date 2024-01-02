require("dotenv").config()
const express = require("express")
const {sendMail} = require("./nodeMailer")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("./frontend/build"))

app.post("/message", (req, res) => {
    const {senderName, senderContacts, subject, message} = req.body

    // if(!senderName && !senderContacts?.length === 0) return res.status(400).json({
    //     message: "name or at least one contact must be provided",
    // })

    if(!message || message === "") return res.status(400).json({
        message: "a message must be provided"
    })

    sendMail(senderName, senderContacts, subject, message)

    return res.json(req.body)
})

app.listen(5000)