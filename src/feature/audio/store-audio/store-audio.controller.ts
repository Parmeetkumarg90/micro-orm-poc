import { Controller, Post } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { StoreAudioQuery } from "./store-audio.query";

@Controller()
export class StoreAudioController{
    constructor(private readonly queryBus: QueryBus){}

    @Post()
    async storeAudio(){
        const storeAudioQuery = new StoreAudioQuery();
        return await this.queryBus.execute(storeAudioQuery);
    }
}