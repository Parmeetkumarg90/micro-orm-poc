import {
  defineEntity,
  InferEntity,
  InferEntityFromProperties,
  p,
} from "@mikro-orm/core";

export class BaseClass {}

export const BaseEntity = defineEntity({
  class: BaseClass,
  abstract: true,
  filters: {
    notDeleted: {
      name: "notDeleted",
      cond: {
        deleted_at: null,
      },
      default: true,
    },
  },
  properties: {
    id: p.integer().primary().autoincrement(),
    // gen_random_uuid only work in postgres as defaultRaw used for running sql function
    uuid: p.uuid().defaultRaw("gen_random_uuid()").unique(),
    created_at: p.datetime().onCreate(() => new Date()),
    updated_at: p
      .datetime()
      .onCreate(() => new Date())
      .onUpdate(() => new Date()),
    deleted_at: p.datetime().nullable(),
  },
});

export type IBaseEntity = InferEntity<typeof BaseEntity>;
