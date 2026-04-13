import { Migrator } from "@mikro-orm/migrations";
import { defineConfig, Options, PostgreSqlDriver } from "@mikro-orm/postgresql";
import { SeedManager } from "@mikro-orm/seeder";
require("dotenv").config();

const databaseConfig: Options = defineConfig({
    driver: PostgreSqlDriver,
    dbName: process.env.DB_NAME ?? "micro-orm-poc",
    port: Number(process.env.DB_PORT ?? "5432"),
    host: process.env.DB_HOST ?? "database",
    user: process.env.DB_USER ?? "admin",
    password: process.env.DB_PASSWORD ?? "admin",
    entities: ['dist/domain/**/*.entity.js'],
    // entitiesTs: ['src/domain/**/*.entity.ts'], // keep one at a time
    debug: true,
    extensions: [Migrator,SeedManager],
    migrations: {
        tableName: "micro-orm-migrations",
        path: "dist/infrastructure/database/migrations",
        // pathTs: "src/infrastructure/database/migrations", // keep one at a time
        transactional: true,
        dropTables: false,
        fileName(timestamp, name) {
            return `Migration${timestamp}_${name}`;
        },
    },
    seeder:{
        defaultSeeder:"DatabaseSeeder",
        path: "dist/infrastructure/database/seeders",
        // pathTs: "src/infrastructure/database/seeders", // keep one at a time
        fileName:(className:string)=>className,
    }
});

export default databaseConfig;