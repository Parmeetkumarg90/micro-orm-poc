import { Module } from "@nestjs/common";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import databaseConfig from "./config/config";

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      useFactory: () => databaseConfig,
    }),
  ],
})
export class DatabaseModule {}
