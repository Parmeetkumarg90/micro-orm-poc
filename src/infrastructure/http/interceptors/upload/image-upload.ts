import { BadRequestException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { FilesInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

const imageSizeInBytes = 5 * 1000000; // 5mb = 5 * 1000kb
const maxFilesCount = 5;

const configService = new ConfigService();

export const imageUploadInterceptor = () => {
  return FilesInterceptor("images", maxFilesCount, {
    limits: {
      fileSize: imageSizeInBytes,
    },  
    preservePath: true,
    storage:diskStorage({
      destination: configService.get("LOCAL_UPLOAD_PATH") ?? "src/infrastructure/storage/local-upload/uploads",
      filename(req, file, callback) {
        const fileName = `${Date.now()}-${file.originalname}`;
        callback(null,fileName);
      }}),
    fileFilter(req, file, callback) {
      try {
        ImageUploadValidator.validateType(file);
        callback(null, true);
      } catch (e: any) {
        callback(e, false);
      }
    },
  });
};

class ImageUploadValidator {
  static validateType(file: any) {
    if (!file.mimetype.startsWith("image/")) {
      throw new BadRequestException(
        `File ${file.originalname} is not an image`,
      );
    }
  }
}
