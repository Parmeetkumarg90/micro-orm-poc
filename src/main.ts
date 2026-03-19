import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("🚀 ~ bootstrap ~ process.env.APP_PORT:", process.env.APP_PORT)
  await app.listen(process.env.APP_PORT ?? 8080);
}
bootstrap();
