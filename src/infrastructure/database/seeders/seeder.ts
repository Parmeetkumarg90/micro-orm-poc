import { EntityManager, Dictionary } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import { UserSeeder } from "./user.seeder";

export class DatabaseSeeder extends Seeder{
    run(em: EntityManager, context?: Dictionary | undefined): void | Promise<void> {
        return this.call(em,[
            UserSeeder
        ]);
    }
}