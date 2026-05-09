import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RouterModule } from "@nestjs/core";
import { CqrsModule } from "@nestjs/cqrs";
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
