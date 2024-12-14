// import { Module } from "@nestjs/common";
// import { NotificationService } from "./notification.service";
// import { NotificationController } from "./notification.controller";

import { Module } from "@nestjs/common";
import { NotificationService } from "./notification.service";
import { EmailService } from "./mailer.service";
import { NotificationController } from "./notification.controller";

// @Module({
//     imports: [],
//     providers: [NotificationService],
//     controllers: [NotificationController],
//     exports: []
// })
// export class NotificationModule{};


// import { Module } from '@nestjs/common';
// // import { MailerService } from './notification.service';

// @Module({
//   providers: [MailerService],
//   exports: [MailerService],
// })
// export class MailerModule {}


// @Module({
//   providers: [NotificationService,  EmailService],
//   exports: [NotificationService]
// })

// export class NotificationModule {}

@Module({
  providers: [NotificationService],
  controllers: [NotificationController]
})

export class NotificationModule {};