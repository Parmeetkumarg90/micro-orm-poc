import { Migration } from "@mikro-orm/migrations";

export class Migration20260420121131 extends Migration {
  override up(): void | Promise<void> {
    this.addSql(
      `create table "users" ("id" serial primary key, "uuid" uuid not null default gen_random_uuid(), "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, "firebase_uid" varchar(255) not null, "name" varchar(255) not null, "profile_url" varchar(255) null);`,
    );
    this.addSql(
      `alter table "users" add constraint "users_uuid_unique" unique ("uuid");`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "users";`);
  }
}
