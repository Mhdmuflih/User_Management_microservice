import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    console.log('hiiiiiii')
    // Initialize the Nodemailer transporter
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', 
      port: 587,
      secure: false,
      auth: {
        user: 'mhdmuflihkk@gmail.com',
        pass: 'tnmy fzxf csvk brya',
      },
    });
  }

  // Method to send an email
  async sendEmail({to,subject,text,}: {to: string;subject: string;text: string;}): Promise<void> {
    try {
      console.log('jai mahilmathee');
      console.log(to, subject, text, "this is the sendEmail function arguments data");
      await this.transporter.sendMail({
        from: 'mhdmuflihkk@gmail.com',
        to: to,
        subject: subject,
        text: text,
      });
      console.log(`Email sent to ${to}`);
    } catch (error) {
      console.error('Failed to send email:', error);
      throw new Error('Failed to send email');
    }
  }
}
