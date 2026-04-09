import { EntityManager, Dictionary } from "@mikro-orm/core";
import { fs } from "@mikro-orm/core/fs-utils";
import { Seeder } from "@mikro-orm/seeder";
import { ConfigService } from "@nestjs/config";
import { IUserEntity, UserEntity } from "src/domain/user/user.entity";

export class UserSeeder extends Seeder{
    private readonly userSeedFilePath = new ConfigService().get<string>("SEED_FILE_PATH")+"user.json";

    async run(em: EntityManager, context?: Dictionary | undefined): Promise<void> {
        const fileContent: IUserEntity[] = fs.readJSONSync(this.userSeedFilePath);

        for(let user of fileContent){
            const {firbaseUid,name,profileUrl} = user;
            em.create(UserEntity,{
                firbaseUid,
                name,
                profileUrl
            });
        }
        await em.flush();
    }
}