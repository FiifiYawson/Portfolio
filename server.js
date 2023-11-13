const express = require("express")
const mailer = require("./nodeMailer")
const path = require("path")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post("/message", (req, res) => {
    mailer.sendMail({

    })
})

app.get("/cv", (req, res) =>
    res.sendFile(path.join(__dirname, "cv.pdf"))
)


app.use(express.static("./frontend/build"))

app.listen(5000)