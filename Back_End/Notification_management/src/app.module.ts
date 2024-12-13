import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from './Notification/notification.module';

@Module({
  imports: [MailerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
