

// src/app.module.ts
import { Module } from '@nestjs/common';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { NotificationModule } from './Notification/notification.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [
    NotificationModule, // Import the user module
  ]
})

// here call the gRPC server running
// docker running notification_service:50051
// minikube running 0.0.0.0:50051
export class AppModule {
  static grpcOptions(): GrpcOptions {
    console.log('Resolved protoPath:', __dirname + './Notification.proto');
    return {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50051',
        package: 'notification', // Package name defined in .proto file
        protoPath: join(__dirname, './proto/Notification.proto'), // Path to the .proto file
      },
    };
  }
}
