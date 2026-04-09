import { defineEntity, InferEntityFromProperties, p } from "@mikro-orm/core";
import { BaseClass, BaseEntity } from "../base/base.entity";
import { AudioEntity } from "../audio/audio.entity";

class UserClass extends BaseClass{}

export const UserEntity = defineEntity({
    name: "UserEntity",
    tableName: "users",
    class: UserClass,
    extends: BaseEntity,
    properties: {
        firbaseUid: p.string(),
        name: p.string(),
        profileUrl: p.string().nullable(),
        audios: () => p.oneToMany(AudioEntity).eager(true).mappedBy("user"),
    }
});

export type IUserEntity = InferEntityFromProperties<typeof UserEntity["properties"]>;