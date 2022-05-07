import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b7a7bca20c1f5c",
      pass: "5b2e6cfa74d246"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: "Zezão <zezao@feedget.com>",
            to: 'Guedão <guedaobaleiao@gmail.com>',
            subject: subject,
            html: body
        })
    }
}