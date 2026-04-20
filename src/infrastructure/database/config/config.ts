import { Migrator } from "@mikro-orm/migrations";
import { defineConfig, Options, PostgreSqlDriver } from "@mikro-orm/postgresql";
import { SeedManager } from "@mikro-orm/seeder";
require("dotenv").config();

const databaseConfig: Options = defineConfig({
  driver: PostgreSqlDriver,
  dbName: process.env.DB_NAME ?? "micro-orm-poc",
  port: Number(
    process.env.DB_PORT ??
      (process.env.DB_HOST === "localhost" ? "5433" : "5432"),
  ),
  host: process.env.DB_HOST ?? "database",
  user: process.env.DB_USER ?? "admin",
  password: process.env.DB_PASSWORD ?? "admin",
  entities: ["dist/domain/**/*.entity.js"],
  // entitiesTs: ["src/domain/**/*.entity.ts"],
  preferTs: false,
  debug: true,
  extensions: [Migrator, SeedManager],
  migrations: {
    tableName: "micro-orm-migrations",
    path: "dist/infrastructure/database/migrations",
    pathTs: "src/infrastructure/database/migrations", // to store migrations in src not build
    transactional: true,
    dropTables: false,
    fileName(timestamp, name) {
      return name ? `Migration${timestamp}_${name}` : `Migration${timestamp}_`;
    },
    snapshot: false,
  },
  seeder: {
    defaultSeeder: "DatabaseSeeder",
    path: "dist/infrastructure/database/seeders",
    // pathTs: "src/infrastructure/database/seeders",
    fileName: (className: string) => className,
  },
});

export default databaseConfig;
