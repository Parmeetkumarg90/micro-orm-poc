import { defineEntity, InferEntity, p } from "@mikro-orm/core";
import { AudioClass } from "../audio/audio.entity";
import { BaseEntity } from "../base/base.entity";

export const UserEntity = defineEntity({
  name: "UserClass",
  tableName: "users",
  extends: BaseEntity,
  properties: {
    firebaseUid: p.string().unique(),
    name: p.string(),
    profileUrl: p.string().nullable(),
    audios: () => p.oneToMany(AudioClass).lazy().mappedBy("user"),
  },
});
export class UserClass extends UserEntity.class {}

export type IUserEntity = InferEntity<typeof UserEntity>;
