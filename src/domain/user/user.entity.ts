import { Entity, PrimaryKey, Property, t } from "@mikro-orm/core";
import { randomUUID } from "node:crypto";

@Entity({ tableName: "users" })
export class UserEntity {
    @PrimaryKey({ type: t.uuid, })
    uuid: string = randomUUID();

    @Property()
    name!: string; // here ! defines it is non-nullable field

    @Property({ onCreate: () => new Date() })
    created_at!: Date;

    @Property({ onUpdate: () => new Date() })
    updated_at!: Date;

    @Property({ nullable: true })
    deleted_at?: Date;
};