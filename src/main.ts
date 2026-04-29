import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { urlencoded } from "express";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({});

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true, // throws error on unknown values
      forbidUnknownValues: true, // throws error on unknown request body
      transform: true, // transform object values or type conversion where possible
      whitelist: true, // remove unknown values
    }),
  );

  app.use(
    urlencoded({
      limit: "50mb",
      extended: true, // allow nested query if true
    }),
  );

  await app.listen(process.env.APP_PORT ?? 8080);
}
bootstrap();
