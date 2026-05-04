import { BadRequestException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { FilesInterceptor } from "@nestjs/platform-express";

const imageSizeInBytes = 5 * 1000000; // 5mb = 5 * 1kb
const configService = new ConfigService();

export const imageUploadInterceptor = () => {
  return FilesInterceptor("images", 5, {
    limits: {
      fileSize: imageSizeInBytes,
    },
    dest: configService.get("LOCAL_UPLOAD_PATH") || "./uploads",
    preservePath: true,
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
