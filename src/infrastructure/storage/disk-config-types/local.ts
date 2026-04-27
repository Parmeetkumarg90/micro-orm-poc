import { FSDriverOptions } from "flydrive/drivers/fs/types";
import { SignedURLOptions } from "flydrive/types";

const localFsDriverOptions = (): FSDriverOptions => {
  const BACKEND_URL = process.env.BACKEND_URL;

  return {
    location: "uploads",
    visibility: "private",
    urlBuilder: {
      generateURL: async (key: string, filePath: string) => {
        return `${BACKEND_URL}/${key}/${filePath}`;
      },
      generateSignedURL: async (
        key: string,
        filePath: string,
        options: SignedURLOptions,
      ) => {
        return `${BACKEND_URL}/${key}/${filePath}`;
      },
      generateSignedUploadURL: async (
        key: string,
        filePath: string,
        options: SignedURLOptions,
      ) => {
        return `${BACKEND_URL}/${key}/${filePath}`;
      },
    },
  };
};

export { localFsDriverOptions };
