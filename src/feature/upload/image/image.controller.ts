import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";

@Controller({})
export class ImageUploadController {
  constructor() {}

  @Post("images")
  @UseInterceptors(FilesInterceptor("images"))
  uploadImages(
    @UploadedFiles()
    files: Express.Multer.File[],
  ) {}
}
