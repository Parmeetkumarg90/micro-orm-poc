Topics i will learn and implement in this repository ->
i. Entity with discovery types -> An Entity is a distinct, identifiable object in a system that has its own identity and can store data about itself through attributes.
In simple terms: Entity = “Thing with identity + data”. Instead of explicitly listing entities, we can use glob patterns to discover entities automatically. - done

ii. Relations or modelling -> Defining how entities (tables) are connected using keys, so the database can enforce integrity and support efficient querying. Creating relations between two entities and also making joins like one-to-many, many-to-one, one-to-one, many-to-many. - done

iii. Repository Pattern -> Repository Pattern is an abstraction layer that sits between your domain/business logic and the data access layer, providing a unified interface to perform CRUD operations while hiding the actual data source and persistence logic.
In simple language instead of relying on database directly we will add a layer between database and business logic to ensure that both remain separated and will communicate with each other only through this layer. - done

iv. Indexing, constraints and querying - done
v. Json properties
vi. Querying and loading strategies
vii. Migrations and seeding - done
viii. Materialized View
ix. Transactions
x. Locking Mechanisms
xi. Context -> Request Context in MikroORM is a mechanism using Node.js AsyncLocalStorage to isolate the Identity Map and EntityManager per request, preventing data leakage between concurrent operations.  It ensures that each HTTP request or asynchronous task maintains a unique, clean state for entity tracking and caching. For non-HTTP scenarios like queue handlers or scheduled tasks, you should use the @CreateRequestContext() decorator on top-level methods to ensure a dedicated context is created. Alternatively, you can manually fork the EntityManager using orm.em.fork() to create a new context with its own identity map.

Notes:

1. make all path in single environment for seeding, migration like in build or ts for easier use and also set path of ts for migration creation file so that never lost in recreation of build
2. upsert, upsertmany only works when entity contain unique property as it will first check if present otherwise create one and if not present then have to use persist(make an entity for db and flag them as dirty) and flush(sync with db)
