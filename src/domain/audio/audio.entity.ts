import { defineEntity, InferEntity, p } from "@mikro-orm/core";
import { UserClass } from "../user/user.entity";
import { BaseEntity } from "../base/base.entity";

export class AudioClass extends BaseEntity.class {}

export const AudioEntity = defineEntity({
  name: "AudioClass",
  class: AudioClass,
  tableName: "audios",
  extends: BaseEntity,
  properties: {
    user: () => p.manyToOne(UserClass).eager(true),
    description: p.text(),
    audioUrl: p.string(),
  },
});

export type IAudioEntity = InferEntity<typeof AudioEntity>;
