import { defineEntity, p } from "@mikro-orm/core";

const BaseEntity = defineEntity({
    class: class Base { },
    abstract: true,
    filters: {
        notDeleted: {
            name: "notDeleted",
            cond: {
                deleted_at: null,
            },
            default: true
        }
    },
    properties: {
        id: p.integer().primary().autoincrement(),
        // gen_random_uuid only work in postgres as defaultRaw used for running sql function
        uuid: p.uuid().defaultRaw('gen_random_uuid()'),
        created_at: p.datetime().onCreate(() => (new Date())),
        updated_at: p.datetime().onUpdate(() => (new Date())),
        deleted_at: p.datetime().nullable(),
    }
});

export { BaseEntity };