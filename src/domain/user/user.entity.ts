import { defineEntity, InferEntity, p } from "@mikro-orm/core";
import { AudioClass } from "../audio/audio.entity";
import { BaseEntity } from "../base/base.entity";

export class UserClass extends BaseEntity.class {}

export const UserEntity = defineEntity({
  name: "UserClass",
  tableName: "users",
  class: UserClass,
  extends: BaseEntity,
  properties: {
    firebaseUid: p.string(),
    name: p.string(),
    profileUrl: p.string().nullable(),
    audios: () =>
      p
        .oneToMany(AudioClass)
        .lazy()
        .mappedBy("user" as any),
  },
});

export type IUserEntity = InferEntity<typeof UserEntity>;
