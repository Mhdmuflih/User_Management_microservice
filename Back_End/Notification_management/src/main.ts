import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();


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
