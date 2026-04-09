import { Migration } from '@mikro-orm/migrations';

export class Migration20260402172631_users extends Migration {

  override up(): void | Promise<void> {
    this.addSql(`create table "users" ("id" serial primary key, "uuid" uuid not null default gen_random_uuid(), "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, "firbase_uid" varchar(255) not null, "name" varchar(255) not null, "profile_url" varchar(255) null);`);
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "users";`);
  }

}
