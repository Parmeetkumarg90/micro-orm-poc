import { defineEntity, InferEntity, p } from "@mikro-orm/core";
import { BaseEntity } from "../base/base.entity";
import { UserClass } from "../user/user.entity";

export const AudioEntity = defineEntity({
  name: "AudioClass",
  tableName: "audios",
  extends: BaseEntity,
  properties: {
    user: () => p.manyToOne(UserClass).eager(true),
    description: p.text(),
    audioUrl: p.string().unique(),
  },
});
export class AudioClass extends AudioEntity.class {}

export type IAudioEntity = InferEntity<typeof AudioEntity>;
