import { IsArray, IsString } from "class-validator";

export class StoreAudioValidator {
  @IsArray()
  @IsString({ each: true })
  urls: string[];
}
