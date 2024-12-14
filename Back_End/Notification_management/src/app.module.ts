// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// // import { MailerModule } from './Notification/notification.module';
// import { ConfigModule } from '@nestjs/config';
// import { NotificationModule } from './Notification/notification.module';

// @Module({
//   imports: [ConfigModule.forRoot(), NotificationModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}


// import { Module } from '@nestjs/common';
// import { ClientsModule, Transport } from '@nestjs/microservices';
// // import { NotificationController } from './notification.controller';
// // import { NotificationService } from './notification.service';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { NotificationModule } from './Notification/notification.module';

// @Module({
//   imports: [
//     ClientsModule.register([
//       {
//         name: 'NOTIFICATION_PACKAGE',
//         transport: Transport.GRPC,
//         options: {
//           url: 'localhost:5000', // gRPC server URL
//           package: 'notification', // Must match the `package` in the .proto file
//           protoPath: './src/proto/notification.proto', // Path to the .proto file
//         },
//       },
//     ]),
//     NotificationModule
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}


// src/app.module.ts
import { Module } from '@nestjs/common';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { NotificationModule } from './Notification/notification.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    NotificationModule, // Import the user module
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  static grpcOptions(): GrpcOptions {
    return {
      transport: Transport.GRPC,
      options: {
        package: 'notification', // Package name defined in .proto file
        protoPath: join(__dirname, './proto/Notification.proto'), // Path to the .proto file
      },
    };
  }
}
