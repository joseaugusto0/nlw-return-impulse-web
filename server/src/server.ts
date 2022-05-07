import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import { routes } from './routes';


const app = express()

app.use(cors())
app.use(express.json());
app.use(routes)

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b7a7bca20c1f5c",
      pass: "5b2e6cfa74d246"
    }
});



app.listen(3333, () => {
    console.log('HTTP Server Running')
})