import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import './seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
  console.log('Backend running on http://localhost:3001');
}
bootstrap();
