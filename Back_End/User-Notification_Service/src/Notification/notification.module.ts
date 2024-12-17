import { Module } from "@nestjs/common";
import { NotificationService } from "./notification.service";
import { EmailService } from "./mailer.service";
import { NotificationController } from "./notification.controller";

@Module({
  providers: [NotificationService, EmailService],
  controllers: [NotificationController]
})

export class NotificationModule {};