// import { Injectable } from "@nestjs/common";
// import * as nodemailer from 'nodemailer';

import { Injectable } from "@nestjs/common";


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

// import { Injectable } from '@nestjs/common';
// import * as nodemailer from 'nodemailer';

// @Injectable()
// export class MailerService {
//   private transporter: nodemailer.Transporter;

//   constructor() {
//     this.transporter = nodemailer.createTransport({
//       service: 'gmail', // or your preferred email service
//       auth: {
//         user: 'your-email@gmail.com',
//         pass: 'your-email-password',
//       },
//     });
//   }

//   async sendMail(to: string, subject: string, text: string): Promise<void> {
//     const mailOptions = {
//       from: 'your-email@gmail.com',
//       to,
//       subject,
//       text,
//     };

//     try {
//       const info = await this.transporter.sendMail(mailOptions);
//       console.log('Email sent: ', info.response);
//     } catch (error) {
//       console.error('Error sending email: ', error);
//     }
//   }
// }



// import { Injectable } from '@nestjs/common';
// // import { EmailService } from './email.service'; // Hypothetical email service
// // import { SendEmailRequest, SendEmailResponse } from './interfaces/email.interface';
// import { EmailService } from './mailer.service';
// import { SendEmailRequest, SendEmailResponse } from './email.interface';

// @Injectable()
// export class NotificationService {
//   constructor(private readonly emailService: EmailService) {}

//   async sendEmail(data: SendEmailRequest): Promise<SendEmailResponse> {
//     try {
//       // Send email using your email service (e.g., Nodemailer)
//       await this.emailService.sendEmail({
//         to: data.email,
//         subject: data.subject,
//         text: data.message,
//       });

//       return { success: true, message: 'Email sent successfully' };
//     } catch (error) {
//       return { success: false, message: 'Failed to send email' };
//     }
//   }
// }



@Injectable()
export class NotificationService {
    async sendEmail(call: any): Promise<any> {
        const {email, message } = call.request;
        console.log(call, "this is the call");
        console.log(email, message, "this is the email and message");
        console.log(call.request, "this is the call request");
    }
}