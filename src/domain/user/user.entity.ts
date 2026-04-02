import { defineEntity, p } from "@mikro-orm/core";
import { BaseEntity } from "../base/base.entity";
import { AudioEntity } from "../audio/audio.entity";

export const UserEntity = defineEntity({
    name: "UserEntity",
    tableName: "users",
    extends: BaseEntity,
    properties: {
        firbaseUid: p.string(),
        name: p.string(),
        profileUrl: p.string().nullable(),
        audios: () => p.oneToMany(AudioEntity).eager(true).mappedBy("user"),
    }
});