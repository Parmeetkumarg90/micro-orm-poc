import { EntityManager, EntityRepository } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";
import { AudioClass } from "src/domain/audio/audio.entity";

@Injectable()
export class AudioRepository extends EntityRepository<AudioClass>{
    constructor(em: EntityManager){
        super(em,AudioClass);
    }
}