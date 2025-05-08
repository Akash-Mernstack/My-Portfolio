import express from 'express'
const router = express.Router()
import cors from 'cors'
import nodemailer from 'nodemailer'

//Server used to send emails


const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(3000, () =>
    console.log("server Running  Perfect"))


const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }

    }
})

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready To Send");
    }
})


router.post('/contact', (req, res) => {
    const name = req.body.firstName + req.body.lastName
    const email = req.body.email
    const message = req.body.message
    const phone = req.body.phone
    const mail = {
        from: name,
        to: 'akv45446@gmail.com',
        subject: "Contact Form Submission - Portfolio",

        html: `
         <p>Name:${name}<p>
         <p>Email:${email}<p>
         <p>Phone:${phone}<p>
         <p>message:${message}<p>
        `,
    }
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error)
        } else {
            res.json({ code: 200, status: "Message Sent" })
        }
    })

})


