import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from "@nestjs/common";
import { imageUploadInterceptor } from "src/infrastructure/http/interceptors/upload/image-upload";

@Controller({})
export class ImageUploadController {
  constructor() {}

  @Post("images")
  @UseInterceptors(imageUploadInterceptor())
  uploadImages(
    @UploadedFiles()
    files: any[],
  ) {
    return "File uploaded success";
  }
}
