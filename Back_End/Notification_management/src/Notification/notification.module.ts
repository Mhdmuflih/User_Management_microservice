// import { Module } from "@nestjs/common";
// import { NotificationService } from "./notification.service";
// import { NotificationController } from "./notification.controller";

// @Module({
//     imports: [],
//     providers: [NotificationService],
//     controllers: [NotificationController],
//     exports: []
// })
// export class NotificationModule{};


import { Module } from '@nestjs/common';
import { MailerService } from './notification.service';

@Module({
  providers: [MailerService],
  exports: [MailerService], // Export if used in other modules
})
export class MailerModule {}
