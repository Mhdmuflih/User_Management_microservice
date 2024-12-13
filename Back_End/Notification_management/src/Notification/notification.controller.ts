// import { Controller } from "@nestjs/common";
// import { GrpcMethod } from "@nestjs/microservices";
// @Controller()
// export class NotificationService {
//     @GrpcMethod('NotificationService', 'SendNotification')
//     async sendNotification(data: {email: string, message: string}) {
//     }
// }

// import { Body, Controller, Post } from "@nestjs/common";
// import { NotificationService } from "./notification.service";

// @Controller()
// export class NotificationController {
//     constructor(private readonly NotificationService: NotificationService) {}

//     @Post()
//     sendNotification(data: {email: string, mssage: string}): any {
//         return this.NotificationService
//     }
// }




import { Controller, Post } from '@nestjs/common';
import { MailerService } from './notification.service';

@Controller('email')
export class AppController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('send')
  async sendEmail() {
    await this.mailerService.sendMail(
      'recipient@example.com',
      'Test Email',
      'Hello from NestJS with Nodemailer!',
    );
    return { message: 'Email sent successfully!' };
  }
}
