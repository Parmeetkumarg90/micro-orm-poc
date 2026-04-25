import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { StoreAudioQuery } from "./store-audio.query";
import { AudioRepository } from "src/infrastructure/repository/audios.repository";

@QueryHandler(StoreAudioQuery)
export class StoreAudioHandler implements IQueryHandler<string>{
constructor(private readonly audioRepo: AudioRepository){}

async execute(query: string): Promise<string> {
    const audios = await this.audioRepo.findAll();
    console.log("🚀 ~ StoreAudioHandler ~ execute ~ audios:", audios)
    return 'hi audio stored successfully';
}
}