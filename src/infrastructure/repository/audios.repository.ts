import { EntityName, EntityRepository, SqlEntityManager } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";
import { AudioClass } from "src/domain/audio/audio.entity";

@Injectable()
export class AudioRepository extends EntityRepository<AudioClass>{
    constructor(em: SqlEntityManager, entityName: EntityName<AudioClass>){
        super(em,entityName);
    }
}