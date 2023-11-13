const nodeMailer = require("nodemailer")

const transport = nodeMailer.createTransport({
    service: "gmail",
    auth: {

    }
})

module.exports = transport