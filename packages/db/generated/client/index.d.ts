
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model OrgMember
 * 
 */
export type OrgMember = $Result.DefaultSelection<Prisma.$OrgMemberPayload>
/**
 * Model Repository
 * 
 */
export type Repository = $Result.DefaultSelection<Prisma.$RepositoryPayload>
/**
 * Model Developer
 * 
 */
export type Developer = $Result.DefaultSelection<Prisma.$DeveloperPayload>
/**
 * Model Commit
 * 
 */
export type Commit = $Result.DefaultSelection<Prisma.$CommitPayload>
/**
 * Model PullRequest
 * 
 */
export type PullRequest = $Result.DefaultSelection<Prisma.$PullRequestPayload>
/**
 * Model PRFeedback
 * 
 */
export type PRFeedback = $Result.DefaultSelection<Prisma.$PRFeedbackPayload>
/**
 * Model Meeting
 * 
 */
export type Meeting = $Result.DefaultSelection<Prisma.$MeetingPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Sprint
 * 
 */
export type Sprint = $Result.DefaultSelection<Prisma.$SprintPayload>
/**
 * Model Embedding
 * 
 */
export type Embedding = $Result.DefaultSelection<Prisma.$EmbeddingPayload>
/**
 * Model ChatSession
 * 
 */
export type ChatSession = $Result.DefaultSelection<Prisma.$ChatSessionPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrgRole: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type OrgRole = (typeof OrgRole)[keyof typeof OrgRole]


export const PRState: {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
  MERGED: 'MERGED'
};

export type PRState = (typeof PRState)[keyof typeof PRState]


export const MeetingType: {
  SCRUM: 'SCRUM',
  PLANNING: 'PLANNING',
  RETROSPECTIVE: 'RETROSPECTIVE',
  STANDUP: 'STANDUP',
  OTHER: 'OTHER'
};

export type MeetingType = (typeof MeetingType)[keyof typeof MeetingType]


export const TaskStatus: {
  SUGGESTED: 'SUGGESTED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const EmbeddingSource: {
  COMMIT: 'COMMIT',
  PULL_REQUEST: 'PULL_REQUEST',
  MEETING_TRANSCRIPT: 'MEETING_TRANSCRIPT',
  DISCORD_MESSAGE: 'DISCORD_MESSAGE',
  REPOSITORY_FILE: 'REPOSITORY_FILE',
  SPRINT_SUMMARY: 'SPRINT_SUMMARY',
  DEVELOPER_SUMMARY: 'DEVELOPER_SUMMARY'
};

export type EmbeddingSource = (typeof EmbeddingSource)[keyof typeof EmbeddingSource]

}

export type OrgRole = $Enums.OrgRole

export const OrgRole: typeof $Enums.OrgRole

export type PRState = $Enums.PRState

export const PRState: typeof $Enums.PRState

export type MeetingType = $Enums.MeetingType

export const MeetingType: typeof $Enums.MeetingType

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type EmbeddingSource = $Enums.EmbeddingSource

export const EmbeddingSource: typeof $Enums.EmbeddingSource

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs>;

  /**
   * `prisma.orgMember`: Exposes CRUD operations for the **OrgMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrgMembers
    * const orgMembers = await prisma.orgMember.findMany()
    * ```
    */
  get orgMember(): Prisma.OrgMemberDelegate<ExtArgs>;

  /**
   * `prisma.repository`: Exposes CRUD operations for the **Repository** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repositories
    * const repositories = await prisma.repository.findMany()
    * ```
    */
  get repository(): Prisma.RepositoryDelegate<ExtArgs>;

  /**
   * `prisma.developer`: Exposes CRUD operations for the **Developer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Developers
    * const developers = await prisma.developer.findMany()
    * ```
    */
  get developer(): Prisma.DeveloperDelegate<ExtArgs>;

  /**
   * `prisma.commit`: Exposes CRUD operations for the **Commit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commits
    * const commits = await prisma.commit.findMany()
    * ```
    */
  get commit(): Prisma.CommitDelegate<ExtArgs>;

  /**
   * `prisma.pullRequest`: Exposes CRUD operations for the **PullRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PullRequests
    * const pullRequests = await prisma.pullRequest.findMany()
    * ```
    */
  get pullRequest(): Prisma.PullRequestDelegate<ExtArgs>;

  /**
   * `prisma.pRFeedback`: Exposes CRUD operations for the **PRFeedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PRFeedbacks
    * const pRFeedbacks = await prisma.pRFeedback.findMany()
    * ```
    */
  get pRFeedback(): Prisma.PRFeedbackDelegate<ExtArgs>;

  /**
   * `prisma.meeting`: Exposes CRUD operations for the **Meeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meeting.findMany()
    * ```
    */
  get meeting(): Prisma.MeetingDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.sprint`: Exposes CRUD operations for the **Sprint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sprints
    * const sprints = await prisma.sprint.findMany()
    * ```
    */
  get sprint(): Prisma.SprintDelegate<ExtArgs>;

  /**
   * `prisma.embedding`: Exposes CRUD operations for the **Embedding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Embeddings
    * const embeddings = await prisma.embedding.findMany()
    * ```
    */
  get embedding(): Prisma.EmbeddingDelegate<ExtArgs>;

  /**
   * `prisma.chatSession`: Exposes CRUD operations for the **ChatSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatSessions
    * const chatSessions = await prisma.chatSession.findMany()
    * ```
    */
  get chatSession(): Prisma.ChatSessionDelegate<ExtArgs>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organization: 'Organization',
    OrgMember: 'OrgMember',
    Repository: 'Repository',
    Developer: 'Developer',
    Commit: 'Commit',
    PullRequest: 'PullRequest',
    PRFeedback: 'PRFeedback',
    Meeting: 'Meeting',
    Task: 'Task',
    Sprint: 'Sprint',
    Embedding: 'Embedding',
    ChatSession: 'ChatSession',
    ChatMessage: 'ChatMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "organization" | "orgMember" | "repository" | "developer" | "commit" | "pullRequest" | "pRFeedback" | "meeting" | "task" | "sprint" | "embedding" | "chatSession" | "chatMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      OrgMember: {
        payload: Prisma.$OrgMemberPayload<ExtArgs>
        fields: Prisma.OrgMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrgMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrgMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload>
          }
          findFirst: {
            args: Prisma.OrgMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrgMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload>
          }
          findMany: {
            args: Prisma.OrgMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload>[]
          }
          create: {
            args: Prisma.OrgMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload>
          }
          createMany: {
            args: Prisma.OrgMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrgMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload>[]
          }
          delete: {
            args: Prisma.OrgMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload>
          }
          update: {
            args: Prisma.OrgMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload>
          }
          deleteMany: {
            args: Prisma.OrgMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrgMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrgMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload>
          }
          aggregate: {
            args: Prisma.OrgMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrgMember>
          }
          groupBy: {
            args: Prisma.OrgMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrgMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrgMemberCountArgs<ExtArgs>
            result: $Utils.Optional<OrgMemberCountAggregateOutputType> | number
          }
        }
      }
      Repository: {
        payload: Prisma.$RepositoryPayload<ExtArgs>
        fields: Prisma.RepositoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepositoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepositoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findFirst: {
            args: Prisma.RepositoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepositoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findMany: {
            args: Prisma.RepositoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          create: {
            args: Prisma.RepositoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          createMany: {
            args: Prisma.RepositoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepositoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          delete: {
            args: Prisma.RepositoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          update: {
            args: Prisma.RepositoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          deleteMany: {
            args: Prisma.RepositoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepositoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RepositoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          aggregate: {
            args: Prisma.RepositoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepository>
          }
          groupBy: {
            args: Prisma.RepositoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepositoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepositoryCountArgs<ExtArgs>
            result: $Utils.Optional<RepositoryCountAggregateOutputType> | number
          }
        }
      }
      Developer: {
        payload: Prisma.$DeveloperPayload<ExtArgs>
        fields: Prisma.DeveloperFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeveloperFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeveloperFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          findFirst: {
            args: Prisma.DeveloperFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeveloperFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          findMany: {
            args: Prisma.DeveloperFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>[]
          }
          create: {
            args: Prisma.DeveloperCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          createMany: {
            args: Prisma.DeveloperCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeveloperCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>[]
          }
          delete: {
            args: Prisma.DeveloperDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          update: {
            args: Prisma.DeveloperUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          deleteMany: {
            args: Prisma.DeveloperDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeveloperUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeveloperUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          aggregate: {
            args: Prisma.DeveloperAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeveloper>
          }
          groupBy: {
            args: Prisma.DeveloperGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeveloperGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeveloperCountArgs<ExtArgs>
            result: $Utils.Optional<DeveloperCountAggregateOutputType> | number
          }
        }
      }
      Commit: {
        payload: Prisma.$CommitPayload<ExtArgs>
        fields: Prisma.CommitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload>
          }
          findFirst: {
            args: Prisma.CommitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload>
          }
          findMany: {
            args: Prisma.CommitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload>[]
          }
          create: {
            args: Prisma.CommitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload>
          }
          createMany: {
            args: Prisma.CommitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload>[]
          }
          delete: {
            args: Prisma.CommitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload>
          }
          update: {
            args: Prisma.CommitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload>
          }
          deleteMany: {
            args: Prisma.CommitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload>
          }
          aggregate: {
            args: Prisma.CommitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommit>
          }
          groupBy: {
            args: Prisma.CommitGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommitGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommitCountArgs<ExtArgs>
            result: $Utils.Optional<CommitCountAggregateOutputType> | number
          }
        }
      }
      PullRequest: {
        payload: Prisma.$PullRequestPayload<ExtArgs>
        fields: Prisma.PullRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PullRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PullRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          findFirst: {
            args: Prisma.PullRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PullRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          findMany: {
            args: Prisma.PullRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>[]
          }
          create: {
            args: Prisma.PullRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          createMany: {
            args: Prisma.PullRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PullRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>[]
          }
          delete: {
            args: Prisma.PullRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          update: {
            args: Prisma.PullRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          deleteMany: {
            args: Prisma.PullRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PullRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PullRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          aggregate: {
            args: Prisma.PullRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePullRequest>
          }
          groupBy: {
            args: Prisma.PullRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<PullRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PullRequestCountArgs<ExtArgs>
            result: $Utils.Optional<PullRequestCountAggregateOutputType> | number
          }
        }
      }
      PRFeedback: {
        payload: Prisma.$PRFeedbackPayload<ExtArgs>
        fields: Prisma.PRFeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PRFeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PRFeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFeedbackPayload>
          }
          findFirst: {
            args: Prisma.PRFeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PRFeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFeedbackPayload>
          }
          findMany: {
            args: Prisma.PRFeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFeedbackPayload>[]
          }
          create: {
            args: Prisma.PRFeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFeedbackPayload>
          }
          createMany: {
            args: Prisma.PRFeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PRFeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFeedbackPayload>[]
          }
          delete: {
            args: Prisma.PRFeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFeedbackPayload>
          }
          update: {
            args: Prisma.PRFeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFeedbackPayload>
          }
          deleteMany: {
            args: Prisma.PRFeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PRFeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PRFeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFeedbackPayload>
          }
          aggregate: {
            args: Prisma.PRFeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePRFeedback>
          }
          groupBy: {
            args: Prisma.PRFeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<PRFeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.PRFeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<PRFeedbackCountAggregateOutputType> | number
          }
        }
      }
      Meeting: {
        payload: Prisma.$MeetingPayload<ExtArgs>
        fields: Prisma.MeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findFirst: {
            args: Prisma.MeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findMany: {
            args: Prisma.MeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          create: {
            args: Prisma.MeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          createMany: {
            args: Prisma.MeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          delete: {
            args: Prisma.MeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          update: {
            args: Prisma.MeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          deleteMany: {
            args: Prisma.MeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          aggregate: {
            args: Prisma.MeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting>
          }
          groupBy: {
            args: Prisma.MeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Sprint: {
        payload: Prisma.$SprintPayload<ExtArgs>
        fields: Prisma.SprintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SprintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SprintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          findFirst: {
            args: Prisma.SprintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SprintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          findMany: {
            args: Prisma.SprintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>[]
          }
          create: {
            args: Prisma.SprintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          createMany: {
            args: Prisma.SprintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SprintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>[]
          }
          delete: {
            args: Prisma.SprintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          update: {
            args: Prisma.SprintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          deleteMany: {
            args: Prisma.SprintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SprintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SprintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          aggregate: {
            args: Prisma.SprintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSprint>
          }
          groupBy: {
            args: Prisma.SprintGroupByArgs<ExtArgs>
            result: $Utils.Optional<SprintGroupByOutputType>[]
          }
          count: {
            args: Prisma.SprintCountArgs<ExtArgs>
            result: $Utils.Optional<SprintCountAggregateOutputType> | number
          }
        }
      }
      Embedding: {
        payload: Prisma.$EmbeddingPayload<ExtArgs>
        fields: Prisma.EmbeddingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmbeddingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmbeddingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload>
          }
          findFirst: {
            args: Prisma.EmbeddingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmbeddingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload>
          }
          findMany: {
            args: Prisma.EmbeddingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload>[]
          }
          create: {
            args: Prisma.EmbeddingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload>
          }
          createMany: {
            args: Prisma.EmbeddingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmbeddingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload>[]
          }
          delete: {
            args: Prisma.EmbeddingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload>
          }
          update: {
            args: Prisma.EmbeddingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload>
          }
          deleteMany: {
            args: Prisma.EmbeddingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmbeddingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmbeddingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload>
          }
          aggregate: {
            args: Prisma.EmbeddingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmbedding>
          }
          groupBy: {
            args: Prisma.EmbeddingGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmbeddingGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmbeddingCountArgs<ExtArgs>
            result: $Utils.Optional<EmbeddingCountAggregateOutputType> | number
          }
        }
      }
      ChatSession: {
        payload: Prisma.$ChatSessionPayload<ExtArgs>
        fields: Prisma.ChatSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findFirst: {
            args: Prisma.ChatSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findMany: {
            args: Prisma.ChatSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          create: {
            args: Prisma.ChatSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          createMany: {
            args: Prisma.ChatSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          delete: {
            args: Prisma.ChatSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          update: {
            args: Prisma.ChatSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          deleteMany: {
            args: Prisma.ChatSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          aggregate: {
            args: Prisma.ChatSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatSession>
          }
          groupBy: {
            args: Prisma.ChatSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    members: number
    repos: number
    developers: number
    sprints: number
    meetings: number
    tasks: number
    embeddings: number
    chatSessions: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | OrganizationCountOutputTypeCountMembersArgs
    repos?: boolean | OrganizationCountOutputTypeCountReposArgs
    developers?: boolean | OrganizationCountOutputTypeCountDevelopersArgs
    sprints?: boolean | OrganizationCountOutputTypeCountSprintsArgs
    meetings?: boolean | OrganizationCountOutputTypeCountMeetingsArgs
    tasks?: boolean | OrganizationCountOutputTypeCountTasksArgs
    embeddings?: boolean | OrganizationCountOutputTypeCountEmbeddingsArgs
    chatSessions?: boolean | OrganizationCountOutputTypeCountChatSessionsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgMemberWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountReposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepositoryWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountDevelopersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeveloperWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountSprintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SprintWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountEmbeddingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmbeddingWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountChatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
  }


  /**
   * Count Type RepositoryCountOutputType
   */

  export type RepositoryCountOutputType = {
    commits: number
    pullRequests: number
    embeddings: number
  }

  export type RepositoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commits?: boolean | RepositoryCountOutputTypeCountCommitsArgs
    pullRequests?: boolean | RepositoryCountOutputTypeCountPullRequestsArgs
    embeddings?: boolean | RepositoryCountOutputTypeCountEmbeddingsArgs
  }

  // Custom InputTypes
  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepositoryCountOutputType
     */
    select?: RepositoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeCountCommitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitWhereInput
  }

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeCountPullRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PullRequestWhereInput
  }

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeCountEmbeddingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmbeddingWhereInput
  }


  /**
   * Count Type DeveloperCountOutputType
   */

  export type DeveloperCountOutputType = {
    commits: number
    pullRequests: number
    taskAssignments: number
  }

  export type DeveloperCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commits?: boolean | DeveloperCountOutputTypeCountCommitsArgs
    pullRequests?: boolean | DeveloperCountOutputTypeCountPullRequestsArgs
    taskAssignments?: boolean | DeveloperCountOutputTypeCountTaskAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * DeveloperCountOutputType without action
   */
  export type DeveloperCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperCountOutputType
     */
    select?: DeveloperCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeveloperCountOutputType without action
   */
  export type DeveloperCountOutputTypeCountCommitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitWhereInput
  }

  /**
   * DeveloperCountOutputType without action
   */
  export type DeveloperCountOutputTypeCountPullRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PullRequestWhereInput
  }

  /**
   * DeveloperCountOutputType without action
   */
  export type DeveloperCountOutputTypeCountTaskAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type PullRequestCountOutputType
   */

  export type PullRequestCountOutputType = {
    feedbackSent: number
  }

  export type PullRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedbackSent?: boolean | PullRequestCountOutputTypeCountFeedbackSentArgs
  }

  // Custom InputTypes
  /**
   * PullRequestCountOutputType without action
   */
  export type PullRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequestCountOutputType
     */
    select?: PullRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PullRequestCountOutputType without action
   */
  export type PullRequestCountOutputTypeCountFeedbackSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRFeedbackWhereInput
  }


  /**
   * Count Type MeetingCountOutputType
   */

  export type MeetingCountOutputType = {
    tasks: number
  }

  export type MeetingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | MeetingCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingCountOutputType
     */
    select?: MeetingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type ChatSessionCountOutputType
   */

  export type ChatSessionCountOutputType = {
    messages: number
  }

  export type ChatSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatSessionCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSessionCountOutputType
     */
    select?: ChatSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    githubOrgId: string | null
    discordGuildId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    githubOrgId: string | null
    discordGuildId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    githubOrgId: number
    discordGuildId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    githubOrgId?: true
    discordGuildId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    githubOrgId?: true
    discordGuildId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    githubOrgId?: true
    discordGuildId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    slug: string
    githubOrgId: string | null
    discordGuildId: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    githubOrgId?: boolean
    discordGuildId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Organization$membersArgs<ExtArgs>
    repos?: boolean | Organization$reposArgs<ExtArgs>
    developers?: boolean | Organization$developersArgs<ExtArgs>
    sprints?: boolean | Organization$sprintsArgs<ExtArgs>
    meetings?: boolean | Organization$meetingsArgs<ExtArgs>
    tasks?: boolean | Organization$tasksArgs<ExtArgs>
    embeddings?: boolean | Organization$embeddingsArgs<ExtArgs>
    chatSessions?: boolean | Organization$chatSessionsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    githubOrgId?: boolean
    discordGuildId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    githubOrgId?: boolean
    discordGuildId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Organization$membersArgs<ExtArgs>
    repos?: boolean | Organization$reposArgs<ExtArgs>
    developers?: boolean | Organization$developersArgs<ExtArgs>
    sprints?: boolean | Organization$sprintsArgs<ExtArgs>
    meetings?: boolean | Organization$meetingsArgs<ExtArgs>
    tasks?: boolean | Organization$tasksArgs<ExtArgs>
    embeddings?: boolean | Organization$embeddingsArgs<ExtArgs>
    chatSessions?: boolean | Organization$chatSessionsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      members: Prisma.$OrgMemberPayload<ExtArgs>[]
      repos: Prisma.$RepositoryPayload<ExtArgs>[]
      developers: Prisma.$DeveloperPayload<ExtArgs>[]
      sprints: Prisma.$SprintPayload<ExtArgs>[]
      meetings: Prisma.$MeetingPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      embeddings: Prisma.$EmbeddingPayload<ExtArgs>[]
      chatSessions: Prisma.$ChatSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      githubOrgId: string | null
      discordGuildId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Organization$membersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "findMany"> | Null>
    repos<T extends Organization$reposArgs<ExtArgs> = {}>(args?: Subset<T, Organization$reposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findMany"> | Null>
    developers<T extends Organization$developersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$developersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findMany"> | Null>
    sprints<T extends Organization$sprintsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$sprintsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findMany"> | Null>
    meetings<T extends Organization$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany"> | Null>
    tasks<T extends Organization$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Organization$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    embeddings<T extends Organization$embeddingsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$embeddingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "findMany"> | Null>
    chatSessions<T extends Organization$chatSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$chatSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */ 
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly slug: FieldRef<"Organization", 'String'>
    readonly githubOrgId: FieldRef<"Organization", 'String'>
    readonly discordGuildId: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization.members
   */
  export type Organization$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    where?: OrgMemberWhereInput
    orderBy?: OrgMemberOrderByWithRelationInput | OrgMemberOrderByWithRelationInput[]
    cursor?: OrgMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrgMemberScalarFieldEnum | OrgMemberScalarFieldEnum[]
  }

  /**
   * Organization.repos
   */
  export type Organization$reposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    where?: RepositoryWhereInput
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    cursor?: RepositoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Organization.developers
   */
  export type Organization$developersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    where?: DeveloperWhereInput
    orderBy?: DeveloperOrderByWithRelationInput | DeveloperOrderByWithRelationInput[]
    cursor?: DeveloperWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[]
  }

  /**
   * Organization.sprints
   */
  export type Organization$sprintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    where?: SprintWhereInput
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    cursor?: SprintWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SprintScalarFieldEnum | SprintScalarFieldEnum[]
  }

  /**
   * Organization.meetings
   */
  export type Organization$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Organization.tasks
   */
  export type Organization$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Organization.embeddings
   */
  export type Organization$embeddingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    where?: EmbeddingWhereInput
    orderBy?: EmbeddingOrderByWithRelationInput | EmbeddingOrderByWithRelationInput[]
    cursor?: EmbeddingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmbeddingScalarFieldEnum | EmbeddingScalarFieldEnum[]
  }

  /**
   * Organization.chatSessions
   */
  export type Organization$chatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    cursor?: ChatSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model OrgMember
   */

  export type AggregateOrgMember = {
    _count: OrgMemberCountAggregateOutputType | null
    _min: OrgMemberMinAggregateOutputType | null
    _max: OrgMemberMaxAggregateOutputType | null
  }

  export type OrgMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    orgId: string | null
    role: $Enums.OrgRole | null
  }

  export type OrgMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    orgId: string | null
    role: $Enums.OrgRole | null
  }

  export type OrgMemberCountAggregateOutputType = {
    id: number
    userId: number
    orgId: number
    role: number
    _all: number
  }


  export type OrgMemberMinAggregateInputType = {
    id?: true
    userId?: true
    orgId?: true
    role?: true
  }

  export type OrgMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    orgId?: true
    role?: true
  }

  export type OrgMemberCountAggregateInputType = {
    id?: true
    userId?: true
    orgId?: true
    role?: true
    _all?: true
  }

  export type OrgMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrgMember to aggregate.
     */
    where?: OrgMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgMembers to fetch.
     */
    orderBy?: OrgMemberOrderByWithRelationInput | OrgMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrgMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrgMembers
    **/
    _count?: true | OrgMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrgMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrgMemberMaxAggregateInputType
  }

  export type GetOrgMemberAggregateType<T extends OrgMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateOrgMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrgMember[P]>
      : GetScalarType<T[P], AggregateOrgMember[P]>
  }




  export type OrgMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgMemberWhereInput
    orderBy?: OrgMemberOrderByWithAggregationInput | OrgMemberOrderByWithAggregationInput[]
    by: OrgMemberScalarFieldEnum[] | OrgMemberScalarFieldEnum
    having?: OrgMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrgMemberCountAggregateInputType | true
    _min?: OrgMemberMinAggregateInputType
    _max?: OrgMemberMaxAggregateInputType
  }

  export type OrgMemberGroupByOutputType = {
    id: string
    userId: string
    orgId: string
    role: $Enums.OrgRole
    _count: OrgMemberCountAggregateOutputType | null
    _min: OrgMemberMinAggregateOutputType | null
    _max: OrgMemberMaxAggregateOutputType | null
  }

  type GetOrgMemberGroupByPayload<T extends OrgMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrgMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrgMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrgMemberGroupByOutputType[P]>
            : GetScalarType<T[P], OrgMemberGroupByOutputType[P]>
        }
      >
    >


  export type OrgMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    orgId?: boolean
    role?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orgMember"]>

  export type OrgMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    orgId?: boolean
    role?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orgMember"]>

  export type OrgMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    orgId?: boolean
    role?: boolean
  }

  export type OrgMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrgMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $OrgMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrgMember"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      orgId: string
      role: $Enums.OrgRole
    }, ExtArgs["result"]["orgMember"]>
    composites: {}
  }

  type OrgMemberGetPayload<S extends boolean | null | undefined | OrgMemberDefaultArgs> = $Result.GetResult<Prisma.$OrgMemberPayload, S>

  type OrgMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrgMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrgMemberCountAggregateInputType | true
    }

  export interface OrgMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrgMember'], meta: { name: 'OrgMember' } }
    /**
     * Find zero or one OrgMember that matches the filter.
     * @param {OrgMemberFindUniqueArgs} args - Arguments to find a OrgMember
     * @example
     * // Get one OrgMember
     * const orgMember = await prisma.orgMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrgMemberFindUniqueArgs>(args: SelectSubset<T, OrgMemberFindUniqueArgs<ExtArgs>>): Prisma__OrgMemberClient<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrgMember that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrgMemberFindUniqueOrThrowArgs} args - Arguments to find a OrgMember
     * @example
     * // Get one OrgMember
     * const orgMember = await prisma.orgMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrgMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, OrgMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrgMemberClient<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrgMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgMemberFindFirstArgs} args - Arguments to find a OrgMember
     * @example
     * // Get one OrgMember
     * const orgMember = await prisma.orgMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrgMemberFindFirstArgs>(args?: SelectSubset<T, OrgMemberFindFirstArgs<ExtArgs>>): Prisma__OrgMemberClient<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrgMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgMemberFindFirstOrThrowArgs} args - Arguments to find a OrgMember
     * @example
     * // Get one OrgMember
     * const orgMember = await prisma.orgMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrgMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, OrgMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrgMemberClient<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrgMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrgMembers
     * const orgMembers = await prisma.orgMember.findMany()
     * 
     * // Get first 10 OrgMembers
     * const orgMembers = await prisma.orgMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orgMemberWithIdOnly = await prisma.orgMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrgMemberFindManyArgs>(args?: SelectSubset<T, OrgMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrgMember.
     * @param {OrgMemberCreateArgs} args - Arguments to create a OrgMember.
     * @example
     * // Create one OrgMember
     * const OrgMember = await prisma.orgMember.create({
     *   data: {
     *     // ... data to create a OrgMember
     *   }
     * })
     * 
     */
    create<T extends OrgMemberCreateArgs>(args: SelectSubset<T, OrgMemberCreateArgs<ExtArgs>>): Prisma__OrgMemberClient<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrgMembers.
     * @param {OrgMemberCreateManyArgs} args - Arguments to create many OrgMembers.
     * @example
     * // Create many OrgMembers
     * const orgMember = await prisma.orgMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrgMemberCreateManyArgs>(args?: SelectSubset<T, OrgMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrgMembers and returns the data saved in the database.
     * @param {OrgMemberCreateManyAndReturnArgs} args - Arguments to create many OrgMembers.
     * @example
     * // Create many OrgMembers
     * const orgMember = await prisma.orgMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrgMembers and only return the `id`
     * const orgMemberWithIdOnly = await prisma.orgMember.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrgMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, OrgMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrgMember.
     * @param {OrgMemberDeleteArgs} args - Arguments to delete one OrgMember.
     * @example
     * // Delete one OrgMember
     * const OrgMember = await prisma.orgMember.delete({
     *   where: {
     *     // ... filter to delete one OrgMember
     *   }
     * })
     * 
     */
    delete<T extends OrgMemberDeleteArgs>(args: SelectSubset<T, OrgMemberDeleteArgs<ExtArgs>>): Prisma__OrgMemberClient<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrgMember.
     * @param {OrgMemberUpdateArgs} args - Arguments to update one OrgMember.
     * @example
     * // Update one OrgMember
     * const orgMember = await prisma.orgMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrgMemberUpdateArgs>(args: SelectSubset<T, OrgMemberUpdateArgs<ExtArgs>>): Prisma__OrgMemberClient<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrgMembers.
     * @param {OrgMemberDeleteManyArgs} args - Arguments to filter OrgMembers to delete.
     * @example
     * // Delete a few OrgMembers
     * const { count } = await prisma.orgMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrgMemberDeleteManyArgs>(args?: SelectSubset<T, OrgMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrgMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrgMembers
     * const orgMember = await prisma.orgMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrgMemberUpdateManyArgs>(args: SelectSubset<T, OrgMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrgMember.
     * @param {OrgMemberUpsertArgs} args - Arguments to update or create a OrgMember.
     * @example
     * // Update or create a OrgMember
     * const orgMember = await prisma.orgMember.upsert({
     *   create: {
     *     // ... data to create a OrgMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrgMember we want to update
     *   }
     * })
     */
    upsert<T extends OrgMemberUpsertArgs>(args: SelectSubset<T, OrgMemberUpsertArgs<ExtArgs>>): Prisma__OrgMemberClient<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrgMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgMemberCountArgs} args - Arguments to filter OrgMembers to count.
     * @example
     * // Count the number of OrgMembers
     * const count = await prisma.orgMember.count({
     *   where: {
     *     // ... the filter for the OrgMembers we want to count
     *   }
     * })
    **/
    count<T extends OrgMemberCountArgs>(
      args?: Subset<T, OrgMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrgMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrgMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrgMemberAggregateArgs>(args: Subset<T, OrgMemberAggregateArgs>): Prisma.PrismaPromise<GetOrgMemberAggregateType<T>>

    /**
     * Group by OrgMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrgMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrgMemberGroupByArgs['orderBy'] }
        : { orderBy?: OrgMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrgMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrgMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrgMember model
   */
  readonly fields: OrgMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrgMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrgMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrgMember model
   */ 
  interface OrgMemberFieldRefs {
    readonly id: FieldRef<"OrgMember", 'String'>
    readonly userId: FieldRef<"OrgMember", 'String'>
    readonly orgId: FieldRef<"OrgMember", 'String'>
    readonly role: FieldRef<"OrgMember", 'OrgRole'>
  }
    

  // Custom InputTypes
  /**
   * OrgMember findUnique
   */
  export type OrgMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrgMember to fetch.
     */
    where: OrgMemberWhereUniqueInput
  }

  /**
   * OrgMember findUniqueOrThrow
   */
  export type OrgMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrgMember to fetch.
     */
    where: OrgMemberWhereUniqueInput
  }

  /**
   * OrgMember findFirst
   */
  export type OrgMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrgMember to fetch.
     */
    where?: OrgMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgMembers to fetch.
     */
    orderBy?: OrgMemberOrderByWithRelationInput | OrgMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrgMembers.
     */
    cursor?: OrgMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrgMembers.
     */
    distinct?: OrgMemberScalarFieldEnum | OrgMemberScalarFieldEnum[]
  }

  /**
   * OrgMember findFirstOrThrow
   */
  export type OrgMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrgMember to fetch.
     */
    where?: OrgMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgMembers to fetch.
     */
    orderBy?: OrgMemberOrderByWithRelationInput | OrgMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrgMembers.
     */
    cursor?: OrgMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrgMembers.
     */
    distinct?: OrgMemberScalarFieldEnum | OrgMemberScalarFieldEnum[]
  }

  /**
   * OrgMember findMany
   */
  export type OrgMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrgMembers to fetch.
     */
    where?: OrgMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgMembers to fetch.
     */
    orderBy?: OrgMemberOrderByWithRelationInput | OrgMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrgMembers.
     */
    cursor?: OrgMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgMembers.
     */
    skip?: number
    distinct?: OrgMemberScalarFieldEnum | OrgMemberScalarFieldEnum[]
  }

  /**
   * OrgMember create
   */
  export type OrgMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a OrgMember.
     */
    data: XOR<OrgMemberCreateInput, OrgMemberUncheckedCreateInput>
  }

  /**
   * OrgMember createMany
   */
  export type OrgMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrgMembers.
     */
    data: OrgMemberCreateManyInput | OrgMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrgMember createManyAndReturn
   */
  export type OrgMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrgMembers.
     */
    data: OrgMemberCreateManyInput | OrgMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrgMember update
   */
  export type OrgMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a OrgMember.
     */
    data: XOR<OrgMemberUpdateInput, OrgMemberUncheckedUpdateInput>
    /**
     * Choose, which OrgMember to update.
     */
    where: OrgMemberWhereUniqueInput
  }

  /**
   * OrgMember updateMany
   */
  export type OrgMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrgMembers.
     */
    data: XOR<OrgMemberUpdateManyMutationInput, OrgMemberUncheckedUpdateManyInput>
    /**
     * Filter which OrgMembers to update
     */
    where?: OrgMemberWhereInput
  }

  /**
   * OrgMember upsert
   */
  export type OrgMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the OrgMember to update in case it exists.
     */
    where: OrgMemberWhereUniqueInput
    /**
     * In case the OrgMember found by the `where` argument doesn't exist, create a new OrgMember with this data.
     */
    create: XOR<OrgMemberCreateInput, OrgMemberUncheckedCreateInput>
    /**
     * In case the OrgMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrgMemberUpdateInput, OrgMemberUncheckedUpdateInput>
  }

  /**
   * OrgMember delete
   */
  export type OrgMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * Filter which OrgMember to delete.
     */
    where: OrgMemberWhereUniqueInput
  }

  /**
   * OrgMember deleteMany
   */
  export type OrgMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrgMembers to delete
     */
    where?: OrgMemberWhereInput
  }

  /**
   * OrgMember without action
   */
  export type OrgMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
  }


  /**
   * Model Repository
   */

  export type AggregateRepository = {
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  export type RepositoryAvgAggregateOutputType = {
    githubId: number | null
  }

  export type RepositorySumAggregateOutputType = {
    githubId: number | null
  }

  export type RepositoryMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    githubId: number | null
    name: string | null
    fullName: string | null
    description: string | null
    language: string | null
    isPrivate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepositoryMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    githubId: number | null
    name: string | null
    fullName: string | null
    description: string | null
    language: string | null
    isPrivate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepositoryCountAggregateOutputType = {
    id: number
    orgId: number
    githubId: number
    name: number
    fullName: number
    description: number
    language: number
    isPrivate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RepositoryAvgAggregateInputType = {
    githubId?: true
  }

  export type RepositorySumAggregateInputType = {
    githubId?: true
  }

  export type RepositoryMinAggregateInputType = {
    id?: true
    orgId?: true
    githubId?: true
    name?: true
    fullName?: true
    description?: true
    language?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepositoryMaxAggregateInputType = {
    id?: true
    orgId?: true
    githubId?: true
    name?: true
    fullName?: true
    description?: true
    language?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepositoryCountAggregateInputType = {
    id?: true
    orgId?: true
    githubId?: true
    name?: true
    fullName?: true
    description?: true
    language?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RepositoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repository to aggregate.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repositories
    **/
    _count?: true | RepositoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepositoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepositorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepositoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepositoryMaxAggregateInputType
  }

  export type GetRepositoryAggregateType<T extends RepositoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRepository]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepository[P]>
      : GetScalarType<T[P], AggregateRepository[P]>
  }




  export type RepositoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepositoryWhereInput
    orderBy?: RepositoryOrderByWithAggregationInput | RepositoryOrderByWithAggregationInput[]
    by: RepositoryScalarFieldEnum[] | RepositoryScalarFieldEnum
    having?: RepositoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepositoryCountAggregateInputType | true
    _avg?: RepositoryAvgAggregateInputType
    _sum?: RepositorySumAggregateInputType
    _min?: RepositoryMinAggregateInputType
    _max?: RepositoryMaxAggregateInputType
  }

  export type RepositoryGroupByOutputType = {
    id: string
    orgId: string
    githubId: number
    name: string
    fullName: string
    description: string | null
    language: string | null
    isPrivate: boolean
    createdAt: Date
    updatedAt: Date
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  type GetRepositoryGroupByPayload<T extends RepositoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepositoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepositoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
            : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
        }
      >
    >


  export type RepositorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    githubId?: boolean
    name?: boolean
    fullName?: boolean
    description?: boolean
    language?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    commits?: boolean | Repository$commitsArgs<ExtArgs>
    pullRequests?: boolean | Repository$pullRequestsArgs<ExtArgs>
    embeddings?: boolean | Repository$embeddingsArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    githubId?: boolean
    name?: boolean
    fullName?: boolean
    description?: boolean
    language?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectScalar = {
    id?: boolean
    orgId?: boolean
    githubId?: boolean
    name?: boolean
    fullName?: boolean
    description?: boolean
    language?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RepositoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    commits?: boolean | Repository$commitsArgs<ExtArgs>
    pullRequests?: boolean | Repository$pullRequestsArgs<ExtArgs>
    embeddings?: boolean | Repository$embeddingsArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RepositoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $RepositoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repository"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
      commits: Prisma.$CommitPayload<ExtArgs>[]
      pullRequests: Prisma.$PullRequestPayload<ExtArgs>[]
      embeddings: Prisma.$EmbeddingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      githubId: number
      name: string
      fullName: string
      description: string | null
      language: string | null
      isPrivate: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["repository"]>
    composites: {}
  }

  type RepositoryGetPayload<S extends boolean | null | undefined | RepositoryDefaultArgs> = $Result.GetResult<Prisma.$RepositoryPayload, S>

  type RepositoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RepositoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RepositoryCountAggregateInputType | true
    }

  export interface RepositoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repository'], meta: { name: 'Repository' } }
    /**
     * Find zero or one Repository that matches the filter.
     * @param {RepositoryFindUniqueArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepositoryFindUniqueArgs>(args: SelectSubset<T, RepositoryFindUniqueArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Repository that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RepositoryFindUniqueOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepositoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RepositoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Repository that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepositoryFindFirstArgs>(args?: SelectSubset<T, RepositoryFindFirstArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Repository that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepositoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RepositoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Repositories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repositories
     * const repositories = await prisma.repository.findMany()
     * 
     * // Get first 10 Repositories
     * const repositories = await prisma.repository.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repositoryWithIdOnly = await prisma.repository.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepositoryFindManyArgs>(args?: SelectSubset<T, RepositoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Repository.
     * @param {RepositoryCreateArgs} args - Arguments to create a Repository.
     * @example
     * // Create one Repository
     * const Repository = await prisma.repository.create({
     *   data: {
     *     // ... data to create a Repository
     *   }
     * })
     * 
     */
    create<T extends RepositoryCreateArgs>(args: SelectSubset<T, RepositoryCreateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Repositories.
     * @param {RepositoryCreateManyArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepositoryCreateManyArgs>(args?: SelectSubset<T, RepositoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repositories and returns the data saved in the database.
     * @param {RepositoryCreateManyAndReturnArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repositories and only return the `id`
     * const repositoryWithIdOnly = await prisma.repository.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepositoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RepositoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Repository.
     * @param {RepositoryDeleteArgs} args - Arguments to delete one Repository.
     * @example
     * // Delete one Repository
     * const Repository = await prisma.repository.delete({
     *   where: {
     *     // ... filter to delete one Repository
     *   }
     * })
     * 
     */
    delete<T extends RepositoryDeleteArgs>(args: SelectSubset<T, RepositoryDeleteArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Repository.
     * @param {RepositoryUpdateArgs} args - Arguments to update one Repository.
     * @example
     * // Update one Repository
     * const repository = await prisma.repository.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepositoryUpdateArgs>(args: SelectSubset<T, RepositoryUpdateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Repositories.
     * @param {RepositoryDeleteManyArgs} args - Arguments to filter Repositories to delete.
     * @example
     * // Delete a few Repositories
     * const { count } = await prisma.repository.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepositoryDeleteManyArgs>(args?: SelectSubset<T, RepositoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepositoryUpdateManyArgs>(args: SelectSubset<T, RepositoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Repository.
     * @param {RepositoryUpsertArgs} args - Arguments to update or create a Repository.
     * @example
     * // Update or create a Repository
     * const repository = await prisma.repository.upsert({
     *   create: {
     *     // ... data to create a Repository
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repository we want to update
     *   }
     * })
     */
    upsert<T extends RepositoryUpsertArgs>(args: SelectSubset<T, RepositoryUpsertArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryCountArgs} args - Arguments to filter Repositories to count.
     * @example
     * // Count the number of Repositories
     * const count = await prisma.repository.count({
     *   where: {
     *     // ... the filter for the Repositories we want to count
     *   }
     * })
    **/
    count<T extends RepositoryCountArgs>(
      args?: Subset<T, RepositoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepositoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepositoryAggregateArgs>(args: Subset<T, RepositoryAggregateArgs>): Prisma.PrismaPromise<GetRepositoryAggregateType<T>>

    /**
     * Group by Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepositoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepositoryGroupByArgs['orderBy'] }
        : { orderBy?: RepositoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepositoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepositoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repository model
   */
  readonly fields: RepositoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repository.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepositoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    commits<T extends Repository$commitsArgs<ExtArgs> = {}>(args?: Subset<T, Repository$commitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "findMany"> | Null>
    pullRequests<T extends Repository$pullRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Repository$pullRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findMany"> | Null>
    embeddings<T extends Repository$embeddingsArgs<ExtArgs> = {}>(args?: Subset<T, Repository$embeddingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Repository model
   */ 
  interface RepositoryFieldRefs {
    readonly id: FieldRef<"Repository", 'String'>
    readonly orgId: FieldRef<"Repository", 'String'>
    readonly githubId: FieldRef<"Repository", 'Int'>
    readonly name: FieldRef<"Repository", 'String'>
    readonly fullName: FieldRef<"Repository", 'String'>
    readonly description: FieldRef<"Repository", 'String'>
    readonly language: FieldRef<"Repository", 'String'>
    readonly isPrivate: FieldRef<"Repository", 'Boolean'>
    readonly createdAt: FieldRef<"Repository", 'DateTime'>
    readonly updatedAt: FieldRef<"Repository", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Repository findUnique
   */
  export type RepositoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findUniqueOrThrow
   */
  export type RepositoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findFirst
   */
  export type RepositoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findFirstOrThrow
   */
  export type RepositoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findMany
   */
  export type RepositoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repositories to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository create
   */
  export type RepositoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Repository.
     */
    data: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
  }

  /**
   * Repository createMany
   */
  export type RepositoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repositories.
     */
    data: RepositoryCreateManyInput | RepositoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repository createManyAndReturn
   */
  export type RepositoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Repositories.
     */
    data: RepositoryCreateManyInput | RepositoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Repository update
   */
  export type RepositoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Repository.
     */
    data: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
    /**
     * Choose, which Repository to update.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository updateMany
   */
  export type RepositoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repositories.
     */
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyInput>
    /**
     * Filter which Repositories to update
     */
    where?: RepositoryWhereInput
  }

  /**
   * Repository upsert
   */
  export type RepositoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Repository to update in case it exists.
     */
    where: RepositoryWhereUniqueInput
    /**
     * In case the Repository found by the `where` argument doesn't exist, create a new Repository with this data.
     */
    create: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
    /**
     * In case the Repository was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
  }

  /**
   * Repository delete
   */
  export type RepositoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter which Repository to delete.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository deleteMany
   */
  export type RepositoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repositories to delete
     */
    where?: RepositoryWhereInput
  }

  /**
   * Repository.commits
   */
  export type Repository$commitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    where?: CommitWhereInput
    orderBy?: CommitOrderByWithRelationInput | CommitOrderByWithRelationInput[]
    cursor?: CommitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommitScalarFieldEnum | CommitScalarFieldEnum[]
  }

  /**
   * Repository.pullRequests
   */
  export type Repository$pullRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    where?: PullRequestWhereInput
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    cursor?: PullRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * Repository.embeddings
   */
  export type Repository$embeddingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    where?: EmbeddingWhereInput
    orderBy?: EmbeddingOrderByWithRelationInput | EmbeddingOrderByWithRelationInput[]
    cursor?: EmbeddingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmbeddingScalarFieldEnum | EmbeddingScalarFieldEnum[]
  }

  /**
   * Repository without action
   */
  export type RepositoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
  }


  /**
   * Model Developer
   */

  export type AggregateDeveloper = {
    _count: DeveloperCountAggregateOutputType | null
    _avg: DeveloperAvgAggregateOutputType | null
    _sum: DeveloperSumAggregateOutputType | null
    _min: DeveloperMinAggregateOutputType | null
    _max: DeveloperMaxAggregateOutputType | null
  }

  export type DeveloperAvgAggregateOutputType = {
    githubId: number | null
    currentLoad: number | null
    burnoutSignal: number | null
  }

  export type DeveloperSumAggregateOutputType = {
    githubId: number | null
    currentLoad: number | null
    burnoutSignal: number | null
  }

  export type DeveloperMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    githubLogin: string | null
    githubId: number | null
    name: string | null
    avatarUrl: string | null
    discordUserId: string | null
    currentLoad: number | null
    burnoutSignal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeveloperMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    githubLogin: string | null
    githubId: number | null
    name: string | null
    avatarUrl: string | null
    discordUserId: string | null
    currentLoad: number | null
    burnoutSignal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeveloperCountAggregateOutputType = {
    id: number
    orgId: number
    githubLogin: number
    githubId: number
    name: number
    avatarUrl: number
    discordUserId: number
    strengths: number
    currentLoad: number
    burnoutSignal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeveloperAvgAggregateInputType = {
    githubId?: true
    currentLoad?: true
    burnoutSignal?: true
  }

  export type DeveloperSumAggregateInputType = {
    githubId?: true
    currentLoad?: true
    burnoutSignal?: true
  }

  export type DeveloperMinAggregateInputType = {
    id?: true
    orgId?: true
    githubLogin?: true
    githubId?: true
    name?: true
    avatarUrl?: true
    discordUserId?: true
    currentLoad?: true
    burnoutSignal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeveloperMaxAggregateInputType = {
    id?: true
    orgId?: true
    githubLogin?: true
    githubId?: true
    name?: true
    avatarUrl?: true
    discordUserId?: true
    currentLoad?: true
    burnoutSignal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeveloperCountAggregateInputType = {
    id?: true
    orgId?: true
    githubLogin?: true
    githubId?: true
    name?: true
    avatarUrl?: true
    discordUserId?: true
    strengths?: true
    currentLoad?: true
    burnoutSignal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeveloperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Developer to aggregate.
     */
    where?: DeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DeveloperOrderByWithRelationInput | DeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Developers
    **/
    _count?: true | DeveloperCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeveloperAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeveloperSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeveloperMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeveloperMaxAggregateInputType
  }

  export type GetDeveloperAggregateType<T extends DeveloperAggregateArgs> = {
        [P in keyof T & keyof AggregateDeveloper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeveloper[P]>
      : GetScalarType<T[P], AggregateDeveloper[P]>
  }




  export type DeveloperGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeveloperWhereInput
    orderBy?: DeveloperOrderByWithAggregationInput | DeveloperOrderByWithAggregationInput[]
    by: DeveloperScalarFieldEnum[] | DeveloperScalarFieldEnum
    having?: DeveloperScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeveloperCountAggregateInputType | true
    _avg?: DeveloperAvgAggregateInputType
    _sum?: DeveloperSumAggregateInputType
    _min?: DeveloperMinAggregateInputType
    _max?: DeveloperMaxAggregateInputType
  }

  export type DeveloperGroupByOutputType = {
    id: string
    orgId: string
    githubLogin: string
    githubId: number
    name: string | null
    avatarUrl: string | null
    discordUserId: string | null
    strengths: string[]
    currentLoad: number
    burnoutSignal: number
    createdAt: Date
    updatedAt: Date
    _count: DeveloperCountAggregateOutputType | null
    _avg: DeveloperAvgAggregateOutputType | null
    _sum: DeveloperSumAggregateOutputType | null
    _min: DeveloperMinAggregateOutputType | null
    _max: DeveloperMaxAggregateOutputType | null
  }

  type GetDeveloperGroupByPayload<T extends DeveloperGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeveloperGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeveloperGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeveloperGroupByOutputType[P]>
            : GetScalarType<T[P], DeveloperGroupByOutputType[P]>
        }
      >
    >


  export type DeveloperSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    githubLogin?: boolean
    githubId?: boolean
    name?: boolean
    avatarUrl?: boolean
    discordUserId?: boolean
    strengths?: boolean
    currentLoad?: boolean
    burnoutSignal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    commits?: boolean | Developer$commitsArgs<ExtArgs>
    pullRequests?: boolean | Developer$pullRequestsArgs<ExtArgs>
    taskAssignments?: boolean | Developer$taskAssignmentsArgs<ExtArgs>
    _count?: boolean | DeveloperCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["developer"]>

  export type DeveloperSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    githubLogin?: boolean
    githubId?: boolean
    name?: boolean
    avatarUrl?: boolean
    discordUserId?: boolean
    strengths?: boolean
    currentLoad?: boolean
    burnoutSignal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["developer"]>

  export type DeveloperSelectScalar = {
    id?: boolean
    orgId?: boolean
    githubLogin?: boolean
    githubId?: boolean
    name?: boolean
    avatarUrl?: boolean
    discordUserId?: boolean
    strengths?: boolean
    currentLoad?: boolean
    burnoutSignal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeveloperInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    commits?: boolean | Developer$commitsArgs<ExtArgs>
    pullRequests?: boolean | Developer$pullRequestsArgs<ExtArgs>
    taskAssignments?: boolean | Developer$taskAssignmentsArgs<ExtArgs>
    _count?: boolean | DeveloperCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeveloperIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $DeveloperPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Developer"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
      commits: Prisma.$CommitPayload<ExtArgs>[]
      pullRequests: Prisma.$PullRequestPayload<ExtArgs>[]
      taskAssignments: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      githubLogin: string
      githubId: number
      name: string | null
      avatarUrl: string | null
      discordUserId: string | null
      strengths: string[]
      currentLoad: number
      burnoutSignal: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["developer"]>
    composites: {}
  }

  type DeveloperGetPayload<S extends boolean | null | undefined | DeveloperDefaultArgs> = $Result.GetResult<Prisma.$DeveloperPayload, S>

  type DeveloperCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeveloperFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeveloperCountAggregateInputType | true
    }

  export interface DeveloperDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Developer'], meta: { name: 'Developer' } }
    /**
     * Find zero or one Developer that matches the filter.
     * @param {DeveloperFindUniqueArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeveloperFindUniqueArgs>(args: SelectSubset<T, DeveloperFindUniqueArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Developer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeveloperFindUniqueOrThrowArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeveloperFindUniqueOrThrowArgs>(args: SelectSubset<T, DeveloperFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Developer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperFindFirstArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeveloperFindFirstArgs>(args?: SelectSubset<T, DeveloperFindFirstArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Developer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperFindFirstOrThrowArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeveloperFindFirstOrThrowArgs>(args?: SelectSubset<T, DeveloperFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Developers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Developers
     * const developers = await prisma.developer.findMany()
     * 
     * // Get first 10 Developers
     * const developers = await prisma.developer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const developerWithIdOnly = await prisma.developer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeveloperFindManyArgs>(args?: SelectSubset<T, DeveloperFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Developer.
     * @param {DeveloperCreateArgs} args - Arguments to create a Developer.
     * @example
     * // Create one Developer
     * const Developer = await prisma.developer.create({
     *   data: {
     *     // ... data to create a Developer
     *   }
     * })
     * 
     */
    create<T extends DeveloperCreateArgs>(args: SelectSubset<T, DeveloperCreateArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Developers.
     * @param {DeveloperCreateManyArgs} args - Arguments to create many Developers.
     * @example
     * // Create many Developers
     * const developer = await prisma.developer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeveloperCreateManyArgs>(args?: SelectSubset<T, DeveloperCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Developers and returns the data saved in the database.
     * @param {DeveloperCreateManyAndReturnArgs} args - Arguments to create many Developers.
     * @example
     * // Create many Developers
     * const developer = await prisma.developer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Developers and only return the `id`
     * const developerWithIdOnly = await prisma.developer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeveloperCreateManyAndReturnArgs>(args?: SelectSubset<T, DeveloperCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Developer.
     * @param {DeveloperDeleteArgs} args - Arguments to delete one Developer.
     * @example
     * // Delete one Developer
     * const Developer = await prisma.developer.delete({
     *   where: {
     *     // ... filter to delete one Developer
     *   }
     * })
     * 
     */
    delete<T extends DeveloperDeleteArgs>(args: SelectSubset<T, DeveloperDeleteArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Developer.
     * @param {DeveloperUpdateArgs} args - Arguments to update one Developer.
     * @example
     * // Update one Developer
     * const developer = await prisma.developer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeveloperUpdateArgs>(args: SelectSubset<T, DeveloperUpdateArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Developers.
     * @param {DeveloperDeleteManyArgs} args - Arguments to filter Developers to delete.
     * @example
     * // Delete a few Developers
     * const { count } = await prisma.developer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeveloperDeleteManyArgs>(args?: SelectSubset<T, DeveloperDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Developers
     * const developer = await prisma.developer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeveloperUpdateManyArgs>(args: SelectSubset<T, DeveloperUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Developer.
     * @param {DeveloperUpsertArgs} args - Arguments to update or create a Developer.
     * @example
     * // Update or create a Developer
     * const developer = await prisma.developer.upsert({
     *   create: {
     *     // ... data to create a Developer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Developer we want to update
     *   }
     * })
     */
    upsert<T extends DeveloperUpsertArgs>(args: SelectSubset<T, DeveloperUpsertArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperCountArgs} args - Arguments to filter Developers to count.
     * @example
     * // Count the number of Developers
     * const count = await prisma.developer.count({
     *   where: {
     *     // ... the filter for the Developers we want to count
     *   }
     * })
    **/
    count<T extends DeveloperCountArgs>(
      args?: Subset<T, DeveloperCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeveloperCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Developer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeveloperAggregateArgs>(args: Subset<T, DeveloperAggregateArgs>): Prisma.PrismaPromise<GetDeveloperAggregateType<T>>

    /**
     * Group by Developer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeveloperGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeveloperGroupByArgs['orderBy'] }
        : { orderBy?: DeveloperGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeveloperGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeveloperGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Developer model
   */
  readonly fields: DeveloperFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Developer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeveloperClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    commits<T extends Developer$commitsArgs<ExtArgs> = {}>(args?: Subset<T, Developer$commitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "findMany"> | Null>
    pullRequests<T extends Developer$pullRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Developer$pullRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findMany"> | Null>
    taskAssignments<T extends Developer$taskAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Developer$taskAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Developer model
   */ 
  interface DeveloperFieldRefs {
    readonly id: FieldRef<"Developer", 'String'>
    readonly orgId: FieldRef<"Developer", 'String'>
    readonly githubLogin: FieldRef<"Developer", 'String'>
    readonly githubId: FieldRef<"Developer", 'Int'>
    readonly name: FieldRef<"Developer", 'String'>
    readonly avatarUrl: FieldRef<"Developer", 'String'>
    readonly discordUserId: FieldRef<"Developer", 'String'>
    readonly strengths: FieldRef<"Developer", 'String[]'>
    readonly currentLoad: FieldRef<"Developer", 'Int'>
    readonly burnoutSignal: FieldRef<"Developer", 'Float'>
    readonly createdAt: FieldRef<"Developer", 'DateTime'>
    readonly updatedAt: FieldRef<"Developer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Developer findUnique
   */
  export type DeveloperFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developer to fetch.
     */
    where: DeveloperWhereUniqueInput
  }

  /**
   * Developer findUniqueOrThrow
   */
  export type DeveloperFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developer to fetch.
     */
    where: DeveloperWhereUniqueInput
  }

  /**
   * Developer findFirst
   */
  export type DeveloperFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developer to fetch.
     */
    where?: DeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DeveloperOrderByWithRelationInput | DeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Developers.
     */
    cursor?: DeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Developers.
     */
    distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[]
  }

  /**
   * Developer findFirstOrThrow
   */
  export type DeveloperFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developer to fetch.
     */
    where?: DeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DeveloperOrderByWithRelationInput | DeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Developers.
     */
    cursor?: DeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Developers.
     */
    distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[]
  }

  /**
   * Developer findMany
   */
  export type DeveloperFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developers to fetch.
     */
    where?: DeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DeveloperOrderByWithRelationInput | DeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Developers.
     */
    cursor?: DeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[]
  }

  /**
   * Developer create
   */
  export type DeveloperCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * The data needed to create a Developer.
     */
    data: XOR<DeveloperCreateInput, DeveloperUncheckedCreateInput>
  }

  /**
   * Developer createMany
   */
  export type DeveloperCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Developers.
     */
    data: DeveloperCreateManyInput | DeveloperCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Developer createManyAndReturn
   */
  export type DeveloperCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Developers.
     */
    data: DeveloperCreateManyInput | DeveloperCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Developer update
   */
  export type DeveloperUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * The data needed to update a Developer.
     */
    data: XOR<DeveloperUpdateInput, DeveloperUncheckedUpdateInput>
    /**
     * Choose, which Developer to update.
     */
    where: DeveloperWhereUniqueInput
  }

  /**
   * Developer updateMany
   */
  export type DeveloperUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Developers.
     */
    data: XOR<DeveloperUpdateManyMutationInput, DeveloperUncheckedUpdateManyInput>
    /**
     * Filter which Developers to update
     */
    where?: DeveloperWhereInput
  }

  /**
   * Developer upsert
   */
  export type DeveloperUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * The filter to search for the Developer to update in case it exists.
     */
    where: DeveloperWhereUniqueInput
    /**
     * In case the Developer found by the `where` argument doesn't exist, create a new Developer with this data.
     */
    create: XOR<DeveloperCreateInput, DeveloperUncheckedCreateInput>
    /**
     * In case the Developer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeveloperUpdateInput, DeveloperUncheckedUpdateInput>
  }

  /**
   * Developer delete
   */
  export type DeveloperDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter which Developer to delete.
     */
    where: DeveloperWhereUniqueInput
  }

  /**
   * Developer deleteMany
   */
  export type DeveloperDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Developers to delete
     */
    where?: DeveloperWhereInput
  }

  /**
   * Developer.commits
   */
  export type Developer$commitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    where?: CommitWhereInput
    orderBy?: CommitOrderByWithRelationInput | CommitOrderByWithRelationInput[]
    cursor?: CommitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommitScalarFieldEnum | CommitScalarFieldEnum[]
  }

  /**
   * Developer.pullRequests
   */
  export type Developer$pullRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    where?: PullRequestWhereInput
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    cursor?: PullRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * Developer.taskAssignments
   */
  export type Developer$taskAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Developer without action
   */
  export type DeveloperDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
  }


  /**
   * Model Commit
   */

  export type AggregateCommit = {
    _count: CommitCountAggregateOutputType | null
    _avg: CommitAvgAggregateOutputType | null
    _sum: CommitSumAggregateOutputType | null
    _min: CommitMinAggregateOutputType | null
    _max: CommitMaxAggregateOutputType | null
  }

  export type CommitAvgAggregateOutputType = {
    additions: number | null
    deletions: number | null
    filesChanged: number | null
  }

  export type CommitSumAggregateOutputType = {
    additions: number | null
    deletions: number | null
    filesChanged: number | null
  }

  export type CommitMinAggregateOutputType = {
    id: string | null
    repoId: string | null
    developerId: string | null
    sha: string | null
    message: string | null
    additions: number | null
    deletions: number | null
    filesChanged: number | null
    committedAt: Date | null
  }

  export type CommitMaxAggregateOutputType = {
    id: string | null
    repoId: string | null
    developerId: string | null
    sha: string | null
    message: string | null
    additions: number | null
    deletions: number | null
    filesChanged: number | null
    committedAt: Date | null
  }

  export type CommitCountAggregateOutputType = {
    id: number
    repoId: number
    developerId: number
    sha: number
    message: number
    additions: number
    deletions: number
    filesChanged: number
    committedAt: number
    _all: number
  }


  export type CommitAvgAggregateInputType = {
    additions?: true
    deletions?: true
    filesChanged?: true
  }

  export type CommitSumAggregateInputType = {
    additions?: true
    deletions?: true
    filesChanged?: true
  }

  export type CommitMinAggregateInputType = {
    id?: true
    repoId?: true
    developerId?: true
    sha?: true
    message?: true
    additions?: true
    deletions?: true
    filesChanged?: true
    committedAt?: true
  }

  export type CommitMaxAggregateInputType = {
    id?: true
    repoId?: true
    developerId?: true
    sha?: true
    message?: true
    additions?: true
    deletions?: true
    filesChanged?: true
    committedAt?: true
  }

  export type CommitCountAggregateInputType = {
    id?: true
    repoId?: true
    developerId?: true
    sha?: true
    message?: true
    additions?: true
    deletions?: true
    filesChanged?: true
    committedAt?: true
    _all?: true
  }

  export type CommitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commit to aggregate.
     */
    where?: CommitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commits to fetch.
     */
    orderBy?: CommitOrderByWithRelationInput | CommitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commits
    **/
    _count?: true | CommitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommitMaxAggregateInputType
  }

  export type GetCommitAggregateType<T extends CommitAggregateArgs> = {
        [P in keyof T & keyof AggregateCommit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommit[P]>
      : GetScalarType<T[P], AggregateCommit[P]>
  }




  export type CommitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitWhereInput
    orderBy?: CommitOrderByWithAggregationInput | CommitOrderByWithAggregationInput[]
    by: CommitScalarFieldEnum[] | CommitScalarFieldEnum
    having?: CommitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommitCountAggregateInputType | true
    _avg?: CommitAvgAggregateInputType
    _sum?: CommitSumAggregateInputType
    _min?: CommitMinAggregateInputType
    _max?: CommitMaxAggregateInputType
  }

  export type CommitGroupByOutputType = {
    id: string
    repoId: string
    developerId: string
    sha: string
    message: string
    additions: number
    deletions: number
    filesChanged: number
    committedAt: Date
    _count: CommitCountAggregateOutputType | null
    _avg: CommitAvgAggregateOutputType | null
    _sum: CommitSumAggregateOutputType | null
    _min: CommitMinAggregateOutputType | null
    _max: CommitMaxAggregateOutputType | null
  }

  type GetCommitGroupByPayload<T extends CommitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommitGroupByOutputType[P]>
            : GetScalarType<T[P], CommitGroupByOutputType[P]>
        }
      >
    >


  export type CommitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repoId?: boolean
    developerId?: boolean
    sha?: boolean
    message?: boolean
    additions?: boolean
    deletions?: boolean
    filesChanged?: boolean
    committedAt?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commit"]>

  export type CommitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repoId?: boolean
    developerId?: boolean
    sha?: boolean
    message?: boolean
    additions?: boolean
    deletions?: boolean
    filesChanged?: boolean
    committedAt?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commit"]>

  export type CommitSelectScalar = {
    id?: boolean
    repoId?: boolean
    developerId?: boolean
    sha?: boolean
    message?: boolean
    additions?: boolean
    deletions?: boolean
    filesChanged?: boolean
    committedAt?: boolean
  }

  export type CommitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
  }
  export type CommitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
  }

  export type $CommitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commit"
    objects: {
      repo: Prisma.$RepositoryPayload<ExtArgs>
      developer: Prisma.$DeveloperPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      repoId: string
      developerId: string
      sha: string
      message: string
      additions: number
      deletions: number
      filesChanged: number
      committedAt: Date
    }, ExtArgs["result"]["commit"]>
    composites: {}
  }

  type CommitGetPayload<S extends boolean | null | undefined | CommitDefaultArgs> = $Result.GetResult<Prisma.$CommitPayload, S>

  type CommitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommitCountAggregateInputType | true
    }

  export interface CommitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commit'], meta: { name: 'Commit' } }
    /**
     * Find zero or one Commit that matches the filter.
     * @param {CommitFindUniqueArgs} args - Arguments to find a Commit
     * @example
     * // Get one Commit
     * const commit = await prisma.commit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommitFindUniqueArgs>(args: SelectSubset<T, CommitFindUniqueArgs<ExtArgs>>): Prisma__CommitClient<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Commit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CommitFindUniqueOrThrowArgs} args - Arguments to find a Commit
     * @example
     * // Get one Commit
     * const commit = await prisma.commit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommitFindUniqueOrThrowArgs>(args: SelectSubset<T, CommitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommitClient<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Commit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitFindFirstArgs} args - Arguments to find a Commit
     * @example
     * // Get one Commit
     * const commit = await prisma.commit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommitFindFirstArgs>(args?: SelectSubset<T, CommitFindFirstArgs<ExtArgs>>): Prisma__CommitClient<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Commit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitFindFirstOrThrowArgs} args - Arguments to find a Commit
     * @example
     * // Get one Commit
     * const commit = await prisma.commit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommitFindFirstOrThrowArgs>(args?: SelectSubset<T, CommitFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommitClient<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Commits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commits
     * const commits = await prisma.commit.findMany()
     * 
     * // Get first 10 Commits
     * const commits = await prisma.commit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commitWithIdOnly = await prisma.commit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommitFindManyArgs>(args?: SelectSubset<T, CommitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Commit.
     * @param {CommitCreateArgs} args - Arguments to create a Commit.
     * @example
     * // Create one Commit
     * const Commit = await prisma.commit.create({
     *   data: {
     *     // ... data to create a Commit
     *   }
     * })
     * 
     */
    create<T extends CommitCreateArgs>(args: SelectSubset<T, CommitCreateArgs<ExtArgs>>): Prisma__CommitClient<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Commits.
     * @param {CommitCreateManyArgs} args - Arguments to create many Commits.
     * @example
     * // Create many Commits
     * const commit = await prisma.commit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommitCreateManyArgs>(args?: SelectSubset<T, CommitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commits and returns the data saved in the database.
     * @param {CommitCreateManyAndReturnArgs} args - Arguments to create many Commits.
     * @example
     * // Create many Commits
     * const commit = await prisma.commit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commits and only return the `id`
     * const commitWithIdOnly = await prisma.commit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommitCreateManyAndReturnArgs>(args?: SelectSubset<T, CommitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Commit.
     * @param {CommitDeleteArgs} args - Arguments to delete one Commit.
     * @example
     * // Delete one Commit
     * const Commit = await prisma.commit.delete({
     *   where: {
     *     // ... filter to delete one Commit
     *   }
     * })
     * 
     */
    delete<T extends CommitDeleteArgs>(args: SelectSubset<T, CommitDeleteArgs<ExtArgs>>): Prisma__CommitClient<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Commit.
     * @param {CommitUpdateArgs} args - Arguments to update one Commit.
     * @example
     * // Update one Commit
     * const commit = await prisma.commit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommitUpdateArgs>(args: SelectSubset<T, CommitUpdateArgs<ExtArgs>>): Prisma__CommitClient<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Commits.
     * @param {CommitDeleteManyArgs} args - Arguments to filter Commits to delete.
     * @example
     * // Delete a few Commits
     * const { count } = await prisma.commit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommitDeleteManyArgs>(args?: SelectSubset<T, CommitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commits
     * const commit = await prisma.commit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommitUpdateManyArgs>(args: SelectSubset<T, CommitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Commit.
     * @param {CommitUpsertArgs} args - Arguments to update or create a Commit.
     * @example
     * // Update or create a Commit
     * const commit = await prisma.commit.upsert({
     *   create: {
     *     // ... data to create a Commit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commit we want to update
     *   }
     * })
     */
    upsert<T extends CommitUpsertArgs>(args: SelectSubset<T, CommitUpsertArgs<ExtArgs>>): Prisma__CommitClient<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Commits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitCountArgs} args - Arguments to filter Commits to count.
     * @example
     * // Count the number of Commits
     * const count = await prisma.commit.count({
     *   where: {
     *     // ... the filter for the Commits we want to count
     *   }
     * })
    **/
    count<T extends CommitCountArgs>(
      args?: Subset<T, CommitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommitAggregateArgs>(args: Subset<T, CommitAggregateArgs>): Prisma.PrismaPromise<GetCommitAggregateType<T>>

    /**
     * Group by Commit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommitGroupByArgs['orderBy'] }
        : { orderBy?: CommitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commit model
   */
  readonly fields: CommitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repo<T extends RepositoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepositoryDefaultArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    developer<T extends DeveloperDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeveloperDefaultArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Commit model
   */ 
  interface CommitFieldRefs {
    readonly id: FieldRef<"Commit", 'String'>
    readonly repoId: FieldRef<"Commit", 'String'>
    readonly developerId: FieldRef<"Commit", 'String'>
    readonly sha: FieldRef<"Commit", 'String'>
    readonly message: FieldRef<"Commit", 'String'>
    readonly additions: FieldRef<"Commit", 'Int'>
    readonly deletions: FieldRef<"Commit", 'Int'>
    readonly filesChanged: FieldRef<"Commit", 'Int'>
    readonly committedAt: FieldRef<"Commit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Commit findUnique
   */
  export type CommitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * Filter, which Commit to fetch.
     */
    where: CommitWhereUniqueInput
  }

  /**
   * Commit findUniqueOrThrow
   */
  export type CommitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * Filter, which Commit to fetch.
     */
    where: CommitWhereUniqueInput
  }

  /**
   * Commit findFirst
   */
  export type CommitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * Filter, which Commit to fetch.
     */
    where?: CommitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commits to fetch.
     */
    orderBy?: CommitOrderByWithRelationInput | CommitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commits.
     */
    cursor?: CommitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commits.
     */
    distinct?: CommitScalarFieldEnum | CommitScalarFieldEnum[]
  }

  /**
   * Commit findFirstOrThrow
   */
  export type CommitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * Filter, which Commit to fetch.
     */
    where?: CommitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commits to fetch.
     */
    orderBy?: CommitOrderByWithRelationInput | CommitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commits.
     */
    cursor?: CommitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commits.
     */
    distinct?: CommitScalarFieldEnum | CommitScalarFieldEnum[]
  }

  /**
   * Commit findMany
   */
  export type CommitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * Filter, which Commits to fetch.
     */
    where?: CommitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commits to fetch.
     */
    orderBy?: CommitOrderByWithRelationInput | CommitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commits.
     */
    cursor?: CommitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commits.
     */
    skip?: number
    distinct?: CommitScalarFieldEnum | CommitScalarFieldEnum[]
  }

  /**
   * Commit create
   */
  export type CommitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * The data needed to create a Commit.
     */
    data: XOR<CommitCreateInput, CommitUncheckedCreateInput>
  }

  /**
   * Commit createMany
   */
  export type CommitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commits.
     */
    data: CommitCreateManyInput | CommitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commit createManyAndReturn
   */
  export type CommitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Commits.
     */
    data: CommitCreateManyInput | CommitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commit update
   */
  export type CommitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * The data needed to update a Commit.
     */
    data: XOR<CommitUpdateInput, CommitUncheckedUpdateInput>
    /**
     * Choose, which Commit to update.
     */
    where: CommitWhereUniqueInput
  }

  /**
   * Commit updateMany
   */
  export type CommitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commits.
     */
    data: XOR<CommitUpdateManyMutationInput, CommitUncheckedUpdateManyInput>
    /**
     * Filter which Commits to update
     */
    where?: CommitWhereInput
  }

  /**
   * Commit upsert
   */
  export type CommitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * The filter to search for the Commit to update in case it exists.
     */
    where: CommitWhereUniqueInput
    /**
     * In case the Commit found by the `where` argument doesn't exist, create a new Commit with this data.
     */
    create: XOR<CommitCreateInput, CommitUncheckedCreateInput>
    /**
     * In case the Commit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommitUpdateInput, CommitUncheckedUpdateInput>
  }

  /**
   * Commit delete
   */
  export type CommitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * Filter which Commit to delete.
     */
    where: CommitWhereUniqueInput
  }

  /**
   * Commit deleteMany
   */
  export type CommitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commits to delete
     */
    where?: CommitWhereInput
  }

  /**
   * Commit without action
   */
  export type CommitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
  }


  /**
   * Model PullRequest
   */

  export type AggregatePullRequest = {
    _count: PullRequestCountAggregateOutputType | null
    _avg: PullRequestAvgAggregateOutputType | null
    _sum: PullRequestSumAggregateOutputType | null
    _min: PullRequestMinAggregateOutputType | null
    _max: PullRequestMaxAggregateOutputType | null
  }

  export type PullRequestAvgAggregateOutputType = {
    githubId: number | null
    number: number | null
    reviewCycles: number | null
    additions: number | null
    deletions: number | null
  }

  export type PullRequestSumAggregateOutputType = {
    githubId: number | null
    number: number | null
    reviewCycles: number | null
    additions: number | null
    deletions: number | null
  }

  export type PullRequestMinAggregateOutputType = {
    id: string | null
    repoId: string | null
    authorId: string | null
    githubId: number | null
    number: number | null
    title: string | null
    body: string | null
    state: $Enums.PRState | null
    reviewCycles: number | null
    additions: number | null
    deletions: number | null
    mergedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PullRequestMaxAggregateOutputType = {
    id: string | null
    repoId: string | null
    authorId: string | null
    githubId: number | null
    number: number | null
    title: string | null
    body: string | null
    state: $Enums.PRState | null
    reviewCycles: number | null
    additions: number | null
    deletions: number | null
    mergedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PullRequestCountAggregateOutputType = {
    id: number
    repoId: number
    authorId: number
    githubId: number
    number: number
    title: number
    body: number
    state: number
    reviewCycles: number
    additions: number
    deletions: number
    mergedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PullRequestAvgAggregateInputType = {
    githubId?: true
    number?: true
    reviewCycles?: true
    additions?: true
    deletions?: true
  }

  export type PullRequestSumAggregateInputType = {
    githubId?: true
    number?: true
    reviewCycles?: true
    additions?: true
    deletions?: true
  }

  export type PullRequestMinAggregateInputType = {
    id?: true
    repoId?: true
    authorId?: true
    githubId?: true
    number?: true
    title?: true
    body?: true
    state?: true
    reviewCycles?: true
    additions?: true
    deletions?: true
    mergedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PullRequestMaxAggregateInputType = {
    id?: true
    repoId?: true
    authorId?: true
    githubId?: true
    number?: true
    title?: true
    body?: true
    state?: true
    reviewCycles?: true
    additions?: true
    deletions?: true
    mergedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PullRequestCountAggregateInputType = {
    id?: true
    repoId?: true
    authorId?: true
    githubId?: true
    number?: true
    title?: true
    body?: true
    state?: true
    reviewCycles?: true
    additions?: true
    deletions?: true
    mergedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PullRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PullRequest to aggregate.
     */
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     */
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PullRequests
    **/
    _count?: true | PullRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PullRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PullRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PullRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PullRequestMaxAggregateInputType
  }

  export type GetPullRequestAggregateType<T extends PullRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePullRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePullRequest[P]>
      : GetScalarType<T[P], AggregatePullRequest[P]>
  }




  export type PullRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PullRequestWhereInput
    orderBy?: PullRequestOrderByWithAggregationInput | PullRequestOrderByWithAggregationInput[]
    by: PullRequestScalarFieldEnum[] | PullRequestScalarFieldEnum
    having?: PullRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PullRequestCountAggregateInputType | true
    _avg?: PullRequestAvgAggregateInputType
    _sum?: PullRequestSumAggregateInputType
    _min?: PullRequestMinAggregateInputType
    _max?: PullRequestMaxAggregateInputType
  }

  export type PullRequestGroupByOutputType = {
    id: string
    repoId: string
    authorId: string
    githubId: number
    number: number
    title: string
    body: string | null
    state: $Enums.PRState
    reviewCycles: number
    additions: number
    deletions: number
    mergedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PullRequestCountAggregateOutputType | null
    _avg: PullRequestAvgAggregateOutputType | null
    _sum: PullRequestSumAggregateOutputType | null
    _min: PullRequestMinAggregateOutputType | null
    _max: PullRequestMaxAggregateOutputType | null
  }

  type GetPullRequestGroupByPayload<T extends PullRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PullRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PullRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PullRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PullRequestGroupByOutputType[P]>
        }
      >
    >


  export type PullRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repoId?: boolean
    authorId?: boolean
    githubId?: boolean
    number?: boolean
    title?: boolean
    body?: boolean
    state?: boolean
    reviewCycles?: boolean
    additions?: boolean
    deletions?: boolean
    mergedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    author?: boolean | DeveloperDefaultArgs<ExtArgs>
    feedbackSent?: boolean | PullRequest$feedbackSentArgs<ExtArgs>
    _count?: boolean | PullRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pullRequest"]>

  export type PullRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repoId?: boolean
    authorId?: boolean
    githubId?: boolean
    number?: boolean
    title?: boolean
    body?: boolean
    state?: boolean
    reviewCycles?: boolean
    additions?: boolean
    deletions?: boolean
    mergedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    author?: boolean | DeveloperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pullRequest"]>

  export type PullRequestSelectScalar = {
    id?: boolean
    repoId?: boolean
    authorId?: boolean
    githubId?: boolean
    number?: boolean
    title?: boolean
    body?: boolean
    state?: boolean
    reviewCycles?: boolean
    additions?: boolean
    deletions?: boolean
    mergedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PullRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    author?: boolean | DeveloperDefaultArgs<ExtArgs>
    feedbackSent?: boolean | PullRequest$feedbackSentArgs<ExtArgs>
    _count?: boolean | PullRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PullRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    author?: boolean | DeveloperDefaultArgs<ExtArgs>
  }

  export type $PullRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PullRequest"
    objects: {
      repo: Prisma.$RepositoryPayload<ExtArgs>
      author: Prisma.$DeveloperPayload<ExtArgs>
      feedbackSent: Prisma.$PRFeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      repoId: string
      authorId: string
      githubId: number
      number: number
      title: string
      body: string | null
      state: $Enums.PRState
      reviewCycles: number
      additions: number
      deletions: number
      mergedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pullRequest"]>
    composites: {}
  }

  type PullRequestGetPayload<S extends boolean | null | undefined | PullRequestDefaultArgs> = $Result.GetResult<Prisma.$PullRequestPayload, S>

  type PullRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PullRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PullRequestCountAggregateInputType | true
    }

  export interface PullRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PullRequest'], meta: { name: 'PullRequest' } }
    /**
     * Find zero or one PullRequest that matches the filter.
     * @param {PullRequestFindUniqueArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PullRequestFindUniqueArgs>(args: SelectSubset<T, PullRequestFindUniqueArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PullRequest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PullRequestFindUniqueOrThrowArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PullRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, PullRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PullRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestFindFirstArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PullRequestFindFirstArgs>(args?: SelectSubset<T, PullRequestFindFirstArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PullRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestFindFirstOrThrowArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PullRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, PullRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PullRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PullRequests
     * const pullRequests = await prisma.pullRequest.findMany()
     * 
     * // Get first 10 PullRequests
     * const pullRequests = await prisma.pullRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pullRequestWithIdOnly = await prisma.pullRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PullRequestFindManyArgs>(args?: SelectSubset<T, PullRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PullRequest.
     * @param {PullRequestCreateArgs} args - Arguments to create a PullRequest.
     * @example
     * // Create one PullRequest
     * const PullRequest = await prisma.pullRequest.create({
     *   data: {
     *     // ... data to create a PullRequest
     *   }
     * })
     * 
     */
    create<T extends PullRequestCreateArgs>(args: SelectSubset<T, PullRequestCreateArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PullRequests.
     * @param {PullRequestCreateManyArgs} args - Arguments to create many PullRequests.
     * @example
     * // Create many PullRequests
     * const pullRequest = await prisma.pullRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PullRequestCreateManyArgs>(args?: SelectSubset<T, PullRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PullRequests and returns the data saved in the database.
     * @param {PullRequestCreateManyAndReturnArgs} args - Arguments to create many PullRequests.
     * @example
     * // Create many PullRequests
     * const pullRequest = await prisma.pullRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PullRequests and only return the `id`
     * const pullRequestWithIdOnly = await prisma.pullRequest.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PullRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, PullRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PullRequest.
     * @param {PullRequestDeleteArgs} args - Arguments to delete one PullRequest.
     * @example
     * // Delete one PullRequest
     * const PullRequest = await prisma.pullRequest.delete({
     *   where: {
     *     // ... filter to delete one PullRequest
     *   }
     * })
     * 
     */
    delete<T extends PullRequestDeleteArgs>(args: SelectSubset<T, PullRequestDeleteArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PullRequest.
     * @param {PullRequestUpdateArgs} args - Arguments to update one PullRequest.
     * @example
     * // Update one PullRequest
     * const pullRequest = await prisma.pullRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PullRequestUpdateArgs>(args: SelectSubset<T, PullRequestUpdateArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PullRequests.
     * @param {PullRequestDeleteManyArgs} args - Arguments to filter PullRequests to delete.
     * @example
     * // Delete a few PullRequests
     * const { count } = await prisma.pullRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PullRequestDeleteManyArgs>(args?: SelectSubset<T, PullRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PullRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PullRequests
     * const pullRequest = await prisma.pullRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PullRequestUpdateManyArgs>(args: SelectSubset<T, PullRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PullRequest.
     * @param {PullRequestUpsertArgs} args - Arguments to update or create a PullRequest.
     * @example
     * // Update or create a PullRequest
     * const pullRequest = await prisma.pullRequest.upsert({
     *   create: {
     *     // ... data to create a PullRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PullRequest we want to update
     *   }
     * })
     */
    upsert<T extends PullRequestUpsertArgs>(args: SelectSubset<T, PullRequestUpsertArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PullRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestCountArgs} args - Arguments to filter PullRequests to count.
     * @example
     * // Count the number of PullRequests
     * const count = await prisma.pullRequest.count({
     *   where: {
     *     // ... the filter for the PullRequests we want to count
     *   }
     * })
    **/
    count<T extends PullRequestCountArgs>(
      args?: Subset<T, PullRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PullRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PullRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PullRequestAggregateArgs>(args: Subset<T, PullRequestAggregateArgs>): Prisma.PrismaPromise<GetPullRequestAggregateType<T>>

    /**
     * Group by PullRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PullRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PullRequestGroupByArgs['orderBy'] }
        : { orderBy?: PullRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PullRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPullRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PullRequest model
   */
  readonly fields: PullRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PullRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PullRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repo<T extends RepositoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepositoryDefaultArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    author<T extends DeveloperDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeveloperDefaultArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    feedbackSent<T extends PullRequest$feedbackSentArgs<ExtArgs> = {}>(args?: Subset<T, PullRequest$feedbackSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRFeedbackPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PullRequest model
   */ 
  interface PullRequestFieldRefs {
    readonly id: FieldRef<"PullRequest", 'String'>
    readonly repoId: FieldRef<"PullRequest", 'String'>
    readonly authorId: FieldRef<"PullRequest", 'String'>
    readonly githubId: FieldRef<"PullRequest", 'Int'>
    readonly number: FieldRef<"PullRequest", 'Int'>
    readonly title: FieldRef<"PullRequest", 'String'>
    readonly body: FieldRef<"PullRequest", 'String'>
    readonly state: FieldRef<"PullRequest", 'PRState'>
    readonly reviewCycles: FieldRef<"PullRequest", 'Int'>
    readonly additions: FieldRef<"PullRequest", 'Int'>
    readonly deletions: FieldRef<"PullRequest", 'Int'>
    readonly mergedAt: FieldRef<"PullRequest", 'DateTime'>
    readonly createdAt: FieldRef<"PullRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"PullRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PullRequest findUnique
   */
  export type PullRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequest to fetch.
     */
    where: PullRequestWhereUniqueInput
  }

  /**
   * PullRequest findUniqueOrThrow
   */
  export type PullRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequest to fetch.
     */
    where: PullRequestWhereUniqueInput
  }

  /**
   * PullRequest findFirst
   */
  export type PullRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequest to fetch.
     */
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     */
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PullRequests.
     */
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PullRequests.
     */
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * PullRequest findFirstOrThrow
   */
  export type PullRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequest to fetch.
     */
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     */
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PullRequests.
     */
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PullRequests.
     */
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * PullRequest findMany
   */
  export type PullRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequests to fetch.
     */
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     */
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PullRequests.
     */
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     */
    skip?: number
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * PullRequest create
   */
  export type PullRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a PullRequest.
     */
    data: XOR<PullRequestCreateInput, PullRequestUncheckedCreateInput>
  }

  /**
   * PullRequest createMany
   */
  export type PullRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PullRequests.
     */
    data: PullRequestCreateManyInput | PullRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PullRequest createManyAndReturn
   */
  export type PullRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PullRequests.
     */
    data: PullRequestCreateManyInput | PullRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PullRequest update
   */
  export type PullRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a PullRequest.
     */
    data: XOR<PullRequestUpdateInput, PullRequestUncheckedUpdateInput>
    /**
     * Choose, which PullRequest to update.
     */
    where: PullRequestWhereUniqueInput
  }

  /**
   * PullRequest updateMany
   */
  export type PullRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PullRequests.
     */
    data: XOR<PullRequestUpdateManyMutationInput, PullRequestUncheckedUpdateManyInput>
    /**
     * Filter which PullRequests to update
     */
    where?: PullRequestWhereInput
  }

  /**
   * PullRequest upsert
   */
  export type PullRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the PullRequest to update in case it exists.
     */
    where: PullRequestWhereUniqueInput
    /**
     * In case the PullRequest found by the `where` argument doesn't exist, create a new PullRequest with this data.
     */
    create: XOR<PullRequestCreateInput, PullRequestUncheckedCreateInput>
    /**
     * In case the PullRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PullRequestUpdateInput, PullRequestUncheckedUpdateInput>
  }

  /**
   * PullRequest delete
   */
  export type PullRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter which PullRequest to delete.
     */
    where: PullRequestWhereUniqueInput
  }

  /**
   * PullRequest deleteMany
   */
  export type PullRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PullRequests to delete
     */
    where?: PullRequestWhereInput
  }

  /**
   * PullRequest.feedbackSent
   */
  export type PullRequest$feedbackSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFeedback
     */
    select?: PRFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFeedbackInclude<ExtArgs> | null
    where?: PRFeedbackWhereInput
    orderBy?: PRFeedbackOrderByWithRelationInput | PRFeedbackOrderByWithRelationInput[]
    cursor?: PRFeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PRFeedbackScalarFieldEnum | PRFeedbackScalarFieldEnum[]
  }

  /**
   * PullRequest without action
   */
  export type PullRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
  }


  /**
   * Model PRFeedback
   */

  export type AggregatePRFeedback = {
    _count: PRFeedbackCountAggregateOutputType | null
    _min: PRFeedbackMinAggregateOutputType | null
    _max: PRFeedbackMaxAggregateOutputType | null
  }

  export type PRFeedbackMinAggregateOutputType = {
    id: string | null
    prId: string | null
    feedbackType: string | null
    content: string | null
    sentViaDiscord: boolean | null
    accepted: boolean | null
    createdAt: Date | null
  }

  export type PRFeedbackMaxAggregateOutputType = {
    id: string | null
    prId: string | null
    feedbackType: string | null
    content: string | null
    sentViaDiscord: boolean | null
    accepted: boolean | null
    createdAt: Date | null
  }

  export type PRFeedbackCountAggregateOutputType = {
    id: number
    prId: number
    feedbackType: number
    content: number
    sentViaDiscord: number
    accepted: number
    createdAt: number
    _all: number
  }


  export type PRFeedbackMinAggregateInputType = {
    id?: true
    prId?: true
    feedbackType?: true
    content?: true
    sentViaDiscord?: true
    accepted?: true
    createdAt?: true
  }

  export type PRFeedbackMaxAggregateInputType = {
    id?: true
    prId?: true
    feedbackType?: true
    content?: true
    sentViaDiscord?: true
    accepted?: true
    createdAt?: true
  }

  export type PRFeedbackCountAggregateInputType = {
    id?: true
    prId?: true
    feedbackType?: true
    content?: true
    sentViaDiscord?: true
    accepted?: true
    createdAt?: true
    _all?: true
  }

  export type PRFeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRFeedback to aggregate.
     */
    where?: PRFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRFeedbacks to fetch.
     */
    orderBy?: PRFeedbackOrderByWithRelationInput | PRFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PRFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PRFeedbacks
    **/
    _count?: true | PRFeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PRFeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PRFeedbackMaxAggregateInputType
  }

  export type GetPRFeedbackAggregateType<T extends PRFeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregatePRFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePRFeedback[P]>
      : GetScalarType<T[P], AggregatePRFeedback[P]>
  }




  export type PRFeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRFeedbackWhereInput
    orderBy?: PRFeedbackOrderByWithAggregationInput | PRFeedbackOrderByWithAggregationInput[]
    by: PRFeedbackScalarFieldEnum[] | PRFeedbackScalarFieldEnum
    having?: PRFeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PRFeedbackCountAggregateInputType | true
    _min?: PRFeedbackMinAggregateInputType
    _max?: PRFeedbackMaxAggregateInputType
  }

  export type PRFeedbackGroupByOutputType = {
    id: string
    prId: string
    feedbackType: string
    content: string
    sentViaDiscord: boolean
    accepted: boolean | null
    createdAt: Date
    _count: PRFeedbackCountAggregateOutputType | null
    _min: PRFeedbackMinAggregateOutputType | null
    _max: PRFeedbackMaxAggregateOutputType | null
  }

  type GetPRFeedbackGroupByPayload<T extends PRFeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PRFeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PRFeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PRFeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], PRFeedbackGroupByOutputType[P]>
        }
      >
    >


  export type PRFeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prId?: boolean
    feedbackType?: boolean
    content?: boolean
    sentViaDiscord?: boolean
    accepted?: boolean
    createdAt?: boolean
    pr?: boolean | PullRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pRFeedback"]>

  export type PRFeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prId?: boolean
    feedbackType?: boolean
    content?: boolean
    sentViaDiscord?: boolean
    accepted?: boolean
    createdAt?: boolean
    pr?: boolean | PullRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pRFeedback"]>

  export type PRFeedbackSelectScalar = {
    id?: boolean
    prId?: boolean
    feedbackType?: boolean
    content?: boolean
    sentViaDiscord?: boolean
    accepted?: boolean
    createdAt?: boolean
  }

  export type PRFeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pr?: boolean | PullRequestDefaultArgs<ExtArgs>
  }
  export type PRFeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pr?: boolean | PullRequestDefaultArgs<ExtArgs>
  }

  export type $PRFeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PRFeedback"
    objects: {
      pr: Prisma.$PullRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prId: string
      feedbackType: string
      content: string
      sentViaDiscord: boolean
      accepted: boolean | null
      createdAt: Date
    }, ExtArgs["result"]["pRFeedback"]>
    composites: {}
  }

  type PRFeedbackGetPayload<S extends boolean | null | undefined | PRFeedbackDefaultArgs> = $Result.GetResult<Prisma.$PRFeedbackPayload, S>

  type PRFeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PRFeedbackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PRFeedbackCountAggregateInputType | true
    }

  export interface PRFeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PRFeedback'], meta: { name: 'PRFeedback' } }
    /**
     * Find zero or one PRFeedback that matches the filter.
     * @param {PRFeedbackFindUniqueArgs} args - Arguments to find a PRFeedback
     * @example
     * // Get one PRFeedback
     * const pRFeedback = await prisma.pRFeedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PRFeedbackFindUniqueArgs>(args: SelectSubset<T, PRFeedbackFindUniqueArgs<ExtArgs>>): Prisma__PRFeedbackClient<$Result.GetResult<Prisma.$PRFeedbackPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PRFeedback that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PRFeedbackFindUniqueOrThrowArgs} args - Arguments to find a PRFeedback
     * @example
     * // Get one PRFeedback
     * const pRFeedback = await prisma.pRFeedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PRFeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, PRFeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PRFeedbackClient<$Result.GetResult<Prisma.$PRFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PRFeedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRFeedbackFindFirstArgs} args - Arguments to find a PRFeedback
     * @example
     * // Get one PRFeedback
     * const pRFeedback = await prisma.pRFeedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PRFeedbackFindFirstArgs>(args?: SelectSubset<T, PRFeedbackFindFirstArgs<ExtArgs>>): Prisma__PRFeedbackClient<$Result.GetResult<Prisma.$PRFeedbackPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PRFeedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRFeedbackFindFirstOrThrowArgs} args - Arguments to find a PRFeedback
     * @example
     * // Get one PRFeedback
     * const pRFeedback = await prisma.pRFeedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PRFeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, PRFeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__PRFeedbackClient<$Result.GetResult<Prisma.$PRFeedbackPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PRFeedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRFeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PRFeedbacks
     * const pRFeedbacks = await prisma.pRFeedback.findMany()
     * 
     * // Get first 10 PRFeedbacks
     * const pRFeedbacks = await prisma.pRFeedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pRFeedbackWithIdOnly = await prisma.pRFeedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PRFeedbackFindManyArgs>(args?: SelectSubset<T, PRFeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRFeedbackPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PRFeedback.
     * @param {PRFeedbackCreateArgs} args - Arguments to create a PRFeedback.
     * @example
     * // Create one PRFeedback
     * const PRFeedback = await prisma.pRFeedback.create({
     *   data: {
     *     // ... data to create a PRFeedback
     *   }
     * })
     * 
     */
    create<T extends PRFeedbackCreateArgs>(args: SelectSubset<T, PRFeedbackCreateArgs<ExtArgs>>): Prisma__PRFeedbackClient<$Result.GetResult<Prisma.$PRFeedbackPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PRFeedbacks.
     * @param {PRFeedbackCreateManyArgs} args - Arguments to create many PRFeedbacks.
     * @example
     * // Create many PRFeedbacks
     * const pRFeedback = await prisma.pRFeedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PRFeedbackCreateManyArgs>(args?: SelectSubset<T, PRFeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PRFeedbacks and returns the data saved in the database.
     * @param {PRFeedbackCreateManyAndReturnArgs} args - Arguments to create many PRFeedbacks.
     * @example
     * // Create many PRFeedbacks
     * const pRFeedback = await prisma.pRFeedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PRFeedbacks and only return the `id`
     * const pRFeedbackWithIdOnly = await prisma.pRFeedback.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PRFeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, PRFeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRFeedbackPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PRFeedback.
     * @param {PRFeedbackDeleteArgs} args - Arguments to delete one PRFeedback.
     * @example
     * // Delete one PRFeedback
     * const PRFeedback = await prisma.pRFeedback.delete({
     *   where: {
     *     // ... filter to delete one PRFeedback
     *   }
     * })
     * 
     */
    delete<T extends PRFeedbackDeleteArgs>(args: SelectSubset<T, PRFeedbackDeleteArgs<ExtArgs>>): Prisma__PRFeedbackClient<$Result.GetResult<Prisma.$PRFeedbackPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PRFeedback.
     * @param {PRFeedbackUpdateArgs} args - Arguments to update one PRFeedback.
     * @example
     * // Update one PRFeedback
     * const pRFeedback = await prisma.pRFeedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PRFeedbackUpdateArgs>(args: SelectSubset<T, PRFeedbackUpdateArgs<ExtArgs>>): Prisma__PRFeedbackClient<$Result.GetResult<Prisma.$PRFeedbackPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PRFeedbacks.
     * @param {PRFeedbackDeleteManyArgs} args - Arguments to filter PRFeedbacks to delete.
     * @example
     * // Delete a few PRFeedbacks
     * const { count } = await prisma.pRFeedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PRFeedbackDeleteManyArgs>(args?: SelectSubset<T, PRFeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PRFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRFeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PRFeedbacks
     * const pRFeedback = await prisma.pRFeedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PRFeedbackUpdateManyArgs>(args: SelectSubset<T, PRFeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PRFeedback.
     * @param {PRFeedbackUpsertArgs} args - Arguments to update or create a PRFeedback.
     * @example
     * // Update or create a PRFeedback
     * const pRFeedback = await prisma.pRFeedback.upsert({
     *   create: {
     *     // ... data to create a PRFeedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PRFeedback we want to update
     *   }
     * })
     */
    upsert<T extends PRFeedbackUpsertArgs>(args: SelectSubset<T, PRFeedbackUpsertArgs<ExtArgs>>): Prisma__PRFeedbackClient<$Result.GetResult<Prisma.$PRFeedbackPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PRFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRFeedbackCountArgs} args - Arguments to filter PRFeedbacks to count.
     * @example
     * // Count the number of PRFeedbacks
     * const count = await prisma.pRFeedback.count({
     *   where: {
     *     // ... the filter for the PRFeedbacks we want to count
     *   }
     * })
    **/
    count<T extends PRFeedbackCountArgs>(
      args?: Subset<T, PRFeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PRFeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PRFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRFeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PRFeedbackAggregateArgs>(args: Subset<T, PRFeedbackAggregateArgs>): Prisma.PrismaPromise<GetPRFeedbackAggregateType<T>>

    /**
     * Group by PRFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRFeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PRFeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PRFeedbackGroupByArgs['orderBy'] }
        : { orderBy?: PRFeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PRFeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPRFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PRFeedback model
   */
  readonly fields: PRFeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PRFeedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PRFeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pr<T extends PullRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PullRequestDefaultArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PRFeedback model
   */ 
  interface PRFeedbackFieldRefs {
    readonly id: FieldRef<"PRFeedback", 'String'>
    readonly prId: FieldRef<"PRFeedback", 'String'>
    readonly feedbackType: FieldRef<"PRFeedback", 'String'>
    readonly content: FieldRef<"PRFeedback", 'String'>
    readonly sentViaDiscord: FieldRef<"PRFeedback", 'Boolean'>
    readonly accepted: FieldRef<"PRFeedback", 'Boolean'>
    readonly createdAt: FieldRef<"PRFeedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PRFeedback findUnique
   */
  export type PRFeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFeedback
     */
    select?: PRFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which PRFeedback to fetch.
     */
    where: PRFeedbackWhereUniqueInput
  }

  /**
   * PRFeedback findUniqueOrThrow
   */
  export type PRFeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFeedback
     */
    select?: PRFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which PRFeedback to fetch.
     */
    where: PRFeedbackWhereUniqueInput
  }

  /**
   * PRFeedback findFirst
   */
  export type PRFeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFeedback
     */
    select?: PRFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which PRFeedback to fetch.
     */
    where?: PRFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRFeedbacks to fetch.
     */
    orderBy?: PRFeedbackOrderByWithRelationInput | PRFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRFeedbacks.
     */
    cursor?: PRFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRFeedbacks.
     */
    distinct?: PRFeedbackScalarFieldEnum | PRFeedbackScalarFieldEnum[]
  }

  /**
   * PRFeedback findFirstOrThrow
   */
  export type PRFeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFeedback
     */
    select?: PRFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which PRFeedback to fetch.
     */
    where?: PRFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRFeedbacks to fetch.
     */
    orderBy?: PRFeedbackOrderByWithRelationInput | PRFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRFeedbacks.
     */
    cursor?: PRFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRFeedbacks.
     */
    distinct?: PRFeedbackScalarFieldEnum | PRFeedbackScalarFieldEnum[]
  }

  /**
   * PRFeedback findMany
   */
  export type PRFeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFeedback
     */
    select?: PRFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which PRFeedbacks to fetch.
     */
    where?: PRFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRFeedbacks to fetch.
     */
    orderBy?: PRFeedbackOrderByWithRelationInput | PRFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PRFeedbacks.
     */
    cursor?: PRFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRFeedbacks.
     */
    skip?: number
    distinct?: PRFeedbackScalarFieldEnum | PRFeedbackScalarFieldEnum[]
  }

  /**
   * PRFeedback create
   */
  export type PRFeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFeedback
     */
    select?: PRFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a PRFeedback.
     */
    data: XOR<PRFeedbackCreateInput, PRFeedbackUncheckedCreateInput>
  }

  /**
   * PRFeedback createMany
   */
  export type PRFeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PRFeedbacks.
     */
    data: PRFeedbackCreateManyInput | PRFeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PRFeedback createManyAndReturn
   */
  export type PRFeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFeedback
     */
    select?: PRFeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PRFeedbacks.
     */
    data: PRFeedbackCreateManyInput | PRFeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PRFeedback update
   */
  export type PRFeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFeedback
     */
    select?: PRFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a PRFeedback.
     */
    data: XOR<PRFeedbackUpdateInput, PRFeedbackUncheckedUpdateInput>
    /**
     * Choose, which PRFeedback to update.
     */
    where: PRFeedbackWhereUniqueInput
  }

  /**
   * PRFeedback updateMany
   */
  export type PRFeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PRFeedbacks.
     */
    data: XOR<PRFeedbackUpdateManyMutationInput, PRFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which PRFeedbacks to update
     */
    where?: PRFeedbackWhereInput
  }

  /**
   * PRFeedback upsert
   */
  export type PRFeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFeedback
     */
    select?: PRFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the PRFeedback to update in case it exists.
     */
    where: PRFeedbackWhereUniqueInput
    /**
     * In case the PRFeedback found by the `where` argument doesn't exist, create a new PRFeedback with this data.
     */
    create: XOR<PRFeedbackCreateInput, PRFeedbackUncheckedCreateInput>
    /**
     * In case the PRFeedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PRFeedbackUpdateInput, PRFeedbackUncheckedUpdateInput>
  }

  /**
   * PRFeedback delete
   */
  export type PRFeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFeedback
     */
    select?: PRFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFeedbackInclude<ExtArgs> | null
    /**
     * Filter which PRFeedback to delete.
     */
    where: PRFeedbackWhereUniqueInput
  }

  /**
   * PRFeedback deleteMany
   */
  export type PRFeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRFeedbacks to delete
     */
    where?: PRFeedbackWhereInput
  }

  /**
   * PRFeedback without action
   */
  export type PRFeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFeedback
     */
    select?: PRFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFeedbackInclude<ExtArgs> | null
  }


  /**
   * Model Meeting
   */

  export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  export type MeetingMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    title: string | null
    meetingType: $Enums.MeetingType | null
    transcript: string | null
    summary: string | null
    occurredAt: Date | null
    createdAt: Date | null
  }

  export type MeetingMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    title: string | null
    meetingType: $Enums.MeetingType | null
    transcript: string | null
    summary: string | null
    occurredAt: Date | null
    createdAt: Date | null
  }

  export type MeetingCountAggregateOutputType = {
    id: number
    orgId: number
    title: number
    meetingType: number
    transcript: number
    summary: number
    goals: number
    blockers: number
    decisions: number
    occurredAt: number
    createdAt: number
    _all: number
  }


  export type MeetingMinAggregateInputType = {
    id?: true
    orgId?: true
    title?: true
    meetingType?: true
    transcript?: true
    summary?: true
    occurredAt?: true
    createdAt?: true
  }

  export type MeetingMaxAggregateInputType = {
    id?: true
    orgId?: true
    title?: true
    meetingType?: true
    transcript?: true
    summary?: true
    occurredAt?: true
    createdAt?: true
  }

  export type MeetingCountAggregateInputType = {
    id?: true
    orgId?: true
    title?: true
    meetingType?: true
    transcript?: true
    summary?: true
    goals?: true
    blockers?: true
    decisions?: true
    occurredAt?: true
    createdAt?: true
    _all?: true
  }

  export type MeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meeting to aggregate.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meetings
    **/
    _count?: true | MeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingMaxAggregateInputType
  }

  export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting[P]>
      : GetScalarType<T[P], AggregateMeeting[P]>
  }




  export type MeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithAggregationInput | MeetingOrderByWithAggregationInput[]
    by: MeetingScalarFieldEnum[] | MeetingScalarFieldEnum
    having?: MeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingCountAggregateInputType | true
    _min?: MeetingMinAggregateInputType
    _max?: MeetingMaxAggregateInputType
  }

  export type MeetingGroupByOutputType = {
    id: string
    orgId: string
    title: string
    meetingType: $Enums.MeetingType
    transcript: string | null
    summary: string | null
    goals: string[]
    blockers: string[]
    decisions: string[]
    occurredAt: Date
    createdAt: Date
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  type GetMeetingGroupByPayload<T extends MeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingGroupByOutputType[P]>
        }
      >
    >


  export type MeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    title?: boolean
    meetingType?: boolean
    transcript?: boolean
    summary?: boolean
    goals?: boolean
    blockers?: boolean
    decisions?: boolean
    occurredAt?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    tasks?: boolean | Meeting$tasksArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    title?: boolean
    meetingType?: boolean
    transcript?: boolean
    summary?: boolean
    goals?: boolean
    blockers?: boolean
    decisions?: boolean
    occurredAt?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectScalar = {
    id?: boolean
    orgId?: boolean
    title?: boolean
    meetingType?: boolean
    transcript?: boolean
    summary?: boolean
    goals?: boolean
    blockers?: boolean
    decisions?: boolean
    occurredAt?: boolean
    createdAt?: boolean
  }

  export type MeetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    tasks?: boolean | Meeting$tasksArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $MeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meeting"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      title: string
      meetingType: $Enums.MeetingType
      transcript: string | null
      summary: string | null
      goals: string[]
      blockers: string[]
      decisions: string[]
      occurredAt: Date
      createdAt: Date
    }, ExtArgs["result"]["meeting"]>
    composites: {}
  }

  type MeetingGetPayload<S extends boolean | null | undefined | MeetingDefaultArgs> = $Result.GetResult<Prisma.$MeetingPayload, S>

  type MeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MeetingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MeetingCountAggregateInputType | true
    }

  export interface MeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meeting'], meta: { name: 'Meeting' } }
    /**
     * Find zero or one Meeting that matches the filter.
     * @param {MeetingFindUniqueArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingFindUniqueArgs>(args: SelectSubset<T, MeetingFindUniqueArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Meeting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MeetingFindUniqueOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Meeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingFindFirstArgs>(args?: SelectSubset<T, MeetingFindFirstArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Meeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meeting.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingWithIdOnly = await prisma.meeting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingFindManyArgs>(args?: SelectSubset<T, MeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Meeting.
     * @param {MeetingCreateArgs} args - Arguments to create a Meeting.
     * @example
     * // Create one Meeting
     * const Meeting = await prisma.meeting.create({
     *   data: {
     *     // ... data to create a Meeting
     *   }
     * })
     * 
     */
    create<T extends MeetingCreateArgs>(args: SelectSubset<T, MeetingCreateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Meetings.
     * @param {MeetingCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingCreateManyArgs>(args?: SelectSubset<T, MeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meetings and returns the data saved in the database.
     * @param {MeetingCreateManyAndReturnArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Meeting.
     * @param {MeetingDeleteArgs} args - Arguments to delete one Meeting.
     * @example
     * // Delete one Meeting
     * const Meeting = await prisma.meeting.delete({
     *   where: {
     *     // ... filter to delete one Meeting
     *   }
     * })
     * 
     */
    delete<T extends MeetingDeleteArgs>(args: SelectSubset<T, MeetingDeleteArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Meeting.
     * @param {MeetingUpdateArgs} args - Arguments to update one Meeting.
     * @example
     * // Update one Meeting
     * const meeting = await prisma.meeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingUpdateArgs>(args: SelectSubset<T, MeetingUpdateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Meetings.
     * @param {MeetingDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingDeleteManyArgs>(args?: SelectSubset<T, MeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingUpdateManyArgs>(args: SelectSubset<T, MeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meeting.
     * @param {MeetingUpsertArgs} args - Arguments to update or create a Meeting.
     * @example
     * // Update or create a Meeting
     * const meeting = await prisma.meeting.upsert({
     *   create: {
     *     // ... data to create a Meeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting we want to update
     *   }
     * })
     */
    upsert<T extends MeetingUpsertArgs>(args: SelectSubset<T, MeetingUpsertArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meeting.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends MeetingCountArgs>(
      args?: Subset<T, MeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingAggregateArgs>(args: Subset<T, MeetingAggregateArgs>): Prisma.PrismaPromise<GetMeetingAggregateType<T>>

    /**
     * Group by Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingGroupByArgs['orderBy'] }
        : { orderBy?: MeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meeting model
   */
  readonly fields: MeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tasks<T extends Meeting$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Meeting$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meeting model
   */ 
  interface MeetingFieldRefs {
    readonly id: FieldRef<"Meeting", 'String'>
    readonly orgId: FieldRef<"Meeting", 'String'>
    readonly title: FieldRef<"Meeting", 'String'>
    readonly meetingType: FieldRef<"Meeting", 'MeetingType'>
    readonly transcript: FieldRef<"Meeting", 'String'>
    readonly summary: FieldRef<"Meeting", 'String'>
    readonly goals: FieldRef<"Meeting", 'String[]'>
    readonly blockers: FieldRef<"Meeting", 'String[]'>
    readonly decisions: FieldRef<"Meeting", 'String[]'>
    readonly occurredAt: FieldRef<"Meeting", 'DateTime'>
    readonly createdAt: FieldRef<"Meeting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meeting findUnique
   */
  export type MeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findUniqueOrThrow
   */
  export type MeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findFirst
   */
  export type MeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findFirstOrThrow
   */
  export type MeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findMany
   */
  export type MeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting create
   */
  export type MeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to create a Meeting.
     */
    data: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
  }

  /**
   * Meeting createMany
   */
  export type MeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meeting createManyAndReturn
   */
  export type MeetingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting update
   */
  export type MeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to update a Meeting.
     */
    data: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
    /**
     * Choose, which Meeting to update.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting updateMany
   */
  export type MeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
  }

  /**
   * Meeting upsert
   */
  export type MeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The filter to search for the Meeting to update in case it exists.
     */
    where: MeetingWhereUniqueInput
    /**
     * In case the Meeting found by the `where` argument doesn't exist, create a new Meeting with this data.
     */
    create: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
    /**
     * In case the Meeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
  }

  /**
   * Meeting delete
   */
  export type MeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter which Meeting to delete.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting deleteMany
   */
  export type MeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meetings to delete
     */
    where?: MeetingWhereInput
  }

  /**
   * Meeting.tasks
   */
  export type Meeting$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Meeting without action
   */
  export type MeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    complexity: number | null
    confidence: number | null
  }

  export type TaskSumAggregateOutputType = {
    complexity: number | null
    confidence: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    meetingId: string | null
    assigneeId: string | null
    title: string | null
    description: string | null
    complexity: number | null
    status: $Enums.TaskStatus | null
    confidence: number | null
    approvedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    meetingId: string | null
    assigneeId: string | null
    title: string | null
    description: string | null
    complexity: number | null
    status: $Enums.TaskStatus | null
    confidence: number | null
    approvedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    orgId: number
    meetingId: number
    assigneeId: number
    title: number
    description: number
    complexity: number
    status: number
    confidence: number
    approvedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    complexity?: true
    confidence?: true
  }

  export type TaskSumAggregateInputType = {
    complexity?: true
    confidence?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    orgId?: true
    meetingId?: true
    assigneeId?: true
    title?: true
    description?: true
    complexity?: true
    status?: true
    confidence?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    orgId?: true
    meetingId?: true
    assigneeId?: true
    title?: true
    description?: true
    complexity?: true
    status?: true
    confidence?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    orgId?: true
    meetingId?: true
    assigneeId?: true
    title?: true
    description?: true
    complexity?: true
    status?: true
    confidence?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    orgId: string
    meetingId: string | null
    assigneeId: string | null
    title: string
    description: string | null
    complexity: number
    status: $Enums.TaskStatus
    confidence: number
    approvedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    meetingId?: boolean
    assigneeId?: boolean
    title?: boolean
    description?: boolean
    complexity?: boolean
    status?: boolean
    confidence?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    meeting?: boolean | Task$meetingArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    meetingId?: boolean
    assigneeId?: boolean
    title?: boolean
    description?: boolean
    complexity?: boolean
    status?: boolean
    confidence?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    meeting?: boolean | Task$meetingArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    orgId?: boolean
    meetingId?: boolean
    assigneeId?: boolean
    title?: boolean
    description?: boolean
    complexity?: boolean
    status?: boolean
    confidence?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    meeting?: boolean | Task$meetingArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    meeting?: boolean | Task$meetingArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
      meeting: Prisma.$MeetingPayload<ExtArgs> | null
      assignee: Prisma.$DeveloperPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      meetingId: string | null
      assigneeId: string | null
      title: string
      description: string | null
      complexity: number
      status: $Enums.TaskStatus
      confidence: number
      approvedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    meeting<T extends Task$meetingArgs<ExtArgs> = {}>(args?: Subset<T, Task$meetingArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    assignee<T extends Task$assigneeArgs<ExtArgs> = {}>(args?: Subset<T, Task$assigneeArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly orgId: FieldRef<"Task", 'String'>
    readonly meetingId: FieldRef<"Task", 'String'>
    readonly assigneeId: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly complexity: FieldRef<"Task", 'Int'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly confidence: FieldRef<"Task", 'Float'>
    readonly approvedBy: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task.meeting
   */
  export type Task$meetingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
  }

  /**
   * Task.assignee
   */
  export type Task$assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    where?: DeveloperWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Sprint
   */

  export type AggregateSprint = {
    _count: SprintCountAggregateOutputType | null
    _avg: SprintAvgAggregateOutputType | null
    _sum: SprintSumAggregateOutputType | null
    _min: SprintMinAggregateOutputType | null
    _max: SprintMaxAggregateOutputType | null
  }

  export type SprintAvgAggregateOutputType = {
    velocity: number | null
    predictability: number | null
  }

  export type SprintSumAggregateOutputType = {
    velocity: number | null
    predictability: number | null
  }

  export type SprintMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    summary: string | null
    velocity: number | null
    predictability: number | null
    createdAt: Date | null
  }

  export type SprintMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    summary: string | null
    velocity: number | null
    predictability: number | null
    createdAt: Date | null
  }

  export type SprintCountAggregateOutputType = {
    id: number
    orgId: number
    name: number
    startDate: number
    endDate: number
    summary: number
    velocity: number
    predictability: number
    createdAt: number
    _all: number
  }


  export type SprintAvgAggregateInputType = {
    velocity?: true
    predictability?: true
  }

  export type SprintSumAggregateInputType = {
    velocity?: true
    predictability?: true
  }

  export type SprintMinAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    startDate?: true
    endDate?: true
    summary?: true
    velocity?: true
    predictability?: true
    createdAt?: true
  }

  export type SprintMaxAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    startDate?: true
    endDate?: true
    summary?: true
    velocity?: true
    predictability?: true
    createdAt?: true
  }

  export type SprintCountAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    startDate?: true
    endDate?: true
    summary?: true
    velocity?: true
    predictability?: true
    createdAt?: true
    _all?: true
  }

  export type SprintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sprint to aggregate.
     */
    where?: SprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprints to fetch.
     */
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sprints
    **/
    _count?: true | SprintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SprintAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SprintSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SprintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SprintMaxAggregateInputType
  }

  export type GetSprintAggregateType<T extends SprintAggregateArgs> = {
        [P in keyof T & keyof AggregateSprint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSprint[P]>
      : GetScalarType<T[P], AggregateSprint[P]>
  }




  export type SprintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SprintWhereInput
    orderBy?: SprintOrderByWithAggregationInput | SprintOrderByWithAggregationInput[]
    by: SprintScalarFieldEnum[] | SprintScalarFieldEnum
    having?: SprintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SprintCountAggregateInputType | true
    _avg?: SprintAvgAggregateInputType
    _sum?: SprintSumAggregateInputType
    _min?: SprintMinAggregateInputType
    _max?: SprintMaxAggregateInputType
  }

  export type SprintGroupByOutputType = {
    id: string
    orgId: string
    name: string
    startDate: Date
    endDate: Date
    summary: string | null
    velocity: number | null
    predictability: number | null
    createdAt: Date
    _count: SprintCountAggregateOutputType | null
    _avg: SprintAvgAggregateOutputType | null
    _sum: SprintSumAggregateOutputType | null
    _min: SprintMinAggregateOutputType | null
    _max: SprintMaxAggregateOutputType | null
  }

  type GetSprintGroupByPayload<T extends SprintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SprintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SprintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SprintGroupByOutputType[P]>
            : GetScalarType<T[P], SprintGroupByOutputType[P]>
        }
      >
    >


  export type SprintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    summary?: boolean
    velocity?: boolean
    predictability?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sprint"]>

  export type SprintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    summary?: boolean
    velocity?: boolean
    predictability?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sprint"]>

  export type SprintSelectScalar = {
    id?: boolean
    orgId?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    summary?: boolean
    velocity?: boolean
    predictability?: boolean
    createdAt?: boolean
  }

  export type SprintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type SprintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $SprintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sprint"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      name: string
      startDate: Date
      endDate: Date
      summary: string | null
      velocity: number | null
      predictability: number | null
      createdAt: Date
    }, ExtArgs["result"]["sprint"]>
    composites: {}
  }

  type SprintGetPayload<S extends boolean | null | undefined | SprintDefaultArgs> = $Result.GetResult<Prisma.$SprintPayload, S>

  type SprintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SprintFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SprintCountAggregateInputType | true
    }

  export interface SprintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sprint'], meta: { name: 'Sprint' } }
    /**
     * Find zero or one Sprint that matches the filter.
     * @param {SprintFindUniqueArgs} args - Arguments to find a Sprint
     * @example
     * // Get one Sprint
     * const sprint = await prisma.sprint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SprintFindUniqueArgs>(args: SelectSubset<T, SprintFindUniqueArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sprint that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SprintFindUniqueOrThrowArgs} args - Arguments to find a Sprint
     * @example
     * // Get one Sprint
     * const sprint = await prisma.sprint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SprintFindUniqueOrThrowArgs>(args: SelectSubset<T, SprintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sprint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintFindFirstArgs} args - Arguments to find a Sprint
     * @example
     * // Get one Sprint
     * const sprint = await prisma.sprint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SprintFindFirstArgs>(args?: SelectSubset<T, SprintFindFirstArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sprint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintFindFirstOrThrowArgs} args - Arguments to find a Sprint
     * @example
     * // Get one Sprint
     * const sprint = await prisma.sprint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SprintFindFirstOrThrowArgs>(args?: SelectSubset<T, SprintFindFirstOrThrowArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sprints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sprints
     * const sprints = await prisma.sprint.findMany()
     * 
     * // Get first 10 Sprints
     * const sprints = await prisma.sprint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sprintWithIdOnly = await prisma.sprint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SprintFindManyArgs>(args?: SelectSubset<T, SprintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sprint.
     * @param {SprintCreateArgs} args - Arguments to create a Sprint.
     * @example
     * // Create one Sprint
     * const Sprint = await prisma.sprint.create({
     *   data: {
     *     // ... data to create a Sprint
     *   }
     * })
     * 
     */
    create<T extends SprintCreateArgs>(args: SelectSubset<T, SprintCreateArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sprints.
     * @param {SprintCreateManyArgs} args - Arguments to create many Sprints.
     * @example
     * // Create many Sprints
     * const sprint = await prisma.sprint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SprintCreateManyArgs>(args?: SelectSubset<T, SprintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sprints and returns the data saved in the database.
     * @param {SprintCreateManyAndReturnArgs} args - Arguments to create many Sprints.
     * @example
     * // Create many Sprints
     * const sprint = await prisma.sprint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sprints and only return the `id`
     * const sprintWithIdOnly = await prisma.sprint.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SprintCreateManyAndReturnArgs>(args?: SelectSubset<T, SprintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sprint.
     * @param {SprintDeleteArgs} args - Arguments to delete one Sprint.
     * @example
     * // Delete one Sprint
     * const Sprint = await prisma.sprint.delete({
     *   where: {
     *     // ... filter to delete one Sprint
     *   }
     * })
     * 
     */
    delete<T extends SprintDeleteArgs>(args: SelectSubset<T, SprintDeleteArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sprint.
     * @param {SprintUpdateArgs} args - Arguments to update one Sprint.
     * @example
     * // Update one Sprint
     * const sprint = await prisma.sprint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SprintUpdateArgs>(args: SelectSubset<T, SprintUpdateArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sprints.
     * @param {SprintDeleteManyArgs} args - Arguments to filter Sprints to delete.
     * @example
     * // Delete a few Sprints
     * const { count } = await prisma.sprint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SprintDeleteManyArgs>(args?: SelectSubset<T, SprintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sprints
     * const sprint = await prisma.sprint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SprintUpdateManyArgs>(args: SelectSubset<T, SprintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sprint.
     * @param {SprintUpsertArgs} args - Arguments to update or create a Sprint.
     * @example
     * // Update or create a Sprint
     * const sprint = await prisma.sprint.upsert({
     *   create: {
     *     // ... data to create a Sprint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sprint we want to update
     *   }
     * })
     */
    upsert<T extends SprintUpsertArgs>(args: SelectSubset<T, SprintUpsertArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintCountArgs} args - Arguments to filter Sprints to count.
     * @example
     * // Count the number of Sprints
     * const count = await prisma.sprint.count({
     *   where: {
     *     // ... the filter for the Sprints we want to count
     *   }
     * })
    **/
    count<T extends SprintCountArgs>(
      args?: Subset<T, SprintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SprintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SprintAggregateArgs>(args: Subset<T, SprintAggregateArgs>): Prisma.PrismaPromise<GetSprintAggregateType<T>>

    /**
     * Group by Sprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SprintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SprintGroupByArgs['orderBy'] }
        : { orderBy?: SprintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SprintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSprintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sprint model
   */
  readonly fields: SprintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sprint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SprintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sprint model
   */ 
  interface SprintFieldRefs {
    readonly id: FieldRef<"Sprint", 'String'>
    readonly orgId: FieldRef<"Sprint", 'String'>
    readonly name: FieldRef<"Sprint", 'String'>
    readonly startDate: FieldRef<"Sprint", 'DateTime'>
    readonly endDate: FieldRef<"Sprint", 'DateTime'>
    readonly summary: FieldRef<"Sprint", 'String'>
    readonly velocity: FieldRef<"Sprint", 'Float'>
    readonly predictability: FieldRef<"Sprint", 'Float'>
    readonly createdAt: FieldRef<"Sprint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sprint findUnique
   */
  export type SprintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprint to fetch.
     */
    where: SprintWhereUniqueInput
  }

  /**
   * Sprint findUniqueOrThrow
   */
  export type SprintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprint to fetch.
     */
    where: SprintWhereUniqueInput
  }

  /**
   * Sprint findFirst
   */
  export type SprintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprint to fetch.
     */
    where?: SprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprints to fetch.
     */
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sprints.
     */
    cursor?: SprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sprints.
     */
    distinct?: SprintScalarFieldEnum | SprintScalarFieldEnum[]
  }

  /**
   * Sprint findFirstOrThrow
   */
  export type SprintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprint to fetch.
     */
    where?: SprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprints to fetch.
     */
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sprints.
     */
    cursor?: SprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sprints.
     */
    distinct?: SprintScalarFieldEnum | SprintScalarFieldEnum[]
  }

  /**
   * Sprint findMany
   */
  export type SprintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprints to fetch.
     */
    where?: SprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprints to fetch.
     */
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sprints.
     */
    cursor?: SprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprints.
     */
    skip?: number
    distinct?: SprintScalarFieldEnum | SprintScalarFieldEnum[]
  }

  /**
   * Sprint create
   */
  export type SprintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * The data needed to create a Sprint.
     */
    data: XOR<SprintCreateInput, SprintUncheckedCreateInput>
  }

  /**
   * Sprint createMany
   */
  export type SprintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sprints.
     */
    data: SprintCreateManyInput | SprintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sprint createManyAndReturn
   */
  export type SprintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sprints.
     */
    data: SprintCreateManyInput | SprintCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sprint update
   */
  export type SprintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * The data needed to update a Sprint.
     */
    data: XOR<SprintUpdateInput, SprintUncheckedUpdateInput>
    /**
     * Choose, which Sprint to update.
     */
    where: SprintWhereUniqueInput
  }

  /**
   * Sprint updateMany
   */
  export type SprintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sprints.
     */
    data: XOR<SprintUpdateManyMutationInput, SprintUncheckedUpdateManyInput>
    /**
     * Filter which Sprints to update
     */
    where?: SprintWhereInput
  }

  /**
   * Sprint upsert
   */
  export type SprintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * The filter to search for the Sprint to update in case it exists.
     */
    where: SprintWhereUniqueInput
    /**
     * In case the Sprint found by the `where` argument doesn't exist, create a new Sprint with this data.
     */
    create: XOR<SprintCreateInput, SprintUncheckedCreateInput>
    /**
     * In case the Sprint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SprintUpdateInput, SprintUncheckedUpdateInput>
  }

  /**
   * Sprint delete
   */
  export type SprintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter which Sprint to delete.
     */
    where: SprintWhereUniqueInput
  }

  /**
   * Sprint deleteMany
   */
  export type SprintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sprints to delete
     */
    where?: SprintWhereInput
  }

  /**
   * Sprint without action
   */
  export type SprintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
  }


  /**
   * Model Embedding
   */

  export type AggregateEmbedding = {
    _count: EmbeddingCountAggregateOutputType | null
    _min: EmbeddingMinAggregateOutputType | null
    _max: EmbeddingMaxAggregateOutputType | null
  }

  export type EmbeddingMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    repoId: string | null
    sourceType: $Enums.EmbeddingSource | null
    sourceId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type EmbeddingMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    repoId: string | null
    sourceType: $Enums.EmbeddingSource | null
    sourceId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type EmbeddingCountAggregateOutputType = {
    id: number
    orgId: number
    repoId: number
    sourceType: number
    sourceId: number
    content: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type EmbeddingMinAggregateInputType = {
    id?: true
    orgId?: true
    repoId?: true
    sourceType?: true
    sourceId?: true
    content?: true
    createdAt?: true
  }

  export type EmbeddingMaxAggregateInputType = {
    id?: true
    orgId?: true
    repoId?: true
    sourceType?: true
    sourceId?: true
    content?: true
    createdAt?: true
  }

  export type EmbeddingCountAggregateInputType = {
    id?: true
    orgId?: true
    repoId?: true
    sourceType?: true
    sourceId?: true
    content?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type EmbeddingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Embedding to aggregate.
     */
    where?: EmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Embeddings to fetch.
     */
    orderBy?: EmbeddingOrderByWithRelationInput | EmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Embeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Embeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Embeddings
    **/
    _count?: true | EmbeddingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmbeddingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmbeddingMaxAggregateInputType
  }

  export type GetEmbeddingAggregateType<T extends EmbeddingAggregateArgs> = {
        [P in keyof T & keyof AggregateEmbedding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmbedding[P]>
      : GetScalarType<T[P], AggregateEmbedding[P]>
  }




  export type EmbeddingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmbeddingWhereInput
    orderBy?: EmbeddingOrderByWithAggregationInput | EmbeddingOrderByWithAggregationInput[]
    by: EmbeddingScalarFieldEnum[] | EmbeddingScalarFieldEnum
    having?: EmbeddingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmbeddingCountAggregateInputType | true
    _min?: EmbeddingMinAggregateInputType
    _max?: EmbeddingMaxAggregateInputType
  }

  export type EmbeddingGroupByOutputType = {
    id: string
    orgId: string
    repoId: string | null
    sourceType: $Enums.EmbeddingSource
    sourceId: string
    content: string
    metadata: JsonValue
    createdAt: Date
    _count: EmbeddingCountAggregateOutputType | null
    _min: EmbeddingMinAggregateOutputType | null
    _max: EmbeddingMaxAggregateOutputType | null
  }

  type GetEmbeddingGroupByPayload<T extends EmbeddingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmbeddingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmbeddingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmbeddingGroupByOutputType[P]>
            : GetScalarType<T[P], EmbeddingGroupByOutputType[P]>
        }
      >
    >


  export type EmbeddingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    repoId?: boolean
    sourceType?: boolean
    sourceId?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    repo?: boolean | Embedding$repoArgs<ExtArgs>
  }, ExtArgs["result"]["embedding"]>

  export type EmbeddingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    repoId?: boolean
    sourceType?: boolean
    sourceId?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    repo?: boolean | Embedding$repoArgs<ExtArgs>
  }, ExtArgs["result"]["embedding"]>

  export type EmbeddingSelectScalar = {
    id?: boolean
    orgId?: boolean
    repoId?: boolean
    sourceType?: boolean
    sourceId?: boolean
    content?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type EmbeddingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    repo?: boolean | Embedding$repoArgs<ExtArgs>
  }
  export type EmbeddingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    repo?: boolean | Embedding$repoArgs<ExtArgs>
  }

  export type $EmbeddingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Embedding"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
      repo: Prisma.$RepositoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      repoId: string | null
      sourceType: $Enums.EmbeddingSource
      sourceId: string
      content: string
      metadata: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["embedding"]>
    composites: {}
  }

  type EmbeddingGetPayload<S extends boolean | null | undefined | EmbeddingDefaultArgs> = $Result.GetResult<Prisma.$EmbeddingPayload, S>

  type EmbeddingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmbeddingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmbeddingCountAggregateInputType | true
    }

  export interface EmbeddingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Embedding'], meta: { name: 'Embedding' } }
    /**
     * Find zero or one Embedding that matches the filter.
     * @param {EmbeddingFindUniqueArgs} args - Arguments to find a Embedding
     * @example
     * // Get one Embedding
     * const embedding = await prisma.embedding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmbeddingFindUniqueArgs>(args: SelectSubset<T, EmbeddingFindUniqueArgs<ExtArgs>>): Prisma__EmbeddingClient<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Embedding that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmbeddingFindUniqueOrThrowArgs} args - Arguments to find a Embedding
     * @example
     * // Get one Embedding
     * const embedding = await prisma.embedding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmbeddingFindUniqueOrThrowArgs>(args: SelectSubset<T, EmbeddingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmbeddingClient<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Embedding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddingFindFirstArgs} args - Arguments to find a Embedding
     * @example
     * // Get one Embedding
     * const embedding = await prisma.embedding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmbeddingFindFirstArgs>(args?: SelectSubset<T, EmbeddingFindFirstArgs<ExtArgs>>): Prisma__EmbeddingClient<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Embedding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddingFindFirstOrThrowArgs} args - Arguments to find a Embedding
     * @example
     * // Get one Embedding
     * const embedding = await prisma.embedding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmbeddingFindFirstOrThrowArgs>(args?: SelectSubset<T, EmbeddingFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmbeddingClient<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Embeddings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Embeddings
     * const embeddings = await prisma.embedding.findMany()
     * 
     * // Get first 10 Embeddings
     * const embeddings = await prisma.embedding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const embeddingWithIdOnly = await prisma.embedding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmbeddingFindManyArgs>(args?: SelectSubset<T, EmbeddingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Embedding.
     * @param {EmbeddingCreateArgs} args - Arguments to create a Embedding.
     * @example
     * // Create one Embedding
     * const Embedding = await prisma.embedding.create({
     *   data: {
     *     // ... data to create a Embedding
     *   }
     * })
     * 
     */
    create<T extends EmbeddingCreateArgs>(args: SelectSubset<T, EmbeddingCreateArgs<ExtArgs>>): Prisma__EmbeddingClient<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Embeddings.
     * @param {EmbeddingCreateManyArgs} args - Arguments to create many Embeddings.
     * @example
     * // Create many Embeddings
     * const embedding = await prisma.embedding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmbeddingCreateManyArgs>(args?: SelectSubset<T, EmbeddingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Embeddings and returns the data saved in the database.
     * @param {EmbeddingCreateManyAndReturnArgs} args - Arguments to create many Embeddings.
     * @example
     * // Create many Embeddings
     * const embedding = await prisma.embedding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Embeddings and only return the `id`
     * const embeddingWithIdOnly = await prisma.embedding.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmbeddingCreateManyAndReturnArgs>(args?: SelectSubset<T, EmbeddingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Embedding.
     * @param {EmbeddingDeleteArgs} args - Arguments to delete one Embedding.
     * @example
     * // Delete one Embedding
     * const Embedding = await prisma.embedding.delete({
     *   where: {
     *     // ... filter to delete one Embedding
     *   }
     * })
     * 
     */
    delete<T extends EmbeddingDeleteArgs>(args: SelectSubset<T, EmbeddingDeleteArgs<ExtArgs>>): Prisma__EmbeddingClient<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Embedding.
     * @param {EmbeddingUpdateArgs} args - Arguments to update one Embedding.
     * @example
     * // Update one Embedding
     * const embedding = await prisma.embedding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmbeddingUpdateArgs>(args: SelectSubset<T, EmbeddingUpdateArgs<ExtArgs>>): Prisma__EmbeddingClient<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Embeddings.
     * @param {EmbeddingDeleteManyArgs} args - Arguments to filter Embeddings to delete.
     * @example
     * // Delete a few Embeddings
     * const { count } = await prisma.embedding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmbeddingDeleteManyArgs>(args?: SelectSubset<T, EmbeddingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Embeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Embeddings
     * const embedding = await prisma.embedding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmbeddingUpdateManyArgs>(args: SelectSubset<T, EmbeddingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Embedding.
     * @param {EmbeddingUpsertArgs} args - Arguments to update or create a Embedding.
     * @example
     * // Update or create a Embedding
     * const embedding = await prisma.embedding.upsert({
     *   create: {
     *     // ... data to create a Embedding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Embedding we want to update
     *   }
     * })
     */
    upsert<T extends EmbeddingUpsertArgs>(args: SelectSubset<T, EmbeddingUpsertArgs<ExtArgs>>): Prisma__EmbeddingClient<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Embeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddingCountArgs} args - Arguments to filter Embeddings to count.
     * @example
     * // Count the number of Embeddings
     * const count = await prisma.embedding.count({
     *   where: {
     *     // ... the filter for the Embeddings we want to count
     *   }
     * })
    **/
    count<T extends EmbeddingCountArgs>(
      args?: Subset<T, EmbeddingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmbeddingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Embedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmbeddingAggregateArgs>(args: Subset<T, EmbeddingAggregateArgs>): Prisma.PrismaPromise<GetEmbeddingAggregateType<T>>

    /**
     * Group by Embedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmbeddingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmbeddingGroupByArgs['orderBy'] }
        : { orderBy?: EmbeddingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmbeddingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmbeddingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Embedding model
   */
  readonly fields: EmbeddingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Embedding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmbeddingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    repo<T extends Embedding$repoArgs<ExtArgs> = {}>(args?: Subset<T, Embedding$repoArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Embedding model
   */ 
  interface EmbeddingFieldRefs {
    readonly id: FieldRef<"Embedding", 'String'>
    readonly orgId: FieldRef<"Embedding", 'String'>
    readonly repoId: FieldRef<"Embedding", 'String'>
    readonly sourceType: FieldRef<"Embedding", 'EmbeddingSource'>
    readonly sourceId: FieldRef<"Embedding", 'String'>
    readonly content: FieldRef<"Embedding", 'String'>
    readonly metadata: FieldRef<"Embedding", 'Json'>
    readonly createdAt: FieldRef<"Embedding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Embedding findUnique
   */
  export type EmbeddingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which Embedding to fetch.
     */
    where: EmbeddingWhereUniqueInput
  }

  /**
   * Embedding findUniqueOrThrow
   */
  export type EmbeddingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which Embedding to fetch.
     */
    where: EmbeddingWhereUniqueInput
  }

  /**
   * Embedding findFirst
   */
  export type EmbeddingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which Embedding to fetch.
     */
    where?: EmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Embeddings to fetch.
     */
    orderBy?: EmbeddingOrderByWithRelationInput | EmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Embeddings.
     */
    cursor?: EmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Embeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Embeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Embeddings.
     */
    distinct?: EmbeddingScalarFieldEnum | EmbeddingScalarFieldEnum[]
  }

  /**
   * Embedding findFirstOrThrow
   */
  export type EmbeddingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which Embedding to fetch.
     */
    where?: EmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Embeddings to fetch.
     */
    orderBy?: EmbeddingOrderByWithRelationInput | EmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Embeddings.
     */
    cursor?: EmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Embeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Embeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Embeddings.
     */
    distinct?: EmbeddingScalarFieldEnum | EmbeddingScalarFieldEnum[]
  }

  /**
   * Embedding findMany
   */
  export type EmbeddingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which Embeddings to fetch.
     */
    where?: EmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Embeddings to fetch.
     */
    orderBy?: EmbeddingOrderByWithRelationInput | EmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Embeddings.
     */
    cursor?: EmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Embeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Embeddings.
     */
    skip?: number
    distinct?: EmbeddingScalarFieldEnum | EmbeddingScalarFieldEnum[]
  }

  /**
   * Embedding create
   */
  export type EmbeddingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * The data needed to create a Embedding.
     */
    data: XOR<EmbeddingCreateInput, EmbeddingUncheckedCreateInput>
  }

  /**
   * Embedding createMany
   */
  export type EmbeddingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Embeddings.
     */
    data: EmbeddingCreateManyInput | EmbeddingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Embedding createManyAndReturn
   */
  export type EmbeddingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Embeddings.
     */
    data: EmbeddingCreateManyInput | EmbeddingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Embedding update
   */
  export type EmbeddingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * The data needed to update a Embedding.
     */
    data: XOR<EmbeddingUpdateInput, EmbeddingUncheckedUpdateInput>
    /**
     * Choose, which Embedding to update.
     */
    where: EmbeddingWhereUniqueInput
  }

  /**
   * Embedding updateMany
   */
  export type EmbeddingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Embeddings.
     */
    data: XOR<EmbeddingUpdateManyMutationInput, EmbeddingUncheckedUpdateManyInput>
    /**
     * Filter which Embeddings to update
     */
    where?: EmbeddingWhereInput
  }

  /**
   * Embedding upsert
   */
  export type EmbeddingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * The filter to search for the Embedding to update in case it exists.
     */
    where: EmbeddingWhereUniqueInput
    /**
     * In case the Embedding found by the `where` argument doesn't exist, create a new Embedding with this data.
     */
    create: XOR<EmbeddingCreateInput, EmbeddingUncheckedCreateInput>
    /**
     * In case the Embedding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmbeddingUpdateInput, EmbeddingUncheckedUpdateInput>
  }

  /**
   * Embedding delete
   */
  export type EmbeddingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * Filter which Embedding to delete.
     */
    where: EmbeddingWhereUniqueInput
  }

  /**
   * Embedding deleteMany
   */
  export type EmbeddingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Embeddings to delete
     */
    where?: EmbeddingWhereInput
  }

  /**
   * Embedding.repo
   */
  export type Embedding$repoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    where?: RepositoryWhereInput
  }

  /**
   * Embedding without action
   */
  export type EmbeddingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
  }


  /**
   * Model ChatSession
   */

  export type AggregateChatSession = {
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  export type ChatSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    orgId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    orgId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatSessionCountAggregateOutputType = {
    id: number
    userId: number
    orgId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatSessionMinAggregateInputType = {
    id?: true
    userId?: true
    orgId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    orgId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatSessionCountAggregateInputType = {
    id?: true
    userId?: true
    orgId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSession to aggregate.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatSessions
    **/
    _count?: true | ChatSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatSessionMaxAggregateInputType
  }

  export type GetChatSessionAggregateType<T extends ChatSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatSession[P]>
      : GetScalarType<T[P], AggregateChatSession[P]>
  }




  export type ChatSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithAggregationInput | ChatSessionOrderByWithAggregationInput[]
    by: ChatSessionScalarFieldEnum[] | ChatSessionScalarFieldEnum
    having?: ChatSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatSessionCountAggregateInputType | true
    _min?: ChatSessionMinAggregateInputType
    _max?: ChatSessionMaxAggregateInputType
  }

  export type ChatSessionGroupByOutputType = {
    id: string
    userId: string
    orgId: string
    createdAt: Date
    updatedAt: Date
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  type GetChatSessionGroupByPayload<T extends ChatSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
        }
      >
    >


  export type ChatSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    orgId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    orgId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    orgId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $ChatSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatSession"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      orgId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatSession"]>
    composites: {}
  }

  type ChatSessionGetPayload<S extends boolean | null | undefined | ChatSessionDefaultArgs> = $Result.GetResult<Prisma.$ChatSessionPayload, S>

  type ChatSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatSessionCountAggregateInputType | true
    }

  export interface ChatSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatSession'], meta: { name: 'ChatSession' } }
    /**
     * Find zero or one ChatSession that matches the filter.
     * @param {ChatSessionFindUniqueArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatSessionFindUniqueArgs>(args: SelectSubset<T, ChatSessionFindUniqueArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ChatSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChatSessionFindUniqueOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ChatSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatSessionFindFirstArgs>(args?: SelectSubset<T, ChatSessionFindFirstArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ChatSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ChatSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatSessions
     * const chatSessions = await prisma.chatSession.findMany()
     * 
     * // Get first 10 ChatSessions
     * const chatSessions = await prisma.chatSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatSessionFindManyArgs>(args?: SelectSubset<T, ChatSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ChatSession.
     * @param {ChatSessionCreateArgs} args - Arguments to create a ChatSession.
     * @example
     * // Create one ChatSession
     * const ChatSession = await prisma.chatSession.create({
     *   data: {
     *     // ... data to create a ChatSession
     *   }
     * })
     * 
     */
    create<T extends ChatSessionCreateArgs>(args: SelectSubset<T, ChatSessionCreateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ChatSessions.
     * @param {ChatSessionCreateManyArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatSessionCreateManyArgs>(args?: SelectSubset<T, ChatSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatSessions and returns the data saved in the database.
     * @param {ChatSessionCreateManyAndReturnArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ChatSession.
     * @param {ChatSessionDeleteArgs} args - Arguments to delete one ChatSession.
     * @example
     * // Delete one ChatSession
     * const ChatSession = await prisma.chatSession.delete({
     *   where: {
     *     // ... filter to delete one ChatSession
     *   }
     * })
     * 
     */
    delete<T extends ChatSessionDeleteArgs>(args: SelectSubset<T, ChatSessionDeleteArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ChatSession.
     * @param {ChatSessionUpdateArgs} args - Arguments to update one ChatSession.
     * @example
     * // Update one ChatSession
     * const chatSession = await prisma.chatSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatSessionUpdateArgs>(args: SelectSubset<T, ChatSessionUpdateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ChatSessions.
     * @param {ChatSessionDeleteManyArgs} args - Arguments to filter ChatSessions to delete.
     * @example
     * // Delete a few ChatSessions
     * const { count } = await prisma.chatSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatSessionDeleteManyArgs>(args?: SelectSubset<T, ChatSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatSessionUpdateManyArgs>(args: SelectSubset<T, ChatSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatSession.
     * @param {ChatSessionUpsertArgs} args - Arguments to update or create a ChatSession.
     * @example
     * // Update or create a ChatSession
     * const chatSession = await prisma.chatSession.upsert({
     *   create: {
     *     // ... data to create a ChatSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatSession we want to update
     *   }
     * })
     */
    upsert<T extends ChatSessionUpsertArgs>(args: SelectSubset<T, ChatSessionUpsertArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionCountArgs} args - Arguments to filter ChatSessions to count.
     * @example
     * // Count the number of ChatSessions
     * const count = await prisma.chatSession.count({
     *   where: {
     *     // ... the filter for the ChatSessions we want to count
     *   }
     * })
    **/
    count<T extends ChatSessionCountArgs>(
      args?: Subset<T, ChatSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatSessionAggregateArgs>(args: Subset<T, ChatSessionAggregateArgs>): Prisma.PrismaPromise<GetChatSessionAggregateType<T>>

    /**
     * Group by ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatSessionGroupByArgs['orderBy'] }
        : { orderBy?: ChatSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatSession model
   */
  readonly fields: ChatSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    messages<T extends ChatSession$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatSession model
   */ 
  interface ChatSessionFieldRefs {
    readonly id: FieldRef<"ChatSession", 'String'>
    readonly userId: FieldRef<"ChatSession", 'String'>
    readonly orgId: FieldRef<"ChatSession", 'String'>
    readonly createdAt: FieldRef<"ChatSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatSession findUnique
   */
  export type ChatSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findUniqueOrThrow
   */
  export type ChatSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findFirst
   */
  export type ChatSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findFirstOrThrow
   */
  export type ChatSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findMany
   */
  export type ChatSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSessions to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession create
   */
  export type ChatSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatSession.
     */
    data: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
  }

  /**
   * ChatSession createMany
   */
  export type ChatSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession createManyAndReturn
   */
  export type ChatSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession update
   */
  export type ChatSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatSession.
     */
    data: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
    /**
     * Choose, which ChatSession to update.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession updateMany
   */
  export type ChatSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
  }

  /**
   * ChatSession upsert
   */
  export type ChatSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatSession to update in case it exists.
     */
    where: ChatSessionWhereUniqueInput
    /**
     * In case the ChatSession found by the `where` argument doesn't exist, create a new ChatSession with this data.
     */
    create: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
    /**
     * In case the ChatSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
  }

  /**
   * ChatSession delete
   */
  export type ChatSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter which ChatSession to delete.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession deleteMany
   */
  export type ChatSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSessions to delete
     */
    where?: ChatSessionWhereInput
  }

  /**
   * ChatSession.messages
   */
  export type ChatSession$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatSession without action
   */
  export type ChatSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    sessionId: number
    role: number
    content: number
    sources: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    sources?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    sessionId: string
    role: string
    content: string
    sources: JsonValue
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    sources?: boolean
    createdAt?: boolean
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    sources?: boolean
    createdAt?: boolean
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    sources?: boolean
    createdAt?: boolean
  }

  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      session: Prisma.$ChatSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      role: string
      content: string
      sources: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends ChatSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatSessionDefaultArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */ 
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly sessionId: FieldRef<"ChatMessage", 'String'>
    readonly role: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly sources: FieldRef<"ChatMessage", 'Json'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    githubOrgId: 'githubOrgId',
    discordGuildId: 'discordGuildId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const OrgMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    orgId: 'orgId',
    role: 'role'
  };

  export type OrgMemberScalarFieldEnum = (typeof OrgMemberScalarFieldEnum)[keyof typeof OrgMemberScalarFieldEnum]


  export const RepositoryScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    githubId: 'githubId',
    name: 'name',
    fullName: 'fullName',
    description: 'description',
    language: 'language',
    isPrivate: 'isPrivate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RepositoryScalarFieldEnum = (typeof RepositoryScalarFieldEnum)[keyof typeof RepositoryScalarFieldEnum]


  export const DeveloperScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    githubLogin: 'githubLogin',
    githubId: 'githubId',
    name: 'name',
    avatarUrl: 'avatarUrl',
    discordUserId: 'discordUserId',
    strengths: 'strengths',
    currentLoad: 'currentLoad',
    burnoutSignal: 'burnoutSignal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeveloperScalarFieldEnum = (typeof DeveloperScalarFieldEnum)[keyof typeof DeveloperScalarFieldEnum]


  export const CommitScalarFieldEnum: {
    id: 'id',
    repoId: 'repoId',
    developerId: 'developerId',
    sha: 'sha',
    message: 'message',
    additions: 'additions',
    deletions: 'deletions',
    filesChanged: 'filesChanged',
    committedAt: 'committedAt'
  };

  export type CommitScalarFieldEnum = (typeof CommitScalarFieldEnum)[keyof typeof CommitScalarFieldEnum]


  export const PullRequestScalarFieldEnum: {
    id: 'id',
    repoId: 'repoId',
    authorId: 'authorId',
    githubId: 'githubId',
    number: 'number',
    title: 'title',
    body: 'body',
    state: 'state',
    reviewCycles: 'reviewCycles',
    additions: 'additions',
    deletions: 'deletions',
    mergedAt: 'mergedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PullRequestScalarFieldEnum = (typeof PullRequestScalarFieldEnum)[keyof typeof PullRequestScalarFieldEnum]


  export const PRFeedbackScalarFieldEnum: {
    id: 'id',
    prId: 'prId',
    feedbackType: 'feedbackType',
    content: 'content',
    sentViaDiscord: 'sentViaDiscord',
    accepted: 'accepted',
    createdAt: 'createdAt'
  };

  export type PRFeedbackScalarFieldEnum = (typeof PRFeedbackScalarFieldEnum)[keyof typeof PRFeedbackScalarFieldEnum]


  export const MeetingScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    title: 'title',
    meetingType: 'meetingType',
    transcript: 'transcript',
    summary: 'summary',
    goals: 'goals',
    blockers: 'blockers',
    decisions: 'decisions',
    occurredAt: 'occurredAt',
    createdAt: 'createdAt'
  };

  export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    meetingId: 'meetingId',
    assigneeId: 'assigneeId',
    title: 'title',
    description: 'description',
    complexity: 'complexity',
    status: 'status',
    confidence: 'confidence',
    approvedBy: 'approvedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const SprintScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    summary: 'summary',
    velocity: 'velocity',
    predictability: 'predictability',
    createdAt: 'createdAt'
  };

  export type SprintScalarFieldEnum = (typeof SprintScalarFieldEnum)[keyof typeof SprintScalarFieldEnum]


  export const EmbeddingScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    repoId: 'repoId',
    sourceType: 'sourceType',
    sourceId: 'sourceId',
    content: 'content',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type EmbeddingScalarFieldEnum = (typeof EmbeddingScalarFieldEnum)[keyof typeof EmbeddingScalarFieldEnum]


  export const ChatSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    orgId: 'orgId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatSessionScalarFieldEnum = (typeof ChatSessionScalarFieldEnum)[keyof typeof ChatSessionScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    role: 'role',
    content: 'content',
    sources: 'sources',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OrgRole'
   */
  export type EnumOrgRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrgRole'>
    


  /**
   * Reference to a field of type 'OrgRole[]'
   */
  export type ListEnumOrgRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrgRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PRState'
   */
  export type EnumPRStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PRState'>
    


  /**
   * Reference to a field of type 'PRState[]'
   */
  export type ListEnumPRStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PRState[]'>
    


  /**
   * Reference to a field of type 'MeetingType'
   */
  export type EnumMeetingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeetingType'>
    


  /**
   * Reference to a field of type 'MeetingType[]'
   */
  export type ListEnumMeetingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeetingType[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'EmbeddingSource'
   */
  export type EnumEmbeddingSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmbeddingSource'>
    


  /**
   * Reference to a field of type 'EmbeddingSource[]'
   */
  export type ListEnumEmbeddingSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmbeddingSource[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    slug?: StringFilter<"Organization"> | string
    githubOrgId?: StringNullableFilter<"Organization"> | string | null
    discordGuildId?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    members?: OrgMemberListRelationFilter
    repos?: RepositoryListRelationFilter
    developers?: DeveloperListRelationFilter
    sprints?: SprintListRelationFilter
    meetings?: MeetingListRelationFilter
    tasks?: TaskListRelationFilter
    embeddings?: EmbeddingListRelationFilter
    chatSessions?: ChatSessionListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    githubOrgId?: SortOrderInput | SortOrder
    discordGuildId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: OrgMemberOrderByRelationAggregateInput
    repos?: RepositoryOrderByRelationAggregateInput
    developers?: DeveloperOrderByRelationAggregateInput
    sprints?: SprintOrderByRelationAggregateInput
    meetings?: MeetingOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    embeddings?: EmbeddingOrderByRelationAggregateInput
    chatSessions?: ChatSessionOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    githubOrgId?: string
    discordGuildId?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    members?: OrgMemberListRelationFilter
    repos?: RepositoryListRelationFilter
    developers?: DeveloperListRelationFilter
    sprints?: SprintListRelationFilter
    meetings?: MeetingListRelationFilter
    tasks?: TaskListRelationFilter
    embeddings?: EmbeddingListRelationFilter
    chatSessions?: ChatSessionListRelationFilter
  }, "id" | "slug" | "githubOrgId" | "discordGuildId">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    githubOrgId?: SortOrderInput | SortOrder
    discordGuildId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    slug?: StringWithAggregatesFilter<"Organization"> | string
    githubOrgId?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    discordGuildId?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type OrgMemberWhereInput = {
    AND?: OrgMemberWhereInput | OrgMemberWhereInput[]
    OR?: OrgMemberWhereInput[]
    NOT?: OrgMemberWhereInput | OrgMemberWhereInput[]
    id?: StringFilter<"OrgMember"> | string
    userId?: StringFilter<"OrgMember"> | string
    orgId?: StringFilter<"OrgMember"> | string
    role?: EnumOrgRoleFilter<"OrgMember"> | $Enums.OrgRole
    org?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
  }

  export type OrgMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    role?: SortOrder
    org?: OrganizationOrderByWithRelationInput
  }

  export type OrgMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_orgId?: OrgMemberUserIdOrgIdCompoundUniqueInput
    AND?: OrgMemberWhereInput | OrgMemberWhereInput[]
    OR?: OrgMemberWhereInput[]
    NOT?: OrgMemberWhereInput | OrgMemberWhereInput[]
    userId?: StringFilter<"OrgMember"> | string
    orgId?: StringFilter<"OrgMember"> | string
    role?: EnumOrgRoleFilter<"OrgMember"> | $Enums.OrgRole
    org?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
  }, "id" | "userId_orgId">

  export type OrgMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    role?: SortOrder
    _count?: OrgMemberCountOrderByAggregateInput
    _max?: OrgMemberMaxOrderByAggregateInput
    _min?: OrgMemberMinOrderByAggregateInput
  }

  export type OrgMemberScalarWhereWithAggregatesInput = {
    AND?: OrgMemberScalarWhereWithAggregatesInput | OrgMemberScalarWhereWithAggregatesInput[]
    OR?: OrgMemberScalarWhereWithAggregatesInput[]
    NOT?: OrgMemberScalarWhereWithAggregatesInput | OrgMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrgMember"> | string
    userId?: StringWithAggregatesFilter<"OrgMember"> | string
    orgId?: StringWithAggregatesFilter<"OrgMember"> | string
    role?: EnumOrgRoleWithAggregatesFilter<"OrgMember"> | $Enums.OrgRole
  }

  export type RepositoryWhereInput = {
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    id?: StringFilter<"Repository"> | string
    orgId?: StringFilter<"Repository"> | string
    githubId?: IntFilter<"Repository"> | number
    name?: StringFilter<"Repository"> | string
    fullName?: StringFilter<"Repository"> | string
    description?: StringNullableFilter<"Repository"> | string | null
    language?: StringNullableFilter<"Repository"> | string | null
    isPrivate?: BoolFilter<"Repository"> | boolean
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    updatedAt?: DateTimeFilter<"Repository"> | Date | string
    org?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    commits?: CommitListRelationFilter
    pullRequests?: PullRequestListRelationFilter
    embeddings?: EmbeddingListRelationFilter
  }

  export type RepositoryOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    githubId?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    description?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    org?: OrganizationOrderByWithRelationInput
    commits?: CommitOrderByRelationAggregateInput
    pullRequests?: PullRequestOrderByRelationAggregateInput
    embeddings?: EmbeddingOrderByRelationAggregateInput
  }

  export type RepositoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    githubId?: number
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    orgId?: StringFilter<"Repository"> | string
    name?: StringFilter<"Repository"> | string
    fullName?: StringFilter<"Repository"> | string
    description?: StringNullableFilter<"Repository"> | string | null
    language?: StringNullableFilter<"Repository"> | string | null
    isPrivate?: BoolFilter<"Repository"> | boolean
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    updatedAt?: DateTimeFilter<"Repository"> | Date | string
    org?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    commits?: CommitListRelationFilter
    pullRequests?: PullRequestListRelationFilter
    embeddings?: EmbeddingListRelationFilter
  }, "id" | "githubId">

  export type RepositoryOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    githubId?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    description?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RepositoryCountOrderByAggregateInput
    _avg?: RepositoryAvgOrderByAggregateInput
    _max?: RepositoryMaxOrderByAggregateInput
    _min?: RepositoryMinOrderByAggregateInput
    _sum?: RepositorySumOrderByAggregateInput
  }

  export type RepositoryScalarWhereWithAggregatesInput = {
    AND?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    OR?: RepositoryScalarWhereWithAggregatesInput[]
    NOT?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Repository"> | string
    orgId?: StringWithAggregatesFilter<"Repository"> | string
    githubId?: IntWithAggregatesFilter<"Repository"> | number
    name?: StringWithAggregatesFilter<"Repository"> | string
    fullName?: StringWithAggregatesFilter<"Repository"> | string
    description?: StringNullableWithAggregatesFilter<"Repository"> | string | null
    language?: StringNullableWithAggregatesFilter<"Repository"> | string | null
    isPrivate?: BoolWithAggregatesFilter<"Repository"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Repository"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Repository"> | Date | string
  }

  export type DeveloperWhereInput = {
    AND?: DeveloperWhereInput | DeveloperWhereInput[]
    OR?: DeveloperWhereInput[]
    NOT?: DeveloperWhereInput | DeveloperWhereInput[]
    id?: StringFilter<"Developer"> | string
    orgId?: StringFilter<"Developer"> | string
    githubLogin?: StringFilter<"Developer"> | string
    githubId?: IntFilter<"Developer"> | number
    name?: StringNullableFilter<"Developer"> | string | null
    avatarUrl?: StringNullableFilter<"Developer"> | string | null
    discordUserId?: StringNullableFilter<"Developer"> | string | null
    strengths?: StringNullableListFilter<"Developer">
    currentLoad?: IntFilter<"Developer"> | number
    burnoutSignal?: FloatFilter<"Developer"> | number
    createdAt?: DateTimeFilter<"Developer"> | Date | string
    updatedAt?: DateTimeFilter<"Developer"> | Date | string
    org?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    commits?: CommitListRelationFilter
    pullRequests?: PullRequestListRelationFilter
    taskAssignments?: TaskListRelationFilter
  }

  export type DeveloperOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    githubLogin?: SortOrder
    githubId?: SortOrder
    name?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    discordUserId?: SortOrderInput | SortOrder
    strengths?: SortOrder
    currentLoad?: SortOrder
    burnoutSignal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    org?: OrganizationOrderByWithRelationInput
    commits?: CommitOrderByRelationAggregateInput
    pullRequests?: PullRequestOrderByRelationAggregateInput
    taskAssignments?: TaskOrderByRelationAggregateInput
  }

  export type DeveloperWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orgId_githubLogin?: DeveloperOrgIdGithubLoginCompoundUniqueInput
    AND?: DeveloperWhereInput | DeveloperWhereInput[]
    OR?: DeveloperWhereInput[]
    NOT?: DeveloperWhereInput | DeveloperWhereInput[]
    orgId?: StringFilter<"Developer"> | string
    githubLogin?: StringFilter<"Developer"> | string
    githubId?: IntFilter<"Developer"> | number
    name?: StringNullableFilter<"Developer"> | string | null
    avatarUrl?: StringNullableFilter<"Developer"> | string | null
    discordUserId?: StringNullableFilter<"Developer"> | string | null
    strengths?: StringNullableListFilter<"Developer">
    currentLoad?: IntFilter<"Developer"> | number
    burnoutSignal?: FloatFilter<"Developer"> | number
    createdAt?: DateTimeFilter<"Developer"> | Date | string
    updatedAt?: DateTimeFilter<"Developer"> | Date | string
    org?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    commits?: CommitListRelationFilter
    pullRequests?: PullRequestListRelationFilter
    taskAssignments?: TaskListRelationFilter
  }, "id" | "orgId_githubLogin">

  export type DeveloperOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    githubLogin?: SortOrder
    githubId?: SortOrder
    name?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    discordUserId?: SortOrderInput | SortOrder
    strengths?: SortOrder
    currentLoad?: SortOrder
    burnoutSignal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeveloperCountOrderByAggregateInput
    _avg?: DeveloperAvgOrderByAggregateInput
    _max?: DeveloperMaxOrderByAggregateInput
    _min?: DeveloperMinOrderByAggregateInput
    _sum?: DeveloperSumOrderByAggregateInput
  }

  export type DeveloperScalarWhereWithAggregatesInput = {
    AND?: DeveloperScalarWhereWithAggregatesInput | DeveloperScalarWhereWithAggregatesInput[]
    OR?: DeveloperScalarWhereWithAggregatesInput[]
    NOT?: DeveloperScalarWhereWithAggregatesInput | DeveloperScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Developer"> | string
    orgId?: StringWithAggregatesFilter<"Developer"> | string
    githubLogin?: StringWithAggregatesFilter<"Developer"> | string
    githubId?: IntWithAggregatesFilter<"Developer"> | number
    name?: StringNullableWithAggregatesFilter<"Developer"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Developer"> | string | null
    discordUserId?: StringNullableWithAggregatesFilter<"Developer"> | string | null
    strengths?: StringNullableListFilter<"Developer">
    currentLoad?: IntWithAggregatesFilter<"Developer"> | number
    burnoutSignal?: FloatWithAggregatesFilter<"Developer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Developer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Developer"> | Date | string
  }

  export type CommitWhereInput = {
    AND?: CommitWhereInput | CommitWhereInput[]
    OR?: CommitWhereInput[]
    NOT?: CommitWhereInput | CommitWhereInput[]
    id?: StringFilter<"Commit"> | string
    repoId?: StringFilter<"Commit"> | string
    developerId?: StringFilter<"Commit"> | string
    sha?: StringFilter<"Commit"> | string
    message?: StringFilter<"Commit"> | string
    additions?: IntFilter<"Commit"> | number
    deletions?: IntFilter<"Commit"> | number
    filesChanged?: IntFilter<"Commit"> | number
    committedAt?: DateTimeFilter<"Commit"> | Date | string
    repo?: XOR<RepositoryRelationFilter, RepositoryWhereInput>
    developer?: XOR<DeveloperRelationFilter, DeveloperWhereInput>
  }

  export type CommitOrderByWithRelationInput = {
    id?: SortOrder
    repoId?: SortOrder
    developerId?: SortOrder
    sha?: SortOrder
    message?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    filesChanged?: SortOrder
    committedAt?: SortOrder
    repo?: RepositoryOrderByWithRelationInput
    developer?: DeveloperOrderByWithRelationInput
  }

  export type CommitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sha?: string
    AND?: CommitWhereInput | CommitWhereInput[]
    OR?: CommitWhereInput[]
    NOT?: CommitWhereInput | CommitWhereInput[]
    repoId?: StringFilter<"Commit"> | string
    developerId?: StringFilter<"Commit"> | string
    message?: StringFilter<"Commit"> | string
    additions?: IntFilter<"Commit"> | number
    deletions?: IntFilter<"Commit"> | number
    filesChanged?: IntFilter<"Commit"> | number
    committedAt?: DateTimeFilter<"Commit"> | Date | string
    repo?: XOR<RepositoryRelationFilter, RepositoryWhereInput>
    developer?: XOR<DeveloperRelationFilter, DeveloperWhereInput>
  }, "id" | "sha">

  export type CommitOrderByWithAggregationInput = {
    id?: SortOrder
    repoId?: SortOrder
    developerId?: SortOrder
    sha?: SortOrder
    message?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    filesChanged?: SortOrder
    committedAt?: SortOrder
    _count?: CommitCountOrderByAggregateInput
    _avg?: CommitAvgOrderByAggregateInput
    _max?: CommitMaxOrderByAggregateInput
    _min?: CommitMinOrderByAggregateInput
    _sum?: CommitSumOrderByAggregateInput
  }

  export type CommitScalarWhereWithAggregatesInput = {
    AND?: CommitScalarWhereWithAggregatesInput | CommitScalarWhereWithAggregatesInput[]
    OR?: CommitScalarWhereWithAggregatesInput[]
    NOT?: CommitScalarWhereWithAggregatesInput | CommitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Commit"> | string
    repoId?: StringWithAggregatesFilter<"Commit"> | string
    developerId?: StringWithAggregatesFilter<"Commit"> | string
    sha?: StringWithAggregatesFilter<"Commit"> | string
    message?: StringWithAggregatesFilter<"Commit"> | string
    additions?: IntWithAggregatesFilter<"Commit"> | number
    deletions?: IntWithAggregatesFilter<"Commit"> | number
    filesChanged?: IntWithAggregatesFilter<"Commit"> | number
    committedAt?: DateTimeWithAggregatesFilter<"Commit"> | Date | string
  }

  export type PullRequestWhereInput = {
    AND?: PullRequestWhereInput | PullRequestWhereInput[]
    OR?: PullRequestWhereInput[]
    NOT?: PullRequestWhereInput | PullRequestWhereInput[]
    id?: StringFilter<"PullRequest"> | string
    repoId?: StringFilter<"PullRequest"> | string
    authorId?: StringFilter<"PullRequest"> | string
    githubId?: IntFilter<"PullRequest"> | number
    number?: IntFilter<"PullRequest"> | number
    title?: StringFilter<"PullRequest"> | string
    body?: StringNullableFilter<"PullRequest"> | string | null
    state?: EnumPRStateFilter<"PullRequest"> | $Enums.PRState
    reviewCycles?: IntFilter<"PullRequest"> | number
    additions?: IntFilter<"PullRequest"> | number
    deletions?: IntFilter<"PullRequest"> | number
    mergedAt?: DateTimeNullableFilter<"PullRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"PullRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PullRequest"> | Date | string
    repo?: XOR<RepositoryRelationFilter, RepositoryWhereInput>
    author?: XOR<DeveloperRelationFilter, DeveloperWhereInput>
    feedbackSent?: PRFeedbackListRelationFilter
  }

  export type PullRequestOrderByWithRelationInput = {
    id?: SortOrder
    repoId?: SortOrder
    authorId?: SortOrder
    githubId?: SortOrder
    number?: SortOrder
    title?: SortOrder
    body?: SortOrderInput | SortOrder
    state?: SortOrder
    reviewCycles?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    mergedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    repo?: RepositoryOrderByWithRelationInput
    author?: DeveloperOrderByWithRelationInput
    feedbackSent?: PRFeedbackOrderByRelationAggregateInput
  }

  export type PullRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PullRequestWhereInput | PullRequestWhereInput[]
    OR?: PullRequestWhereInput[]
    NOT?: PullRequestWhereInput | PullRequestWhereInput[]
    repoId?: StringFilter<"PullRequest"> | string
    authorId?: StringFilter<"PullRequest"> | string
    githubId?: IntFilter<"PullRequest"> | number
    number?: IntFilter<"PullRequest"> | number
    title?: StringFilter<"PullRequest"> | string
    body?: StringNullableFilter<"PullRequest"> | string | null
    state?: EnumPRStateFilter<"PullRequest"> | $Enums.PRState
    reviewCycles?: IntFilter<"PullRequest"> | number
    additions?: IntFilter<"PullRequest"> | number
    deletions?: IntFilter<"PullRequest"> | number
    mergedAt?: DateTimeNullableFilter<"PullRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"PullRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PullRequest"> | Date | string
    repo?: XOR<RepositoryRelationFilter, RepositoryWhereInput>
    author?: XOR<DeveloperRelationFilter, DeveloperWhereInput>
    feedbackSent?: PRFeedbackListRelationFilter
  }, "id">

  export type PullRequestOrderByWithAggregationInput = {
    id?: SortOrder
    repoId?: SortOrder
    authorId?: SortOrder
    githubId?: SortOrder
    number?: SortOrder
    title?: SortOrder
    body?: SortOrderInput | SortOrder
    state?: SortOrder
    reviewCycles?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    mergedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PullRequestCountOrderByAggregateInput
    _avg?: PullRequestAvgOrderByAggregateInput
    _max?: PullRequestMaxOrderByAggregateInput
    _min?: PullRequestMinOrderByAggregateInput
    _sum?: PullRequestSumOrderByAggregateInput
  }

  export type PullRequestScalarWhereWithAggregatesInput = {
    AND?: PullRequestScalarWhereWithAggregatesInput | PullRequestScalarWhereWithAggregatesInput[]
    OR?: PullRequestScalarWhereWithAggregatesInput[]
    NOT?: PullRequestScalarWhereWithAggregatesInput | PullRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PullRequest"> | string
    repoId?: StringWithAggregatesFilter<"PullRequest"> | string
    authorId?: StringWithAggregatesFilter<"PullRequest"> | string
    githubId?: IntWithAggregatesFilter<"PullRequest"> | number
    number?: IntWithAggregatesFilter<"PullRequest"> | number
    title?: StringWithAggregatesFilter<"PullRequest"> | string
    body?: StringNullableWithAggregatesFilter<"PullRequest"> | string | null
    state?: EnumPRStateWithAggregatesFilter<"PullRequest"> | $Enums.PRState
    reviewCycles?: IntWithAggregatesFilter<"PullRequest"> | number
    additions?: IntWithAggregatesFilter<"PullRequest"> | number
    deletions?: IntWithAggregatesFilter<"PullRequest"> | number
    mergedAt?: DateTimeNullableWithAggregatesFilter<"PullRequest"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PullRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PullRequest"> | Date | string
  }

  export type PRFeedbackWhereInput = {
    AND?: PRFeedbackWhereInput | PRFeedbackWhereInput[]
    OR?: PRFeedbackWhereInput[]
    NOT?: PRFeedbackWhereInput | PRFeedbackWhereInput[]
    id?: StringFilter<"PRFeedback"> | string
    prId?: StringFilter<"PRFeedback"> | string
    feedbackType?: StringFilter<"PRFeedback"> | string
    content?: StringFilter<"PRFeedback"> | string
    sentViaDiscord?: BoolFilter<"PRFeedback"> | boolean
    accepted?: BoolNullableFilter<"PRFeedback"> | boolean | null
    createdAt?: DateTimeFilter<"PRFeedback"> | Date | string
    pr?: XOR<PullRequestRelationFilter, PullRequestWhereInput>
  }

  export type PRFeedbackOrderByWithRelationInput = {
    id?: SortOrder
    prId?: SortOrder
    feedbackType?: SortOrder
    content?: SortOrder
    sentViaDiscord?: SortOrder
    accepted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    pr?: PullRequestOrderByWithRelationInput
  }

  export type PRFeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PRFeedbackWhereInput | PRFeedbackWhereInput[]
    OR?: PRFeedbackWhereInput[]
    NOT?: PRFeedbackWhereInput | PRFeedbackWhereInput[]
    prId?: StringFilter<"PRFeedback"> | string
    feedbackType?: StringFilter<"PRFeedback"> | string
    content?: StringFilter<"PRFeedback"> | string
    sentViaDiscord?: BoolFilter<"PRFeedback"> | boolean
    accepted?: BoolNullableFilter<"PRFeedback"> | boolean | null
    createdAt?: DateTimeFilter<"PRFeedback"> | Date | string
    pr?: XOR<PullRequestRelationFilter, PullRequestWhereInput>
  }, "id">

  export type PRFeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    prId?: SortOrder
    feedbackType?: SortOrder
    content?: SortOrder
    sentViaDiscord?: SortOrder
    accepted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PRFeedbackCountOrderByAggregateInput
    _max?: PRFeedbackMaxOrderByAggregateInput
    _min?: PRFeedbackMinOrderByAggregateInput
  }

  export type PRFeedbackScalarWhereWithAggregatesInput = {
    AND?: PRFeedbackScalarWhereWithAggregatesInput | PRFeedbackScalarWhereWithAggregatesInput[]
    OR?: PRFeedbackScalarWhereWithAggregatesInput[]
    NOT?: PRFeedbackScalarWhereWithAggregatesInput | PRFeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PRFeedback"> | string
    prId?: StringWithAggregatesFilter<"PRFeedback"> | string
    feedbackType?: StringWithAggregatesFilter<"PRFeedback"> | string
    content?: StringWithAggregatesFilter<"PRFeedback"> | string
    sentViaDiscord?: BoolWithAggregatesFilter<"PRFeedback"> | boolean
    accepted?: BoolNullableWithAggregatesFilter<"PRFeedback"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"PRFeedback"> | Date | string
  }

  export type MeetingWhereInput = {
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    id?: StringFilter<"Meeting"> | string
    orgId?: StringFilter<"Meeting"> | string
    title?: StringFilter<"Meeting"> | string
    meetingType?: EnumMeetingTypeFilter<"Meeting"> | $Enums.MeetingType
    transcript?: StringNullableFilter<"Meeting"> | string | null
    summary?: StringNullableFilter<"Meeting"> | string | null
    goals?: StringNullableListFilter<"Meeting">
    blockers?: StringNullableListFilter<"Meeting">
    decisions?: StringNullableListFilter<"Meeting">
    occurredAt?: DateTimeFilter<"Meeting"> | Date | string
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    org?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type MeetingOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    title?: SortOrder
    meetingType?: SortOrder
    transcript?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    goals?: SortOrder
    blockers?: SortOrder
    decisions?: SortOrder
    occurredAt?: SortOrder
    createdAt?: SortOrder
    org?: OrganizationOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type MeetingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    orgId?: StringFilter<"Meeting"> | string
    title?: StringFilter<"Meeting"> | string
    meetingType?: EnumMeetingTypeFilter<"Meeting"> | $Enums.MeetingType
    transcript?: StringNullableFilter<"Meeting"> | string | null
    summary?: StringNullableFilter<"Meeting"> | string | null
    goals?: StringNullableListFilter<"Meeting">
    blockers?: StringNullableListFilter<"Meeting">
    decisions?: StringNullableListFilter<"Meeting">
    occurredAt?: DateTimeFilter<"Meeting"> | Date | string
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    org?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    tasks?: TaskListRelationFilter
  }, "id">

  export type MeetingOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    title?: SortOrder
    meetingType?: SortOrder
    transcript?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    goals?: SortOrder
    blockers?: SortOrder
    decisions?: SortOrder
    occurredAt?: SortOrder
    createdAt?: SortOrder
    _count?: MeetingCountOrderByAggregateInput
    _max?: MeetingMaxOrderByAggregateInput
    _min?: MeetingMinOrderByAggregateInput
  }

  export type MeetingScalarWhereWithAggregatesInput = {
    AND?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    OR?: MeetingScalarWhereWithAggregatesInput[]
    NOT?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meeting"> | string
    orgId?: StringWithAggregatesFilter<"Meeting"> | string
    title?: StringWithAggregatesFilter<"Meeting"> | string
    meetingType?: EnumMeetingTypeWithAggregatesFilter<"Meeting"> | $Enums.MeetingType
    transcript?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    summary?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    goals?: StringNullableListFilter<"Meeting">
    blockers?: StringNullableListFilter<"Meeting">
    decisions?: StringNullableListFilter<"Meeting">
    occurredAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    orgId?: StringFilter<"Task"> | string
    meetingId?: StringNullableFilter<"Task"> | string | null
    assigneeId?: StringNullableFilter<"Task"> | string | null
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    complexity?: IntFilter<"Task"> | number
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    confidence?: FloatFilter<"Task"> | number
    approvedBy?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    org?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    meeting?: XOR<MeetingNullableRelationFilter, MeetingWhereInput> | null
    assignee?: XOR<DeveloperNullableRelationFilter, DeveloperWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    meetingId?: SortOrderInput | SortOrder
    assigneeId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    complexity?: SortOrder
    status?: SortOrder
    confidence?: SortOrder
    approvedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    org?: OrganizationOrderByWithRelationInput
    meeting?: MeetingOrderByWithRelationInput
    assignee?: DeveloperOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    orgId?: StringFilter<"Task"> | string
    meetingId?: StringNullableFilter<"Task"> | string | null
    assigneeId?: StringNullableFilter<"Task"> | string | null
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    complexity?: IntFilter<"Task"> | number
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    confidence?: FloatFilter<"Task"> | number
    approvedBy?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    org?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    meeting?: XOR<MeetingNullableRelationFilter, MeetingWhereInput> | null
    assignee?: XOR<DeveloperNullableRelationFilter, DeveloperWhereInput> | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    meetingId?: SortOrderInput | SortOrder
    assigneeId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    complexity?: SortOrder
    status?: SortOrder
    confidence?: SortOrder
    approvedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    orgId?: StringWithAggregatesFilter<"Task"> | string
    meetingId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    assigneeId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    complexity?: IntWithAggregatesFilter<"Task"> | number
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    confidence?: FloatWithAggregatesFilter<"Task"> | number
    approvedBy?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type SprintWhereInput = {
    AND?: SprintWhereInput | SprintWhereInput[]
    OR?: SprintWhereInput[]
    NOT?: SprintWhereInput | SprintWhereInput[]
    id?: StringFilter<"Sprint"> | string
    orgId?: StringFilter<"Sprint"> | string
    name?: StringFilter<"Sprint"> | string
    startDate?: DateTimeFilter<"Sprint"> | Date | string
    endDate?: DateTimeFilter<"Sprint"> | Date | string
    summary?: StringNullableFilter<"Sprint"> | string | null
    velocity?: FloatNullableFilter<"Sprint"> | number | null
    predictability?: FloatNullableFilter<"Sprint"> | number | null
    createdAt?: DateTimeFilter<"Sprint"> | Date | string
    org?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
  }

  export type SprintOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    summary?: SortOrderInput | SortOrder
    velocity?: SortOrderInput | SortOrder
    predictability?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    org?: OrganizationOrderByWithRelationInput
  }

  export type SprintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SprintWhereInput | SprintWhereInput[]
    OR?: SprintWhereInput[]
    NOT?: SprintWhereInput | SprintWhereInput[]
    orgId?: StringFilter<"Sprint"> | string
    name?: StringFilter<"Sprint"> | string
    startDate?: DateTimeFilter<"Sprint"> | Date | string
    endDate?: DateTimeFilter<"Sprint"> | Date | string
    summary?: StringNullableFilter<"Sprint"> | string | null
    velocity?: FloatNullableFilter<"Sprint"> | number | null
    predictability?: FloatNullableFilter<"Sprint"> | number | null
    createdAt?: DateTimeFilter<"Sprint"> | Date | string
    org?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
  }, "id">

  export type SprintOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    summary?: SortOrderInput | SortOrder
    velocity?: SortOrderInput | SortOrder
    predictability?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SprintCountOrderByAggregateInput
    _avg?: SprintAvgOrderByAggregateInput
    _max?: SprintMaxOrderByAggregateInput
    _min?: SprintMinOrderByAggregateInput
    _sum?: SprintSumOrderByAggregateInput
  }

  export type SprintScalarWhereWithAggregatesInput = {
    AND?: SprintScalarWhereWithAggregatesInput | SprintScalarWhereWithAggregatesInput[]
    OR?: SprintScalarWhereWithAggregatesInput[]
    NOT?: SprintScalarWhereWithAggregatesInput | SprintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sprint"> | string
    orgId?: StringWithAggregatesFilter<"Sprint"> | string
    name?: StringWithAggregatesFilter<"Sprint"> | string
    startDate?: DateTimeWithAggregatesFilter<"Sprint"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Sprint"> | Date | string
    summary?: StringNullableWithAggregatesFilter<"Sprint"> | string | null
    velocity?: FloatNullableWithAggregatesFilter<"Sprint"> | number | null
    predictability?: FloatNullableWithAggregatesFilter<"Sprint"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Sprint"> | Date | string
  }

  export type EmbeddingWhereInput = {
    AND?: EmbeddingWhereInput | EmbeddingWhereInput[]
    OR?: EmbeddingWhereInput[]
    NOT?: EmbeddingWhereInput | EmbeddingWhereInput[]
    id?: StringFilter<"Embedding"> | string
    orgId?: StringFilter<"Embedding"> | string
    repoId?: StringNullableFilter<"Embedding"> | string | null
    sourceType?: EnumEmbeddingSourceFilter<"Embedding"> | $Enums.EmbeddingSource
    sourceId?: StringFilter<"Embedding"> | string
    content?: StringFilter<"Embedding"> | string
    metadata?: JsonFilter<"Embedding">
    createdAt?: DateTimeFilter<"Embedding"> | Date | string
    org?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    repo?: XOR<RepositoryNullableRelationFilter, RepositoryWhereInput> | null
  }

  export type EmbeddingOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    repoId?: SortOrderInput | SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    content?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    org?: OrganizationOrderByWithRelationInput
    repo?: RepositoryOrderByWithRelationInput
  }

  export type EmbeddingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmbeddingWhereInput | EmbeddingWhereInput[]
    OR?: EmbeddingWhereInput[]
    NOT?: EmbeddingWhereInput | EmbeddingWhereInput[]
    orgId?: StringFilter<"Embedding"> | string
    repoId?: StringNullableFilter<"Embedding"> | string | null
    sourceType?: EnumEmbeddingSourceFilter<"Embedding"> | $Enums.EmbeddingSource
    sourceId?: StringFilter<"Embedding"> | string
    content?: StringFilter<"Embedding"> | string
    metadata?: JsonFilter<"Embedding">
    createdAt?: DateTimeFilter<"Embedding"> | Date | string
    org?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    repo?: XOR<RepositoryNullableRelationFilter, RepositoryWhereInput> | null
  }, "id">

  export type EmbeddingOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    repoId?: SortOrderInput | SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    content?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    _count?: EmbeddingCountOrderByAggregateInput
    _max?: EmbeddingMaxOrderByAggregateInput
    _min?: EmbeddingMinOrderByAggregateInput
  }

  export type EmbeddingScalarWhereWithAggregatesInput = {
    AND?: EmbeddingScalarWhereWithAggregatesInput | EmbeddingScalarWhereWithAggregatesInput[]
    OR?: EmbeddingScalarWhereWithAggregatesInput[]
    NOT?: EmbeddingScalarWhereWithAggregatesInput | EmbeddingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Embedding"> | string
    orgId?: StringWithAggregatesFilter<"Embedding"> | string
    repoId?: StringNullableWithAggregatesFilter<"Embedding"> | string | null
    sourceType?: EnumEmbeddingSourceWithAggregatesFilter<"Embedding"> | $Enums.EmbeddingSource
    sourceId?: StringWithAggregatesFilter<"Embedding"> | string
    content?: StringWithAggregatesFilter<"Embedding"> | string
    metadata?: JsonWithAggregatesFilter<"Embedding">
    createdAt?: DateTimeWithAggregatesFilter<"Embedding"> | Date | string
  }

  export type ChatSessionWhereInput = {
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    userId?: StringFilter<"ChatSession"> | string
    orgId?: StringFilter<"ChatSession"> | string
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
    org?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    messages?: ChatMessageListRelationFilter
  }

  export type ChatSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    org?: OrganizationOrderByWithRelationInput
    messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    userId?: StringFilter<"ChatSession"> | string
    orgId?: StringFilter<"ChatSession"> | string
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
    org?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    messages?: ChatMessageListRelationFilter
  }, "id">

  export type ChatSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatSessionCountOrderByAggregateInput
    _max?: ChatSessionMaxOrderByAggregateInput
    _min?: ChatSessionMinOrderByAggregateInput
  }

  export type ChatSessionScalarWhereWithAggregatesInput = {
    AND?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    OR?: ChatSessionScalarWhereWithAggregatesInput[]
    NOT?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatSession"> | string
    userId?: StringWithAggregatesFilter<"ChatSession"> | string
    orgId?: StringWithAggregatesFilter<"ChatSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    sessionId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    sources?: JsonFilter<"ChatMessage">
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    session?: XOR<ChatSessionRelationFilter, ChatSessionWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    sources?: SortOrder
    createdAt?: SortOrder
    session?: ChatSessionOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    sessionId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    sources?: JsonFilter<"ChatMessage">
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    session?: XOR<ChatSessionRelationFilter, ChatSessionWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    sources?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    sessionId?: StringWithAggregatesFilter<"ChatMessage"> | string
    role?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    sources?: JsonWithAggregatesFilter<"ChatMessage">
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrgMemberCreateNestedManyWithoutOrgInput
    repos?: RepositoryCreateNestedManyWithoutOrgInput
    developers?: DeveloperCreateNestedManyWithoutOrgInput
    sprints?: SprintCreateNestedManyWithoutOrgInput
    meetings?: MeetingCreateNestedManyWithoutOrgInput
    tasks?: TaskCreateNestedManyWithoutOrgInput
    embeddings?: EmbeddingCreateNestedManyWithoutOrgInput
    chatSessions?: ChatSessionCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrgMemberUncheckedCreateNestedManyWithoutOrgInput
    repos?: RepositoryUncheckedCreateNestedManyWithoutOrgInput
    developers?: DeveloperUncheckedCreateNestedManyWithoutOrgInput
    sprints?: SprintUncheckedCreateNestedManyWithoutOrgInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutOrgInput
    tasks?: TaskUncheckedCreateNestedManyWithoutOrgInput
    embeddings?: EmbeddingUncheckedCreateNestedManyWithoutOrgInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrgMemberUpdateManyWithoutOrgNestedInput
    repos?: RepositoryUpdateManyWithoutOrgNestedInput
    developers?: DeveloperUpdateManyWithoutOrgNestedInput
    sprints?: SprintUpdateManyWithoutOrgNestedInput
    meetings?: MeetingUpdateManyWithoutOrgNestedInput
    tasks?: TaskUpdateManyWithoutOrgNestedInput
    embeddings?: EmbeddingUpdateManyWithoutOrgNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrgMemberUncheckedUpdateManyWithoutOrgNestedInput
    repos?: RepositoryUncheckedUpdateManyWithoutOrgNestedInput
    developers?: DeveloperUncheckedUpdateManyWithoutOrgNestedInput
    sprints?: SprintUncheckedUpdateManyWithoutOrgNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutOrgNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutOrgNestedInput
    embeddings?: EmbeddingUncheckedUpdateManyWithoutOrgNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgMemberCreateInput = {
    id?: string
    userId: string
    role?: $Enums.OrgRole
    org: OrganizationCreateNestedOneWithoutMembersInput
  }

  export type OrgMemberUncheckedCreateInput = {
    id?: string
    userId: string
    orgId: string
    role?: $Enums.OrgRole
  }

  export type OrgMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    org?: OrganizationUpdateOneRequiredWithoutMembersNestedInput
  }

  export type OrgMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
  }

  export type OrgMemberCreateManyInput = {
    id?: string
    userId: string
    orgId: string
    role?: $Enums.OrgRole
  }

  export type OrgMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
  }

  export type OrgMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
  }

  export type RepositoryCreateInput = {
    id?: string
    githubId: number
    name: string
    fullName: string
    description?: string | null
    language?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrganizationCreateNestedOneWithoutReposInput
    commits?: CommitCreateNestedManyWithoutRepoInput
    pullRequests?: PullRequestCreateNestedManyWithoutRepoInput
    embeddings?: EmbeddingCreateNestedManyWithoutRepoInput
  }

  export type RepositoryUncheckedCreateInput = {
    id?: string
    orgId: string
    githubId: number
    name: string
    fullName: string
    description?: string | null
    language?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    commits?: CommitUncheckedCreateNestedManyWithoutRepoInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutRepoInput
    embeddings?: EmbeddingUncheckedCreateNestedManyWithoutRepoInput
  }

  export type RepositoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutReposNestedInput
    commits?: CommitUpdateManyWithoutRepoNestedInput
    pullRequests?: PullRequestUpdateManyWithoutRepoNestedInput
    embeddings?: EmbeddingUpdateManyWithoutRepoNestedInput
  }

  export type RepositoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commits?: CommitUncheckedUpdateManyWithoutRepoNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutRepoNestedInput
    embeddings?: EmbeddingUncheckedUpdateManyWithoutRepoNestedInput
  }

  export type RepositoryCreateManyInput = {
    id?: string
    orgId: string
    githubId: number
    name: string
    fullName: string
    description?: string | null
    language?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepositoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepositoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeveloperCreateInput = {
    id?: string
    githubLogin: string
    githubId: number
    name?: string | null
    avatarUrl?: string | null
    discordUserId?: string | null
    strengths?: DeveloperCreatestrengthsInput | string[]
    currentLoad?: number
    burnoutSignal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrganizationCreateNestedOneWithoutDevelopersInput
    commits?: CommitCreateNestedManyWithoutDeveloperInput
    pullRequests?: PullRequestCreateNestedManyWithoutAuthorInput
    taskAssignments?: TaskCreateNestedManyWithoutAssigneeInput
  }

  export type DeveloperUncheckedCreateInput = {
    id?: string
    orgId: string
    githubLogin: string
    githubId: number
    name?: string | null
    avatarUrl?: string | null
    discordUserId?: string | null
    strengths?: DeveloperCreatestrengthsInput | string[]
    currentLoad?: number
    burnoutSignal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commits?: CommitUncheckedCreateNestedManyWithoutDeveloperInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutAuthorInput
    taskAssignments?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
  }

  export type DeveloperUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubLogin?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: DeveloperUpdatestrengthsInput | string[]
    currentLoad?: IntFieldUpdateOperationsInput | number
    burnoutSignal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutDevelopersNestedInput
    commits?: CommitUpdateManyWithoutDeveloperNestedInput
    pullRequests?: PullRequestUpdateManyWithoutAuthorNestedInput
    taskAssignments?: TaskUpdateManyWithoutAssigneeNestedInput
  }

  export type DeveloperUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    githubLogin?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: DeveloperUpdatestrengthsInput | string[]
    currentLoad?: IntFieldUpdateOperationsInput | number
    burnoutSignal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commits?: CommitUncheckedUpdateManyWithoutDeveloperNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutAuthorNestedInput
    taskAssignments?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
  }

  export type DeveloperCreateManyInput = {
    id?: string
    orgId: string
    githubLogin: string
    githubId: number
    name?: string | null
    avatarUrl?: string | null
    discordUserId?: string | null
    strengths?: DeveloperCreatestrengthsInput | string[]
    currentLoad?: number
    burnoutSignal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeveloperUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubLogin?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: DeveloperUpdatestrengthsInput | string[]
    currentLoad?: IntFieldUpdateOperationsInput | number
    burnoutSignal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeveloperUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    githubLogin?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: DeveloperUpdatestrengthsInput | string[]
    currentLoad?: IntFieldUpdateOperationsInput | number
    burnoutSignal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitCreateInput = {
    id?: string
    sha: string
    message: string
    additions?: number
    deletions?: number
    filesChanged?: number
    committedAt: Date | string
    repo: RepositoryCreateNestedOneWithoutCommitsInput
    developer: DeveloperCreateNestedOneWithoutCommitsInput
  }

  export type CommitUncheckedCreateInput = {
    id?: string
    repoId: string
    developerId: string
    sha: string
    message: string
    additions?: number
    deletions?: number
    filesChanged?: number
    committedAt: Date | string
  }

  export type CommitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sha?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    filesChanged?: IntFieldUpdateOperationsInput | number
    committedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repo?: RepositoryUpdateOneRequiredWithoutCommitsNestedInput
    developer?: DeveloperUpdateOneRequiredWithoutCommitsNestedInput
  }

  export type CommitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoId?: StringFieldUpdateOperationsInput | string
    developerId?: StringFieldUpdateOperationsInput | string
    sha?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    filesChanged?: IntFieldUpdateOperationsInput | number
    committedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitCreateManyInput = {
    id?: string
    repoId: string
    developerId: string
    sha: string
    message: string
    additions?: number
    deletions?: number
    filesChanged?: number
    committedAt: Date | string
  }

  export type CommitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sha?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    filesChanged?: IntFieldUpdateOperationsInput | number
    committedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoId?: StringFieldUpdateOperationsInput | string
    developerId?: StringFieldUpdateOperationsInput | string
    sha?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    filesChanged?: IntFieldUpdateOperationsInput | number
    committedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestCreateInput = {
    id?: string
    githubId: number
    number: number
    title: string
    body?: string | null
    state?: $Enums.PRState
    reviewCycles?: number
    additions?: number
    deletions?: number
    mergedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repo: RepositoryCreateNestedOneWithoutPullRequestsInput
    author: DeveloperCreateNestedOneWithoutPullRequestsInput
    feedbackSent?: PRFeedbackCreateNestedManyWithoutPrInput
  }

  export type PullRequestUncheckedCreateInput = {
    id?: string
    repoId: string
    authorId: string
    githubId: number
    number: number
    title: string
    body?: string | null
    state?: $Enums.PRState
    reviewCycles?: number
    additions?: number
    deletions?: number
    mergedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    feedbackSent?: PRFeedbackUncheckedCreateNestedManyWithoutPrInput
  }

  export type PullRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumPRStateFieldUpdateOperationsInput | $Enums.PRState
    reviewCycles?: IntFieldUpdateOperationsInput | number
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    mergedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repo?: RepositoryUpdateOneRequiredWithoutPullRequestsNestedInput
    author?: DeveloperUpdateOneRequiredWithoutPullRequestsNestedInput
    feedbackSent?: PRFeedbackUpdateManyWithoutPrNestedInput
  }

  export type PullRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumPRStateFieldUpdateOperationsInput | $Enums.PRState
    reviewCycles?: IntFieldUpdateOperationsInput | number
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    mergedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbackSent?: PRFeedbackUncheckedUpdateManyWithoutPrNestedInput
  }

  export type PullRequestCreateManyInput = {
    id?: string
    repoId: string
    authorId: string
    githubId: number
    number: number
    title: string
    body?: string | null
    state?: $Enums.PRState
    reviewCycles?: number
    additions?: number
    deletions?: number
    mergedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PullRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumPRStateFieldUpdateOperationsInput | $Enums.PRState
    reviewCycles?: IntFieldUpdateOperationsInput | number
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    mergedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumPRStateFieldUpdateOperationsInput | $Enums.PRState
    reviewCycles?: IntFieldUpdateOperationsInput | number
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    mergedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRFeedbackCreateInput = {
    id?: string
    feedbackType: string
    content: string
    sentViaDiscord?: boolean
    accepted?: boolean | null
    createdAt?: Date | string
    pr: PullRequestCreateNestedOneWithoutFeedbackSentInput
  }

  export type PRFeedbackUncheckedCreateInput = {
    id?: string
    prId: string
    feedbackType: string
    content: string
    sentViaDiscord?: boolean
    accepted?: boolean | null
    createdAt?: Date | string
  }

  export type PRFeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    feedbackType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentViaDiscord?: BoolFieldUpdateOperationsInput | boolean
    accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pr?: PullRequestUpdateOneRequiredWithoutFeedbackSentNestedInput
  }

  export type PRFeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prId?: StringFieldUpdateOperationsInput | string
    feedbackType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentViaDiscord?: BoolFieldUpdateOperationsInput | boolean
    accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRFeedbackCreateManyInput = {
    id?: string
    prId: string
    feedbackType: string
    content: string
    sentViaDiscord?: boolean
    accepted?: boolean | null
    createdAt?: Date | string
  }

  export type PRFeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    feedbackType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentViaDiscord?: BoolFieldUpdateOperationsInput | boolean
    accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRFeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prId?: StringFieldUpdateOperationsInput | string
    feedbackType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentViaDiscord?: BoolFieldUpdateOperationsInput | boolean
    accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingCreateInput = {
    id?: string
    title: string
    meetingType?: $Enums.MeetingType
    transcript?: string | null
    summary?: string | null
    goals?: MeetingCreategoalsInput | string[]
    blockers?: MeetingCreateblockersInput | string[]
    decisions?: MeetingCreatedecisionsInput | string[]
    occurredAt: Date | string
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutMeetingsInput
    tasks?: TaskCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateInput = {
    id?: string
    orgId: string
    title: string
    meetingType?: $Enums.MeetingType
    transcript?: string | null
    summary?: string | null
    goals?: MeetingCreategoalsInput | string[]
    blockers?: MeetingCreateblockersInput | string[]
    decisions?: MeetingCreatedecisionsInput | string[]
    occurredAt: Date | string
    createdAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    meetingType?: EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: MeetingUpdategoalsInput | string[]
    blockers?: MeetingUpdateblockersInput | string[]
    decisions?: MeetingUpdatedecisionsInput | string[]
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutMeetingsNestedInput
    tasks?: TaskUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    meetingType?: EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: MeetingUpdategoalsInput | string[]
    blockers?: MeetingUpdateblockersInput | string[]
    decisions?: MeetingUpdatedecisionsInput | string[]
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingCreateManyInput = {
    id?: string
    orgId: string
    title: string
    meetingType?: $Enums.MeetingType
    transcript?: string | null
    summary?: string | null
    goals?: MeetingCreategoalsInput | string[]
    blockers?: MeetingCreateblockersInput | string[]
    decisions?: MeetingCreatedecisionsInput | string[]
    occurredAt: Date | string
    createdAt?: Date | string
  }

  export type MeetingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    meetingType?: EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: MeetingUpdategoalsInput | string[]
    blockers?: MeetingUpdateblockersInput | string[]
    decisions?: MeetingUpdatedecisionsInput | string[]
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    meetingType?: EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: MeetingUpdategoalsInput | string[]
    blockers?: MeetingUpdateblockersInput | string[]
    decisions?: MeetingUpdatedecisionsInput | string[]
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    complexity?: number
    status?: $Enums.TaskStatus
    confidence?: number
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrganizationCreateNestedOneWithoutTasksInput
    meeting?: MeetingCreateNestedOneWithoutTasksInput
    assignee?: DeveloperCreateNestedOneWithoutTaskAssignmentsInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    orgId: string
    meetingId?: string | null
    assigneeId?: string | null
    title: string
    description?: string | null
    complexity?: number
    status?: $Enums.TaskStatus
    confidence?: number
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    confidence?: FloatFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutTasksNestedInput
    meeting?: MeetingUpdateOneWithoutTasksNestedInput
    assignee?: DeveloperUpdateOneWithoutTaskAssignmentsNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    meetingId?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    confidence?: FloatFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyInput = {
    id?: string
    orgId: string
    meetingId?: string | null
    assigneeId?: string | null
    title: string
    description?: string | null
    complexity?: number
    status?: $Enums.TaskStatus
    confidence?: number
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    confidence?: FloatFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    meetingId?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    confidence?: FloatFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SprintCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    summary?: string | null
    velocity?: number | null
    predictability?: number | null
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutSprintsInput
  }

  export type SprintUncheckedCreateInput = {
    id?: string
    orgId: string
    name: string
    startDate: Date | string
    endDate: Date | string
    summary?: string | null
    velocity?: number | null
    predictability?: number | null
    createdAt?: Date | string
  }

  export type SprintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    predictability?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutSprintsNestedInput
  }

  export type SprintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    predictability?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SprintCreateManyInput = {
    id?: string
    orgId: string
    name: string
    startDate: Date | string
    endDate: Date | string
    summary?: string | null
    velocity?: number | null
    predictability?: number | null
    createdAt?: Date | string
  }

  export type SprintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    predictability?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SprintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    predictability?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbeddingCreateInput = {
    id?: string
    sourceType: $Enums.EmbeddingSource
    sourceId: string
    content: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutEmbeddingsInput
    repo?: RepositoryCreateNestedOneWithoutEmbeddingsInput
  }

  export type EmbeddingUncheckedCreateInput = {
    id?: string
    orgId: string
    repoId?: string | null
    sourceType: $Enums.EmbeddingSource
    sourceId: string
    content: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EmbeddingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumEmbeddingSourceFieldUpdateOperationsInput | $Enums.EmbeddingSource
    sourceId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutEmbeddingsNestedInput
    repo?: RepositoryUpdateOneWithoutEmbeddingsNestedInput
  }

  export type EmbeddingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    repoId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: EnumEmbeddingSourceFieldUpdateOperationsInput | $Enums.EmbeddingSource
    sourceId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbeddingCreateManyInput = {
    id?: string
    orgId: string
    repoId?: string | null
    sourceType: $Enums.EmbeddingSource
    sourceId: string
    content: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EmbeddingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumEmbeddingSourceFieldUpdateOperationsInput | $Enums.EmbeddingSource
    sourceId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbeddingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    repoId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: EnumEmbeddingSourceFieldUpdateOperationsInput | $Enums.EmbeddingSource
    sourceId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrganizationCreateNestedOneWithoutChatSessionsInput
    messages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateInput = {
    id?: string
    userId: string
    orgId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutChatSessionsNestedInput
    messages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionCreateManyInput = {
    id?: string
    userId: string
    orgId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    role: string
    content: string
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    session: ChatSessionCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    sessionId: string
    role: string
    content: string
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ChatSessionUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    sessionId: string
    role: string
    content: string
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrgMemberListRelationFilter = {
    every?: OrgMemberWhereInput
    some?: OrgMemberWhereInput
    none?: OrgMemberWhereInput
  }

  export type RepositoryListRelationFilter = {
    every?: RepositoryWhereInput
    some?: RepositoryWhereInput
    none?: RepositoryWhereInput
  }

  export type DeveloperListRelationFilter = {
    every?: DeveloperWhereInput
    some?: DeveloperWhereInput
    none?: DeveloperWhereInput
  }

  export type SprintListRelationFilter = {
    every?: SprintWhereInput
    some?: SprintWhereInput
    none?: SprintWhereInput
  }

  export type MeetingListRelationFilter = {
    every?: MeetingWhereInput
    some?: MeetingWhereInput
    none?: MeetingWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type EmbeddingListRelationFilter = {
    every?: EmbeddingWhereInput
    some?: EmbeddingWhereInput
    none?: EmbeddingWhereInput
  }

  export type ChatSessionListRelationFilter = {
    every?: ChatSessionWhereInput
    some?: ChatSessionWhereInput
    none?: ChatSessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrgMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepositoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeveloperOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SprintOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmbeddingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    githubOrgId?: SortOrder
    discordGuildId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    githubOrgId?: SortOrder
    discordGuildId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    githubOrgId?: SortOrder
    discordGuildId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumOrgRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgRoleFilter<$PrismaModel> | $Enums.OrgRole
  }

  export type OrganizationRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type OrgMemberUserIdOrgIdCompoundUniqueInput = {
    userId: string
    orgId: string
  }

  export type OrgMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    role?: SortOrder
  }

  export type OrgMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    role?: SortOrder
  }

  export type OrgMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    role?: SortOrder
  }

  export type EnumOrgRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrgRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrgRoleFilter<$PrismaModel>
    _max?: NestedEnumOrgRoleFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CommitListRelationFilter = {
    every?: CommitWhereInput
    some?: CommitWhereInput
    none?: CommitWhereInput
  }

  export type PullRequestListRelationFilter = {
    every?: PullRequestWhereInput
    some?: PullRequestWhereInput
    none?: PullRequestWhereInput
  }

  export type CommitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PullRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepositoryCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    githubId?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    description?: SortOrder
    language?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepositoryAvgOrderByAggregateInput = {
    githubId?: SortOrder
  }

  export type RepositoryMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    githubId?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    description?: SortOrder
    language?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepositoryMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    githubId?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    description?: SortOrder
    language?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepositorySumOrderByAggregateInput = {
    githubId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DeveloperOrgIdGithubLoginCompoundUniqueInput = {
    orgId: string
    githubLogin: string
  }

  export type DeveloperCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    githubLogin?: SortOrder
    githubId?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    discordUserId?: SortOrder
    strengths?: SortOrder
    currentLoad?: SortOrder
    burnoutSignal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeveloperAvgOrderByAggregateInput = {
    githubId?: SortOrder
    currentLoad?: SortOrder
    burnoutSignal?: SortOrder
  }

  export type DeveloperMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    githubLogin?: SortOrder
    githubId?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    discordUserId?: SortOrder
    currentLoad?: SortOrder
    burnoutSignal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeveloperMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    githubLogin?: SortOrder
    githubId?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    discordUserId?: SortOrder
    currentLoad?: SortOrder
    burnoutSignal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeveloperSumOrderByAggregateInput = {
    githubId?: SortOrder
    currentLoad?: SortOrder
    burnoutSignal?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RepositoryRelationFilter = {
    is?: RepositoryWhereInput
    isNot?: RepositoryWhereInput
  }

  export type DeveloperRelationFilter = {
    is?: DeveloperWhereInput
    isNot?: DeveloperWhereInput
  }

  export type CommitCountOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    developerId?: SortOrder
    sha?: SortOrder
    message?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    filesChanged?: SortOrder
    committedAt?: SortOrder
  }

  export type CommitAvgOrderByAggregateInput = {
    additions?: SortOrder
    deletions?: SortOrder
    filesChanged?: SortOrder
  }

  export type CommitMaxOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    developerId?: SortOrder
    sha?: SortOrder
    message?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    filesChanged?: SortOrder
    committedAt?: SortOrder
  }

  export type CommitMinOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    developerId?: SortOrder
    sha?: SortOrder
    message?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    filesChanged?: SortOrder
    committedAt?: SortOrder
  }

  export type CommitSumOrderByAggregateInput = {
    additions?: SortOrder
    deletions?: SortOrder
    filesChanged?: SortOrder
  }

  export type EnumPRStateFilter<$PrismaModel = never> = {
    equals?: $Enums.PRState | EnumPRStateFieldRefInput<$PrismaModel>
    in?: $Enums.PRState[] | ListEnumPRStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRState[] | ListEnumPRStateFieldRefInput<$PrismaModel>
    not?: NestedEnumPRStateFilter<$PrismaModel> | $Enums.PRState
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PRFeedbackListRelationFilter = {
    every?: PRFeedbackWhereInput
    some?: PRFeedbackWhereInput
    none?: PRFeedbackWhereInput
  }

  export type PRFeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PullRequestCountOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    authorId?: SortOrder
    githubId?: SortOrder
    number?: SortOrder
    title?: SortOrder
    body?: SortOrder
    state?: SortOrder
    reviewCycles?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    mergedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PullRequestAvgOrderByAggregateInput = {
    githubId?: SortOrder
    number?: SortOrder
    reviewCycles?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
  }

  export type PullRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    authorId?: SortOrder
    githubId?: SortOrder
    number?: SortOrder
    title?: SortOrder
    body?: SortOrder
    state?: SortOrder
    reviewCycles?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    mergedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PullRequestMinOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    authorId?: SortOrder
    githubId?: SortOrder
    number?: SortOrder
    title?: SortOrder
    body?: SortOrder
    state?: SortOrder
    reviewCycles?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
    mergedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PullRequestSumOrderByAggregateInput = {
    githubId?: SortOrder
    number?: SortOrder
    reviewCycles?: SortOrder
    additions?: SortOrder
    deletions?: SortOrder
  }

  export type EnumPRStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PRState | EnumPRStateFieldRefInput<$PrismaModel>
    in?: $Enums.PRState[] | ListEnumPRStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRState[] | ListEnumPRStateFieldRefInput<$PrismaModel>
    not?: NestedEnumPRStateWithAggregatesFilter<$PrismaModel> | $Enums.PRState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPRStateFilter<$PrismaModel>
    _max?: NestedEnumPRStateFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type PullRequestRelationFilter = {
    is?: PullRequestWhereInput
    isNot?: PullRequestWhereInput
  }

  export type PRFeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    prId?: SortOrder
    feedbackType?: SortOrder
    content?: SortOrder
    sentViaDiscord?: SortOrder
    accepted?: SortOrder
    createdAt?: SortOrder
  }

  export type PRFeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    prId?: SortOrder
    feedbackType?: SortOrder
    content?: SortOrder
    sentViaDiscord?: SortOrder
    accepted?: SortOrder
    createdAt?: SortOrder
  }

  export type PRFeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    prId?: SortOrder
    feedbackType?: SortOrder
    content?: SortOrder
    sentViaDiscord?: SortOrder
    accepted?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumMeetingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingType | EnumMeetingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingType[] | ListEnumMeetingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeetingType[] | ListEnumMeetingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeetingTypeFilter<$PrismaModel> | $Enums.MeetingType
  }

  export type MeetingCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    title?: SortOrder
    meetingType?: SortOrder
    transcript?: SortOrder
    summary?: SortOrder
    goals?: SortOrder
    blockers?: SortOrder
    decisions?: SortOrder
    occurredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    title?: SortOrder
    meetingType?: SortOrder
    transcript?: SortOrder
    summary?: SortOrder
    occurredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MeetingMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    title?: SortOrder
    meetingType?: SortOrder
    transcript?: SortOrder
    summary?: SortOrder
    occurredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMeetingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingType | EnumMeetingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingType[] | ListEnumMeetingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeetingType[] | ListEnumMeetingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeetingTypeWithAggregatesFilter<$PrismaModel> | $Enums.MeetingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeetingTypeFilter<$PrismaModel>
    _max?: NestedEnumMeetingTypeFilter<$PrismaModel>
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type MeetingNullableRelationFilter = {
    is?: MeetingWhereInput | null
    isNot?: MeetingWhereInput | null
  }

  export type DeveloperNullableRelationFilter = {
    is?: DeveloperWhereInput | null
    isNot?: DeveloperWhereInput | null
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    meetingId?: SortOrder
    assigneeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    complexity?: SortOrder
    status?: SortOrder
    confidence?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    complexity?: SortOrder
    confidence?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    meetingId?: SortOrder
    assigneeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    complexity?: SortOrder
    status?: SortOrder
    confidence?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    meetingId?: SortOrder
    assigneeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    complexity?: SortOrder
    status?: SortOrder
    confidence?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    complexity?: SortOrder
    confidence?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SprintCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    summary?: SortOrder
    velocity?: SortOrder
    predictability?: SortOrder
    createdAt?: SortOrder
  }

  export type SprintAvgOrderByAggregateInput = {
    velocity?: SortOrder
    predictability?: SortOrder
  }

  export type SprintMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    summary?: SortOrder
    velocity?: SortOrder
    predictability?: SortOrder
    createdAt?: SortOrder
  }

  export type SprintMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    summary?: SortOrder
    velocity?: SortOrder
    predictability?: SortOrder
    createdAt?: SortOrder
  }

  export type SprintSumOrderByAggregateInput = {
    velocity?: SortOrder
    predictability?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumEmbeddingSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.EmbeddingSource | EnumEmbeddingSourceFieldRefInput<$PrismaModel>
    in?: $Enums.EmbeddingSource[] | ListEnumEmbeddingSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmbeddingSource[] | ListEnumEmbeddingSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumEmbeddingSourceFilter<$PrismaModel> | $Enums.EmbeddingSource
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RepositoryNullableRelationFilter = {
    is?: RepositoryWhereInput | null
    isNot?: RepositoryWhereInput | null
  }

  export type EmbeddingCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    repoId?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    content?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type EmbeddingMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    repoId?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type EmbeddingMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    repoId?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumEmbeddingSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmbeddingSource | EnumEmbeddingSourceFieldRefInput<$PrismaModel>
    in?: $Enums.EmbeddingSource[] | ListEnumEmbeddingSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmbeddingSource[] | ListEnumEmbeddingSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumEmbeddingSourceWithAggregatesFilter<$PrismaModel> | $Enums.EmbeddingSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmbeddingSourceFilter<$PrismaModel>
    _max?: NestedEnumEmbeddingSourceFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSessionRelationFilter = {
    is?: ChatSessionWhereInput
    isNot?: ChatSessionWhereInput
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    sources?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type OrgMemberCreateNestedManyWithoutOrgInput = {
    create?: XOR<OrgMemberCreateWithoutOrgInput, OrgMemberUncheckedCreateWithoutOrgInput> | OrgMemberCreateWithoutOrgInput[] | OrgMemberUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: OrgMemberCreateOrConnectWithoutOrgInput | OrgMemberCreateOrConnectWithoutOrgInput[]
    createMany?: OrgMemberCreateManyOrgInputEnvelope
    connect?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
  }

  export type RepositoryCreateNestedManyWithoutOrgInput = {
    create?: XOR<RepositoryCreateWithoutOrgInput, RepositoryUncheckedCreateWithoutOrgInput> | RepositoryCreateWithoutOrgInput[] | RepositoryUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutOrgInput | RepositoryCreateOrConnectWithoutOrgInput[]
    createMany?: RepositoryCreateManyOrgInputEnvelope
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
  }

  export type DeveloperCreateNestedManyWithoutOrgInput = {
    create?: XOR<DeveloperCreateWithoutOrgInput, DeveloperUncheckedCreateWithoutOrgInput> | DeveloperCreateWithoutOrgInput[] | DeveloperUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: DeveloperCreateOrConnectWithoutOrgInput | DeveloperCreateOrConnectWithoutOrgInput[]
    createMany?: DeveloperCreateManyOrgInputEnvelope
    connect?: DeveloperWhereUniqueInput | DeveloperWhereUniqueInput[]
  }

  export type SprintCreateNestedManyWithoutOrgInput = {
    create?: XOR<SprintCreateWithoutOrgInput, SprintUncheckedCreateWithoutOrgInput> | SprintCreateWithoutOrgInput[] | SprintUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: SprintCreateOrConnectWithoutOrgInput | SprintCreateOrConnectWithoutOrgInput[]
    createMany?: SprintCreateManyOrgInputEnvelope
    connect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
  }

  export type MeetingCreateNestedManyWithoutOrgInput = {
    create?: XOR<MeetingCreateWithoutOrgInput, MeetingUncheckedCreateWithoutOrgInput> | MeetingCreateWithoutOrgInput[] | MeetingUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutOrgInput | MeetingCreateOrConnectWithoutOrgInput[]
    createMany?: MeetingCreateManyOrgInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutOrgInput = {
    create?: XOR<TaskCreateWithoutOrgInput, TaskUncheckedCreateWithoutOrgInput> | TaskCreateWithoutOrgInput[] | TaskUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutOrgInput | TaskCreateOrConnectWithoutOrgInput[]
    createMany?: TaskCreateManyOrgInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EmbeddingCreateNestedManyWithoutOrgInput = {
    create?: XOR<EmbeddingCreateWithoutOrgInput, EmbeddingUncheckedCreateWithoutOrgInput> | EmbeddingCreateWithoutOrgInput[] | EmbeddingUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: EmbeddingCreateOrConnectWithoutOrgInput | EmbeddingCreateOrConnectWithoutOrgInput[]
    createMany?: EmbeddingCreateManyOrgInputEnvelope
    connect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
  }

  export type ChatSessionCreateNestedManyWithoutOrgInput = {
    create?: XOR<ChatSessionCreateWithoutOrgInput, ChatSessionUncheckedCreateWithoutOrgInput> | ChatSessionCreateWithoutOrgInput[] | ChatSessionUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutOrgInput | ChatSessionCreateOrConnectWithoutOrgInput[]
    createMany?: ChatSessionCreateManyOrgInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type OrgMemberUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<OrgMemberCreateWithoutOrgInput, OrgMemberUncheckedCreateWithoutOrgInput> | OrgMemberCreateWithoutOrgInput[] | OrgMemberUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: OrgMemberCreateOrConnectWithoutOrgInput | OrgMemberCreateOrConnectWithoutOrgInput[]
    createMany?: OrgMemberCreateManyOrgInputEnvelope
    connect?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
  }

  export type RepositoryUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<RepositoryCreateWithoutOrgInput, RepositoryUncheckedCreateWithoutOrgInput> | RepositoryCreateWithoutOrgInput[] | RepositoryUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutOrgInput | RepositoryCreateOrConnectWithoutOrgInput[]
    createMany?: RepositoryCreateManyOrgInputEnvelope
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
  }

  export type DeveloperUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<DeveloperCreateWithoutOrgInput, DeveloperUncheckedCreateWithoutOrgInput> | DeveloperCreateWithoutOrgInput[] | DeveloperUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: DeveloperCreateOrConnectWithoutOrgInput | DeveloperCreateOrConnectWithoutOrgInput[]
    createMany?: DeveloperCreateManyOrgInputEnvelope
    connect?: DeveloperWhereUniqueInput | DeveloperWhereUniqueInput[]
  }

  export type SprintUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<SprintCreateWithoutOrgInput, SprintUncheckedCreateWithoutOrgInput> | SprintCreateWithoutOrgInput[] | SprintUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: SprintCreateOrConnectWithoutOrgInput | SprintCreateOrConnectWithoutOrgInput[]
    createMany?: SprintCreateManyOrgInputEnvelope
    connect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<MeetingCreateWithoutOrgInput, MeetingUncheckedCreateWithoutOrgInput> | MeetingCreateWithoutOrgInput[] | MeetingUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutOrgInput | MeetingCreateOrConnectWithoutOrgInput[]
    createMany?: MeetingCreateManyOrgInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<TaskCreateWithoutOrgInput, TaskUncheckedCreateWithoutOrgInput> | TaskCreateWithoutOrgInput[] | TaskUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutOrgInput | TaskCreateOrConnectWithoutOrgInput[]
    createMany?: TaskCreateManyOrgInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EmbeddingUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<EmbeddingCreateWithoutOrgInput, EmbeddingUncheckedCreateWithoutOrgInput> | EmbeddingCreateWithoutOrgInput[] | EmbeddingUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: EmbeddingCreateOrConnectWithoutOrgInput | EmbeddingCreateOrConnectWithoutOrgInput[]
    createMany?: EmbeddingCreateManyOrgInputEnvelope
    connect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
  }

  export type ChatSessionUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<ChatSessionCreateWithoutOrgInput, ChatSessionUncheckedCreateWithoutOrgInput> | ChatSessionCreateWithoutOrgInput[] | ChatSessionUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutOrgInput | ChatSessionCreateOrConnectWithoutOrgInput[]
    createMany?: ChatSessionCreateManyOrgInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrgMemberUpdateManyWithoutOrgNestedInput = {
    create?: XOR<OrgMemberCreateWithoutOrgInput, OrgMemberUncheckedCreateWithoutOrgInput> | OrgMemberCreateWithoutOrgInput[] | OrgMemberUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: OrgMemberCreateOrConnectWithoutOrgInput | OrgMemberCreateOrConnectWithoutOrgInput[]
    upsert?: OrgMemberUpsertWithWhereUniqueWithoutOrgInput | OrgMemberUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: OrgMemberCreateManyOrgInputEnvelope
    set?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
    disconnect?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
    delete?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
    connect?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
    update?: OrgMemberUpdateWithWhereUniqueWithoutOrgInput | OrgMemberUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: OrgMemberUpdateManyWithWhereWithoutOrgInput | OrgMemberUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: OrgMemberScalarWhereInput | OrgMemberScalarWhereInput[]
  }

  export type RepositoryUpdateManyWithoutOrgNestedInput = {
    create?: XOR<RepositoryCreateWithoutOrgInput, RepositoryUncheckedCreateWithoutOrgInput> | RepositoryCreateWithoutOrgInput[] | RepositoryUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutOrgInput | RepositoryCreateOrConnectWithoutOrgInput[]
    upsert?: RepositoryUpsertWithWhereUniqueWithoutOrgInput | RepositoryUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: RepositoryCreateManyOrgInputEnvelope
    set?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    disconnect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    delete?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    update?: RepositoryUpdateWithWhereUniqueWithoutOrgInput | RepositoryUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: RepositoryUpdateManyWithWhereWithoutOrgInput | RepositoryUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
  }

  export type DeveloperUpdateManyWithoutOrgNestedInput = {
    create?: XOR<DeveloperCreateWithoutOrgInput, DeveloperUncheckedCreateWithoutOrgInput> | DeveloperCreateWithoutOrgInput[] | DeveloperUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: DeveloperCreateOrConnectWithoutOrgInput | DeveloperCreateOrConnectWithoutOrgInput[]
    upsert?: DeveloperUpsertWithWhereUniqueWithoutOrgInput | DeveloperUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: DeveloperCreateManyOrgInputEnvelope
    set?: DeveloperWhereUniqueInput | DeveloperWhereUniqueInput[]
    disconnect?: DeveloperWhereUniqueInput | DeveloperWhereUniqueInput[]
    delete?: DeveloperWhereUniqueInput | DeveloperWhereUniqueInput[]
    connect?: DeveloperWhereUniqueInput | DeveloperWhereUniqueInput[]
    update?: DeveloperUpdateWithWhereUniqueWithoutOrgInput | DeveloperUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: DeveloperUpdateManyWithWhereWithoutOrgInput | DeveloperUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: DeveloperScalarWhereInput | DeveloperScalarWhereInput[]
  }

  export type SprintUpdateManyWithoutOrgNestedInput = {
    create?: XOR<SprintCreateWithoutOrgInput, SprintUncheckedCreateWithoutOrgInput> | SprintCreateWithoutOrgInput[] | SprintUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: SprintCreateOrConnectWithoutOrgInput | SprintCreateOrConnectWithoutOrgInput[]
    upsert?: SprintUpsertWithWhereUniqueWithoutOrgInput | SprintUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: SprintCreateManyOrgInputEnvelope
    set?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    disconnect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    delete?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    connect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    update?: SprintUpdateWithWhereUniqueWithoutOrgInput | SprintUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: SprintUpdateManyWithWhereWithoutOrgInput | SprintUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: SprintScalarWhereInput | SprintScalarWhereInput[]
  }

  export type MeetingUpdateManyWithoutOrgNestedInput = {
    create?: XOR<MeetingCreateWithoutOrgInput, MeetingUncheckedCreateWithoutOrgInput> | MeetingCreateWithoutOrgInput[] | MeetingUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutOrgInput | MeetingCreateOrConnectWithoutOrgInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutOrgInput | MeetingUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: MeetingCreateManyOrgInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutOrgInput | MeetingUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutOrgInput | MeetingUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutOrgNestedInput = {
    create?: XOR<TaskCreateWithoutOrgInput, TaskUncheckedCreateWithoutOrgInput> | TaskCreateWithoutOrgInput[] | TaskUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutOrgInput | TaskCreateOrConnectWithoutOrgInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutOrgInput | TaskUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: TaskCreateManyOrgInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutOrgInput | TaskUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutOrgInput | TaskUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type EmbeddingUpdateManyWithoutOrgNestedInput = {
    create?: XOR<EmbeddingCreateWithoutOrgInput, EmbeddingUncheckedCreateWithoutOrgInput> | EmbeddingCreateWithoutOrgInput[] | EmbeddingUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: EmbeddingCreateOrConnectWithoutOrgInput | EmbeddingCreateOrConnectWithoutOrgInput[]
    upsert?: EmbeddingUpsertWithWhereUniqueWithoutOrgInput | EmbeddingUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: EmbeddingCreateManyOrgInputEnvelope
    set?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    disconnect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    delete?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    connect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    update?: EmbeddingUpdateWithWhereUniqueWithoutOrgInput | EmbeddingUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: EmbeddingUpdateManyWithWhereWithoutOrgInput | EmbeddingUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: EmbeddingScalarWhereInput | EmbeddingScalarWhereInput[]
  }

  export type ChatSessionUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ChatSessionCreateWithoutOrgInput, ChatSessionUncheckedCreateWithoutOrgInput> | ChatSessionCreateWithoutOrgInput[] | ChatSessionUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutOrgInput | ChatSessionCreateOrConnectWithoutOrgInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutOrgInput | ChatSessionUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ChatSessionCreateManyOrgInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutOrgInput | ChatSessionUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutOrgInput | ChatSessionUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type OrgMemberUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<OrgMemberCreateWithoutOrgInput, OrgMemberUncheckedCreateWithoutOrgInput> | OrgMemberCreateWithoutOrgInput[] | OrgMemberUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: OrgMemberCreateOrConnectWithoutOrgInput | OrgMemberCreateOrConnectWithoutOrgInput[]
    upsert?: OrgMemberUpsertWithWhereUniqueWithoutOrgInput | OrgMemberUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: OrgMemberCreateManyOrgInputEnvelope
    set?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
    disconnect?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
    delete?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
    connect?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
    update?: OrgMemberUpdateWithWhereUniqueWithoutOrgInput | OrgMemberUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: OrgMemberUpdateManyWithWhereWithoutOrgInput | OrgMemberUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: OrgMemberScalarWhereInput | OrgMemberScalarWhereInput[]
  }

  export type RepositoryUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<RepositoryCreateWithoutOrgInput, RepositoryUncheckedCreateWithoutOrgInput> | RepositoryCreateWithoutOrgInput[] | RepositoryUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutOrgInput | RepositoryCreateOrConnectWithoutOrgInput[]
    upsert?: RepositoryUpsertWithWhereUniqueWithoutOrgInput | RepositoryUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: RepositoryCreateManyOrgInputEnvelope
    set?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    disconnect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    delete?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    update?: RepositoryUpdateWithWhereUniqueWithoutOrgInput | RepositoryUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: RepositoryUpdateManyWithWhereWithoutOrgInput | RepositoryUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
  }

  export type DeveloperUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<DeveloperCreateWithoutOrgInput, DeveloperUncheckedCreateWithoutOrgInput> | DeveloperCreateWithoutOrgInput[] | DeveloperUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: DeveloperCreateOrConnectWithoutOrgInput | DeveloperCreateOrConnectWithoutOrgInput[]
    upsert?: DeveloperUpsertWithWhereUniqueWithoutOrgInput | DeveloperUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: DeveloperCreateManyOrgInputEnvelope
    set?: DeveloperWhereUniqueInput | DeveloperWhereUniqueInput[]
    disconnect?: DeveloperWhereUniqueInput | DeveloperWhereUniqueInput[]
    delete?: DeveloperWhereUniqueInput | DeveloperWhereUniqueInput[]
    connect?: DeveloperWhereUniqueInput | DeveloperWhereUniqueInput[]
    update?: DeveloperUpdateWithWhereUniqueWithoutOrgInput | DeveloperUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: DeveloperUpdateManyWithWhereWithoutOrgInput | DeveloperUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: DeveloperScalarWhereInput | DeveloperScalarWhereInput[]
  }

  export type SprintUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<SprintCreateWithoutOrgInput, SprintUncheckedCreateWithoutOrgInput> | SprintCreateWithoutOrgInput[] | SprintUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: SprintCreateOrConnectWithoutOrgInput | SprintCreateOrConnectWithoutOrgInput[]
    upsert?: SprintUpsertWithWhereUniqueWithoutOrgInput | SprintUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: SprintCreateManyOrgInputEnvelope
    set?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    disconnect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    delete?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    connect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    update?: SprintUpdateWithWhereUniqueWithoutOrgInput | SprintUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: SprintUpdateManyWithWhereWithoutOrgInput | SprintUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: SprintScalarWhereInput | SprintScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<MeetingCreateWithoutOrgInput, MeetingUncheckedCreateWithoutOrgInput> | MeetingCreateWithoutOrgInput[] | MeetingUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutOrgInput | MeetingCreateOrConnectWithoutOrgInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutOrgInput | MeetingUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: MeetingCreateManyOrgInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutOrgInput | MeetingUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutOrgInput | MeetingUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<TaskCreateWithoutOrgInput, TaskUncheckedCreateWithoutOrgInput> | TaskCreateWithoutOrgInput[] | TaskUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutOrgInput | TaskCreateOrConnectWithoutOrgInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutOrgInput | TaskUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: TaskCreateManyOrgInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutOrgInput | TaskUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutOrgInput | TaskUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type EmbeddingUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<EmbeddingCreateWithoutOrgInput, EmbeddingUncheckedCreateWithoutOrgInput> | EmbeddingCreateWithoutOrgInput[] | EmbeddingUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: EmbeddingCreateOrConnectWithoutOrgInput | EmbeddingCreateOrConnectWithoutOrgInput[]
    upsert?: EmbeddingUpsertWithWhereUniqueWithoutOrgInput | EmbeddingUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: EmbeddingCreateManyOrgInputEnvelope
    set?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    disconnect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    delete?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    connect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    update?: EmbeddingUpdateWithWhereUniqueWithoutOrgInput | EmbeddingUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: EmbeddingUpdateManyWithWhereWithoutOrgInput | EmbeddingUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: EmbeddingScalarWhereInput | EmbeddingScalarWhereInput[]
  }

  export type ChatSessionUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ChatSessionCreateWithoutOrgInput, ChatSessionUncheckedCreateWithoutOrgInput> | ChatSessionCreateWithoutOrgInput[] | ChatSessionUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutOrgInput | ChatSessionCreateOrConnectWithoutOrgInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutOrgInput | ChatSessionUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ChatSessionCreateManyOrgInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutOrgInput | ChatSessionUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutOrgInput | ChatSessionUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutMembersInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EnumOrgRoleFieldUpdateOperationsInput = {
    set?: $Enums.OrgRole
  }

  export type OrganizationUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    upsert?: OrganizationUpsertWithoutMembersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMembersInput, OrganizationUpdateWithoutMembersInput>, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type OrganizationCreateNestedOneWithoutReposInput = {
    create?: XOR<OrganizationCreateWithoutReposInput, OrganizationUncheckedCreateWithoutReposInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutReposInput
    connect?: OrganizationWhereUniqueInput
  }

  export type CommitCreateNestedManyWithoutRepoInput = {
    create?: XOR<CommitCreateWithoutRepoInput, CommitUncheckedCreateWithoutRepoInput> | CommitCreateWithoutRepoInput[] | CommitUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: CommitCreateOrConnectWithoutRepoInput | CommitCreateOrConnectWithoutRepoInput[]
    createMany?: CommitCreateManyRepoInputEnvelope
    connect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
  }

  export type PullRequestCreateNestedManyWithoutRepoInput = {
    create?: XOR<PullRequestCreateWithoutRepoInput, PullRequestUncheckedCreateWithoutRepoInput> | PullRequestCreateWithoutRepoInput[] | PullRequestUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutRepoInput | PullRequestCreateOrConnectWithoutRepoInput[]
    createMany?: PullRequestCreateManyRepoInputEnvelope
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
  }

  export type EmbeddingCreateNestedManyWithoutRepoInput = {
    create?: XOR<EmbeddingCreateWithoutRepoInput, EmbeddingUncheckedCreateWithoutRepoInput> | EmbeddingCreateWithoutRepoInput[] | EmbeddingUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: EmbeddingCreateOrConnectWithoutRepoInput | EmbeddingCreateOrConnectWithoutRepoInput[]
    createMany?: EmbeddingCreateManyRepoInputEnvelope
    connect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
  }

  export type CommitUncheckedCreateNestedManyWithoutRepoInput = {
    create?: XOR<CommitCreateWithoutRepoInput, CommitUncheckedCreateWithoutRepoInput> | CommitCreateWithoutRepoInput[] | CommitUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: CommitCreateOrConnectWithoutRepoInput | CommitCreateOrConnectWithoutRepoInput[]
    createMany?: CommitCreateManyRepoInputEnvelope
    connect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
  }

  export type PullRequestUncheckedCreateNestedManyWithoutRepoInput = {
    create?: XOR<PullRequestCreateWithoutRepoInput, PullRequestUncheckedCreateWithoutRepoInput> | PullRequestCreateWithoutRepoInput[] | PullRequestUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutRepoInput | PullRequestCreateOrConnectWithoutRepoInput[]
    createMany?: PullRequestCreateManyRepoInputEnvelope
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
  }

  export type EmbeddingUncheckedCreateNestedManyWithoutRepoInput = {
    create?: XOR<EmbeddingCreateWithoutRepoInput, EmbeddingUncheckedCreateWithoutRepoInput> | EmbeddingCreateWithoutRepoInput[] | EmbeddingUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: EmbeddingCreateOrConnectWithoutRepoInput | EmbeddingCreateOrConnectWithoutRepoInput[]
    createMany?: EmbeddingCreateManyRepoInputEnvelope
    connect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrganizationUpdateOneRequiredWithoutReposNestedInput = {
    create?: XOR<OrganizationCreateWithoutReposInput, OrganizationUncheckedCreateWithoutReposInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutReposInput
    upsert?: OrganizationUpsertWithoutReposInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutReposInput, OrganizationUpdateWithoutReposInput>, OrganizationUncheckedUpdateWithoutReposInput>
  }

  export type CommitUpdateManyWithoutRepoNestedInput = {
    create?: XOR<CommitCreateWithoutRepoInput, CommitUncheckedCreateWithoutRepoInput> | CommitCreateWithoutRepoInput[] | CommitUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: CommitCreateOrConnectWithoutRepoInput | CommitCreateOrConnectWithoutRepoInput[]
    upsert?: CommitUpsertWithWhereUniqueWithoutRepoInput | CommitUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: CommitCreateManyRepoInputEnvelope
    set?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    disconnect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    delete?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    connect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    update?: CommitUpdateWithWhereUniqueWithoutRepoInput | CommitUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: CommitUpdateManyWithWhereWithoutRepoInput | CommitUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: CommitScalarWhereInput | CommitScalarWhereInput[]
  }

  export type PullRequestUpdateManyWithoutRepoNestedInput = {
    create?: XOR<PullRequestCreateWithoutRepoInput, PullRequestUncheckedCreateWithoutRepoInput> | PullRequestCreateWithoutRepoInput[] | PullRequestUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutRepoInput | PullRequestCreateOrConnectWithoutRepoInput[]
    upsert?: PullRequestUpsertWithWhereUniqueWithoutRepoInput | PullRequestUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: PullRequestCreateManyRepoInputEnvelope
    set?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    disconnect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    delete?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    update?: PullRequestUpdateWithWhereUniqueWithoutRepoInput | PullRequestUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: PullRequestUpdateManyWithWhereWithoutRepoInput | PullRequestUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
  }

  export type EmbeddingUpdateManyWithoutRepoNestedInput = {
    create?: XOR<EmbeddingCreateWithoutRepoInput, EmbeddingUncheckedCreateWithoutRepoInput> | EmbeddingCreateWithoutRepoInput[] | EmbeddingUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: EmbeddingCreateOrConnectWithoutRepoInput | EmbeddingCreateOrConnectWithoutRepoInput[]
    upsert?: EmbeddingUpsertWithWhereUniqueWithoutRepoInput | EmbeddingUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: EmbeddingCreateManyRepoInputEnvelope
    set?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    disconnect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    delete?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    connect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    update?: EmbeddingUpdateWithWhereUniqueWithoutRepoInput | EmbeddingUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: EmbeddingUpdateManyWithWhereWithoutRepoInput | EmbeddingUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: EmbeddingScalarWhereInput | EmbeddingScalarWhereInput[]
  }

  export type CommitUncheckedUpdateManyWithoutRepoNestedInput = {
    create?: XOR<CommitCreateWithoutRepoInput, CommitUncheckedCreateWithoutRepoInput> | CommitCreateWithoutRepoInput[] | CommitUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: CommitCreateOrConnectWithoutRepoInput | CommitCreateOrConnectWithoutRepoInput[]
    upsert?: CommitUpsertWithWhereUniqueWithoutRepoInput | CommitUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: CommitCreateManyRepoInputEnvelope
    set?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    disconnect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    delete?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    connect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    update?: CommitUpdateWithWhereUniqueWithoutRepoInput | CommitUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: CommitUpdateManyWithWhereWithoutRepoInput | CommitUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: CommitScalarWhereInput | CommitScalarWhereInput[]
  }

  export type PullRequestUncheckedUpdateManyWithoutRepoNestedInput = {
    create?: XOR<PullRequestCreateWithoutRepoInput, PullRequestUncheckedCreateWithoutRepoInput> | PullRequestCreateWithoutRepoInput[] | PullRequestUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutRepoInput | PullRequestCreateOrConnectWithoutRepoInput[]
    upsert?: PullRequestUpsertWithWhereUniqueWithoutRepoInput | PullRequestUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: PullRequestCreateManyRepoInputEnvelope
    set?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    disconnect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    delete?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    update?: PullRequestUpdateWithWhereUniqueWithoutRepoInput | PullRequestUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: PullRequestUpdateManyWithWhereWithoutRepoInput | PullRequestUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
  }

  export type EmbeddingUncheckedUpdateManyWithoutRepoNestedInput = {
    create?: XOR<EmbeddingCreateWithoutRepoInput, EmbeddingUncheckedCreateWithoutRepoInput> | EmbeddingCreateWithoutRepoInput[] | EmbeddingUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: EmbeddingCreateOrConnectWithoutRepoInput | EmbeddingCreateOrConnectWithoutRepoInput[]
    upsert?: EmbeddingUpsertWithWhereUniqueWithoutRepoInput | EmbeddingUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: EmbeddingCreateManyRepoInputEnvelope
    set?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    disconnect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    delete?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    connect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    update?: EmbeddingUpdateWithWhereUniqueWithoutRepoInput | EmbeddingUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: EmbeddingUpdateManyWithWhereWithoutRepoInput | EmbeddingUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: EmbeddingScalarWhereInput | EmbeddingScalarWhereInput[]
  }

  export type DeveloperCreatestrengthsInput = {
    set: string[]
  }

  export type OrganizationCreateNestedOneWithoutDevelopersInput = {
    create?: XOR<OrganizationCreateWithoutDevelopersInput, OrganizationUncheckedCreateWithoutDevelopersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDevelopersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type CommitCreateNestedManyWithoutDeveloperInput = {
    create?: XOR<CommitCreateWithoutDeveloperInput, CommitUncheckedCreateWithoutDeveloperInput> | CommitCreateWithoutDeveloperInput[] | CommitUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: CommitCreateOrConnectWithoutDeveloperInput | CommitCreateOrConnectWithoutDeveloperInput[]
    createMany?: CommitCreateManyDeveloperInputEnvelope
    connect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
  }

  export type PullRequestCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PullRequestCreateWithoutAuthorInput, PullRequestUncheckedCreateWithoutAuthorInput> | PullRequestCreateWithoutAuthorInput[] | PullRequestUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutAuthorInput | PullRequestCreateOrConnectWithoutAuthorInput[]
    createMany?: PullRequestCreateManyAuthorInputEnvelope
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CommitUncheckedCreateNestedManyWithoutDeveloperInput = {
    create?: XOR<CommitCreateWithoutDeveloperInput, CommitUncheckedCreateWithoutDeveloperInput> | CommitCreateWithoutDeveloperInput[] | CommitUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: CommitCreateOrConnectWithoutDeveloperInput | CommitCreateOrConnectWithoutDeveloperInput[]
    createMany?: CommitCreateManyDeveloperInputEnvelope
    connect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
  }

  export type PullRequestUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PullRequestCreateWithoutAuthorInput, PullRequestUncheckedCreateWithoutAuthorInput> | PullRequestCreateWithoutAuthorInput[] | PullRequestUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutAuthorInput | PullRequestCreateOrConnectWithoutAuthorInput[]
    createMany?: PullRequestCreateManyAuthorInputEnvelope
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type DeveloperUpdatestrengthsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationUpdateOneRequiredWithoutDevelopersNestedInput = {
    create?: XOR<OrganizationCreateWithoutDevelopersInput, OrganizationUncheckedCreateWithoutDevelopersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDevelopersInput
    upsert?: OrganizationUpsertWithoutDevelopersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutDevelopersInput, OrganizationUpdateWithoutDevelopersInput>, OrganizationUncheckedUpdateWithoutDevelopersInput>
  }

  export type CommitUpdateManyWithoutDeveloperNestedInput = {
    create?: XOR<CommitCreateWithoutDeveloperInput, CommitUncheckedCreateWithoutDeveloperInput> | CommitCreateWithoutDeveloperInput[] | CommitUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: CommitCreateOrConnectWithoutDeveloperInput | CommitCreateOrConnectWithoutDeveloperInput[]
    upsert?: CommitUpsertWithWhereUniqueWithoutDeveloperInput | CommitUpsertWithWhereUniqueWithoutDeveloperInput[]
    createMany?: CommitCreateManyDeveloperInputEnvelope
    set?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    disconnect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    delete?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    connect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    update?: CommitUpdateWithWhereUniqueWithoutDeveloperInput | CommitUpdateWithWhereUniqueWithoutDeveloperInput[]
    updateMany?: CommitUpdateManyWithWhereWithoutDeveloperInput | CommitUpdateManyWithWhereWithoutDeveloperInput[]
    deleteMany?: CommitScalarWhereInput | CommitScalarWhereInput[]
  }

  export type PullRequestUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PullRequestCreateWithoutAuthorInput, PullRequestUncheckedCreateWithoutAuthorInput> | PullRequestCreateWithoutAuthorInput[] | PullRequestUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutAuthorInput | PullRequestCreateOrConnectWithoutAuthorInput[]
    upsert?: PullRequestUpsertWithWhereUniqueWithoutAuthorInput | PullRequestUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PullRequestCreateManyAuthorInputEnvelope
    set?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    disconnect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    delete?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    update?: PullRequestUpdateWithWhereUniqueWithoutAuthorInput | PullRequestUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PullRequestUpdateManyWithWhereWithoutAuthorInput | PullRequestUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssigneeInput | TaskUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssigneeInput | TaskUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssigneeInput | TaskUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CommitUncheckedUpdateManyWithoutDeveloperNestedInput = {
    create?: XOR<CommitCreateWithoutDeveloperInput, CommitUncheckedCreateWithoutDeveloperInput> | CommitCreateWithoutDeveloperInput[] | CommitUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: CommitCreateOrConnectWithoutDeveloperInput | CommitCreateOrConnectWithoutDeveloperInput[]
    upsert?: CommitUpsertWithWhereUniqueWithoutDeveloperInput | CommitUpsertWithWhereUniqueWithoutDeveloperInput[]
    createMany?: CommitCreateManyDeveloperInputEnvelope
    set?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    disconnect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    delete?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    connect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    update?: CommitUpdateWithWhereUniqueWithoutDeveloperInput | CommitUpdateWithWhereUniqueWithoutDeveloperInput[]
    updateMany?: CommitUpdateManyWithWhereWithoutDeveloperInput | CommitUpdateManyWithWhereWithoutDeveloperInput[]
    deleteMany?: CommitScalarWhereInput | CommitScalarWhereInput[]
  }

  export type PullRequestUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PullRequestCreateWithoutAuthorInput, PullRequestUncheckedCreateWithoutAuthorInput> | PullRequestCreateWithoutAuthorInput[] | PullRequestUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutAuthorInput | PullRequestCreateOrConnectWithoutAuthorInput[]
    upsert?: PullRequestUpsertWithWhereUniqueWithoutAuthorInput | PullRequestUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PullRequestCreateManyAuthorInputEnvelope
    set?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    disconnect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    delete?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    update?: PullRequestUpdateWithWhereUniqueWithoutAuthorInput | PullRequestUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PullRequestUpdateManyWithWhereWithoutAuthorInput | PullRequestUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssigneeInput | TaskUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssigneeInput | TaskUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssigneeInput | TaskUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type RepositoryCreateNestedOneWithoutCommitsInput = {
    create?: XOR<RepositoryCreateWithoutCommitsInput, RepositoryUncheckedCreateWithoutCommitsInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutCommitsInput
    connect?: RepositoryWhereUniqueInput
  }

  export type DeveloperCreateNestedOneWithoutCommitsInput = {
    create?: XOR<DeveloperCreateWithoutCommitsInput, DeveloperUncheckedCreateWithoutCommitsInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutCommitsInput
    connect?: DeveloperWhereUniqueInput
  }

  export type RepositoryUpdateOneRequiredWithoutCommitsNestedInput = {
    create?: XOR<RepositoryCreateWithoutCommitsInput, RepositoryUncheckedCreateWithoutCommitsInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutCommitsInput
    upsert?: RepositoryUpsertWithoutCommitsInput
    connect?: RepositoryWhereUniqueInput
    update?: XOR<XOR<RepositoryUpdateToOneWithWhereWithoutCommitsInput, RepositoryUpdateWithoutCommitsInput>, RepositoryUncheckedUpdateWithoutCommitsInput>
  }

  export type DeveloperUpdateOneRequiredWithoutCommitsNestedInput = {
    create?: XOR<DeveloperCreateWithoutCommitsInput, DeveloperUncheckedCreateWithoutCommitsInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutCommitsInput
    upsert?: DeveloperUpsertWithoutCommitsInput
    connect?: DeveloperWhereUniqueInput
    update?: XOR<XOR<DeveloperUpdateToOneWithWhereWithoutCommitsInput, DeveloperUpdateWithoutCommitsInput>, DeveloperUncheckedUpdateWithoutCommitsInput>
  }

  export type RepositoryCreateNestedOneWithoutPullRequestsInput = {
    create?: XOR<RepositoryCreateWithoutPullRequestsInput, RepositoryUncheckedCreateWithoutPullRequestsInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutPullRequestsInput
    connect?: RepositoryWhereUniqueInput
  }

  export type DeveloperCreateNestedOneWithoutPullRequestsInput = {
    create?: XOR<DeveloperCreateWithoutPullRequestsInput, DeveloperUncheckedCreateWithoutPullRequestsInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutPullRequestsInput
    connect?: DeveloperWhereUniqueInput
  }

  export type PRFeedbackCreateNestedManyWithoutPrInput = {
    create?: XOR<PRFeedbackCreateWithoutPrInput, PRFeedbackUncheckedCreateWithoutPrInput> | PRFeedbackCreateWithoutPrInput[] | PRFeedbackUncheckedCreateWithoutPrInput[]
    connectOrCreate?: PRFeedbackCreateOrConnectWithoutPrInput | PRFeedbackCreateOrConnectWithoutPrInput[]
    createMany?: PRFeedbackCreateManyPrInputEnvelope
    connect?: PRFeedbackWhereUniqueInput | PRFeedbackWhereUniqueInput[]
  }

  export type PRFeedbackUncheckedCreateNestedManyWithoutPrInput = {
    create?: XOR<PRFeedbackCreateWithoutPrInput, PRFeedbackUncheckedCreateWithoutPrInput> | PRFeedbackCreateWithoutPrInput[] | PRFeedbackUncheckedCreateWithoutPrInput[]
    connectOrCreate?: PRFeedbackCreateOrConnectWithoutPrInput | PRFeedbackCreateOrConnectWithoutPrInput[]
    createMany?: PRFeedbackCreateManyPrInputEnvelope
    connect?: PRFeedbackWhereUniqueInput | PRFeedbackWhereUniqueInput[]
  }

  export type EnumPRStateFieldUpdateOperationsInput = {
    set?: $Enums.PRState
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RepositoryUpdateOneRequiredWithoutPullRequestsNestedInput = {
    create?: XOR<RepositoryCreateWithoutPullRequestsInput, RepositoryUncheckedCreateWithoutPullRequestsInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutPullRequestsInput
    upsert?: RepositoryUpsertWithoutPullRequestsInput
    connect?: RepositoryWhereUniqueInput
    update?: XOR<XOR<RepositoryUpdateToOneWithWhereWithoutPullRequestsInput, RepositoryUpdateWithoutPullRequestsInput>, RepositoryUncheckedUpdateWithoutPullRequestsInput>
  }

  export type DeveloperUpdateOneRequiredWithoutPullRequestsNestedInput = {
    create?: XOR<DeveloperCreateWithoutPullRequestsInput, DeveloperUncheckedCreateWithoutPullRequestsInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutPullRequestsInput
    upsert?: DeveloperUpsertWithoutPullRequestsInput
    connect?: DeveloperWhereUniqueInput
    update?: XOR<XOR<DeveloperUpdateToOneWithWhereWithoutPullRequestsInput, DeveloperUpdateWithoutPullRequestsInput>, DeveloperUncheckedUpdateWithoutPullRequestsInput>
  }

  export type PRFeedbackUpdateManyWithoutPrNestedInput = {
    create?: XOR<PRFeedbackCreateWithoutPrInput, PRFeedbackUncheckedCreateWithoutPrInput> | PRFeedbackCreateWithoutPrInput[] | PRFeedbackUncheckedCreateWithoutPrInput[]
    connectOrCreate?: PRFeedbackCreateOrConnectWithoutPrInput | PRFeedbackCreateOrConnectWithoutPrInput[]
    upsert?: PRFeedbackUpsertWithWhereUniqueWithoutPrInput | PRFeedbackUpsertWithWhereUniqueWithoutPrInput[]
    createMany?: PRFeedbackCreateManyPrInputEnvelope
    set?: PRFeedbackWhereUniqueInput | PRFeedbackWhereUniqueInput[]
    disconnect?: PRFeedbackWhereUniqueInput | PRFeedbackWhereUniqueInput[]
    delete?: PRFeedbackWhereUniqueInput | PRFeedbackWhereUniqueInput[]
    connect?: PRFeedbackWhereUniqueInput | PRFeedbackWhereUniqueInput[]
    update?: PRFeedbackUpdateWithWhereUniqueWithoutPrInput | PRFeedbackUpdateWithWhereUniqueWithoutPrInput[]
    updateMany?: PRFeedbackUpdateManyWithWhereWithoutPrInput | PRFeedbackUpdateManyWithWhereWithoutPrInput[]
    deleteMany?: PRFeedbackScalarWhereInput | PRFeedbackScalarWhereInput[]
  }

  export type PRFeedbackUncheckedUpdateManyWithoutPrNestedInput = {
    create?: XOR<PRFeedbackCreateWithoutPrInput, PRFeedbackUncheckedCreateWithoutPrInput> | PRFeedbackCreateWithoutPrInput[] | PRFeedbackUncheckedCreateWithoutPrInput[]
    connectOrCreate?: PRFeedbackCreateOrConnectWithoutPrInput | PRFeedbackCreateOrConnectWithoutPrInput[]
    upsert?: PRFeedbackUpsertWithWhereUniqueWithoutPrInput | PRFeedbackUpsertWithWhereUniqueWithoutPrInput[]
    createMany?: PRFeedbackCreateManyPrInputEnvelope
    set?: PRFeedbackWhereUniqueInput | PRFeedbackWhereUniqueInput[]
    disconnect?: PRFeedbackWhereUniqueInput | PRFeedbackWhereUniqueInput[]
    delete?: PRFeedbackWhereUniqueInput | PRFeedbackWhereUniqueInput[]
    connect?: PRFeedbackWhereUniqueInput | PRFeedbackWhereUniqueInput[]
    update?: PRFeedbackUpdateWithWhereUniqueWithoutPrInput | PRFeedbackUpdateWithWhereUniqueWithoutPrInput[]
    updateMany?: PRFeedbackUpdateManyWithWhereWithoutPrInput | PRFeedbackUpdateManyWithWhereWithoutPrInput[]
    deleteMany?: PRFeedbackScalarWhereInput | PRFeedbackScalarWhereInput[]
  }

  export type PullRequestCreateNestedOneWithoutFeedbackSentInput = {
    create?: XOR<PullRequestCreateWithoutFeedbackSentInput, PullRequestUncheckedCreateWithoutFeedbackSentInput>
    connectOrCreate?: PullRequestCreateOrConnectWithoutFeedbackSentInput
    connect?: PullRequestWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type PullRequestUpdateOneRequiredWithoutFeedbackSentNestedInput = {
    create?: XOR<PullRequestCreateWithoutFeedbackSentInput, PullRequestUncheckedCreateWithoutFeedbackSentInput>
    connectOrCreate?: PullRequestCreateOrConnectWithoutFeedbackSentInput
    upsert?: PullRequestUpsertWithoutFeedbackSentInput
    connect?: PullRequestWhereUniqueInput
    update?: XOR<XOR<PullRequestUpdateToOneWithWhereWithoutFeedbackSentInput, PullRequestUpdateWithoutFeedbackSentInput>, PullRequestUncheckedUpdateWithoutFeedbackSentInput>
  }

  export type MeetingCreategoalsInput = {
    set: string[]
  }

  export type MeetingCreateblockersInput = {
    set: string[]
  }

  export type MeetingCreatedecisionsInput = {
    set: string[]
  }

  export type OrganizationCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<OrganizationCreateWithoutMeetingsInput, OrganizationUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMeetingsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutMeetingInput = {
    create?: XOR<TaskCreateWithoutMeetingInput, TaskUncheckedCreateWithoutMeetingInput> | TaskCreateWithoutMeetingInput[] | TaskUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutMeetingInput | TaskCreateOrConnectWithoutMeetingInput[]
    createMany?: TaskCreateManyMeetingInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<TaskCreateWithoutMeetingInput, TaskUncheckedCreateWithoutMeetingInput> | TaskCreateWithoutMeetingInput[] | TaskUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutMeetingInput | TaskCreateOrConnectWithoutMeetingInput[]
    createMany?: TaskCreateManyMeetingInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EnumMeetingTypeFieldUpdateOperationsInput = {
    set?: $Enums.MeetingType
  }

  export type MeetingUpdategoalsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MeetingUpdateblockersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MeetingUpdatedecisionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type OrganizationUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<OrganizationCreateWithoutMeetingsInput, OrganizationUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMeetingsInput
    upsert?: OrganizationUpsertWithoutMeetingsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMeetingsInput, OrganizationUpdateWithoutMeetingsInput>, OrganizationUncheckedUpdateWithoutMeetingsInput>
  }

  export type TaskUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<TaskCreateWithoutMeetingInput, TaskUncheckedCreateWithoutMeetingInput> | TaskCreateWithoutMeetingInput[] | TaskUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutMeetingInput | TaskCreateOrConnectWithoutMeetingInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutMeetingInput | TaskUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: TaskCreateManyMeetingInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutMeetingInput | TaskUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutMeetingInput | TaskUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<TaskCreateWithoutMeetingInput, TaskUncheckedCreateWithoutMeetingInput> | TaskCreateWithoutMeetingInput[] | TaskUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutMeetingInput | TaskCreateOrConnectWithoutMeetingInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutMeetingInput | TaskUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: TaskCreateManyMeetingInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutMeetingInput | TaskUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutMeetingInput | TaskUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutTasksInput = {
    create?: XOR<OrganizationCreateWithoutTasksInput, OrganizationUncheckedCreateWithoutTasksInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTasksInput
    connect?: OrganizationWhereUniqueInput
  }

  export type MeetingCreateNestedOneWithoutTasksInput = {
    create?: XOR<MeetingCreateWithoutTasksInput, MeetingUncheckedCreateWithoutTasksInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutTasksInput
    connect?: MeetingWhereUniqueInput
  }

  export type DeveloperCreateNestedOneWithoutTaskAssignmentsInput = {
    create?: XOR<DeveloperCreateWithoutTaskAssignmentsInput, DeveloperUncheckedCreateWithoutTaskAssignmentsInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutTaskAssignmentsInput
    connect?: DeveloperWhereUniqueInput
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type OrganizationUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<OrganizationCreateWithoutTasksInput, OrganizationUncheckedCreateWithoutTasksInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTasksInput
    upsert?: OrganizationUpsertWithoutTasksInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutTasksInput, OrganizationUpdateWithoutTasksInput>, OrganizationUncheckedUpdateWithoutTasksInput>
  }

  export type MeetingUpdateOneWithoutTasksNestedInput = {
    create?: XOR<MeetingCreateWithoutTasksInput, MeetingUncheckedCreateWithoutTasksInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutTasksInput
    upsert?: MeetingUpsertWithoutTasksInput
    disconnect?: MeetingWhereInput | boolean
    delete?: MeetingWhereInput | boolean
    connect?: MeetingWhereUniqueInput
    update?: XOR<XOR<MeetingUpdateToOneWithWhereWithoutTasksInput, MeetingUpdateWithoutTasksInput>, MeetingUncheckedUpdateWithoutTasksInput>
  }

  export type DeveloperUpdateOneWithoutTaskAssignmentsNestedInput = {
    create?: XOR<DeveloperCreateWithoutTaskAssignmentsInput, DeveloperUncheckedCreateWithoutTaskAssignmentsInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutTaskAssignmentsInput
    upsert?: DeveloperUpsertWithoutTaskAssignmentsInput
    disconnect?: DeveloperWhereInput | boolean
    delete?: DeveloperWhereInput | boolean
    connect?: DeveloperWhereUniqueInput
    update?: XOR<XOR<DeveloperUpdateToOneWithWhereWithoutTaskAssignmentsInput, DeveloperUpdateWithoutTaskAssignmentsInput>, DeveloperUncheckedUpdateWithoutTaskAssignmentsInput>
  }

  export type OrganizationCreateNestedOneWithoutSprintsInput = {
    create?: XOR<OrganizationCreateWithoutSprintsInput, OrganizationUncheckedCreateWithoutSprintsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSprintsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationUpdateOneRequiredWithoutSprintsNestedInput = {
    create?: XOR<OrganizationCreateWithoutSprintsInput, OrganizationUncheckedCreateWithoutSprintsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSprintsInput
    upsert?: OrganizationUpsertWithoutSprintsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutSprintsInput, OrganizationUpdateWithoutSprintsInput>, OrganizationUncheckedUpdateWithoutSprintsInput>
  }

  export type OrganizationCreateNestedOneWithoutEmbeddingsInput = {
    create?: XOR<OrganizationCreateWithoutEmbeddingsInput, OrganizationUncheckedCreateWithoutEmbeddingsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEmbeddingsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type RepositoryCreateNestedOneWithoutEmbeddingsInput = {
    create?: XOR<RepositoryCreateWithoutEmbeddingsInput, RepositoryUncheckedCreateWithoutEmbeddingsInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutEmbeddingsInput
    connect?: RepositoryWhereUniqueInput
  }

  export type EnumEmbeddingSourceFieldUpdateOperationsInput = {
    set?: $Enums.EmbeddingSource
  }

  export type OrganizationUpdateOneRequiredWithoutEmbeddingsNestedInput = {
    create?: XOR<OrganizationCreateWithoutEmbeddingsInput, OrganizationUncheckedCreateWithoutEmbeddingsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEmbeddingsInput
    upsert?: OrganizationUpsertWithoutEmbeddingsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutEmbeddingsInput, OrganizationUpdateWithoutEmbeddingsInput>, OrganizationUncheckedUpdateWithoutEmbeddingsInput>
  }

  export type RepositoryUpdateOneWithoutEmbeddingsNestedInput = {
    create?: XOR<RepositoryCreateWithoutEmbeddingsInput, RepositoryUncheckedCreateWithoutEmbeddingsInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutEmbeddingsInput
    upsert?: RepositoryUpsertWithoutEmbeddingsInput
    disconnect?: RepositoryWhereInput | boolean
    delete?: RepositoryWhereInput | boolean
    connect?: RepositoryWhereUniqueInput
    update?: XOR<XOR<RepositoryUpdateToOneWithWhereWithoutEmbeddingsInput, RepositoryUpdateWithoutEmbeddingsInput>, RepositoryUncheckedUpdateWithoutEmbeddingsInput>
  }

  export type OrganizationCreateNestedOneWithoutChatSessionsInput = {
    create?: XOR<OrganizationCreateWithoutChatSessionsInput, OrganizationUncheckedCreateWithoutChatSessionsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutChatSessionsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutChatSessionsNestedInput = {
    create?: XOR<OrganizationCreateWithoutChatSessionsInput, OrganizationUncheckedCreateWithoutChatSessionsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutChatSessionsInput
    upsert?: OrganizationUpsertWithoutChatSessionsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutChatSessionsInput, OrganizationUpdateWithoutChatSessionsInput>, OrganizationUncheckedUpdateWithoutChatSessionsInput>
  }

  export type ChatMessageUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSessionInput | ChatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSessionInput | ChatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSessionInput | ChatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSessionInput | ChatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSessionInput | ChatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSessionInput | ChatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatSessionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
  }

  export type ChatSessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    upsert?: ChatSessionUpsertWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
    update?: XOR<XOR<ChatSessionUpdateToOneWithWhereWithoutMessagesInput, ChatSessionUpdateWithoutMessagesInput>, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumOrgRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgRoleFilter<$PrismaModel> | $Enums.OrgRole
  }

  export type NestedEnumOrgRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrgRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrgRoleFilter<$PrismaModel>
    _max?: NestedEnumOrgRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPRStateFilter<$PrismaModel = never> = {
    equals?: $Enums.PRState | EnumPRStateFieldRefInput<$PrismaModel>
    in?: $Enums.PRState[] | ListEnumPRStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRState[] | ListEnumPRStateFieldRefInput<$PrismaModel>
    not?: NestedEnumPRStateFilter<$PrismaModel> | $Enums.PRState
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPRStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PRState | EnumPRStateFieldRefInput<$PrismaModel>
    in?: $Enums.PRState[] | ListEnumPRStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRState[] | ListEnumPRStateFieldRefInput<$PrismaModel>
    not?: NestedEnumPRStateWithAggregatesFilter<$PrismaModel> | $Enums.PRState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPRStateFilter<$PrismaModel>
    _max?: NestedEnumPRStateFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumMeetingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingType | EnumMeetingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingType[] | ListEnumMeetingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeetingType[] | ListEnumMeetingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeetingTypeFilter<$PrismaModel> | $Enums.MeetingType
  }

  export type NestedEnumMeetingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingType | EnumMeetingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingType[] | ListEnumMeetingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeetingType[] | ListEnumMeetingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeetingTypeWithAggregatesFilter<$PrismaModel> | $Enums.MeetingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeetingTypeFilter<$PrismaModel>
    _max?: NestedEnumMeetingTypeFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumEmbeddingSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.EmbeddingSource | EnumEmbeddingSourceFieldRefInput<$PrismaModel>
    in?: $Enums.EmbeddingSource[] | ListEnumEmbeddingSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmbeddingSource[] | ListEnumEmbeddingSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumEmbeddingSourceFilter<$PrismaModel> | $Enums.EmbeddingSource
  }

  export type NestedEnumEmbeddingSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmbeddingSource | EnumEmbeddingSourceFieldRefInput<$PrismaModel>
    in?: $Enums.EmbeddingSource[] | ListEnumEmbeddingSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmbeddingSource[] | ListEnumEmbeddingSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumEmbeddingSourceWithAggregatesFilter<$PrismaModel> | $Enums.EmbeddingSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmbeddingSourceFilter<$PrismaModel>
    _max?: NestedEnumEmbeddingSourceFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type OrgMemberCreateWithoutOrgInput = {
    id?: string
    userId: string
    role?: $Enums.OrgRole
  }

  export type OrgMemberUncheckedCreateWithoutOrgInput = {
    id?: string
    userId: string
    role?: $Enums.OrgRole
  }

  export type OrgMemberCreateOrConnectWithoutOrgInput = {
    where: OrgMemberWhereUniqueInput
    create: XOR<OrgMemberCreateWithoutOrgInput, OrgMemberUncheckedCreateWithoutOrgInput>
  }

  export type OrgMemberCreateManyOrgInputEnvelope = {
    data: OrgMemberCreateManyOrgInput | OrgMemberCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type RepositoryCreateWithoutOrgInput = {
    id?: string
    githubId: number
    name: string
    fullName: string
    description?: string | null
    language?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    commits?: CommitCreateNestedManyWithoutRepoInput
    pullRequests?: PullRequestCreateNestedManyWithoutRepoInput
    embeddings?: EmbeddingCreateNestedManyWithoutRepoInput
  }

  export type RepositoryUncheckedCreateWithoutOrgInput = {
    id?: string
    githubId: number
    name: string
    fullName: string
    description?: string | null
    language?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    commits?: CommitUncheckedCreateNestedManyWithoutRepoInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutRepoInput
    embeddings?: EmbeddingUncheckedCreateNestedManyWithoutRepoInput
  }

  export type RepositoryCreateOrConnectWithoutOrgInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutOrgInput, RepositoryUncheckedCreateWithoutOrgInput>
  }

  export type RepositoryCreateManyOrgInputEnvelope = {
    data: RepositoryCreateManyOrgInput | RepositoryCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type DeveloperCreateWithoutOrgInput = {
    id?: string
    githubLogin: string
    githubId: number
    name?: string | null
    avatarUrl?: string | null
    discordUserId?: string | null
    strengths?: DeveloperCreatestrengthsInput | string[]
    currentLoad?: number
    burnoutSignal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commits?: CommitCreateNestedManyWithoutDeveloperInput
    pullRequests?: PullRequestCreateNestedManyWithoutAuthorInput
    taskAssignments?: TaskCreateNestedManyWithoutAssigneeInput
  }

  export type DeveloperUncheckedCreateWithoutOrgInput = {
    id?: string
    githubLogin: string
    githubId: number
    name?: string | null
    avatarUrl?: string | null
    discordUserId?: string | null
    strengths?: DeveloperCreatestrengthsInput | string[]
    currentLoad?: number
    burnoutSignal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commits?: CommitUncheckedCreateNestedManyWithoutDeveloperInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutAuthorInput
    taskAssignments?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
  }

  export type DeveloperCreateOrConnectWithoutOrgInput = {
    where: DeveloperWhereUniqueInput
    create: XOR<DeveloperCreateWithoutOrgInput, DeveloperUncheckedCreateWithoutOrgInput>
  }

  export type DeveloperCreateManyOrgInputEnvelope = {
    data: DeveloperCreateManyOrgInput | DeveloperCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type SprintCreateWithoutOrgInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    summary?: string | null
    velocity?: number | null
    predictability?: number | null
    createdAt?: Date | string
  }

  export type SprintUncheckedCreateWithoutOrgInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    summary?: string | null
    velocity?: number | null
    predictability?: number | null
    createdAt?: Date | string
  }

  export type SprintCreateOrConnectWithoutOrgInput = {
    where: SprintWhereUniqueInput
    create: XOR<SprintCreateWithoutOrgInput, SprintUncheckedCreateWithoutOrgInput>
  }

  export type SprintCreateManyOrgInputEnvelope = {
    data: SprintCreateManyOrgInput | SprintCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type MeetingCreateWithoutOrgInput = {
    id?: string
    title: string
    meetingType?: $Enums.MeetingType
    transcript?: string | null
    summary?: string | null
    goals?: MeetingCreategoalsInput | string[]
    blockers?: MeetingCreateblockersInput | string[]
    decisions?: MeetingCreatedecisionsInput | string[]
    occurredAt: Date | string
    createdAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutOrgInput = {
    id?: string
    title: string
    meetingType?: $Enums.MeetingType
    transcript?: string | null
    summary?: string | null
    goals?: MeetingCreategoalsInput | string[]
    blockers?: MeetingCreateblockersInput | string[]
    decisions?: MeetingCreatedecisionsInput | string[]
    occurredAt: Date | string
    createdAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutOrgInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutOrgInput, MeetingUncheckedCreateWithoutOrgInput>
  }

  export type MeetingCreateManyOrgInputEnvelope = {
    data: MeetingCreateManyOrgInput | MeetingCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutOrgInput = {
    id?: string
    title: string
    description?: string | null
    complexity?: number
    status?: $Enums.TaskStatus
    confidence?: number
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meeting?: MeetingCreateNestedOneWithoutTasksInput
    assignee?: DeveloperCreateNestedOneWithoutTaskAssignmentsInput
  }

  export type TaskUncheckedCreateWithoutOrgInput = {
    id?: string
    meetingId?: string | null
    assigneeId?: string | null
    title: string
    description?: string | null
    complexity?: number
    status?: $Enums.TaskStatus
    confidence?: number
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutOrgInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutOrgInput, TaskUncheckedCreateWithoutOrgInput>
  }

  export type TaskCreateManyOrgInputEnvelope = {
    data: TaskCreateManyOrgInput | TaskCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type EmbeddingCreateWithoutOrgInput = {
    id?: string
    sourceType: $Enums.EmbeddingSource
    sourceId: string
    content: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    repo?: RepositoryCreateNestedOneWithoutEmbeddingsInput
  }

  export type EmbeddingUncheckedCreateWithoutOrgInput = {
    id?: string
    repoId?: string | null
    sourceType: $Enums.EmbeddingSource
    sourceId: string
    content: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EmbeddingCreateOrConnectWithoutOrgInput = {
    where: EmbeddingWhereUniqueInput
    create: XOR<EmbeddingCreateWithoutOrgInput, EmbeddingUncheckedCreateWithoutOrgInput>
  }

  export type EmbeddingCreateManyOrgInputEnvelope = {
    data: EmbeddingCreateManyOrgInput | EmbeddingCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type ChatSessionCreateWithoutOrgInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateWithoutOrgInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionCreateOrConnectWithoutOrgInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutOrgInput, ChatSessionUncheckedCreateWithoutOrgInput>
  }

  export type ChatSessionCreateManyOrgInputEnvelope = {
    data: ChatSessionCreateManyOrgInput | ChatSessionCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type OrgMemberUpsertWithWhereUniqueWithoutOrgInput = {
    where: OrgMemberWhereUniqueInput
    update: XOR<OrgMemberUpdateWithoutOrgInput, OrgMemberUncheckedUpdateWithoutOrgInput>
    create: XOR<OrgMemberCreateWithoutOrgInput, OrgMemberUncheckedCreateWithoutOrgInput>
  }

  export type OrgMemberUpdateWithWhereUniqueWithoutOrgInput = {
    where: OrgMemberWhereUniqueInput
    data: XOR<OrgMemberUpdateWithoutOrgInput, OrgMemberUncheckedUpdateWithoutOrgInput>
  }

  export type OrgMemberUpdateManyWithWhereWithoutOrgInput = {
    where: OrgMemberScalarWhereInput
    data: XOR<OrgMemberUpdateManyMutationInput, OrgMemberUncheckedUpdateManyWithoutOrgInput>
  }

  export type OrgMemberScalarWhereInput = {
    AND?: OrgMemberScalarWhereInput | OrgMemberScalarWhereInput[]
    OR?: OrgMemberScalarWhereInput[]
    NOT?: OrgMemberScalarWhereInput | OrgMemberScalarWhereInput[]
    id?: StringFilter<"OrgMember"> | string
    userId?: StringFilter<"OrgMember"> | string
    orgId?: StringFilter<"OrgMember"> | string
    role?: EnumOrgRoleFilter<"OrgMember"> | $Enums.OrgRole
  }

  export type RepositoryUpsertWithWhereUniqueWithoutOrgInput = {
    where: RepositoryWhereUniqueInput
    update: XOR<RepositoryUpdateWithoutOrgInput, RepositoryUncheckedUpdateWithoutOrgInput>
    create: XOR<RepositoryCreateWithoutOrgInput, RepositoryUncheckedCreateWithoutOrgInput>
  }

  export type RepositoryUpdateWithWhereUniqueWithoutOrgInput = {
    where: RepositoryWhereUniqueInput
    data: XOR<RepositoryUpdateWithoutOrgInput, RepositoryUncheckedUpdateWithoutOrgInput>
  }

  export type RepositoryUpdateManyWithWhereWithoutOrgInput = {
    where: RepositoryScalarWhereInput
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyWithoutOrgInput>
  }

  export type RepositoryScalarWhereInput = {
    AND?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
    OR?: RepositoryScalarWhereInput[]
    NOT?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
    id?: StringFilter<"Repository"> | string
    orgId?: StringFilter<"Repository"> | string
    githubId?: IntFilter<"Repository"> | number
    name?: StringFilter<"Repository"> | string
    fullName?: StringFilter<"Repository"> | string
    description?: StringNullableFilter<"Repository"> | string | null
    language?: StringNullableFilter<"Repository"> | string | null
    isPrivate?: BoolFilter<"Repository"> | boolean
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    updatedAt?: DateTimeFilter<"Repository"> | Date | string
  }

  export type DeveloperUpsertWithWhereUniqueWithoutOrgInput = {
    where: DeveloperWhereUniqueInput
    update: XOR<DeveloperUpdateWithoutOrgInput, DeveloperUncheckedUpdateWithoutOrgInput>
    create: XOR<DeveloperCreateWithoutOrgInput, DeveloperUncheckedCreateWithoutOrgInput>
  }

  export type DeveloperUpdateWithWhereUniqueWithoutOrgInput = {
    where: DeveloperWhereUniqueInput
    data: XOR<DeveloperUpdateWithoutOrgInput, DeveloperUncheckedUpdateWithoutOrgInput>
  }

  export type DeveloperUpdateManyWithWhereWithoutOrgInput = {
    where: DeveloperScalarWhereInput
    data: XOR<DeveloperUpdateManyMutationInput, DeveloperUncheckedUpdateManyWithoutOrgInput>
  }

  export type DeveloperScalarWhereInput = {
    AND?: DeveloperScalarWhereInput | DeveloperScalarWhereInput[]
    OR?: DeveloperScalarWhereInput[]
    NOT?: DeveloperScalarWhereInput | DeveloperScalarWhereInput[]
    id?: StringFilter<"Developer"> | string
    orgId?: StringFilter<"Developer"> | string
    githubLogin?: StringFilter<"Developer"> | string
    githubId?: IntFilter<"Developer"> | number
    name?: StringNullableFilter<"Developer"> | string | null
    avatarUrl?: StringNullableFilter<"Developer"> | string | null
    discordUserId?: StringNullableFilter<"Developer"> | string | null
    strengths?: StringNullableListFilter<"Developer">
    currentLoad?: IntFilter<"Developer"> | number
    burnoutSignal?: FloatFilter<"Developer"> | number
    createdAt?: DateTimeFilter<"Developer"> | Date | string
    updatedAt?: DateTimeFilter<"Developer"> | Date | string
  }

  export type SprintUpsertWithWhereUniqueWithoutOrgInput = {
    where: SprintWhereUniqueInput
    update: XOR<SprintUpdateWithoutOrgInput, SprintUncheckedUpdateWithoutOrgInput>
    create: XOR<SprintCreateWithoutOrgInput, SprintUncheckedCreateWithoutOrgInput>
  }

  export type SprintUpdateWithWhereUniqueWithoutOrgInput = {
    where: SprintWhereUniqueInput
    data: XOR<SprintUpdateWithoutOrgInput, SprintUncheckedUpdateWithoutOrgInput>
  }

  export type SprintUpdateManyWithWhereWithoutOrgInput = {
    where: SprintScalarWhereInput
    data: XOR<SprintUpdateManyMutationInput, SprintUncheckedUpdateManyWithoutOrgInput>
  }

  export type SprintScalarWhereInput = {
    AND?: SprintScalarWhereInput | SprintScalarWhereInput[]
    OR?: SprintScalarWhereInput[]
    NOT?: SprintScalarWhereInput | SprintScalarWhereInput[]
    id?: StringFilter<"Sprint"> | string
    orgId?: StringFilter<"Sprint"> | string
    name?: StringFilter<"Sprint"> | string
    startDate?: DateTimeFilter<"Sprint"> | Date | string
    endDate?: DateTimeFilter<"Sprint"> | Date | string
    summary?: StringNullableFilter<"Sprint"> | string | null
    velocity?: FloatNullableFilter<"Sprint"> | number | null
    predictability?: FloatNullableFilter<"Sprint"> | number | null
    createdAt?: DateTimeFilter<"Sprint"> | Date | string
  }

  export type MeetingUpsertWithWhereUniqueWithoutOrgInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutOrgInput, MeetingUncheckedUpdateWithoutOrgInput>
    create: XOR<MeetingCreateWithoutOrgInput, MeetingUncheckedCreateWithoutOrgInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutOrgInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutOrgInput, MeetingUncheckedUpdateWithoutOrgInput>
  }

  export type MeetingUpdateManyWithWhereWithoutOrgInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutOrgInput>
  }

  export type MeetingScalarWhereInput = {
    AND?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    OR?: MeetingScalarWhereInput[]
    NOT?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    id?: StringFilter<"Meeting"> | string
    orgId?: StringFilter<"Meeting"> | string
    title?: StringFilter<"Meeting"> | string
    meetingType?: EnumMeetingTypeFilter<"Meeting"> | $Enums.MeetingType
    transcript?: StringNullableFilter<"Meeting"> | string | null
    summary?: StringNullableFilter<"Meeting"> | string | null
    goals?: StringNullableListFilter<"Meeting">
    blockers?: StringNullableListFilter<"Meeting">
    decisions?: StringNullableListFilter<"Meeting">
    occurredAt?: DateTimeFilter<"Meeting"> | Date | string
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutOrgInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutOrgInput, TaskUncheckedUpdateWithoutOrgInput>
    create: XOR<TaskCreateWithoutOrgInput, TaskUncheckedCreateWithoutOrgInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutOrgInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutOrgInput, TaskUncheckedUpdateWithoutOrgInput>
  }

  export type TaskUpdateManyWithWhereWithoutOrgInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutOrgInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    orgId?: StringFilter<"Task"> | string
    meetingId?: StringNullableFilter<"Task"> | string | null
    assigneeId?: StringNullableFilter<"Task"> | string | null
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    complexity?: IntFilter<"Task"> | number
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    confidence?: FloatFilter<"Task"> | number
    approvedBy?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type EmbeddingUpsertWithWhereUniqueWithoutOrgInput = {
    where: EmbeddingWhereUniqueInput
    update: XOR<EmbeddingUpdateWithoutOrgInput, EmbeddingUncheckedUpdateWithoutOrgInput>
    create: XOR<EmbeddingCreateWithoutOrgInput, EmbeddingUncheckedCreateWithoutOrgInput>
  }

  export type EmbeddingUpdateWithWhereUniqueWithoutOrgInput = {
    where: EmbeddingWhereUniqueInput
    data: XOR<EmbeddingUpdateWithoutOrgInput, EmbeddingUncheckedUpdateWithoutOrgInput>
  }

  export type EmbeddingUpdateManyWithWhereWithoutOrgInput = {
    where: EmbeddingScalarWhereInput
    data: XOR<EmbeddingUpdateManyMutationInput, EmbeddingUncheckedUpdateManyWithoutOrgInput>
  }

  export type EmbeddingScalarWhereInput = {
    AND?: EmbeddingScalarWhereInput | EmbeddingScalarWhereInput[]
    OR?: EmbeddingScalarWhereInput[]
    NOT?: EmbeddingScalarWhereInput | EmbeddingScalarWhereInput[]
    id?: StringFilter<"Embedding"> | string
    orgId?: StringFilter<"Embedding"> | string
    repoId?: StringNullableFilter<"Embedding"> | string | null
    sourceType?: EnumEmbeddingSourceFilter<"Embedding"> | $Enums.EmbeddingSource
    sourceId?: StringFilter<"Embedding"> | string
    content?: StringFilter<"Embedding"> | string
    metadata?: JsonFilter<"Embedding">
    createdAt?: DateTimeFilter<"Embedding"> | Date | string
  }

  export type ChatSessionUpsertWithWhereUniqueWithoutOrgInput = {
    where: ChatSessionWhereUniqueInput
    update: XOR<ChatSessionUpdateWithoutOrgInput, ChatSessionUncheckedUpdateWithoutOrgInput>
    create: XOR<ChatSessionCreateWithoutOrgInput, ChatSessionUncheckedCreateWithoutOrgInput>
  }

  export type ChatSessionUpdateWithWhereUniqueWithoutOrgInput = {
    where: ChatSessionWhereUniqueInput
    data: XOR<ChatSessionUpdateWithoutOrgInput, ChatSessionUncheckedUpdateWithoutOrgInput>
  }

  export type ChatSessionUpdateManyWithWhereWithoutOrgInput = {
    where: ChatSessionScalarWhereInput
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyWithoutOrgInput>
  }

  export type ChatSessionScalarWhereInput = {
    AND?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    OR?: ChatSessionScalarWhereInput[]
    NOT?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    userId?: StringFilter<"ChatSession"> | string
    orgId?: StringFilter<"ChatSession"> | string
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
  }

  export type OrganizationCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repos?: RepositoryCreateNestedManyWithoutOrgInput
    developers?: DeveloperCreateNestedManyWithoutOrgInput
    sprints?: SprintCreateNestedManyWithoutOrgInput
    meetings?: MeetingCreateNestedManyWithoutOrgInput
    tasks?: TaskCreateNestedManyWithoutOrgInput
    embeddings?: EmbeddingCreateNestedManyWithoutOrgInput
    chatSessions?: ChatSessionCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repos?: RepositoryUncheckedCreateNestedManyWithoutOrgInput
    developers?: DeveloperUncheckedCreateNestedManyWithoutOrgInput
    sprints?: SprintUncheckedCreateNestedManyWithoutOrgInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutOrgInput
    tasks?: TaskUncheckedCreateNestedManyWithoutOrgInput
    embeddings?: EmbeddingUncheckedCreateNestedManyWithoutOrgInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutMembersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
  }

  export type OrganizationUpsertWithoutMembersInput = {
    update: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMembersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type OrganizationUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repos?: RepositoryUpdateManyWithoutOrgNestedInput
    developers?: DeveloperUpdateManyWithoutOrgNestedInput
    sprints?: SprintUpdateManyWithoutOrgNestedInput
    meetings?: MeetingUpdateManyWithoutOrgNestedInput
    tasks?: TaskUpdateManyWithoutOrgNestedInput
    embeddings?: EmbeddingUpdateManyWithoutOrgNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repos?: RepositoryUncheckedUpdateManyWithoutOrgNestedInput
    developers?: DeveloperUncheckedUpdateManyWithoutOrgNestedInput
    sprints?: SprintUncheckedUpdateManyWithoutOrgNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutOrgNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutOrgNestedInput
    embeddings?: EmbeddingUncheckedUpdateManyWithoutOrgNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationCreateWithoutReposInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrgMemberCreateNestedManyWithoutOrgInput
    developers?: DeveloperCreateNestedManyWithoutOrgInput
    sprints?: SprintCreateNestedManyWithoutOrgInput
    meetings?: MeetingCreateNestedManyWithoutOrgInput
    tasks?: TaskCreateNestedManyWithoutOrgInput
    embeddings?: EmbeddingCreateNestedManyWithoutOrgInput
    chatSessions?: ChatSessionCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutReposInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrgMemberUncheckedCreateNestedManyWithoutOrgInput
    developers?: DeveloperUncheckedCreateNestedManyWithoutOrgInput
    sprints?: SprintUncheckedCreateNestedManyWithoutOrgInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutOrgInput
    tasks?: TaskUncheckedCreateNestedManyWithoutOrgInput
    embeddings?: EmbeddingUncheckedCreateNestedManyWithoutOrgInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutReposInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutReposInput, OrganizationUncheckedCreateWithoutReposInput>
  }

  export type CommitCreateWithoutRepoInput = {
    id?: string
    sha: string
    message: string
    additions?: number
    deletions?: number
    filesChanged?: number
    committedAt: Date | string
    developer: DeveloperCreateNestedOneWithoutCommitsInput
  }

  export type CommitUncheckedCreateWithoutRepoInput = {
    id?: string
    developerId: string
    sha: string
    message: string
    additions?: number
    deletions?: number
    filesChanged?: number
    committedAt: Date | string
  }

  export type CommitCreateOrConnectWithoutRepoInput = {
    where: CommitWhereUniqueInput
    create: XOR<CommitCreateWithoutRepoInput, CommitUncheckedCreateWithoutRepoInput>
  }

  export type CommitCreateManyRepoInputEnvelope = {
    data: CommitCreateManyRepoInput | CommitCreateManyRepoInput[]
    skipDuplicates?: boolean
  }

  export type PullRequestCreateWithoutRepoInput = {
    id?: string
    githubId: number
    number: number
    title: string
    body?: string | null
    state?: $Enums.PRState
    reviewCycles?: number
    additions?: number
    deletions?: number
    mergedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: DeveloperCreateNestedOneWithoutPullRequestsInput
    feedbackSent?: PRFeedbackCreateNestedManyWithoutPrInput
  }

  export type PullRequestUncheckedCreateWithoutRepoInput = {
    id?: string
    authorId: string
    githubId: number
    number: number
    title: string
    body?: string | null
    state?: $Enums.PRState
    reviewCycles?: number
    additions?: number
    deletions?: number
    mergedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    feedbackSent?: PRFeedbackUncheckedCreateNestedManyWithoutPrInput
  }

  export type PullRequestCreateOrConnectWithoutRepoInput = {
    where: PullRequestWhereUniqueInput
    create: XOR<PullRequestCreateWithoutRepoInput, PullRequestUncheckedCreateWithoutRepoInput>
  }

  export type PullRequestCreateManyRepoInputEnvelope = {
    data: PullRequestCreateManyRepoInput | PullRequestCreateManyRepoInput[]
    skipDuplicates?: boolean
  }

  export type EmbeddingCreateWithoutRepoInput = {
    id?: string
    sourceType: $Enums.EmbeddingSource
    sourceId: string
    content: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutEmbeddingsInput
  }

  export type EmbeddingUncheckedCreateWithoutRepoInput = {
    id?: string
    orgId: string
    sourceType: $Enums.EmbeddingSource
    sourceId: string
    content: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EmbeddingCreateOrConnectWithoutRepoInput = {
    where: EmbeddingWhereUniqueInput
    create: XOR<EmbeddingCreateWithoutRepoInput, EmbeddingUncheckedCreateWithoutRepoInput>
  }

  export type EmbeddingCreateManyRepoInputEnvelope = {
    data: EmbeddingCreateManyRepoInput | EmbeddingCreateManyRepoInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutReposInput = {
    update: XOR<OrganizationUpdateWithoutReposInput, OrganizationUncheckedUpdateWithoutReposInput>
    create: XOR<OrganizationCreateWithoutReposInput, OrganizationUncheckedCreateWithoutReposInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutReposInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutReposInput, OrganizationUncheckedUpdateWithoutReposInput>
  }

  export type OrganizationUpdateWithoutReposInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrgMemberUpdateManyWithoutOrgNestedInput
    developers?: DeveloperUpdateManyWithoutOrgNestedInput
    sprints?: SprintUpdateManyWithoutOrgNestedInput
    meetings?: MeetingUpdateManyWithoutOrgNestedInput
    tasks?: TaskUpdateManyWithoutOrgNestedInput
    embeddings?: EmbeddingUpdateManyWithoutOrgNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutReposInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrgMemberUncheckedUpdateManyWithoutOrgNestedInput
    developers?: DeveloperUncheckedUpdateManyWithoutOrgNestedInput
    sprints?: SprintUncheckedUpdateManyWithoutOrgNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutOrgNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutOrgNestedInput
    embeddings?: EmbeddingUncheckedUpdateManyWithoutOrgNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type CommitUpsertWithWhereUniqueWithoutRepoInput = {
    where: CommitWhereUniqueInput
    update: XOR<CommitUpdateWithoutRepoInput, CommitUncheckedUpdateWithoutRepoInput>
    create: XOR<CommitCreateWithoutRepoInput, CommitUncheckedCreateWithoutRepoInput>
  }

  export type CommitUpdateWithWhereUniqueWithoutRepoInput = {
    where: CommitWhereUniqueInput
    data: XOR<CommitUpdateWithoutRepoInput, CommitUncheckedUpdateWithoutRepoInput>
  }

  export type CommitUpdateManyWithWhereWithoutRepoInput = {
    where: CommitScalarWhereInput
    data: XOR<CommitUpdateManyMutationInput, CommitUncheckedUpdateManyWithoutRepoInput>
  }

  export type CommitScalarWhereInput = {
    AND?: CommitScalarWhereInput | CommitScalarWhereInput[]
    OR?: CommitScalarWhereInput[]
    NOT?: CommitScalarWhereInput | CommitScalarWhereInput[]
    id?: StringFilter<"Commit"> | string
    repoId?: StringFilter<"Commit"> | string
    developerId?: StringFilter<"Commit"> | string
    sha?: StringFilter<"Commit"> | string
    message?: StringFilter<"Commit"> | string
    additions?: IntFilter<"Commit"> | number
    deletions?: IntFilter<"Commit"> | number
    filesChanged?: IntFilter<"Commit"> | number
    committedAt?: DateTimeFilter<"Commit"> | Date | string
  }

  export type PullRequestUpsertWithWhereUniqueWithoutRepoInput = {
    where: PullRequestWhereUniqueInput
    update: XOR<PullRequestUpdateWithoutRepoInput, PullRequestUncheckedUpdateWithoutRepoInput>
    create: XOR<PullRequestCreateWithoutRepoInput, PullRequestUncheckedCreateWithoutRepoInput>
  }

  export type PullRequestUpdateWithWhereUniqueWithoutRepoInput = {
    where: PullRequestWhereUniqueInput
    data: XOR<PullRequestUpdateWithoutRepoInput, PullRequestUncheckedUpdateWithoutRepoInput>
  }

  export type PullRequestUpdateManyWithWhereWithoutRepoInput = {
    where: PullRequestScalarWhereInput
    data: XOR<PullRequestUpdateManyMutationInput, PullRequestUncheckedUpdateManyWithoutRepoInput>
  }

  export type PullRequestScalarWhereInput = {
    AND?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
    OR?: PullRequestScalarWhereInput[]
    NOT?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
    id?: StringFilter<"PullRequest"> | string
    repoId?: StringFilter<"PullRequest"> | string
    authorId?: StringFilter<"PullRequest"> | string
    githubId?: IntFilter<"PullRequest"> | number
    number?: IntFilter<"PullRequest"> | number
    title?: StringFilter<"PullRequest"> | string
    body?: StringNullableFilter<"PullRequest"> | string | null
    state?: EnumPRStateFilter<"PullRequest"> | $Enums.PRState
    reviewCycles?: IntFilter<"PullRequest"> | number
    additions?: IntFilter<"PullRequest"> | number
    deletions?: IntFilter<"PullRequest"> | number
    mergedAt?: DateTimeNullableFilter<"PullRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"PullRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PullRequest"> | Date | string
  }

  export type EmbeddingUpsertWithWhereUniqueWithoutRepoInput = {
    where: EmbeddingWhereUniqueInput
    update: XOR<EmbeddingUpdateWithoutRepoInput, EmbeddingUncheckedUpdateWithoutRepoInput>
    create: XOR<EmbeddingCreateWithoutRepoInput, EmbeddingUncheckedCreateWithoutRepoInput>
  }

  export type EmbeddingUpdateWithWhereUniqueWithoutRepoInput = {
    where: EmbeddingWhereUniqueInput
    data: XOR<EmbeddingUpdateWithoutRepoInput, EmbeddingUncheckedUpdateWithoutRepoInput>
  }

  export type EmbeddingUpdateManyWithWhereWithoutRepoInput = {
    where: EmbeddingScalarWhereInput
    data: XOR<EmbeddingUpdateManyMutationInput, EmbeddingUncheckedUpdateManyWithoutRepoInput>
  }

  export type OrganizationCreateWithoutDevelopersInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrgMemberCreateNestedManyWithoutOrgInput
    repos?: RepositoryCreateNestedManyWithoutOrgInput
    sprints?: SprintCreateNestedManyWithoutOrgInput
    meetings?: MeetingCreateNestedManyWithoutOrgInput
    tasks?: TaskCreateNestedManyWithoutOrgInput
    embeddings?: EmbeddingCreateNestedManyWithoutOrgInput
    chatSessions?: ChatSessionCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutDevelopersInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrgMemberUncheckedCreateNestedManyWithoutOrgInput
    repos?: RepositoryUncheckedCreateNestedManyWithoutOrgInput
    sprints?: SprintUncheckedCreateNestedManyWithoutOrgInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutOrgInput
    tasks?: TaskUncheckedCreateNestedManyWithoutOrgInput
    embeddings?: EmbeddingUncheckedCreateNestedManyWithoutOrgInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutDevelopersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutDevelopersInput, OrganizationUncheckedCreateWithoutDevelopersInput>
  }

  export type CommitCreateWithoutDeveloperInput = {
    id?: string
    sha: string
    message: string
    additions?: number
    deletions?: number
    filesChanged?: number
    committedAt: Date | string
    repo: RepositoryCreateNestedOneWithoutCommitsInput
  }

  export type CommitUncheckedCreateWithoutDeveloperInput = {
    id?: string
    repoId: string
    sha: string
    message: string
    additions?: number
    deletions?: number
    filesChanged?: number
    committedAt: Date | string
  }

  export type CommitCreateOrConnectWithoutDeveloperInput = {
    where: CommitWhereUniqueInput
    create: XOR<CommitCreateWithoutDeveloperInput, CommitUncheckedCreateWithoutDeveloperInput>
  }

  export type CommitCreateManyDeveloperInputEnvelope = {
    data: CommitCreateManyDeveloperInput | CommitCreateManyDeveloperInput[]
    skipDuplicates?: boolean
  }

  export type PullRequestCreateWithoutAuthorInput = {
    id?: string
    githubId: number
    number: number
    title: string
    body?: string | null
    state?: $Enums.PRState
    reviewCycles?: number
    additions?: number
    deletions?: number
    mergedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repo: RepositoryCreateNestedOneWithoutPullRequestsInput
    feedbackSent?: PRFeedbackCreateNestedManyWithoutPrInput
  }

  export type PullRequestUncheckedCreateWithoutAuthorInput = {
    id?: string
    repoId: string
    githubId: number
    number: number
    title: string
    body?: string | null
    state?: $Enums.PRState
    reviewCycles?: number
    additions?: number
    deletions?: number
    mergedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    feedbackSent?: PRFeedbackUncheckedCreateNestedManyWithoutPrInput
  }

  export type PullRequestCreateOrConnectWithoutAuthorInput = {
    where: PullRequestWhereUniqueInput
    create: XOR<PullRequestCreateWithoutAuthorInput, PullRequestUncheckedCreateWithoutAuthorInput>
  }

  export type PullRequestCreateManyAuthorInputEnvelope = {
    data: PullRequestCreateManyAuthorInput | PullRequestCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutAssigneeInput = {
    id?: string
    title: string
    description?: string | null
    complexity?: number
    status?: $Enums.TaskStatus
    confidence?: number
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrganizationCreateNestedOneWithoutTasksInput
    meeting?: MeetingCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutAssigneeInput = {
    id?: string
    orgId: string
    meetingId?: string | null
    title: string
    description?: string | null
    complexity?: number
    status?: $Enums.TaskStatus
    confidence?: number
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput>
  }

  export type TaskCreateManyAssigneeInputEnvelope = {
    data: TaskCreateManyAssigneeInput | TaskCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutDevelopersInput = {
    update: XOR<OrganizationUpdateWithoutDevelopersInput, OrganizationUncheckedUpdateWithoutDevelopersInput>
    create: XOR<OrganizationCreateWithoutDevelopersInput, OrganizationUncheckedCreateWithoutDevelopersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutDevelopersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutDevelopersInput, OrganizationUncheckedUpdateWithoutDevelopersInput>
  }

  export type OrganizationUpdateWithoutDevelopersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrgMemberUpdateManyWithoutOrgNestedInput
    repos?: RepositoryUpdateManyWithoutOrgNestedInput
    sprints?: SprintUpdateManyWithoutOrgNestedInput
    meetings?: MeetingUpdateManyWithoutOrgNestedInput
    tasks?: TaskUpdateManyWithoutOrgNestedInput
    embeddings?: EmbeddingUpdateManyWithoutOrgNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutDevelopersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrgMemberUncheckedUpdateManyWithoutOrgNestedInput
    repos?: RepositoryUncheckedUpdateManyWithoutOrgNestedInput
    sprints?: SprintUncheckedUpdateManyWithoutOrgNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutOrgNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutOrgNestedInput
    embeddings?: EmbeddingUncheckedUpdateManyWithoutOrgNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type CommitUpsertWithWhereUniqueWithoutDeveloperInput = {
    where: CommitWhereUniqueInput
    update: XOR<CommitUpdateWithoutDeveloperInput, CommitUncheckedUpdateWithoutDeveloperInput>
    create: XOR<CommitCreateWithoutDeveloperInput, CommitUncheckedCreateWithoutDeveloperInput>
  }

  export type CommitUpdateWithWhereUniqueWithoutDeveloperInput = {
    where: CommitWhereUniqueInput
    data: XOR<CommitUpdateWithoutDeveloperInput, CommitUncheckedUpdateWithoutDeveloperInput>
  }

  export type CommitUpdateManyWithWhereWithoutDeveloperInput = {
    where: CommitScalarWhereInput
    data: XOR<CommitUpdateManyMutationInput, CommitUncheckedUpdateManyWithoutDeveloperInput>
  }

  export type PullRequestUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PullRequestWhereUniqueInput
    update: XOR<PullRequestUpdateWithoutAuthorInput, PullRequestUncheckedUpdateWithoutAuthorInput>
    create: XOR<PullRequestCreateWithoutAuthorInput, PullRequestUncheckedCreateWithoutAuthorInput>
  }

  export type PullRequestUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PullRequestWhereUniqueInput
    data: XOR<PullRequestUpdateWithoutAuthorInput, PullRequestUncheckedUpdateWithoutAuthorInput>
  }

  export type PullRequestUpdateManyWithWhereWithoutAuthorInput = {
    where: PullRequestScalarWhereInput
    data: XOR<PullRequestUpdateManyMutationInput, PullRequestUncheckedUpdateManyWithoutAuthorInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssigneeInput, TaskUncheckedUpdateWithoutAssigneeInput>
    create: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssigneeInput, TaskUncheckedUpdateWithoutAssigneeInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssigneeInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type RepositoryCreateWithoutCommitsInput = {
    id?: string
    githubId: number
    name: string
    fullName: string
    description?: string | null
    language?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrganizationCreateNestedOneWithoutReposInput
    pullRequests?: PullRequestCreateNestedManyWithoutRepoInput
    embeddings?: EmbeddingCreateNestedManyWithoutRepoInput
  }

  export type RepositoryUncheckedCreateWithoutCommitsInput = {
    id?: string
    orgId: string
    githubId: number
    name: string
    fullName: string
    description?: string | null
    language?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutRepoInput
    embeddings?: EmbeddingUncheckedCreateNestedManyWithoutRepoInput
  }

  export type RepositoryCreateOrConnectWithoutCommitsInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutCommitsInput, RepositoryUncheckedCreateWithoutCommitsInput>
  }

  export type DeveloperCreateWithoutCommitsInput = {
    id?: string
    githubLogin: string
    githubId: number
    name?: string | null
    avatarUrl?: string | null
    discordUserId?: string | null
    strengths?: DeveloperCreatestrengthsInput | string[]
    currentLoad?: number
    burnoutSignal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrganizationCreateNestedOneWithoutDevelopersInput
    pullRequests?: PullRequestCreateNestedManyWithoutAuthorInput
    taskAssignments?: TaskCreateNestedManyWithoutAssigneeInput
  }

  export type DeveloperUncheckedCreateWithoutCommitsInput = {
    id?: string
    orgId: string
    githubLogin: string
    githubId: number
    name?: string | null
    avatarUrl?: string | null
    discordUserId?: string | null
    strengths?: DeveloperCreatestrengthsInput | string[]
    currentLoad?: number
    burnoutSignal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutAuthorInput
    taskAssignments?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
  }

  export type DeveloperCreateOrConnectWithoutCommitsInput = {
    where: DeveloperWhereUniqueInput
    create: XOR<DeveloperCreateWithoutCommitsInput, DeveloperUncheckedCreateWithoutCommitsInput>
  }

  export type RepositoryUpsertWithoutCommitsInput = {
    update: XOR<RepositoryUpdateWithoutCommitsInput, RepositoryUncheckedUpdateWithoutCommitsInput>
    create: XOR<RepositoryCreateWithoutCommitsInput, RepositoryUncheckedCreateWithoutCommitsInput>
    where?: RepositoryWhereInput
  }

  export type RepositoryUpdateToOneWithWhereWithoutCommitsInput = {
    where?: RepositoryWhereInput
    data: XOR<RepositoryUpdateWithoutCommitsInput, RepositoryUncheckedUpdateWithoutCommitsInput>
  }

  export type RepositoryUpdateWithoutCommitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutReposNestedInput
    pullRequests?: PullRequestUpdateManyWithoutRepoNestedInput
    embeddings?: EmbeddingUpdateManyWithoutRepoNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutCommitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pullRequests?: PullRequestUncheckedUpdateManyWithoutRepoNestedInput
    embeddings?: EmbeddingUncheckedUpdateManyWithoutRepoNestedInput
  }

  export type DeveloperUpsertWithoutCommitsInput = {
    update: XOR<DeveloperUpdateWithoutCommitsInput, DeveloperUncheckedUpdateWithoutCommitsInput>
    create: XOR<DeveloperCreateWithoutCommitsInput, DeveloperUncheckedCreateWithoutCommitsInput>
    where?: DeveloperWhereInput
  }

  export type DeveloperUpdateToOneWithWhereWithoutCommitsInput = {
    where?: DeveloperWhereInput
    data: XOR<DeveloperUpdateWithoutCommitsInput, DeveloperUncheckedUpdateWithoutCommitsInput>
  }

  export type DeveloperUpdateWithoutCommitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubLogin?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: DeveloperUpdatestrengthsInput | string[]
    currentLoad?: IntFieldUpdateOperationsInput | number
    burnoutSignal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutDevelopersNestedInput
    pullRequests?: PullRequestUpdateManyWithoutAuthorNestedInput
    taskAssignments?: TaskUpdateManyWithoutAssigneeNestedInput
  }

  export type DeveloperUncheckedUpdateWithoutCommitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    githubLogin?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: DeveloperUpdatestrengthsInput | string[]
    currentLoad?: IntFieldUpdateOperationsInput | number
    burnoutSignal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pullRequests?: PullRequestUncheckedUpdateManyWithoutAuthorNestedInput
    taskAssignments?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
  }

  export type RepositoryCreateWithoutPullRequestsInput = {
    id?: string
    githubId: number
    name: string
    fullName: string
    description?: string | null
    language?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrganizationCreateNestedOneWithoutReposInput
    commits?: CommitCreateNestedManyWithoutRepoInput
    embeddings?: EmbeddingCreateNestedManyWithoutRepoInput
  }

  export type RepositoryUncheckedCreateWithoutPullRequestsInput = {
    id?: string
    orgId: string
    githubId: number
    name: string
    fullName: string
    description?: string | null
    language?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    commits?: CommitUncheckedCreateNestedManyWithoutRepoInput
    embeddings?: EmbeddingUncheckedCreateNestedManyWithoutRepoInput
  }

  export type RepositoryCreateOrConnectWithoutPullRequestsInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutPullRequestsInput, RepositoryUncheckedCreateWithoutPullRequestsInput>
  }

  export type DeveloperCreateWithoutPullRequestsInput = {
    id?: string
    githubLogin: string
    githubId: number
    name?: string | null
    avatarUrl?: string | null
    discordUserId?: string | null
    strengths?: DeveloperCreatestrengthsInput | string[]
    currentLoad?: number
    burnoutSignal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrganizationCreateNestedOneWithoutDevelopersInput
    commits?: CommitCreateNestedManyWithoutDeveloperInput
    taskAssignments?: TaskCreateNestedManyWithoutAssigneeInput
  }

  export type DeveloperUncheckedCreateWithoutPullRequestsInput = {
    id?: string
    orgId: string
    githubLogin: string
    githubId: number
    name?: string | null
    avatarUrl?: string | null
    discordUserId?: string | null
    strengths?: DeveloperCreatestrengthsInput | string[]
    currentLoad?: number
    burnoutSignal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commits?: CommitUncheckedCreateNestedManyWithoutDeveloperInput
    taskAssignments?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
  }

  export type DeveloperCreateOrConnectWithoutPullRequestsInput = {
    where: DeveloperWhereUniqueInput
    create: XOR<DeveloperCreateWithoutPullRequestsInput, DeveloperUncheckedCreateWithoutPullRequestsInput>
  }

  export type PRFeedbackCreateWithoutPrInput = {
    id?: string
    feedbackType: string
    content: string
    sentViaDiscord?: boolean
    accepted?: boolean | null
    createdAt?: Date | string
  }

  export type PRFeedbackUncheckedCreateWithoutPrInput = {
    id?: string
    feedbackType: string
    content: string
    sentViaDiscord?: boolean
    accepted?: boolean | null
    createdAt?: Date | string
  }

  export type PRFeedbackCreateOrConnectWithoutPrInput = {
    where: PRFeedbackWhereUniqueInput
    create: XOR<PRFeedbackCreateWithoutPrInput, PRFeedbackUncheckedCreateWithoutPrInput>
  }

  export type PRFeedbackCreateManyPrInputEnvelope = {
    data: PRFeedbackCreateManyPrInput | PRFeedbackCreateManyPrInput[]
    skipDuplicates?: boolean
  }

  export type RepositoryUpsertWithoutPullRequestsInput = {
    update: XOR<RepositoryUpdateWithoutPullRequestsInput, RepositoryUncheckedUpdateWithoutPullRequestsInput>
    create: XOR<RepositoryCreateWithoutPullRequestsInput, RepositoryUncheckedCreateWithoutPullRequestsInput>
    where?: RepositoryWhereInput
  }

  export type RepositoryUpdateToOneWithWhereWithoutPullRequestsInput = {
    where?: RepositoryWhereInput
    data: XOR<RepositoryUpdateWithoutPullRequestsInput, RepositoryUncheckedUpdateWithoutPullRequestsInput>
  }

  export type RepositoryUpdateWithoutPullRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutReposNestedInput
    commits?: CommitUpdateManyWithoutRepoNestedInput
    embeddings?: EmbeddingUpdateManyWithoutRepoNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutPullRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commits?: CommitUncheckedUpdateManyWithoutRepoNestedInput
    embeddings?: EmbeddingUncheckedUpdateManyWithoutRepoNestedInput
  }

  export type DeveloperUpsertWithoutPullRequestsInput = {
    update: XOR<DeveloperUpdateWithoutPullRequestsInput, DeveloperUncheckedUpdateWithoutPullRequestsInput>
    create: XOR<DeveloperCreateWithoutPullRequestsInput, DeveloperUncheckedCreateWithoutPullRequestsInput>
    where?: DeveloperWhereInput
  }

  export type DeveloperUpdateToOneWithWhereWithoutPullRequestsInput = {
    where?: DeveloperWhereInput
    data: XOR<DeveloperUpdateWithoutPullRequestsInput, DeveloperUncheckedUpdateWithoutPullRequestsInput>
  }

  export type DeveloperUpdateWithoutPullRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubLogin?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: DeveloperUpdatestrengthsInput | string[]
    currentLoad?: IntFieldUpdateOperationsInput | number
    burnoutSignal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutDevelopersNestedInput
    commits?: CommitUpdateManyWithoutDeveloperNestedInput
    taskAssignments?: TaskUpdateManyWithoutAssigneeNestedInput
  }

  export type DeveloperUncheckedUpdateWithoutPullRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    githubLogin?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: DeveloperUpdatestrengthsInput | string[]
    currentLoad?: IntFieldUpdateOperationsInput | number
    burnoutSignal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commits?: CommitUncheckedUpdateManyWithoutDeveloperNestedInput
    taskAssignments?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
  }

  export type PRFeedbackUpsertWithWhereUniqueWithoutPrInput = {
    where: PRFeedbackWhereUniqueInput
    update: XOR<PRFeedbackUpdateWithoutPrInput, PRFeedbackUncheckedUpdateWithoutPrInput>
    create: XOR<PRFeedbackCreateWithoutPrInput, PRFeedbackUncheckedCreateWithoutPrInput>
  }

  export type PRFeedbackUpdateWithWhereUniqueWithoutPrInput = {
    where: PRFeedbackWhereUniqueInput
    data: XOR<PRFeedbackUpdateWithoutPrInput, PRFeedbackUncheckedUpdateWithoutPrInput>
  }

  export type PRFeedbackUpdateManyWithWhereWithoutPrInput = {
    where: PRFeedbackScalarWhereInput
    data: XOR<PRFeedbackUpdateManyMutationInput, PRFeedbackUncheckedUpdateManyWithoutPrInput>
  }

  export type PRFeedbackScalarWhereInput = {
    AND?: PRFeedbackScalarWhereInput | PRFeedbackScalarWhereInput[]
    OR?: PRFeedbackScalarWhereInput[]
    NOT?: PRFeedbackScalarWhereInput | PRFeedbackScalarWhereInput[]
    id?: StringFilter<"PRFeedback"> | string
    prId?: StringFilter<"PRFeedback"> | string
    feedbackType?: StringFilter<"PRFeedback"> | string
    content?: StringFilter<"PRFeedback"> | string
    sentViaDiscord?: BoolFilter<"PRFeedback"> | boolean
    accepted?: BoolNullableFilter<"PRFeedback"> | boolean | null
    createdAt?: DateTimeFilter<"PRFeedback"> | Date | string
  }

  export type PullRequestCreateWithoutFeedbackSentInput = {
    id?: string
    githubId: number
    number: number
    title: string
    body?: string | null
    state?: $Enums.PRState
    reviewCycles?: number
    additions?: number
    deletions?: number
    mergedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repo: RepositoryCreateNestedOneWithoutPullRequestsInput
    author: DeveloperCreateNestedOneWithoutPullRequestsInput
  }

  export type PullRequestUncheckedCreateWithoutFeedbackSentInput = {
    id?: string
    repoId: string
    authorId: string
    githubId: number
    number: number
    title: string
    body?: string | null
    state?: $Enums.PRState
    reviewCycles?: number
    additions?: number
    deletions?: number
    mergedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PullRequestCreateOrConnectWithoutFeedbackSentInput = {
    where: PullRequestWhereUniqueInput
    create: XOR<PullRequestCreateWithoutFeedbackSentInput, PullRequestUncheckedCreateWithoutFeedbackSentInput>
  }

  export type PullRequestUpsertWithoutFeedbackSentInput = {
    update: XOR<PullRequestUpdateWithoutFeedbackSentInput, PullRequestUncheckedUpdateWithoutFeedbackSentInput>
    create: XOR<PullRequestCreateWithoutFeedbackSentInput, PullRequestUncheckedCreateWithoutFeedbackSentInput>
    where?: PullRequestWhereInput
  }

  export type PullRequestUpdateToOneWithWhereWithoutFeedbackSentInput = {
    where?: PullRequestWhereInput
    data: XOR<PullRequestUpdateWithoutFeedbackSentInput, PullRequestUncheckedUpdateWithoutFeedbackSentInput>
  }

  export type PullRequestUpdateWithoutFeedbackSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumPRStateFieldUpdateOperationsInput | $Enums.PRState
    reviewCycles?: IntFieldUpdateOperationsInput | number
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    mergedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repo?: RepositoryUpdateOneRequiredWithoutPullRequestsNestedInput
    author?: DeveloperUpdateOneRequiredWithoutPullRequestsNestedInput
  }

  export type PullRequestUncheckedUpdateWithoutFeedbackSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumPRStateFieldUpdateOperationsInput | $Enums.PRState
    reviewCycles?: IntFieldUpdateOperationsInput | number
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    mergedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateWithoutMeetingsInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrgMemberCreateNestedManyWithoutOrgInput
    repos?: RepositoryCreateNestedManyWithoutOrgInput
    developers?: DeveloperCreateNestedManyWithoutOrgInput
    sprints?: SprintCreateNestedManyWithoutOrgInput
    tasks?: TaskCreateNestedManyWithoutOrgInput
    embeddings?: EmbeddingCreateNestedManyWithoutOrgInput
    chatSessions?: ChatSessionCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutMeetingsInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrgMemberUncheckedCreateNestedManyWithoutOrgInput
    repos?: RepositoryUncheckedCreateNestedManyWithoutOrgInput
    developers?: DeveloperUncheckedCreateNestedManyWithoutOrgInput
    sprints?: SprintUncheckedCreateNestedManyWithoutOrgInput
    tasks?: TaskUncheckedCreateNestedManyWithoutOrgInput
    embeddings?: EmbeddingUncheckedCreateNestedManyWithoutOrgInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutMeetingsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMeetingsInput, OrganizationUncheckedCreateWithoutMeetingsInput>
  }

  export type TaskCreateWithoutMeetingInput = {
    id?: string
    title: string
    description?: string | null
    complexity?: number
    status?: $Enums.TaskStatus
    confidence?: number
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrganizationCreateNestedOneWithoutTasksInput
    assignee?: DeveloperCreateNestedOneWithoutTaskAssignmentsInput
  }

  export type TaskUncheckedCreateWithoutMeetingInput = {
    id?: string
    orgId: string
    assigneeId?: string | null
    title: string
    description?: string | null
    complexity?: number
    status?: $Enums.TaskStatus
    confidence?: number
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutMeetingInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutMeetingInput, TaskUncheckedCreateWithoutMeetingInput>
  }

  export type TaskCreateManyMeetingInputEnvelope = {
    data: TaskCreateManyMeetingInput | TaskCreateManyMeetingInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutMeetingsInput = {
    update: XOR<OrganizationUpdateWithoutMeetingsInput, OrganizationUncheckedUpdateWithoutMeetingsInput>
    create: XOR<OrganizationCreateWithoutMeetingsInput, OrganizationUncheckedCreateWithoutMeetingsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMeetingsInput, OrganizationUncheckedUpdateWithoutMeetingsInput>
  }

  export type OrganizationUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrgMemberUpdateManyWithoutOrgNestedInput
    repos?: RepositoryUpdateManyWithoutOrgNestedInput
    developers?: DeveloperUpdateManyWithoutOrgNestedInput
    sprints?: SprintUpdateManyWithoutOrgNestedInput
    tasks?: TaskUpdateManyWithoutOrgNestedInput
    embeddings?: EmbeddingUpdateManyWithoutOrgNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrgMemberUncheckedUpdateManyWithoutOrgNestedInput
    repos?: RepositoryUncheckedUpdateManyWithoutOrgNestedInput
    developers?: DeveloperUncheckedUpdateManyWithoutOrgNestedInput
    sprints?: SprintUncheckedUpdateManyWithoutOrgNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutOrgNestedInput
    embeddings?: EmbeddingUncheckedUpdateManyWithoutOrgNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutMeetingInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutMeetingInput, TaskUncheckedUpdateWithoutMeetingInput>
    create: XOR<TaskCreateWithoutMeetingInput, TaskUncheckedCreateWithoutMeetingInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutMeetingInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutMeetingInput, TaskUncheckedUpdateWithoutMeetingInput>
  }

  export type TaskUpdateManyWithWhereWithoutMeetingInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutMeetingInput>
  }

  export type OrganizationCreateWithoutTasksInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrgMemberCreateNestedManyWithoutOrgInput
    repos?: RepositoryCreateNestedManyWithoutOrgInput
    developers?: DeveloperCreateNestedManyWithoutOrgInput
    sprints?: SprintCreateNestedManyWithoutOrgInput
    meetings?: MeetingCreateNestedManyWithoutOrgInput
    embeddings?: EmbeddingCreateNestedManyWithoutOrgInput
    chatSessions?: ChatSessionCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrgMemberUncheckedCreateNestedManyWithoutOrgInput
    repos?: RepositoryUncheckedCreateNestedManyWithoutOrgInput
    developers?: DeveloperUncheckedCreateNestedManyWithoutOrgInput
    sprints?: SprintUncheckedCreateNestedManyWithoutOrgInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutOrgInput
    embeddings?: EmbeddingUncheckedCreateNestedManyWithoutOrgInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutTasksInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutTasksInput, OrganizationUncheckedCreateWithoutTasksInput>
  }

  export type MeetingCreateWithoutTasksInput = {
    id?: string
    title: string
    meetingType?: $Enums.MeetingType
    transcript?: string | null
    summary?: string | null
    goals?: MeetingCreategoalsInput | string[]
    blockers?: MeetingCreateblockersInput | string[]
    decisions?: MeetingCreatedecisionsInput | string[]
    occurredAt: Date | string
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutMeetingsInput
  }

  export type MeetingUncheckedCreateWithoutTasksInput = {
    id?: string
    orgId: string
    title: string
    meetingType?: $Enums.MeetingType
    transcript?: string | null
    summary?: string | null
    goals?: MeetingCreategoalsInput | string[]
    blockers?: MeetingCreateblockersInput | string[]
    decisions?: MeetingCreatedecisionsInput | string[]
    occurredAt: Date | string
    createdAt?: Date | string
  }

  export type MeetingCreateOrConnectWithoutTasksInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutTasksInput, MeetingUncheckedCreateWithoutTasksInput>
  }

  export type DeveloperCreateWithoutTaskAssignmentsInput = {
    id?: string
    githubLogin: string
    githubId: number
    name?: string | null
    avatarUrl?: string | null
    discordUserId?: string | null
    strengths?: DeveloperCreatestrengthsInput | string[]
    currentLoad?: number
    burnoutSignal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrganizationCreateNestedOneWithoutDevelopersInput
    commits?: CommitCreateNestedManyWithoutDeveloperInput
    pullRequests?: PullRequestCreateNestedManyWithoutAuthorInput
  }

  export type DeveloperUncheckedCreateWithoutTaskAssignmentsInput = {
    id?: string
    orgId: string
    githubLogin: string
    githubId: number
    name?: string | null
    avatarUrl?: string | null
    discordUserId?: string | null
    strengths?: DeveloperCreatestrengthsInput | string[]
    currentLoad?: number
    burnoutSignal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commits?: CommitUncheckedCreateNestedManyWithoutDeveloperInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type DeveloperCreateOrConnectWithoutTaskAssignmentsInput = {
    where: DeveloperWhereUniqueInput
    create: XOR<DeveloperCreateWithoutTaskAssignmentsInput, DeveloperUncheckedCreateWithoutTaskAssignmentsInput>
  }

  export type OrganizationUpsertWithoutTasksInput = {
    update: XOR<OrganizationUpdateWithoutTasksInput, OrganizationUncheckedUpdateWithoutTasksInput>
    create: XOR<OrganizationCreateWithoutTasksInput, OrganizationUncheckedCreateWithoutTasksInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutTasksInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutTasksInput, OrganizationUncheckedUpdateWithoutTasksInput>
  }

  export type OrganizationUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrgMemberUpdateManyWithoutOrgNestedInput
    repos?: RepositoryUpdateManyWithoutOrgNestedInput
    developers?: DeveloperUpdateManyWithoutOrgNestedInput
    sprints?: SprintUpdateManyWithoutOrgNestedInput
    meetings?: MeetingUpdateManyWithoutOrgNestedInput
    embeddings?: EmbeddingUpdateManyWithoutOrgNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrgMemberUncheckedUpdateManyWithoutOrgNestedInput
    repos?: RepositoryUncheckedUpdateManyWithoutOrgNestedInput
    developers?: DeveloperUncheckedUpdateManyWithoutOrgNestedInput
    sprints?: SprintUncheckedUpdateManyWithoutOrgNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutOrgNestedInput
    embeddings?: EmbeddingUncheckedUpdateManyWithoutOrgNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type MeetingUpsertWithoutTasksInput = {
    update: XOR<MeetingUpdateWithoutTasksInput, MeetingUncheckedUpdateWithoutTasksInput>
    create: XOR<MeetingCreateWithoutTasksInput, MeetingUncheckedCreateWithoutTasksInput>
    where?: MeetingWhereInput
  }

  export type MeetingUpdateToOneWithWhereWithoutTasksInput = {
    where?: MeetingWhereInput
    data: XOR<MeetingUpdateWithoutTasksInput, MeetingUncheckedUpdateWithoutTasksInput>
  }

  export type MeetingUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    meetingType?: EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: MeetingUpdategoalsInput | string[]
    blockers?: MeetingUpdateblockersInput | string[]
    decisions?: MeetingUpdatedecisionsInput | string[]
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    meetingType?: EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: MeetingUpdategoalsInput | string[]
    blockers?: MeetingUpdateblockersInput | string[]
    decisions?: MeetingUpdatedecisionsInput | string[]
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeveloperUpsertWithoutTaskAssignmentsInput = {
    update: XOR<DeveloperUpdateWithoutTaskAssignmentsInput, DeveloperUncheckedUpdateWithoutTaskAssignmentsInput>
    create: XOR<DeveloperCreateWithoutTaskAssignmentsInput, DeveloperUncheckedCreateWithoutTaskAssignmentsInput>
    where?: DeveloperWhereInput
  }

  export type DeveloperUpdateToOneWithWhereWithoutTaskAssignmentsInput = {
    where?: DeveloperWhereInput
    data: XOR<DeveloperUpdateWithoutTaskAssignmentsInput, DeveloperUncheckedUpdateWithoutTaskAssignmentsInput>
  }

  export type DeveloperUpdateWithoutTaskAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubLogin?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: DeveloperUpdatestrengthsInput | string[]
    currentLoad?: IntFieldUpdateOperationsInput | number
    burnoutSignal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutDevelopersNestedInput
    commits?: CommitUpdateManyWithoutDeveloperNestedInput
    pullRequests?: PullRequestUpdateManyWithoutAuthorNestedInput
  }

  export type DeveloperUncheckedUpdateWithoutTaskAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    githubLogin?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: DeveloperUpdatestrengthsInput | string[]
    currentLoad?: IntFieldUpdateOperationsInput | number
    burnoutSignal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commits?: CommitUncheckedUpdateManyWithoutDeveloperNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type OrganizationCreateWithoutSprintsInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrgMemberCreateNestedManyWithoutOrgInput
    repos?: RepositoryCreateNestedManyWithoutOrgInput
    developers?: DeveloperCreateNestedManyWithoutOrgInput
    meetings?: MeetingCreateNestedManyWithoutOrgInput
    tasks?: TaskCreateNestedManyWithoutOrgInput
    embeddings?: EmbeddingCreateNestedManyWithoutOrgInput
    chatSessions?: ChatSessionCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutSprintsInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrgMemberUncheckedCreateNestedManyWithoutOrgInput
    repos?: RepositoryUncheckedCreateNestedManyWithoutOrgInput
    developers?: DeveloperUncheckedCreateNestedManyWithoutOrgInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutOrgInput
    tasks?: TaskUncheckedCreateNestedManyWithoutOrgInput
    embeddings?: EmbeddingUncheckedCreateNestedManyWithoutOrgInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutSprintsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutSprintsInput, OrganizationUncheckedCreateWithoutSprintsInput>
  }

  export type OrganizationUpsertWithoutSprintsInput = {
    update: XOR<OrganizationUpdateWithoutSprintsInput, OrganizationUncheckedUpdateWithoutSprintsInput>
    create: XOR<OrganizationCreateWithoutSprintsInput, OrganizationUncheckedCreateWithoutSprintsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutSprintsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutSprintsInput, OrganizationUncheckedUpdateWithoutSprintsInput>
  }

  export type OrganizationUpdateWithoutSprintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrgMemberUpdateManyWithoutOrgNestedInput
    repos?: RepositoryUpdateManyWithoutOrgNestedInput
    developers?: DeveloperUpdateManyWithoutOrgNestedInput
    meetings?: MeetingUpdateManyWithoutOrgNestedInput
    tasks?: TaskUpdateManyWithoutOrgNestedInput
    embeddings?: EmbeddingUpdateManyWithoutOrgNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutSprintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrgMemberUncheckedUpdateManyWithoutOrgNestedInput
    repos?: RepositoryUncheckedUpdateManyWithoutOrgNestedInput
    developers?: DeveloperUncheckedUpdateManyWithoutOrgNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutOrgNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutOrgNestedInput
    embeddings?: EmbeddingUncheckedUpdateManyWithoutOrgNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationCreateWithoutEmbeddingsInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrgMemberCreateNestedManyWithoutOrgInput
    repos?: RepositoryCreateNestedManyWithoutOrgInput
    developers?: DeveloperCreateNestedManyWithoutOrgInput
    sprints?: SprintCreateNestedManyWithoutOrgInput
    meetings?: MeetingCreateNestedManyWithoutOrgInput
    tasks?: TaskCreateNestedManyWithoutOrgInput
    chatSessions?: ChatSessionCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutEmbeddingsInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrgMemberUncheckedCreateNestedManyWithoutOrgInput
    repos?: RepositoryUncheckedCreateNestedManyWithoutOrgInput
    developers?: DeveloperUncheckedCreateNestedManyWithoutOrgInput
    sprints?: SprintUncheckedCreateNestedManyWithoutOrgInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutOrgInput
    tasks?: TaskUncheckedCreateNestedManyWithoutOrgInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutEmbeddingsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutEmbeddingsInput, OrganizationUncheckedCreateWithoutEmbeddingsInput>
  }

  export type RepositoryCreateWithoutEmbeddingsInput = {
    id?: string
    githubId: number
    name: string
    fullName: string
    description?: string | null
    language?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrganizationCreateNestedOneWithoutReposInput
    commits?: CommitCreateNestedManyWithoutRepoInput
    pullRequests?: PullRequestCreateNestedManyWithoutRepoInput
  }

  export type RepositoryUncheckedCreateWithoutEmbeddingsInput = {
    id?: string
    orgId: string
    githubId: number
    name: string
    fullName: string
    description?: string | null
    language?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    commits?: CommitUncheckedCreateNestedManyWithoutRepoInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutRepoInput
  }

  export type RepositoryCreateOrConnectWithoutEmbeddingsInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutEmbeddingsInput, RepositoryUncheckedCreateWithoutEmbeddingsInput>
  }

  export type OrganizationUpsertWithoutEmbeddingsInput = {
    update: XOR<OrganizationUpdateWithoutEmbeddingsInput, OrganizationUncheckedUpdateWithoutEmbeddingsInput>
    create: XOR<OrganizationCreateWithoutEmbeddingsInput, OrganizationUncheckedCreateWithoutEmbeddingsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutEmbeddingsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutEmbeddingsInput, OrganizationUncheckedUpdateWithoutEmbeddingsInput>
  }

  export type OrganizationUpdateWithoutEmbeddingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrgMemberUpdateManyWithoutOrgNestedInput
    repos?: RepositoryUpdateManyWithoutOrgNestedInput
    developers?: DeveloperUpdateManyWithoutOrgNestedInput
    sprints?: SprintUpdateManyWithoutOrgNestedInput
    meetings?: MeetingUpdateManyWithoutOrgNestedInput
    tasks?: TaskUpdateManyWithoutOrgNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutEmbeddingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrgMemberUncheckedUpdateManyWithoutOrgNestedInput
    repos?: RepositoryUncheckedUpdateManyWithoutOrgNestedInput
    developers?: DeveloperUncheckedUpdateManyWithoutOrgNestedInput
    sprints?: SprintUncheckedUpdateManyWithoutOrgNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutOrgNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutOrgNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type RepositoryUpsertWithoutEmbeddingsInput = {
    update: XOR<RepositoryUpdateWithoutEmbeddingsInput, RepositoryUncheckedUpdateWithoutEmbeddingsInput>
    create: XOR<RepositoryCreateWithoutEmbeddingsInput, RepositoryUncheckedCreateWithoutEmbeddingsInput>
    where?: RepositoryWhereInput
  }

  export type RepositoryUpdateToOneWithWhereWithoutEmbeddingsInput = {
    where?: RepositoryWhereInput
    data: XOR<RepositoryUpdateWithoutEmbeddingsInput, RepositoryUncheckedUpdateWithoutEmbeddingsInput>
  }

  export type RepositoryUpdateWithoutEmbeddingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutReposNestedInput
    commits?: CommitUpdateManyWithoutRepoNestedInput
    pullRequests?: PullRequestUpdateManyWithoutRepoNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutEmbeddingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commits?: CommitUncheckedUpdateManyWithoutRepoNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutRepoNestedInput
  }

  export type OrganizationCreateWithoutChatSessionsInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrgMemberCreateNestedManyWithoutOrgInput
    repos?: RepositoryCreateNestedManyWithoutOrgInput
    developers?: DeveloperCreateNestedManyWithoutOrgInput
    sprints?: SprintCreateNestedManyWithoutOrgInput
    meetings?: MeetingCreateNestedManyWithoutOrgInput
    tasks?: TaskCreateNestedManyWithoutOrgInput
    embeddings?: EmbeddingCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutChatSessionsInput = {
    id?: string
    name: string
    slug: string
    githubOrgId?: string | null
    discordGuildId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrgMemberUncheckedCreateNestedManyWithoutOrgInput
    repos?: RepositoryUncheckedCreateNestedManyWithoutOrgInput
    developers?: DeveloperUncheckedCreateNestedManyWithoutOrgInput
    sprints?: SprintUncheckedCreateNestedManyWithoutOrgInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutOrgInput
    tasks?: TaskUncheckedCreateNestedManyWithoutOrgInput
    embeddings?: EmbeddingUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutChatSessionsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutChatSessionsInput, OrganizationUncheckedCreateWithoutChatSessionsInput>
  }

  export type ChatMessageCreateWithoutSessionInput = {
    id?: string
    role: string
    content: string
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ChatMessageUncheckedCreateWithoutSessionInput = {
    id?: string
    role: string
    content: string
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput>
  }

  export type ChatMessageCreateManySessionInputEnvelope = {
    data: ChatMessageCreateManySessionInput | ChatMessageCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutChatSessionsInput = {
    update: XOR<OrganizationUpdateWithoutChatSessionsInput, OrganizationUncheckedUpdateWithoutChatSessionsInput>
    create: XOR<OrganizationCreateWithoutChatSessionsInput, OrganizationUncheckedCreateWithoutChatSessionsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutChatSessionsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutChatSessionsInput, OrganizationUncheckedUpdateWithoutChatSessionsInput>
  }

  export type OrganizationUpdateWithoutChatSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrgMemberUpdateManyWithoutOrgNestedInput
    repos?: RepositoryUpdateManyWithoutOrgNestedInput
    developers?: DeveloperUpdateManyWithoutOrgNestedInput
    sprints?: SprintUpdateManyWithoutOrgNestedInput
    meetings?: MeetingUpdateManyWithoutOrgNestedInput
    tasks?: TaskUpdateManyWithoutOrgNestedInput
    embeddings?: EmbeddingUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutChatSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    githubOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    discordGuildId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrgMemberUncheckedUpdateManyWithoutOrgNestedInput
    repos?: RepositoryUncheckedUpdateManyWithoutOrgNestedInput
    developers?: DeveloperUncheckedUpdateManyWithoutOrgNestedInput
    sprints?: SprintUncheckedUpdateManyWithoutOrgNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutOrgNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutOrgNestedInput
    embeddings?: EmbeddingUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutSessionInput, ChatMessageUncheckedUpdateWithoutSessionInput>
    create: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutSessionInput, ChatMessageUncheckedUpdateWithoutSessionInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutSessionInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutSessionInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    sessionId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    sources?: JsonFilter<"ChatMessage">
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatSessionCreateWithoutMessagesInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrganizationCreateNestedOneWithoutChatSessionsInput
  }

  export type ChatSessionUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    orgId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatSessionCreateOrConnectWithoutMessagesInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
  }

  export type ChatSessionUpsertWithoutMessagesInput = {
    update: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    where?: ChatSessionWhereInput
  }

  export type ChatSessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatSessionWhereInput
    data: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatSessionUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutChatSessionsNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgMemberCreateManyOrgInput = {
    id?: string
    userId: string
    role?: $Enums.OrgRole
  }

  export type RepositoryCreateManyOrgInput = {
    id?: string
    githubId: number
    name: string
    fullName: string
    description?: string | null
    language?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeveloperCreateManyOrgInput = {
    id?: string
    githubLogin: string
    githubId: number
    name?: string | null
    avatarUrl?: string | null
    discordUserId?: string | null
    strengths?: DeveloperCreatestrengthsInput | string[]
    currentLoad?: number
    burnoutSignal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SprintCreateManyOrgInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    summary?: string | null
    velocity?: number | null
    predictability?: number | null
    createdAt?: Date | string
  }

  export type MeetingCreateManyOrgInput = {
    id?: string
    title: string
    meetingType?: $Enums.MeetingType
    transcript?: string | null
    summary?: string | null
    goals?: MeetingCreategoalsInput | string[]
    blockers?: MeetingCreateblockersInput | string[]
    decisions?: MeetingCreatedecisionsInput | string[]
    occurredAt: Date | string
    createdAt?: Date | string
  }

  export type TaskCreateManyOrgInput = {
    id?: string
    meetingId?: string | null
    assigneeId?: string | null
    title: string
    description?: string | null
    complexity?: number
    status?: $Enums.TaskStatus
    confidence?: number
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmbeddingCreateManyOrgInput = {
    id?: string
    repoId?: string | null
    sourceType: $Enums.EmbeddingSource
    sourceId: string
    content: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ChatSessionCreateManyOrgInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrgMemberUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
  }

  export type OrgMemberUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
  }

  export type OrgMemberUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
  }

  export type RepositoryUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commits?: CommitUpdateManyWithoutRepoNestedInput
    pullRequests?: PullRequestUpdateManyWithoutRepoNestedInput
    embeddings?: EmbeddingUpdateManyWithoutRepoNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commits?: CommitUncheckedUpdateManyWithoutRepoNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutRepoNestedInput
    embeddings?: EmbeddingUncheckedUpdateManyWithoutRepoNestedInput
  }

  export type RepositoryUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeveloperUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubLogin?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: DeveloperUpdatestrengthsInput | string[]
    currentLoad?: IntFieldUpdateOperationsInput | number
    burnoutSignal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commits?: CommitUpdateManyWithoutDeveloperNestedInput
    pullRequests?: PullRequestUpdateManyWithoutAuthorNestedInput
    taskAssignments?: TaskUpdateManyWithoutAssigneeNestedInput
  }

  export type DeveloperUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubLogin?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: DeveloperUpdatestrengthsInput | string[]
    currentLoad?: IntFieldUpdateOperationsInput | number
    burnoutSignal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commits?: CommitUncheckedUpdateManyWithoutDeveloperNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutAuthorNestedInput
    taskAssignments?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
  }

  export type DeveloperUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubLogin?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: DeveloperUpdatestrengthsInput | string[]
    currentLoad?: IntFieldUpdateOperationsInput | number
    burnoutSignal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SprintUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    predictability?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SprintUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    predictability?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SprintUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    velocity?: NullableFloatFieldUpdateOperationsInput | number | null
    predictability?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    meetingType?: EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: MeetingUpdategoalsInput | string[]
    blockers?: MeetingUpdateblockersInput | string[]
    decisions?: MeetingUpdatedecisionsInput | string[]
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    meetingType?: EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: MeetingUpdategoalsInput | string[]
    blockers?: MeetingUpdateblockersInput | string[]
    decisions?: MeetingUpdatedecisionsInput | string[]
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    meetingType?: EnumMeetingTypeFieldUpdateOperationsInput | $Enums.MeetingType
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: MeetingUpdategoalsInput | string[]
    blockers?: MeetingUpdateblockersInput | string[]
    decisions?: MeetingUpdatedecisionsInput | string[]
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    confidence?: FloatFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneWithoutTasksNestedInput
    assignee?: DeveloperUpdateOneWithoutTaskAssignmentsNestedInput
  }

  export type TaskUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    confidence?: FloatFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    confidence?: FloatFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbeddingUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumEmbeddingSourceFieldUpdateOperationsInput | $Enums.EmbeddingSource
    sourceId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repo?: RepositoryUpdateOneWithoutEmbeddingsNestedInput
  }

  export type EmbeddingUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: EnumEmbeddingSourceFieldUpdateOperationsInput | $Enums.EmbeddingSource
    sourceId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbeddingUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: EnumEmbeddingSourceFieldUpdateOperationsInput | $Enums.EmbeddingSource
    sourceId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitCreateManyRepoInput = {
    id?: string
    developerId: string
    sha: string
    message: string
    additions?: number
    deletions?: number
    filesChanged?: number
    committedAt: Date | string
  }

  export type PullRequestCreateManyRepoInput = {
    id?: string
    authorId: string
    githubId: number
    number: number
    title: string
    body?: string | null
    state?: $Enums.PRState
    reviewCycles?: number
    additions?: number
    deletions?: number
    mergedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmbeddingCreateManyRepoInput = {
    id?: string
    orgId: string
    sourceType: $Enums.EmbeddingSource
    sourceId: string
    content: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CommitUpdateWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    sha?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    filesChanged?: IntFieldUpdateOperationsInput | number
    committedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developer?: DeveloperUpdateOneRequiredWithoutCommitsNestedInput
  }

  export type CommitUncheckedUpdateWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    developerId?: StringFieldUpdateOperationsInput | string
    sha?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    filesChanged?: IntFieldUpdateOperationsInput | number
    committedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitUncheckedUpdateManyWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    developerId?: StringFieldUpdateOperationsInput | string
    sha?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    filesChanged?: IntFieldUpdateOperationsInput | number
    committedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestUpdateWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumPRStateFieldUpdateOperationsInput | $Enums.PRState
    reviewCycles?: IntFieldUpdateOperationsInput | number
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    mergedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: DeveloperUpdateOneRequiredWithoutPullRequestsNestedInput
    feedbackSent?: PRFeedbackUpdateManyWithoutPrNestedInput
  }

  export type PullRequestUncheckedUpdateWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumPRStateFieldUpdateOperationsInput | $Enums.PRState
    reviewCycles?: IntFieldUpdateOperationsInput | number
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    mergedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbackSent?: PRFeedbackUncheckedUpdateManyWithoutPrNestedInput
  }

  export type PullRequestUncheckedUpdateManyWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumPRStateFieldUpdateOperationsInput | $Enums.PRState
    reviewCycles?: IntFieldUpdateOperationsInput | number
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    mergedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbeddingUpdateWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumEmbeddingSourceFieldUpdateOperationsInput | $Enums.EmbeddingSource
    sourceId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutEmbeddingsNestedInput
  }

  export type EmbeddingUncheckedUpdateWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumEmbeddingSourceFieldUpdateOperationsInput | $Enums.EmbeddingSource
    sourceId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbeddingUncheckedUpdateManyWithoutRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    sourceType?: EnumEmbeddingSourceFieldUpdateOperationsInput | $Enums.EmbeddingSource
    sourceId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitCreateManyDeveloperInput = {
    id?: string
    repoId: string
    sha: string
    message: string
    additions?: number
    deletions?: number
    filesChanged?: number
    committedAt: Date | string
  }

  export type PullRequestCreateManyAuthorInput = {
    id?: string
    repoId: string
    githubId: number
    number: number
    title: string
    body?: string | null
    state?: $Enums.PRState
    reviewCycles?: number
    additions?: number
    deletions?: number
    mergedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateManyAssigneeInput = {
    id?: string
    orgId: string
    meetingId?: string | null
    title: string
    description?: string | null
    complexity?: number
    status?: $Enums.TaskStatus
    confidence?: number
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommitUpdateWithoutDeveloperInput = {
    id?: StringFieldUpdateOperationsInput | string
    sha?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    filesChanged?: IntFieldUpdateOperationsInput | number
    committedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repo?: RepositoryUpdateOneRequiredWithoutCommitsNestedInput
  }

  export type CommitUncheckedUpdateWithoutDeveloperInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoId?: StringFieldUpdateOperationsInput | string
    sha?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    filesChanged?: IntFieldUpdateOperationsInput | number
    committedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitUncheckedUpdateManyWithoutDeveloperInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoId?: StringFieldUpdateOperationsInput | string
    sha?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    filesChanged?: IntFieldUpdateOperationsInput | number
    committedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumPRStateFieldUpdateOperationsInput | $Enums.PRState
    reviewCycles?: IntFieldUpdateOperationsInput | number
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    mergedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repo?: RepositoryUpdateOneRequiredWithoutPullRequestsNestedInput
    feedbackSent?: PRFeedbackUpdateManyWithoutPrNestedInput
  }

  export type PullRequestUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoId?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumPRStateFieldUpdateOperationsInput | $Enums.PRState
    reviewCycles?: IntFieldUpdateOperationsInput | number
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    mergedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbackSent?: PRFeedbackUncheckedUpdateManyWithoutPrNestedInput
  }

  export type PullRequestUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoId?: StringFieldUpdateOperationsInput | string
    githubId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: EnumPRStateFieldUpdateOperationsInput | $Enums.PRState
    reviewCycles?: IntFieldUpdateOperationsInput | number
    additions?: IntFieldUpdateOperationsInput | number
    deletions?: IntFieldUpdateOperationsInput | number
    mergedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    confidence?: FloatFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutTasksNestedInput
    meeting?: MeetingUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    meetingId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    confidence?: FloatFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    meetingId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    confidence?: FloatFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRFeedbackCreateManyPrInput = {
    id?: string
    feedbackType: string
    content: string
    sentViaDiscord?: boolean
    accepted?: boolean | null
    createdAt?: Date | string
  }

  export type PRFeedbackUpdateWithoutPrInput = {
    id?: StringFieldUpdateOperationsInput | string
    feedbackType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentViaDiscord?: BoolFieldUpdateOperationsInput | boolean
    accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRFeedbackUncheckedUpdateWithoutPrInput = {
    id?: StringFieldUpdateOperationsInput | string
    feedbackType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentViaDiscord?: BoolFieldUpdateOperationsInput | boolean
    accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRFeedbackUncheckedUpdateManyWithoutPrInput = {
    id?: StringFieldUpdateOperationsInput | string
    feedbackType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentViaDiscord?: BoolFieldUpdateOperationsInput | boolean
    accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyMeetingInput = {
    id?: string
    orgId: string
    assigneeId?: string | null
    title: string
    description?: string | null
    complexity?: number
    status?: $Enums.TaskStatus
    confidence?: number
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    confidence?: FloatFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutTasksNestedInput
    assignee?: DeveloperUpdateOneWithoutTaskAssignmentsNestedInput
  }

  export type TaskUncheckedUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    confidence?: FloatFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    complexity?: IntFieldUpdateOperationsInput | number
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    confidence?: FloatFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManySessionInput = {
    id?: string
    role: string
    content: string
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ChatMessageUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
     */
    export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RepositoryCountOutputTypeDefaultArgs instead
     */
    export type RepositoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RepositoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeveloperCountOutputTypeDefaultArgs instead
     */
    export type DeveloperCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeveloperCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PullRequestCountOutputTypeDefaultArgs instead
     */
    export type PullRequestCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PullRequestCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MeetingCountOutputTypeDefaultArgs instead
     */
    export type MeetingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MeetingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatSessionCountOutputTypeDefaultArgs instead
     */
    export type ChatSessionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganizationDefaultArgs instead
     */
    export type OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrgMemberDefaultArgs instead
     */
    export type OrgMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrgMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RepositoryDefaultArgs instead
     */
    export type RepositoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RepositoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeveloperDefaultArgs instead
     */
    export type DeveloperArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeveloperDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommitDefaultArgs instead
     */
    export type CommitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PullRequestDefaultArgs instead
     */
    export type PullRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PullRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PRFeedbackDefaultArgs instead
     */
    export type PRFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PRFeedbackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MeetingDefaultArgs instead
     */
    export type MeetingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MeetingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SprintDefaultArgs instead
     */
    export type SprintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SprintDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmbeddingDefaultArgs instead
     */
    export type EmbeddingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmbeddingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatSessionDefaultArgs instead
     */
    export type ChatSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatMessageDefaultArgs instead
     */
    export type ChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatMessageDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}