
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
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model WikipediaGameState
 * 
 */
export type WikipediaGameState = $Result.DefaultSelection<Prisma.$WikipediaGameStatePayload>
/**
 * Model QuizGameState
 * 
 */
export type QuizGameState = $Result.DefaultSelection<Prisma.$QuizGameStatePayload>
/**
 * Model CrosswordGameState
 * 
 */
export type CrosswordGameState = $Result.DefaultSelection<Prisma.$CrosswordGameStatePayload>
/**
 * Model ImageQuizGameState
 * 
 */
export type ImageQuizGameState = $Result.DefaultSelection<Prisma.$ImageQuizGameStatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Teams
 * const teams = await prisma.team.findMany()
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
   * // Fetch zero or more Teams
   * const teams = await prisma.team.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wikipediaGameState`: Exposes CRUD operations for the **WikipediaGameState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WikipediaGameStates
    * const wikipediaGameStates = await prisma.wikipediaGameState.findMany()
    * ```
    */
  get wikipediaGameState(): Prisma.WikipediaGameStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizGameState`: Exposes CRUD operations for the **QuizGameState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizGameStates
    * const quizGameStates = await prisma.quizGameState.findMany()
    * ```
    */
  get quizGameState(): Prisma.QuizGameStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crosswordGameState`: Exposes CRUD operations for the **CrosswordGameState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CrosswordGameStates
    * const crosswordGameStates = await prisma.crosswordGameState.findMany()
    * ```
    */
  get crosswordGameState(): Prisma.CrosswordGameStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imageQuizGameState`: Exposes CRUD operations for the **ImageQuizGameState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageQuizGameStates
    * const imageQuizGameStates = await prisma.imageQuizGameState.findMany()
    * ```
    */
  get imageQuizGameState(): Prisma.ImageQuizGameStateDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Team: 'Team',
    WikipediaGameState: 'WikipediaGameState',
    QuizGameState: 'QuizGameState',
    CrosswordGameState: 'CrosswordGameState',
    ImageQuizGameState: 'ImageQuizGameState'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "team" | "wikipediaGameState" | "quizGameState" | "crosswordGameState" | "imageQuizGameState"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      WikipediaGameState: {
        payload: Prisma.$WikipediaGameStatePayload<ExtArgs>
        fields: Prisma.WikipediaGameStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WikipediaGameStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikipediaGameStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WikipediaGameStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikipediaGameStatePayload>
          }
          findFirst: {
            args: Prisma.WikipediaGameStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikipediaGameStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WikipediaGameStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikipediaGameStatePayload>
          }
          findMany: {
            args: Prisma.WikipediaGameStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikipediaGameStatePayload>[]
          }
          create: {
            args: Prisma.WikipediaGameStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikipediaGameStatePayload>
          }
          createMany: {
            args: Prisma.WikipediaGameStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WikipediaGameStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikipediaGameStatePayload>[]
          }
          delete: {
            args: Prisma.WikipediaGameStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikipediaGameStatePayload>
          }
          update: {
            args: Prisma.WikipediaGameStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikipediaGameStatePayload>
          }
          deleteMany: {
            args: Prisma.WikipediaGameStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WikipediaGameStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WikipediaGameStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikipediaGameStatePayload>[]
          }
          upsert: {
            args: Prisma.WikipediaGameStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikipediaGameStatePayload>
          }
          aggregate: {
            args: Prisma.WikipediaGameStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWikipediaGameState>
          }
          groupBy: {
            args: Prisma.WikipediaGameStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<WikipediaGameStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.WikipediaGameStateCountArgs<ExtArgs>
            result: $Utils.Optional<WikipediaGameStateCountAggregateOutputType> | number
          }
        }
      }
      QuizGameState: {
        payload: Prisma.$QuizGameStatePayload<ExtArgs>
        fields: Prisma.QuizGameStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizGameStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizGameStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizGameStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizGameStatePayload>
          }
          findFirst: {
            args: Prisma.QuizGameStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizGameStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizGameStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizGameStatePayload>
          }
          findMany: {
            args: Prisma.QuizGameStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizGameStatePayload>[]
          }
          create: {
            args: Prisma.QuizGameStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizGameStatePayload>
          }
          createMany: {
            args: Prisma.QuizGameStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizGameStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizGameStatePayload>[]
          }
          delete: {
            args: Prisma.QuizGameStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizGameStatePayload>
          }
          update: {
            args: Prisma.QuizGameStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizGameStatePayload>
          }
          deleteMany: {
            args: Prisma.QuizGameStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizGameStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizGameStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizGameStatePayload>[]
          }
          upsert: {
            args: Prisma.QuizGameStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizGameStatePayload>
          }
          aggregate: {
            args: Prisma.QuizGameStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizGameState>
          }
          groupBy: {
            args: Prisma.QuizGameStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGameStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizGameStateCountArgs<ExtArgs>
            result: $Utils.Optional<QuizGameStateCountAggregateOutputType> | number
          }
        }
      }
      CrosswordGameState: {
        payload: Prisma.$CrosswordGameStatePayload<ExtArgs>
        fields: Prisma.CrosswordGameStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrosswordGameStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrosswordGameStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrosswordGameStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrosswordGameStatePayload>
          }
          findFirst: {
            args: Prisma.CrosswordGameStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrosswordGameStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrosswordGameStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrosswordGameStatePayload>
          }
          findMany: {
            args: Prisma.CrosswordGameStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrosswordGameStatePayload>[]
          }
          create: {
            args: Prisma.CrosswordGameStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrosswordGameStatePayload>
          }
          createMany: {
            args: Prisma.CrosswordGameStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrosswordGameStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrosswordGameStatePayload>[]
          }
          delete: {
            args: Prisma.CrosswordGameStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrosswordGameStatePayload>
          }
          update: {
            args: Prisma.CrosswordGameStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrosswordGameStatePayload>
          }
          deleteMany: {
            args: Prisma.CrosswordGameStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrosswordGameStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CrosswordGameStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrosswordGameStatePayload>[]
          }
          upsert: {
            args: Prisma.CrosswordGameStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrosswordGameStatePayload>
          }
          aggregate: {
            args: Prisma.CrosswordGameStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrosswordGameState>
          }
          groupBy: {
            args: Prisma.CrosswordGameStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrosswordGameStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrosswordGameStateCountArgs<ExtArgs>
            result: $Utils.Optional<CrosswordGameStateCountAggregateOutputType> | number
          }
        }
      }
      ImageQuizGameState: {
        payload: Prisma.$ImageQuizGameStatePayload<ExtArgs>
        fields: Prisma.ImageQuizGameStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageQuizGameStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageQuizGameStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageQuizGameStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageQuizGameStatePayload>
          }
          findFirst: {
            args: Prisma.ImageQuizGameStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageQuizGameStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageQuizGameStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageQuizGameStatePayload>
          }
          findMany: {
            args: Prisma.ImageQuizGameStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageQuizGameStatePayload>[]
          }
          create: {
            args: Prisma.ImageQuizGameStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageQuizGameStatePayload>
          }
          createMany: {
            args: Prisma.ImageQuizGameStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageQuizGameStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageQuizGameStatePayload>[]
          }
          delete: {
            args: Prisma.ImageQuizGameStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageQuizGameStatePayload>
          }
          update: {
            args: Prisma.ImageQuizGameStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageQuizGameStatePayload>
          }
          deleteMany: {
            args: Prisma.ImageQuizGameStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageQuizGameStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageQuizGameStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageQuizGameStatePayload>[]
          }
          upsert: {
            args: Prisma.ImageQuizGameStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageQuizGameStatePayload>
          }
          aggregate: {
            args: Prisma.ImageQuizGameStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImageQuizGameState>
          }
          groupBy: {
            args: Prisma.ImageQuizGameStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageQuizGameStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageQuizGameStateCountArgs<ExtArgs>
            result: $Utils.Optional<ImageQuizGameStateCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    team?: TeamOmit
    wikipediaGameState?: WikipediaGameStateOmit
    quizGameState?: QuizGameStateOmit
    crosswordGameState?: CrosswordGameStateOmit
    imageQuizGameState?: ImageQuizGameStateOmit
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
    | 'updateManyAndReturn'
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
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    wikipediaGames: number
    quizGames: number
    crosswordGames: number
    imageQuizGames: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wikipediaGames?: boolean | TeamCountOutputTypeCountWikipediaGamesArgs
    quizGames?: boolean | TeamCountOutputTypeCountQuizGamesArgs
    crosswordGames?: boolean | TeamCountOutputTypeCountCrosswordGamesArgs
    imageQuizGames?: boolean | TeamCountOutputTypeCountImageQuizGamesArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountWikipediaGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WikipediaGameStateWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountQuizGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizGameStateWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountCrosswordGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrosswordGameStateWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountImageQuizGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageQuizGameStateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    name: string | null
    currentLevel: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    name: string | null
    currentLevel: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    currentLevel: number
    score: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
    score?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
    score?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    currentLevel?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    currentLevel?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    currentLevel?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    name: string
    currentLevel: string
    score: number
    createdAt: Date
    updatedAt: Date
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    currentLevel?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wikipediaGames?: boolean | Team$wikipediaGamesArgs<ExtArgs>
    quizGames?: boolean | Team$quizGamesArgs<ExtArgs>
    crosswordGames?: boolean | Team$crosswordGamesArgs<ExtArgs>
    imageQuizGames?: boolean | Team$imageQuizGamesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    currentLevel?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    currentLevel?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    currentLevel?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "currentLevel" | "score" | "createdAt" | "updatedAt", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wikipediaGames?: boolean | Team$wikipediaGamesArgs<ExtArgs>
    quizGames?: boolean | Team$quizGamesArgs<ExtArgs>
    crosswordGames?: boolean | Team$crosswordGamesArgs<ExtArgs>
    imageQuizGames?: boolean | Team$imageQuizGamesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      wikipediaGames: Prisma.$WikipediaGameStatePayload<ExtArgs>[]
      quizGames: Prisma.$QuizGameStatePayload<ExtArgs>[]
      crosswordGames: Prisma.$CrosswordGameStatePayload<ExtArgs>[]
      imageQuizGames: Prisma.$ImageQuizGameStatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      currentLevel: string
      score: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wikipediaGames<T extends Team$wikipediaGamesArgs<ExtArgs> = {}>(args?: Subset<T, Team$wikipediaGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WikipediaGameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizGames<T extends Team$quizGamesArgs<ExtArgs> = {}>(args?: Subset<T, Team$quizGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizGameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    crosswordGames<T extends Team$crosswordGamesArgs<ExtArgs> = {}>(args?: Subset<T, Team$crosswordGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrosswordGameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    imageQuizGames<T extends Team$imageQuizGamesArgs<ExtArgs> = {}>(args?: Subset<T, Team$imageQuizGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageQuizGameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'Int'>
    readonly name: FieldRef<"Team", 'String'>
    readonly currentLevel: FieldRef<"Team", 'String'>
    readonly score: FieldRef<"Team", 'Int'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.wikipediaGames
   */
  export type Team$wikipediaGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikipediaGameState
     */
    select?: WikipediaGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikipediaGameState
     */
    omit?: WikipediaGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WikipediaGameStateInclude<ExtArgs> | null
    where?: WikipediaGameStateWhereInput
    orderBy?: WikipediaGameStateOrderByWithRelationInput | WikipediaGameStateOrderByWithRelationInput[]
    cursor?: WikipediaGameStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WikipediaGameStateScalarFieldEnum | WikipediaGameStateScalarFieldEnum[]
  }

  /**
   * Team.quizGames
   */
  export type Team$quizGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizGameState
     */
    select?: QuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizGameState
     */
    omit?: QuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizGameStateInclude<ExtArgs> | null
    where?: QuizGameStateWhereInput
    orderBy?: QuizGameStateOrderByWithRelationInput | QuizGameStateOrderByWithRelationInput[]
    cursor?: QuizGameStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizGameStateScalarFieldEnum | QuizGameStateScalarFieldEnum[]
  }

  /**
   * Team.crosswordGames
   */
  export type Team$crosswordGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrosswordGameState
     */
    select?: CrosswordGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrosswordGameState
     */
    omit?: CrosswordGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrosswordGameStateInclude<ExtArgs> | null
    where?: CrosswordGameStateWhereInput
    orderBy?: CrosswordGameStateOrderByWithRelationInput | CrosswordGameStateOrderByWithRelationInput[]
    cursor?: CrosswordGameStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CrosswordGameStateScalarFieldEnum | CrosswordGameStateScalarFieldEnum[]
  }

  /**
   * Team.imageQuizGames
   */
  export type Team$imageQuizGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageQuizGameState
     */
    select?: ImageQuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageQuizGameState
     */
    omit?: ImageQuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageQuizGameStateInclude<ExtArgs> | null
    where?: ImageQuizGameStateWhereInput
    orderBy?: ImageQuizGameStateOrderByWithRelationInput | ImageQuizGameStateOrderByWithRelationInput[]
    cursor?: ImageQuizGameStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageQuizGameStateScalarFieldEnum | ImageQuizGameStateScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model WikipediaGameState
   */

  export type AggregateWikipediaGameState = {
    _count: WikipediaGameStateCountAggregateOutputType | null
    _avg: WikipediaGameStateAvgAggregateOutputType | null
    _sum: WikipediaGameStateSumAggregateOutputType | null
    _min: WikipediaGameStateMinAggregateOutputType | null
    _max: WikipediaGameStateMaxAggregateOutputType | null
  }

  export type WikipediaGameStateAvgAggregateOutputType = {
    id: number | null
    clicks: number | null
    timeTaken: number | null
  }

  export type WikipediaGameStateSumAggregateOutputType = {
    id: number | null
    clicks: number | null
    timeTaken: number | null
  }

  export type WikipediaGameStateMinAggregateOutputType = {
    id: number | null
    teamName: string | null
    targetPage: string | null
    clicks: number | null
    timeTaken: number | null
    completed: boolean | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type WikipediaGameStateMaxAggregateOutputType = {
    id: number | null
    teamName: string | null
    targetPage: string | null
    clicks: number | null
    timeTaken: number | null
    completed: boolean | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type WikipediaGameStateCountAggregateOutputType = {
    id: number
    teamName: number
    targetPage: number
    clicks: number
    timeTaken: number
    completed: number
    startedAt: number
    completedAt: number
    _all: number
  }


  export type WikipediaGameStateAvgAggregateInputType = {
    id?: true
    clicks?: true
    timeTaken?: true
  }

  export type WikipediaGameStateSumAggregateInputType = {
    id?: true
    clicks?: true
    timeTaken?: true
  }

  export type WikipediaGameStateMinAggregateInputType = {
    id?: true
    teamName?: true
    targetPage?: true
    clicks?: true
    timeTaken?: true
    completed?: true
    startedAt?: true
    completedAt?: true
  }

  export type WikipediaGameStateMaxAggregateInputType = {
    id?: true
    teamName?: true
    targetPage?: true
    clicks?: true
    timeTaken?: true
    completed?: true
    startedAt?: true
    completedAt?: true
  }

  export type WikipediaGameStateCountAggregateInputType = {
    id?: true
    teamName?: true
    targetPage?: true
    clicks?: true
    timeTaken?: true
    completed?: true
    startedAt?: true
    completedAt?: true
    _all?: true
  }

  export type WikipediaGameStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WikipediaGameState to aggregate.
     */
    where?: WikipediaGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WikipediaGameStates to fetch.
     */
    orderBy?: WikipediaGameStateOrderByWithRelationInput | WikipediaGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WikipediaGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WikipediaGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WikipediaGameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WikipediaGameStates
    **/
    _count?: true | WikipediaGameStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WikipediaGameStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WikipediaGameStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WikipediaGameStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WikipediaGameStateMaxAggregateInputType
  }

  export type GetWikipediaGameStateAggregateType<T extends WikipediaGameStateAggregateArgs> = {
        [P in keyof T & keyof AggregateWikipediaGameState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWikipediaGameState[P]>
      : GetScalarType<T[P], AggregateWikipediaGameState[P]>
  }




  export type WikipediaGameStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WikipediaGameStateWhereInput
    orderBy?: WikipediaGameStateOrderByWithAggregationInput | WikipediaGameStateOrderByWithAggregationInput[]
    by: WikipediaGameStateScalarFieldEnum[] | WikipediaGameStateScalarFieldEnum
    having?: WikipediaGameStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WikipediaGameStateCountAggregateInputType | true
    _avg?: WikipediaGameStateAvgAggregateInputType
    _sum?: WikipediaGameStateSumAggregateInputType
    _min?: WikipediaGameStateMinAggregateInputType
    _max?: WikipediaGameStateMaxAggregateInputType
  }

  export type WikipediaGameStateGroupByOutputType = {
    id: number
    teamName: string
    targetPage: string
    clicks: number
    timeTaken: number
    completed: boolean
    startedAt: Date
    completedAt: Date | null
    _count: WikipediaGameStateCountAggregateOutputType | null
    _avg: WikipediaGameStateAvgAggregateOutputType | null
    _sum: WikipediaGameStateSumAggregateOutputType | null
    _min: WikipediaGameStateMinAggregateOutputType | null
    _max: WikipediaGameStateMaxAggregateOutputType | null
  }

  type GetWikipediaGameStateGroupByPayload<T extends WikipediaGameStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WikipediaGameStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WikipediaGameStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WikipediaGameStateGroupByOutputType[P]>
            : GetScalarType<T[P], WikipediaGameStateGroupByOutputType[P]>
        }
      >
    >


  export type WikipediaGameStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    targetPage?: boolean
    clicks?: boolean
    timeTaken?: boolean
    completed?: boolean
    startedAt?: boolean
    completedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wikipediaGameState"]>

  export type WikipediaGameStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    targetPage?: boolean
    clicks?: boolean
    timeTaken?: boolean
    completed?: boolean
    startedAt?: boolean
    completedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wikipediaGameState"]>

  export type WikipediaGameStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    targetPage?: boolean
    clicks?: boolean
    timeTaken?: boolean
    completed?: boolean
    startedAt?: boolean
    completedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wikipediaGameState"]>

  export type WikipediaGameStateSelectScalar = {
    id?: boolean
    teamName?: boolean
    targetPage?: boolean
    clicks?: boolean
    timeTaken?: boolean
    completed?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }

  export type WikipediaGameStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamName" | "targetPage" | "clicks" | "timeTaken" | "completed" | "startedAt" | "completedAt", ExtArgs["result"]["wikipediaGameState"]>
  export type WikipediaGameStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type WikipediaGameStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type WikipediaGameStateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $WikipediaGameStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WikipediaGameState"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamName: string
      targetPage: string
      clicks: number
      timeTaken: number
      completed: boolean
      startedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["wikipediaGameState"]>
    composites: {}
  }

  type WikipediaGameStateGetPayload<S extends boolean | null | undefined | WikipediaGameStateDefaultArgs> = $Result.GetResult<Prisma.$WikipediaGameStatePayload, S>

  type WikipediaGameStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WikipediaGameStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WikipediaGameStateCountAggregateInputType | true
    }

  export interface WikipediaGameStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WikipediaGameState'], meta: { name: 'WikipediaGameState' } }
    /**
     * Find zero or one WikipediaGameState that matches the filter.
     * @param {WikipediaGameStateFindUniqueArgs} args - Arguments to find a WikipediaGameState
     * @example
     * // Get one WikipediaGameState
     * const wikipediaGameState = await prisma.wikipediaGameState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WikipediaGameStateFindUniqueArgs>(args: SelectSubset<T, WikipediaGameStateFindUniqueArgs<ExtArgs>>): Prisma__WikipediaGameStateClient<$Result.GetResult<Prisma.$WikipediaGameStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WikipediaGameState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WikipediaGameStateFindUniqueOrThrowArgs} args - Arguments to find a WikipediaGameState
     * @example
     * // Get one WikipediaGameState
     * const wikipediaGameState = await prisma.wikipediaGameState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WikipediaGameStateFindUniqueOrThrowArgs>(args: SelectSubset<T, WikipediaGameStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WikipediaGameStateClient<$Result.GetResult<Prisma.$WikipediaGameStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WikipediaGameState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WikipediaGameStateFindFirstArgs} args - Arguments to find a WikipediaGameState
     * @example
     * // Get one WikipediaGameState
     * const wikipediaGameState = await prisma.wikipediaGameState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WikipediaGameStateFindFirstArgs>(args?: SelectSubset<T, WikipediaGameStateFindFirstArgs<ExtArgs>>): Prisma__WikipediaGameStateClient<$Result.GetResult<Prisma.$WikipediaGameStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WikipediaGameState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WikipediaGameStateFindFirstOrThrowArgs} args - Arguments to find a WikipediaGameState
     * @example
     * // Get one WikipediaGameState
     * const wikipediaGameState = await prisma.wikipediaGameState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WikipediaGameStateFindFirstOrThrowArgs>(args?: SelectSubset<T, WikipediaGameStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__WikipediaGameStateClient<$Result.GetResult<Prisma.$WikipediaGameStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WikipediaGameStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WikipediaGameStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WikipediaGameStates
     * const wikipediaGameStates = await prisma.wikipediaGameState.findMany()
     * 
     * // Get first 10 WikipediaGameStates
     * const wikipediaGameStates = await prisma.wikipediaGameState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wikipediaGameStateWithIdOnly = await prisma.wikipediaGameState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WikipediaGameStateFindManyArgs>(args?: SelectSubset<T, WikipediaGameStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WikipediaGameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WikipediaGameState.
     * @param {WikipediaGameStateCreateArgs} args - Arguments to create a WikipediaGameState.
     * @example
     * // Create one WikipediaGameState
     * const WikipediaGameState = await prisma.wikipediaGameState.create({
     *   data: {
     *     // ... data to create a WikipediaGameState
     *   }
     * })
     * 
     */
    create<T extends WikipediaGameStateCreateArgs>(args: SelectSubset<T, WikipediaGameStateCreateArgs<ExtArgs>>): Prisma__WikipediaGameStateClient<$Result.GetResult<Prisma.$WikipediaGameStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WikipediaGameStates.
     * @param {WikipediaGameStateCreateManyArgs} args - Arguments to create many WikipediaGameStates.
     * @example
     * // Create many WikipediaGameStates
     * const wikipediaGameState = await prisma.wikipediaGameState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WikipediaGameStateCreateManyArgs>(args?: SelectSubset<T, WikipediaGameStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WikipediaGameStates and returns the data saved in the database.
     * @param {WikipediaGameStateCreateManyAndReturnArgs} args - Arguments to create many WikipediaGameStates.
     * @example
     * // Create many WikipediaGameStates
     * const wikipediaGameState = await prisma.wikipediaGameState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WikipediaGameStates and only return the `id`
     * const wikipediaGameStateWithIdOnly = await prisma.wikipediaGameState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WikipediaGameStateCreateManyAndReturnArgs>(args?: SelectSubset<T, WikipediaGameStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WikipediaGameStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WikipediaGameState.
     * @param {WikipediaGameStateDeleteArgs} args - Arguments to delete one WikipediaGameState.
     * @example
     * // Delete one WikipediaGameState
     * const WikipediaGameState = await prisma.wikipediaGameState.delete({
     *   where: {
     *     // ... filter to delete one WikipediaGameState
     *   }
     * })
     * 
     */
    delete<T extends WikipediaGameStateDeleteArgs>(args: SelectSubset<T, WikipediaGameStateDeleteArgs<ExtArgs>>): Prisma__WikipediaGameStateClient<$Result.GetResult<Prisma.$WikipediaGameStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WikipediaGameState.
     * @param {WikipediaGameStateUpdateArgs} args - Arguments to update one WikipediaGameState.
     * @example
     * // Update one WikipediaGameState
     * const wikipediaGameState = await prisma.wikipediaGameState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WikipediaGameStateUpdateArgs>(args: SelectSubset<T, WikipediaGameStateUpdateArgs<ExtArgs>>): Prisma__WikipediaGameStateClient<$Result.GetResult<Prisma.$WikipediaGameStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WikipediaGameStates.
     * @param {WikipediaGameStateDeleteManyArgs} args - Arguments to filter WikipediaGameStates to delete.
     * @example
     * // Delete a few WikipediaGameStates
     * const { count } = await prisma.wikipediaGameState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WikipediaGameStateDeleteManyArgs>(args?: SelectSubset<T, WikipediaGameStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WikipediaGameStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WikipediaGameStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WikipediaGameStates
     * const wikipediaGameState = await prisma.wikipediaGameState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WikipediaGameStateUpdateManyArgs>(args: SelectSubset<T, WikipediaGameStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WikipediaGameStates and returns the data updated in the database.
     * @param {WikipediaGameStateUpdateManyAndReturnArgs} args - Arguments to update many WikipediaGameStates.
     * @example
     * // Update many WikipediaGameStates
     * const wikipediaGameState = await prisma.wikipediaGameState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WikipediaGameStates and only return the `id`
     * const wikipediaGameStateWithIdOnly = await prisma.wikipediaGameState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WikipediaGameStateUpdateManyAndReturnArgs>(args: SelectSubset<T, WikipediaGameStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WikipediaGameStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WikipediaGameState.
     * @param {WikipediaGameStateUpsertArgs} args - Arguments to update or create a WikipediaGameState.
     * @example
     * // Update or create a WikipediaGameState
     * const wikipediaGameState = await prisma.wikipediaGameState.upsert({
     *   create: {
     *     // ... data to create a WikipediaGameState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WikipediaGameState we want to update
     *   }
     * })
     */
    upsert<T extends WikipediaGameStateUpsertArgs>(args: SelectSubset<T, WikipediaGameStateUpsertArgs<ExtArgs>>): Prisma__WikipediaGameStateClient<$Result.GetResult<Prisma.$WikipediaGameStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WikipediaGameStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WikipediaGameStateCountArgs} args - Arguments to filter WikipediaGameStates to count.
     * @example
     * // Count the number of WikipediaGameStates
     * const count = await prisma.wikipediaGameState.count({
     *   where: {
     *     // ... the filter for the WikipediaGameStates we want to count
     *   }
     * })
    **/
    count<T extends WikipediaGameStateCountArgs>(
      args?: Subset<T, WikipediaGameStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WikipediaGameStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WikipediaGameState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WikipediaGameStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WikipediaGameStateAggregateArgs>(args: Subset<T, WikipediaGameStateAggregateArgs>): Prisma.PrismaPromise<GetWikipediaGameStateAggregateType<T>>

    /**
     * Group by WikipediaGameState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WikipediaGameStateGroupByArgs} args - Group by arguments.
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
      T extends WikipediaGameStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WikipediaGameStateGroupByArgs['orderBy'] }
        : { orderBy?: WikipediaGameStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WikipediaGameStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWikipediaGameStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WikipediaGameState model
   */
  readonly fields: WikipediaGameStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WikipediaGameState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WikipediaGameStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WikipediaGameState model
   */
  interface WikipediaGameStateFieldRefs {
    readonly id: FieldRef<"WikipediaGameState", 'Int'>
    readonly teamName: FieldRef<"WikipediaGameState", 'String'>
    readonly targetPage: FieldRef<"WikipediaGameState", 'String'>
    readonly clicks: FieldRef<"WikipediaGameState", 'Int'>
    readonly timeTaken: FieldRef<"WikipediaGameState", 'Int'>
    readonly completed: FieldRef<"WikipediaGameState", 'Boolean'>
    readonly startedAt: FieldRef<"WikipediaGameState", 'DateTime'>
    readonly completedAt: FieldRef<"WikipediaGameState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WikipediaGameState findUnique
   */
  export type WikipediaGameStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikipediaGameState
     */
    select?: WikipediaGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikipediaGameState
     */
    omit?: WikipediaGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WikipediaGameStateInclude<ExtArgs> | null
    /**
     * Filter, which WikipediaGameState to fetch.
     */
    where: WikipediaGameStateWhereUniqueInput
  }

  /**
   * WikipediaGameState findUniqueOrThrow
   */
  export type WikipediaGameStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikipediaGameState
     */
    select?: WikipediaGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikipediaGameState
     */
    omit?: WikipediaGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WikipediaGameStateInclude<ExtArgs> | null
    /**
     * Filter, which WikipediaGameState to fetch.
     */
    where: WikipediaGameStateWhereUniqueInput
  }

  /**
   * WikipediaGameState findFirst
   */
  export type WikipediaGameStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikipediaGameState
     */
    select?: WikipediaGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikipediaGameState
     */
    omit?: WikipediaGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WikipediaGameStateInclude<ExtArgs> | null
    /**
     * Filter, which WikipediaGameState to fetch.
     */
    where?: WikipediaGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WikipediaGameStates to fetch.
     */
    orderBy?: WikipediaGameStateOrderByWithRelationInput | WikipediaGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WikipediaGameStates.
     */
    cursor?: WikipediaGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WikipediaGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WikipediaGameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WikipediaGameStates.
     */
    distinct?: WikipediaGameStateScalarFieldEnum | WikipediaGameStateScalarFieldEnum[]
  }

  /**
   * WikipediaGameState findFirstOrThrow
   */
  export type WikipediaGameStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikipediaGameState
     */
    select?: WikipediaGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikipediaGameState
     */
    omit?: WikipediaGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WikipediaGameStateInclude<ExtArgs> | null
    /**
     * Filter, which WikipediaGameState to fetch.
     */
    where?: WikipediaGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WikipediaGameStates to fetch.
     */
    orderBy?: WikipediaGameStateOrderByWithRelationInput | WikipediaGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WikipediaGameStates.
     */
    cursor?: WikipediaGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WikipediaGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WikipediaGameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WikipediaGameStates.
     */
    distinct?: WikipediaGameStateScalarFieldEnum | WikipediaGameStateScalarFieldEnum[]
  }

  /**
   * WikipediaGameState findMany
   */
  export type WikipediaGameStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikipediaGameState
     */
    select?: WikipediaGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikipediaGameState
     */
    omit?: WikipediaGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WikipediaGameStateInclude<ExtArgs> | null
    /**
     * Filter, which WikipediaGameStates to fetch.
     */
    where?: WikipediaGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WikipediaGameStates to fetch.
     */
    orderBy?: WikipediaGameStateOrderByWithRelationInput | WikipediaGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WikipediaGameStates.
     */
    cursor?: WikipediaGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WikipediaGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WikipediaGameStates.
     */
    skip?: number
    distinct?: WikipediaGameStateScalarFieldEnum | WikipediaGameStateScalarFieldEnum[]
  }

  /**
   * WikipediaGameState create
   */
  export type WikipediaGameStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikipediaGameState
     */
    select?: WikipediaGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikipediaGameState
     */
    omit?: WikipediaGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WikipediaGameStateInclude<ExtArgs> | null
    /**
     * The data needed to create a WikipediaGameState.
     */
    data: XOR<WikipediaGameStateCreateInput, WikipediaGameStateUncheckedCreateInput>
  }

  /**
   * WikipediaGameState createMany
   */
  export type WikipediaGameStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WikipediaGameStates.
     */
    data: WikipediaGameStateCreateManyInput | WikipediaGameStateCreateManyInput[]
  }

  /**
   * WikipediaGameState createManyAndReturn
   */
  export type WikipediaGameStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikipediaGameState
     */
    select?: WikipediaGameStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WikipediaGameState
     */
    omit?: WikipediaGameStateOmit<ExtArgs> | null
    /**
     * The data used to create many WikipediaGameStates.
     */
    data: WikipediaGameStateCreateManyInput | WikipediaGameStateCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WikipediaGameStateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WikipediaGameState update
   */
  export type WikipediaGameStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikipediaGameState
     */
    select?: WikipediaGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikipediaGameState
     */
    omit?: WikipediaGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WikipediaGameStateInclude<ExtArgs> | null
    /**
     * The data needed to update a WikipediaGameState.
     */
    data: XOR<WikipediaGameStateUpdateInput, WikipediaGameStateUncheckedUpdateInput>
    /**
     * Choose, which WikipediaGameState to update.
     */
    where: WikipediaGameStateWhereUniqueInput
  }

  /**
   * WikipediaGameState updateMany
   */
  export type WikipediaGameStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WikipediaGameStates.
     */
    data: XOR<WikipediaGameStateUpdateManyMutationInput, WikipediaGameStateUncheckedUpdateManyInput>
    /**
     * Filter which WikipediaGameStates to update
     */
    where?: WikipediaGameStateWhereInput
    /**
     * Limit how many WikipediaGameStates to update.
     */
    limit?: number
  }

  /**
   * WikipediaGameState updateManyAndReturn
   */
  export type WikipediaGameStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikipediaGameState
     */
    select?: WikipediaGameStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WikipediaGameState
     */
    omit?: WikipediaGameStateOmit<ExtArgs> | null
    /**
     * The data used to update WikipediaGameStates.
     */
    data: XOR<WikipediaGameStateUpdateManyMutationInput, WikipediaGameStateUncheckedUpdateManyInput>
    /**
     * Filter which WikipediaGameStates to update
     */
    where?: WikipediaGameStateWhereInput
    /**
     * Limit how many WikipediaGameStates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WikipediaGameStateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WikipediaGameState upsert
   */
  export type WikipediaGameStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikipediaGameState
     */
    select?: WikipediaGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikipediaGameState
     */
    omit?: WikipediaGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WikipediaGameStateInclude<ExtArgs> | null
    /**
     * The filter to search for the WikipediaGameState to update in case it exists.
     */
    where: WikipediaGameStateWhereUniqueInput
    /**
     * In case the WikipediaGameState found by the `where` argument doesn't exist, create a new WikipediaGameState with this data.
     */
    create: XOR<WikipediaGameStateCreateInput, WikipediaGameStateUncheckedCreateInput>
    /**
     * In case the WikipediaGameState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WikipediaGameStateUpdateInput, WikipediaGameStateUncheckedUpdateInput>
  }

  /**
   * WikipediaGameState delete
   */
  export type WikipediaGameStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikipediaGameState
     */
    select?: WikipediaGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikipediaGameState
     */
    omit?: WikipediaGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WikipediaGameStateInclude<ExtArgs> | null
    /**
     * Filter which WikipediaGameState to delete.
     */
    where: WikipediaGameStateWhereUniqueInput
  }

  /**
   * WikipediaGameState deleteMany
   */
  export type WikipediaGameStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WikipediaGameStates to delete
     */
    where?: WikipediaGameStateWhereInput
    /**
     * Limit how many WikipediaGameStates to delete.
     */
    limit?: number
  }

  /**
   * WikipediaGameState without action
   */
  export type WikipediaGameStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikipediaGameState
     */
    select?: WikipediaGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikipediaGameState
     */
    omit?: WikipediaGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WikipediaGameStateInclude<ExtArgs> | null
  }


  /**
   * Model QuizGameState
   */

  export type AggregateQuizGameState = {
    _count: QuizGameStateCountAggregateOutputType | null
    _avg: QuizGameStateAvgAggregateOutputType | null
    _sum: QuizGameStateSumAggregateOutputType | null
    _min: QuizGameStateMinAggregateOutputType | null
    _max: QuizGameStateMaxAggregateOutputType | null
  }

  export type QuizGameStateAvgAggregateOutputType = {
    id: number | null
    timeTaken: number | null
  }

  export type QuizGameStateSumAggregateOutputType = {
    id: number | null
    timeTaken: number | null
  }

  export type QuizGameStateMinAggregateOutputType = {
    id: number | null
    teamName: string | null
    questionId: string | null
    timeTaken: number | null
    completed: boolean | null
    isCorrect: boolean | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type QuizGameStateMaxAggregateOutputType = {
    id: number | null
    teamName: string | null
    questionId: string | null
    timeTaken: number | null
    completed: boolean | null
    isCorrect: boolean | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type QuizGameStateCountAggregateOutputType = {
    id: number
    teamName: number
    questionId: number
    timeTaken: number
    completed: number
    isCorrect: number
    startedAt: number
    completedAt: number
    _all: number
  }


  export type QuizGameStateAvgAggregateInputType = {
    id?: true
    timeTaken?: true
  }

  export type QuizGameStateSumAggregateInputType = {
    id?: true
    timeTaken?: true
  }

  export type QuizGameStateMinAggregateInputType = {
    id?: true
    teamName?: true
    questionId?: true
    timeTaken?: true
    completed?: true
    isCorrect?: true
    startedAt?: true
    completedAt?: true
  }

  export type QuizGameStateMaxAggregateInputType = {
    id?: true
    teamName?: true
    questionId?: true
    timeTaken?: true
    completed?: true
    isCorrect?: true
    startedAt?: true
    completedAt?: true
  }

  export type QuizGameStateCountAggregateInputType = {
    id?: true
    teamName?: true
    questionId?: true
    timeTaken?: true
    completed?: true
    isCorrect?: true
    startedAt?: true
    completedAt?: true
    _all?: true
  }

  export type QuizGameStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizGameState to aggregate.
     */
    where?: QuizGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizGameStates to fetch.
     */
    orderBy?: QuizGameStateOrderByWithRelationInput | QuizGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizGameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizGameStates
    **/
    _count?: true | QuizGameStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizGameStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizGameStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizGameStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizGameStateMaxAggregateInputType
  }

  export type GetQuizGameStateAggregateType<T extends QuizGameStateAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizGameState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizGameState[P]>
      : GetScalarType<T[P], AggregateQuizGameState[P]>
  }




  export type QuizGameStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizGameStateWhereInput
    orderBy?: QuizGameStateOrderByWithAggregationInput | QuizGameStateOrderByWithAggregationInput[]
    by: QuizGameStateScalarFieldEnum[] | QuizGameStateScalarFieldEnum
    having?: QuizGameStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizGameStateCountAggregateInputType | true
    _avg?: QuizGameStateAvgAggregateInputType
    _sum?: QuizGameStateSumAggregateInputType
    _min?: QuizGameStateMinAggregateInputType
    _max?: QuizGameStateMaxAggregateInputType
  }

  export type QuizGameStateGroupByOutputType = {
    id: number
    teamName: string
    questionId: string
    timeTaken: number
    completed: boolean
    isCorrect: boolean
    startedAt: Date
    completedAt: Date | null
    _count: QuizGameStateCountAggregateOutputType | null
    _avg: QuizGameStateAvgAggregateOutputType | null
    _sum: QuizGameStateSumAggregateOutputType | null
    _min: QuizGameStateMinAggregateOutputType | null
    _max: QuizGameStateMaxAggregateOutputType | null
  }

  type GetQuizGameStateGroupByPayload<T extends QuizGameStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGameStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGameStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGameStateGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGameStateGroupByOutputType[P]>
        }
      >
    >


  export type QuizGameStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    questionId?: boolean
    timeTaken?: boolean
    completed?: boolean
    isCorrect?: boolean
    startedAt?: boolean
    completedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizGameState"]>

  export type QuizGameStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    questionId?: boolean
    timeTaken?: boolean
    completed?: boolean
    isCorrect?: boolean
    startedAt?: boolean
    completedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizGameState"]>

  export type QuizGameStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    questionId?: boolean
    timeTaken?: boolean
    completed?: boolean
    isCorrect?: boolean
    startedAt?: boolean
    completedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizGameState"]>

  export type QuizGameStateSelectScalar = {
    id?: boolean
    teamName?: boolean
    questionId?: boolean
    timeTaken?: boolean
    completed?: boolean
    isCorrect?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }

  export type QuizGameStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamName" | "questionId" | "timeTaken" | "completed" | "isCorrect" | "startedAt" | "completedAt", ExtArgs["result"]["quizGameState"]>
  export type QuizGameStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type QuizGameStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type QuizGameStateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $QuizGameStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizGameState"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamName: string
      questionId: string
      timeTaken: number
      completed: boolean
      isCorrect: boolean
      startedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["quizGameState"]>
    composites: {}
  }

  type QuizGameStateGetPayload<S extends boolean | null | undefined | QuizGameStateDefaultArgs> = $Result.GetResult<Prisma.$QuizGameStatePayload, S>

  type QuizGameStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizGameStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizGameStateCountAggregateInputType | true
    }

  export interface QuizGameStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizGameState'], meta: { name: 'QuizGameState' } }
    /**
     * Find zero or one QuizGameState that matches the filter.
     * @param {QuizGameStateFindUniqueArgs} args - Arguments to find a QuizGameState
     * @example
     * // Get one QuizGameState
     * const quizGameState = await prisma.quizGameState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizGameStateFindUniqueArgs>(args: SelectSubset<T, QuizGameStateFindUniqueArgs<ExtArgs>>): Prisma__QuizGameStateClient<$Result.GetResult<Prisma.$QuizGameStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizGameState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizGameStateFindUniqueOrThrowArgs} args - Arguments to find a QuizGameState
     * @example
     * // Get one QuizGameState
     * const quizGameState = await prisma.quizGameState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizGameStateFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizGameStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizGameStateClient<$Result.GetResult<Prisma.$QuizGameStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizGameState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGameStateFindFirstArgs} args - Arguments to find a QuizGameState
     * @example
     * // Get one QuizGameState
     * const quizGameState = await prisma.quizGameState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizGameStateFindFirstArgs>(args?: SelectSubset<T, QuizGameStateFindFirstArgs<ExtArgs>>): Prisma__QuizGameStateClient<$Result.GetResult<Prisma.$QuizGameStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizGameState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGameStateFindFirstOrThrowArgs} args - Arguments to find a QuizGameState
     * @example
     * // Get one QuizGameState
     * const quizGameState = await prisma.quizGameState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizGameStateFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizGameStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizGameStateClient<$Result.GetResult<Prisma.$QuizGameStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizGameStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGameStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizGameStates
     * const quizGameStates = await prisma.quizGameState.findMany()
     * 
     * // Get first 10 QuizGameStates
     * const quizGameStates = await prisma.quizGameState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizGameStateWithIdOnly = await prisma.quizGameState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizGameStateFindManyArgs>(args?: SelectSubset<T, QuizGameStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizGameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizGameState.
     * @param {QuizGameStateCreateArgs} args - Arguments to create a QuizGameState.
     * @example
     * // Create one QuizGameState
     * const QuizGameState = await prisma.quizGameState.create({
     *   data: {
     *     // ... data to create a QuizGameState
     *   }
     * })
     * 
     */
    create<T extends QuizGameStateCreateArgs>(args: SelectSubset<T, QuizGameStateCreateArgs<ExtArgs>>): Prisma__QuizGameStateClient<$Result.GetResult<Prisma.$QuizGameStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizGameStates.
     * @param {QuizGameStateCreateManyArgs} args - Arguments to create many QuizGameStates.
     * @example
     * // Create many QuizGameStates
     * const quizGameState = await prisma.quizGameState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizGameStateCreateManyArgs>(args?: SelectSubset<T, QuizGameStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizGameStates and returns the data saved in the database.
     * @param {QuizGameStateCreateManyAndReturnArgs} args - Arguments to create many QuizGameStates.
     * @example
     * // Create many QuizGameStates
     * const quizGameState = await prisma.quizGameState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizGameStates and only return the `id`
     * const quizGameStateWithIdOnly = await prisma.quizGameState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizGameStateCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizGameStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizGameStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizGameState.
     * @param {QuizGameStateDeleteArgs} args - Arguments to delete one QuizGameState.
     * @example
     * // Delete one QuizGameState
     * const QuizGameState = await prisma.quizGameState.delete({
     *   where: {
     *     // ... filter to delete one QuizGameState
     *   }
     * })
     * 
     */
    delete<T extends QuizGameStateDeleteArgs>(args: SelectSubset<T, QuizGameStateDeleteArgs<ExtArgs>>): Prisma__QuizGameStateClient<$Result.GetResult<Prisma.$QuizGameStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizGameState.
     * @param {QuizGameStateUpdateArgs} args - Arguments to update one QuizGameState.
     * @example
     * // Update one QuizGameState
     * const quizGameState = await prisma.quizGameState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizGameStateUpdateArgs>(args: SelectSubset<T, QuizGameStateUpdateArgs<ExtArgs>>): Prisma__QuizGameStateClient<$Result.GetResult<Prisma.$QuizGameStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizGameStates.
     * @param {QuizGameStateDeleteManyArgs} args - Arguments to filter QuizGameStates to delete.
     * @example
     * // Delete a few QuizGameStates
     * const { count } = await prisma.quizGameState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizGameStateDeleteManyArgs>(args?: SelectSubset<T, QuizGameStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizGameStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGameStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizGameStates
     * const quizGameState = await prisma.quizGameState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizGameStateUpdateManyArgs>(args: SelectSubset<T, QuizGameStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizGameStates and returns the data updated in the database.
     * @param {QuizGameStateUpdateManyAndReturnArgs} args - Arguments to update many QuizGameStates.
     * @example
     * // Update many QuizGameStates
     * const quizGameState = await prisma.quizGameState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizGameStates and only return the `id`
     * const quizGameStateWithIdOnly = await prisma.quizGameState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizGameStateUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizGameStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizGameStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizGameState.
     * @param {QuizGameStateUpsertArgs} args - Arguments to update or create a QuizGameState.
     * @example
     * // Update or create a QuizGameState
     * const quizGameState = await prisma.quizGameState.upsert({
     *   create: {
     *     // ... data to create a QuizGameState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizGameState we want to update
     *   }
     * })
     */
    upsert<T extends QuizGameStateUpsertArgs>(args: SelectSubset<T, QuizGameStateUpsertArgs<ExtArgs>>): Prisma__QuizGameStateClient<$Result.GetResult<Prisma.$QuizGameStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizGameStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGameStateCountArgs} args - Arguments to filter QuizGameStates to count.
     * @example
     * // Count the number of QuizGameStates
     * const count = await prisma.quizGameState.count({
     *   where: {
     *     // ... the filter for the QuizGameStates we want to count
     *   }
     * })
    **/
    count<T extends QuizGameStateCountArgs>(
      args?: Subset<T, QuizGameStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizGameStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizGameState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGameStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizGameStateAggregateArgs>(args: Subset<T, QuizGameStateAggregateArgs>): Prisma.PrismaPromise<GetQuizGameStateAggregateType<T>>

    /**
     * Group by QuizGameState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGameStateGroupByArgs} args - Group by arguments.
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
      T extends QuizGameStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGameStateGroupByArgs['orderBy'] }
        : { orderBy?: QuizGameStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizGameStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGameStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizGameState model
   */
  readonly fields: QuizGameStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizGameState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizGameStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuizGameState model
   */
  interface QuizGameStateFieldRefs {
    readonly id: FieldRef<"QuizGameState", 'Int'>
    readonly teamName: FieldRef<"QuizGameState", 'String'>
    readonly questionId: FieldRef<"QuizGameState", 'String'>
    readonly timeTaken: FieldRef<"QuizGameState", 'Int'>
    readonly completed: FieldRef<"QuizGameState", 'Boolean'>
    readonly isCorrect: FieldRef<"QuizGameState", 'Boolean'>
    readonly startedAt: FieldRef<"QuizGameState", 'DateTime'>
    readonly completedAt: FieldRef<"QuizGameState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizGameState findUnique
   */
  export type QuizGameStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizGameState
     */
    select?: QuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizGameState
     */
    omit?: QuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizGameStateInclude<ExtArgs> | null
    /**
     * Filter, which QuizGameState to fetch.
     */
    where: QuizGameStateWhereUniqueInput
  }

  /**
   * QuizGameState findUniqueOrThrow
   */
  export type QuizGameStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizGameState
     */
    select?: QuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizGameState
     */
    omit?: QuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizGameStateInclude<ExtArgs> | null
    /**
     * Filter, which QuizGameState to fetch.
     */
    where: QuizGameStateWhereUniqueInput
  }

  /**
   * QuizGameState findFirst
   */
  export type QuizGameStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizGameState
     */
    select?: QuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizGameState
     */
    omit?: QuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizGameStateInclude<ExtArgs> | null
    /**
     * Filter, which QuizGameState to fetch.
     */
    where?: QuizGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizGameStates to fetch.
     */
    orderBy?: QuizGameStateOrderByWithRelationInput | QuizGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizGameStates.
     */
    cursor?: QuizGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizGameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizGameStates.
     */
    distinct?: QuizGameStateScalarFieldEnum | QuizGameStateScalarFieldEnum[]
  }

  /**
   * QuizGameState findFirstOrThrow
   */
  export type QuizGameStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizGameState
     */
    select?: QuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizGameState
     */
    omit?: QuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizGameStateInclude<ExtArgs> | null
    /**
     * Filter, which QuizGameState to fetch.
     */
    where?: QuizGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizGameStates to fetch.
     */
    orderBy?: QuizGameStateOrderByWithRelationInput | QuizGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizGameStates.
     */
    cursor?: QuizGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizGameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizGameStates.
     */
    distinct?: QuizGameStateScalarFieldEnum | QuizGameStateScalarFieldEnum[]
  }

  /**
   * QuizGameState findMany
   */
  export type QuizGameStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizGameState
     */
    select?: QuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizGameState
     */
    omit?: QuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizGameStateInclude<ExtArgs> | null
    /**
     * Filter, which QuizGameStates to fetch.
     */
    where?: QuizGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizGameStates to fetch.
     */
    orderBy?: QuizGameStateOrderByWithRelationInput | QuizGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizGameStates.
     */
    cursor?: QuizGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizGameStates.
     */
    skip?: number
    distinct?: QuizGameStateScalarFieldEnum | QuizGameStateScalarFieldEnum[]
  }

  /**
   * QuizGameState create
   */
  export type QuizGameStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizGameState
     */
    select?: QuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizGameState
     */
    omit?: QuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizGameStateInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizGameState.
     */
    data: XOR<QuizGameStateCreateInput, QuizGameStateUncheckedCreateInput>
  }

  /**
   * QuizGameState createMany
   */
  export type QuizGameStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizGameStates.
     */
    data: QuizGameStateCreateManyInput | QuizGameStateCreateManyInput[]
  }

  /**
   * QuizGameState createManyAndReturn
   */
  export type QuizGameStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizGameState
     */
    select?: QuizGameStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizGameState
     */
    omit?: QuizGameStateOmit<ExtArgs> | null
    /**
     * The data used to create many QuizGameStates.
     */
    data: QuizGameStateCreateManyInput | QuizGameStateCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizGameStateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizGameState update
   */
  export type QuizGameStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizGameState
     */
    select?: QuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizGameState
     */
    omit?: QuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizGameStateInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizGameState.
     */
    data: XOR<QuizGameStateUpdateInput, QuizGameStateUncheckedUpdateInput>
    /**
     * Choose, which QuizGameState to update.
     */
    where: QuizGameStateWhereUniqueInput
  }

  /**
   * QuizGameState updateMany
   */
  export type QuizGameStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizGameStates.
     */
    data: XOR<QuizGameStateUpdateManyMutationInput, QuizGameStateUncheckedUpdateManyInput>
    /**
     * Filter which QuizGameStates to update
     */
    where?: QuizGameStateWhereInput
    /**
     * Limit how many QuizGameStates to update.
     */
    limit?: number
  }

  /**
   * QuizGameState updateManyAndReturn
   */
  export type QuizGameStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizGameState
     */
    select?: QuizGameStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizGameState
     */
    omit?: QuizGameStateOmit<ExtArgs> | null
    /**
     * The data used to update QuizGameStates.
     */
    data: XOR<QuizGameStateUpdateManyMutationInput, QuizGameStateUncheckedUpdateManyInput>
    /**
     * Filter which QuizGameStates to update
     */
    where?: QuizGameStateWhereInput
    /**
     * Limit how many QuizGameStates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizGameStateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizGameState upsert
   */
  export type QuizGameStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizGameState
     */
    select?: QuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizGameState
     */
    omit?: QuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizGameStateInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizGameState to update in case it exists.
     */
    where: QuizGameStateWhereUniqueInput
    /**
     * In case the QuizGameState found by the `where` argument doesn't exist, create a new QuizGameState with this data.
     */
    create: XOR<QuizGameStateCreateInput, QuizGameStateUncheckedCreateInput>
    /**
     * In case the QuizGameState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizGameStateUpdateInput, QuizGameStateUncheckedUpdateInput>
  }

  /**
   * QuizGameState delete
   */
  export type QuizGameStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizGameState
     */
    select?: QuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizGameState
     */
    omit?: QuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizGameStateInclude<ExtArgs> | null
    /**
     * Filter which QuizGameState to delete.
     */
    where: QuizGameStateWhereUniqueInput
  }

  /**
   * QuizGameState deleteMany
   */
  export type QuizGameStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizGameStates to delete
     */
    where?: QuizGameStateWhereInput
    /**
     * Limit how many QuizGameStates to delete.
     */
    limit?: number
  }

  /**
   * QuizGameState without action
   */
  export type QuizGameStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizGameState
     */
    select?: QuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizGameState
     */
    omit?: QuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizGameStateInclude<ExtArgs> | null
  }


  /**
   * Model CrosswordGameState
   */

  export type AggregateCrosswordGameState = {
    _count: CrosswordGameStateCountAggregateOutputType | null
    _avg: CrosswordGameStateAvgAggregateOutputType | null
    _sum: CrosswordGameStateSumAggregateOutputType | null
    _min: CrosswordGameStateMinAggregateOutputType | null
    _max: CrosswordGameStateMaxAggregateOutputType | null
  }

  export type CrosswordGameStateAvgAggregateOutputType = {
    id: number | null
    timeTaken: number | null
  }

  export type CrosswordGameStateSumAggregateOutputType = {
    id: number | null
    timeTaken: number | null
  }

  export type CrosswordGameStateMinAggregateOutputType = {
    id: number | null
    teamName: string | null
    timeTaken: number | null
    completed: boolean | null
    isCorrect: boolean | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type CrosswordGameStateMaxAggregateOutputType = {
    id: number | null
    teamName: string | null
    timeTaken: number | null
    completed: boolean | null
    isCorrect: boolean | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type CrosswordGameStateCountAggregateOutputType = {
    id: number
    teamName: number
    timeTaken: number
    completed: number
    isCorrect: number
    startedAt: number
    completedAt: number
    _all: number
  }


  export type CrosswordGameStateAvgAggregateInputType = {
    id?: true
    timeTaken?: true
  }

  export type CrosswordGameStateSumAggregateInputType = {
    id?: true
    timeTaken?: true
  }

  export type CrosswordGameStateMinAggregateInputType = {
    id?: true
    teamName?: true
    timeTaken?: true
    completed?: true
    isCorrect?: true
    startedAt?: true
    completedAt?: true
  }

  export type CrosswordGameStateMaxAggregateInputType = {
    id?: true
    teamName?: true
    timeTaken?: true
    completed?: true
    isCorrect?: true
    startedAt?: true
    completedAt?: true
  }

  export type CrosswordGameStateCountAggregateInputType = {
    id?: true
    teamName?: true
    timeTaken?: true
    completed?: true
    isCorrect?: true
    startedAt?: true
    completedAt?: true
    _all?: true
  }

  export type CrosswordGameStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrosswordGameState to aggregate.
     */
    where?: CrosswordGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrosswordGameStates to fetch.
     */
    orderBy?: CrosswordGameStateOrderByWithRelationInput | CrosswordGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrosswordGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrosswordGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrosswordGameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CrosswordGameStates
    **/
    _count?: true | CrosswordGameStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CrosswordGameStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CrosswordGameStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrosswordGameStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrosswordGameStateMaxAggregateInputType
  }

  export type GetCrosswordGameStateAggregateType<T extends CrosswordGameStateAggregateArgs> = {
        [P in keyof T & keyof AggregateCrosswordGameState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrosswordGameState[P]>
      : GetScalarType<T[P], AggregateCrosswordGameState[P]>
  }




  export type CrosswordGameStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrosswordGameStateWhereInput
    orderBy?: CrosswordGameStateOrderByWithAggregationInput | CrosswordGameStateOrderByWithAggregationInput[]
    by: CrosswordGameStateScalarFieldEnum[] | CrosswordGameStateScalarFieldEnum
    having?: CrosswordGameStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrosswordGameStateCountAggregateInputType | true
    _avg?: CrosswordGameStateAvgAggregateInputType
    _sum?: CrosswordGameStateSumAggregateInputType
    _min?: CrosswordGameStateMinAggregateInputType
    _max?: CrosswordGameStateMaxAggregateInputType
  }

  export type CrosswordGameStateGroupByOutputType = {
    id: number
    teamName: string
    timeTaken: number
    completed: boolean
    isCorrect: boolean
    startedAt: Date
    completedAt: Date | null
    _count: CrosswordGameStateCountAggregateOutputType | null
    _avg: CrosswordGameStateAvgAggregateOutputType | null
    _sum: CrosswordGameStateSumAggregateOutputType | null
    _min: CrosswordGameStateMinAggregateOutputType | null
    _max: CrosswordGameStateMaxAggregateOutputType | null
  }

  type GetCrosswordGameStateGroupByPayload<T extends CrosswordGameStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrosswordGameStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrosswordGameStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrosswordGameStateGroupByOutputType[P]>
            : GetScalarType<T[P], CrosswordGameStateGroupByOutputType[P]>
        }
      >
    >


  export type CrosswordGameStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    timeTaken?: boolean
    completed?: boolean
    isCorrect?: boolean
    startedAt?: boolean
    completedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crosswordGameState"]>

  export type CrosswordGameStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    timeTaken?: boolean
    completed?: boolean
    isCorrect?: boolean
    startedAt?: boolean
    completedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crosswordGameState"]>

  export type CrosswordGameStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    timeTaken?: boolean
    completed?: boolean
    isCorrect?: boolean
    startedAt?: boolean
    completedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crosswordGameState"]>

  export type CrosswordGameStateSelectScalar = {
    id?: boolean
    teamName?: boolean
    timeTaken?: boolean
    completed?: boolean
    isCorrect?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }

  export type CrosswordGameStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamName" | "timeTaken" | "completed" | "isCorrect" | "startedAt" | "completedAt", ExtArgs["result"]["crosswordGameState"]>
  export type CrosswordGameStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type CrosswordGameStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type CrosswordGameStateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $CrosswordGameStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CrosswordGameState"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamName: string
      timeTaken: number
      completed: boolean
      isCorrect: boolean
      startedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["crosswordGameState"]>
    composites: {}
  }

  type CrosswordGameStateGetPayload<S extends boolean | null | undefined | CrosswordGameStateDefaultArgs> = $Result.GetResult<Prisma.$CrosswordGameStatePayload, S>

  type CrosswordGameStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CrosswordGameStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrosswordGameStateCountAggregateInputType | true
    }

  export interface CrosswordGameStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CrosswordGameState'], meta: { name: 'CrosswordGameState' } }
    /**
     * Find zero or one CrosswordGameState that matches the filter.
     * @param {CrosswordGameStateFindUniqueArgs} args - Arguments to find a CrosswordGameState
     * @example
     * // Get one CrosswordGameState
     * const crosswordGameState = await prisma.crosswordGameState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrosswordGameStateFindUniqueArgs>(args: SelectSubset<T, CrosswordGameStateFindUniqueArgs<ExtArgs>>): Prisma__CrosswordGameStateClient<$Result.GetResult<Prisma.$CrosswordGameStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CrosswordGameState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CrosswordGameStateFindUniqueOrThrowArgs} args - Arguments to find a CrosswordGameState
     * @example
     * // Get one CrosswordGameState
     * const crosswordGameState = await prisma.crosswordGameState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrosswordGameStateFindUniqueOrThrowArgs>(args: SelectSubset<T, CrosswordGameStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrosswordGameStateClient<$Result.GetResult<Prisma.$CrosswordGameStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrosswordGameState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrosswordGameStateFindFirstArgs} args - Arguments to find a CrosswordGameState
     * @example
     * // Get one CrosswordGameState
     * const crosswordGameState = await prisma.crosswordGameState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrosswordGameStateFindFirstArgs>(args?: SelectSubset<T, CrosswordGameStateFindFirstArgs<ExtArgs>>): Prisma__CrosswordGameStateClient<$Result.GetResult<Prisma.$CrosswordGameStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrosswordGameState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrosswordGameStateFindFirstOrThrowArgs} args - Arguments to find a CrosswordGameState
     * @example
     * // Get one CrosswordGameState
     * const crosswordGameState = await prisma.crosswordGameState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrosswordGameStateFindFirstOrThrowArgs>(args?: SelectSubset<T, CrosswordGameStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrosswordGameStateClient<$Result.GetResult<Prisma.$CrosswordGameStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CrosswordGameStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrosswordGameStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CrosswordGameStates
     * const crosswordGameStates = await prisma.crosswordGameState.findMany()
     * 
     * // Get first 10 CrosswordGameStates
     * const crosswordGameStates = await prisma.crosswordGameState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const crosswordGameStateWithIdOnly = await prisma.crosswordGameState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CrosswordGameStateFindManyArgs>(args?: SelectSubset<T, CrosswordGameStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrosswordGameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CrosswordGameState.
     * @param {CrosswordGameStateCreateArgs} args - Arguments to create a CrosswordGameState.
     * @example
     * // Create one CrosswordGameState
     * const CrosswordGameState = await prisma.crosswordGameState.create({
     *   data: {
     *     // ... data to create a CrosswordGameState
     *   }
     * })
     * 
     */
    create<T extends CrosswordGameStateCreateArgs>(args: SelectSubset<T, CrosswordGameStateCreateArgs<ExtArgs>>): Prisma__CrosswordGameStateClient<$Result.GetResult<Prisma.$CrosswordGameStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CrosswordGameStates.
     * @param {CrosswordGameStateCreateManyArgs} args - Arguments to create many CrosswordGameStates.
     * @example
     * // Create many CrosswordGameStates
     * const crosswordGameState = await prisma.crosswordGameState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrosswordGameStateCreateManyArgs>(args?: SelectSubset<T, CrosswordGameStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CrosswordGameStates and returns the data saved in the database.
     * @param {CrosswordGameStateCreateManyAndReturnArgs} args - Arguments to create many CrosswordGameStates.
     * @example
     * // Create many CrosswordGameStates
     * const crosswordGameState = await prisma.crosswordGameState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CrosswordGameStates and only return the `id`
     * const crosswordGameStateWithIdOnly = await prisma.crosswordGameState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrosswordGameStateCreateManyAndReturnArgs>(args?: SelectSubset<T, CrosswordGameStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrosswordGameStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CrosswordGameState.
     * @param {CrosswordGameStateDeleteArgs} args - Arguments to delete one CrosswordGameState.
     * @example
     * // Delete one CrosswordGameState
     * const CrosswordGameState = await prisma.crosswordGameState.delete({
     *   where: {
     *     // ... filter to delete one CrosswordGameState
     *   }
     * })
     * 
     */
    delete<T extends CrosswordGameStateDeleteArgs>(args: SelectSubset<T, CrosswordGameStateDeleteArgs<ExtArgs>>): Prisma__CrosswordGameStateClient<$Result.GetResult<Prisma.$CrosswordGameStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CrosswordGameState.
     * @param {CrosswordGameStateUpdateArgs} args - Arguments to update one CrosswordGameState.
     * @example
     * // Update one CrosswordGameState
     * const crosswordGameState = await prisma.crosswordGameState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrosswordGameStateUpdateArgs>(args: SelectSubset<T, CrosswordGameStateUpdateArgs<ExtArgs>>): Prisma__CrosswordGameStateClient<$Result.GetResult<Prisma.$CrosswordGameStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CrosswordGameStates.
     * @param {CrosswordGameStateDeleteManyArgs} args - Arguments to filter CrosswordGameStates to delete.
     * @example
     * // Delete a few CrosswordGameStates
     * const { count } = await prisma.crosswordGameState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrosswordGameStateDeleteManyArgs>(args?: SelectSubset<T, CrosswordGameStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrosswordGameStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrosswordGameStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CrosswordGameStates
     * const crosswordGameState = await prisma.crosswordGameState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrosswordGameStateUpdateManyArgs>(args: SelectSubset<T, CrosswordGameStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrosswordGameStates and returns the data updated in the database.
     * @param {CrosswordGameStateUpdateManyAndReturnArgs} args - Arguments to update many CrosswordGameStates.
     * @example
     * // Update many CrosswordGameStates
     * const crosswordGameState = await prisma.crosswordGameState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CrosswordGameStates and only return the `id`
     * const crosswordGameStateWithIdOnly = await prisma.crosswordGameState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CrosswordGameStateUpdateManyAndReturnArgs>(args: SelectSubset<T, CrosswordGameStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrosswordGameStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CrosswordGameState.
     * @param {CrosswordGameStateUpsertArgs} args - Arguments to update or create a CrosswordGameState.
     * @example
     * // Update or create a CrosswordGameState
     * const crosswordGameState = await prisma.crosswordGameState.upsert({
     *   create: {
     *     // ... data to create a CrosswordGameState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CrosswordGameState we want to update
     *   }
     * })
     */
    upsert<T extends CrosswordGameStateUpsertArgs>(args: SelectSubset<T, CrosswordGameStateUpsertArgs<ExtArgs>>): Prisma__CrosswordGameStateClient<$Result.GetResult<Prisma.$CrosswordGameStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CrosswordGameStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrosswordGameStateCountArgs} args - Arguments to filter CrosswordGameStates to count.
     * @example
     * // Count the number of CrosswordGameStates
     * const count = await prisma.crosswordGameState.count({
     *   where: {
     *     // ... the filter for the CrosswordGameStates we want to count
     *   }
     * })
    **/
    count<T extends CrosswordGameStateCountArgs>(
      args?: Subset<T, CrosswordGameStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrosswordGameStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CrosswordGameState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrosswordGameStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CrosswordGameStateAggregateArgs>(args: Subset<T, CrosswordGameStateAggregateArgs>): Prisma.PrismaPromise<GetCrosswordGameStateAggregateType<T>>

    /**
     * Group by CrosswordGameState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrosswordGameStateGroupByArgs} args - Group by arguments.
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
      T extends CrosswordGameStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrosswordGameStateGroupByArgs['orderBy'] }
        : { orderBy?: CrosswordGameStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CrosswordGameStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrosswordGameStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CrosswordGameState model
   */
  readonly fields: CrosswordGameStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CrosswordGameState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrosswordGameStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CrosswordGameState model
   */
  interface CrosswordGameStateFieldRefs {
    readonly id: FieldRef<"CrosswordGameState", 'Int'>
    readonly teamName: FieldRef<"CrosswordGameState", 'String'>
    readonly timeTaken: FieldRef<"CrosswordGameState", 'Int'>
    readonly completed: FieldRef<"CrosswordGameState", 'Boolean'>
    readonly isCorrect: FieldRef<"CrosswordGameState", 'Boolean'>
    readonly startedAt: FieldRef<"CrosswordGameState", 'DateTime'>
    readonly completedAt: FieldRef<"CrosswordGameState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CrosswordGameState findUnique
   */
  export type CrosswordGameStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrosswordGameState
     */
    select?: CrosswordGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrosswordGameState
     */
    omit?: CrosswordGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrosswordGameStateInclude<ExtArgs> | null
    /**
     * Filter, which CrosswordGameState to fetch.
     */
    where: CrosswordGameStateWhereUniqueInput
  }

  /**
   * CrosswordGameState findUniqueOrThrow
   */
  export type CrosswordGameStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrosswordGameState
     */
    select?: CrosswordGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrosswordGameState
     */
    omit?: CrosswordGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrosswordGameStateInclude<ExtArgs> | null
    /**
     * Filter, which CrosswordGameState to fetch.
     */
    where: CrosswordGameStateWhereUniqueInput
  }

  /**
   * CrosswordGameState findFirst
   */
  export type CrosswordGameStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrosswordGameState
     */
    select?: CrosswordGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrosswordGameState
     */
    omit?: CrosswordGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrosswordGameStateInclude<ExtArgs> | null
    /**
     * Filter, which CrosswordGameState to fetch.
     */
    where?: CrosswordGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrosswordGameStates to fetch.
     */
    orderBy?: CrosswordGameStateOrderByWithRelationInput | CrosswordGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrosswordGameStates.
     */
    cursor?: CrosswordGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrosswordGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrosswordGameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrosswordGameStates.
     */
    distinct?: CrosswordGameStateScalarFieldEnum | CrosswordGameStateScalarFieldEnum[]
  }

  /**
   * CrosswordGameState findFirstOrThrow
   */
  export type CrosswordGameStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrosswordGameState
     */
    select?: CrosswordGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrosswordGameState
     */
    omit?: CrosswordGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrosswordGameStateInclude<ExtArgs> | null
    /**
     * Filter, which CrosswordGameState to fetch.
     */
    where?: CrosswordGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrosswordGameStates to fetch.
     */
    orderBy?: CrosswordGameStateOrderByWithRelationInput | CrosswordGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrosswordGameStates.
     */
    cursor?: CrosswordGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrosswordGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrosswordGameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrosswordGameStates.
     */
    distinct?: CrosswordGameStateScalarFieldEnum | CrosswordGameStateScalarFieldEnum[]
  }

  /**
   * CrosswordGameState findMany
   */
  export type CrosswordGameStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrosswordGameState
     */
    select?: CrosswordGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrosswordGameState
     */
    omit?: CrosswordGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrosswordGameStateInclude<ExtArgs> | null
    /**
     * Filter, which CrosswordGameStates to fetch.
     */
    where?: CrosswordGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrosswordGameStates to fetch.
     */
    orderBy?: CrosswordGameStateOrderByWithRelationInput | CrosswordGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CrosswordGameStates.
     */
    cursor?: CrosswordGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrosswordGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrosswordGameStates.
     */
    skip?: number
    distinct?: CrosswordGameStateScalarFieldEnum | CrosswordGameStateScalarFieldEnum[]
  }

  /**
   * CrosswordGameState create
   */
  export type CrosswordGameStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrosswordGameState
     */
    select?: CrosswordGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrosswordGameState
     */
    omit?: CrosswordGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrosswordGameStateInclude<ExtArgs> | null
    /**
     * The data needed to create a CrosswordGameState.
     */
    data: XOR<CrosswordGameStateCreateInput, CrosswordGameStateUncheckedCreateInput>
  }

  /**
   * CrosswordGameState createMany
   */
  export type CrosswordGameStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CrosswordGameStates.
     */
    data: CrosswordGameStateCreateManyInput | CrosswordGameStateCreateManyInput[]
  }

  /**
   * CrosswordGameState createManyAndReturn
   */
  export type CrosswordGameStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrosswordGameState
     */
    select?: CrosswordGameStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrosswordGameState
     */
    omit?: CrosswordGameStateOmit<ExtArgs> | null
    /**
     * The data used to create many CrosswordGameStates.
     */
    data: CrosswordGameStateCreateManyInput | CrosswordGameStateCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrosswordGameStateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrosswordGameState update
   */
  export type CrosswordGameStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrosswordGameState
     */
    select?: CrosswordGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrosswordGameState
     */
    omit?: CrosswordGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrosswordGameStateInclude<ExtArgs> | null
    /**
     * The data needed to update a CrosswordGameState.
     */
    data: XOR<CrosswordGameStateUpdateInput, CrosswordGameStateUncheckedUpdateInput>
    /**
     * Choose, which CrosswordGameState to update.
     */
    where: CrosswordGameStateWhereUniqueInput
  }

  /**
   * CrosswordGameState updateMany
   */
  export type CrosswordGameStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CrosswordGameStates.
     */
    data: XOR<CrosswordGameStateUpdateManyMutationInput, CrosswordGameStateUncheckedUpdateManyInput>
    /**
     * Filter which CrosswordGameStates to update
     */
    where?: CrosswordGameStateWhereInput
    /**
     * Limit how many CrosswordGameStates to update.
     */
    limit?: number
  }

  /**
   * CrosswordGameState updateManyAndReturn
   */
  export type CrosswordGameStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrosswordGameState
     */
    select?: CrosswordGameStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrosswordGameState
     */
    omit?: CrosswordGameStateOmit<ExtArgs> | null
    /**
     * The data used to update CrosswordGameStates.
     */
    data: XOR<CrosswordGameStateUpdateManyMutationInput, CrosswordGameStateUncheckedUpdateManyInput>
    /**
     * Filter which CrosswordGameStates to update
     */
    where?: CrosswordGameStateWhereInput
    /**
     * Limit how many CrosswordGameStates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrosswordGameStateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrosswordGameState upsert
   */
  export type CrosswordGameStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrosswordGameState
     */
    select?: CrosswordGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrosswordGameState
     */
    omit?: CrosswordGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrosswordGameStateInclude<ExtArgs> | null
    /**
     * The filter to search for the CrosswordGameState to update in case it exists.
     */
    where: CrosswordGameStateWhereUniqueInput
    /**
     * In case the CrosswordGameState found by the `where` argument doesn't exist, create a new CrosswordGameState with this data.
     */
    create: XOR<CrosswordGameStateCreateInput, CrosswordGameStateUncheckedCreateInput>
    /**
     * In case the CrosswordGameState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrosswordGameStateUpdateInput, CrosswordGameStateUncheckedUpdateInput>
  }

  /**
   * CrosswordGameState delete
   */
  export type CrosswordGameStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrosswordGameState
     */
    select?: CrosswordGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrosswordGameState
     */
    omit?: CrosswordGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrosswordGameStateInclude<ExtArgs> | null
    /**
     * Filter which CrosswordGameState to delete.
     */
    where: CrosswordGameStateWhereUniqueInput
  }

  /**
   * CrosswordGameState deleteMany
   */
  export type CrosswordGameStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrosswordGameStates to delete
     */
    where?: CrosswordGameStateWhereInput
    /**
     * Limit how many CrosswordGameStates to delete.
     */
    limit?: number
  }

  /**
   * CrosswordGameState without action
   */
  export type CrosswordGameStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrosswordGameState
     */
    select?: CrosswordGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrosswordGameState
     */
    omit?: CrosswordGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrosswordGameStateInclude<ExtArgs> | null
  }


  /**
   * Model ImageQuizGameState
   */

  export type AggregateImageQuizGameState = {
    _count: ImageQuizGameStateCountAggregateOutputType | null
    _avg: ImageQuizGameStateAvgAggregateOutputType | null
    _sum: ImageQuizGameStateSumAggregateOutputType | null
    _min: ImageQuizGameStateMinAggregateOutputType | null
    _max: ImageQuizGameStateMaxAggregateOutputType | null
  }

  export type ImageQuizGameStateAvgAggregateOutputType = {
    id: number | null
    timeTaken: number | null
  }

  export type ImageQuizGameStateSumAggregateOutputType = {
    id: number | null
    timeTaken: number | null
  }

  export type ImageQuizGameStateMinAggregateOutputType = {
    id: number | null
    teamName: string | null
    imageId: string | null
    timeTaken: number | null
    completed: boolean | null
    isCorrect: boolean | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type ImageQuizGameStateMaxAggregateOutputType = {
    id: number | null
    teamName: string | null
    imageId: string | null
    timeTaken: number | null
    completed: boolean | null
    isCorrect: boolean | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type ImageQuizGameStateCountAggregateOutputType = {
    id: number
    teamName: number
    imageId: number
    timeTaken: number
    completed: number
    isCorrect: number
    startedAt: number
    completedAt: number
    _all: number
  }


  export type ImageQuizGameStateAvgAggregateInputType = {
    id?: true
    timeTaken?: true
  }

  export type ImageQuizGameStateSumAggregateInputType = {
    id?: true
    timeTaken?: true
  }

  export type ImageQuizGameStateMinAggregateInputType = {
    id?: true
    teamName?: true
    imageId?: true
    timeTaken?: true
    completed?: true
    isCorrect?: true
    startedAt?: true
    completedAt?: true
  }

  export type ImageQuizGameStateMaxAggregateInputType = {
    id?: true
    teamName?: true
    imageId?: true
    timeTaken?: true
    completed?: true
    isCorrect?: true
    startedAt?: true
    completedAt?: true
  }

  export type ImageQuizGameStateCountAggregateInputType = {
    id?: true
    teamName?: true
    imageId?: true
    timeTaken?: true
    completed?: true
    isCorrect?: true
    startedAt?: true
    completedAt?: true
    _all?: true
  }

  export type ImageQuizGameStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageQuizGameState to aggregate.
     */
    where?: ImageQuizGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageQuizGameStates to fetch.
     */
    orderBy?: ImageQuizGameStateOrderByWithRelationInput | ImageQuizGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageQuizGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageQuizGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageQuizGameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImageQuizGameStates
    **/
    _count?: true | ImageQuizGameStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageQuizGameStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageQuizGameStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageQuizGameStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageQuizGameStateMaxAggregateInputType
  }

  export type GetImageQuizGameStateAggregateType<T extends ImageQuizGameStateAggregateArgs> = {
        [P in keyof T & keyof AggregateImageQuizGameState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageQuizGameState[P]>
      : GetScalarType<T[P], AggregateImageQuizGameState[P]>
  }




  export type ImageQuizGameStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageQuizGameStateWhereInput
    orderBy?: ImageQuizGameStateOrderByWithAggregationInput | ImageQuizGameStateOrderByWithAggregationInput[]
    by: ImageQuizGameStateScalarFieldEnum[] | ImageQuizGameStateScalarFieldEnum
    having?: ImageQuizGameStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageQuizGameStateCountAggregateInputType | true
    _avg?: ImageQuizGameStateAvgAggregateInputType
    _sum?: ImageQuizGameStateSumAggregateInputType
    _min?: ImageQuizGameStateMinAggregateInputType
    _max?: ImageQuizGameStateMaxAggregateInputType
  }

  export type ImageQuizGameStateGroupByOutputType = {
    id: number
    teamName: string
    imageId: string
    timeTaken: number
    completed: boolean
    isCorrect: boolean
    startedAt: Date
    completedAt: Date | null
    _count: ImageQuizGameStateCountAggregateOutputType | null
    _avg: ImageQuizGameStateAvgAggregateOutputType | null
    _sum: ImageQuizGameStateSumAggregateOutputType | null
    _min: ImageQuizGameStateMinAggregateOutputType | null
    _max: ImageQuizGameStateMaxAggregateOutputType | null
  }

  type GetImageQuizGameStateGroupByPayload<T extends ImageQuizGameStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageQuizGameStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageQuizGameStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageQuizGameStateGroupByOutputType[P]>
            : GetScalarType<T[P], ImageQuizGameStateGroupByOutputType[P]>
        }
      >
    >


  export type ImageQuizGameStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    imageId?: boolean
    timeTaken?: boolean
    completed?: boolean
    isCorrect?: boolean
    startedAt?: boolean
    completedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageQuizGameState"]>

  export type ImageQuizGameStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    imageId?: boolean
    timeTaken?: boolean
    completed?: boolean
    isCorrect?: boolean
    startedAt?: boolean
    completedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageQuizGameState"]>

  export type ImageQuizGameStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    imageId?: boolean
    timeTaken?: boolean
    completed?: boolean
    isCorrect?: boolean
    startedAt?: boolean
    completedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageQuizGameState"]>

  export type ImageQuizGameStateSelectScalar = {
    id?: boolean
    teamName?: boolean
    imageId?: boolean
    timeTaken?: boolean
    completed?: boolean
    isCorrect?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }

  export type ImageQuizGameStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamName" | "imageId" | "timeTaken" | "completed" | "isCorrect" | "startedAt" | "completedAt", ExtArgs["result"]["imageQuizGameState"]>
  export type ImageQuizGameStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type ImageQuizGameStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type ImageQuizGameStateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $ImageQuizGameStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImageQuizGameState"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamName: string
      imageId: string
      timeTaken: number
      completed: boolean
      isCorrect: boolean
      startedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["imageQuizGameState"]>
    composites: {}
  }

  type ImageQuizGameStateGetPayload<S extends boolean | null | undefined | ImageQuizGameStateDefaultArgs> = $Result.GetResult<Prisma.$ImageQuizGameStatePayload, S>

  type ImageQuizGameStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageQuizGameStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageQuizGameStateCountAggregateInputType | true
    }

  export interface ImageQuizGameStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImageQuizGameState'], meta: { name: 'ImageQuizGameState' } }
    /**
     * Find zero or one ImageQuizGameState that matches the filter.
     * @param {ImageQuizGameStateFindUniqueArgs} args - Arguments to find a ImageQuizGameState
     * @example
     * // Get one ImageQuizGameState
     * const imageQuizGameState = await prisma.imageQuizGameState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageQuizGameStateFindUniqueArgs>(args: SelectSubset<T, ImageQuizGameStateFindUniqueArgs<ExtArgs>>): Prisma__ImageQuizGameStateClient<$Result.GetResult<Prisma.$ImageQuizGameStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImageQuizGameState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageQuizGameStateFindUniqueOrThrowArgs} args - Arguments to find a ImageQuizGameState
     * @example
     * // Get one ImageQuizGameState
     * const imageQuizGameState = await prisma.imageQuizGameState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageQuizGameStateFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageQuizGameStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageQuizGameStateClient<$Result.GetResult<Prisma.$ImageQuizGameStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageQuizGameState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageQuizGameStateFindFirstArgs} args - Arguments to find a ImageQuizGameState
     * @example
     * // Get one ImageQuizGameState
     * const imageQuizGameState = await prisma.imageQuizGameState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageQuizGameStateFindFirstArgs>(args?: SelectSubset<T, ImageQuizGameStateFindFirstArgs<ExtArgs>>): Prisma__ImageQuizGameStateClient<$Result.GetResult<Prisma.$ImageQuizGameStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageQuizGameState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageQuizGameStateFindFirstOrThrowArgs} args - Arguments to find a ImageQuizGameState
     * @example
     * // Get one ImageQuizGameState
     * const imageQuizGameState = await prisma.imageQuizGameState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageQuizGameStateFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageQuizGameStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageQuizGameStateClient<$Result.GetResult<Prisma.$ImageQuizGameStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImageQuizGameStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageQuizGameStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageQuizGameStates
     * const imageQuizGameStates = await prisma.imageQuizGameState.findMany()
     * 
     * // Get first 10 ImageQuizGameStates
     * const imageQuizGameStates = await prisma.imageQuizGameState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageQuizGameStateWithIdOnly = await prisma.imageQuizGameState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageQuizGameStateFindManyArgs>(args?: SelectSubset<T, ImageQuizGameStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageQuizGameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImageQuizGameState.
     * @param {ImageQuizGameStateCreateArgs} args - Arguments to create a ImageQuizGameState.
     * @example
     * // Create one ImageQuizGameState
     * const ImageQuizGameState = await prisma.imageQuizGameState.create({
     *   data: {
     *     // ... data to create a ImageQuizGameState
     *   }
     * })
     * 
     */
    create<T extends ImageQuizGameStateCreateArgs>(args: SelectSubset<T, ImageQuizGameStateCreateArgs<ExtArgs>>): Prisma__ImageQuizGameStateClient<$Result.GetResult<Prisma.$ImageQuizGameStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImageQuizGameStates.
     * @param {ImageQuizGameStateCreateManyArgs} args - Arguments to create many ImageQuizGameStates.
     * @example
     * // Create many ImageQuizGameStates
     * const imageQuizGameState = await prisma.imageQuizGameState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageQuizGameStateCreateManyArgs>(args?: SelectSubset<T, ImageQuizGameStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImageQuizGameStates and returns the data saved in the database.
     * @param {ImageQuizGameStateCreateManyAndReturnArgs} args - Arguments to create many ImageQuizGameStates.
     * @example
     * // Create many ImageQuizGameStates
     * const imageQuizGameState = await prisma.imageQuizGameState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImageQuizGameStates and only return the `id`
     * const imageQuizGameStateWithIdOnly = await prisma.imageQuizGameState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageQuizGameStateCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageQuizGameStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageQuizGameStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImageQuizGameState.
     * @param {ImageQuizGameStateDeleteArgs} args - Arguments to delete one ImageQuizGameState.
     * @example
     * // Delete one ImageQuizGameState
     * const ImageQuizGameState = await prisma.imageQuizGameState.delete({
     *   where: {
     *     // ... filter to delete one ImageQuizGameState
     *   }
     * })
     * 
     */
    delete<T extends ImageQuizGameStateDeleteArgs>(args: SelectSubset<T, ImageQuizGameStateDeleteArgs<ExtArgs>>): Prisma__ImageQuizGameStateClient<$Result.GetResult<Prisma.$ImageQuizGameStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImageQuizGameState.
     * @param {ImageQuizGameStateUpdateArgs} args - Arguments to update one ImageQuizGameState.
     * @example
     * // Update one ImageQuizGameState
     * const imageQuizGameState = await prisma.imageQuizGameState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageQuizGameStateUpdateArgs>(args: SelectSubset<T, ImageQuizGameStateUpdateArgs<ExtArgs>>): Prisma__ImageQuizGameStateClient<$Result.GetResult<Prisma.$ImageQuizGameStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImageQuizGameStates.
     * @param {ImageQuizGameStateDeleteManyArgs} args - Arguments to filter ImageQuizGameStates to delete.
     * @example
     * // Delete a few ImageQuizGameStates
     * const { count } = await prisma.imageQuizGameState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageQuizGameStateDeleteManyArgs>(args?: SelectSubset<T, ImageQuizGameStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageQuizGameStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageQuizGameStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageQuizGameStates
     * const imageQuizGameState = await prisma.imageQuizGameState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageQuizGameStateUpdateManyArgs>(args: SelectSubset<T, ImageQuizGameStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageQuizGameStates and returns the data updated in the database.
     * @param {ImageQuizGameStateUpdateManyAndReturnArgs} args - Arguments to update many ImageQuizGameStates.
     * @example
     * // Update many ImageQuizGameStates
     * const imageQuizGameState = await prisma.imageQuizGameState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImageQuizGameStates and only return the `id`
     * const imageQuizGameStateWithIdOnly = await prisma.imageQuizGameState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageQuizGameStateUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageQuizGameStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageQuizGameStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImageQuizGameState.
     * @param {ImageQuizGameStateUpsertArgs} args - Arguments to update or create a ImageQuizGameState.
     * @example
     * // Update or create a ImageQuizGameState
     * const imageQuizGameState = await prisma.imageQuizGameState.upsert({
     *   create: {
     *     // ... data to create a ImageQuizGameState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageQuizGameState we want to update
     *   }
     * })
     */
    upsert<T extends ImageQuizGameStateUpsertArgs>(args: SelectSubset<T, ImageQuizGameStateUpsertArgs<ExtArgs>>): Prisma__ImageQuizGameStateClient<$Result.GetResult<Prisma.$ImageQuizGameStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImageQuizGameStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageQuizGameStateCountArgs} args - Arguments to filter ImageQuizGameStates to count.
     * @example
     * // Count the number of ImageQuizGameStates
     * const count = await prisma.imageQuizGameState.count({
     *   where: {
     *     // ... the filter for the ImageQuizGameStates we want to count
     *   }
     * })
    **/
    count<T extends ImageQuizGameStateCountArgs>(
      args?: Subset<T, ImageQuizGameStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageQuizGameStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageQuizGameState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageQuizGameStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageQuizGameStateAggregateArgs>(args: Subset<T, ImageQuizGameStateAggregateArgs>): Prisma.PrismaPromise<GetImageQuizGameStateAggregateType<T>>

    /**
     * Group by ImageQuizGameState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageQuizGameStateGroupByArgs} args - Group by arguments.
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
      T extends ImageQuizGameStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageQuizGameStateGroupByArgs['orderBy'] }
        : { orderBy?: ImageQuizGameStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageQuizGameStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageQuizGameStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImageQuizGameState model
   */
  readonly fields: ImageQuizGameStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImageQuizGameState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageQuizGameStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ImageQuizGameState model
   */
  interface ImageQuizGameStateFieldRefs {
    readonly id: FieldRef<"ImageQuizGameState", 'Int'>
    readonly teamName: FieldRef<"ImageQuizGameState", 'String'>
    readonly imageId: FieldRef<"ImageQuizGameState", 'String'>
    readonly timeTaken: FieldRef<"ImageQuizGameState", 'Int'>
    readonly completed: FieldRef<"ImageQuizGameState", 'Boolean'>
    readonly isCorrect: FieldRef<"ImageQuizGameState", 'Boolean'>
    readonly startedAt: FieldRef<"ImageQuizGameState", 'DateTime'>
    readonly completedAt: FieldRef<"ImageQuizGameState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImageQuizGameState findUnique
   */
  export type ImageQuizGameStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageQuizGameState
     */
    select?: ImageQuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageQuizGameState
     */
    omit?: ImageQuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageQuizGameStateInclude<ExtArgs> | null
    /**
     * Filter, which ImageQuizGameState to fetch.
     */
    where: ImageQuizGameStateWhereUniqueInput
  }

  /**
   * ImageQuizGameState findUniqueOrThrow
   */
  export type ImageQuizGameStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageQuizGameState
     */
    select?: ImageQuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageQuizGameState
     */
    omit?: ImageQuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageQuizGameStateInclude<ExtArgs> | null
    /**
     * Filter, which ImageQuizGameState to fetch.
     */
    where: ImageQuizGameStateWhereUniqueInput
  }

  /**
   * ImageQuizGameState findFirst
   */
  export type ImageQuizGameStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageQuizGameState
     */
    select?: ImageQuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageQuizGameState
     */
    omit?: ImageQuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageQuizGameStateInclude<ExtArgs> | null
    /**
     * Filter, which ImageQuizGameState to fetch.
     */
    where?: ImageQuizGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageQuizGameStates to fetch.
     */
    orderBy?: ImageQuizGameStateOrderByWithRelationInput | ImageQuizGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageQuizGameStates.
     */
    cursor?: ImageQuizGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageQuizGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageQuizGameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageQuizGameStates.
     */
    distinct?: ImageQuizGameStateScalarFieldEnum | ImageQuizGameStateScalarFieldEnum[]
  }

  /**
   * ImageQuizGameState findFirstOrThrow
   */
  export type ImageQuizGameStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageQuizGameState
     */
    select?: ImageQuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageQuizGameState
     */
    omit?: ImageQuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageQuizGameStateInclude<ExtArgs> | null
    /**
     * Filter, which ImageQuizGameState to fetch.
     */
    where?: ImageQuizGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageQuizGameStates to fetch.
     */
    orderBy?: ImageQuizGameStateOrderByWithRelationInput | ImageQuizGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageQuizGameStates.
     */
    cursor?: ImageQuizGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageQuizGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageQuizGameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageQuizGameStates.
     */
    distinct?: ImageQuizGameStateScalarFieldEnum | ImageQuizGameStateScalarFieldEnum[]
  }

  /**
   * ImageQuizGameState findMany
   */
  export type ImageQuizGameStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageQuizGameState
     */
    select?: ImageQuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageQuizGameState
     */
    omit?: ImageQuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageQuizGameStateInclude<ExtArgs> | null
    /**
     * Filter, which ImageQuizGameStates to fetch.
     */
    where?: ImageQuizGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageQuizGameStates to fetch.
     */
    orderBy?: ImageQuizGameStateOrderByWithRelationInput | ImageQuizGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImageQuizGameStates.
     */
    cursor?: ImageQuizGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageQuizGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageQuizGameStates.
     */
    skip?: number
    distinct?: ImageQuizGameStateScalarFieldEnum | ImageQuizGameStateScalarFieldEnum[]
  }

  /**
   * ImageQuizGameState create
   */
  export type ImageQuizGameStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageQuizGameState
     */
    select?: ImageQuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageQuizGameState
     */
    omit?: ImageQuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageQuizGameStateInclude<ExtArgs> | null
    /**
     * The data needed to create a ImageQuizGameState.
     */
    data: XOR<ImageQuizGameStateCreateInput, ImageQuizGameStateUncheckedCreateInput>
  }

  /**
   * ImageQuizGameState createMany
   */
  export type ImageQuizGameStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImageQuizGameStates.
     */
    data: ImageQuizGameStateCreateManyInput | ImageQuizGameStateCreateManyInput[]
  }

  /**
   * ImageQuizGameState createManyAndReturn
   */
  export type ImageQuizGameStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageQuizGameState
     */
    select?: ImageQuizGameStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageQuizGameState
     */
    omit?: ImageQuizGameStateOmit<ExtArgs> | null
    /**
     * The data used to create many ImageQuizGameStates.
     */
    data: ImageQuizGameStateCreateManyInput | ImageQuizGameStateCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageQuizGameStateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImageQuizGameState update
   */
  export type ImageQuizGameStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageQuizGameState
     */
    select?: ImageQuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageQuizGameState
     */
    omit?: ImageQuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageQuizGameStateInclude<ExtArgs> | null
    /**
     * The data needed to update a ImageQuizGameState.
     */
    data: XOR<ImageQuizGameStateUpdateInput, ImageQuizGameStateUncheckedUpdateInput>
    /**
     * Choose, which ImageQuizGameState to update.
     */
    where: ImageQuizGameStateWhereUniqueInput
  }

  /**
   * ImageQuizGameState updateMany
   */
  export type ImageQuizGameStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImageQuizGameStates.
     */
    data: XOR<ImageQuizGameStateUpdateManyMutationInput, ImageQuizGameStateUncheckedUpdateManyInput>
    /**
     * Filter which ImageQuizGameStates to update
     */
    where?: ImageQuizGameStateWhereInput
    /**
     * Limit how many ImageQuizGameStates to update.
     */
    limit?: number
  }

  /**
   * ImageQuizGameState updateManyAndReturn
   */
  export type ImageQuizGameStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageQuizGameState
     */
    select?: ImageQuizGameStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageQuizGameState
     */
    omit?: ImageQuizGameStateOmit<ExtArgs> | null
    /**
     * The data used to update ImageQuizGameStates.
     */
    data: XOR<ImageQuizGameStateUpdateManyMutationInput, ImageQuizGameStateUncheckedUpdateManyInput>
    /**
     * Filter which ImageQuizGameStates to update
     */
    where?: ImageQuizGameStateWhereInput
    /**
     * Limit how many ImageQuizGameStates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageQuizGameStateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImageQuizGameState upsert
   */
  export type ImageQuizGameStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageQuizGameState
     */
    select?: ImageQuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageQuizGameState
     */
    omit?: ImageQuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageQuizGameStateInclude<ExtArgs> | null
    /**
     * The filter to search for the ImageQuizGameState to update in case it exists.
     */
    where: ImageQuizGameStateWhereUniqueInput
    /**
     * In case the ImageQuizGameState found by the `where` argument doesn't exist, create a new ImageQuizGameState with this data.
     */
    create: XOR<ImageQuizGameStateCreateInput, ImageQuizGameStateUncheckedCreateInput>
    /**
     * In case the ImageQuizGameState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageQuizGameStateUpdateInput, ImageQuizGameStateUncheckedUpdateInput>
  }

  /**
   * ImageQuizGameState delete
   */
  export type ImageQuizGameStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageQuizGameState
     */
    select?: ImageQuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageQuizGameState
     */
    omit?: ImageQuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageQuizGameStateInclude<ExtArgs> | null
    /**
     * Filter which ImageQuizGameState to delete.
     */
    where: ImageQuizGameStateWhereUniqueInput
  }

  /**
   * ImageQuizGameState deleteMany
   */
  export type ImageQuizGameStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageQuizGameStates to delete
     */
    where?: ImageQuizGameStateWhereInput
    /**
     * Limit how many ImageQuizGameStates to delete.
     */
    limit?: number
  }

  /**
   * ImageQuizGameState without action
   */
  export type ImageQuizGameStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageQuizGameState
     */
    select?: ImageQuizGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageQuizGameState
     */
    omit?: ImageQuizGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageQuizGameStateInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    currentLevel: 'currentLevel',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const WikipediaGameStateScalarFieldEnum: {
    id: 'id',
    teamName: 'teamName',
    targetPage: 'targetPage',
    clicks: 'clicks',
    timeTaken: 'timeTaken',
    completed: 'completed',
    startedAt: 'startedAt',
    completedAt: 'completedAt'
  };

  export type WikipediaGameStateScalarFieldEnum = (typeof WikipediaGameStateScalarFieldEnum)[keyof typeof WikipediaGameStateScalarFieldEnum]


  export const QuizGameStateScalarFieldEnum: {
    id: 'id',
    teamName: 'teamName',
    questionId: 'questionId',
    timeTaken: 'timeTaken',
    completed: 'completed',
    isCorrect: 'isCorrect',
    startedAt: 'startedAt',
    completedAt: 'completedAt'
  };

  export type QuizGameStateScalarFieldEnum = (typeof QuizGameStateScalarFieldEnum)[keyof typeof QuizGameStateScalarFieldEnum]


  export const CrosswordGameStateScalarFieldEnum: {
    id: 'id',
    teamName: 'teamName',
    timeTaken: 'timeTaken',
    completed: 'completed',
    isCorrect: 'isCorrect',
    startedAt: 'startedAt',
    completedAt: 'completedAt'
  };

  export type CrosswordGameStateScalarFieldEnum = (typeof CrosswordGameStateScalarFieldEnum)[keyof typeof CrosswordGameStateScalarFieldEnum]


  export const ImageQuizGameStateScalarFieldEnum: {
    id: 'id',
    teamName: 'teamName',
    imageId: 'imageId',
    timeTaken: 'timeTaken',
    completed: 'completed',
    isCorrect: 'isCorrect',
    startedAt: 'startedAt',
    completedAt: 'completedAt'
  };

  export type ImageQuizGameStateScalarFieldEnum = (typeof ImageQuizGameStateScalarFieldEnum)[keyof typeof ImageQuizGameStateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: IntFilter<"Team"> | number
    name?: StringFilter<"Team"> | string
    currentLevel?: StringFilter<"Team"> | string
    score?: IntFilter<"Team"> | number
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    wikipediaGames?: WikipediaGameStateListRelationFilter
    quizGames?: QuizGameStateListRelationFilter
    crosswordGames?: CrosswordGameStateListRelationFilter
    imageQuizGames?: ImageQuizGameStateListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    currentLevel?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wikipediaGames?: WikipediaGameStateOrderByRelationAggregateInput
    quizGames?: QuizGameStateOrderByRelationAggregateInput
    crosswordGames?: CrosswordGameStateOrderByRelationAggregateInput
    imageQuizGames?: ImageQuizGameStateOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    currentLevel?: StringFilter<"Team"> | string
    score?: IntFilter<"Team"> | number
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    wikipediaGames?: WikipediaGameStateListRelationFilter
    quizGames?: QuizGameStateListRelationFilter
    crosswordGames?: CrosswordGameStateListRelationFilter
    imageQuizGames?: ImageQuizGameStateListRelationFilter
  }, "id" | "name">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    currentLevel?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Team"> | number
    name?: StringWithAggregatesFilter<"Team"> | string
    currentLevel?: StringWithAggregatesFilter<"Team"> | string
    score?: IntWithAggregatesFilter<"Team"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type WikipediaGameStateWhereInput = {
    AND?: WikipediaGameStateWhereInput | WikipediaGameStateWhereInput[]
    OR?: WikipediaGameStateWhereInput[]
    NOT?: WikipediaGameStateWhereInput | WikipediaGameStateWhereInput[]
    id?: IntFilter<"WikipediaGameState"> | number
    teamName?: StringFilter<"WikipediaGameState"> | string
    targetPage?: StringFilter<"WikipediaGameState"> | string
    clicks?: IntFilter<"WikipediaGameState"> | number
    timeTaken?: IntFilter<"WikipediaGameState"> | number
    completed?: BoolFilter<"WikipediaGameState"> | boolean
    startedAt?: DateTimeFilter<"WikipediaGameState"> | Date | string
    completedAt?: DateTimeNullableFilter<"WikipediaGameState"> | Date | string | null
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type WikipediaGameStateOrderByWithRelationInput = {
    id?: SortOrder
    teamName?: SortOrder
    targetPage?: SortOrder
    clicks?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    team?: TeamOrderByWithRelationInput
  }

  export type WikipediaGameStateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teamName_targetPage?: WikipediaGameStateTeamNameTargetPageCompoundUniqueInput
    AND?: WikipediaGameStateWhereInput | WikipediaGameStateWhereInput[]
    OR?: WikipediaGameStateWhereInput[]
    NOT?: WikipediaGameStateWhereInput | WikipediaGameStateWhereInput[]
    teamName?: StringFilter<"WikipediaGameState"> | string
    targetPage?: StringFilter<"WikipediaGameState"> | string
    clicks?: IntFilter<"WikipediaGameState"> | number
    timeTaken?: IntFilter<"WikipediaGameState"> | number
    completed?: BoolFilter<"WikipediaGameState"> | boolean
    startedAt?: DateTimeFilter<"WikipediaGameState"> | Date | string
    completedAt?: DateTimeNullableFilter<"WikipediaGameState"> | Date | string | null
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id" | "teamName_targetPage">

  export type WikipediaGameStateOrderByWithAggregationInput = {
    id?: SortOrder
    teamName?: SortOrder
    targetPage?: SortOrder
    clicks?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: WikipediaGameStateCountOrderByAggregateInput
    _avg?: WikipediaGameStateAvgOrderByAggregateInput
    _max?: WikipediaGameStateMaxOrderByAggregateInput
    _min?: WikipediaGameStateMinOrderByAggregateInput
    _sum?: WikipediaGameStateSumOrderByAggregateInput
  }

  export type WikipediaGameStateScalarWhereWithAggregatesInput = {
    AND?: WikipediaGameStateScalarWhereWithAggregatesInput | WikipediaGameStateScalarWhereWithAggregatesInput[]
    OR?: WikipediaGameStateScalarWhereWithAggregatesInput[]
    NOT?: WikipediaGameStateScalarWhereWithAggregatesInput | WikipediaGameStateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WikipediaGameState"> | number
    teamName?: StringWithAggregatesFilter<"WikipediaGameState"> | string
    targetPage?: StringWithAggregatesFilter<"WikipediaGameState"> | string
    clicks?: IntWithAggregatesFilter<"WikipediaGameState"> | number
    timeTaken?: IntWithAggregatesFilter<"WikipediaGameState"> | number
    completed?: BoolWithAggregatesFilter<"WikipediaGameState"> | boolean
    startedAt?: DateTimeWithAggregatesFilter<"WikipediaGameState"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"WikipediaGameState"> | Date | string | null
  }

  export type QuizGameStateWhereInput = {
    AND?: QuizGameStateWhereInput | QuizGameStateWhereInput[]
    OR?: QuizGameStateWhereInput[]
    NOT?: QuizGameStateWhereInput | QuizGameStateWhereInput[]
    id?: IntFilter<"QuizGameState"> | number
    teamName?: StringFilter<"QuizGameState"> | string
    questionId?: StringFilter<"QuizGameState"> | string
    timeTaken?: IntFilter<"QuizGameState"> | number
    completed?: BoolFilter<"QuizGameState"> | boolean
    isCorrect?: BoolFilter<"QuizGameState"> | boolean
    startedAt?: DateTimeFilter<"QuizGameState"> | Date | string
    completedAt?: DateTimeNullableFilter<"QuizGameState"> | Date | string | null
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type QuizGameStateOrderByWithRelationInput = {
    id?: SortOrder
    teamName?: SortOrder
    questionId?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    isCorrect?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    team?: TeamOrderByWithRelationInput
  }

  export type QuizGameStateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teamName_questionId?: QuizGameStateTeamNameQuestionIdCompoundUniqueInput
    AND?: QuizGameStateWhereInput | QuizGameStateWhereInput[]
    OR?: QuizGameStateWhereInput[]
    NOT?: QuizGameStateWhereInput | QuizGameStateWhereInput[]
    teamName?: StringFilter<"QuizGameState"> | string
    questionId?: StringFilter<"QuizGameState"> | string
    timeTaken?: IntFilter<"QuizGameState"> | number
    completed?: BoolFilter<"QuizGameState"> | boolean
    isCorrect?: BoolFilter<"QuizGameState"> | boolean
    startedAt?: DateTimeFilter<"QuizGameState"> | Date | string
    completedAt?: DateTimeNullableFilter<"QuizGameState"> | Date | string | null
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id" | "teamName_questionId">

  export type QuizGameStateOrderByWithAggregationInput = {
    id?: SortOrder
    teamName?: SortOrder
    questionId?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    isCorrect?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: QuizGameStateCountOrderByAggregateInput
    _avg?: QuizGameStateAvgOrderByAggregateInput
    _max?: QuizGameStateMaxOrderByAggregateInput
    _min?: QuizGameStateMinOrderByAggregateInput
    _sum?: QuizGameStateSumOrderByAggregateInput
  }

  export type QuizGameStateScalarWhereWithAggregatesInput = {
    AND?: QuizGameStateScalarWhereWithAggregatesInput | QuizGameStateScalarWhereWithAggregatesInput[]
    OR?: QuizGameStateScalarWhereWithAggregatesInput[]
    NOT?: QuizGameStateScalarWhereWithAggregatesInput | QuizGameStateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuizGameState"> | number
    teamName?: StringWithAggregatesFilter<"QuizGameState"> | string
    questionId?: StringWithAggregatesFilter<"QuizGameState"> | string
    timeTaken?: IntWithAggregatesFilter<"QuizGameState"> | number
    completed?: BoolWithAggregatesFilter<"QuizGameState"> | boolean
    isCorrect?: BoolWithAggregatesFilter<"QuizGameState"> | boolean
    startedAt?: DateTimeWithAggregatesFilter<"QuizGameState"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"QuizGameState"> | Date | string | null
  }

  export type CrosswordGameStateWhereInput = {
    AND?: CrosswordGameStateWhereInput | CrosswordGameStateWhereInput[]
    OR?: CrosswordGameStateWhereInput[]
    NOT?: CrosswordGameStateWhereInput | CrosswordGameStateWhereInput[]
    id?: IntFilter<"CrosswordGameState"> | number
    teamName?: StringFilter<"CrosswordGameState"> | string
    timeTaken?: IntFilter<"CrosswordGameState"> | number
    completed?: BoolFilter<"CrosswordGameState"> | boolean
    isCorrect?: BoolFilter<"CrosswordGameState"> | boolean
    startedAt?: DateTimeFilter<"CrosswordGameState"> | Date | string
    completedAt?: DateTimeNullableFilter<"CrosswordGameState"> | Date | string | null
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type CrosswordGameStateOrderByWithRelationInput = {
    id?: SortOrder
    teamName?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    isCorrect?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    team?: TeamOrderByWithRelationInput
  }

  export type CrosswordGameStateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teamName?: string
    AND?: CrosswordGameStateWhereInput | CrosswordGameStateWhereInput[]
    OR?: CrosswordGameStateWhereInput[]
    NOT?: CrosswordGameStateWhereInput | CrosswordGameStateWhereInput[]
    timeTaken?: IntFilter<"CrosswordGameState"> | number
    completed?: BoolFilter<"CrosswordGameState"> | boolean
    isCorrect?: BoolFilter<"CrosswordGameState"> | boolean
    startedAt?: DateTimeFilter<"CrosswordGameState"> | Date | string
    completedAt?: DateTimeNullableFilter<"CrosswordGameState"> | Date | string | null
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id" | "teamName">

  export type CrosswordGameStateOrderByWithAggregationInput = {
    id?: SortOrder
    teamName?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    isCorrect?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: CrosswordGameStateCountOrderByAggregateInput
    _avg?: CrosswordGameStateAvgOrderByAggregateInput
    _max?: CrosswordGameStateMaxOrderByAggregateInput
    _min?: CrosswordGameStateMinOrderByAggregateInput
    _sum?: CrosswordGameStateSumOrderByAggregateInput
  }

  export type CrosswordGameStateScalarWhereWithAggregatesInput = {
    AND?: CrosswordGameStateScalarWhereWithAggregatesInput | CrosswordGameStateScalarWhereWithAggregatesInput[]
    OR?: CrosswordGameStateScalarWhereWithAggregatesInput[]
    NOT?: CrosswordGameStateScalarWhereWithAggregatesInput | CrosswordGameStateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CrosswordGameState"> | number
    teamName?: StringWithAggregatesFilter<"CrosswordGameState"> | string
    timeTaken?: IntWithAggregatesFilter<"CrosswordGameState"> | number
    completed?: BoolWithAggregatesFilter<"CrosswordGameState"> | boolean
    isCorrect?: BoolWithAggregatesFilter<"CrosswordGameState"> | boolean
    startedAt?: DateTimeWithAggregatesFilter<"CrosswordGameState"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"CrosswordGameState"> | Date | string | null
  }

  export type ImageQuizGameStateWhereInput = {
    AND?: ImageQuizGameStateWhereInput | ImageQuizGameStateWhereInput[]
    OR?: ImageQuizGameStateWhereInput[]
    NOT?: ImageQuizGameStateWhereInput | ImageQuizGameStateWhereInput[]
    id?: IntFilter<"ImageQuizGameState"> | number
    teamName?: StringFilter<"ImageQuizGameState"> | string
    imageId?: StringFilter<"ImageQuizGameState"> | string
    timeTaken?: IntFilter<"ImageQuizGameState"> | number
    completed?: BoolFilter<"ImageQuizGameState"> | boolean
    isCorrect?: BoolFilter<"ImageQuizGameState"> | boolean
    startedAt?: DateTimeFilter<"ImageQuizGameState"> | Date | string
    completedAt?: DateTimeNullableFilter<"ImageQuizGameState"> | Date | string | null
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type ImageQuizGameStateOrderByWithRelationInput = {
    id?: SortOrder
    teamName?: SortOrder
    imageId?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    isCorrect?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    team?: TeamOrderByWithRelationInput
  }

  export type ImageQuizGameStateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teamName_imageId?: ImageQuizGameStateTeamNameImageIdCompoundUniqueInput
    AND?: ImageQuizGameStateWhereInput | ImageQuizGameStateWhereInput[]
    OR?: ImageQuizGameStateWhereInput[]
    NOT?: ImageQuizGameStateWhereInput | ImageQuizGameStateWhereInput[]
    teamName?: StringFilter<"ImageQuizGameState"> | string
    imageId?: StringFilter<"ImageQuizGameState"> | string
    timeTaken?: IntFilter<"ImageQuizGameState"> | number
    completed?: BoolFilter<"ImageQuizGameState"> | boolean
    isCorrect?: BoolFilter<"ImageQuizGameState"> | boolean
    startedAt?: DateTimeFilter<"ImageQuizGameState"> | Date | string
    completedAt?: DateTimeNullableFilter<"ImageQuizGameState"> | Date | string | null
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id" | "teamName_imageId">

  export type ImageQuizGameStateOrderByWithAggregationInput = {
    id?: SortOrder
    teamName?: SortOrder
    imageId?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    isCorrect?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: ImageQuizGameStateCountOrderByAggregateInput
    _avg?: ImageQuizGameStateAvgOrderByAggregateInput
    _max?: ImageQuizGameStateMaxOrderByAggregateInput
    _min?: ImageQuizGameStateMinOrderByAggregateInput
    _sum?: ImageQuizGameStateSumOrderByAggregateInput
  }

  export type ImageQuizGameStateScalarWhereWithAggregatesInput = {
    AND?: ImageQuizGameStateScalarWhereWithAggregatesInput | ImageQuizGameStateScalarWhereWithAggregatesInput[]
    OR?: ImageQuizGameStateScalarWhereWithAggregatesInput[]
    NOT?: ImageQuizGameStateScalarWhereWithAggregatesInput | ImageQuizGameStateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImageQuizGameState"> | number
    teamName?: StringWithAggregatesFilter<"ImageQuizGameState"> | string
    imageId?: StringWithAggregatesFilter<"ImageQuizGameState"> | string
    timeTaken?: IntWithAggregatesFilter<"ImageQuizGameState"> | number
    completed?: BoolWithAggregatesFilter<"ImageQuizGameState"> | boolean
    isCorrect?: BoolWithAggregatesFilter<"ImageQuizGameState"> | boolean
    startedAt?: DateTimeWithAggregatesFilter<"ImageQuizGameState"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"ImageQuizGameState"> | Date | string | null
  }

  export type TeamCreateInput = {
    name: string
    currentLevel?: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    wikipediaGames?: WikipediaGameStateCreateNestedManyWithoutTeamInput
    quizGames?: QuizGameStateCreateNestedManyWithoutTeamInput
    crosswordGames?: CrosswordGameStateCreateNestedManyWithoutTeamInput
    imageQuizGames?: ImageQuizGameStateCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    name: string
    currentLevel?: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    wikipediaGames?: WikipediaGameStateUncheckedCreateNestedManyWithoutTeamInput
    quizGames?: QuizGameStateUncheckedCreateNestedManyWithoutTeamInput
    crosswordGames?: CrosswordGameStateUncheckedCreateNestedManyWithoutTeamInput
    imageQuizGames?: ImageQuizGameStateUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentLevel?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wikipediaGames?: WikipediaGameStateUpdateManyWithoutTeamNestedInput
    quizGames?: QuizGameStateUpdateManyWithoutTeamNestedInput
    crosswordGames?: CrosswordGameStateUpdateManyWithoutTeamNestedInput
    imageQuizGames?: ImageQuizGameStateUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    currentLevel?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wikipediaGames?: WikipediaGameStateUncheckedUpdateManyWithoutTeamNestedInput
    quizGames?: QuizGameStateUncheckedUpdateManyWithoutTeamNestedInput
    crosswordGames?: CrosswordGameStateUncheckedUpdateManyWithoutTeamNestedInput
    imageQuizGames?: ImageQuizGameStateUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: number
    name: string
    currentLevel?: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentLevel?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    currentLevel?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WikipediaGameStateCreateInput = {
    targetPage: string
    clicks?: number
    timeTaken?: number
    completed?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
    team: TeamCreateNestedOneWithoutWikipediaGamesInput
  }

  export type WikipediaGameStateUncheckedCreateInput = {
    id?: number
    teamName: string
    targetPage: string
    clicks?: number
    timeTaken?: number
    completed?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type WikipediaGameStateUpdateInput = {
    targetPage?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneRequiredWithoutWikipediaGamesNestedInput
  }

  export type WikipediaGameStateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    targetPage?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WikipediaGameStateCreateManyInput = {
    id?: number
    teamName: string
    targetPage: string
    clicks?: number
    timeTaken?: number
    completed?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type WikipediaGameStateUpdateManyMutationInput = {
    targetPage?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WikipediaGameStateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    targetPage?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizGameStateCreateInput = {
    questionId: string
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
    team: TeamCreateNestedOneWithoutQuizGamesInput
  }

  export type QuizGameStateUncheckedCreateInput = {
    id?: number
    teamName: string
    questionId: string
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type QuizGameStateUpdateInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneRequiredWithoutQuizGamesNestedInput
  }

  export type QuizGameStateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizGameStateCreateManyInput = {
    id?: number
    teamName: string
    questionId: string
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type QuizGameStateUpdateManyMutationInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizGameStateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CrosswordGameStateCreateInput = {
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
    team: TeamCreateNestedOneWithoutCrosswordGamesInput
  }

  export type CrosswordGameStateUncheckedCreateInput = {
    id?: number
    teamName: string
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type CrosswordGameStateUpdateInput = {
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneRequiredWithoutCrosswordGamesNestedInput
  }

  export type CrosswordGameStateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CrosswordGameStateCreateManyInput = {
    id?: number
    teamName: string
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type CrosswordGameStateUpdateManyMutationInput = {
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CrosswordGameStateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImageQuizGameStateCreateInput = {
    imageId: string
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
    team: TeamCreateNestedOneWithoutImageQuizGamesInput
  }

  export type ImageQuizGameStateUncheckedCreateInput = {
    id?: number
    teamName: string
    imageId: string
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ImageQuizGameStateUpdateInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneRequiredWithoutImageQuizGamesNestedInput
  }

  export type ImageQuizGameStateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImageQuizGameStateCreateManyInput = {
    id?: number
    teamName: string
    imageId: string
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ImageQuizGameStateUpdateManyMutationInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImageQuizGameStateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WikipediaGameStateListRelationFilter = {
    every?: WikipediaGameStateWhereInput
    some?: WikipediaGameStateWhereInput
    none?: WikipediaGameStateWhereInput
  }

  export type QuizGameStateListRelationFilter = {
    every?: QuizGameStateWhereInput
    some?: QuizGameStateWhereInput
    none?: QuizGameStateWhereInput
  }

  export type CrosswordGameStateListRelationFilter = {
    every?: CrosswordGameStateWhereInput
    some?: CrosswordGameStateWhereInput
    none?: CrosswordGameStateWhereInput
  }

  export type ImageQuizGameStateListRelationFilter = {
    every?: ImageQuizGameStateWhereInput
    some?: ImageQuizGameStateWhereInput
    none?: ImageQuizGameStateWhereInput
  }

  export type WikipediaGameStateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizGameStateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CrosswordGameStateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageQuizGameStateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currentLevel?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currentLevel?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currentLevel?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WikipediaGameStateTeamNameTargetPageCompoundUniqueInput = {
    teamName: string
    targetPage: string
  }

  export type WikipediaGameStateCountOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    targetPage?: SortOrder
    clicks?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type WikipediaGameStateAvgOrderByAggregateInput = {
    id?: SortOrder
    clicks?: SortOrder
    timeTaken?: SortOrder
  }

  export type WikipediaGameStateMaxOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    targetPage?: SortOrder
    clicks?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type WikipediaGameStateMinOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    targetPage?: SortOrder
    clicks?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type WikipediaGameStateSumOrderByAggregateInput = {
    id?: SortOrder
    clicks?: SortOrder
    timeTaken?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type QuizGameStateTeamNameQuestionIdCompoundUniqueInput = {
    teamName: string
    questionId: string
  }

  export type QuizGameStateCountOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    questionId?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    isCorrect?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type QuizGameStateAvgOrderByAggregateInput = {
    id?: SortOrder
    timeTaken?: SortOrder
  }

  export type QuizGameStateMaxOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    questionId?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    isCorrect?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type QuizGameStateMinOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    questionId?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    isCorrect?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type QuizGameStateSumOrderByAggregateInput = {
    id?: SortOrder
    timeTaken?: SortOrder
  }

  export type CrosswordGameStateCountOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    isCorrect?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type CrosswordGameStateAvgOrderByAggregateInput = {
    id?: SortOrder
    timeTaken?: SortOrder
  }

  export type CrosswordGameStateMaxOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    isCorrect?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type CrosswordGameStateMinOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    isCorrect?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type CrosswordGameStateSumOrderByAggregateInput = {
    id?: SortOrder
    timeTaken?: SortOrder
  }

  export type ImageQuizGameStateTeamNameImageIdCompoundUniqueInput = {
    teamName: string
    imageId: string
  }

  export type ImageQuizGameStateCountOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    imageId?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    isCorrect?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ImageQuizGameStateAvgOrderByAggregateInput = {
    id?: SortOrder
    timeTaken?: SortOrder
  }

  export type ImageQuizGameStateMaxOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    imageId?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    isCorrect?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ImageQuizGameStateMinOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    imageId?: SortOrder
    timeTaken?: SortOrder
    completed?: SortOrder
    isCorrect?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ImageQuizGameStateSumOrderByAggregateInput = {
    id?: SortOrder
    timeTaken?: SortOrder
  }

  export type WikipediaGameStateCreateNestedManyWithoutTeamInput = {
    create?: XOR<WikipediaGameStateCreateWithoutTeamInput, WikipediaGameStateUncheckedCreateWithoutTeamInput> | WikipediaGameStateCreateWithoutTeamInput[] | WikipediaGameStateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WikipediaGameStateCreateOrConnectWithoutTeamInput | WikipediaGameStateCreateOrConnectWithoutTeamInput[]
    createMany?: WikipediaGameStateCreateManyTeamInputEnvelope
    connect?: WikipediaGameStateWhereUniqueInput | WikipediaGameStateWhereUniqueInput[]
  }

  export type QuizGameStateCreateNestedManyWithoutTeamInput = {
    create?: XOR<QuizGameStateCreateWithoutTeamInput, QuizGameStateUncheckedCreateWithoutTeamInput> | QuizGameStateCreateWithoutTeamInput[] | QuizGameStateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: QuizGameStateCreateOrConnectWithoutTeamInput | QuizGameStateCreateOrConnectWithoutTeamInput[]
    createMany?: QuizGameStateCreateManyTeamInputEnvelope
    connect?: QuizGameStateWhereUniqueInput | QuizGameStateWhereUniqueInput[]
  }

  export type CrosswordGameStateCreateNestedManyWithoutTeamInput = {
    create?: XOR<CrosswordGameStateCreateWithoutTeamInput, CrosswordGameStateUncheckedCreateWithoutTeamInput> | CrosswordGameStateCreateWithoutTeamInput[] | CrosswordGameStateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: CrosswordGameStateCreateOrConnectWithoutTeamInput | CrosswordGameStateCreateOrConnectWithoutTeamInput[]
    createMany?: CrosswordGameStateCreateManyTeamInputEnvelope
    connect?: CrosswordGameStateWhereUniqueInput | CrosswordGameStateWhereUniqueInput[]
  }

  export type ImageQuizGameStateCreateNestedManyWithoutTeamInput = {
    create?: XOR<ImageQuizGameStateCreateWithoutTeamInput, ImageQuizGameStateUncheckedCreateWithoutTeamInput> | ImageQuizGameStateCreateWithoutTeamInput[] | ImageQuizGameStateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ImageQuizGameStateCreateOrConnectWithoutTeamInput | ImageQuizGameStateCreateOrConnectWithoutTeamInput[]
    createMany?: ImageQuizGameStateCreateManyTeamInputEnvelope
    connect?: ImageQuizGameStateWhereUniqueInput | ImageQuizGameStateWhereUniqueInput[]
  }

  export type WikipediaGameStateUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<WikipediaGameStateCreateWithoutTeamInput, WikipediaGameStateUncheckedCreateWithoutTeamInput> | WikipediaGameStateCreateWithoutTeamInput[] | WikipediaGameStateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WikipediaGameStateCreateOrConnectWithoutTeamInput | WikipediaGameStateCreateOrConnectWithoutTeamInput[]
    createMany?: WikipediaGameStateCreateManyTeamInputEnvelope
    connect?: WikipediaGameStateWhereUniqueInput | WikipediaGameStateWhereUniqueInput[]
  }

  export type QuizGameStateUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<QuizGameStateCreateWithoutTeamInput, QuizGameStateUncheckedCreateWithoutTeamInput> | QuizGameStateCreateWithoutTeamInput[] | QuizGameStateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: QuizGameStateCreateOrConnectWithoutTeamInput | QuizGameStateCreateOrConnectWithoutTeamInput[]
    createMany?: QuizGameStateCreateManyTeamInputEnvelope
    connect?: QuizGameStateWhereUniqueInput | QuizGameStateWhereUniqueInput[]
  }

  export type CrosswordGameStateUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<CrosswordGameStateCreateWithoutTeamInput, CrosswordGameStateUncheckedCreateWithoutTeamInput> | CrosswordGameStateCreateWithoutTeamInput[] | CrosswordGameStateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: CrosswordGameStateCreateOrConnectWithoutTeamInput | CrosswordGameStateCreateOrConnectWithoutTeamInput[]
    createMany?: CrosswordGameStateCreateManyTeamInputEnvelope
    connect?: CrosswordGameStateWhereUniqueInput | CrosswordGameStateWhereUniqueInput[]
  }

  export type ImageQuizGameStateUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<ImageQuizGameStateCreateWithoutTeamInput, ImageQuizGameStateUncheckedCreateWithoutTeamInput> | ImageQuizGameStateCreateWithoutTeamInput[] | ImageQuizGameStateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ImageQuizGameStateCreateOrConnectWithoutTeamInput | ImageQuizGameStateCreateOrConnectWithoutTeamInput[]
    createMany?: ImageQuizGameStateCreateManyTeamInputEnvelope
    connect?: ImageQuizGameStateWhereUniqueInput | ImageQuizGameStateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WikipediaGameStateUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WikipediaGameStateCreateWithoutTeamInput, WikipediaGameStateUncheckedCreateWithoutTeamInput> | WikipediaGameStateCreateWithoutTeamInput[] | WikipediaGameStateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WikipediaGameStateCreateOrConnectWithoutTeamInput | WikipediaGameStateCreateOrConnectWithoutTeamInput[]
    upsert?: WikipediaGameStateUpsertWithWhereUniqueWithoutTeamInput | WikipediaGameStateUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WikipediaGameStateCreateManyTeamInputEnvelope
    set?: WikipediaGameStateWhereUniqueInput | WikipediaGameStateWhereUniqueInput[]
    disconnect?: WikipediaGameStateWhereUniqueInput | WikipediaGameStateWhereUniqueInput[]
    delete?: WikipediaGameStateWhereUniqueInput | WikipediaGameStateWhereUniqueInput[]
    connect?: WikipediaGameStateWhereUniqueInput | WikipediaGameStateWhereUniqueInput[]
    update?: WikipediaGameStateUpdateWithWhereUniqueWithoutTeamInput | WikipediaGameStateUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WikipediaGameStateUpdateManyWithWhereWithoutTeamInput | WikipediaGameStateUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WikipediaGameStateScalarWhereInput | WikipediaGameStateScalarWhereInput[]
  }

  export type QuizGameStateUpdateManyWithoutTeamNestedInput = {
    create?: XOR<QuizGameStateCreateWithoutTeamInput, QuizGameStateUncheckedCreateWithoutTeamInput> | QuizGameStateCreateWithoutTeamInput[] | QuizGameStateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: QuizGameStateCreateOrConnectWithoutTeamInput | QuizGameStateCreateOrConnectWithoutTeamInput[]
    upsert?: QuizGameStateUpsertWithWhereUniqueWithoutTeamInput | QuizGameStateUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: QuizGameStateCreateManyTeamInputEnvelope
    set?: QuizGameStateWhereUniqueInput | QuizGameStateWhereUniqueInput[]
    disconnect?: QuizGameStateWhereUniqueInput | QuizGameStateWhereUniqueInput[]
    delete?: QuizGameStateWhereUniqueInput | QuizGameStateWhereUniqueInput[]
    connect?: QuizGameStateWhereUniqueInput | QuizGameStateWhereUniqueInput[]
    update?: QuizGameStateUpdateWithWhereUniqueWithoutTeamInput | QuizGameStateUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: QuizGameStateUpdateManyWithWhereWithoutTeamInput | QuizGameStateUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: QuizGameStateScalarWhereInput | QuizGameStateScalarWhereInput[]
  }

  export type CrosswordGameStateUpdateManyWithoutTeamNestedInput = {
    create?: XOR<CrosswordGameStateCreateWithoutTeamInput, CrosswordGameStateUncheckedCreateWithoutTeamInput> | CrosswordGameStateCreateWithoutTeamInput[] | CrosswordGameStateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: CrosswordGameStateCreateOrConnectWithoutTeamInput | CrosswordGameStateCreateOrConnectWithoutTeamInput[]
    upsert?: CrosswordGameStateUpsertWithWhereUniqueWithoutTeamInput | CrosswordGameStateUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: CrosswordGameStateCreateManyTeamInputEnvelope
    set?: CrosswordGameStateWhereUniqueInput | CrosswordGameStateWhereUniqueInput[]
    disconnect?: CrosswordGameStateWhereUniqueInput | CrosswordGameStateWhereUniqueInput[]
    delete?: CrosswordGameStateWhereUniqueInput | CrosswordGameStateWhereUniqueInput[]
    connect?: CrosswordGameStateWhereUniqueInput | CrosswordGameStateWhereUniqueInput[]
    update?: CrosswordGameStateUpdateWithWhereUniqueWithoutTeamInput | CrosswordGameStateUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: CrosswordGameStateUpdateManyWithWhereWithoutTeamInput | CrosswordGameStateUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: CrosswordGameStateScalarWhereInput | CrosswordGameStateScalarWhereInput[]
  }

  export type ImageQuizGameStateUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ImageQuizGameStateCreateWithoutTeamInput, ImageQuizGameStateUncheckedCreateWithoutTeamInput> | ImageQuizGameStateCreateWithoutTeamInput[] | ImageQuizGameStateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ImageQuizGameStateCreateOrConnectWithoutTeamInput | ImageQuizGameStateCreateOrConnectWithoutTeamInput[]
    upsert?: ImageQuizGameStateUpsertWithWhereUniqueWithoutTeamInput | ImageQuizGameStateUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ImageQuizGameStateCreateManyTeamInputEnvelope
    set?: ImageQuizGameStateWhereUniqueInput | ImageQuizGameStateWhereUniqueInput[]
    disconnect?: ImageQuizGameStateWhereUniqueInput | ImageQuizGameStateWhereUniqueInput[]
    delete?: ImageQuizGameStateWhereUniqueInput | ImageQuizGameStateWhereUniqueInput[]
    connect?: ImageQuizGameStateWhereUniqueInput | ImageQuizGameStateWhereUniqueInput[]
    update?: ImageQuizGameStateUpdateWithWhereUniqueWithoutTeamInput | ImageQuizGameStateUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ImageQuizGameStateUpdateManyWithWhereWithoutTeamInput | ImageQuizGameStateUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ImageQuizGameStateScalarWhereInput | ImageQuizGameStateScalarWhereInput[]
  }

  export type WikipediaGameStateUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WikipediaGameStateCreateWithoutTeamInput, WikipediaGameStateUncheckedCreateWithoutTeamInput> | WikipediaGameStateCreateWithoutTeamInput[] | WikipediaGameStateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WikipediaGameStateCreateOrConnectWithoutTeamInput | WikipediaGameStateCreateOrConnectWithoutTeamInput[]
    upsert?: WikipediaGameStateUpsertWithWhereUniqueWithoutTeamInput | WikipediaGameStateUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WikipediaGameStateCreateManyTeamInputEnvelope
    set?: WikipediaGameStateWhereUniqueInput | WikipediaGameStateWhereUniqueInput[]
    disconnect?: WikipediaGameStateWhereUniqueInput | WikipediaGameStateWhereUniqueInput[]
    delete?: WikipediaGameStateWhereUniqueInput | WikipediaGameStateWhereUniqueInput[]
    connect?: WikipediaGameStateWhereUniqueInput | WikipediaGameStateWhereUniqueInput[]
    update?: WikipediaGameStateUpdateWithWhereUniqueWithoutTeamInput | WikipediaGameStateUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WikipediaGameStateUpdateManyWithWhereWithoutTeamInput | WikipediaGameStateUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WikipediaGameStateScalarWhereInput | WikipediaGameStateScalarWhereInput[]
  }

  export type QuizGameStateUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<QuizGameStateCreateWithoutTeamInput, QuizGameStateUncheckedCreateWithoutTeamInput> | QuizGameStateCreateWithoutTeamInput[] | QuizGameStateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: QuizGameStateCreateOrConnectWithoutTeamInput | QuizGameStateCreateOrConnectWithoutTeamInput[]
    upsert?: QuizGameStateUpsertWithWhereUniqueWithoutTeamInput | QuizGameStateUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: QuizGameStateCreateManyTeamInputEnvelope
    set?: QuizGameStateWhereUniqueInput | QuizGameStateWhereUniqueInput[]
    disconnect?: QuizGameStateWhereUniqueInput | QuizGameStateWhereUniqueInput[]
    delete?: QuizGameStateWhereUniqueInput | QuizGameStateWhereUniqueInput[]
    connect?: QuizGameStateWhereUniqueInput | QuizGameStateWhereUniqueInput[]
    update?: QuizGameStateUpdateWithWhereUniqueWithoutTeamInput | QuizGameStateUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: QuizGameStateUpdateManyWithWhereWithoutTeamInput | QuizGameStateUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: QuizGameStateScalarWhereInput | QuizGameStateScalarWhereInput[]
  }

  export type CrosswordGameStateUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<CrosswordGameStateCreateWithoutTeamInput, CrosswordGameStateUncheckedCreateWithoutTeamInput> | CrosswordGameStateCreateWithoutTeamInput[] | CrosswordGameStateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: CrosswordGameStateCreateOrConnectWithoutTeamInput | CrosswordGameStateCreateOrConnectWithoutTeamInput[]
    upsert?: CrosswordGameStateUpsertWithWhereUniqueWithoutTeamInput | CrosswordGameStateUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: CrosswordGameStateCreateManyTeamInputEnvelope
    set?: CrosswordGameStateWhereUniqueInput | CrosswordGameStateWhereUniqueInput[]
    disconnect?: CrosswordGameStateWhereUniqueInput | CrosswordGameStateWhereUniqueInput[]
    delete?: CrosswordGameStateWhereUniqueInput | CrosswordGameStateWhereUniqueInput[]
    connect?: CrosswordGameStateWhereUniqueInput | CrosswordGameStateWhereUniqueInput[]
    update?: CrosswordGameStateUpdateWithWhereUniqueWithoutTeamInput | CrosswordGameStateUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: CrosswordGameStateUpdateManyWithWhereWithoutTeamInput | CrosswordGameStateUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: CrosswordGameStateScalarWhereInput | CrosswordGameStateScalarWhereInput[]
  }

  export type ImageQuizGameStateUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ImageQuizGameStateCreateWithoutTeamInput, ImageQuizGameStateUncheckedCreateWithoutTeamInput> | ImageQuizGameStateCreateWithoutTeamInput[] | ImageQuizGameStateUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ImageQuizGameStateCreateOrConnectWithoutTeamInput | ImageQuizGameStateCreateOrConnectWithoutTeamInput[]
    upsert?: ImageQuizGameStateUpsertWithWhereUniqueWithoutTeamInput | ImageQuizGameStateUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ImageQuizGameStateCreateManyTeamInputEnvelope
    set?: ImageQuizGameStateWhereUniqueInput | ImageQuizGameStateWhereUniqueInput[]
    disconnect?: ImageQuizGameStateWhereUniqueInput | ImageQuizGameStateWhereUniqueInput[]
    delete?: ImageQuizGameStateWhereUniqueInput | ImageQuizGameStateWhereUniqueInput[]
    connect?: ImageQuizGameStateWhereUniqueInput | ImageQuizGameStateWhereUniqueInput[]
    update?: ImageQuizGameStateUpdateWithWhereUniqueWithoutTeamInput | ImageQuizGameStateUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ImageQuizGameStateUpdateManyWithWhereWithoutTeamInput | ImageQuizGameStateUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ImageQuizGameStateScalarWhereInput | ImageQuizGameStateScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutWikipediaGamesInput = {
    create?: XOR<TeamCreateWithoutWikipediaGamesInput, TeamUncheckedCreateWithoutWikipediaGamesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutWikipediaGamesInput
    connect?: TeamWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TeamUpdateOneRequiredWithoutWikipediaGamesNestedInput = {
    create?: XOR<TeamCreateWithoutWikipediaGamesInput, TeamUncheckedCreateWithoutWikipediaGamesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutWikipediaGamesInput
    upsert?: TeamUpsertWithoutWikipediaGamesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutWikipediaGamesInput, TeamUpdateWithoutWikipediaGamesInput>, TeamUncheckedUpdateWithoutWikipediaGamesInput>
  }

  export type TeamCreateNestedOneWithoutQuizGamesInput = {
    create?: XOR<TeamCreateWithoutQuizGamesInput, TeamUncheckedCreateWithoutQuizGamesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutQuizGamesInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutQuizGamesNestedInput = {
    create?: XOR<TeamCreateWithoutQuizGamesInput, TeamUncheckedCreateWithoutQuizGamesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutQuizGamesInput
    upsert?: TeamUpsertWithoutQuizGamesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutQuizGamesInput, TeamUpdateWithoutQuizGamesInput>, TeamUncheckedUpdateWithoutQuizGamesInput>
  }

  export type TeamCreateNestedOneWithoutCrosswordGamesInput = {
    create?: XOR<TeamCreateWithoutCrosswordGamesInput, TeamUncheckedCreateWithoutCrosswordGamesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutCrosswordGamesInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutCrosswordGamesNestedInput = {
    create?: XOR<TeamCreateWithoutCrosswordGamesInput, TeamUncheckedCreateWithoutCrosswordGamesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutCrosswordGamesInput
    upsert?: TeamUpsertWithoutCrosswordGamesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutCrosswordGamesInput, TeamUpdateWithoutCrosswordGamesInput>, TeamUncheckedUpdateWithoutCrosswordGamesInput>
  }

  export type TeamCreateNestedOneWithoutImageQuizGamesInput = {
    create?: XOR<TeamCreateWithoutImageQuizGamesInput, TeamUncheckedCreateWithoutImageQuizGamesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutImageQuizGamesInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutImageQuizGamesNestedInput = {
    create?: XOR<TeamCreateWithoutImageQuizGamesInput, TeamUncheckedCreateWithoutImageQuizGamesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutImageQuizGamesInput
    upsert?: TeamUpsertWithoutImageQuizGamesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutImageQuizGamesInput, TeamUpdateWithoutImageQuizGamesInput>, TeamUncheckedUpdateWithoutImageQuizGamesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WikipediaGameStateCreateWithoutTeamInput = {
    targetPage: string
    clicks?: number
    timeTaken?: number
    completed?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type WikipediaGameStateUncheckedCreateWithoutTeamInput = {
    id?: number
    targetPage: string
    clicks?: number
    timeTaken?: number
    completed?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type WikipediaGameStateCreateOrConnectWithoutTeamInput = {
    where: WikipediaGameStateWhereUniqueInput
    create: XOR<WikipediaGameStateCreateWithoutTeamInput, WikipediaGameStateUncheckedCreateWithoutTeamInput>
  }

  export type WikipediaGameStateCreateManyTeamInputEnvelope = {
    data: WikipediaGameStateCreateManyTeamInput | WikipediaGameStateCreateManyTeamInput[]
  }

  export type QuizGameStateCreateWithoutTeamInput = {
    questionId: string
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type QuizGameStateUncheckedCreateWithoutTeamInput = {
    id?: number
    questionId: string
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type QuizGameStateCreateOrConnectWithoutTeamInput = {
    where: QuizGameStateWhereUniqueInput
    create: XOR<QuizGameStateCreateWithoutTeamInput, QuizGameStateUncheckedCreateWithoutTeamInput>
  }

  export type QuizGameStateCreateManyTeamInputEnvelope = {
    data: QuizGameStateCreateManyTeamInput | QuizGameStateCreateManyTeamInput[]
  }

  export type CrosswordGameStateCreateWithoutTeamInput = {
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type CrosswordGameStateUncheckedCreateWithoutTeamInput = {
    id?: number
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type CrosswordGameStateCreateOrConnectWithoutTeamInput = {
    where: CrosswordGameStateWhereUniqueInput
    create: XOR<CrosswordGameStateCreateWithoutTeamInput, CrosswordGameStateUncheckedCreateWithoutTeamInput>
  }

  export type CrosswordGameStateCreateManyTeamInputEnvelope = {
    data: CrosswordGameStateCreateManyTeamInput | CrosswordGameStateCreateManyTeamInput[]
  }

  export type ImageQuizGameStateCreateWithoutTeamInput = {
    imageId: string
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ImageQuizGameStateUncheckedCreateWithoutTeamInput = {
    id?: number
    imageId: string
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ImageQuizGameStateCreateOrConnectWithoutTeamInput = {
    where: ImageQuizGameStateWhereUniqueInput
    create: XOR<ImageQuizGameStateCreateWithoutTeamInput, ImageQuizGameStateUncheckedCreateWithoutTeamInput>
  }

  export type ImageQuizGameStateCreateManyTeamInputEnvelope = {
    data: ImageQuizGameStateCreateManyTeamInput | ImageQuizGameStateCreateManyTeamInput[]
  }

  export type WikipediaGameStateUpsertWithWhereUniqueWithoutTeamInput = {
    where: WikipediaGameStateWhereUniqueInput
    update: XOR<WikipediaGameStateUpdateWithoutTeamInput, WikipediaGameStateUncheckedUpdateWithoutTeamInput>
    create: XOR<WikipediaGameStateCreateWithoutTeamInput, WikipediaGameStateUncheckedCreateWithoutTeamInput>
  }

  export type WikipediaGameStateUpdateWithWhereUniqueWithoutTeamInput = {
    where: WikipediaGameStateWhereUniqueInput
    data: XOR<WikipediaGameStateUpdateWithoutTeamInput, WikipediaGameStateUncheckedUpdateWithoutTeamInput>
  }

  export type WikipediaGameStateUpdateManyWithWhereWithoutTeamInput = {
    where: WikipediaGameStateScalarWhereInput
    data: XOR<WikipediaGameStateUpdateManyMutationInput, WikipediaGameStateUncheckedUpdateManyWithoutTeamInput>
  }

  export type WikipediaGameStateScalarWhereInput = {
    AND?: WikipediaGameStateScalarWhereInput | WikipediaGameStateScalarWhereInput[]
    OR?: WikipediaGameStateScalarWhereInput[]
    NOT?: WikipediaGameStateScalarWhereInput | WikipediaGameStateScalarWhereInput[]
    id?: IntFilter<"WikipediaGameState"> | number
    teamName?: StringFilter<"WikipediaGameState"> | string
    targetPage?: StringFilter<"WikipediaGameState"> | string
    clicks?: IntFilter<"WikipediaGameState"> | number
    timeTaken?: IntFilter<"WikipediaGameState"> | number
    completed?: BoolFilter<"WikipediaGameState"> | boolean
    startedAt?: DateTimeFilter<"WikipediaGameState"> | Date | string
    completedAt?: DateTimeNullableFilter<"WikipediaGameState"> | Date | string | null
  }

  export type QuizGameStateUpsertWithWhereUniqueWithoutTeamInput = {
    where: QuizGameStateWhereUniqueInput
    update: XOR<QuizGameStateUpdateWithoutTeamInput, QuizGameStateUncheckedUpdateWithoutTeamInput>
    create: XOR<QuizGameStateCreateWithoutTeamInput, QuizGameStateUncheckedCreateWithoutTeamInput>
  }

  export type QuizGameStateUpdateWithWhereUniqueWithoutTeamInput = {
    where: QuizGameStateWhereUniqueInput
    data: XOR<QuizGameStateUpdateWithoutTeamInput, QuizGameStateUncheckedUpdateWithoutTeamInput>
  }

  export type QuizGameStateUpdateManyWithWhereWithoutTeamInput = {
    where: QuizGameStateScalarWhereInput
    data: XOR<QuizGameStateUpdateManyMutationInput, QuizGameStateUncheckedUpdateManyWithoutTeamInput>
  }

  export type QuizGameStateScalarWhereInput = {
    AND?: QuizGameStateScalarWhereInput | QuizGameStateScalarWhereInput[]
    OR?: QuizGameStateScalarWhereInput[]
    NOT?: QuizGameStateScalarWhereInput | QuizGameStateScalarWhereInput[]
    id?: IntFilter<"QuizGameState"> | number
    teamName?: StringFilter<"QuizGameState"> | string
    questionId?: StringFilter<"QuizGameState"> | string
    timeTaken?: IntFilter<"QuizGameState"> | number
    completed?: BoolFilter<"QuizGameState"> | boolean
    isCorrect?: BoolFilter<"QuizGameState"> | boolean
    startedAt?: DateTimeFilter<"QuizGameState"> | Date | string
    completedAt?: DateTimeNullableFilter<"QuizGameState"> | Date | string | null
  }

  export type CrosswordGameStateUpsertWithWhereUniqueWithoutTeamInput = {
    where: CrosswordGameStateWhereUniqueInput
    update: XOR<CrosswordGameStateUpdateWithoutTeamInput, CrosswordGameStateUncheckedUpdateWithoutTeamInput>
    create: XOR<CrosswordGameStateCreateWithoutTeamInput, CrosswordGameStateUncheckedCreateWithoutTeamInput>
  }

  export type CrosswordGameStateUpdateWithWhereUniqueWithoutTeamInput = {
    where: CrosswordGameStateWhereUniqueInput
    data: XOR<CrosswordGameStateUpdateWithoutTeamInput, CrosswordGameStateUncheckedUpdateWithoutTeamInput>
  }

  export type CrosswordGameStateUpdateManyWithWhereWithoutTeamInput = {
    where: CrosswordGameStateScalarWhereInput
    data: XOR<CrosswordGameStateUpdateManyMutationInput, CrosswordGameStateUncheckedUpdateManyWithoutTeamInput>
  }

  export type CrosswordGameStateScalarWhereInput = {
    AND?: CrosswordGameStateScalarWhereInput | CrosswordGameStateScalarWhereInput[]
    OR?: CrosswordGameStateScalarWhereInput[]
    NOT?: CrosswordGameStateScalarWhereInput | CrosswordGameStateScalarWhereInput[]
    id?: IntFilter<"CrosswordGameState"> | number
    teamName?: StringFilter<"CrosswordGameState"> | string
    timeTaken?: IntFilter<"CrosswordGameState"> | number
    completed?: BoolFilter<"CrosswordGameState"> | boolean
    isCorrect?: BoolFilter<"CrosswordGameState"> | boolean
    startedAt?: DateTimeFilter<"CrosswordGameState"> | Date | string
    completedAt?: DateTimeNullableFilter<"CrosswordGameState"> | Date | string | null
  }

  export type ImageQuizGameStateUpsertWithWhereUniqueWithoutTeamInput = {
    where: ImageQuizGameStateWhereUniqueInput
    update: XOR<ImageQuizGameStateUpdateWithoutTeamInput, ImageQuizGameStateUncheckedUpdateWithoutTeamInput>
    create: XOR<ImageQuizGameStateCreateWithoutTeamInput, ImageQuizGameStateUncheckedCreateWithoutTeamInput>
  }

  export type ImageQuizGameStateUpdateWithWhereUniqueWithoutTeamInput = {
    where: ImageQuizGameStateWhereUniqueInput
    data: XOR<ImageQuizGameStateUpdateWithoutTeamInput, ImageQuizGameStateUncheckedUpdateWithoutTeamInput>
  }

  export type ImageQuizGameStateUpdateManyWithWhereWithoutTeamInput = {
    where: ImageQuizGameStateScalarWhereInput
    data: XOR<ImageQuizGameStateUpdateManyMutationInput, ImageQuizGameStateUncheckedUpdateManyWithoutTeamInput>
  }

  export type ImageQuizGameStateScalarWhereInput = {
    AND?: ImageQuizGameStateScalarWhereInput | ImageQuizGameStateScalarWhereInput[]
    OR?: ImageQuizGameStateScalarWhereInput[]
    NOT?: ImageQuizGameStateScalarWhereInput | ImageQuizGameStateScalarWhereInput[]
    id?: IntFilter<"ImageQuizGameState"> | number
    teamName?: StringFilter<"ImageQuizGameState"> | string
    imageId?: StringFilter<"ImageQuizGameState"> | string
    timeTaken?: IntFilter<"ImageQuizGameState"> | number
    completed?: BoolFilter<"ImageQuizGameState"> | boolean
    isCorrect?: BoolFilter<"ImageQuizGameState"> | boolean
    startedAt?: DateTimeFilter<"ImageQuizGameState"> | Date | string
    completedAt?: DateTimeNullableFilter<"ImageQuizGameState"> | Date | string | null
  }

  export type TeamCreateWithoutWikipediaGamesInput = {
    name: string
    currentLevel?: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quizGames?: QuizGameStateCreateNestedManyWithoutTeamInput
    crosswordGames?: CrosswordGameStateCreateNestedManyWithoutTeamInput
    imageQuizGames?: ImageQuizGameStateCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutWikipediaGamesInput = {
    id?: number
    name: string
    currentLevel?: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quizGames?: QuizGameStateUncheckedCreateNestedManyWithoutTeamInput
    crosswordGames?: CrosswordGameStateUncheckedCreateNestedManyWithoutTeamInput
    imageQuizGames?: ImageQuizGameStateUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutWikipediaGamesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutWikipediaGamesInput, TeamUncheckedCreateWithoutWikipediaGamesInput>
  }

  export type TeamUpsertWithoutWikipediaGamesInput = {
    update: XOR<TeamUpdateWithoutWikipediaGamesInput, TeamUncheckedUpdateWithoutWikipediaGamesInput>
    create: XOR<TeamCreateWithoutWikipediaGamesInput, TeamUncheckedCreateWithoutWikipediaGamesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutWikipediaGamesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutWikipediaGamesInput, TeamUncheckedUpdateWithoutWikipediaGamesInput>
  }

  export type TeamUpdateWithoutWikipediaGamesInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentLevel?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizGames?: QuizGameStateUpdateManyWithoutTeamNestedInput
    crosswordGames?: CrosswordGameStateUpdateManyWithoutTeamNestedInput
    imageQuizGames?: ImageQuizGameStateUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutWikipediaGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    currentLevel?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizGames?: QuizGameStateUncheckedUpdateManyWithoutTeamNestedInput
    crosswordGames?: CrosswordGameStateUncheckedUpdateManyWithoutTeamNestedInput
    imageQuizGames?: ImageQuizGameStateUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateWithoutQuizGamesInput = {
    name: string
    currentLevel?: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    wikipediaGames?: WikipediaGameStateCreateNestedManyWithoutTeamInput
    crosswordGames?: CrosswordGameStateCreateNestedManyWithoutTeamInput
    imageQuizGames?: ImageQuizGameStateCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutQuizGamesInput = {
    id?: number
    name: string
    currentLevel?: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    wikipediaGames?: WikipediaGameStateUncheckedCreateNestedManyWithoutTeamInput
    crosswordGames?: CrosswordGameStateUncheckedCreateNestedManyWithoutTeamInput
    imageQuizGames?: ImageQuizGameStateUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutQuizGamesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutQuizGamesInput, TeamUncheckedCreateWithoutQuizGamesInput>
  }

  export type TeamUpsertWithoutQuizGamesInput = {
    update: XOR<TeamUpdateWithoutQuizGamesInput, TeamUncheckedUpdateWithoutQuizGamesInput>
    create: XOR<TeamCreateWithoutQuizGamesInput, TeamUncheckedCreateWithoutQuizGamesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutQuizGamesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutQuizGamesInput, TeamUncheckedUpdateWithoutQuizGamesInput>
  }

  export type TeamUpdateWithoutQuizGamesInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentLevel?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wikipediaGames?: WikipediaGameStateUpdateManyWithoutTeamNestedInput
    crosswordGames?: CrosswordGameStateUpdateManyWithoutTeamNestedInput
    imageQuizGames?: ImageQuizGameStateUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutQuizGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    currentLevel?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wikipediaGames?: WikipediaGameStateUncheckedUpdateManyWithoutTeamNestedInput
    crosswordGames?: CrosswordGameStateUncheckedUpdateManyWithoutTeamNestedInput
    imageQuizGames?: ImageQuizGameStateUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateWithoutCrosswordGamesInput = {
    name: string
    currentLevel?: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    wikipediaGames?: WikipediaGameStateCreateNestedManyWithoutTeamInput
    quizGames?: QuizGameStateCreateNestedManyWithoutTeamInput
    imageQuizGames?: ImageQuizGameStateCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutCrosswordGamesInput = {
    id?: number
    name: string
    currentLevel?: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    wikipediaGames?: WikipediaGameStateUncheckedCreateNestedManyWithoutTeamInput
    quizGames?: QuizGameStateUncheckedCreateNestedManyWithoutTeamInput
    imageQuizGames?: ImageQuizGameStateUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutCrosswordGamesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutCrosswordGamesInput, TeamUncheckedCreateWithoutCrosswordGamesInput>
  }

  export type TeamUpsertWithoutCrosswordGamesInput = {
    update: XOR<TeamUpdateWithoutCrosswordGamesInput, TeamUncheckedUpdateWithoutCrosswordGamesInput>
    create: XOR<TeamCreateWithoutCrosswordGamesInput, TeamUncheckedCreateWithoutCrosswordGamesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutCrosswordGamesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutCrosswordGamesInput, TeamUncheckedUpdateWithoutCrosswordGamesInput>
  }

  export type TeamUpdateWithoutCrosswordGamesInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentLevel?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wikipediaGames?: WikipediaGameStateUpdateManyWithoutTeamNestedInput
    quizGames?: QuizGameStateUpdateManyWithoutTeamNestedInput
    imageQuizGames?: ImageQuizGameStateUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutCrosswordGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    currentLevel?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wikipediaGames?: WikipediaGameStateUncheckedUpdateManyWithoutTeamNestedInput
    quizGames?: QuizGameStateUncheckedUpdateManyWithoutTeamNestedInput
    imageQuizGames?: ImageQuizGameStateUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateWithoutImageQuizGamesInput = {
    name: string
    currentLevel?: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    wikipediaGames?: WikipediaGameStateCreateNestedManyWithoutTeamInput
    quizGames?: QuizGameStateCreateNestedManyWithoutTeamInput
    crosswordGames?: CrosswordGameStateCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutImageQuizGamesInput = {
    id?: number
    name: string
    currentLevel?: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    wikipediaGames?: WikipediaGameStateUncheckedCreateNestedManyWithoutTeamInput
    quizGames?: QuizGameStateUncheckedCreateNestedManyWithoutTeamInput
    crosswordGames?: CrosswordGameStateUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutImageQuizGamesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutImageQuizGamesInput, TeamUncheckedCreateWithoutImageQuizGamesInput>
  }

  export type TeamUpsertWithoutImageQuizGamesInput = {
    update: XOR<TeamUpdateWithoutImageQuizGamesInput, TeamUncheckedUpdateWithoutImageQuizGamesInput>
    create: XOR<TeamCreateWithoutImageQuizGamesInput, TeamUncheckedCreateWithoutImageQuizGamesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutImageQuizGamesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutImageQuizGamesInput, TeamUncheckedUpdateWithoutImageQuizGamesInput>
  }

  export type TeamUpdateWithoutImageQuizGamesInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentLevel?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wikipediaGames?: WikipediaGameStateUpdateManyWithoutTeamNestedInput
    quizGames?: QuizGameStateUpdateManyWithoutTeamNestedInput
    crosswordGames?: CrosswordGameStateUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutImageQuizGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    currentLevel?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wikipediaGames?: WikipediaGameStateUncheckedUpdateManyWithoutTeamNestedInput
    quizGames?: QuizGameStateUncheckedUpdateManyWithoutTeamNestedInput
    crosswordGames?: CrosswordGameStateUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type WikipediaGameStateCreateManyTeamInput = {
    id?: number
    targetPage: string
    clicks?: number
    timeTaken?: number
    completed?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type QuizGameStateCreateManyTeamInput = {
    id?: number
    questionId: string
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type CrosswordGameStateCreateManyTeamInput = {
    id?: number
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ImageQuizGameStateCreateManyTeamInput = {
    id?: number
    imageId: string
    timeTaken?: number
    completed?: boolean
    isCorrect?: boolean
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type WikipediaGameStateUpdateWithoutTeamInput = {
    targetPage?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WikipediaGameStateUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    targetPage?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WikipediaGameStateUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    targetPage?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizGameStateUpdateWithoutTeamInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizGameStateUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizGameStateUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CrosswordGameStateUpdateWithoutTeamInput = {
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CrosswordGameStateUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CrosswordGameStateUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImageQuizGameStateUpdateWithoutTeamInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImageQuizGameStateUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImageQuizGameStateUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



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