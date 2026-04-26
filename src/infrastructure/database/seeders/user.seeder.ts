import { Dictionary, EntityManager, RequiredEntityData } from "@mikro-orm/core";
import { fs } from "@mikro-orm/core/fs-utils";
import { Seeder } from "@mikro-orm/seeder";
import { ConfigService } from "@nestjs/config";
import { UserClass } from "../../../domain/user/user.entity";

export class UserSeeder extends Seeder {
  private readonly userSeedFilePath =
    new ConfigService().get<string>("SEED_FILE_PATH") + "user.json";

  async run(
    em: EntityManager,
    context?: Dictionary | undefined,
  ): Promise<void> {
    const fileContent: RequiredEntityData<UserClass>[] = fs.readJSONSync(
      this.userSeedFilePath,
    );
    for (const user of fileContent) {
      em.create(UserClass, user);
    }

    await em.flush();
  }
}
