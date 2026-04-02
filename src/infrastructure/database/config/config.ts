import { Migrator } from "@mikro-orm/migrations";
import { defineConfig, Options, PostgreSqlDriver } from "@mikro-orm/postgresql";

const databaseConfig: Options = defineConfig({
    driver: PostgreSqlDriver,
    dbName: process.env.DB_NAME ?? "micro-orm-poc",
    port: Number(process.env.DB_PORT ?? "5432"),
    host: process.env.DB_HOST ?? "database",
    user: process.env.DB_USER ?? "admin",
    password: process.env.DB_PASSWORD ?? "admin",
    entities: ['dist/domain/**/*.entity.js'],
    entitiesTs: ['src/domain/**/*.entity.ts'],
    debug: true,
    extensions: [Migrator],
    migrations: {
        tableName: "micro-orm-migrations",
        path: "dist/infrastructure/database/migrations",
        pathTs: "src/infrastructure/database/migrations",
        transactional: true,
        dropTables: false,
        fileName(timestamp, name) {
            return `Migration${timestamp}_${name}`;
        },
    }
});

export default databaseConfig;