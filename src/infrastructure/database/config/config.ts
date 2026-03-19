import { Options, PostgreSqlDriver } from "@mikro-orm/postgresql";

export const getDatabaseConfig = (): Options => ({
    driver: PostgreSqlDriver,
    dbName: process.env.DB_NAME ?? "micro-orm-poc",
    port: Number(process.env.DB_PORT ?? "5432"),
    host: process.env.DB_HOST ?? "database",
    user: process.env.DB_USER ?? "admin",
    password: process.env.DB_PASSWORD ?? "admin",
    entities: ['dist/domain/**/*.entity.js'],
    debug: true,
});