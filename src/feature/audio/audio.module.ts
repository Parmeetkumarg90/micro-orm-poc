import { Module } from "@nestjs/common";
import { StoreAudioController } from "./store-audio/store-audio.controller";
import { StoreAudioHandler } from "./store-audio/store-audio.handler";
import { AudioRepository } from "src/infrastructure/repository/audios.repository";

@Module({
    controllers:[StoreAudioController],
    providers:[StoreAudioHandler,AudioRepository]
})
export class AudioModule{}