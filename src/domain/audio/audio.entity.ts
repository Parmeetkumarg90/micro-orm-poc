import { defineEntity, InferEntity, p } from "@mikro-orm/core";
import { BaseClass, BaseEntity } from "../base/base.entity";
import { UserClass } from "../user/user.entity";

export class AudioClass extends BaseClass {
  user!: UserClass;
  description!: string;
  audioUrl!: string;
}

export const AudioEntity = defineEntity({
  name: "AudioClass",
  tableName: "audios",
  class: AudioClass,
  extends: BaseEntity,
  properties: {
    user: () => p.manyToOne(UserClass).eager(true),
    description: p.text(),
    audioUrl: p.string().unique(),
  },
});

export type IAudioEntity = InferEntity<typeof AudioEntity>;
