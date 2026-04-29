import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { RouterModule } from "@nestjs/core";
import { CqrsModule } from "@nestjs/cqrs";
import { MulterModule } from "@nestjs/platform-express";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AudioModule } from "./feature/audio/audio.module";
import { UploadModule } from "./feature/upload/upload.module";
import { UserModule } from "./feature/user/user.module";
import { DatabaseModule } from "./infrastructure/database/database";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    CqrsModule.forRoot({}),
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dest: configService.get("LOCAL_UPLOAD_PATH") || "./uploads",
        preservePath: true,
      }),
      inject: [ConfigService],
    }),
    UploadModule,
    AudioModule,
    UserModule,
    RouterModule.register([
      {
        module: UserModule,
        path: "/user",
      },
      {
        module: AudioModule,
        path: "/audio",
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
