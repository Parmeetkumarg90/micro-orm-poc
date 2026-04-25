import { EntityManager, EntityRepository } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";
import { UserClass } from "src/domain/user/user.entity";

@Injectable()
export class UserRepository extends EntityRepository<UserClass>{
    constructor(em: EntityManager){
        super(em,UserClass);
    }
}