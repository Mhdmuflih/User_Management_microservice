// import { Injectable } from "@nestjs/common";
// import * as nodemailer from 'nodemailer';


// @Injectable()
// export class NotificationService {
//     async sendNotification(data: {email: string, message: string}): Promise<any> {
//         try {
//             const { email, message } = data;
//             const transport = nodemailer.createTr
//         } catch (error: any) {
//             console.log(error.message);
//         }
//     }
// }

import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail', // or your preferred email service
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
      },
    });
  }

  async sendMail(to: string, subject: string, text: string): Promise<void> {
    const mailOptions = {
      from: 'your-email@gmail.com',
      to,
      subject,
      text,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent: ', info.response);
    } catch (error) {
      console.error('Error sending email: ', error);
    }
  }
}
