

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
  await app.listen(3000);
}

bootstrap();