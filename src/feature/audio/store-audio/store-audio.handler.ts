import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { AudioClass } from "src/domain/audio/audio.entity";
import { AudioRepository } from "src/infrastructure/repository/audios.repository";
import { UserRepository } from "src/infrastructure/repository/user.repository";
import { StoreAudioQuery } from "./store-audio.query";

@QueryHandler(StoreAudioQuery)
export class StoreAudioHandler implements IQueryHandler<string> {
  constructor(
    private readonly audioRepo: AudioRepository,
    private readonly userRepo: UserRepository,
  ) {}

  async execute(query: string): Promise<string> {
    const audios: any = [];
    const users = await this.userRepo.findAll();
    console.log("🚀 ~ users:", users);
    for (const user of users) {
      const audio = new AudioClass();
      audio.user = user;
      audio.audioUrl = `${user.name}` + Date.now();
      audio.description = `${user.name}`;
      audios.push(audio);
    }
    await this.audioRepo.upsertMany(audios, {
      onConflictFields: ["audioUrl"],
      onConflictAction: "merge",
    });
    return "hi audio stored successfully";
  }
}
