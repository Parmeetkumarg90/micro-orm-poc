import { Migration } from '@mikro-orm/migrations';

export class Migration20260402172639_audios extends Migration {

  override up(): void | Promise<void> {
    this.addSql(`create table "audios" ("id" serial primary key, "uuid" uuid not null default gen_random_uuid(), "created_at" timestamptz not null, "updated_at" timestamptz not null, "deleted_at" timestamptz null, "user_id" int not null, "description" text not null, "audio_url" varchar(255) not null);`);

    this.addSql(`alter table "audios" add constraint "audios_user_id_foreign" foreign key ("user_id") references "users" ("id");`);
  }

  override down(): void | Promise<void> {
    this.addSql(`alter table "audios" drop constraint "audios_user_id_foreign";`);
  }

}
