// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';


// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();


// import { NestFactory } from '@nestjs/core';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
//     transport: Transport.GRPC,
//     options: {
//       package: 'notification',
//       protoPath: 'proto/notification.proto',
//     },
//   });

//   await app.listen();
//   console.log('Notification Service is running');
// }
// bootstrap();


// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';
// import { join } from 'path';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   console.log('hiii');

//   // Configure gRPC server
//   app.connectMicroservice<MicroserviceOptions>({
//     transport: Transport.GRPC,
//     options: {
//       url: 'localhost:50051', // Ensure this is correct
//       package: 'notification',
//       protoPath: './proto/Notification.proto',
//     },
//   });

//   console.log('Helooow')
  

//   await app.startAllMicroservices();
//   console.log('okoko')
//   await app.listen(3000);
// }
// bootstrap();


// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const grpcOptions = AppModule.grpcOptions();

  app.connectMicroservice(grpcOptions);

  await app.startAllMicroservices();
  console.log('NestJS gRPC server running...');
  await app.listen(3000); // This is for HTTP requests (optional, for health checks or APIs)
}

bootstrap();
