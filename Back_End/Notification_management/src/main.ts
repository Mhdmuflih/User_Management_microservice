

// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // AooModule ll grpcOptions nn athine ann ivide microservice ayi run cheyyipikknnee
  const grpcOptions = AppModule.grpcOptions();

  // ivide ath connect cheyyum
  app.connectMicroservice(grpcOptions);

  // athine ivide start cheyyum ipo gRPC server running ayirikkum 
  await app.startAllMicroservices();
  console.log('NestJS gRPC server running...');
  await app.listen(3000);
}

bootstrap();