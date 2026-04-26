Topics i will learn and implement in this repository ->
i. Entity with discovery types - done
ii. Relations or modelling - done
iii. Repository Pattern - done
iv. Indexing, constraints and querying - done
v. Json properties
vi. Querying and loading strategies
vii. Migrations and seeding - done
viii. Materialized View
ix. Transactions
x. Locking Mechanisms

Notes: 
1. make all path in single environment for seeding, migration like in build or ts for easier use and also set path of ts for migration creation file so that never lost in recreation of build
2. upsert, upsertmany only works when entity contain unique property as it will first check if present otherwise create one and if not present then have to use persist(make an entity for db and flag them as dirty) and flush(sync with db)