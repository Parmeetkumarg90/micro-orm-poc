import { Module } from "@nestjs/common";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { getDatabaseConfig } from "./config/config";

@Module({
    imports: [
        MikroOrmModule.forRootAsync({
            useFactory: () => getDatabaseConfig()
        }),
    ]
})
export class DatabaseModule { };