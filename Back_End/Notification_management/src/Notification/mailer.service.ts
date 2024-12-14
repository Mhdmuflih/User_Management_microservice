// import { Injectable } from '@nestjs/common';
// import * as nodemailer from 'nodemailer';
// import { ConfigService } from '@nestjs/config';

// @Injectable()
// export class MailerService {
//   private transporter: nodemailer.Transporter;

//   constructor(private configService: ConfigService) {
//     this.transporter = nodemailer.createTransport({
//       host: this.configService.get('SMTP_HOST'),
//       port: +this.configService.get('SMTP_PORT'),
//       secure: false,
//       auth: {
//         user: this.configService.get('SMTP_USER'),
//         pass: this.configService.get('SMTP_PASS'),
//       },
//     });
//   }

//   async sendMail(to: string, subject: string, text: string): Promise<void> {
//     const mailOptions = {
//       from: this.configService.get('SMTP_USER'),
//       to,
//       subject,
//       text,
//     };

//     try {
//       const info = await this.transporter.sendMail(mailOptions);
//       console.log('Email sent: ', info.response);
//     } catch (error) {
//       console.error('Error sending email: ', error);
//       throw error;
//     }
//   }
// }


import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Initialize the Nodemailer transporter
    this.transporter = nodemailer.createTransport({
      host: 'smtp.example.com', // Replace with your SMTP server (e.g., Gmail: smtp.gmail.com)
      port: 587, // Typically 587 for secure emails
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'your-email@example.com', // Your email
        pass: 'your-email-password', // Your email password or app password
      },
    });
  }

  // Method to send an email
  async sendEmail({
    to,
    subject,
    text,
  }: {
    to: string;
    subject: string;
    text: string;
  }): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: '"Your App Name" <your-email@example.com>', // Sender address
        to, // Recipient address
        subject, // Subject line
        text, // Plain text body
      });
      console.log(`Email sent to ${to}`);
    } catch (error) {
      console.error('Failed to send email:', error);
      throw new Error('Failed to send email');
    }
  }
}
