import { Command } from "@nestjs/cqrs";

export class StoreAudioCommand extends Command<string> {
  constructor(public urls: string[]) {
    super();
  }
}
