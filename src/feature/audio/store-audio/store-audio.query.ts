import { Query } from "@nestjs/cqrs";

export class StoreAudioQuery extends Query<string>{
    constructor(){
        super();
    }
}