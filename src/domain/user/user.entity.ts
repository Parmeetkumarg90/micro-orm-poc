import { defineEntity, InferEntity, InferEntityFromProperties, p } from "@mikro-orm/core";
import { BaseClass, BaseEntity } from "../base/base.entity";
import { AudioEntity } from "../audio/audio.entity";

export const UserEntity = defineEntity({
    name: "UserEntity",
    tableName: "users",
    class: class UserClass extends BaseClass{},
    extends: BaseEntity,
    properties: {
        firebaseUid: p.string(),
        name: p.string(),
        profileUrl: p.string().nullable(),
        audios: () => p.oneToMany(AudioEntity).eager(true).mappedBy("user"),
    }
});

export type IUserEntity = InferEntity<typeof UserEntity>;