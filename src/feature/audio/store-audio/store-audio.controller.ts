import { Body, Controller, Post } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { StoreAudioCommand } from "./store-audio.command";
import { StoreAudioValidator } from "./store-audio.validator";

@Controller()
export class StoreAudioController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async storeAudio(@Body() body: StoreAudioValidator) {
    const storeAudioCommand = new StoreAudioCommand(body.urls);
    return await this.commandBus.execute(storeAudioCommand);
  }
}
