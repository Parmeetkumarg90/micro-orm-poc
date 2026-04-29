import { Module } from "@nestjs/common";
import { ImageUploadController } from "./image/image.controller";

@Module({
  imports: [],
  controllers: [ImageUploadController],
})
export class UploadModule {}
