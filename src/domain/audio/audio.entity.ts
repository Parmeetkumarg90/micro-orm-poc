import { defineEntity, p } from "@mikro-orm/core";
import { BaseEntity } from "../base/base.entity";
import { UserEntity } from "../user/user.entity";

export const AudioEntity = defineEntity({
    name: "AudioEntity",
    tableName: "audios",
    extends: BaseEntity,
    properties: {
        user: () => p.manyToOne(UserEntity).eager(true),
        description: p.text(),
        audioUrl: p.string()
    }
});