import { MailAdapter,  SendMailData } from "../mail.adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f2162045a314dc",
    pass: "6245afcedeac74"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@Feedget.com>',
      to: 'Fábio Mateus Melo <fabioceto@gmail.com>',
      subject: subject,
      html: body,
    });

  };
}