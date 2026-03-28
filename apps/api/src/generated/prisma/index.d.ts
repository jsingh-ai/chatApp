/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Organization
 *
 */
export type Organization =
  $Result.DefaultSelection<Prisma.$OrganizationPayload>;
/**
 * Model OrganizationInvite
 *
 */
export type OrganizationInvite =
  $Result.DefaultSelection<Prisma.$OrganizationInvitePayload>;
/**
 * Model OrganizationMember
 *
 */
export type OrganizationMember =
  $Result.DefaultSelection<Prisma.$OrganizationMemberPayload>;
/**
 * Model Channel
 *
 */
export type Channel = $Result.DefaultSelection<Prisma.$ChannelPayload>;
/**
 * Model ChannelMember
 *
 */
export type ChannelMember =
  $Result.DefaultSelection<Prisma.$ChannelMemberPayload>;
/**
 * Model Message
 *
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>;
/**
 * Model Session
 *
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>;
/**
 * Model AuditLog
 *
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>;
/**
 * Model AiSummary
 *
 */
export type AiSummary = $Result.DefaultSelection<Prisma.$AiSummaryPayload>;
/**
 * Model AiReport
 *
 */
export type AiReport = $Result.DefaultSelection<Prisma.$AiReportPayload>;
/**
 * Model ChannelReadState
 *
 */
export type ChannelReadState =
  $Result.DefaultSelection<Prisma.$ChannelReadStatePayload>;
/**
 * Model PasswordResetToken
 *
 */
export type PasswordResetToken =
  $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const GlobalRole: {
    SUPER_ADMIN: 'SUPER_ADMIN';
    USER: 'USER';
  };

  export type GlobalRole = (typeof GlobalRole)[keyof typeof GlobalRole];

  export const OrganizationRole: {
    OWNER: 'OWNER';
    ADMIN: 'ADMIN';
    MEMBER: 'MEMBER';
  };

  export type OrganizationRole =
    (typeof OrganizationRole)[keyof typeof OrganizationRole];

  export const OrganizationInviteStatus: {
    PENDING: 'PENDING';
    ACCEPTED: 'ACCEPTED';
    EXPIRED: 'EXPIRED';
    CANCELLED: 'CANCELLED';
  };

  export type OrganizationInviteStatus =
    (typeof OrganizationInviteStatus)[keyof typeof OrganizationInviteStatus];
}

export type GlobalRole = $Enums.GlobalRole;

export const GlobalRole: typeof $Enums.GlobalRole;

export type OrganizationRole = $Enums.OrganizationRole;

export const OrganizationRole: typeof $Enums.OrganizationRole;

export type OrganizationInviteStatus = $Enums.OrganizationInviteStatus;

export const OrganizationInviteStatus: typeof $Enums.OrganizationInviteStatus;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs>;

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
   * `prisma.organizationInvite`: Exposes CRUD operations for the **OrganizationInvite** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more OrganizationInvites
   * const organizationInvites = await prisma.organizationInvite.findMany()
   * ```
   */
  get organizationInvite(): Prisma.OrganizationInviteDelegate<ExtArgs>;

  /**
   * `prisma.organizationMember`: Exposes CRUD operations for the **OrganizationMember** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more OrganizationMembers
   * const organizationMembers = await prisma.organizationMember.findMany()
   * ```
   */
  get organizationMember(): Prisma.OrganizationMemberDelegate<ExtArgs>;

  /**
   * `prisma.channel`: Exposes CRUD operations for the **Channel** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Channels
   * const channels = await prisma.channel.findMany()
   * ```
   */
  get channel(): Prisma.ChannelDelegate<ExtArgs>;

  /**
   * `prisma.channelMember`: Exposes CRUD operations for the **ChannelMember** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ChannelMembers
   * const channelMembers = await prisma.channelMember.findMany()
   * ```
   */
  get channelMember(): Prisma.ChannelMemberDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Messages
   * const messages = await prisma.message.findMany()
   * ```
   */
  get message(): Prisma.MessageDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AuditLogs
   * const auditLogs = await prisma.auditLog.findMany()
   * ```
   */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;

  /**
   * `prisma.aiSummary`: Exposes CRUD operations for the **AiSummary** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AiSummaries
   * const aiSummaries = await prisma.aiSummary.findMany()
   * ```
   */
  get aiSummary(): Prisma.AiSummaryDelegate<ExtArgs>;

  /**
   * `prisma.aiReport`: Exposes CRUD operations for the **AiReport** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AiReports
   * const aiReports = await prisma.aiReport.findMany()
   * ```
   */
  get aiReport(): Prisma.AiReportDelegate<ExtArgs>;

  /**
   * `prisma.channelReadState`: Exposes CRUD operations for the **ChannelReadState** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ChannelReadStates
   * const channelReadStates = await prisma.channelReadState.findMany()
   * ```
   */
  get channelReadState(): Prisma.ChannelReadStateDelegate<ExtArgs>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PasswordResetTokens
   * const passwordResetTokens = await prisma.passwordResetToken.findMany()
   * ```
   */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Organization: 'Organization';
    OrganizationInvite: 'OrganizationInvite';
    OrganizationMember: 'OrganizationMember';
    Channel: 'Channel';
    ChannelMember: 'ChannelMember';
    Message: 'Message';
    Session: 'Session';
    AuditLog: 'AuditLog';
    AiSummary: 'AiSummary';
    AiReport: 'AiReport';
    ChannelReadState: 'ChannelReadState';
    PasswordResetToken: 'PasswordResetToken';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs; clientOptions: PrismaClientOptions },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      this['params']['clientOptions']
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > = {
    meta: {
      modelProps:
        | 'user'
        | 'organization'
        | 'organizationInvite'
        | 'organizationMember'
        | 'channel'
        | 'channelMember'
        | 'message'
        | 'session'
        | 'auditLog'
        | 'aiSummary'
        | 'aiReport'
        | 'channelReadState'
        | 'passwordResetToken';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>;
        fields: Prisma.OrganizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
          };
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
          };
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<OrganizationCountAggregateOutputType>
              | number;
          };
        };
      };
      OrganizationInvite: {
        payload: Prisma.$OrganizationInvitePayload<ExtArgs>;
        fields: Prisma.OrganizationInviteFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrganizationInviteFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrganizationInviteFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitePayload>;
          };
          findFirst: {
            args: Prisma.OrganizationInviteFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrganizationInviteFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitePayload>;
          };
          findMany: {
            args: Prisma.OrganizationInviteFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitePayload>[];
          };
          create: {
            args: Prisma.OrganizationInviteCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitePayload>;
          };
          createMany: {
            args: Prisma.OrganizationInviteCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.OrganizationInviteCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitePayload>[];
          };
          delete: {
            args: Prisma.OrganizationInviteDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitePayload>;
          };
          update: {
            args: Prisma.OrganizationInviteUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitePayload>;
          };
          deleteMany: {
            args: Prisma.OrganizationInviteDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrganizationInviteUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.OrganizationInviteUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationInvitePayload>;
          };
          aggregate: {
            args: Prisma.OrganizationInviteAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganizationInvite>;
          };
          groupBy: {
            args: Prisma.OrganizationInviteGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationInviteGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrganizationInviteCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<OrganizationInviteCountAggregateOutputType>
              | number;
          };
        };
      };
      OrganizationMember: {
        payload: Prisma.$OrganizationMemberPayload<ExtArgs>;
        fields: Prisma.OrganizationMemberFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrganizationMemberFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrganizationMemberFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>;
          };
          findFirst: {
            args: Prisma.OrganizationMemberFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrganizationMemberFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>;
          };
          findMany: {
            args: Prisma.OrganizationMemberFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[];
          };
          create: {
            args: Prisma.OrganizationMemberCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>;
          };
          createMany: {
            args: Prisma.OrganizationMemberCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.OrganizationMemberCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[];
          };
          delete: {
            args: Prisma.OrganizationMemberDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>;
          };
          update: {
            args: Prisma.OrganizationMemberUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>;
          };
          deleteMany: {
            args: Prisma.OrganizationMemberDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrganizationMemberUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.OrganizationMemberUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationMemberAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganizationMember>;
          };
          groupBy: {
            args: Prisma.OrganizationMemberGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationMemberGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrganizationMemberCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<OrganizationMemberCountAggregateOutputType>
              | number;
          };
        };
      };
      Channel: {
        payload: Prisma.$ChannelPayload<ExtArgs>;
        fields: Prisma.ChannelFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ChannelFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ChannelFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>;
          };
          findFirst: {
            args: Prisma.ChannelFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ChannelFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>;
          };
          findMany: {
            args: Prisma.ChannelFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[];
          };
          create: {
            args: Prisma.ChannelCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>;
          };
          createMany: {
            args: Prisma.ChannelCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ChannelCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[];
          };
          delete: {
            args: Prisma.ChannelDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>;
          };
          update: {
            args: Prisma.ChannelUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>;
          };
          deleteMany: {
            args: Prisma.ChannelDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ChannelUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ChannelUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>;
          };
          aggregate: {
            args: Prisma.ChannelAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateChannel>;
          };
          groupBy: {
            args: Prisma.ChannelGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ChannelGroupByOutputType>[];
          };
          count: {
            args: Prisma.ChannelCountArgs<ExtArgs>;
            result: $Utils.Optional<ChannelCountAggregateOutputType> | number;
          };
        };
      };
      ChannelMember: {
        payload: Prisma.$ChannelMemberPayload<ExtArgs>;
        fields: Prisma.ChannelMemberFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ChannelMemberFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ChannelMemberFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload>;
          };
          findFirst: {
            args: Prisma.ChannelMemberFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ChannelMemberFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload>;
          };
          findMany: {
            args: Prisma.ChannelMemberFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload>[];
          };
          create: {
            args: Prisma.ChannelMemberCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload>;
          };
          createMany: {
            args: Prisma.ChannelMemberCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ChannelMemberCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload>[];
          };
          delete: {
            args: Prisma.ChannelMemberDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload>;
          };
          update: {
            args: Prisma.ChannelMemberUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload>;
          };
          deleteMany: {
            args: Prisma.ChannelMemberDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ChannelMemberUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ChannelMemberUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelMemberPayload>;
          };
          aggregate: {
            args: Prisma.ChannelMemberAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateChannelMember>;
          };
          groupBy: {
            args: Prisma.ChannelMemberGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ChannelMemberGroupByOutputType>[];
          };
          count: {
            args: Prisma.ChannelMemberCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ChannelMemberCountAggregateOutputType>
              | number;
          };
        };
      };
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>;
        fields: Prisma.MessageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[];
          };
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[];
          };
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMessage>;
          };
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MessageGroupByOutputType>[];
          };
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>;
            result: $Utils.Optional<MessageCountAggregateOutputType> | number;
          };
        };
      };
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>;
        fields: Prisma.SessionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[];
          };
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[];
          };
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSession>;
          };
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SessionGroupByOutputType>[];
          };
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>;
            result: $Utils.Optional<SessionCountAggregateOutputType> | number;
          };
        };
      };
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>;
        fields: Prisma.AuditLogFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
          };
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
          };
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAuditLog>;
          };
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AuditLogGroupByOutputType>[];
          };
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>;
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number;
          };
        };
      };
      AiSummary: {
        payload: Prisma.$AiSummaryPayload<ExtArgs>;
        fields: Prisma.AiSummaryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AiSummaryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AiSummaryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload>;
          };
          findFirst: {
            args: Prisma.AiSummaryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AiSummaryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload>;
          };
          findMany: {
            args: Prisma.AiSummaryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload>[];
          };
          create: {
            args: Prisma.AiSummaryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload>;
          };
          createMany: {
            args: Prisma.AiSummaryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AiSummaryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload>[];
          };
          delete: {
            args: Prisma.AiSummaryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload>;
          };
          update: {
            args: Prisma.AiSummaryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload>;
          };
          deleteMany: {
            args: Prisma.AiSummaryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AiSummaryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.AiSummaryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload>;
          };
          aggregate: {
            args: Prisma.AiSummaryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAiSummary>;
          };
          groupBy: {
            args: Prisma.AiSummaryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AiSummaryGroupByOutputType>[];
          };
          count: {
            args: Prisma.AiSummaryCountArgs<ExtArgs>;
            result: $Utils.Optional<AiSummaryCountAggregateOutputType> | number;
          };
        };
      };
      AiReport: {
        payload: Prisma.$AiReportPayload<ExtArgs>;
        fields: Prisma.AiReportFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AiReportFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AiReportFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload>;
          };
          findFirst: {
            args: Prisma.AiReportFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AiReportFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload>;
          };
          findMany: {
            args: Prisma.AiReportFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload>[];
          };
          create: {
            args: Prisma.AiReportCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload>;
          };
          createMany: {
            args: Prisma.AiReportCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AiReportCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload>[];
          };
          delete: {
            args: Prisma.AiReportDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload>;
          };
          update: {
            args: Prisma.AiReportUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload>;
          };
          deleteMany: {
            args: Prisma.AiReportDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AiReportUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.AiReportUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiReportPayload>;
          };
          aggregate: {
            args: Prisma.AiReportAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAiReport>;
          };
          groupBy: {
            args: Prisma.AiReportGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AiReportGroupByOutputType>[];
          };
          count: {
            args: Prisma.AiReportCountArgs<ExtArgs>;
            result: $Utils.Optional<AiReportCountAggregateOutputType> | number;
          };
        };
      };
      ChannelReadState: {
        payload: Prisma.$ChannelReadStatePayload<ExtArgs>;
        fields: Prisma.ChannelReadStateFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ChannelReadStateFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelReadStatePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ChannelReadStateFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelReadStatePayload>;
          };
          findFirst: {
            args: Prisma.ChannelReadStateFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelReadStatePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ChannelReadStateFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelReadStatePayload>;
          };
          findMany: {
            args: Prisma.ChannelReadStateFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelReadStatePayload>[];
          };
          create: {
            args: Prisma.ChannelReadStateCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelReadStatePayload>;
          };
          createMany: {
            args: Prisma.ChannelReadStateCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ChannelReadStateCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelReadStatePayload>[];
          };
          delete: {
            args: Prisma.ChannelReadStateDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelReadStatePayload>;
          };
          update: {
            args: Prisma.ChannelReadStateUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelReadStatePayload>;
          };
          deleteMany: {
            args: Prisma.ChannelReadStateDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ChannelReadStateUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ChannelReadStateUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChannelReadStatePayload>;
          };
          aggregate: {
            args: Prisma.ChannelReadStateAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateChannelReadState>;
          };
          groupBy: {
            args: Prisma.ChannelReadStateGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ChannelReadStateGroupByOutputType>[];
          };
          count: {
            args: Prisma.ChannelReadStateCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ChannelReadStateCountAggregateOutputType>
              | number;
          };
        };
      };
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>;
        fields: Prisma.PasswordResetTokenFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
          };
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
          };
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
          };
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
          };
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
          };
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
          };
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
          };
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
          };
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePasswordResetToken>;
          };
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[];
          };
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<PasswordResetTokenCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    organizations: number;
    messages: number;
    sessions: number;
    channelMembers: number;
    auditLogs: number;
    sentInvites: number;
    channelReadStates: number;
    passwordResetTokens: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organizations?: boolean | UserCountOutputTypeCountOrganizationsArgs;
    messages?: boolean | UserCountOutputTypeCountMessagesArgs;
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs;
    channelMembers?: boolean | UserCountOutputTypeCountChannelMembersArgs;
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs;
    sentInvites?: boolean | UserCountOutputTypeCountSentInvitesArgs;
    channelReadStates?: boolean | UserCountOutputTypeCountChannelReadStatesArgs;
    passwordResetTokens?:
      | boolean
      | UserCountOutputTypeCountPasswordResetTokensArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizationMemberWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MessageWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SessionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChannelMembersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ChannelMemberWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AuditLogWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentInvitesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizationInviteWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChannelReadStatesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ChannelReadStateWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordResetTokensArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PasswordResetTokenWhereInput;
  };

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    members: number;
    channels: number;
    auditLogs: number;
    aiSummaries: number;
    aiReports: number;
    invites: number;
  };

  export type OrganizationCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    members?: boolean | OrganizationCountOutputTypeCountMembersArgs;
    channels?: boolean | OrganizationCountOutputTypeCountChannelsArgs;
    auditLogs?: boolean | OrganizationCountOutputTypeCountAuditLogsArgs;
    aiSummaries?: boolean | OrganizationCountOutputTypeCountAiSummariesArgs;
    aiReports?: boolean | OrganizationCountOutputTypeCountAiReportsArgs;
    invites?: boolean | OrganizationCountOutputTypeCountInvitesArgs;
  };

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMembersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizationMemberWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountChannelsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ChannelWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAuditLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AuditLogWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAiSummariesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AiSummaryWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAiReportsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AiReportWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountInvitesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizationInviteWhereInput;
  };

  /**
   * Count Type ChannelCountOutputType
   */

  export type ChannelCountOutputType = {
    members: number;
    messages: number;
    aiSummaries: number;
    readStates: number;
  };

  export type ChannelCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    members?: boolean | ChannelCountOutputTypeCountMembersArgs;
    messages?: boolean | ChannelCountOutputTypeCountMessagesArgs;
    aiSummaries?: boolean | ChannelCountOutputTypeCountAiSummariesArgs;
    readStates?: boolean | ChannelCountOutputTypeCountReadStatesArgs;
  };

  // Custom InputTypes
  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelCountOutputType
     */
    select?: ChannelCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountMembersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ChannelMemberWhereInput;
  };

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountMessagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MessageWhereInput;
  };

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountAiSummariesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AiSummaryWhereInput;
  };

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountReadStatesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ChannelReadStateWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    displayName: string | null;
    password: string | null;
    role: $Enums.GlobalRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    displayName: string | null;
    password: string | null;
    role: $Enums.GlobalRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    displayName: number;
    password: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    displayName?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    displayName?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    displayName?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    displayName: string;
    password: string;
    role: $Enums.GlobalRole;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      displayName?: boolean;
      password?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organizations?: boolean | User$organizationsArgs<ExtArgs>;
      messages?: boolean | User$messagesArgs<ExtArgs>;
      sessions?: boolean | User$sessionsArgs<ExtArgs>;
      channelMembers?: boolean | User$channelMembersArgs<ExtArgs>;
      auditLogs?: boolean | User$auditLogsArgs<ExtArgs>;
      sentInvites?: boolean | User$sentInvitesArgs<ExtArgs>;
      channelReadStates?: boolean | User$channelReadStatesArgs<ExtArgs>;
      passwordResetTokens?: boolean | User$passwordResetTokensArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      displayName?: boolean;
      password?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    displayName?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organizations?: boolean | User$organizationsArgs<ExtArgs>;
    messages?: boolean | User$messagesArgs<ExtArgs>;
    sessions?: boolean | User$sessionsArgs<ExtArgs>;
    channelMembers?: boolean | User$channelMembersArgs<ExtArgs>;
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>;
    sentInvites?: boolean | User$sentInvitesArgs<ExtArgs>;
    channelReadStates?: boolean | User$channelReadStatesArgs<ExtArgs>;
    passwordResetTokens?: boolean | User$passwordResetTokensArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      organizations: Prisma.$OrganizationMemberPayload<ExtArgs>[];
      messages: Prisma.$MessagePayload<ExtArgs>[];
      sessions: Prisma.$SessionPayload<ExtArgs>[];
      channelMembers: Prisma.$ChannelMemberPayload<ExtArgs>[];
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
      sentInvites: Prisma.$OrganizationInvitePayload<ExtArgs>[];
      channelReadStates: Prisma.$ChannelReadStatePayload<ExtArgs>[];
      passwordResetTokens: Prisma.$PasswordResetTokenPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        displayName: string;
        password: string;
        role: $Enums.GlobalRole;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    organizations<T extends User$organizationsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$organizationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrganizationMemberPayload<ExtArgs>,
          T,
          'findMany'
        >
      | Null
    >;
    messages<T extends User$messagesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$messagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null
    >;
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$sessionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    channelMembers<T extends User$channelMembersArgs<ExtArgs> = {}>(
      args?: Subset<T, User$channelMembersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'findMany'>
      | Null
    >;
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$auditLogsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    sentInvites<T extends User$sentInvitesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$sentInvitesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrganizationInvitePayload<ExtArgs>,
          T,
          'findMany'
        >
      | Null
    >;
    channelReadStates<T extends User$channelReadStatesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$channelReadStatesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ChannelReadStatePayload<ExtArgs>,
          T,
          'findMany'
        >
      | Null
    >;
    passwordResetTokens<T extends User$passwordResetTokensArgs<ExtArgs> = {}>(
      args?: Subset<T, User$passwordResetTokensArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PasswordResetTokenPayload<ExtArgs>,
          T,
          'findMany'
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly displayName: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly role: FieldRef<'User', 'GlobalRole'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
  };

  /**
   * User.organizations
   */
  export type User$organizationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null;
    where?: OrganizationMemberWhereInput;
    orderBy?:
      | OrganizationMemberOrderByWithRelationInput
      | OrganizationMemberOrderByWithRelationInput[];
    cursor?: OrganizationMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | OrganizationMemberScalarFieldEnum
      | OrganizationMemberScalarFieldEnum[];
  };

  /**
   * User.messages
   */
  export type User$messagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    where?: MessageWhereInput;
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    cursor?: MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * User.sessions
   */
  export type User$sessionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    where?: SessionWhereInput;
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    cursor?: SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[];
  };

  /**
   * User.channelMembers
   */
  export type User$channelMembersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelMemberInclude<ExtArgs> | null;
    where?: ChannelMemberWhereInput;
    orderBy?:
      | ChannelMemberOrderByWithRelationInput
      | ChannelMemberOrderByWithRelationInput[];
    cursor?: ChannelMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ChannelMemberScalarFieldEnum | ChannelMemberScalarFieldEnum[];
  };

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    where?: AuditLogWhereInput;
    orderBy?:
      | AuditLogOrderByWithRelationInput
      | AuditLogOrderByWithRelationInput[];
    cursor?: AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[];
  };

  /**
   * User.sentInvites
   */
  export type User$sentInvitesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationInvite
     */
    select?: OrganizationInviteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInviteInclude<ExtArgs> | null;
    where?: OrganizationInviteWhereInput;
    orderBy?:
      | OrganizationInviteOrderByWithRelationInput
      | OrganizationInviteOrderByWithRelationInput[];
    cursor?: OrganizationInviteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | OrganizationInviteScalarFieldEnum
      | OrganizationInviteScalarFieldEnum[];
  };

  /**
   * User.channelReadStates
   */
  export type User$channelReadStatesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelReadState
     */
    select?: ChannelReadStateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelReadStateInclude<ExtArgs> | null;
    where?: ChannelReadStateWhereInput;
    orderBy?:
      | ChannelReadStateOrderByWithRelationInput
      | ChannelReadStateOrderByWithRelationInput[];
    cursor?: ChannelReadStateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | ChannelReadStateScalarFieldEnum
      | ChannelReadStateScalarFieldEnum[];
  };

  /**
   * User.passwordResetTokens
   */
  export type User$passwordResetTokensArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    where?: PasswordResetTokenWhereInput;
    orderBy?:
      | PasswordResetTokenOrderByWithRelationInput
      | PasswordResetTokenOrderByWithRelationInput[];
    cursor?: PasswordResetTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | PasswordResetTokenScalarFieldEnum
      | PasswordResetTokenScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizations to fetch.
     */
    orderBy?:
      | OrganizationOrderByWithRelationInput
      | OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<
    T extends OrganizationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type OrganizationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizationWhereInput;
    orderBy?:
      | OrganizationOrderByWithAggregationInput
      | OrganizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: OrganizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof OrganizationGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
        }
      >
    >;

  export type OrganizationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      members?: boolean | Organization$membersArgs<ExtArgs>;
      channels?: boolean | Organization$channelsArgs<ExtArgs>;
      auditLogs?: boolean | Organization$auditLogsArgs<ExtArgs>;
      aiSummaries?: boolean | Organization$aiSummariesArgs<ExtArgs>;
      aiReports?: boolean | Organization$aiReportsArgs<ExtArgs>;
      invites?: boolean | Organization$invitesArgs<ExtArgs>;
      _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['organization']
  >;

  export type OrganizationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['organization']
  >;

  export type OrganizationSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type OrganizationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    members?: boolean | Organization$membersArgs<ExtArgs>;
    channels?: boolean | Organization$channelsArgs<ExtArgs>;
    auditLogs?: boolean | Organization$auditLogsArgs<ExtArgs>;
    aiSummaries?: boolean | Organization$aiSummariesArgs<ExtArgs>;
    aiReports?: boolean | Organization$aiReportsArgs<ExtArgs>;
    invites?: boolean | Organization$invitesArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type OrganizationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $OrganizationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Organization';
    objects: {
      members: Prisma.$OrganizationMemberPayload<ExtArgs>[];
      channels: Prisma.$ChannelPayload<ExtArgs>[];
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
      aiSummaries: Prisma.$AiSummaryPayload<ExtArgs>[];
      aiReports: Prisma.$AiReportPayload<ExtArgs>[];
      invites: Prisma.$OrganizationInvitePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type OrganizationGetPayload<
    S extends boolean | null | undefined | OrganizationDefaultArgs,
  > = $Result.GetResult<Prisma.$OrganizationPayload, S>;

  type OrganizationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface OrganizationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Organization'];
      meta: { name: 'Organization' };
    };
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
    findUnique<T extends OrganizationFindUniqueArgs>(
      args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

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
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

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
    findFirst<T extends OrganizationFindFirstArgs>(
      args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

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
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

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
    findMany<T extends OrganizationFindManyArgs>(
      args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'findMany'>
    >;

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
    create<T extends OrganizationCreateArgs>(
      args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

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
    createMany<T extends OrganizationCreateManyArgs>(
      args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

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
    delete<T extends OrganizationDeleteArgs>(
      args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

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
    update<T extends OrganizationUpdateArgs>(
      args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

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
    deleteMany<T extends OrganizationDeleteManyArgs>(
      args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateMany<T extends OrganizationUpdateManyArgs>(
      args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    upsert<T extends OrganizationUpsertArgs>(
      args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

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
    >;

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
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetOrganizationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__OrganizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    members<T extends Organization$membersArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$membersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrganizationMemberPayload<ExtArgs>,
          T,
          'findMany'
        >
      | Null
    >;
    channels<T extends Organization$channelsArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$channelsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    auditLogs<T extends Organization$auditLogsArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$auditLogsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    aiSummaries<T extends Organization$aiSummariesArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$aiSummariesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AiSummaryPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    aiReports<T extends Organization$aiReportsArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$aiReportsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AiReportPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    invites<T extends Organization$invitesArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$invitesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrganizationInvitePayload<ExtArgs>,
          T,
          'findMany'
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<'Organization', 'String'>;
    readonly name: FieldRef<'Organization', 'String'>;
    readonly description: FieldRef<'Organization', 'String'>;
    readonly createdAt: FieldRef<'Organization', 'DateTime'>;
    readonly updatedAt: FieldRef<'Organization', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput;
  };

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput;
  };

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizations to fetch.
     */
    orderBy?:
      | OrganizationOrderByWithRelationInput
      | OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizations to fetch.
     */
    orderBy?:
      | OrganizationOrderByWithRelationInput
      | OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizations to fetch.
     */
    orderBy?:
      | OrganizationOrderByWithRelationInput
      | OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>;
  };

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>;
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput;
  };

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<
      OrganizationUpdateManyMutationInput,
      OrganizationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput;
  };

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput;
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>;
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>;
  };

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput;
  };

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput;
  };

  /**
   * Organization.members
   */
  export type Organization$membersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null;
    where?: OrganizationMemberWhereInput;
    orderBy?:
      | OrganizationMemberOrderByWithRelationInput
      | OrganizationMemberOrderByWithRelationInput[];
    cursor?: OrganizationMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | OrganizationMemberScalarFieldEnum
      | OrganizationMemberScalarFieldEnum[];
  };

  /**
   * Organization.channels
   */
  export type Organization$channelsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null;
    where?: ChannelWhereInput;
    orderBy?:
      | ChannelOrderByWithRelationInput
      | ChannelOrderByWithRelationInput[];
    cursor?: ChannelWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[];
  };

  /**
   * Organization.auditLogs
   */
  export type Organization$auditLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    where?: AuditLogWhereInput;
    orderBy?:
      | AuditLogOrderByWithRelationInput
      | AuditLogOrderByWithRelationInput[];
    cursor?: AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[];
  };

  /**
   * Organization.aiSummaries
   */
  export type Organization$aiSummariesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null;
    where?: AiSummaryWhereInput;
    orderBy?:
      | AiSummaryOrderByWithRelationInput
      | AiSummaryOrderByWithRelationInput[];
    cursor?: AiSummaryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AiSummaryScalarFieldEnum | AiSummaryScalarFieldEnum[];
  };

  /**
   * Organization.aiReports
   */
  export type Organization$aiReportsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null;
    where?: AiReportWhereInput;
    orderBy?:
      | AiReportOrderByWithRelationInput
      | AiReportOrderByWithRelationInput[];
    cursor?: AiReportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AiReportScalarFieldEnum | AiReportScalarFieldEnum[];
  };

  /**
   * Organization.invites
   */
  export type Organization$invitesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationInvite
     */
    select?: OrganizationInviteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInviteInclude<ExtArgs> | null;
    where?: OrganizationInviteWhereInput;
    orderBy?:
      | OrganizationInviteOrderByWithRelationInput
      | OrganizationInviteOrderByWithRelationInput[];
    cursor?: OrganizationInviteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | OrganizationInviteScalarFieldEnum
      | OrganizationInviteScalarFieldEnum[];
  };

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
  };

  /**
   * Model OrganizationInvite
   */

  export type AggregateOrganizationInvite = {
    _count: OrganizationInviteCountAggregateOutputType | null;
    _min: OrganizationInviteMinAggregateOutputType | null;
    _max: OrganizationInviteMaxAggregateOutputType | null;
  };

  export type OrganizationInviteMinAggregateOutputType = {
    id: string | null;
    token: string | null;
    email: string | null;
    organizationId: string | null;
    invitedById: string | null;
    role: $Enums.OrganizationRole | null;
    status: $Enums.OrganizationInviteStatus | null;
    expiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrganizationInviteMaxAggregateOutputType = {
    id: string | null;
    token: string | null;
    email: string | null;
    organizationId: string | null;
    invitedById: string | null;
    role: $Enums.OrganizationRole | null;
    status: $Enums.OrganizationInviteStatus | null;
    expiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrganizationInviteCountAggregateOutputType = {
    id: number;
    token: number;
    email: number;
    organizationId: number;
    invitedById: number;
    role: number;
    status: number;
    expiresAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type OrganizationInviteMinAggregateInputType = {
    id?: true;
    token?: true;
    email?: true;
    organizationId?: true;
    invitedById?: true;
    role?: true;
    status?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrganizationInviteMaxAggregateInputType = {
    id?: true;
    token?: true;
    email?: true;
    organizationId?: true;
    invitedById?: true;
    role?: true;
    status?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrganizationInviteCountAggregateInputType = {
    id?: true;
    token?: true;
    email?: true;
    organizationId?: true;
    invitedById?: true;
    role?: true;
    status?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type OrganizationInviteAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OrganizationInvite to aggregate.
     */
    where?: OrganizationInviteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrganizationInvites to fetch.
     */
    orderBy?:
      | OrganizationInviteOrderByWithRelationInput
      | OrganizationInviteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrganizationInviteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrganizationInvites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrganizationInvites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OrganizationInvites
     **/
    _count?: true | OrganizationInviteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationInviteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationInviteMaxAggregateInputType;
  };

  export type GetOrganizationInviteAggregateType<
    T extends OrganizationInviteAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateOrganizationInvite]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationInvite[P]>
      : GetScalarType<T[P], AggregateOrganizationInvite[P]>;
  };

  export type OrganizationInviteGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizationInviteWhereInput;
    orderBy?:
      | OrganizationInviteOrderByWithAggregationInput
      | OrganizationInviteOrderByWithAggregationInput[];
    by: OrganizationInviteScalarFieldEnum[] | OrganizationInviteScalarFieldEnum;
    having?: OrganizationInviteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationInviteCountAggregateInputType | true;
    _min?: OrganizationInviteMinAggregateInputType;
    _max?: OrganizationInviteMaxAggregateInputType;
  };

  export type OrganizationInviteGroupByOutputType = {
    id: string;
    token: string;
    email: string;
    organizationId: string;
    invitedById: string;
    role: $Enums.OrganizationRole;
    status: $Enums.OrganizationInviteStatus;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: OrganizationInviteCountAggregateOutputType | null;
    _min: OrganizationInviteMinAggregateOutputType | null;
    _max: OrganizationInviteMaxAggregateOutputType | null;
  };

  type GetOrganizationInviteGroupByPayload<
    T extends OrganizationInviteGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationInviteGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof OrganizationInviteGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationInviteGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationInviteGroupByOutputType[P]>;
      }
    >
  >;

  export type OrganizationInviteSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      token?: boolean;
      email?: boolean;
      organizationId?: boolean;
      invitedById?: boolean;
      role?: boolean;
      status?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      invitedBy?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['organizationInvite']
  >;

  export type OrganizationInviteSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      token?: boolean;
      email?: boolean;
      organizationId?: boolean;
      invitedById?: boolean;
      role?: boolean;
      status?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      invitedBy?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['organizationInvite']
  >;

  export type OrganizationInviteSelectScalar = {
    id?: boolean;
    token?: boolean;
    email?: boolean;
    organizationId?: boolean;
    invitedById?: boolean;
    role?: boolean;
    status?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type OrganizationInviteInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type OrganizationInviteIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $OrganizationInvitePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'OrganizationInvite';
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>;
      invitedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        token: string;
        email: string;
        organizationId: string;
        invitedById: string;
        role: $Enums.OrganizationRole;
        status: $Enums.OrganizationInviteStatus;
        expiresAt: Date;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['organizationInvite']
    >;
    composites: {};
  };

  type OrganizationInviteGetPayload<
    S extends boolean | null | undefined | OrganizationInviteDefaultArgs,
  > = $Result.GetResult<Prisma.$OrganizationInvitePayload, S>;

  type OrganizationInviteCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    OrganizationInviteFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OrganizationInviteCountAggregateInputType | true;
  };

  export interface OrganizationInviteDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['OrganizationInvite'];
      meta: { name: 'OrganizationInvite' };
    };
    /**
     * Find zero or one OrganizationInvite that matches the filter.
     * @param {OrganizationInviteFindUniqueArgs} args - Arguments to find a OrganizationInvite
     * @example
     * // Get one OrganizationInvite
     * const organizationInvite = await prisma.organizationInvite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationInviteFindUniqueArgs>(
      args: SelectSubset<T, OrganizationInviteFindUniqueArgs<ExtArgs>>,
    ): Prisma__OrganizationInviteClient<
      $Result.GetResult<
        Prisma.$OrganizationInvitePayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one OrganizationInvite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationInviteFindUniqueOrThrowArgs} args - Arguments to find a OrganizationInvite
     * @example
     * // Get one OrganizationInvite
     * const organizationInvite = await prisma.organizationInvite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationInviteFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrganizationInviteFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizationInviteClient<
      $Result.GetResult<
        Prisma.$OrganizationInvitePayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first OrganizationInvite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInviteFindFirstArgs} args - Arguments to find a OrganizationInvite
     * @example
     * // Get one OrganizationInvite
     * const organizationInvite = await prisma.organizationInvite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationInviteFindFirstArgs>(
      args?: SelectSubset<T, OrganizationInviteFindFirstArgs<ExtArgs>>,
    ): Prisma__OrganizationInviteClient<
      $Result.GetResult<
        Prisma.$OrganizationInvitePayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first OrganizationInvite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInviteFindFirstOrThrowArgs} args - Arguments to find a OrganizationInvite
     * @example
     * // Get one OrganizationInvite
     * const organizationInvite = await prisma.organizationInvite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationInviteFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrganizationInviteFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizationInviteClient<
      $Result.GetResult<
        Prisma.$OrganizationInvitePayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more OrganizationInvites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationInvites
     * const organizationInvites = await prisma.organizationInvite.findMany()
     *
     * // Get first 10 OrganizationInvites
     * const organizationInvites = await prisma.organizationInvite.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationInviteWithIdOnly = await prisma.organizationInvite.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrganizationInviteFindManyArgs>(
      args?: SelectSubset<T, OrganizationInviteFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizationInvitePayload<ExtArgs>,
        T,
        'findMany'
      >
    >;

    /**
     * Create a OrganizationInvite.
     * @param {OrganizationInviteCreateArgs} args - Arguments to create a OrganizationInvite.
     * @example
     * // Create one OrganizationInvite
     * const OrganizationInvite = await prisma.organizationInvite.create({
     *   data: {
     *     // ... data to create a OrganizationInvite
     *   }
     * })
     *
     */
    create<T extends OrganizationInviteCreateArgs>(
      args: SelectSubset<T, OrganizationInviteCreateArgs<ExtArgs>>,
    ): Prisma__OrganizationInviteClient<
      $Result.GetResult<
        Prisma.$OrganizationInvitePayload<ExtArgs>,
        T,
        'create'
      >,
      never,
      ExtArgs
    >;

    /**
     * Create many OrganizationInvites.
     * @param {OrganizationInviteCreateManyArgs} args - Arguments to create many OrganizationInvites.
     * @example
     * // Create many OrganizationInvites
     * const organizationInvite = await prisma.organizationInvite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrganizationInviteCreateManyArgs>(
      args?: SelectSubset<T, OrganizationInviteCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many OrganizationInvites and returns the data saved in the database.
     * @param {OrganizationInviteCreateManyAndReturnArgs} args - Arguments to create many OrganizationInvites.
     * @example
     * // Create many OrganizationInvites
     * const organizationInvite = await prisma.organizationInvite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many OrganizationInvites and only return the `id`
     * const organizationInviteWithIdOnly = await prisma.organizationInvite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrganizationInviteCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        OrganizationInviteCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizationInvitePayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a OrganizationInvite.
     * @param {OrganizationInviteDeleteArgs} args - Arguments to delete one OrganizationInvite.
     * @example
     * // Delete one OrganizationInvite
     * const OrganizationInvite = await prisma.organizationInvite.delete({
     *   where: {
     *     // ... filter to delete one OrganizationInvite
     *   }
     * })
     *
     */
    delete<T extends OrganizationInviteDeleteArgs>(
      args: SelectSubset<T, OrganizationInviteDeleteArgs<ExtArgs>>,
    ): Prisma__OrganizationInviteClient<
      $Result.GetResult<
        Prisma.$OrganizationInvitePayload<ExtArgs>,
        T,
        'delete'
      >,
      never,
      ExtArgs
    >;

    /**
     * Update one OrganizationInvite.
     * @param {OrganizationInviteUpdateArgs} args - Arguments to update one OrganizationInvite.
     * @example
     * // Update one OrganizationInvite
     * const organizationInvite = await prisma.organizationInvite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrganizationInviteUpdateArgs>(
      args: SelectSubset<T, OrganizationInviteUpdateArgs<ExtArgs>>,
    ): Prisma__OrganizationInviteClient<
      $Result.GetResult<
        Prisma.$OrganizationInvitePayload<ExtArgs>,
        T,
        'update'
      >,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more OrganizationInvites.
     * @param {OrganizationInviteDeleteManyArgs} args - Arguments to filter OrganizationInvites to delete.
     * @example
     * // Delete a few OrganizationInvites
     * const { count } = await prisma.organizationInvite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrganizationInviteDeleteManyArgs>(
      args?: SelectSubset<T, OrganizationInviteDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OrganizationInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationInvites
     * const organizationInvite = await prisma.organizationInvite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrganizationInviteUpdateManyArgs>(
      args: SelectSubset<T, OrganizationInviteUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one OrganizationInvite.
     * @param {OrganizationInviteUpsertArgs} args - Arguments to update or create a OrganizationInvite.
     * @example
     * // Update or create a OrganizationInvite
     * const organizationInvite = await prisma.organizationInvite.upsert({
     *   create: {
     *     // ... data to create a OrganizationInvite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationInvite we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationInviteUpsertArgs>(
      args: SelectSubset<T, OrganizationInviteUpsertArgs<ExtArgs>>,
    ): Prisma__OrganizationInviteClient<
      $Result.GetResult<
        Prisma.$OrganizationInvitePayload<ExtArgs>,
        T,
        'upsert'
      >,
      never,
      ExtArgs
    >;

    /**
     * Count the number of OrganizationInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInviteCountArgs} args - Arguments to filter OrganizationInvites to count.
     * @example
     * // Count the number of OrganizationInvites
     * const count = await prisma.organizationInvite.count({
     *   where: {
     *     // ... the filter for the OrganizationInvites we want to count
     *   }
     * })
     **/
    count<T extends OrganizationInviteCountArgs>(
      args?: Subset<T, OrganizationInviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              OrganizationInviteCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a OrganizationInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationInviteAggregateArgs>(
      args: Subset<T, OrganizationInviteAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationInviteAggregateType<T>>;

    /**
     * Group by OrganizationInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInviteGroupByArgs} args - Group by arguments.
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
      T extends OrganizationInviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationInviteGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationInviteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OrganizationInviteGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetOrganizationInviteGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OrganizationInvite model
     */
    readonly fields: OrganizationInviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationInvite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationInviteClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      | $Result.GetResult<
          Prisma.$OrganizationPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    invitedBy<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the OrganizationInvite model
   */
  interface OrganizationInviteFieldRefs {
    readonly id: FieldRef<'OrganizationInvite', 'String'>;
    readonly token: FieldRef<'OrganizationInvite', 'String'>;
    readonly email: FieldRef<'OrganizationInvite', 'String'>;
    readonly organizationId: FieldRef<'OrganizationInvite', 'String'>;
    readonly invitedById: FieldRef<'OrganizationInvite', 'String'>;
    readonly role: FieldRef<'OrganizationInvite', 'OrganizationRole'>;
    readonly status: FieldRef<'OrganizationInvite', 'OrganizationInviteStatus'>;
    readonly expiresAt: FieldRef<'OrganizationInvite', 'DateTime'>;
    readonly createdAt: FieldRef<'OrganizationInvite', 'DateTime'>;
    readonly updatedAt: FieldRef<'OrganizationInvite', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * OrganizationInvite findUnique
   */
  export type OrganizationInviteFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationInvite
     */
    select?: OrganizationInviteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInviteInclude<ExtArgs> | null;
    /**
     * Filter, which OrganizationInvite to fetch.
     */
    where: OrganizationInviteWhereUniqueInput;
  };

  /**
   * OrganizationInvite findUniqueOrThrow
   */
  export type OrganizationInviteFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationInvite
     */
    select?: OrganizationInviteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInviteInclude<ExtArgs> | null;
    /**
     * Filter, which OrganizationInvite to fetch.
     */
    where: OrganizationInviteWhereUniqueInput;
  };

  /**
   * OrganizationInvite findFirst
   */
  export type OrganizationInviteFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationInvite
     */
    select?: OrganizationInviteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInviteInclude<ExtArgs> | null;
    /**
     * Filter, which OrganizationInvite to fetch.
     */
    where?: OrganizationInviteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrganizationInvites to fetch.
     */
    orderBy?:
      | OrganizationInviteOrderByWithRelationInput
      | OrganizationInviteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrganizationInvites.
     */
    cursor?: OrganizationInviteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrganizationInvites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrganizationInvites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrganizationInvites.
     */
    distinct?:
      | OrganizationInviteScalarFieldEnum
      | OrganizationInviteScalarFieldEnum[];
  };

  /**
   * OrganizationInvite findFirstOrThrow
   */
  export type OrganizationInviteFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationInvite
     */
    select?: OrganizationInviteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInviteInclude<ExtArgs> | null;
    /**
     * Filter, which OrganizationInvite to fetch.
     */
    where?: OrganizationInviteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrganizationInvites to fetch.
     */
    orderBy?:
      | OrganizationInviteOrderByWithRelationInput
      | OrganizationInviteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrganizationInvites.
     */
    cursor?: OrganizationInviteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrganizationInvites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrganizationInvites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrganizationInvites.
     */
    distinct?:
      | OrganizationInviteScalarFieldEnum
      | OrganizationInviteScalarFieldEnum[];
  };

  /**
   * OrganizationInvite findMany
   */
  export type OrganizationInviteFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationInvite
     */
    select?: OrganizationInviteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInviteInclude<ExtArgs> | null;
    /**
     * Filter, which OrganizationInvites to fetch.
     */
    where?: OrganizationInviteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrganizationInvites to fetch.
     */
    orderBy?:
      | OrganizationInviteOrderByWithRelationInput
      | OrganizationInviteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OrganizationInvites.
     */
    cursor?: OrganizationInviteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrganizationInvites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrganizationInvites.
     */
    skip?: number;
    distinct?:
      | OrganizationInviteScalarFieldEnum
      | OrganizationInviteScalarFieldEnum[];
  };

  /**
   * OrganizationInvite create
   */
  export type OrganizationInviteCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationInvite
     */
    select?: OrganizationInviteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInviteInclude<ExtArgs> | null;
    /**
     * The data needed to create a OrganizationInvite.
     */
    data: XOR<
      OrganizationInviteCreateInput,
      OrganizationInviteUncheckedCreateInput
    >;
  };

  /**
   * OrganizationInvite createMany
   */
  export type OrganizationInviteCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many OrganizationInvites.
     */
    data:
      | OrganizationInviteCreateManyInput
      | OrganizationInviteCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * OrganizationInvite createManyAndReturn
   */
  export type OrganizationInviteCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationInvite
     */
    select?: OrganizationInviteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many OrganizationInvites.
     */
    data:
      | OrganizationInviteCreateManyInput
      | OrganizationInviteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInviteIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * OrganizationInvite update
   */
  export type OrganizationInviteUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationInvite
     */
    select?: OrganizationInviteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInviteInclude<ExtArgs> | null;
    /**
     * The data needed to update a OrganizationInvite.
     */
    data: XOR<
      OrganizationInviteUpdateInput,
      OrganizationInviteUncheckedUpdateInput
    >;
    /**
     * Choose, which OrganizationInvite to update.
     */
    where: OrganizationInviteWhereUniqueInput;
  };

  /**
   * OrganizationInvite updateMany
   */
  export type OrganizationInviteUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update OrganizationInvites.
     */
    data: XOR<
      OrganizationInviteUpdateManyMutationInput,
      OrganizationInviteUncheckedUpdateManyInput
    >;
    /**
     * Filter which OrganizationInvites to update
     */
    where?: OrganizationInviteWhereInput;
  };

  /**
   * OrganizationInvite upsert
   */
  export type OrganizationInviteUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationInvite
     */
    select?: OrganizationInviteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInviteInclude<ExtArgs> | null;
    /**
     * The filter to search for the OrganizationInvite to update in case it exists.
     */
    where: OrganizationInviteWhereUniqueInput;
    /**
     * In case the OrganizationInvite found by the `where` argument doesn't exist, create a new OrganizationInvite with this data.
     */
    create: XOR<
      OrganizationInviteCreateInput,
      OrganizationInviteUncheckedCreateInput
    >;
    /**
     * In case the OrganizationInvite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      OrganizationInviteUpdateInput,
      OrganizationInviteUncheckedUpdateInput
    >;
  };

  /**
   * OrganizationInvite delete
   */
  export type OrganizationInviteDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationInvite
     */
    select?: OrganizationInviteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInviteInclude<ExtArgs> | null;
    /**
     * Filter which OrganizationInvite to delete.
     */
    where: OrganizationInviteWhereUniqueInput;
  };

  /**
   * OrganizationInvite deleteMany
   */
  export type OrganizationInviteDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OrganizationInvites to delete
     */
    where?: OrganizationInviteWhereInput;
  };

  /**
   * OrganizationInvite without action
   */
  export type OrganizationInviteDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationInvite
     */
    select?: OrganizationInviteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInviteInclude<ExtArgs> | null;
  };

  /**
   * Model OrganizationMember
   */

  export type AggregateOrganizationMember = {
    _count: OrganizationMemberCountAggregateOutputType | null;
    _min: OrganizationMemberMinAggregateOutputType | null;
    _max: OrganizationMemberMaxAggregateOutputType | null;
  };

  export type OrganizationMemberMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    organizationId: string | null;
    role: $Enums.OrganizationRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrganizationMemberMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    organizationId: string | null;
    role: $Enums.OrganizationRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrganizationMemberCountAggregateOutputType = {
    id: number;
    userId: number;
    organizationId: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type OrganizationMemberMinAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrganizationMemberMaxAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrganizationMemberCountAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type OrganizationMemberAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OrganizationMember to aggregate.
     */
    where?: OrganizationMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?:
      | OrganizationMemberOrderByWithRelationInput
      | OrganizationMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrganizationMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OrganizationMembers
     **/
    _count?: true | OrganizationMemberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMemberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMemberMaxAggregateInputType;
  };

  export type GetOrganizationMemberAggregateType<
    T extends OrganizationMemberAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateOrganizationMember]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationMember[P]>
      : GetScalarType<T[P], AggregateOrganizationMember[P]>;
  };

  export type OrganizationMemberGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizationMemberWhereInput;
    orderBy?:
      | OrganizationMemberOrderByWithAggregationInput
      | OrganizationMemberOrderByWithAggregationInput[];
    by: OrganizationMemberScalarFieldEnum[] | OrganizationMemberScalarFieldEnum;
    having?: OrganizationMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationMemberCountAggregateInputType | true;
    _min?: OrganizationMemberMinAggregateInputType;
    _max?: OrganizationMemberMaxAggregateInputType;
  };

  export type OrganizationMemberGroupByOutputType = {
    id: string;
    userId: string;
    organizationId: string;
    role: $Enums.OrganizationRole;
    createdAt: Date;
    updatedAt: Date;
    _count: OrganizationMemberCountAggregateOutputType | null;
    _min: OrganizationMemberMinAggregateOutputType | null;
    _max: OrganizationMemberMaxAggregateOutputType | null;
  };

  type GetOrganizationMemberGroupByPayload<
    T extends OrganizationMemberGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationMemberGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof OrganizationMemberGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationMemberGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationMemberGroupByOutputType[P]>;
      }
    >
  >;

  export type OrganizationMemberSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      organizationId?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['organizationMember']
  >;

  export type OrganizationMemberSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      organizationId?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['organizationMember']
  >;

  export type OrganizationMemberSelectScalar = {
    id?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type OrganizationMemberInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type OrganizationMemberIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $OrganizationMemberPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'OrganizationMember';
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        organizationId: string;
        role: $Enums.OrganizationRole;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['organizationMember']
    >;
    composites: {};
  };

  type OrganizationMemberGetPayload<
    S extends boolean | null | undefined | OrganizationMemberDefaultArgs,
  > = $Result.GetResult<Prisma.$OrganizationMemberPayload, S>;

  type OrganizationMemberCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    OrganizationMemberFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OrganizationMemberCountAggregateInputType | true;
  };

  export interface OrganizationMemberDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['OrganizationMember'];
      meta: { name: 'OrganizationMember' };
    };
    /**
     * Find zero or one OrganizationMember that matches the filter.
     * @param {OrganizationMemberFindUniqueArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationMemberFindUniqueArgs>(
      args: SelectSubset<T, OrganizationMemberFindUniqueArgs<ExtArgs>>,
    ): Prisma__OrganizationMemberClient<
      $Result.GetResult<
        Prisma.$OrganizationMemberPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one OrganizationMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationMemberFindUniqueOrThrowArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationMemberFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrganizationMemberFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizationMemberClient<
      $Result.GetResult<
        Prisma.$OrganizationMemberPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first OrganizationMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindFirstArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationMemberFindFirstArgs>(
      args?: SelectSubset<T, OrganizationMemberFindFirstArgs<ExtArgs>>,
    ): Prisma__OrganizationMemberClient<
      $Result.GetResult<
        Prisma.$OrganizationMemberPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first OrganizationMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindFirstOrThrowArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationMemberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrganizationMemberFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizationMemberClient<
      $Result.GetResult<
        Prisma.$OrganizationMemberPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more OrganizationMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationMembers
     * const organizationMembers = await prisma.organizationMember.findMany()
     *
     * // Get first 10 OrganizationMembers
     * const organizationMembers = await prisma.organizationMember.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrganizationMemberFindManyArgs>(
      args?: SelectSubset<T, OrganizationMemberFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizationMemberPayload<ExtArgs>,
        T,
        'findMany'
      >
    >;

    /**
     * Create a OrganizationMember.
     * @param {OrganizationMemberCreateArgs} args - Arguments to create a OrganizationMember.
     * @example
     * // Create one OrganizationMember
     * const OrganizationMember = await prisma.organizationMember.create({
     *   data: {
     *     // ... data to create a OrganizationMember
     *   }
     * })
     *
     */
    create<T extends OrganizationMemberCreateArgs>(
      args: SelectSubset<T, OrganizationMemberCreateArgs<ExtArgs>>,
    ): Prisma__OrganizationMemberClient<
      $Result.GetResult<
        Prisma.$OrganizationMemberPayload<ExtArgs>,
        T,
        'create'
      >,
      never,
      ExtArgs
    >;

    /**
     * Create many OrganizationMembers.
     * @param {OrganizationMemberCreateManyArgs} args - Arguments to create many OrganizationMembers.
     * @example
     * // Create many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrganizationMemberCreateManyArgs>(
      args?: SelectSubset<T, OrganizationMemberCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many OrganizationMembers and returns the data saved in the database.
     * @param {OrganizationMemberCreateManyAndReturnArgs} args - Arguments to create many OrganizationMembers.
     * @example
     * // Create many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many OrganizationMembers and only return the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrganizationMemberCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        OrganizationMemberCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizationMemberPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a OrganizationMember.
     * @param {OrganizationMemberDeleteArgs} args - Arguments to delete one OrganizationMember.
     * @example
     * // Delete one OrganizationMember
     * const OrganizationMember = await prisma.organizationMember.delete({
     *   where: {
     *     // ... filter to delete one OrganizationMember
     *   }
     * })
     *
     */
    delete<T extends OrganizationMemberDeleteArgs>(
      args: SelectSubset<T, OrganizationMemberDeleteArgs<ExtArgs>>,
    ): Prisma__OrganizationMemberClient<
      $Result.GetResult<
        Prisma.$OrganizationMemberPayload<ExtArgs>,
        T,
        'delete'
      >,
      never,
      ExtArgs
    >;

    /**
     * Update one OrganizationMember.
     * @param {OrganizationMemberUpdateArgs} args - Arguments to update one OrganizationMember.
     * @example
     * // Update one OrganizationMember
     * const organizationMember = await prisma.organizationMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrganizationMemberUpdateArgs>(
      args: SelectSubset<T, OrganizationMemberUpdateArgs<ExtArgs>>,
    ): Prisma__OrganizationMemberClient<
      $Result.GetResult<
        Prisma.$OrganizationMemberPayload<ExtArgs>,
        T,
        'update'
      >,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more OrganizationMembers.
     * @param {OrganizationMemberDeleteManyArgs} args - Arguments to filter OrganizationMembers to delete.
     * @example
     * // Delete a few OrganizationMembers
     * const { count } = await prisma.organizationMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrganizationMemberDeleteManyArgs>(
      args?: SelectSubset<T, OrganizationMemberDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrganizationMemberUpdateManyArgs>(
      args: SelectSubset<T, OrganizationMemberUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one OrganizationMember.
     * @param {OrganizationMemberUpsertArgs} args - Arguments to update or create a OrganizationMember.
     * @example
     * // Update or create a OrganizationMember
     * const organizationMember = await prisma.organizationMember.upsert({
     *   create: {
     *     // ... data to create a OrganizationMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationMember we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationMemberUpsertArgs>(
      args: SelectSubset<T, OrganizationMemberUpsertArgs<ExtArgs>>,
    ): Prisma__OrganizationMemberClient<
      $Result.GetResult<
        Prisma.$OrganizationMemberPayload<ExtArgs>,
        T,
        'upsert'
      >,
      never,
      ExtArgs
    >;

    /**
     * Count the number of OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberCountArgs} args - Arguments to filter OrganizationMembers to count.
     * @example
     * // Count the number of OrganizationMembers
     * const count = await prisma.organizationMember.count({
     *   where: {
     *     // ... the filter for the OrganizationMembers we want to count
     *   }
     * })
     **/
    count<T extends OrganizationMemberCountArgs>(
      args?: Subset<T, OrganizationMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              OrganizationMemberCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a OrganizationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationMemberAggregateArgs>(
      args: Subset<T, OrganizationMemberAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationMemberAggregateType<T>>;

    /**
     * Group by OrganizationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberGroupByArgs} args - Group by arguments.
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
      T extends OrganizationMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationMemberGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OrganizationMemberGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetOrganizationMemberGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OrganizationMember model
     */
    readonly fields: OrganizationMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationMemberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      | $Result.GetResult<
          Prisma.$OrganizationPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the OrganizationMember model
   */
  interface OrganizationMemberFieldRefs {
    readonly id: FieldRef<'OrganizationMember', 'String'>;
    readonly userId: FieldRef<'OrganizationMember', 'String'>;
    readonly organizationId: FieldRef<'OrganizationMember', 'String'>;
    readonly role: FieldRef<'OrganizationMember', 'OrganizationRole'>;
    readonly createdAt: FieldRef<'OrganizationMember', 'DateTime'>;
    readonly updatedAt: FieldRef<'OrganizationMember', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * OrganizationMember findUnique
   */
  export type OrganizationMemberFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null;
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where: OrganizationMemberWhereUniqueInput;
  };

  /**
   * OrganizationMember findUniqueOrThrow
   */
  export type OrganizationMemberFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null;
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where: OrganizationMemberWhereUniqueInput;
  };

  /**
   * OrganizationMember findFirst
   */
  export type OrganizationMemberFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null;
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where?: OrganizationMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?:
      | OrganizationMemberOrderByWithRelationInput
      | OrganizationMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?:
      | OrganizationMemberScalarFieldEnum
      | OrganizationMemberScalarFieldEnum[];
  };

  /**
   * OrganizationMember findFirstOrThrow
   */
  export type OrganizationMemberFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null;
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where?: OrganizationMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?:
      | OrganizationMemberOrderByWithRelationInput
      | OrganizationMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?:
      | OrganizationMemberScalarFieldEnum
      | OrganizationMemberScalarFieldEnum[];
  };

  /**
   * OrganizationMember findMany
   */
  export type OrganizationMemberFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null;
    /**
     * Filter, which OrganizationMembers to fetch.
     */
    where?: OrganizationMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?:
      | OrganizationMemberOrderByWithRelationInput
      | OrganizationMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number;
    distinct?:
      | OrganizationMemberScalarFieldEnum
      | OrganizationMemberScalarFieldEnum[];
  };

  /**
   * OrganizationMember create
   */
  export type OrganizationMemberCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null;
    /**
     * The data needed to create a OrganizationMember.
     */
    data: XOR<
      OrganizationMemberCreateInput,
      OrganizationMemberUncheckedCreateInput
    >;
  };

  /**
   * OrganizationMember createMany
   */
  export type OrganizationMemberCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many OrganizationMembers.
     */
    data:
      | OrganizationMemberCreateManyInput
      | OrganizationMemberCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * OrganizationMember createManyAndReturn
   */
  export type OrganizationMemberCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many OrganizationMembers.
     */
    data:
      | OrganizationMemberCreateManyInput
      | OrganizationMemberCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * OrganizationMember update
   */
  export type OrganizationMemberUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null;
    /**
     * The data needed to update a OrganizationMember.
     */
    data: XOR<
      OrganizationMemberUpdateInput,
      OrganizationMemberUncheckedUpdateInput
    >;
    /**
     * Choose, which OrganizationMember to update.
     */
    where: OrganizationMemberWhereUniqueInput;
  };

  /**
   * OrganizationMember updateMany
   */
  export type OrganizationMemberUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update OrganizationMembers.
     */
    data: XOR<
      OrganizationMemberUpdateManyMutationInput,
      OrganizationMemberUncheckedUpdateManyInput
    >;
    /**
     * Filter which OrganizationMembers to update
     */
    where?: OrganizationMemberWhereInput;
  };

  /**
   * OrganizationMember upsert
   */
  export type OrganizationMemberUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null;
    /**
     * The filter to search for the OrganizationMember to update in case it exists.
     */
    where: OrganizationMemberWhereUniqueInput;
    /**
     * In case the OrganizationMember found by the `where` argument doesn't exist, create a new OrganizationMember with this data.
     */
    create: XOR<
      OrganizationMemberCreateInput,
      OrganizationMemberUncheckedCreateInput
    >;
    /**
     * In case the OrganizationMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      OrganizationMemberUpdateInput,
      OrganizationMemberUncheckedUpdateInput
    >;
  };

  /**
   * OrganizationMember delete
   */
  export type OrganizationMemberDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null;
    /**
     * Filter which OrganizationMember to delete.
     */
    where: OrganizationMemberWhereUniqueInput;
  };

  /**
   * OrganizationMember deleteMany
   */
  export type OrganizationMemberDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OrganizationMembers to delete
     */
    where?: OrganizationMemberWhereInput;
  };

  /**
   * OrganizationMember without action
   */
  export type OrganizationMemberDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null;
  };

  /**
   * Model Channel
   */

  export type AggregateChannel = {
    _count: ChannelCountAggregateOutputType | null;
    _min: ChannelMinAggregateOutputType | null;
    _max: ChannelMaxAggregateOutputType | null;
  };

  export type ChannelMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    description: string | null;
    isPrivate: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ChannelMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    description: string | null;
    isPrivate: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ChannelCountAggregateOutputType = {
    id: number;
    organizationId: number;
    name: number;
    description: number;
    isPrivate: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ChannelMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    description?: true;
    isPrivate?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ChannelMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    description?: true;
    isPrivate?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ChannelCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    description?: true;
    isPrivate?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ChannelAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Channel to aggregate.
     */
    where?: ChannelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Channels to fetch.
     */
    orderBy?:
      | ChannelOrderByWithRelationInput
      | ChannelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ChannelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Channels.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Channels
     **/
    _count?: true | ChannelCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ChannelMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ChannelMaxAggregateInputType;
  };

  export type GetChannelAggregateType<T extends ChannelAggregateArgs> = {
    [P in keyof T & keyof AggregateChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannel[P]>
      : GetScalarType<T[P], AggregateChannel[P]>;
  };

  export type ChannelGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ChannelWhereInput;
    orderBy?:
      | ChannelOrderByWithAggregationInput
      | ChannelOrderByWithAggregationInput[];
    by: ChannelScalarFieldEnum[] | ChannelScalarFieldEnum;
    having?: ChannelScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChannelCountAggregateInputType | true;
    _min?: ChannelMinAggregateInputType;
    _max?: ChannelMaxAggregateInputType;
  };

  export type ChannelGroupByOutputType = {
    id: string;
    organizationId: string;
    name: string;
    description: string | null;
    isPrivate: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ChannelCountAggregateOutputType | null;
    _min: ChannelMinAggregateOutputType | null;
    _max: ChannelMaxAggregateOutputType | null;
  };

  type GetChannelGroupByPayload<T extends ChannelGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ChannelGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ChannelGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelGroupByOutputType[P]>;
        }
      >
    >;

  export type ChannelSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      name?: boolean;
      description?: boolean;
      isPrivate?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      members?: boolean | Channel$membersArgs<ExtArgs>;
      messages?: boolean | Channel$messagesArgs<ExtArgs>;
      aiSummaries?: boolean | Channel$aiSummariesArgs<ExtArgs>;
      readStates?: boolean | Channel$readStatesArgs<ExtArgs>;
      _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['channel']
  >;

  export type ChannelSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      name?: boolean;
      description?: boolean;
      isPrivate?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['channel']
  >;

  export type ChannelSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    description?: boolean;
    isPrivate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ChannelInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    members?: boolean | Channel$membersArgs<ExtArgs>;
    messages?: boolean | Channel$messagesArgs<ExtArgs>;
    aiSummaries?: boolean | Channel$aiSummariesArgs<ExtArgs>;
    readStates?: boolean | Channel$readStatesArgs<ExtArgs>;
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ChannelIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
  };

  export type $ChannelPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Channel';
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>;
      members: Prisma.$ChannelMemberPayload<ExtArgs>[];
      messages: Prisma.$MessagePayload<ExtArgs>[];
      aiSummaries: Prisma.$AiSummaryPayload<ExtArgs>[];
      readStates: Prisma.$ChannelReadStatePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        organizationId: string;
        name: string;
        description: string | null;
        isPrivate: boolean;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['channel']
    >;
    composites: {};
  };

  type ChannelGetPayload<
    S extends boolean | null | undefined | ChannelDefaultArgs,
  > = $Result.GetResult<Prisma.$ChannelPayload, S>;

  type ChannelCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ChannelFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: ChannelCountAggregateInputType | true;
  };

  export interface ChannelDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Channel'];
      meta: { name: 'Channel' };
    };
    /**
     * Find zero or one Channel that matches the filter.
     * @param {ChannelFindUniqueArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelFindUniqueArgs>(
      args: SelectSubset<T, ChannelFindUniqueArgs<ExtArgs>>,
    ): Prisma__ChannelClient<
      $Result.GetResult<
        Prisma.$ChannelPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Channel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelFindUniqueOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ChannelFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ChannelClient<
      $Result.GetResult<
        Prisma.$ChannelPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Channel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelFindFirstArgs>(
      args?: SelectSubset<T, ChannelFindFirstArgs<ExtArgs>>,
    ): Prisma__ChannelClient<
      $Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Channel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ChannelFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ChannelClient<
      $Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channel.findMany()
     *
     * // Get first 10 Channels
     * const channels = await prisma.channel.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const channelWithIdOnly = await prisma.channel.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ChannelFindManyArgs>(
      args?: SelectSubset<T, ChannelFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Channel.
     * @param {ChannelCreateArgs} args - Arguments to create a Channel.
     * @example
     * // Create one Channel
     * const Channel = await prisma.channel.create({
     *   data: {
     *     // ... data to create a Channel
     *   }
     * })
     *
     */
    create<T extends ChannelCreateArgs>(
      args: SelectSubset<T, ChannelCreateArgs<ExtArgs>>,
    ): Prisma__ChannelClient<
      $Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Channels.
     * @param {ChannelCreateManyArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ChannelCreateManyArgs>(
      args?: SelectSubset<T, ChannelCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Channels and returns the data saved in the database.
     * @param {ChannelCreateManyAndReturnArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Channels and only return the `id`
     * const channelWithIdOnly = await prisma.channel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ChannelCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ChannelCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ChannelPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Channel.
     * @param {ChannelDeleteArgs} args - Arguments to delete one Channel.
     * @example
     * // Delete one Channel
     * const Channel = await prisma.channel.delete({
     *   where: {
     *     // ... filter to delete one Channel
     *   }
     * })
     *
     */
    delete<T extends ChannelDeleteArgs>(
      args: SelectSubset<T, ChannelDeleteArgs<ExtArgs>>,
    ): Prisma__ChannelClient<
      $Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Channel.
     * @param {ChannelUpdateArgs} args - Arguments to update one Channel.
     * @example
     * // Update one Channel
     * const channel = await prisma.channel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ChannelUpdateArgs>(
      args: SelectSubset<T, ChannelUpdateArgs<ExtArgs>>,
    ): Prisma__ChannelClient<
      $Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Channels.
     * @param {ChannelDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ChannelDeleteManyArgs>(
      args?: SelectSubset<T, ChannelDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ChannelUpdateManyArgs>(
      args: SelectSubset<T, ChannelUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Channel.
     * @param {ChannelUpsertArgs} args - Arguments to update or create a Channel.
     * @example
     * // Update or create a Channel
     * const channel = await prisma.channel.upsert({
     *   create: {
     *     // ... data to create a Channel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channel we want to update
     *   }
     * })
     */
    upsert<T extends ChannelUpsertArgs>(
      args: SelectSubset<T, ChannelUpsertArgs<ExtArgs>>,
    ): Prisma__ChannelClient<
      $Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channel.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
     **/
    count<T extends ChannelCountArgs>(
      args?: Subset<T, ChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelAggregateArgs>(
      args: Subset<T, ChannelAggregateArgs>,
    ): Prisma.PrismaPromise<GetChannelAggregateType<T>>;

    /**
     * Group by Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelGroupByArgs} args - Group by arguments.
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
      T extends ChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelGroupByArgs['orderBy'] }
        : { orderBy?: ChannelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ChannelGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetChannelGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Channel model
     */
    readonly fields: ChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Channel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      | $Result.GetResult<
          Prisma.$OrganizationPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    members<T extends Channel$membersArgs<ExtArgs> = {}>(
      args?: Subset<T, Channel$membersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'findMany'>
      | Null
    >;
    messages<T extends Channel$messagesArgs<ExtArgs> = {}>(
      args?: Subset<T, Channel$messagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null
    >;
    aiSummaries<T extends Channel$aiSummariesArgs<ExtArgs> = {}>(
      args?: Subset<T, Channel$aiSummariesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AiSummaryPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    readStates<T extends Channel$readStatesArgs<ExtArgs> = {}>(
      args?: Subset<T, Channel$readStatesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ChannelReadStatePayload<ExtArgs>,
          T,
          'findMany'
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Channel model
   */
  interface ChannelFieldRefs {
    readonly id: FieldRef<'Channel', 'String'>;
    readonly organizationId: FieldRef<'Channel', 'String'>;
    readonly name: FieldRef<'Channel', 'String'>;
    readonly description: FieldRef<'Channel', 'String'>;
    readonly isPrivate: FieldRef<'Channel', 'Boolean'>;
    readonly createdAt: FieldRef<'Channel', 'DateTime'>;
    readonly updatedAt: FieldRef<'Channel', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Channel findUnique
   */
  export type ChannelFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null;
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput;
  };

  /**
   * Channel findUniqueOrThrow
   */
  export type ChannelFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null;
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput;
  };

  /**
   * Channel findFirst
   */
  export type ChannelFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null;
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Channels to fetch.
     */
    orderBy?:
      | ChannelOrderByWithRelationInput
      | ChannelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Channels.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[];
  };

  /**
   * Channel findFirstOrThrow
   */
  export type ChannelFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null;
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Channels to fetch.
     */
    orderBy?:
      | ChannelOrderByWithRelationInput
      | ChannelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Channels.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[];
  };

  /**
   * Channel findMany
   */
  export type ChannelFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null;
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Channels to fetch.
     */
    orderBy?:
      | ChannelOrderByWithRelationInput
      | ChannelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Channels.
     */
    cursor?: ChannelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Channels.
     */
    skip?: number;
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[];
  };

  /**
   * Channel create
   */
  export type ChannelCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null;
    /**
     * The data needed to create a Channel.
     */
    data: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>;
  };

  /**
   * Channel createMany
   */
  export type ChannelCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Channel createManyAndReturn
   */
  export type ChannelCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Channel update
   */
  export type ChannelUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null;
    /**
     * The data needed to update a Channel.
     */
    data: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>;
    /**
     * Choose, which Channel to update.
     */
    where: ChannelWhereUniqueInput;
  };

  /**
   * Channel updateMany
   */
  export type ChannelUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>;
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput;
  };

  /**
   * Channel upsert
   */
  export type ChannelUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null;
    /**
     * The filter to search for the Channel to update in case it exists.
     */
    where: ChannelWhereUniqueInput;
    /**
     * In case the Channel found by the `where` argument doesn't exist, create a new Channel with this data.
     */
    create: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>;
    /**
     * In case the Channel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>;
  };

  /**
   * Channel delete
   */
  export type ChannelDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null;
    /**
     * Filter which Channel to delete.
     */
    where: ChannelWhereUniqueInput;
  };

  /**
   * Channel deleteMany
   */
  export type ChannelDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Channels to delete
     */
    where?: ChannelWhereInput;
  };

  /**
   * Channel.members
   */
  export type Channel$membersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelMemberInclude<ExtArgs> | null;
    where?: ChannelMemberWhereInput;
    orderBy?:
      | ChannelMemberOrderByWithRelationInput
      | ChannelMemberOrderByWithRelationInput[];
    cursor?: ChannelMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ChannelMemberScalarFieldEnum | ChannelMemberScalarFieldEnum[];
  };

  /**
   * Channel.messages
   */
  export type Channel$messagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    where?: MessageWhereInput;
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    cursor?: MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Channel.aiSummaries
   */
  export type Channel$aiSummariesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null;
    where?: AiSummaryWhereInput;
    orderBy?:
      | AiSummaryOrderByWithRelationInput
      | AiSummaryOrderByWithRelationInput[];
    cursor?: AiSummaryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AiSummaryScalarFieldEnum | AiSummaryScalarFieldEnum[];
  };

  /**
   * Channel.readStates
   */
  export type Channel$readStatesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelReadState
     */
    select?: ChannelReadStateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelReadStateInclude<ExtArgs> | null;
    where?: ChannelReadStateWhereInput;
    orderBy?:
      | ChannelReadStateOrderByWithRelationInput
      | ChannelReadStateOrderByWithRelationInput[];
    cursor?: ChannelReadStateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | ChannelReadStateScalarFieldEnum
      | ChannelReadStateScalarFieldEnum[];
  };

  /**
   * Channel without action
   */
  export type ChannelDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null;
  };

  /**
   * Model ChannelMember
   */

  export type AggregateChannelMember = {
    _count: ChannelMemberCountAggregateOutputType | null;
    _min: ChannelMemberMinAggregateOutputType | null;
    _max: ChannelMemberMaxAggregateOutputType | null;
  };

  export type ChannelMemberMinAggregateOutputType = {
    id: string | null;
    channelId: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ChannelMemberMaxAggregateOutputType = {
    id: string | null;
    channelId: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ChannelMemberCountAggregateOutputType = {
    id: number;
    channelId: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ChannelMemberMinAggregateInputType = {
    id?: true;
    channelId?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ChannelMemberMaxAggregateInputType = {
    id?: true;
    channelId?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ChannelMemberCountAggregateInputType = {
    id?: true;
    channelId?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ChannelMemberAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ChannelMember to aggregate.
     */
    where?: ChannelMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChannelMembers to fetch.
     */
    orderBy?:
      | ChannelMemberOrderByWithRelationInput
      | ChannelMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ChannelMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChannelMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChannelMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ChannelMembers
     **/
    _count?: true | ChannelMemberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ChannelMemberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ChannelMemberMaxAggregateInputType;
  };

  export type GetChannelMemberAggregateType<
    T extends ChannelMemberAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateChannelMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannelMember[P]>
      : GetScalarType<T[P], AggregateChannelMember[P]>;
  };

  export type ChannelMemberGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ChannelMemberWhereInput;
    orderBy?:
      | ChannelMemberOrderByWithAggregationInput
      | ChannelMemberOrderByWithAggregationInput[];
    by: ChannelMemberScalarFieldEnum[] | ChannelMemberScalarFieldEnum;
    having?: ChannelMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChannelMemberCountAggregateInputType | true;
    _min?: ChannelMemberMinAggregateInputType;
    _max?: ChannelMemberMaxAggregateInputType;
  };

  export type ChannelMemberGroupByOutputType = {
    id: string;
    channelId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ChannelMemberCountAggregateOutputType | null;
    _min: ChannelMemberMinAggregateOutputType | null;
    _max: ChannelMemberMaxAggregateOutputType | null;
  };

  type GetChannelMemberGroupByPayload<T extends ChannelMemberGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ChannelMemberGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof ChannelMemberGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelMemberGroupByOutputType[P]>;
        }
      >
    >;

  export type ChannelMemberSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      channelId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      channel?: boolean | ChannelDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['channelMember']
  >;

  export type ChannelMemberSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      channelId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      channel?: boolean | ChannelDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['channelMember']
  >;

  export type ChannelMemberSelectScalar = {
    id?: boolean;
    channelId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ChannelMemberInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ChannelMemberIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ChannelMemberPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ChannelMember';
    objects: {
      channel: Prisma.$ChannelPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        channelId: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['channelMember']
    >;
    composites: {};
  };

  type ChannelMemberGetPayload<
    S extends boolean | null | undefined | ChannelMemberDefaultArgs,
  > = $Result.GetResult<Prisma.$ChannelMemberPayload, S>;

  type ChannelMemberCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ChannelMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: ChannelMemberCountAggregateInputType | true;
  };

  export interface ChannelMemberDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ChannelMember'];
      meta: { name: 'ChannelMember' };
    };
    /**
     * Find zero or one ChannelMember that matches the filter.
     * @param {ChannelMemberFindUniqueArgs} args - Arguments to find a ChannelMember
     * @example
     * // Get one ChannelMember
     * const channelMember = await prisma.channelMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelMemberFindUniqueArgs>(
      args: SelectSubset<T, ChannelMemberFindUniqueArgs<ExtArgs>>,
    ): Prisma__ChannelMemberClient<
      $Result.GetResult<
        Prisma.$ChannelMemberPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one ChannelMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelMemberFindUniqueOrThrowArgs} args - Arguments to find a ChannelMember
     * @example
     * // Get one ChannelMember
     * const channelMember = await prisma.channelMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelMemberFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ChannelMemberFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ChannelMemberClient<
      $Result.GetResult<
        Prisma.$ChannelMemberPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first ChannelMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMemberFindFirstArgs} args - Arguments to find a ChannelMember
     * @example
     * // Get one ChannelMember
     * const channelMember = await prisma.channelMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelMemberFindFirstArgs>(
      args?: SelectSubset<T, ChannelMemberFindFirstArgs<ExtArgs>>,
    ): Prisma__ChannelMemberClient<
      $Result.GetResult<
        Prisma.$ChannelMemberPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first ChannelMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMemberFindFirstOrThrowArgs} args - Arguments to find a ChannelMember
     * @example
     * // Get one ChannelMember
     * const channelMember = await prisma.channelMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelMemberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ChannelMemberFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ChannelMemberClient<
      $Result.GetResult<
        Prisma.$ChannelMemberPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more ChannelMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChannelMembers
     * const channelMembers = await prisma.channelMember.findMany()
     *
     * // Get first 10 ChannelMembers
     * const channelMembers = await prisma.channelMember.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const channelMemberWithIdOnly = await prisma.channelMember.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ChannelMemberFindManyArgs>(
      args?: SelectSubset<T, ChannelMemberFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a ChannelMember.
     * @param {ChannelMemberCreateArgs} args - Arguments to create a ChannelMember.
     * @example
     * // Create one ChannelMember
     * const ChannelMember = await prisma.channelMember.create({
     *   data: {
     *     // ... data to create a ChannelMember
     *   }
     * })
     *
     */
    create<T extends ChannelMemberCreateArgs>(
      args: SelectSubset<T, ChannelMemberCreateArgs<ExtArgs>>,
    ): Prisma__ChannelMemberClient<
      $Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many ChannelMembers.
     * @param {ChannelMemberCreateManyArgs} args - Arguments to create many ChannelMembers.
     * @example
     * // Create many ChannelMembers
     * const channelMember = await prisma.channelMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ChannelMemberCreateManyArgs>(
      args?: SelectSubset<T, ChannelMemberCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ChannelMembers and returns the data saved in the database.
     * @param {ChannelMemberCreateManyAndReturnArgs} args - Arguments to create many ChannelMembers.
     * @example
     * // Create many ChannelMembers
     * const channelMember = await prisma.channelMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ChannelMembers and only return the `id`
     * const channelMemberWithIdOnly = await prisma.channelMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ChannelMemberCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ChannelMemberCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ChannelMemberPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a ChannelMember.
     * @param {ChannelMemberDeleteArgs} args - Arguments to delete one ChannelMember.
     * @example
     * // Delete one ChannelMember
     * const ChannelMember = await prisma.channelMember.delete({
     *   where: {
     *     // ... filter to delete one ChannelMember
     *   }
     * })
     *
     */
    delete<T extends ChannelMemberDeleteArgs>(
      args: SelectSubset<T, ChannelMemberDeleteArgs<ExtArgs>>,
    ): Prisma__ChannelMemberClient<
      $Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one ChannelMember.
     * @param {ChannelMemberUpdateArgs} args - Arguments to update one ChannelMember.
     * @example
     * // Update one ChannelMember
     * const channelMember = await prisma.channelMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ChannelMemberUpdateArgs>(
      args: SelectSubset<T, ChannelMemberUpdateArgs<ExtArgs>>,
    ): Prisma__ChannelMemberClient<
      $Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more ChannelMembers.
     * @param {ChannelMemberDeleteManyArgs} args - Arguments to filter ChannelMembers to delete.
     * @example
     * // Delete a few ChannelMembers
     * const { count } = await prisma.channelMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ChannelMemberDeleteManyArgs>(
      args?: SelectSubset<T, ChannelMemberDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ChannelMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChannelMembers
     * const channelMember = await prisma.channelMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ChannelMemberUpdateManyArgs>(
      args: SelectSubset<T, ChannelMemberUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one ChannelMember.
     * @param {ChannelMemberUpsertArgs} args - Arguments to update or create a ChannelMember.
     * @example
     * // Update or create a ChannelMember
     * const channelMember = await prisma.channelMember.upsert({
     *   create: {
     *     // ... data to create a ChannelMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChannelMember we want to update
     *   }
     * })
     */
    upsert<T extends ChannelMemberUpsertArgs>(
      args: SelectSubset<T, ChannelMemberUpsertArgs<ExtArgs>>,
    ): Prisma__ChannelMemberClient<
      $Result.GetResult<Prisma.$ChannelMemberPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of ChannelMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMemberCountArgs} args - Arguments to filter ChannelMembers to count.
     * @example
     * // Count the number of ChannelMembers
     * const count = await prisma.channelMember.count({
     *   where: {
     *     // ... the filter for the ChannelMembers we want to count
     *   }
     * })
     **/
    count<T extends ChannelMemberCountArgs>(
      args?: Subset<T, ChannelMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelMemberCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ChannelMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelMemberAggregateArgs>(
      args: Subset<T, ChannelMemberAggregateArgs>,
    ): Prisma.PrismaPromise<GetChannelMemberAggregateType<T>>;

    /**
     * Group by ChannelMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelMemberGroupByArgs} args - Group by arguments.
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
      T extends ChannelMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelMemberGroupByArgs['orderBy'] }
        : { orderBy?: ChannelMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ChannelMemberGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetChannelMemberGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ChannelMember model
     */
    readonly fields: ChannelMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChannelMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelMemberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ChannelDefaultArgs<ExtArgs>>,
    ): Prisma__ChannelClient<
      | $Result.GetResult<
          Prisma.$ChannelPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ChannelMember model
   */
  interface ChannelMemberFieldRefs {
    readonly id: FieldRef<'ChannelMember', 'String'>;
    readonly channelId: FieldRef<'ChannelMember', 'String'>;
    readonly userId: FieldRef<'ChannelMember', 'String'>;
    readonly createdAt: FieldRef<'ChannelMember', 'DateTime'>;
    readonly updatedAt: FieldRef<'ChannelMember', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * ChannelMember findUnique
   */
  export type ChannelMemberFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelMemberInclude<ExtArgs> | null;
    /**
     * Filter, which ChannelMember to fetch.
     */
    where: ChannelMemberWhereUniqueInput;
  };

  /**
   * ChannelMember findUniqueOrThrow
   */
  export type ChannelMemberFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelMemberInclude<ExtArgs> | null;
    /**
     * Filter, which ChannelMember to fetch.
     */
    where: ChannelMemberWhereUniqueInput;
  };

  /**
   * ChannelMember findFirst
   */
  export type ChannelMemberFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelMemberInclude<ExtArgs> | null;
    /**
     * Filter, which ChannelMember to fetch.
     */
    where?: ChannelMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChannelMembers to fetch.
     */
    orderBy?:
      | ChannelMemberOrderByWithRelationInput
      | ChannelMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ChannelMembers.
     */
    cursor?: ChannelMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChannelMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChannelMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ChannelMembers.
     */
    distinct?: ChannelMemberScalarFieldEnum | ChannelMemberScalarFieldEnum[];
  };

  /**
   * ChannelMember findFirstOrThrow
   */
  export type ChannelMemberFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelMemberInclude<ExtArgs> | null;
    /**
     * Filter, which ChannelMember to fetch.
     */
    where?: ChannelMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChannelMembers to fetch.
     */
    orderBy?:
      | ChannelMemberOrderByWithRelationInput
      | ChannelMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ChannelMembers.
     */
    cursor?: ChannelMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChannelMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChannelMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ChannelMembers.
     */
    distinct?: ChannelMemberScalarFieldEnum | ChannelMemberScalarFieldEnum[];
  };

  /**
   * ChannelMember findMany
   */
  export type ChannelMemberFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelMemberInclude<ExtArgs> | null;
    /**
     * Filter, which ChannelMembers to fetch.
     */
    where?: ChannelMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChannelMembers to fetch.
     */
    orderBy?:
      | ChannelMemberOrderByWithRelationInput
      | ChannelMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ChannelMembers.
     */
    cursor?: ChannelMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChannelMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChannelMembers.
     */
    skip?: number;
    distinct?: ChannelMemberScalarFieldEnum | ChannelMemberScalarFieldEnum[];
  };

  /**
   * ChannelMember create
   */
  export type ChannelMemberCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelMemberInclude<ExtArgs> | null;
    /**
     * The data needed to create a ChannelMember.
     */
    data: XOR<ChannelMemberCreateInput, ChannelMemberUncheckedCreateInput>;
  };

  /**
   * ChannelMember createMany
   */
  export type ChannelMemberCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ChannelMembers.
     */
    data: ChannelMemberCreateManyInput | ChannelMemberCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ChannelMember createManyAndReturn
   */
  export type ChannelMemberCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many ChannelMembers.
     */
    data: ChannelMemberCreateManyInput | ChannelMemberCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelMemberIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ChannelMember update
   */
  export type ChannelMemberUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelMemberInclude<ExtArgs> | null;
    /**
     * The data needed to update a ChannelMember.
     */
    data: XOR<ChannelMemberUpdateInput, ChannelMemberUncheckedUpdateInput>;
    /**
     * Choose, which ChannelMember to update.
     */
    where: ChannelMemberWhereUniqueInput;
  };

  /**
   * ChannelMember updateMany
   */
  export type ChannelMemberUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ChannelMembers.
     */
    data: XOR<
      ChannelMemberUpdateManyMutationInput,
      ChannelMemberUncheckedUpdateManyInput
    >;
    /**
     * Filter which ChannelMembers to update
     */
    where?: ChannelMemberWhereInput;
  };

  /**
   * ChannelMember upsert
   */
  export type ChannelMemberUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelMemberInclude<ExtArgs> | null;
    /**
     * The filter to search for the ChannelMember to update in case it exists.
     */
    where: ChannelMemberWhereUniqueInput;
    /**
     * In case the ChannelMember found by the `where` argument doesn't exist, create a new ChannelMember with this data.
     */
    create: XOR<ChannelMemberCreateInput, ChannelMemberUncheckedCreateInput>;
    /**
     * In case the ChannelMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelMemberUpdateInput, ChannelMemberUncheckedUpdateInput>;
  };

  /**
   * ChannelMember delete
   */
  export type ChannelMemberDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelMemberInclude<ExtArgs> | null;
    /**
     * Filter which ChannelMember to delete.
     */
    where: ChannelMemberWhereUniqueInput;
  };

  /**
   * ChannelMember deleteMany
   */
  export type ChannelMemberDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ChannelMembers to delete
     */
    where?: ChannelMemberWhereInput;
  };

  /**
   * ChannelMember without action
   */
  export type ChannelMemberDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelMember
     */
    select?: ChannelMemberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelMemberInclude<ExtArgs> | null;
  };

  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
  };

  export type MessageMinAggregateOutputType = {
    id: string | null;
    content: string | null;
    channelId: string | null;
    authorId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type MessageMaxAggregateOutputType = {
    id: string | null;
    content: string | null;
    channelId: string | null;
    authorId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type MessageCountAggregateOutputType = {
    id: number;
    content: number;
    channelId: number;
    authorId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type MessageMinAggregateInputType = {
    id?: true;
    content?: true;
    channelId?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type MessageMaxAggregateInputType = {
    id?: true;
    content?: true;
    channelId?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type MessageCountAggregateInputType = {
    id?: true;
    content?: true;
    channelId?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type MessageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Messages
     **/
    _count?: true | MessageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MessageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MessageMaxAggregateInputType;
  };

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
    [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>;
  };

  export type MessageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MessageWhereInput;
    orderBy?:
      | MessageOrderByWithAggregationInput
      | MessageOrderByWithAggregationInput[];
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum;
    having?: MessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessageCountAggregateInputType | true;
    _min?: MessageMinAggregateInputType;
    _max?: MessageMaxAggregateInputType;
  };

  export type MessageGroupByOutputType = {
    id: string;
    content: string;
    channelId: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MessageCountAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
  };

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MessageGroupByOutputType, T['by']> & {
          [P in keyof T & keyof MessageGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>;
        }
      >
    >;

  export type MessageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      channelId?: boolean;
      authorId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      channel?: boolean | ChannelDefaultArgs<ExtArgs>;
      author?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['message']
  >;

  export type MessageSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      channelId?: boolean;
      authorId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      channel?: boolean | ChannelDefaultArgs<ExtArgs>;
      author?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['message']
  >;

  export type MessageSelectScalar = {
    id?: boolean;
    content?: boolean;
    channelId?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type MessageInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>;
    author?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type MessageIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>;
    author?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $MessagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Message';
    objects: {
      channel: Prisma.$ChannelPayload<ExtArgs>;
      author: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        content: string;
        channelId: string;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['message']
    >;
    composites: {};
  };

  type MessageGetPayload<
    S extends boolean | null | undefined | MessageDefaultArgs,
  > = $Result.GetResult<Prisma.$MessagePayload, S>;

  type MessageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: MessageCountAggregateInputType | true;
  };

  export interface MessageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Message'];
      meta: { name: 'Message' };
    };
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     *
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MessageFindManyArgs>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     *
     */
    create<T extends MessageCreateArgs>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MessageCreateManyArgs>(
      args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     *
     */
    delete<T extends MessageDeleteArgs>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MessageUpdateArgs>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MessageDeleteManyArgs>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MessageUpdateManyArgs>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
     **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(
      args: Subset<T, MessageAggregateArgs>,
    ): Prisma.PrismaPromise<GetMessageAggregateType<T>>;

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetMessageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Message model
     */
    readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ChannelDefaultArgs<ExtArgs>>,
    ): Prisma__ChannelClient<
      | $Result.GetResult<
          Prisma.$ChannelPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    author<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<'Message', 'String'>;
    readonly content: FieldRef<'Message', 'String'>;
    readonly channelId: FieldRef<'Message', 'String'>;
    readonly authorId: FieldRef<'Message', 'String'>;
    readonly createdAt: FieldRef<'Message', 'DateTime'>;
    readonly updatedAt: FieldRef<'Message', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message create
   */
  export type MessageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>;
  };

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Message update
   */
  export type MessageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>;
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>;
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput;
  };

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput;
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>;
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>;
  };

  /**
   * Message delete
   */
  export type MessageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput;
  };

  /**
   * Message without action
   */
  export type MessageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
  };

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null;
    _min: SessionMinAggregateOutputType | null;
    _max: SessionMaxAggregateOutputType | null;
  };

  export type SessionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
  };

  export type SessionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
  };

  export type SessionCountAggregateOutputType = {
    id: number;
    userId: number;
    tokenHash: number;
    expiresAt: number;
    createdAt: number;
    _all: number;
  };

  export type SessionMinAggregateInputType = {
    id?: true;
    userId?: true;
    tokenHash?: true;
    expiresAt?: true;
    createdAt?: true;
  };

  export type SessionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    tokenHash?: true;
    expiresAt?: true;
    createdAt?: true;
  };

  export type SessionCountAggregateInputType = {
    id?: true;
    userId?: true;
    tokenHash?: true;
    expiresAt?: true;
    createdAt?: true;
    _all?: true;
  };

  export type SessionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Sessions
     **/
    _count?: true | SessionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SessionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SessionMaxAggregateInputType;
  };

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
    [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>;
  };

  export type SessionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SessionWhereInput;
    orderBy?:
      | SessionOrderByWithAggregationInput
      | SessionOrderByWithAggregationInput[];
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum;
    having?: SessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SessionCountAggregateInputType | true;
    _min?: SessionMinAggregateInputType;
    _max?: SessionMaxAggregateInputType;
  };

  export type SessionGroupByOutputType = {
    id: string;
    userId: string;
    tokenHash: string;
    expiresAt: Date;
    createdAt: Date;
    _count: SessionCountAggregateOutputType | null;
    _min: SessionMinAggregateOutputType | null;
    _max: SessionMaxAggregateOutputType | null;
  };

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SessionGroupByOutputType, T['by']> & {
          [P in keyof T & keyof SessionGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>;
        }
      >
    >;

  export type SessionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      tokenHash?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['session']
  >;

  export type SessionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      tokenHash?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['session']
  >;

  export type SessionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
  };

  export type SessionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type SessionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $SessionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Session';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        tokenHash: string;
        expiresAt: Date;
        createdAt: Date;
      },
      ExtArgs['result']['session']
    >;
    composites: {};
  };

  type SessionGetPayload<
    S extends boolean | null | undefined | SessionDefaultArgs,
  > = $Result.GetResult<Prisma.$SessionPayload, S>;

  type SessionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: SessionCountAggregateInputType | true;
  };

  export interface SessionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Session'];
      meta: { name: 'Session' };
    };
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     *
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     *
     */
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     *
     */
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
     **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(
      args: Subset<T, SessionAggregateArgs>,
    ): Prisma.PrismaPromise<GetSessionAggregateType<T>>;

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetSessionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Session model
     */
    readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<'Session', 'String'>;
    readonly userId: FieldRef<'Session', 'String'>;
    readonly tokenHash: FieldRef<'Session', 'String'>;
    readonly expiresAt: FieldRef<'Session', 'DateTime'>;
    readonly createdAt: FieldRef<'Session', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[];
  };

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[];
  };

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[];
  };

  /**
   * Session create
   */
  export type SessionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>;
  };

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Session update
   */
  export type SessionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>;
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>;
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput;
  };

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput;
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>;
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>;
  };

  /**
   * Session delete
   */
  export type SessionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput;
  };

  /**
   * Session without action
   */
  export type SessionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
  };

  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null;
    _min: AuditLogMinAggregateOutputType | null;
    _max: AuditLogMaxAggregateOutputType | null;
  };

  export type AuditLogMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    organizationId: string | null;
    action: string | null;
    createdAt: Date | null;
  };

  export type AuditLogMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    organizationId: string | null;
    action: string | null;
    createdAt: Date | null;
  };

  export type AuditLogCountAggregateOutputType = {
    id: number;
    userId: number;
    organizationId: number;
    action: number;
    metadata: number;
    createdAt: number;
    _all: number;
  };

  export type AuditLogMinAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    action?: true;
    createdAt?: true;
  };

  export type AuditLogMaxAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    action?: true;
    createdAt?: true;
  };

  export type AuditLogCountAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    action?: true;
    metadata?: true;
    createdAt?: true;
    _all?: true;
  };

  export type AuditLogAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?:
      | AuditLogOrderByWithRelationInput
      | AuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AuditLogs
     **/
    _count?: true | AuditLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AuditLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AuditLogMaxAggregateInputType;
  };

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
    [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>;
  };

  export type AuditLogGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AuditLogWhereInput;
    orderBy?:
      | AuditLogOrderByWithAggregationInput
      | AuditLogOrderByWithAggregationInput[];
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum;
    having?: AuditLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuditLogCountAggregateInputType | true;
    _min?: AuditLogMinAggregateInputType;
    _max?: AuditLogMaxAggregateInputType;
  };

  export type AuditLogGroupByOutputType = {
    id: string;
    userId: string | null;
    organizationId: string | null;
    action: string;
    metadata: JsonValue | null;
    createdAt: Date;
    _count: AuditLogCountAggregateOutputType | null;
    _min: AuditLogMinAggregateOutputType | null;
    _max: AuditLogMaxAggregateOutputType | null;
  };

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AuditLogGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AuditLogGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>;
        }
      >
    >;

  export type AuditLogSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      organizationId?: boolean;
      action?: boolean;
      metadata?: boolean;
      createdAt?: boolean;
      user?: boolean | AuditLog$userArgs<ExtArgs>;
      organization?: boolean | AuditLog$organizationArgs<ExtArgs>;
    },
    ExtArgs['result']['auditLog']
  >;

  export type AuditLogSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      organizationId?: boolean;
      action?: boolean;
      metadata?: boolean;
      createdAt?: boolean;
      user?: boolean | AuditLog$userArgs<ExtArgs>;
      organization?: boolean | AuditLog$organizationArgs<ExtArgs>;
    },
    ExtArgs['result']['auditLog']
  >;

  export type AuditLogSelectScalar = {
    id?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    action?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
  };

  export type AuditLogInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | AuditLog$userArgs<ExtArgs>;
    organization?: boolean | AuditLog$organizationArgs<ExtArgs>;
  };
  export type AuditLogIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | AuditLog$userArgs<ExtArgs>;
    organization?: boolean | AuditLog$organizationArgs<ExtArgs>;
  };

  export type $AuditLogPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'AuditLog';
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null;
      organization: Prisma.$OrganizationPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string | null;
        organizationId: string | null;
        action: string;
        metadata: Prisma.JsonValue | null;
        createdAt: Date;
      },
      ExtArgs['result']['auditLog']
    >;
    composites: {};
  };

  type AuditLogGetPayload<
    S extends boolean | null | undefined | AuditLogDefaultArgs,
  > = $Result.GetResult<Prisma.$AuditLogPayload, S>;

  type AuditLogCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: AuditLogCountAggregateInputType | true;
  };

  export interface AuditLogDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'];
      meta: { name: 'AuditLog' };
    };
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(
      args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(
      args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     *
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AuditLogFindManyArgs>(
      args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     *
     */
    create<T extends AuditLogCreateArgs>(
      args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AuditLogCreateManyArgs>(
      args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     *
     */
    delete<T extends AuditLogDeleteArgs>(
      args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AuditLogUpdateArgs>(
      args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(
      args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AuditLogUpdateManyArgs>(
      args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(
      args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
     **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(
      args: Subset<T, AuditLogAggregateArgs>,
    ): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>;

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAuditLogGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AuditLog model
     */
    readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends AuditLog$userArgs<ExtArgs> = {}>(
      args?: Subset<T, AuditLog$userArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;
    organization<T extends AuditLog$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, AuditLog$organizationArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<'AuditLog', 'String'>;
    readonly userId: FieldRef<'AuditLog', 'String'>;
    readonly organizationId: FieldRef<'AuditLog', 'String'>;
    readonly action: FieldRef<'AuditLog', 'String'>;
    readonly metadata: FieldRef<'AuditLog', 'Json'>;
    readonly createdAt: FieldRef<'AuditLog', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput;
  };

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput;
  };

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?:
      | AuditLogOrderByWithRelationInput
      | AuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[];
  };

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?:
      | AuditLogOrderByWithRelationInput
      | AuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[];
  };

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?:
      | AuditLogOrderByWithRelationInput
      | AuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number;
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[];
  };

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>;
  };

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>;
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput;
  };

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<
      AuditLogUpdateManyMutationInput,
      AuditLogUncheckedUpdateManyInput
    >;
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput;
  };

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput;
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>;
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>;
  };

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput;
  };

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput;
  };

  /**
   * AuditLog.user
   */
  export type AuditLog$userArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
  };

  /**
   * AuditLog.organization
   */
  export type AuditLog$organizationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    where?: OrganizationWhereInput;
  };

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
  };

  /**
   * Model AiSummary
   */

  export type AggregateAiSummary = {
    _count: AiSummaryCountAggregateOutputType | null;
    _min: AiSummaryMinAggregateOutputType | null;
    _max: AiSummaryMaxAggregateOutputType | null;
  };

  export type AiSummaryMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    channelId: string | null;
    summary: string | null;
    rangeStart: Date | null;
    rangeEnd: Date | null;
    createdAt: Date | null;
  };

  export type AiSummaryMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    channelId: string | null;
    summary: string | null;
    rangeStart: Date | null;
    rangeEnd: Date | null;
    createdAt: Date | null;
  };

  export type AiSummaryCountAggregateOutputType = {
    id: number;
    organizationId: number;
    channelId: number;
    summary: number;
    rangeStart: number;
    rangeEnd: number;
    createdAt: number;
    _all: number;
  };

  export type AiSummaryMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    channelId?: true;
    summary?: true;
    rangeStart?: true;
    rangeEnd?: true;
    createdAt?: true;
  };

  export type AiSummaryMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    channelId?: true;
    summary?: true;
    rangeStart?: true;
    rangeEnd?: true;
    createdAt?: true;
  };

  export type AiSummaryCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    channelId?: true;
    summary?: true;
    rangeStart?: true;
    rangeEnd?: true;
    createdAt?: true;
    _all?: true;
  };

  export type AiSummaryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AiSummary to aggregate.
     */
    where?: AiSummaryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiSummaries to fetch.
     */
    orderBy?:
      | AiSummaryOrderByWithRelationInput
      | AiSummaryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AiSummaryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiSummaries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiSummaries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AiSummaries
     **/
    _count?: true | AiSummaryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AiSummaryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AiSummaryMaxAggregateInputType;
  };

  export type GetAiSummaryAggregateType<T extends AiSummaryAggregateArgs> = {
    [P in keyof T & keyof AggregateAiSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiSummary[P]>
      : GetScalarType<T[P], AggregateAiSummary[P]>;
  };

  export type AiSummaryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AiSummaryWhereInput;
    orderBy?:
      | AiSummaryOrderByWithAggregationInput
      | AiSummaryOrderByWithAggregationInput[];
    by: AiSummaryScalarFieldEnum[] | AiSummaryScalarFieldEnum;
    having?: AiSummaryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AiSummaryCountAggregateInputType | true;
    _min?: AiSummaryMinAggregateInputType;
    _max?: AiSummaryMaxAggregateInputType;
  };

  export type AiSummaryGroupByOutputType = {
    id: string;
    organizationId: string;
    channelId: string | null;
    summary: string;
    rangeStart: Date | null;
    rangeEnd: Date | null;
    createdAt: Date;
    _count: AiSummaryCountAggregateOutputType | null;
    _min: AiSummaryMinAggregateOutputType | null;
    _max: AiSummaryMaxAggregateOutputType | null;
  };

  type GetAiSummaryGroupByPayload<T extends AiSummaryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AiSummaryGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AiSummaryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], AiSummaryGroupByOutputType[P]>;
        }
      >
    >;

  export type AiSummarySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      channelId?: boolean;
      summary?: boolean;
      rangeStart?: boolean;
      rangeEnd?: boolean;
      createdAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      channel?: boolean | AiSummary$channelArgs<ExtArgs>;
    },
    ExtArgs['result']['aiSummary']
  >;

  export type AiSummarySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      channelId?: boolean;
      summary?: boolean;
      rangeStart?: boolean;
      rangeEnd?: boolean;
      createdAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      channel?: boolean | AiSummary$channelArgs<ExtArgs>;
    },
    ExtArgs['result']['aiSummary']
  >;

  export type AiSummarySelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    channelId?: boolean;
    summary?: boolean;
    rangeStart?: boolean;
    rangeEnd?: boolean;
    createdAt?: boolean;
  };

  export type AiSummaryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    channel?: boolean | AiSummary$channelArgs<ExtArgs>;
  };
  export type AiSummaryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    channel?: boolean | AiSummary$channelArgs<ExtArgs>;
  };

  export type $AiSummaryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'AiSummary';
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>;
      channel: Prisma.$ChannelPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        organizationId: string;
        channelId: string | null;
        summary: string;
        rangeStart: Date | null;
        rangeEnd: Date | null;
        createdAt: Date;
      },
      ExtArgs['result']['aiSummary']
    >;
    composites: {};
  };

  type AiSummaryGetPayload<
    S extends boolean | null | undefined | AiSummaryDefaultArgs,
  > = $Result.GetResult<Prisma.$AiSummaryPayload, S>;

  type AiSummaryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AiSummaryFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: AiSummaryCountAggregateInputType | true;
  };

  export interface AiSummaryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['AiSummary'];
      meta: { name: 'AiSummary' };
    };
    /**
     * Find zero or one AiSummary that matches the filter.
     * @param {AiSummaryFindUniqueArgs} args - Arguments to find a AiSummary
     * @example
     * // Get one AiSummary
     * const aiSummary = await prisma.aiSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiSummaryFindUniqueArgs>(
      args: SelectSubset<T, AiSummaryFindUniqueArgs<ExtArgs>>,
    ): Prisma__AiSummaryClient<
      $Result.GetResult<
        Prisma.$AiSummaryPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one AiSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiSummaryFindUniqueOrThrowArgs} args - Arguments to find a AiSummary
     * @example
     * // Get one AiSummary
     * const aiSummary = await prisma.aiSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiSummaryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AiSummaryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AiSummaryClient<
      $Result.GetResult<
        Prisma.$AiSummaryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first AiSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSummaryFindFirstArgs} args - Arguments to find a AiSummary
     * @example
     * // Get one AiSummary
     * const aiSummary = await prisma.aiSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiSummaryFindFirstArgs>(
      args?: SelectSubset<T, AiSummaryFindFirstArgs<ExtArgs>>,
    ): Prisma__AiSummaryClient<
      $Result.GetResult<
        Prisma.$AiSummaryPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first AiSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSummaryFindFirstOrThrowArgs} args - Arguments to find a AiSummary
     * @example
     * // Get one AiSummary
     * const aiSummary = await prisma.aiSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiSummaryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AiSummaryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AiSummaryClient<
      $Result.GetResult<
        Prisma.$AiSummaryPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more AiSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiSummaries
     * const aiSummaries = await prisma.aiSummary.findMany()
     *
     * // Get first 10 AiSummaries
     * const aiSummaries = await prisma.aiSummary.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const aiSummaryWithIdOnly = await prisma.aiSummary.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AiSummaryFindManyArgs>(
      args?: SelectSubset<T, AiSummaryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AiSummaryPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a AiSummary.
     * @param {AiSummaryCreateArgs} args - Arguments to create a AiSummary.
     * @example
     * // Create one AiSummary
     * const AiSummary = await prisma.aiSummary.create({
     *   data: {
     *     // ... data to create a AiSummary
     *   }
     * })
     *
     */
    create<T extends AiSummaryCreateArgs>(
      args: SelectSubset<T, AiSummaryCreateArgs<ExtArgs>>,
    ): Prisma__AiSummaryClient<
      $Result.GetResult<Prisma.$AiSummaryPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many AiSummaries.
     * @param {AiSummaryCreateManyArgs} args - Arguments to create many AiSummaries.
     * @example
     * // Create many AiSummaries
     * const aiSummary = await prisma.aiSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AiSummaryCreateManyArgs>(
      args?: SelectSubset<T, AiSummaryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many AiSummaries and returns the data saved in the database.
     * @param {AiSummaryCreateManyAndReturnArgs} args - Arguments to create many AiSummaries.
     * @example
     * // Create many AiSummaries
     * const aiSummary = await prisma.aiSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AiSummaries and only return the `id`
     * const aiSummaryWithIdOnly = await prisma.aiSummary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AiSummaryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AiSummaryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AiSummaryPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a AiSummary.
     * @param {AiSummaryDeleteArgs} args - Arguments to delete one AiSummary.
     * @example
     * // Delete one AiSummary
     * const AiSummary = await prisma.aiSummary.delete({
     *   where: {
     *     // ... filter to delete one AiSummary
     *   }
     * })
     *
     */
    delete<T extends AiSummaryDeleteArgs>(
      args: SelectSubset<T, AiSummaryDeleteArgs<ExtArgs>>,
    ): Prisma__AiSummaryClient<
      $Result.GetResult<Prisma.$AiSummaryPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one AiSummary.
     * @param {AiSummaryUpdateArgs} args - Arguments to update one AiSummary.
     * @example
     * // Update one AiSummary
     * const aiSummary = await prisma.aiSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AiSummaryUpdateArgs>(
      args: SelectSubset<T, AiSummaryUpdateArgs<ExtArgs>>,
    ): Prisma__AiSummaryClient<
      $Result.GetResult<Prisma.$AiSummaryPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more AiSummaries.
     * @param {AiSummaryDeleteManyArgs} args - Arguments to filter AiSummaries to delete.
     * @example
     * // Delete a few AiSummaries
     * const { count } = await prisma.aiSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AiSummaryDeleteManyArgs>(
      args?: SelectSubset<T, AiSummaryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AiSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiSummaries
     * const aiSummary = await prisma.aiSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AiSummaryUpdateManyArgs>(
      args: SelectSubset<T, AiSummaryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one AiSummary.
     * @param {AiSummaryUpsertArgs} args - Arguments to update or create a AiSummary.
     * @example
     * // Update or create a AiSummary
     * const aiSummary = await prisma.aiSummary.upsert({
     *   create: {
     *     // ... data to create a AiSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiSummary we want to update
     *   }
     * })
     */
    upsert<T extends AiSummaryUpsertArgs>(
      args: SelectSubset<T, AiSummaryUpsertArgs<ExtArgs>>,
    ): Prisma__AiSummaryClient<
      $Result.GetResult<Prisma.$AiSummaryPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of AiSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSummaryCountArgs} args - Arguments to filter AiSummaries to count.
     * @example
     * // Count the number of AiSummaries
     * const count = await prisma.aiSummary.count({
     *   where: {
     *     // ... the filter for the AiSummaries we want to count
     *   }
     * })
     **/
    count<T extends AiSummaryCountArgs>(
      args?: Subset<T, AiSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiSummaryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AiSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiSummaryAggregateArgs>(
      args: Subset<T, AiSummaryAggregateArgs>,
    ): Prisma.PrismaPromise<GetAiSummaryAggregateType<T>>;

    /**
     * Group by AiSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSummaryGroupByArgs} args - Group by arguments.
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
      T extends AiSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiSummaryGroupByArgs['orderBy'] }
        : { orderBy?: AiSummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AiSummaryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAiSummaryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AiSummary model
     */
    readonly fields: AiSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiSummaryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      | $Result.GetResult<
          Prisma.$OrganizationPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    channel<T extends AiSummary$channelArgs<ExtArgs> = {}>(
      args?: Subset<T, AiSummary$channelArgs<ExtArgs>>,
    ): Prisma__ChannelClient<
      $Result.GetResult<
        Prisma.$ChannelPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the AiSummary model
   */
  interface AiSummaryFieldRefs {
    readonly id: FieldRef<'AiSummary', 'String'>;
    readonly organizationId: FieldRef<'AiSummary', 'String'>;
    readonly channelId: FieldRef<'AiSummary', 'String'>;
    readonly summary: FieldRef<'AiSummary', 'String'>;
    readonly rangeStart: FieldRef<'AiSummary', 'DateTime'>;
    readonly rangeEnd: FieldRef<'AiSummary', 'DateTime'>;
    readonly createdAt: FieldRef<'AiSummary', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * AiSummary findUnique
   */
  export type AiSummaryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null;
    /**
     * Filter, which AiSummary to fetch.
     */
    where: AiSummaryWhereUniqueInput;
  };

  /**
   * AiSummary findUniqueOrThrow
   */
  export type AiSummaryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null;
    /**
     * Filter, which AiSummary to fetch.
     */
    where: AiSummaryWhereUniqueInput;
  };

  /**
   * AiSummary findFirst
   */
  export type AiSummaryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null;
    /**
     * Filter, which AiSummary to fetch.
     */
    where?: AiSummaryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiSummaries to fetch.
     */
    orderBy?:
      | AiSummaryOrderByWithRelationInput
      | AiSummaryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AiSummaries.
     */
    cursor?: AiSummaryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiSummaries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiSummaries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AiSummaries.
     */
    distinct?: AiSummaryScalarFieldEnum | AiSummaryScalarFieldEnum[];
  };

  /**
   * AiSummary findFirstOrThrow
   */
  export type AiSummaryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null;
    /**
     * Filter, which AiSummary to fetch.
     */
    where?: AiSummaryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiSummaries to fetch.
     */
    orderBy?:
      | AiSummaryOrderByWithRelationInput
      | AiSummaryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AiSummaries.
     */
    cursor?: AiSummaryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiSummaries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiSummaries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AiSummaries.
     */
    distinct?: AiSummaryScalarFieldEnum | AiSummaryScalarFieldEnum[];
  };

  /**
   * AiSummary findMany
   */
  export type AiSummaryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null;
    /**
     * Filter, which AiSummaries to fetch.
     */
    where?: AiSummaryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiSummaries to fetch.
     */
    orderBy?:
      | AiSummaryOrderByWithRelationInput
      | AiSummaryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AiSummaries.
     */
    cursor?: AiSummaryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiSummaries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiSummaries.
     */
    skip?: number;
    distinct?: AiSummaryScalarFieldEnum | AiSummaryScalarFieldEnum[];
  };

  /**
   * AiSummary create
   */
  export type AiSummaryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null;
    /**
     * The data needed to create a AiSummary.
     */
    data: XOR<AiSummaryCreateInput, AiSummaryUncheckedCreateInput>;
  };

  /**
   * AiSummary createMany
   */
  export type AiSummaryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AiSummaries.
     */
    data: AiSummaryCreateManyInput | AiSummaryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AiSummary createManyAndReturn
   */
  export type AiSummaryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many AiSummaries.
     */
    data: AiSummaryCreateManyInput | AiSummaryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * AiSummary update
   */
  export type AiSummaryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null;
    /**
     * The data needed to update a AiSummary.
     */
    data: XOR<AiSummaryUpdateInput, AiSummaryUncheckedUpdateInput>;
    /**
     * Choose, which AiSummary to update.
     */
    where: AiSummaryWhereUniqueInput;
  };

  /**
   * AiSummary updateMany
   */
  export type AiSummaryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AiSummaries.
     */
    data: XOR<
      AiSummaryUpdateManyMutationInput,
      AiSummaryUncheckedUpdateManyInput
    >;
    /**
     * Filter which AiSummaries to update
     */
    where?: AiSummaryWhereInput;
  };

  /**
   * AiSummary upsert
   */
  export type AiSummaryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null;
    /**
     * The filter to search for the AiSummary to update in case it exists.
     */
    where: AiSummaryWhereUniqueInput;
    /**
     * In case the AiSummary found by the `where` argument doesn't exist, create a new AiSummary with this data.
     */
    create: XOR<AiSummaryCreateInput, AiSummaryUncheckedCreateInput>;
    /**
     * In case the AiSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiSummaryUpdateInput, AiSummaryUncheckedUpdateInput>;
  };

  /**
   * AiSummary delete
   */
  export type AiSummaryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null;
    /**
     * Filter which AiSummary to delete.
     */
    where: AiSummaryWhereUniqueInput;
  };

  /**
   * AiSummary deleteMany
   */
  export type AiSummaryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AiSummaries to delete
     */
    where?: AiSummaryWhereInput;
  };

  /**
   * AiSummary.channel
   */
  export type AiSummary$channelArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null;
    where?: ChannelWhereInput;
  };

  /**
   * AiSummary without action
   */
  export type AiSummaryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null;
  };

  /**
   * Model AiReport
   */

  export type AggregateAiReport = {
    _count: AiReportCountAggregateOutputType | null;
    _min: AiReportMinAggregateOutputType | null;
    _max: AiReportMaxAggregateOutputType | null;
  };

  export type AiReportMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    title: string | null;
    content: string | null;
    rangeStart: Date | null;
    rangeEnd: Date | null;
    createdAt: Date | null;
  };

  export type AiReportMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    title: string | null;
    content: string | null;
    rangeStart: Date | null;
    rangeEnd: Date | null;
    createdAt: Date | null;
  };

  export type AiReportCountAggregateOutputType = {
    id: number;
    organizationId: number;
    title: number;
    content: number;
    rangeStart: number;
    rangeEnd: number;
    createdAt: number;
    _all: number;
  };

  export type AiReportMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    title?: true;
    content?: true;
    rangeStart?: true;
    rangeEnd?: true;
    createdAt?: true;
  };

  export type AiReportMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    title?: true;
    content?: true;
    rangeStart?: true;
    rangeEnd?: true;
    createdAt?: true;
  };

  export type AiReportCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    title?: true;
    content?: true;
    rangeStart?: true;
    rangeEnd?: true;
    createdAt?: true;
    _all?: true;
  };

  export type AiReportAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AiReport to aggregate.
     */
    where?: AiReportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiReports to fetch.
     */
    orderBy?:
      | AiReportOrderByWithRelationInput
      | AiReportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AiReportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiReports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiReports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AiReports
     **/
    _count?: true | AiReportCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AiReportMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AiReportMaxAggregateInputType;
  };

  export type GetAiReportAggregateType<T extends AiReportAggregateArgs> = {
    [P in keyof T & keyof AggregateAiReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiReport[P]>
      : GetScalarType<T[P], AggregateAiReport[P]>;
  };

  export type AiReportGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AiReportWhereInput;
    orderBy?:
      | AiReportOrderByWithAggregationInput
      | AiReportOrderByWithAggregationInput[];
    by: AiReportScalarFieldEnum[] | AiReportScalarFieldEnum;
    having?: AiReportScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AiReportCountAggregateInputType | true;
    _min?: AiReportMinAggregateInputType;
    _max?: AiReportMaxAggregateInputType;
  };

  export type AiReportGroupByOutputType = {
    id: string;
    organizationId: string;
    title: string;
    content: string;
    rangeStart: Date | null;
    rangeEnd: Date | null;
    createdAt: Date;
    _count: AiReportCountAggregateOutputType | null;
    _min: AiReportMinAggregateOutputType | null;
    _max: AiReportMaxAggregateOutputType | null;
  };

  type GetAiReportGroupByPayload<T extends AiReportGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AiReportGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AiReportGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiReportGroupByOutputType[P]>
            : GetScalarType<T[P], AiReportGroupByOutputType[P]>;
        }
      >
    >;

  export type AiReportSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      title?: boolean;
      content?: boolean;
      rangeStart?: boolean;
      rangeEnd?: boolean;
      createdAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['aiReport']
  >;

  export type AiReportSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      title?: boolean;
      content?: boolean;
      rangeStart?: boolean;
      rangeEnd?: boolean;
      createdAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['aiReport']
  >;

  export type AiReportSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    title?: boolean;
    content?: boolean;
    rangeStart?: boolean;
    rangeEnd?: boolean;
    createdAt?: boolean;
  };

  export type AiReportInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
  };
  export type AiReportIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
  };

  export type $AiReportPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'AiReport';
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        organizationId: string;
        title: string;
        content: string;
        rangeStart: Date | null;
        rangeEnd: Date | null;
        createdAt: Date;
      },
      ExtArgs['result']['aiReport']
    >;
    composites: {};
  };

  type AiReportGetPayload<
    S extends boolean | null | undefined | AiReportDefaultArgs,
  > = $Result.GetResult<Prisma.$AiReportPayload, S>;

  type AiReportCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AiReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: AiReportCountAggregateInputType | true;
  };

  export interface AiReportDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['AiReport'];
      meta: { name: 'AiReport' };
    };
    /**
     * Find zero or one AiReport that matches the filter.
     * @param {AiReportFindUniqueArgs} args - Arguments to find a AiReport
     * @example
     * // Get one AiReport
     * const aiReport = await prisma.aiReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiReportFindUniqueArgs>(
      args: SelectSubset<T, AiReportFindUniqueArgs<ExtArgs>>,
    ): Prisma__AiReportClient<
      $Result.GetResult<
        Prisma.$AiReportPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one AiReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiReportFindUniqueOrThrowArgs} args - Arguments to find a AiReport
     * @example
     * // Get one AiReport
     * const aiReport = await prisma.aiReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiReportFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AiReportFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AiReportClient<
      $Result.GetResult<
        Prisma.$AiReportPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first AiReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReportFindFirstArgs} args - Arguments to find a AiReport
     * @example
     * // Get one AiReport
     * const aiReport = await prisma.aiReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiReportFindFirstArgs>(
      args?: SelectSubset<T, AiReportFindFirstArgs<ExtArgs>>,
    ): Prisma__AiReportClient<
      $Result.GetResult<
        Prisma.$AiReportPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first AiReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReportFindFirstOrThrowArgs} args - Arguments to find a AiReport
     * @example
     * // Get one AiReport
     * const aiReport = await prisma.aiReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiReportFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AiReportFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AiReportClient<
      $Result.GetResult<
        Prisma.$AiReportPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more AiReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiReports
     * const aiReports = await prisma.aiReport.findMany()
     *
     * // Get first 10 AiReports
     * const aiReports = await prisma.aiReport.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const aiReportWithIdOnly = await prisma.aiReport.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AiReportFindManyArgs>(
      args?: SelectSubset<T, AiReportFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AiReportPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a AiReport.
     * @param {AiReportCreateArgs} args - Arguments to create a AiReport.
     * @example
     * // Create one AiReport
     * const AiReport = await prisma.aiReport.create({
     *   data: {
     *     // ... data to create a AiReport
     *   }
     * })
     *
     */
    create<T extends AiReportCreateArgs>(
      args: SelectSubset<T, AiReportCreateArgs<ExtArgs>>,
    ): Prisma__AiReportClient<
      $Result.GetResult<Prisma.$AiReportPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many AiReports.
     * @param {AiReportCreateManyArgs} args - Arguments to create many AiReports.
     * @example
     * // Create many AiReports
     * const aiReport = await prisma.aiReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AiReportCreateManyArgs>(
      args?: SelectSubset<T, AiReportCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many AiReports and returns the data saved in the database.
     * @param {AiReportCreateManyAndReturnArgs} args - Arguments to create many AiReports.
     * @example
     * // Create many AiReports
     * const aiReport = await prisma.aiReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AiReports and only return the `id`
     * const aiReportWithIdOnly = await prisma.aiReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AiReportCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AiReportCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AiReportPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a AiReport.
     * @param {AiReportDeleteArgs} args - Arguments to delete one AiReport.
     * @example
     * // Delete one AiReport
     * const AiReport = await prisma.aiReport.delete({
     *   where: {
     *     // ... filter to delete one AiReport
     *   }
     * })
     *
     */
    delete<T extends AiReportDeleteArgs>(
      args: SelectSubset<T, AiReportDeleteArgs<ExtArgs>>,
    ): Prisma__AiReportClient<
      $Result.GetResult<Prisma.$AiReportPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one AiReport.
     * @param {AiReportUpdateArgs} args - Arguments to update one AiReport.
     * @example
     * // Update one AiReport
     * const aiReport = await prisma.aiReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AiReportUpdateArgs>(
      args: SelectSubset<T, AiReportUpdateArgs<ExtArgs>>,
    ): Prisma__AiReportClient<
      $Result.GetResult<Prisma.$AiReportPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more AiReports.
     * @param {AiReportDeleteManyArgs} args - Arguments to filter AiReports to delete.
     * @example
     * // Delete a few AiReports
     * const { count } = await prisma.aiReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AiReportDeleteManyArgs>(
      args?: SelectSubset<T, AiReportDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AiReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiReports
     * const aiReport = await prisma.aiReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AiReportUpdateManyArgs>(
      args: SelectSubset<T, AiReportUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one AiReport.
     * @param {AiReportUpsertArgs} args - Arguments to update or create a AiReport.
     * @example
     * // Update or create a AiReport
     * const aiReport = await prisma.aiReport.upsert({
     *   create: {
     *     // ... data to create a AiReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiReport we want to update
     *   }
     * })
     */
    upsert<T extends AiReportUpsertArgs>(
      args: SelectSubset<T, AiReportUpsertArgs<ExtArgs>>,
    ): Prisma__AiReportClient<
      $Result.GetResult<Prisma.$AiReportPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of AiReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReportCountArgs} args - Arguments to filter AiReports to count.
     * @example
     * // Count the number of AiReports
     * const count = await prisma.aiReport.count({
     *   where: {
     *     // ... the filter for the AiReports we want to count
     *   }
     * })
     **/
    count<T extends AiReportCountArgs>(
      args?: Subset<T, AiReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiReportCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AiReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiReportAggregateArgs>(
      args: Subset<T, AiReportAggregateArgs>,
    ): Prisma.PrismaPromise<GetAiReportAggregateType<T>>;

    /**
     * Group by AiReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReportGroupByArgs} args - Group by arguments.
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
      T extends AiReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiReportGroupByArgs['orderBy'] }
        : { orderBy?: AiReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AiReportGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAiReportGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AiReport model
     */
    readonly fields: AiReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiReportClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      | $Result.GetResult<
          Prisma.$OrganizationPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the AiReport model
   */
  interface AiReportFieldRefs {
    readonly id: FieldRef<'AiReport', 'String'>;
    readonly organizationId: FieldRef<'AiReport', 'String'>;
    readonly title: FieldRef<'AiReport', 'String'>;
    readonly content: FieldRef<'AiReport', 'String'>;
    readonly rangeStart: FieldRef<'AiReport', 'DateTime'>;
    readonly rangeEnd: FieldRef<'AiReport', 'DateTime'>;
    readonly createdAt: FieldRef<'AiReport', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * AiReport findUnique
   */
  export type AiReportFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null;
    /**
     * Filter, which AiReport to fetch.
     */
    where: AiReportWhereUniqueInput;
  };

  /**
   * AiReport findUniqueOrThrow
   */
  export type AiReportFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null;
    /**
     * Filter, which AiReport to fetch.
     */
    where: AiReportWhereUniqueInput;
  };

  /**
   * AiReport findFirst
   */
  export type AiReportFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null;
    /**
     * Filter, which AiReport to fetch.
     */
    where?: AiReportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiReports to fetch.
     */
    orderBy?:
      | AiReportOrderByWithRelationInput
      | AiReportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AiReports.
     */
    cursor?: AiReportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiReports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiReports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AiReports.
     */
    distinct?: AiReportScalarFieldEnum | AiReportScalarFieldEnum[];
  };

  /**
   * AiReport findFirstOrThrow
   */
  export type AiReportFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null;
    /**
     * Filter, which AiReport to fetch.
     */
    where?: AiReportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiReports to fetch.
     */
    orderBy?:
      | AiReportOrderByWithRelationInput
      | AiReportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AiReports.
     */
    cursor?: AiReportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiReports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiReports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AiReports.
     */
    distinct?: AiReportScalarFieldEnum | AiReportScalarFieldEnum[];
  };

  /**
   * AiReport findMany
   */
  export type AiReportFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null;
    /**
     * Filter, which AiReports to fetch.
     */
    where?: AiReportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiReports to fetch.
     */
    orderBy?:
      | AiReportOrderByWithRelationInput
      | AiReportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AiReports.
     */
    cursor?: AiReportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiReports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiReports.
     */
    skip?: number;
    distinct?: AiReportScalarFieldEnum | AiReportScalarFieldEnum[];
  };

  /**
   * AiReport create
   */
  export type AiReportCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null;
    /**
     * The data needed to create a AiReport.
     */
    data: XOR<AiReportCreateInput, AiReportUncheckedCreateInput>;
  };

  /**
   * AiReport createMany
   */
  export type AiReportCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AiReports.
     */
    data: AiReportCreateManyInput | AiReportCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AiReport createManyAndReturn
   */
  export type AiReportCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many AiReports.
     */
    data: AiReportCreateManyInput | AiReportCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * AiReport update
   */
  export type AiReportUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null;
    /**
     * The data needed to update a AiReport.
     */
    data: XOR<AiReportUpdateInput, AiReportUncheckedUpdateInput>;
    /**
     * Choose, which AiReport to update.
     */
    where: AiReportWhereUniqueInput;
  };

  /**
   * AiReport updateMany
   */
  export type AiReportUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AiReports.
     */
    data: XOR<
      AiReportUpdateManyMutationInput,
      AiReportUncheckedUpdateManyInput
    >;
    /**
     * Filter which AiReports to update
     */
    where?: AiReportWhereInput;
  };

  /**
   * AiReport upsert
   */
  export type AiReportUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null;
    /**
     * The filter to search for the AiReport to update in case it exists.
     */
    where: AiReportWhereUniqueInput;
    /**
     * In case the AiReport found by the `where` argument doesn't exist, create a new AiReport with this data.
     */
    create: XOR<AiReportCreateInput, AiReportUncheckedCreateInput>;
    /**
     * In case the AiReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiReportUpdateInput, AiReportUncheckedUpdateInput>;
  };

  /**
   * AiReport delete
   */
  export type AiReportDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null;
    /**
     * Filter which AiReport to delete.
     */
    where: AiReportWhereUniqueInput;
  };

  /**
   * AiReport deleteMany
   */
  export type AiReportDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AiReports to delete
     */
    where?: AiReportWhereInput;
  };

  /**
   * AiReport without action
   */
  export type AiReportDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiReport
     */
    select?: AiReportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiReportInclude<ExtArgs> | null;
  };

  /**
   * Model ChannelReadState
   */

  export type AggregateChannelReadState = {
    _count: ChannelReadStateCountAggregateOutputType | null;
    _min: ChannelReadStateMinAggregateOutputType | null;
    _max: ChannelReadStateMaxAggregateOutputType | null;
  };

  export type ChannelReadStateMinAggregateOutputType = {
    id: string | null;
    channelId: string | null;
    userId: string | null;
    lastReadAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ChannelReadStateMaxAggregateOutputType = {
    id: string | null;
    channelId: string | null;
    userId: string | null;
    lastReadAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ChannelReadStateCountAggregateOutputType = {
    id: number;
    channelId: number;
    userId: number;
    lastReadAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ChannelReadStateMinAggregateInputType = {
    id?: true;
    channelId?: true;
    userId?: true;
    lastReadAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ChannelReadStateMaxAggregateInputType = {
    id?: true;
    channelId?: true;
    userId?: true;
    lastReadAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ChannelReadStateCountAggregateInputType = {
    id?: true;
    channelId?: true;
    userId?: true;
    lastReadAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ChannelReadStateAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ChannelReadState to aggregate.
     */
    where?: ChannelReadStateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChannelReadStates to fetch.
     */
    orderBy?:
      | ChannelReadStateOrderByWithRelationInput
      | ChannelReadStateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ChannelReadStateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChannelReadStates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChannelReadStates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ChannelReadStates
     **/
    _count?: true | ChannelReadStateCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ChannelReadStateMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ChannelReadStateMaxAggregateInputType;
  };

  export type GetChannelReadStateAggregateType<
    T extends ChannelReadStateAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateChannelReadState]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannelReadState[P]>
      : GetScalarType<T[P], AggregateChannelReadState[P]>;
  };

  export type ChannelReadStateGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ChannelReadStateWhereInput;
    orderBy?:
      | ChannelReadStateOrderByWithAggregationInput
      | ChannelReadStateOrderByWithAggregationInput[];
    by: ChannelReadStateScalarFieldEnum[] | ChannelReadStateScalarFieldEnum;
    having?: ChannelReadStateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChannelReadStateCountAggregateInputType | true;
    _min?: ChannelReadStateMinAggregateInputType;
    _max?: ChannelReadStateMaxAggregateInputType;
  };

  export type ChannelReadStateGroupByOutputType = {
    id: string;
    channelId: string;
    userId: string;
    lastReadAt: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: ChannelReadStateCountAggregateOutputType | null;
    _min: ChannelReadStateMinAggregateOutputType | null;
    _max: ChannelReadStateMaxAggregateOutputType | null;
  };

  type GetChannelReadStateGroupByPayload<
    T extends ChannelReadStateGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelReadStateGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof ChannelReadStateGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ChannelReadStateGroupByOutputType[P]>
          : GetScalarType<T[P], ChannelReadStateGroupByOutputType[P]>;
      }
    >
  >;

  export type ChannelReadStateSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      channelId?: boolean;
      userId?: boolean;
      lastReadAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      channel?: boolean | ChannelDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['channelReadState']
  >;

  export type ChannelReadStateSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      channelId?: boolean;
      userId?: boolean;
      lastReadAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      channel?: boolean | ChannelDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['channelReadState']
  >;

  export type ChannelReadStateSelectScalar = {
    id?: boolean;
    channelId?: boolean;
    userId?: boolean;
    lastReadAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ChannelReadStateInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ChannelReadStateIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ChannelReadStatePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ChannelReadState';
    objects: {
      channel: Prisma.$ChannelPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        channelId: string;
        userId: string;
        lastReadAt: Date;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['channelReadState']
    >;
    composites: {};
  };

  type ChannelReadStateGetPayload<
    S extends boolean | null | undefined | ChannelReadStateDefaultArgs,
  > = $Result.GetResult<Prisma.$ChannelReadStatePayload, S>;

  type ChannelReadStateCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ChannelReadStateFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: ChannelReadStateCountAggregateInputType | true;
  };

  export interface ChannelReadStateDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ChannelReadState'];
      meta: { name: 'ChannelReadState' };
    };
    /**
     * Find zero or one ChannelReadState that matches the filter.
     * @param {ChannelReadStateFindUniqueArgs} args - Arguments to find a ChannelReadState
     * @example
     * // Get one ChannelReadState
     * const channelReadState = await prisma.channelReadState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelReadStateFindUniqueArgs>(
      args: SelectSubset<T, ChannelReadStateFindUniqueArgs<ExtArgs>>,
    ): Prisma__ChannelReadStateClient<
      $Result.GetResult<
        Prisma.$ChannelReadStatePayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one ChannelReadState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelReadStateFindUniqueOrThrowArgs} args - Arguments to find a ChannelReadState
     * @example
     * // Get one ChannelReadState
     * const channelReadState = await prisma.channelReadState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelReadStateFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ChannelReadStateFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ChannelReadStateClient<
      $Result.GetResult<
        Prisma.$ChannelReadStatePayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first ChannelReadState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelReadStateFindFirstArgs} args - Arguments to find a ChannelReadState
     * @example
     * // Get one ChannelReadState
     * const channelReadState = await prisma.channelReadState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelReadStateFindFirstArgs>(
      args?: SelectSubset<T, ChannelReadStateFindFirstArgs<ExtArgs>>,
    ): Prisma__ChannelReadStateClient<
      $Result.GetResult<
        Prisma.$ChannelReadStatePayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first ChannelReadState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelReadStateFindFirstOrThrowArgs} args - Arguments to find a ChannelReadState
     * @example
     * // Get one ChannelReadState
     * const channelReadState = await prisma.channelReadState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelReadStateFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ChannelReadStateFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ChannelReadStateClient<
      $Result.GetResult<
        Prisma.$ChannelReadStatePayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more ChannelReadStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelReadStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChannelReadStates
     * const channelReadStates = await prisma.channelReadState.findMany()
     *
     * // Get first 10 ChannelReadStates
     * const channelReadStates = await prisma.channelReadState.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const channelReadStateWithIdOnly = await prisma.channelReadState.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ChannelReadStateFindManyArgs>(
      args?: SelectSubset<T, ChannelReadStateFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ChannelReadStatePayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a ChannelReadState.
     * @param {ChannelReadStateCreateArgs} args - Arguments to create a ChannelReadState.
     * @example
     * // Create one ChannelReadState
     * const ChannelReadState = await prisma.channelReadState.create({
     *   data: {
     *     // ... data to create a ChannelReadState
     *   }
     * })
     *
     */
    create<T extends ChannelReadStateCreateArgs>(
      args: SelectSubset<T, ChannelReadStateCreateArgs<ExtArgs>>,
    ): Prisma__ChannelReadStateClient<
      $Result.GetResult<Prisma.$ChannelReadStatePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many ChannelReadStates.
     * @param {ChannelReadStateCreateManyArgs} args - Arguments to create many ChannelReadStates.
     * @example
     * // Create many ChannelReadStates
     * const channelReadState = await prisma.channelReadState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ChannelReadStateCreateManyArgs>(
      args?: SelectSubset<T, ChannelReadStateCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ChannelReadStates and returns the data saved in the database.
     * @param {ChannelReadStateCreateManyAndReturnArgs} args - Arguments to create many ChannelReadStates.
     * @example
     * // Create many ChannelReadStates
     * const channelReadState = await prisma.channelReadState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ChannelReadStates and only return the `id`
     * const channelReadStateWithIdOnly = await prisma.channelReadState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ChannelReadStateCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ChannelReadStateCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ChannelReadStatePayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a ChannelReadState.
     * @param {ChannelReadStateDeleteArgs} args - Arguments to delete one ChannelReadState.
     * @example
     * // Delete one ChannelReadState
     * const ChannelReadState = await prisma.channelReadState.delete({
     *   where: {
     *     // ... filter to delete one ChannelReadState
     *   }
     * })
     *
     */
    delete<T extends ChannelReadStateDeleteArgs>(
      args: SelectSubset<T, ChannelReadStateDeleteArgs<ExtArgs>>,
    ): Prisma__ChannelReadStateClient<
      $Result.GetResult<Prisma.$ChannelReadStatePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one ChannelReadState.
     * @param {ChannelReadStateUpdateArgs} args - Arguments to update one ChannelReadState.
     * @example
     * // Update one ChannelReadState
     * const channelReadState = await prisma.channelReadState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ChannelReadStateUpdateArgs>(
      args: SelectSubset<T, ChannelReadStateUpdateArgs<ExtArgs>>,
    ): Prisma__ChannelReadStateClient<
      $Result.GetResult<Prisma.$ChannelReadStatePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more ChannelReadStates.
     * @param {ChannelReadStateDeleteManyArgs} args - Arguments to filter ChannelReadStates to delete.
     * @example
     * // Delete a few ChannelReadStates
     * const { count } = await prisma.channelReadState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ChannelReadStateDeleteManyArgs>(
      args?: SelectSubset<T, ChannelReadStateDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ChannelReadStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelReadStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChannelReadStates
     * const channelReadState = await prisma.channelReadState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ChannelReadStateUpdateManyArgs>(
      args: SelectSubset<T, ChannelReadStateUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one ChannelReadState.
     * @param {ChannelReadStateUpsertArgs} args - Arguments to update or create a ChannelReadState.
     * @example
     * // Update or create a ChannelReadState
     * const channelReadState = await prisma.channelReadState.upsert({
     *   create: {
     *     // ... data to create a ChannelReadState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChannelReadState we want to update
     *   }
     * })
     */
    upsert<T extends ChannelReadStateUpsertArgs>(
      args: SelectSubset<T, ChannelReadStateUpsertArgs<ExtArgs>>,
    ): Prisma__ChannelReadStateClient<
      $Result.GetResult<Prisma.$ChannelReadStatePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of ChannelReadStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelReadStateCountArgs} args - Arguments to filter ChannelReadStates to count.
     * @example
     * // Count the number of ChannelReadStates
     * const count = await prisma.channelReadState.count({
     *   where: {
     *     // ... the filter for the ChannelReadStates we want to count
     *   }
     * })
     **/
    count<T extends ChannelReadStateCountArgs>(
      args?: Subset<T, ChannelReadStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelReadStateCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ChannelReadState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelReadStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelReadStateAggregateArgs>(
      args: Subset<T, ChannelReadStateAggregateArgs>,
    ): Prisma.PrismaPromise<GetChannelReadStateAggregateType<T>>;

    /**
     * Group by ChannelReadState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelReadStateGroupByArgs} args - Group by arguments.
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
      T extends ChannelReadStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelReadStateGroupByArgs['orderBy'] }
        : { orderBy?: ChannelReadStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ChannelReadStateGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetChannelReadStateGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ChannelReadState model
     */
    readonly fields: ChannelReadStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChannelReadState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelReadStateClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ChannelDefaultArgs<ExtArgs>>,
    ): Prisma__ChannelClient<
      | $Result.GetResult<
          Prisma.$ChannelPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ChannelReadState model
   */
  interface ChannelReadStateFieldRefs {
    readonly id: FieldRef<'ChannelReadState', 'String'>;
    readonly channelId: FieldRef<'ChannelReadState', 'String'>;
    readonly userId: FieldRef<'ChannelReadState', 'String'>;
    readonly lastReadAt: FieldRef<'ChannelReadState', 'DateTime'>;
    readonly createdAt: FieldRef<'ChannelReadState', 'DateTime'>;
    readonly updatedAt: FieldRef<'ChannelReadState', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * ChannelReadState findUnique
   */
  export type ChannelReadStateFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelReadState
     */
    select?: ChannelReadStateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelReadStateInclude<ExtArgs> | null;
    /**
     * Filter, which ChannelReadState to fetch.
     */
    where: ChannelReadStateWhereUniqueInput;
  };

  /**
   * ChannelReadState findUniqueOrThrow
   */
  export type ChannelReadStateFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelReadState
     */
    select?: ChannelReadStateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelReadStateInclude<ExtArgs> | null;
    /**
     * Filter, which ChannelReadState to fetch.
     */
    where: ChannelReadStateWhereUniqueInput;
  };

  /**
   * ChannelReadState findFirst
   */
  export type ChannelReadStateFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelReadState
     */
    select?: ChannelReadStateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelReadStateInclude<ExtArgs> | null;
    /**
     * Filter, which ChannelReadState to fetch.
     */
    where?: ChannelReadStateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChannelReadStates to fetch.
     */
    orderBy?:
      | ChannelReadStateOrderByWithRelationInput
      | ChannelReadStateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ChannelReadStates.
     */
    cursor?: ChannelReadStateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChannelReadStates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChannelReadStates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ChannelReadStates.
     */
    distinct?:
      | ChannelReadStateScalarFieldEnum
      | ChannelReadStateScalarFieldEnum[];
  };

  /**
   * ChannelReadState findFirstOrThrow
   */
  export type ChannelReadStateFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelReadState
     */
    select?: ChannelReadStateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelReadStateInclude<ExtArgs> | null;
    /**
     * Filter, which ChannelReadState to fetch.
     */
    where?: ChannelReadStateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChannelReadStates to fetch.
     */
    orderBy?:
      | ChannelReadStateOrderByWithRelationInput
      | ChannelReadStateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ChannelReadStates.
     */
    cursor?: ChannelReadStateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChannelReadStates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChannelReadStates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ChannelReadStates.
     */
    distinct?:
      | ChannelReadStateScalarFieldEnum
      | ChannelReadStateScalarFieldEnum[];
  };

  /**
   * ChannelReadState findMany
   */
  export type ChannelReadStateFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelReadState
     */
    select?: ChannelReadStateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelReadStateInclude<ExtArgs> | null;
    /**
     * Filter, which ChannelReadStates to fetch.
     */
    where?: ChannelReadStateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChannelReadStates to fetch.
     */
    orderBy?:
      | ChannelReadStateOrderByWithRelationInput
      | ChannelReadStateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ChannelReadStates.
     */
    cursor?: ChannelReadStateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChannelReadStates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChannelReadStates.
     */
    skip?: number;
    distinct?:
      | ChannelReadStateScalarFieldEnum
      | ChannelReadStateScalarFieldEnum[];
  };

  /**
   * ChannelReadState create
   */
  export type ChannelReadStateCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelReadState
     */
    select?: ChannelReadStateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelReadStateInclude<ExtArgs> | null;
    /**
     * The data needed to create a ChannelReadState.
     */
    data: XOR<
      ChannelReadStateCreateInput,
      ChannelReadStateUncheckedCreateInput
    >;
  };

  /**
   * ChannelReadState createMany
   */
  export type ChannelReadStateCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ChannelReadStates.
     */
    data: ChannelReadStateCreateManyInput | ChannelReadStateCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ChannelReadState createManyAndReturn
   */
  export type ChannelReadStateCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelReadState
     */
    select?: ChannelReadStateSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many ChannelReadStates.
     */
    data: ChannelReadStateCreateManyInput | ChannelReadStateCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelReadStateIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ChannelReadState update
   */
  export type ChannelReadStateUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelReadState
     */
    select?: ChannelReadStateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelReadStateInclude<ExtArgs> | null;
    /**
     * The data needed to update a ChannelReadState.
     */
    data: XOR<
      ChannelReadStateUpdateInput,
      ChannelReadStateUncheckedUpdateInput
    >;
    /**
     * Choose, which ChannelReadState to update.
     */
    where: ChannelReadStateWhereUniqueInput;
  };

  /**
   * ChannelReadState updateMany
   */
  export type ChannelReadStateUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ChannelReadStates.
     */
    data: XOR<
      ChannelReadStateUpdateManyMutationInput,
      ChannelReadStateUncheckedUpdateManyInput
    >;
    /**
     * Filter which ChannelReadStates to update
     */
    where?: ChannelReadStateWhereInput;
  };

  /**
   * ChannelReadState upsert
   */
  export type ChannelReadStateUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelReadState
     */
    select?: ChannelReadStateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelReadStateInclude<ExtArgs> | null;
    /**
     * The filter to search for the ChannelReadState to update in case it exists.
     */
    where: ChannelReadStateWhereUniqueInput;
    /**
     * In case the ChannelReadState found by the `where` argument doesn't exist, create a new ChannelReadState with this data.
     */
    create: XOR<
      ChannelReadStateCreateInput,
      ChannelReadStateUncheckedCreateInput
    >;
    /**
     * In case the ChannelReadState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      ChannelReadStateUpdateInput,
      ChannelReadStateUncheckedUpdateInput
    >;
  };

  /**
   * ChannelReadState delete
   */
  export type ChannelReadStateDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelReadState
     */
    select?: ChannelReadStateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelReadStateInclude<ExtArgs> | null;
    /**
     * Filter which ChannelReadState to delete.
     */
    where: ChannelReadStateWhereUniqueInput;
  };

  /**
   * ChannelReadState deleteMany
   */
  export type ChannelReadStateDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ChannelReadStates to delete
     */
    where?: ChannelReadStateWhereInput;
  };

  /**
   * ChannelReadState without action
   */
  export type ChannelReadStateDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChannelReadState
     */
    select?: ChannelReadStateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelReadStateInclude<ExtArgs> | null;
  };

  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null;
    _min: PasswordResetTokenMinAggregateOutputType | null;
    _max: PasswordResetTokenMaxAggregateOutputType | null;
  };

  export type PasswordResetTokenMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    token: string | null;
    expiresAt: Date | null;
    usedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    token: string | null;
    expiresAt: Date | null;
    usedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number;
    userId: number;
    token: number;
    expiresAt: number;
    usedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type PasswordResetTokenMinAggregateInputType = {
    id?: true;
    userId?: true;
    token?: true;
    expiresAt?: true;
    usedAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true;
    userId?: true;
    token?: true;
    expiresAt?: true;
    usedAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true;
    userId?: true;
    token?: true;
    expiresAt?: true;
    usedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type PasswordResetTokenAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?:
      | PasswordResetTokenOrderByWithRelationInput
      | PasswordResetTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PasswordResetTokens
     **/
    _count?: true | PasswordResetTokenCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PasswordResetTokenMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PasswordResetTokenMaxAggregateInputType;
  };

  export type GetPasswordResetTokenAggregateType<
    T extends PasswordResetTokenAggregateArgs,
  > = {
    [P in keyof T & keyof AggregatePasswordResetToken]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>;
  };

  export type PasswordResetTokenGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PasswordResetTokenWhereInput;
    orderBy?:
      | PasswordResetTokenOrderByWithAggregationInput
      | PasswordResetTokenOrderByWithAggregationInput[];
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum;
    having?: PasswordResetTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PasswordResetTokenCountAggregateInputType | true;
    _min?: PasswordResetTokenMinAggregateInputType;
    _max?: PasswordResetTokenMaxAggregateInputType;
  };

  export type PasswordResetTokenGroupByOutputType = {
    id: string;
    userId: string;
    token: string;
    expiresAt: Date;
    usedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PasswordResetTokenCountAggregateOutputType | null;
    _min: PasswordResetTokenMinAggregateOutputType | null;
    _max: PasswordResetTokenMaxAggregateOutputType | null;
  };

  type GetPasswordResetTokenGroupByPayload<
    T extends PasswordResetTokenGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof PasswordResetTokenGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
          : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>;
      }
    >
  >;

  export type PasswordResetTokenSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      token?: boolean;
      expiresAt?: boolean;
      usedAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['passwordResetToken']
  >;

  export type PasswordResetTokenSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      token?: boolean;
      expiresAt?: boolean;
      usedAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['passwordResetToken']
  >;

  export type PasswordResetTokenSelectScalar = {
    id?: boolean;
    userId?: boolean;
    token?: boolean;
    expiresAt?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type PasswordResetTokenInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PasswordResetTokenIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $PasswordResetTokenPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'PasswordResetToken';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        token: string;
        expiresAt: Date;
        usedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['passwordResetToken']
    >;
    composites: {};
  };

  type PasswordResetTokenGetPayload<
    S extends boolean | null | undefined | PasswordResetTokenDefaultArgs,
  > = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>;

  type PasswordResetTokenCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    PasswordResetTokenFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: PasswordResetTokenCountAggregateInputType | true;
  };

  export interface PasswordResetTokenDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'];
      meta: { name: 'PasswordResetToken' };
    };
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(
      args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>,
    ): Prisma__PasswordResetTokenClient<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PasswordResetTokenClient<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(
      args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>,
    ): Prisma__PasswordResetTokenClient<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PasswordResetTokenClient<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     *
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(
      args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'findMany'
      >
    >;

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     *
     */
    create<T extends PasswordResetTokenCreateArgs>(
      args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>,
    ): Prisma__PasswordResetTokenClient<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'create'
      >,
      never,
      ExtArgs
    >;

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(
      args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     *
     */
    delete<T extends PasswordResetTokenDeleteArgs>(
      args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>,
    ): Prisma__PasswordResetTokenClient<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'delete'
      >,
      never,
      ExtArgs
    >;

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PasswordResetTokenUpdateArgs>(
      args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>,
    ): Prisma__PasswordResetTokenClient<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'update'
      >,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(
      args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(
      args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(
      args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>,
    ): Prisma__PasswordResetTokenClient<
      $Result.GetResult<
        Prisma.$PasswordResetTokenPayload<ExtArgs>,
        T,
        'upsert'
      >,
      never,
      ExtArgs
    >;

    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
     **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              PasswordResetTokenCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetTokenAggregateArgs>(
      args: Subset<T, PasswordResetTokenAggregateArgs>,
    ): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>;

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetPasswordResetTokenGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PasswordResetToken model
     */
    readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<'PasswordResetToken', 'String'>;
    readonly userId: FieldRef<'PasswordResetToken', 'String'>;
    readonly token: FieldRef<'PasswordResetToken', 'String'>;
    readonly expiresAt: FieldRef<'PasswordResetToken', 'DateTime'>;
    readonly usedAt: FieldRef<'PasswordResetToken', 'DateTime'>;
    readonly createdAt: FieldRef<'PasswordResetToken', 'DateTime'>;
    readonly updatedAt: FieldRef<'PasswordResetToken', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput;
  };

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput;
  };

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?:
      | PasswordResetTokenOrderByWithRelationInput
      | PasswordResetTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?:
      | PasswordResetTokenScalarFieldEnum
      | PasswordResetTokenScalarFieldEnum[];
  };

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?:
      | PasswordResetTokenOrderByWithRelationInput
      | PasswordResetTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?:
      | PasswordResetTokenScalarFieldEnum
      | PasswordResetTokenScalarFieldEnum[];
  };

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?:
      | PasswordResetTokenOrderByWithRelationInput
      | PasswordResetTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number;
    distinct?:
      | PasswordResetTokenScalarFieldEnum
      | PasswordResetTokenScalarFieldEnum[];
  };

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<
      PasswordResetTokenCreateInput,
      PasswordResetTokenUncheckedCreateInput
    >;
  };

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data:
      | PasswordResetTokenCreateManyInput
      | PasswordResetTokenCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many PasswordResetTokens.
     */
    data:
      | PasswordResetTokenCreateManyInput
      | PasswordResetTokenCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<
      PasswordResetTokenUpdateInput,
      PasswordResetTokenUncheckedUpdateInput
    >;
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput;
  };

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<
      PasswordResetTokenUpdateManyMutationInput,
      PasswordResetTokenUncheckedUpdateManyInput
    >;
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput;
  };

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput;
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<
      PasswordResetTokenCreateInput,
      PasswordResetTokenUncheckedCreateInput
    >;
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      PasswordResetTokenUpdateInput,
      PasswordResetTokenUncheckedUpdateInput
    >;
  };

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput;
  };

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput;
  };

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    displayName: 'displayName';
    password: 'password';
    role: 'role';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const OrganizationInviteScalarFieldEnum: {
    id: 'id';
    token: 'token';
    email: 'email';
    organizationId: 'organizationId';
    invitedById: 'invitedById';
    role: 'role';
    status: 'status';
    expiresAt: 'expiresAt';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type OrganizationInviteScalarFieldEnum =
    (typeof OrganizationInviteScalarFieldEnum)[keyof typeof OrganizationInviteScalarFieldEnum];

  export const OrganizationMemberScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    organizationId: 'organizationId';
    role: 'role';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type OrganizationMemberScalarFieldEnum =
    (typeof OrganizationMemberScalarFieldEnum)[keyof typeof OrganizationMemberScalarFieldEnum];

  export const ChannelScalarFieldEnum: {
    id: 'id';
    organizationId: 'organizationId';
    name: 'name';
    description: 'description';
    isPrivate: 'isPrivate';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ChannelScalarFieldEnum =
    (typeof ChannelScalarFieldEnum)[keyof typeof ChannelScalarFieldEnum];

  export const ChannelMemberScalarFieldEnum: {
    id: 'id';
    channelId: 'channelId';
    userId: 'userId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ChannelMemberScalarFieldEnum =
    (typeof ChannelMemberScalarFieldEnum)[keyof typeof ChannelMemberScalarFieldEnum];

  export const MessageScalarFieldEnum: {
    id: 'id';
    content: 'content';
    channelId: 'channelId';
    authorId: 'authorId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type MessageScalarFieldEnum =
    (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];

  export const SessionScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    tokenHash: 'tokenHash';
    expiresAt: 'expiresAt';
    createdAt: 'createdAt';
  };

  export type SessionScalarFieldEnum =
    (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];

  export const AuditLogScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    organizationId: 'organizationId';
    action: 'action';
    metadata: 'metadata';
    createdAt: 'createdAt';
  };

  export type AuditLogScalarFieldEnum =
    (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];

  export const AiSummaryScalarFieldEnum: {
    id: 'id';
    organizationId: 'organizationId';
    channelId: 'channelId';
    summary: 'summary';
    rangeStart: 'rangeStart';
    rangeEnd: 'rangeEnd';
    createdAt: 'createdAt';
  };

  export type AiSummaryScalarFieldEnum =
    (typeof AiSummaryScalarFieldEnum)[keyof typeof AiSummaryScalarFieldEnum];

  export const AiReportScalarFieldEnum: {
    id: 'id';
    organizationId: 'organizationId';
    title: 'title';
    content: 'content';
    rangeStart: 'rangeStart';
    rangeEnd: 'rangeEnd';
    createdAt: 'createdAt';
  };

  export type AiReportScalarFieldEnum =
    (typeof AiReportScalarFieldEnum)[keyof typeof AiReportScalarFieldEnum];

  export const ChannelReadStateScalarFieldEnum: {
    id: 'id';
    channelId: 'channelId';
    userId: 'userId';
    lastReadAt: 'lastReadAt';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ChannelReadStateScalarFieldEnum =
    (typeof ChannelReadStateScalarFieldEnum)[keyof typeof ChannelReadStateScalarFieldEnum];

  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    token: 'token';
    expiresAt: 'expiresAt';
    usedAt: 'usedAt';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type PasswordResetTokenScalarFieldEnum =
    (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
  };

  export type NullableJsonNullValueInput =
    (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'GlobalRole'
   */
  export type EnumGlobalRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'GlobalRole'
  >;

  /**
   * Reference to a field of type 'GlobalRole[]'
   */
  export type ListEnumGlobalRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'GlobalRole[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'OrganizationRole'
   */
  export type EnumOrganizationRoleFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'OrganizationRole'>;

  /**
   * Reference to a field of type 'OrganizationRole[]'
   */
  export type ListEnumOrganizationRoleFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'OrganizationRole[]'>;

  /**
   * Reference to a field of type 'OrganizationInviteStatus'
   */
  export type EnumOrganizationInviteStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'OrganizationInviteStatus'>;

  /**
   * Reference to a field of type 'OrganizationInviteStatus[]'
   */
  export type ListEnumOrganizationInviteStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'OrganizationInviteStatus[]'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Json'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    displayName?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    role?: EnumGlobalRoleFilter<'User'> | $Enums.GlobalRole;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    organizations?: OrganizationMemberListRelationFilter;
    messages?: MessageListRelationFilter;
    sessions?: SessionListRelationFilter;
    channelMembers?: ChannelMemberListRelationFilter;
    auditLogs?: AuditLogListRelationFilter;
    sentInvites?: OrganizationInviteListRelationFilter;
    channelReadStates?: ChannelReadStateListRelationFilter;
    passwordResetTokens?: PasswordResetTokenListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    displayName?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    organizations?: OrganizationMemberOrderByRelationAggregateInput;
    messages?: MessageOrderByRelationAggregateInput;
    sessions?: SessionOrderByRelationAggregateInput;
    channelMembers?: ChannelMemberOrderByRelationAggregateInput;
    auditLogs?: AuditLogOrderByRelationAggregateInput;
    sentInvites?: OrganizationInviteOrderByRelationAggregateInput;
    channelReadStates?: ChannelReadStateOrderByRelationAggregateInput;
    passwordResetTokens?: PasswordResetTokenOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      displayName?: StringFilter<'User'> | string;
      password?: StringFilter<'User'> | string;
      role?: EnumGlobalRoleFilter<'User'> | $Enums.GlobalRole;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      organizations?: OrganizationMemberListRelationFilter;
      messages?: MessageListRelationFilter;
      sessions?: SessionListRelationFilter;
      channelMembers?: ChannelMemberListRelationFilter;
      auditLogs?: AuditLogListRelationFilter;
      sentInvites?: OrganizationInviteListRelationFilter;
      channelReadStates?: ChannelReadStateListRelationFilter;
      passwordResetTokens?: PasswordResetTokenListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    displayName?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    displayName?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    role?: EnumGlobalRoleWithAggregatesFilter<'User'> | $Enums.GlobalRole;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[];
    OR?: OrganizationWhereInput[];
    NOT?: OrganizationWhereInput | OrganizationWhereInput[];
    id?: StringFilter<'Organization'> | string;
    name?: StringFilter<'Organization'> | string;
    description?: StringNullableFilter<'Organization'> | string | null;
    createdAt?: DateTimeFilter<'Organization'> | Date | string;
    updatedAt?: DateTimeFilter<'Organization'> | Date | string;
    members?: OrganizationMemberListRelationFilter;
    channels?: ChannelListRelationFilter;
    auditLogs?: AuditLogListRelationFilter;
    aiSummaries?: AiSummaryListRelationFilter;
    aiReports?: AiReportListRelationFilter;
    invites?: OrganizationInviteListRelationFilter;
  };

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    members?: OrganizationMemberOrderByRelationAggregateInput;
    channels?: ChannelOrderByRelationAggregateInput;
    auditLogs?: AuditLogOrderByRelationAggregateInput;
    aiSummaries?: AiSummaryOrderByRelationAggregateInput;
    aiReports?: AiReportOrderByRelationAggregateInput;
    invites?: OrganizationInviteOrderByRelationAggregateInput;
  };

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: OrganizationWhereInput | OrganizationWhereInput[];
      OR?: OrganizationWhereInput[];
      NOT?: OrganizationWhereInput | OrganizationWhereInput[];
      name?: StringFilter<'Organization'> | string;
      description?: StringNullableFilter<'Organization'> | string | null;
      createdAt?: DateTimeFilter<'Organization'> | Date | string;
      updatedAt?: DateTimeFilter<'Organization'> | Date | string;
      members?: OrganizationMemberListRelationFilter;
      channels?: ChannelListRelationFilter;
      auditLogs?: AuditLogListRelationFilter;
      aiSummaries?: AiSummaryListRelationFilter;
      aiReports?: AiReportListRelationFilter;
      invites?: OrganizationInviteListRelationFilter;
    },
    'id'
  >;

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: OrganizationCountOrderByAggregateInput;
    _max?: OrganizationMaxOrderByAggregateInput;
    _min?: OrganizationMinOrderByAggregateInput;
  };

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?:
      | OrganizationScalarWhereWithAggregatesInput
      | OrganizationScalarWhereWithAggregatesInput[];
    OR?: OrganizationScalarWhereWithAggregatesInput[];
    NOT?:
      | OrganizationScalarWhereWithAggregatesInput
      | OrganizationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Organization'> | string;
    name?: StringWithAggregatesFilter<'Organization'> | string;
    description?:
      | StringNullableWithAggregatesFilter<'Organization'>
      | string
      | null;
    createdAt?: DateTimeWithAggregatesFilter<'Organization'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Organization'> | Date | string;
  };

  export type OrganizationInviteWhereInput = {
    AND?: OrganizationInviteWhereInput | OrganizationInviteWhereInput[];
    OR?: OrganizationInviteWhereInput[];
    NOT?: OrganizationInviteWhereInput | OrganizationInviteWhereInput[];
    id?: StringFilter<'OrganizationInvite'> | string;
    token?: StringFilter<'OrganizationInvite'> | string;
    email?: StringFilter<'OrganizationInvite'> | string;
    organizationId?: StringFilter<'OrganizationInvite'> | string;
    invitedById?: StringFilter<'OrganizationInvite'> | string;
    role?:
      | EnumOrganizationRoleFilter<'OrganizationInvite'>
      | $Enums.OrganizationRole;
    status?:
      | EnumOrganizationInviteStatusFilter<'OrganizationInvite'>
      | $Enums.OrganizationInviteStatus;
    expiresAt?: DateTimeFilter<'OrganizationInvite'> | Date | string;
    createdAt?: DateTimeFilter<'OrganizationInvite'> | Date | string;
    updatedAt?: DateTimeFilter<'OrganizationInvite'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>;
    invitedBy?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type OrganizationInviteOrderByWithRelationInput = {
    id?: SortOrder;
    token?: SortOrder;
    email?: SortOrder;
    organizationId?: SortOrder;
    invitedById?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    organization?: OrganizationOrderByWithRelationInput;
    invitedBy?: UserOrderByWithRelationInput;
  };

  export type OrganizationInviteWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      token?: string;
      AND?: OrganizationInviteWhereInput | OrganizationInviteWhereInput[];
      OR?: OrganizationInviteWhereInput[];
      NOT?: OrganizationInviteWhereInput | OrganizationInviteWhereInput[];
      email?: StringFilter<'OrganizationInvite'> | string;
      organizationId?: StringFilter<'OrganizationInvite'> | string;
      invitedById?: StringFilter<'OrganizationInvite'> | string;
      role?:
        | EnumOrganizationRoleFilter<'OrganizationInvite'>
        | $Enums.OrganizationRole;
      status?:
        | EnumOrganizationInviteStatusFilter<'OrganizationInvite'>
        | $Enums.OrganizationInviteStatus;
      expiresAt?: DateTimeFilter<'OrganizationInvite'> | Date | string;
      createdAt?: DateTimeFilter<'OrganizationInvite'> | Date | string;
      updatedAt?: DateTimeFilter<'OrganizationInvite'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>;
      invitedBy?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id' | 'token'
  >;

  export type OrganizationInviteOrderByWithAggregationInput = {
    id?: SortOrder;
    token?: SortOrder;
    email?: SortOrder;
    organizationId?: SortOrder;
    invitedById?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: OrganizationInviteCountOrderByAggregateInput;
    _max?: OrganizationInviteMaxOrderByAggregateInput;
    _min?: OrganizationInviteMinOrderByAggregateInput;
  };

  export type OrganizationInviteScalarWhereWithAggregatesInput = {
    AND?:
      | OrganizationInviteScalarWhereWithAggregatesInput
      | OrganizationInviteScalarWhereWithAggregatesInput[];
    OR?: OrganizationInviteScalarWhereWithAggregatesInput[];
    NOT?:
      | OrganizationInviteScalarWhereWithAggregatesInput
      | OrganizationInviteScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'OrganizationInvite'> | string;
    token?: StringWithAggregatesFilter<'OrganizationInvite'> | string;
    email?: StringWithAggregatesFilter<'OrganizationInvite'> | string;
    organizationId?: StringWithAggregatesFilter<'OrganizationInvite'> | string;
    invitedById?: StringWithAggregatesFilter<'OrganizationInvite'> | string;
    role?:
      | EnumOrganizationRoleWithAggregatesFilter<'OrganizationInvite'>
      | $Enums.OrganizationRole;
    status?:
      | EnumOrganizationInviteStatusWithAggregatesFilter<'OrganizationInvite'>
      | $Enums.OrganizationInviteStatus;
    expiresAt?:
      | DateTimeWithAggregatesFilter<'OrganizationInvite'>
      | Date
      | string;
    createdAt?:
      | DateTimeWithAggregatesFilter<'OrganizationInvite'>
      | Date
      | string;
    updatedAt?:
      | DateTimeWithAggregatesFilter<'OrganizationInvite'>
      | Date
      | string;
  };

  export type OrganizationMemberWhereInput = {
    AND?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[];
    OR?: OrganizationMemberWhereInput[];
    NOT?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[];
    id?: StringFilter<'OrganizationMember'> | string;
    userId?: StringFilter<'OrganizationMember'> | string;
    organizationId?: StringFilter<'OrganizationMember'> | string;
    role?:
      | EnumOrganizationRoleFilter<'OrganizationMember'>
      | $Enums.OrganizationRole;
    createdAt?: DateTimeFilter<'OrganizationMember'> | Date | string;
    updatedAt?: DateTimeFilter<'OrganizationMember'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>;
    user?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type OrganizationMemberOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    organization?: OrganizationOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type OrganizationMemberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId_organizationId?: OrganizationMemberUserIdOrganizationIdCompoundUniqueInput;
      AND?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[];
      OR?: OrganizationMemberWhereInput[];
      NOT?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[];
      userId?: StringFilter<'OrganizationMember'> | string;
      organizationId?: StringFilter<'OrganizationMember'> | string;
      role?:
        | EnumOrganizationRoleFilter<'OrganizationMember'>
        | $Enums.OrganizationRole;
      createdAt?: DateTimeFilter<'OrganizationMember'> | Date | string;
      updatedAt?: DateTimeFilter<'OrganizationMember'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>;
      user?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id' | 'userId_organizationId'
  >;

  export type OrganizationMemberOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: OrganizationMemberCountOrderByAggregateInput;
    _max?: OrganizationMemberMaxOrderByAggregateInput;
    _min?: OrganizationMemberMinOrderByAggregateInput;
  };

  export type OrganizationMemberScalarWhereWithAggregatesInput = {
    AND?:
      | OrganizationMemberScalarWhereWithAggregatesInput
      | OrganizationMemberScalarWhereWithAggregatesInput[];
    OR?: OrganizationMemberScalarWhereWithAggregatesInput[];
    NOT?:
      | OrganizationMemberScalarWhereWithAggregatesInput
      | OrganizationMemberScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'OrganizationMember'> | string;
    userId?: StringWithAggregatesFilter<'OrganizationMember'> | string;
    organizationId?: StringWithAggregatesFilter<'OrganizationMember'> | string;
    role?:
      | EnumOrganizationRoleWithAggregatesFilter<'OrganizationMember'>
      | $Enums.OrganizationRole;
    createdAt?:
      | DateTimeWithAggregatesFilter<'OrganizationMember'>
      | Date
      | string;
    updatedAt?:
      | DateTimeWithAggregatesFilter<'OrganizationMember'>
      | Date
      | string;
  };

  export type ChannelWhereInput = {
    AND?: ChannelWhereInput | ChannelWhereInput[];
    OR?: ChannelWhereInput[];
    NOT?: ChannelWhereInput | ChannelWhereInput[];
    id?: StringFilter<'Channel'> | string;
    organizationId?: StringFilter<'Channel'> | string;
    name?: StringFilter<'Channel'> | string;
    description?: StringNullableFilter<'Channel'> | string | null;
    isPrivate?: BoolFilter<'Channel'> | boolean;
    createdAt?: DateTimeFilter<'Channel'> | Date | string;
    updatedAt?: DateTimeFilter<'Channel'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>;
    members?: ChannelMemberListRelationFilter;
    messages?: MessageListRelationFilter;
    aiSummaries?: AiSummaryListRelationFilter;
    readStates?: ChannelReadStateListRelationFilter;
  };

  export type ChannelOrderByWithRelationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    isPrivate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    organization?: OrganizationOrderByWithRelationInput;
    members?: ChannelMemberOrderByRelationAggregateInput;
    messages?: MessageOrderByRelationAggregateInput;
    aiSummaries?: AiSummaryOrderByRelationAggregateInput;
    readStates?: ChannelReadStateOrderByRelationAggregateInput;
  };

  export type ChannelWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ChannelWhereInput | ChannelWhereInput[];
      OR?: ChannelWhereInput[];
      NOT?: ChannelWhereInput | ChannelWhereInput[];
      organizationId?: StringFilter<'Channel'> | string;
      name?: StringFilter<'Channel'> | string;
      description?: StringNullableFilter<'Channel'> | string | null;
      isPrivate?: BoolFilter<'Channel'> | boolean;
      createdAt?: DateTimeFilter<'Channel'> | Date | string;
      updatedAt?: DateTimeFilter<'Channel'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>;
      members?: ChannelMemberListRelationFilter;
      messages?: MessageListRelationFilter;
      aiSummaries?: AiSummaryListRelationFilter;
      readStates?: ChannelReadStateListRelationFilter;
    },
    'id'
  >;

  export type ChannelOrderByWithAggregationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    isPrivate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ChannelCountOrderByAggregateInput;
    _max?: ChannelMaxOrderByAggregateInput;
    _min?: ChannelMinOrderByAggregateInput;
  };

  export type ChannelScalarWhereWithAggregatesInput = {
    AND?:
      | ChannelScalarWhereWithAggregatesInput
      | ChannelScalarWhereWithAggregatesInput[];
    OR?: ChannelScalarWhereWithAggregatesInput[];
    NOT?:
      | ChannelScalarWhereWithAggregatesInput
      | ChannelScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Channel'> | string;
    organizationId?: StringWithAggregatesFilter<'Channel'> | string;
    name?: StringWithAggregatesFilter<'Channel'> | string;
    description?: StringNullableWithAggregatesFilter<'Channel'> | string | null;
    isPrivate?: BoolWithAggregatesFilter<'Channel'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'Channel'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Channel'> | Date | string;
  };

  export type ChannelMemberWhereInput = {
    AND?: ChannelMemberWhereInput | ChannelMemberWhereInput[];
    OR?: ChannelMemberWhereInput[];
    NOT?: ChannelMemberWhereInput | ChannelMemberWhereInput[];
    id?: StringFilter<'ChannelMember'> | string;
    channelId?: StringFilter<'ChannelMember'> | string;
    userId?: StringFilter<'ChannelMember'> | string;
    createdAt?: DateTimeFilter<'ChannelMember'> | Date | string;
    updatedAt?: DateTimeFilter<'ChannelMember'> | Date | string;
    channel?: XOR<ChannelRelationFilter, ChannelWhereInput>;
    user?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type ChannelMemberOrderByWithRelationInput = {
    id?: SortOrder;
    channelId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    channel?: ChannelOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type ChannelMemberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      channelId_userId?: ChannelMemberChannelIdUserIdCompoundUniqueInput;
      AND?: ChannelMemberWhereInput | ChannelMemberWhereInput[];
      OR?: ChannelMemberWhereInput[];
      NOT?: ChannelMemberWhereInput | ChannelMemberWhereInput[];
      channelId?: StringFilter<'ChannelMember'> | string;
      userId?: StringFilter<'ChannelMember'> | string;
      createdAt?: DateTimeFilter<'ChannelMember'> | Date | string;
      updatedAt?: DateTimeFilter<'ChannelMember'> | Date | string;
      channel?: XOR<ChannelRelationFilter, ChannelWhereInput>;
      user?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id' | 'channelId_userId'
  >;

  export type ChannelMemberOrderByWithAggregationInput = {
    id?: SortOrder;
    channelId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ChannelMemberCountOrderByAggregateInput;
    _max?: ChannelMemberMaxOrderByAggregateInput;
    _min?: ChannelMemberMinOrderByAggregateInput;
  };

  export type ChannelMemberScalarWhereWithAggregatesInput = {
    AND?:
      | ChannelMemberScalarWhereWithAggregatesInput
      | ChannelMemberScalarWhereWithAggregatesInput[];
    OR?: ChannelMemberScalarWhereWithAggregatesInput[];
    NOT?:
      | ChannelMemberScalarWhereWithAggregatesInput
      | ChannelMemberScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'ChannelMember'> | string;
    channelId?: StringWithAggregatesFilter<'ChannelMember'> | string;
    userId?: StringWithAggregatesFilter<'ChannelMember'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'ChannelMember'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'ChannelMember'> | Date | string;
  };

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[];
    OR?: MessageWhereInput[];
    NOT?: MessageWhereInput | MessageWhereInput[];
    id?: StringFilter<'Message'> | string;
    content?: StringFilter<'Message'> | string;
    channelId?: StringFilter<'Message'> | string;
    authorId?: StringFilter<'Message'> | string;
    createdAt?: DateTimeFilter<'Message'> | Date | string;
    updatedAt?: DateTimeFilter<'Message'> | Date | string;
    channel?: XOR<ChannelRelationFilter, ChannelWhereInput>;
    author?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder;
    content?: SortOrder;
    channelId?: SortOrder;
    authorId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    channel?: ChannelOrderByWithRelationInput;
    author?: UserOrderByWithRelationInput;
  };

  export type MessageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: MessageWhereInput | MessageWhereInput[];
      OR?: MessageWhereInput[];
      NOT?: MessageWhereInput | MessageWhereInput[];
      content?: StringFilter<'Message'> | string;
      channelId?: StringFilter<'Message'> | string;
      authorId?: StringFilter<'Message'> | string;
      createdAt?: DateTimeFilter<'Message'> | Date | string;
      updatedAt?: DateTimeFilter<'Message'> | Date | string;
      channel?: XOR<ChannelRelationFilter, ChannelWhereInput>;
      author?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder;
    content?: SortOrder;
    channelId?: SortOrder;
    authorId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: MessageCountOrderByAggregateInput;
    _max?: MessageMaxOrderByAggregateInput;
    _min?: MessageMinOrderByAggregateInput;
  };

  export type MessageScalarWhereWithAggregatesInput = {
    AND?:
      | MessageScalarWhereWithAggregatesInput
      | MessageScalarWhereWithAggregatesInput[];
    OR?: MessageScalarWhereWithAggregatesInput[];
    NOT?:
      | MessageScalarWhereWithAggregatesInput
      | MessageScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Message'> | string;
    content?: StringWithAggregatesFilter<'Message'> | string;
    channelId?: StringWithAggregatesFilter<'Message'> | string;
    authorId?: StringWithAggregatesFilter<'Message'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Message'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Message'> | Date | string;
  };

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[];
    OR?: SessionWhereInput[];
    NOT?: SessionWhereInput | SessionWhereInput[];
    id?: StringFilter<'Session'> | string;
    userId?: StringFilter<'Session'> | string;
    tokenHash?: StringFilter<'Session'> | string;
    expiresAt?: DateTimeFilter<'Session'> | Date | string;
    createdAt?: DateTimeFilter<'Session'> | Date | string;
    user?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type SessionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: SessionWhereInput | SessionWhereInput[];
      OR?: SessionWhereInput[];
      NOT?: SessionWhereInput | SessionWhereInput[];
      userId?: StringFilter<'Session'> | string;
      tokenHash?: StringFilter<'Session'> | string;
      expiresAt?: DateTimeFilter<'Session'> | Date | string;
      createdAt?: DateTimeFilter<'Session'> | Date | string;
      user?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    _count?: SessionCountOrderByAggregateInput;
    _max?: SessionMaxOrderByAggregateInput;
    _min?: SessionMinOrderByAggregateInput;
  };

  export type SessionScalarWhereWithAggregatesInput = {
    AND?:
      | SessionScalarWhereWithAggregatesInput
      | SessionScalarWhereWithAggregatesInput[];
    OR?: SessionScalarWhereWithAggregatesInput[];
    NOT?:
      | SessionScalarWhereWithAggregatesInput
      | SessionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Session'> | string;
    userId?: StringWithAggregatesFilter<'Session'> | string;
    tokenHash?: StringWithAggregatesFilter<'Session'> | string;
    expiresAt?: DateTimeWithAggregatesFilter<'Session'> | Date | string;
    createdAt?: DateTimeWithAggregatesFilter<'Session'> | Date | string;
  };

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[];
    OR?: AuditLogWhereInput[];
    NOT?: AuditLogWhereInput | AuditLogWhereInput[];
    id?: StringFilter<'AuditLog'> | string;
    userId?: StringNullableFilter<'AuditLog'> | string | null;
    organizationId?: StringNullableFilter<'AuditLog'> | string | null;
    action?: StringFilter<'AuditLog'> | string;
    metadata?: JsonNullableFilter<'AuditLog'>;
    createdAt?: DateTimeFilter<'AuditLog'> | Date | string;
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null;
    organization?: XOR<
      OrganizationNullableRelationFilter,
      OrganizationWhereInput
    > | null;
  };

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrderInput | SortOrder;
    organizationId?: SortOrderInput | SortOrder;
    action?: SortOrder;
    metadata?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    organization?: OrganizationOrderByWithRelationInput;
  };

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AuditLogWhereInput | AuditLogWhereInput[];
      OR?: AuditLogWhereInput[];
      NOT?: AuditLogWhereInput | AuditLogWhereInput[];
      userId?: StringNullableFilter<'AuditLog'> | string | null;
      organizationId?: StringNullableFilter<'AuditLog'> | string | null;
      action?: StringFilter<'AuditLog'> | string;
      metadata?: JsonNullableFilter<'AuditLog'>;
      createdAt?: DateTimeFilter<'AuditLog'> | Date | string;
      user?: XOR<UserNullableRelationFilter, UserWhereInput> | null;
      organization?: XOR<
        OrganizationNullableRelationFilter,
        OrganizationWhereInput
      > | null;
    },
    'id'
  >;

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrderInput | SortOrder;
    organizationId?: SortOrderInput | SortOrder;
    action?: SortOrder;
    metadata?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    _count?: AuditLogCountOrderByAggregateInput;
    _max?: AuditLogMaxOrderByAggregateInput;
    _min?: AuditLogMinOrderByAggregateInput;
  };

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?:
      | AuditLogScalarWhereWithAggregatesInput
      | AuditLogScalarWhereWithAggregatesInput[];
    OR?: AuditLogScalarWhereWithAggregatesInput[];
    NOT?:
      | AuditLogScalarWhereWithAggregatesInput
      | AuditLogScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'AuditLog'> | string;
    userId?: StringNullableWithAggregatesFilter<'AuditLog'> | string | null;
    organizationId?:
      | StringNullableWithAggregatesFilter<'AuditLog'>
      | string
      | null;
    action?: StringWithAggregatesFilter<'AuditLog'> | string;
    metadata?: JsonNullableWithAggregatesFilter<'AuditLog'>;
    createdAt?: DateTimeWithAggregatesFilter<'AuditLog'> | Date | string;
  };

  export type AiSummaryWhereInput = {
    AND?: AiSummaryWhereInput | AiSummaryWhereInput[];
    OR?: AiSummaryWhereInput[];
    NOT?: AiSummaryWhereInput | AiSummaryWhereInput[];
    id?: StringFilter<'AiSummary'> | string;
    organizationId?: StringFilter<'AiSummary'> | string;
    channelId?: StringNullableFilter<'AiSummary'> | string | null;
    summary?: StringFilter<'AiSummary'> | string;
    rangeStart?: DateTimeNullableFilter<'AiSummary'> | Date | string | null;
    rangeEnd?: DateTimeNullableFilter<'AiSummary'> | Date | string | null;
    createdAt?: DateTimeFilter<'AiSummary'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>;
    channel?: XOR<ChannelNullableRelationFilter, ChannelWhereInput> | null;
  };

  export type AiSummaryOrderByWithRelationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    channelId?: SortOrderInput | SortOrder;
    summary?: SortOrder;
    rangeStart?: SortOrderInput | SortOrder;
    rangeEnd?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    organization?: OrganizationOrderByWithRelationInput;
    channel?: ChannelOrderByWithRelationInput;
  };

  export type AiSummaryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AiSummaryWhereInput | AiSummaryWhereInput[];
      OR?: AiSummaryWhereInput[];
      NOT?: AiSummaryWhereInput | AiSummaryWhereInput[];
      organizationId?: StringFilter<'AiSummary'> | string;
      channelId?: StringNullableFilter<'AiSummary'> | string | null;
      summary?: StringFilter<'AiSummary'> | string;
      rangeStart?: DateTimeNullableFilter<'AiSummary'> | Date | string | null;
      rangeEnd?: DateTimeNullableFilter<'AiSummary'> | Date | string | null;
      createdAt?: DateTimeFilter<'AiSummary'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>;
      channel?: XOR<ChannelNullableRelationFilter, ChannelWhereInput> | null;
    },
    'id'
  >;

  export type AiSummaryOrderByWithAggregationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    channelId?: SortOrderInput | SortOrder;
    summary?: SortOrder;
    rangeStart?: SortOrderInput | SortOrder;
    rangeEnd?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    _count?: AiSummaryCountOrderByAggregateInput;
    _max?: AiSummaryMaxOrderByAggregateInput;
    _min?: AiSummaryMinOrderByAggregateInput;
  };

  export type AiSummaryScalarWhereWithAggregatesInput = {
    AND?:
      | AiSummaryScalarWhereWithAggregatesInput
      | AiSummaryScalarWhereWithAggregatesInput[];
    OR?: AiSummaryScalarWhereWithAggregatesInput[];
    NOT?:
      | AiSummaryScalarWhereWithAggregatesInput
      | AiSummaryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'AiSummary'> | string;
    organizationId?: StringWithAggregatesFilter<'AiSummary'> | string;
    channelId?: StringNullableWithAggregatesFilter<'AiSummary'> | string | null;
    summary?: StringWithAggregatesFilter<'AiSummary'> | string;
    rangeStart?:
      | DateTimeNullableWithAggregatesFilter<'AiSummary'>
      | Date
      | string
      | null;
    rangeEnd?:
      | DateTimeNullableWithAggregatesFilter<'AiSummary'>
      | Date
      | string
      | null;
    createdAt?: DateTimeWithAggregatesFilter<'AiSummary'> | Date | string;
  };

  export type AiReportWhereInput = {
    AND?: AiReportWhereInput | AiReportWhereInput[];
    OR?: AiReportWhereInput[];
    NOT?: AiReportWhereInput | AiReportWhereInput[];
    id?: StringFilter<'AiReport'> | string;
    organizationId?: StringFilter<'AiReport'> | string;
    title?: StringFilter<'AiReport'> | string;
    content?: StringFilter<'AiReport'> | string;
    rangeStart?: DateTimeNullableFilter<'AiReport'> | Date | string | null;
    rangeEnd?: DateTimeNullableFilter<'AiReport'> | Date | string | null;
    createdAt?: DateTimeFilter<'AiReport'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>;
  };

  export type AiReportOrderByWithRelationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    rangeStart?: SortOrderInput | SortOrder;
    rangeEnd?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    organization?: OrganizationOrderByWithRelationInput;
  };

  export type AiReportWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AiReportWhereInput | AiReportWhereInput[];
      OR?: AiReportWhereInput[];
      NOT?: AiReportWhereInput | AiReportWhereInput[];
      organizationId?: StringFilter<'AiReport'> | string;
      title?: StringFilter<'AiReport'> | string;
      content?: StringFilter<'AiReport'> | string;
      rangeStart?: DateTimeNullableFilter<'AiReport'> | Date | string | null;
      rangeEnd?: DateTimeNullableFilter<'AiReport'> | Date | string | null;
      createdAt?: DateTimeFilter<'AiReport'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>;
    },
    'id'
  >;

  export type AiReportOrderByWithAggregationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    rangeStart?: SortOrderInput | SortOrder;
    rangeEnd?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    _count?: AiReportCountOrderByAggregateInput;
    _max?: AiReportMaxOrderByAggregateInput;
    _min?: AiReportMinOrderByAggregateInput;
  };

  export type AiReportScalarWhereWithAggregatesInput = {
    AND?:
      | AiReportScalarWhereWithAggregatesInput
      | AiReportScalarWhereWithAggregatesInput[];
    OR?: AiReportScalarWhereWithAggregatesInput[];
    NOT?:
      | AiReportScalarWhereWithAggregatesInput
      | AiReportScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'AiReport'> | string;
    organizationId?: StringWithAggregatesFilter<'AiReport'> | string;
    title?: StringWithAggregatesFilter<'AiReport'> | string;
    content?: StringWithAggregatesFilter<'AiReport'> | string;
    rangeStart?:
      | DateTimeNullableWithAggregatesFilter<'AiReport'>
      | Date
      | string
      | null;
    rangeEnd?:
      | DateTimeNullableWithAggregatesFilter<'AiReport'>
      | Date
      | string
      | null;
    createdAt?: DateTimeWithAggregatesFilter<'AiReport'> | Date | string;
  };

  export type ChannelReadStateWhereInput = {
    AND?: ChannelReadStateWhereInput | ChannelReadStateWhereInput[];
    OR?: ChannelReadStateWhereInput[];
    NOT?: ChannelReadStateWhereInput | ChannelReadStateWhereInput[];
    id?: StringFilter<'ChannelReadState'> | string;
    channelId?: StringFilter<'ChannelReadState'> | string;
    userId?: StringFilter<'ChannelReadState'> | string;
    lastReadAt?: DateTimeFilter<'ChannelReadState'> | Date | string;
    createdAt?: DateTimeFilter<'ChannelReadState'> | Date | string;
    updatedAt?: DateTimeFilter<'ChannelReadState'> | Date | string;
    channel?: XOR<ChannelRelationFilter, ChannelWhereInput>;
    user?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type ChannelReadStateOrderByWithRelationInput = {
    id?: SortOrder;
    channelId?: SortOrder;
    userId?: SortOrder;
    lastReadAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    channel?: ChannelOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type ChannelReadStateWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      channelId_userId?: ChannelReadStateChannelIdUserIdCompoundUniqueInput;
      AND?: ChannelReadStateWhereInput | ChannelReadStateWhereInput[];
      OR?: ChannelReadStateWhereInput[];
      NOT?: ChannelReadStateWhereInput | ChannelReadStateWhereInput[];
      channelId?: StringFilter<'ChannelReadState'> | string;
      userId?: StringFilter<'ChannelReadState'> | string;
      lastReadAt?: DateTimeFilter<'ChannelReadState'> | Date | string;
      createdAt?: DateTimeFilter<'ChannelReadState'> | Date | string;
      updatedAt?: DateTimeFilter<'ChannelReadState'> | Date | string;
      channel?: XOR<ChannelRelationFilter, ChannelWhereInput>;
      user?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id' | 'channelId_userId'
  >;

  export type ChannelReadStateOrderByWithAggregationInput = {
    id?: SortOrder;
    channelId?: SortOrder;
    userId?: SortOrder;
    lastReadAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ChannelReadStateCountOrderByAggregateInput;
    _max?: ChannelReadStateMaxOrderByAggregateInput;
    _min?: ChannelReadStateMinOrderByAggregateInput;
  };

  export type ChannelReadStateScalarWhereWithAggregatesInput = {
    AND?:
      | ChannelReadStateScalarWhereWithAggregatesInput
      | ChannelReadStateScalarWhereWithAggregatesInput[];
    OR?: ChannelReadStateScalarWhereWithAggregatesInput[];
    NOT?:
      | ChannelReadStateScalarWhereWithAggregatesInput
      | ChannelReadStateScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'ChannelReadState'> | string;
    channelId?: StringWithAggregatesFilter<'ChannelReadState'> | string;
    userId?: StringWithAggregatesFilter<'ChannelReadState'> | string;
    lastReadAt?:
      | DateTimeWithAggregatesFilter<'ChannelReadState'>
      | Date
      | string;
    createdAt?:
      | DateTimeWithAggregatesFilter<'ChannelReadState'>
      | Date
      | string;
    updatedAt?:
      | DateTimeWithAggregatesFilter<'ChannelReadState'>
      | Date
      | string;
  };

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[];
    OR?: PasswordResetTokenWhereInput[];
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[];
    id?: StringFilter<'PasswordResetToken'> | string;
    userId?: StringFilter<'PasswordResetToken'> | string;
    token?: StringFilter<'PasswordResetToken'> | string;
    expiresAt?: DateTimeFilter<'PasswordResetToken'> | Date | string;
    usedAt?:
      | DateTimeNullableFilter<'PasswordResetToken'>
      | Date
      | string
      | null;
    createdAt?: DateTimeFilter<'PasswordResetToken'> | Date | string;
    updatedAt?: DateTimeFilter<'PasswordResetToken'> | Date | string;
    user?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    expiresAt?: SortOrder;
    usedAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      token?: string;
      AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[];
      OR?: PasswordResetTokenWhereInput[];
      NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[];
      userId?: StringFilter<'PasswordResetToken'> | string;
      expiresAt?: DateTimeFilter<'PasswordResetToken'> | Date | string;
      usedAt?:
        | DateTimeNullableFilter<'PasswordResetToken'>
        | Date
        | string
        | null;
      createdAt?: DateTimeFilter<'PasswordResetToken'> | Date | string;
      updatedAt?: DateTimeFilter<'PasswordResetToken'> | Date | string;
      user?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id' | 'token'
  >;

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    expiresAt?: SortOrder;
    usedAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: PasswordResetTokenCountOrderByAggregateInput;
    _max?: PasswordResetTokenMaxOrderByAggregateInput;
    _min?: PasswordResetTokenMinOrderByAggregateInput;
  };

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?:
      | PasswordResetTokenScalarWhereWithAggregatesInput
      | PasswordResetTokenScalarWhereWithAggregatesInput[];
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[];
    NOT?:
      | PasswordResetTokenScalarWhereWithAggregatesInput
      | PasswordResetTokenScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'PasswordResetToken'> | string;
    userId?: StringWithAggregatesFilter<'PasswordResetToken'> | string;
    token?: StringWithAggregatesFilter<'PasswordResetToken'> | string;
    expiresAt?:
      | DateTimeWithAggregatesFilter<'PasswordResetToken'>
      | Date
      | string;
    usedAt?:
      | DateTimeNullableWithAggregatesFilter<'PasswordResetToken'>
      | Date
      | string
      | null;
    createdAt?:
      | DateTimeWithAggregatesFilter<'PasswordResetToken'>
      | Date
      | string;
    updatedAt?:
      | DateTimeWithAggregatesFilter<'PasswordResetToken'>
      | Date
      | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizations?: OrganizationMemberCreateNestedManyWithoutUserInput;
    messages?: MessageCreateNestedManyWithoutAuthorInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    channelMembers?: ChannelMemberCreateNestedManyWithoutUserInput;
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput;
    sentInvites?: OrganizationInviteCreateNestedManyWithoutInvitedByInput;
    channelReadStates?: ChannelReadStateCreateNestedManyWithoutUserInput;
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizations?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput;
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    channelMembers?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput;
    sentInvites?: OrganizationInviteUncheckedCreateNestedManyWithoutInvitedByInput;
    channelReadStates?: ChannelReadStateUncheckedCreateNestedManyWithoutUserInput;
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizations?: OrganizationMemberUpdateManyWithoutUserNestedInput;
    messages?: MessageUpdateManyWithoutAuthorNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    channelMembers?: ChannelMemberUpdateManyWithoutUserNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput;
    sentInvites?: OrganizationInviteUpdateManyWithoutInvitedByNestedInput;
    channelReadStates?: ChannelReadStateUpdateManyWithoutUserNestedInput;
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizations?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    channelMembers?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    sentInvites?: OrganizationInviteUncheckedUpdateManyWithoutInvitedByNestedInput;
    channelReadStates?: ChannelReadStateUncheckedUpdateManyWithoutUserNestedInput;
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput;
    channels?: ChannelCreateNestedManyWithoutOrganizationInput;
    auditLogs?: AuditLogCreateNestedManyWithoutOrganizationInput;
    aiSummaries?: AiSummaryCreateNestedManyWithoutOrganizationInput;
    aiReports?: AiReportCreateNestedManyWithoutOrganizationInput;
    invites?: OrganizationInviteCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    channels?: ChannelUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
    aiSummaries?: AiSummaryUncheckedCreateNestedManyWithoutOrganizationInput;
    aiReports?: AiReportUncheckedCreateNestedManyWithoutOrganizationInput;
    invites?: OrganizationInviteUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput;
    channels?: ChannelUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutOrganizationNestedInput;
    aiSummaries?: AiSummaryUpdateManyWithoutOrganizationNestedInput;
    aiReports?: AiReportUpdateManyWithoutOrganizationNestedInput;
    invites?: OrganizationInviteUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    channels?: ChannelUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
    aiSummaries?: AiSummaryUncheckedUpdateManyWithoutOrganizationNestedInput;
    aiReports?: AiReportUncheckedUpdateManyWithoutOrganizationNestedInput;
    invites?: OrganizationInviteUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationInviteCreateInput = {
    id?: string;
    token: string;
    email: string;
    role?: $Enums.OrganizationRole;
    status?: $Enums.OrganizationInviteStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutInvitesInput;
    invitedBy: UserCreateNestedOneWithoutSentInvitesInput;
  };

  export type OrganizationInviteUncheckedCreateInput = {
    id?: string;
    token: string;
    email: string;
    organizationId: string;
    invitedById: string;
    role?: $Enums.OrganizationRole;
    status?: $Enums.OrganizationInviteStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizationInviteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    status?:
      | EnumOrganizationInviteStatusFieldUpdateOperationsInput
      | $Enums.OrganizationInviteStatus;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutInvitesNestedInput;
    invitedBy?: UserUpdateOneRequiredWithoutSentInvitesNestedInput;
  };

  export type OrganizationInviteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    invitedById?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    status?:
      | EnumOrganizationInviteStatusFieldUpdateOperationsInput
      | $Enums.OrganizationInviteStatus;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationInviteCreateManyInput = {
    id?: string;
    token: string;
    email: string;
    organizationId: string;
    invitedById: string;
    role?: $Enums.OrganizationRole;
    status?: $Enums.OrganizationInviteStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizationInviteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    status?:
      | EnumOrganizationInviteStatusFieldUpdateOperationsInput
      | $Enums.OrganizationInviteStatus;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationInviteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    invitedById?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    status?:
      | EnumOrganizationInviteStatusFieldUpdateOperationsInput
      | $Enums.OrganizationInviteStatus;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationMemberCreateInput = {
    id?: string;
    role?: $Enums.OrganizationRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutMembersInput;
    user: UserCreateNestedOneWithoutOrganizationsInput;
  };

  export type OrganizationMemberUncheckedCreateInput = {
    id?: string;
    userId: string;
    organizationId: string;
    role?: $Enums.OrganizationRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizationMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutMembersNestedInput;
    user?: UserUpdateOneRequiredWithoutOrganizationsNestedInput;
  };

  export type OrganizationMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationMemberCreateManyInput = {
    id?: string;
    userId: string;
    organizationId: string;
    role?: $Enums.OrganizationRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizationMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChannelCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    isPrivate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutChannelsInput;
    members?: ChannelMemberCreateNestedManyWithoutChannelInput;
    messages?: MessageCreateNestedManyWithoutChannelInput;
    aiSummaries?: AiSummaryCreateNestedManyWithoutChannelInput;
    readStates?: ChannelReadStateCreateNestedManyWithoutChannelInput;
  };

  export type ChannelUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    name: string;
    description?: string | null;
    isPrivate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: ChannelMemberUncheckedCreateNestedManyWithoutChannelInput;
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput;
    aiSummaries?: AiSummaryUncheckedCreateNestedManyWithoutChannelInput;
    readStates?: ChannelReadStateUncheckedCreateNestedManyWithoutChannelInput;
  };

  export type ChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isPrivate?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutChannelsNestedInput;
    members?: ChannelMemberUpdateManyWithoutChannelNestedInput;
    messages?: MessageUpdateManyWithoutChannelNestedInput;
    aiSummaries?: AiSummaryUpdateManyWithoutChannelNestedInput;
    readStates?: ChannelReadStateUpdateManyWithoutChannelNestedInput;
  };

  export type ChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isPrivate?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: ChannelMemberUncheckedUpdateManyWithoutChannelNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput;
    aiSummaries?: AiSummaryUncheckedUpdateManyWithoutChannelNestedInput;
    readStates?: ChannelReadStateUncheckedUpdateManyWithoutChannelNestedInput;
  };

  export type ChannelCreateManyInput = {
    id?: string;
    organizationId: string;
    name: string;
    description?: string | null;
    isPrivate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isPrivate?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isPrivate?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChannelMemberCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    channel: ChannelCreateNestedOneWithoutMembersInput;
    user: UserCreateNestedOneWithoutChannelMembersInput;
  };

  export type ChannelMemberUncheckedCreateInput = {
    id?: string;
    channelId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ChannelMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    channel?: ChannelUpdateOneRequiredWithoutMembersNestedInput;
    user?: UserUpdateOneRequiredWithoutChannelMembersNestedInput;
  };

  export type ChannelMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    channelId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChannelMemberCreateManyInput = {
    id?: string;
    channelId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ChannelMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChannelMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    channelId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    channel: ChannelCreateNestedOneWithoutMessagesInput;
    author: UserCreateNestedOneWithoutMessagesInput;
  };

  export type MessageUncheckedCreateInput = {
    id?: string;
    content: string;
    channelId: string;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    channel?: ChannelUpdateOneRequiredWithoutMessagesNestedInput;
    author?: UserUpdateOneRequiredWithoutMessagesNestedInput;
  };

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    channelId?: StringFieldUpdateOperationsInput | string;
    authorId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageCreateManyInput = {
    id?: string;
    content: string;
    channelId: string;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    channelId?: StringFieldUpdateOperationsInput | string;
    authorId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionCreateInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutSessionsInput;
  };

  export type SessionUncheckedCreateInput = {
    id?: string;
    userId: string;
    tokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput;
  };

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionCreateManyInput = {
    id?: string;
    userId: string;
    tokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogCreateInput = {
    id?: string;
    action: string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    user?: UserCreateNestedOneWithoutAuditLogsInput;
    organization?: OrganizationCreateNestedOneWithoutAuditLogsInput;
  };

  export type AuditLogUncheckedCreateInput = {
    id?: string;
    userId?: string | null;
    organizationId?: string | null;
    action: string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutAuditLogsNestedInput;
    organization?: OrganizationUpdateOneWithoutAuditLogsNestedInput;
  };

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null;
    action?: StringFieldUpdateOperationsInput | string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogCreateManyInput = {
    id?: string;
    userId?: string | null;
    organizationId?: string | null;
    action: string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null;
    action?: StringFieldUpdateOperationsInput | string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AiSummaryCreateInput = {
    id?: string;
    summary: string;
    rangeStart?: Date | string | null;
    rangeEnd?: Date | string | null;
    createdAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutAiSummariesInput;
    channel?: ChannelCreateNestedOneWithoutAiSummariesInput;
  };

  export type AiSummaryUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    channelId?: string | null;
    summary: string;
    rangeStart?: Date | string | null;
    rangeEnd?: Date | string | null;
    createdAt?: Date | string;
  };

  export type AiSummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    rangeStart?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    rangeEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutAiSummariesNestedInput;
    channel?: ChannelUpdateOneWithoutAiSummariesNestedInput;
  };

  export type AiSummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    channelId?: NullableStringFieldUpdateOperationsInput | string | null;
    summary?: StringFieldUpdateOperationsInput | string;
    rangeStart?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    rangeEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AiSummaryCreateManyInput = {
    id?: string;
    organizationId: string;
    channelId?: string | null;
    summary: string;
    rangeStart?: Date | string | null;
    rangeEnd?: Date | string | null;
    createdAt?: Date | string;
  };

  export type AiSummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    rangeStart?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    rangeEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AiSummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    channelId?: NullableStringFieldUpdateOperationsInput | string | null;
    summary?: StringFieldUpdateOperationsInput | string;
    rangeStart?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    rangeEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AiReportCreateInput = {
    id?: string;
    title: string;
    content: string;
    rangeStart?: Date | string | null;
    rangeEnd?: Date | string | null;
    createdAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutAiReportsInput;
  };

  export type AiReportUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    title: string;
    content: string;
    rangeStart?: Date | string | null;
    rangeEnd?: Date | string | null;
    createdAt?: Date | string;
  };

  export type AiReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rangeStart?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    rangeEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutAiReportsNestedInput;
  };

  export type AiReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rangeStart?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    rangeEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AiReportCreateManyInput = {
    id?: string;
    organizationId: string;
    title: string;
    content: string;
    rangeStart?: Date | string | null;
    rangeEnd?: Date | string | null;
    createdAt?: Date | string;
  };

  export type AiReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rangeStart?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    rangeEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AiReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rangeStart?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    rangeEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChannelReadStateCreateInput = {
    id?: string;
    lastReadAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    channel: ChannelCreateNestedOneWithoutReadStatesInput;
    user: UserCreateNestedOneWithoutChannelReadStatesInput;
  };

  export type ChannelReadStateUncheckedCreateInput = {
    id?: string;
    channelId: string;
    userId: string;
    lastReadAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ChannelReadStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    channel?: ChannelUpdateOneRequiredWithoutReadStatesNestedInput;
    user?: UserUpdateOneRequiredWithoutChannelReadStatesNestedInput;
  };

  export type ChannelReadStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    channelId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChannelReadStateCreateManyInput = {
    id?: string;
    channelId: string;
    userId: string;
    lastReadAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ChannelReadStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChannelReadStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    channelId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PasswordResetTokenCreateInput = {
    id?: string;
    token: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutPasswordResetTokensInput;
  };

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: string;
    userId: string;
    token: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PasswordResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput;
  };

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PasswordResetTokenCreateManyInput = {
    id?: string;
    userId: string;
    token: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PasswordResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EnumGlobalRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalRole | EnumGlobalRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.GlobalRole[] | ListEnumGlobalRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GlobalRole[] | ListEnumGlobalRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumGlobalRoleFilter<$PrismaModel> | $Enums.GlobalRole;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type OrganizationMemberListRelationFilter = {
    every?: OrganizationMemberWhereInput;
    some?: OrganizationMemberWhereInput;
    none?: OrganizationMemberWhereInput;
  };

  export type MessageListRelationFilter = {
    every?: MessageWhereInput;
    some?: MessageWhereInput;
    none?: MessageWhereInput;
  };

  export type SessionListRelationFilter = {
    every?: SessionWhereInput;
    some?: SessionWhereInput;
    none?: SessionWhereInput;
  };

  export type ChannelMemberListRelationFilter = {
    every?: ChannelMemberWhereInput;
    some?: ChannelMemberWhereInput;
    none?: ChannelMemberWhereInput;
  };

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput;
    some?: AuditLogWhereInput;
    none?: AuditLogWhereInput;
  };

  export type OrganizationInviteListRelationFilter = {
    every?: OrganizationInviteWhereInput;
    some?: OrganizationInviteWhereInput;
    none?: OrganizationInviteWhereInput;
  };

  export type ChannelReadStateListRelationFilter = {
    every?: ChannelReadStateWhereInput;
    some?: ChannelReadStateWhereInput;
    none?: ChannelReadStateWhereInput;
  };

  export type PasswordResetTokenListRelationFilter = {
    every?: PasswordResetTokenWhereInput;
    some?: PasswordResetTokenWhereInput;
    none?: PasswordResetTokenWhereInput;
  };

  export type OrganizationMemberOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ChannelMemberOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type OrganizationInviteOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ChannelReadStateOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PasswordResetTokenOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    displayName?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    displayName?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    displayName?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type EnumGlobalRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalRole | EnumGlobalRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.GlobalRole[] | ListEnumGlobalRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GlobalRole[] | ListEnumGlobalRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumGlobalRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.GlobalRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumGlobalRoleFilter<$PrismaModel>;
    _max?: NestedEnumGlobalRoleFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type ChannelListRelationFilter = {
    every?: ChannelWhereInput;
    some?: ChannelWhereInput;
    none?: ChannelWhereInput;
  };

  export type AiSummaryListRelationFilter = {
    every?: AiSummaryWhereInput;
    some?: AiSummaryWhereInput;
    none?: AiSummaryWhereInput;
  };

  export type AiReportListRelationFilter = {
    every?: AiReportWhereInput;
    some?: AiReportWhereInput;
    none?: AiReportWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type ChannelOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AiSummaryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AiReportOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type EnumOrganizationRoleFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.OrganizationRole
      | EnumOrganizationRoleFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.OrganizationRole[]
      | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrganizationRole[]
      | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumOrganizationRoleFilter<$PrismaModel>
      | $Enums.OrganizationRole;
  };

  export type EnumOrganizationInviteStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.OrganizationInviteStatus
      | EnumOrganizationInviteStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.OrganizationInviteStatus[]
      | ListEnumOrganizationInviteStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrganizationInviteStatus[]
      | ListEnumOrganizationInviteStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumOrganizationInviteStatusFilter<$PrismaModel>
      | $Enums.OrganizationInviteStatus;
  };

  export type OrganizationRelationFilter = {
    is?: OrganizationWhereInput;
    isNot?: OrganizationWhereInput;
  };

  export type UserRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type OrganizationInviteCountOrderByAggregateInput = {
    id?: SortOrder;
    token?: SortOrder;
    email?: SortOrder;
    organizationId?: SortOrder;
    invitedById?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrganizationInviteMaxOrderByAggregateInput = {
    id?: SortOrder;
    token?: SortOrder;
    email?: SortOrder;
    organizationId?: SortOrder;
    invitedById?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrganizationInviteMinOrderByAggregateInput = {
    id?: SortOrder;
    token?: SortOrder;
    email?: SortOrder;
    organizationId?: SortOrder;
    invitedById?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumOrganizationRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.OrganizationRole
      | EnumOrganizationRoleFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.OrganizationRole[]
      | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrganizationRole[]
      | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumOrganizationRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.OrganizationRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumOrganizationRoleFilter<$PrismaModel>;
    _max?: NestedEnumOrganizationRoleFilter<$PrismaModel>;
  };

  export type EnumOrganizationInviteStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.OrganizationInviteStatus
      | EnumOrganizationInviteStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.OrganizationInviteStatus[]
      | ListEnumOrganizationInviteStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrganizationInviteStatus[]
      | ListEnumOrganizationInviteStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumOrganizationInviteStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.OrganizationInviteStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumOrganizationInviteStatusFilter<$PrismaModel>;
    _max?: NestedEnumOrganizationInviteStatusFilter<$PrismaModel>;
  };

  export type OrganizationMemberUserIdOrganizationIdCompoundUniqueInput = {
    userId: string;
    organizationId: string;
  };

  export type OrganizationMemberCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrganizationMemberMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrganizationMemberMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type ChannelCountOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    isPrivate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ChannelMaxOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    isPrivate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ChannelMinOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    isPrivate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type ChannelRelationFilter = {
    is?: ChannelWhereInput;
    isNot?: ChannelWhereInput;
  };

  export type ChannelMemberChannelIdUserIdCompoundUniqueInput = {
    channelId: string;
    userId: string;
  };

  export type ChannelMemberCountOrderByAggregateInput = {
    id?: SortOrder;
    channelId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ChannelMemberMaxOrderByAggregateInput = {
    id?: SortOrder;
    channelId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ChannelMemberMinOrderByAggregateInput = {
    id?: SortOrder;
    channelId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    channelId?: SortOrder;
    authorId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    channelId?: SortOrder;
    authorId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    channelId?: SortOrder;
    authorId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
  };
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>
      >;

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null;
    isNot?: UserWhereInput | null;
  };

  export type OrganizationNullableRelationFilter = {
    is?: OrganizationWhereInput | null;
    isNot?: OrganizationWhereInput | null;
  };

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    action?: SortOrder;
    metadata?: SortOrder;
    createdAt?: SortOrder;
  };

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    action?: SortOrder;
    createdAt?: SortOrder;
  };

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    action?: SortOrder;
    createdAt?: SortOrder;
  };
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          'path'
        >
      >;

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedJsonNullableFilter<$PrismaModel>;
    _max?: NestedJsonNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type ChannelNullableRelationFilter = {
    is?: ChannelWhereInput | null;
    isNot?: ChannelWhereInput | null;
  };

  export type AiSummaryCountOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    channelId?: SortOrder;
    summary?: SortOrder;
    rangeStart?: SortOrder;
    rangeEnd?: SortOrder;
    createdAt?: SortOrder;
  };

  export type AiSummaryMaxOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    channelId?: SortOrder;
    summary?: SortOrder;
    rangeStart?: SortOrder;
    rangeEnd?: SortOrder;
    createdAt?: SortOrder;
  };

  export type AiSummaryMinOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    channelId?: SortOrder;
    summary?: SortOrder;
    rangeStart?: SortOrder;
    rangeEnd?: SortOrder;
    createdAt?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type AiReportCountOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    rangeStart?: SortOrder;
    rangeEnd?: SortOrder;
    createdAt?: SortOrder;
  };

  export type AiReportMaxOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    rangeStart?: SortOrder;
    rangeEnd?: SortOrder;
    createdAt?: SortOrder;
  };

  export type AiReportMinOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    rangeStart?: SortOrder;
    rangeEnd?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ChannelReadStateChannelIdUserIdCompoundUniqueInput = {
    channelId: string;
    userId: string;
  };

  export type ChannelReadStateCountOrderByAggregateInput = {
    id?: SortOrder;
    channelId?: SortOrder;
    userId?: SortOrder;
    lastReadAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ChannelReadStateMaxOrderByAggregateInput = {
    id?: SortOrder;
    channelId?: SortOrder;
    userId?: SortOrder;
    lastReadAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ChannelReadStateMinOrderByAggregateInput = {
    id?: SortOrder;
    channelId?: SortOrder;
    userId?: SortOrder;
    lastReadAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    expiresAt?: SortOrder;
    usedAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    expiresAt?: SortOrder;
    usedAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    expiresAt?: SortOrder;
    usedAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrganizationMemberCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          OrganizationMemberCreateWithoutUserInput,
          OrganizationMemberUncheckedCreateWithoutUserInput
        >
      | OrganizationMemberCreateWithoutUserInput[]
      | OrganizationMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OrganizationMemberCreateOrConnectWithoutUserInput
      | OrganizationMemberCreateOrConnectWithoutUserInput[];
    createMany?: OrganizationMemberCreateManyUserInputEnvelope;
    connect?:
      | OrganizationMemberWhereUniqueInput
      | OrganizationMemberWhereUniqueInput[];
  };

  export type MessageCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          MessageCreateWithoutAuthorInput,
          MessageUncheckedCreateWithoutAuthorInput
        >
      | MessageCreateWithoutAuthorInput[]
      | MessageUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutAuthorInput
      | MessageCreateOrConnectWithoutAuthorInput[];
    createMany?: MessageCreateManyAuthorInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type SessionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          SessionCreateWithoutUserInput,
          SessionUncheckedCreateWithoutUserInput
        >
      | SessionCreateWithoutUserInput[]
      | SessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SessionCreateOrConnectWithoutUserInput
      | SessionCreateOrConnectWithoutUserInput[];
    createMany?: SessionCreateManyUserInputEnvelope;
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
  };

  export type ChannelMemberCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ChannelMemberCreateWithoutUserInput,
          ChannelMemberUncheckedCreateWithoutUserInput
        >
      | ChannelMemberCreateWithoutUserInput[]
      | ChannelMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ChannelMemberCreateOrConnectWithoutUserInput
      | ChannelMemberCreateOrConnectWithoutUserInput[];
    createMany?: ChannelMemberCreateManyUserInputEnvelope;
    connect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[];
  };

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AuditLogCreateWithoutUserInput,
          AuditLogUncheckedCreateWithoutUserInput
        >
      | AuditLogCreateWithoutUserInput[]
      | AuditLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutUserInput
      | AuditLogCreateOrConnectWithoutUserInput[];
    createMany?: AuditLogCreateManyUserInputEnvelope;
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
  };

  export type OrganizationInviteCreateNestedManyWithoutInvitedByInput = {
    create?:
      | XOR<
          OrganizationInviteCreateWithoutInvitedByInput,
          OrganizationInviteUncheckedCreateWithoutInvitedByInput
        >
      | OrganizationInviteCreateWithoutInvitedByInput[]
      | OrganizationInviteUncheckedCreateWithoutInvitedByInput[];
    connectOrCreate?:
      | OrganizationInviteCreateOrConnectWithoutInvitedByInput
      | OrganizationInviteCreateOrConnectWithoutInvitedByInput[];
    createMany?: OrganizationInviteCreateManyInvitedByInputEnvelope;
    connect?:
      | OrganizationInviteWhereUniqueInput
      | OrganizationInviteWhereUniqueInput[];
  };

  export type ChannelReadStateCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ChannelReadStateCreateWithoutUserInput,
          ChannelReadStateUncheckedCreateWithoutUserInput
        >
      | ChannelReadStateCreateWithoutUserInput[]
      | ChannelReadStateUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ChannelReadStateCreateOrConnectWithoutUserInput
      | ChannelReadStateCreateOrConnectWithoutUserInput[];
    createMany?: ChannelReadStateCreateManyUserInputEnvelope;
    connect?:
      | ChannelReadStateWhereUniqueInput
      | ChannelReadStateWhereUniqueInput[];
  };

  export type PasswordResetTokenCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PasswordResetTokenCreateWithoutUserInput,
          PasswordResetTokenUncheckedCreateWithoutUserInput
        >
      | PasswordResetTokenCreateWithoutUserInput[]
      | PasswordResetTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PasswordResetTokenCreateOrConnectWithoutUserInput
      | PasswordResetTokenCreateOrConnectWithoutUserInput[];
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope;
    connect?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
  };

  export type OrganizationMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          OrganizationMemberCreateWithoutUserInput,
          OrganizationMemberUncheckedCreateWithoutUserInput
        >
      | OrganizationMemberCreateWithoutUserInput[]
      | OrganizationMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OrganizationMemberCreateOrConnectWithoutUserInput
      | OrganizationMemberCreateOrConnectWithoutUserInput[];
    createMany?: OrganizationMemberCreateManyUserInputEnvelope;
    connect?:
      | OrganizationMemberWhereUniqueInput
      | OrganizationMemberWhereUniqueInput[];
  };

  export type MessageUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          MessageCreateWithoutAuthorInput,
          MessageUncheckedCreateWithoutAuthorInput
        >
      | MessageCreateWithoutAuthorInput[]
      | MessageUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutAuthorInput
      | MessageCreateOrConnectWithoutAuthorInput[];
    createMany?: MessageCreateManyAuthorInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          SessionCreateWithoutUserInput,
          SessionUncheckedCreateWithoutUserInput
        >
      | SessionCreateWithoutUserInput[]
      | SessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SessionCreateOrConnectWithoutUserInput
      | SessionCreateOrConnectWithoutUserInput[];
    createMany?: SessionCreateManyUserInputEnvelope;
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
  };

  export type ChannelMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ChannelMemberCreateWithoutUserInput,
          ChannelMemberUncheckedCreateWithoutUserInput
        >
      | ChannelMemberCreateWithoutUserInput[]
      | ChannelMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ChannelMemberCreateOrConnectWithoutUserInput
      | ChannelMemberCreateOrConnectWithoutUserInput[];
    createMany?: ChannelMemberCreateManyUserInputEnvelope;
    connect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[];
  };

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AuditLogCreateWithoutUserInput,
          AuditLogUncheckedCreateWithoutUserInput
        >
      | AuditLogCreateWithoutUserInput[]
      | AuditLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutUserInput
      | AuditLogCreateOrConnectWithoutUserInput[];
    createMany?: AuditLogCreateManyUserInputEnvelope;
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
  };

  export type OrganizationInviteUncheckedCreateNestedManyWithoutInvitedByInput =
    {
      create?:
        | XOR<
            OrganizationInviteCreateWithoutInvitedByInput,
            OrganizationInviteUncheckedCreateWithoutInvitedByInput
          >
        | OrganizationInviteCreateWithoutInvitedByInput[]
        | OrganizationInviteUncheckedCreateWithoutInvitedByInput[];
      connectOrCreate?:
        | OrganizationInviteCreateOrConnectWithoutInvitedByInput
        | OrganizationInviteCreateOrConnectWithoutInvitedByInput[];
      createMany?: OrganizationInviteCreateManyInvitedByInputEnvelope;
      connect?:
        | OrganizationInviteWhereUniqueInput
        | OrganizationInviteWhereUniqueInput[];
    };

  export type ChannelReadStateUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ChannelReadStateCreateWithoutUserInput,
          ChannelReadStateUncheckedCreateWithoutUserInput
        >
      | ChannelReadStateCreateWithoutUserInput[]
      | ChannelReadStateUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ChannelReadStateCreateOrConnectWithoutUserInput
      | ChannelReadStateCreateOrConnectWithoutUserInput[];
    createMany?: ChannelReadStateCreateManyUserInputEnvelope;
    connect?:
      | ChannelReadStateWhereUniqueInput
      | ChannelReadStateWhereUniqueInput[];
  };

  export type PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PasswordResetTokenCreateWithoutUserInput,
          PasswordResetTokenUncheckedCreateWithoutUserInput
        >
      | PasswordResetTokenCreateWithoutUserInput[]
      | PasswordResetTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PasswordResetTokenCreateOrConnectWithoutUserInput
      | PasswordResetTokenCreateOrConnectWithoutUserInput[];
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope;
    connect?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type EnumGlobalRoleFieldUpdateOperationsInput = {
    set?: $Enums.GlobalRole;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type OrganizationMemberUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          OrganizationMemberCreateWithoutUserInput,
          OrganizationMemberUncheckedCreateWithoutUserInput
        >
      | OrganizationMemberCreateWithoutUserInput[]
      | OrganizationMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OrganizationMemberCreateOrConnectWithoutUserInput
      | OrganizationMemberCreateOrConnectWithoutUserInput[];
    upsert?:
      | OrganizationMemberUpsertWithWhereUniqueWithoutUserInput
      | OrganizationMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: OrganizationMemberCreateManyUserInputEnvelope;
    set?:
      | OrganizationMemberWhereUniqueInput
      | OrganizationMemberWhereUniqueInput[];
    disconnect?:
      | OrganizationMemberWhereUniqueInput
      | OrganizationMemberWhereUniqueInput[];
    delete?:
      | OrganizationMemberWhereUniqueInput
      | OrganizationMemberWhereUniqueInput[];
    connect?:
      | OrganizationMemberWhereUniqueInput
      | OrganizationMemberWhereUniqueInput[];
    update?:
      | OrganizationMemberUpdateWithWhereUniqueWithoutUserInput
      | OrganizationMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | OrganizationMemberUpdateManyWithWhereWithoutUserInput
      | OrganizationMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | OrganizationMemberScalarWhereInput
      | OrganizationMemberScalarWhereInput[];
  };

  export type MessageUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          MessageCreateWithoutAuthorInput,
          MessageUncheckedCreateWithoutAuthorInput
        >
      | MessageCreateWithoutAuthorInput[]
      | MessageUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutAuthorInput
      | MessageCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutAuthorInput
      | MessageUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: MessageCreateManyAuthorInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutAuthorInput
      | MessageUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutAuthorInput
      | MessageUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          SessionCreateWithoutUserInput,
          SessionUncheckedCreateWithoutUserInput
        >
      | SessionCreateWithoutUserInput[]
      | SessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SessionCreateOrConnectWithoutUserInput
      | SessionCreateOrConnectWithoutUserInput[];
    upsert?:
      | SessionUpsertWithWhereUniqueWithoutUserInput
      | SessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: SessionCreateManyUserInputEnvelope;
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    update?:
      | SessionUpdateWithWhereUniqueWithoutUserInput
      | SessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | SessionUpdateManyWithWhereWithoutUserInput
      | SessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[];
  };

  export type ChannelMemberUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ChannelMemberCreateWithoutUserInput,
          ChannelMemberUncheckedCreateWithoutUserInput
        >
      | ChannelMemberCreateWithoutUserInput[]
      | ChannelMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ChannelMemberCreateOrConnectWithoutUserInput
      | ChannelMemberCreateOrConnectWithoutUserInput[];
    upsert?:
      | ChannelMemberUpsertWithWhereUniqueWithoutUserInput
      | ChannelMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ChannelMemberCreateManyUserInputEnvelope;
    set?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[];
    disconnect?:
      | ChannelMemberWhereUniqueInput
      | ChannelMemberWhereUniqueInput[];
    delete?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[];
    connect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[];
    update?:
      | ChannelMemberUpdateWithWhereUniqueWithoutUserInput
      | ChannelMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ChannelMemberUpdateManyWithWhereWithoutUserInput
      | ChannelMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | ChannelMemberScalarWhereInput
      | ChannelMemberScalarWhereInput[];
  };

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AuditLogCreateWithoutUserInput,
          AuditLogUncheckedCreateWithoutUserInput
        >
      | AuditLogCreateWithoutUserInput[]
      | AuditLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutUserInput
      | AuditLogCreateOrConnectWithoutUserInput[];
    upsert?:
      | AuditLogUpsertWithWhereUniqueWithoutUserInput
      | AuditLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AuditLogCreateManyUserInputEnvelope;
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    update?:
      | AuditLogUpdateWithWhereUniqueWithoutUserInput
      | AuditLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AuditLogUpdateManyWithWhereWithoutUserInput
      | AuditLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
  };

  export type OrganizationInviteUpdateManyWithoutInvitedByNestedInput = {
    create?:
      | XOR<
          OrganizationInviteCreateWithoutInvitedByInput,
          OrganizationInviteUncheckedCreateWithoutInvitedByInput
        >
      | OrganizationInviteCreateWithoutInvitedByInput[]
      | OrganizationInviteUncheckedCreateWithoutInvitedByInput[];
    connectOrCreate?:
      | OrganizationInviteCreateOrConnectWithoutInvitedByInput
      | OrganizationInviteCreateOrConnectWithoutInvitedByInput[];
    upsert?:
      | OrganizationInviteUpsertWithWhereUniqueWithoutInvitedByInput
      | OrganizationInviteUpsertWithWhereUniqueWithoutInvitedByInput[];
    createMany?: OrganizationInviteCreateManyInvitedByInputEnvelope;
    set?:
      | OrganizationInviteWhereUniqueInput
      | OrganizationInviteWhereUniqueInput[];
    disconnect?:
      | OrganizationInviteWhereUniqueInput
      | OrganizationInviteWhereUniqueInput[];
    delete?:
      | OrganizationInviteWhereUniqueInput
      | OrganizationInviteWhereUniqueInput[];
    connect?:
      | OrganizationInviteWhereUniqueInput
      | OrganizationInviteWhereUniqueInput[];
    update?:
      | OrganizationInviteUpdateWithWhereUniqueWithoutInvitedByInput
      | OrganizationInviteUpdateWithWhereUniqueWithoutInvitedByInput[];
    updateMany?:
      | OrganizationInviteUpdateManyWithWhereWithoutInvitedByInput
      | OrganizationInviteUpdateManyWithWhereWithoutInvitedByInput[];
    deleteMany?:
      | OrganizationInviteScalarWhereInput
      | OrganizationInviteScalarWhereInput[];
  };

  export type ChannelReadStateUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ChannelReadStateCreateWithoutUserInput,
          ChannelReadStateUncheckedCreateWithoutUserInput
        >
      | ChannelReadStateCreateWithoutUserInput[]
      | ChannelReadStateUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ChannelReadStateCreateOrConnectWithoutUserInput
      | ChannelReadStateCreateOrConnectWithoutUserInput[];
    upsert?:
      | ChannelReadStateUpsertWithWhereUniqueWithoutUserInput
      | ChannelReadStateUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ChannelReadStateCreateManyUserInputEnvelope;
    set?: ChannelReadStateWhereUniqueInput | ChannelReadStateWhereUniqueInput[];
    disconnect?:
      | ChannelReadStateWhereUniqueInput
      | ChannelReadStateWhereUniqueInput[];
    delete?:
      | ChannelReadStateWhereUniqueInput
      | ChannelReadStateWhereUniqueInput[];
    connect?:
      | ChannelReadStateWhereUniqueInput
      | ChannelReadStateWhereUniqueInput[];
    update?:
      | ChannelReadStateUpdateWithWhereUniqueWithoutUserInput
      | ChannelReadStateUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ChannelReadStateUpdateManyWithWhereWithoutUserInput
      | ChannelReadStateUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | ChannelReadStateScalarWhereInput
      | ChannelReadStateScalarWhereInput[];
  };

  export type PasswordResetTokenUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PasswordResetTokenCreateWithoutUserInput,
          PasswordResetTokenUncheckedCreateWithoutUserInput
        >
      | PasswordResetTokenCreateWithoutUserInput[]
      | PasswordResetTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PasswordResetTokenCreateOrConnectWithoutUserInput
      | PasswordResetTokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput
      | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope;
    set?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
    disconnect?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
    delete?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
    connect?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
    update?:
      | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput
      | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PasswordResetTokenUpdateManyWithWhereWithoutUserInput
      | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | PasswordResetTokenScalarWhereInput
      | PasswordResetTokenScalarWhereInput[];
  };

  export type OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          OrganizationMemberCreateWithoutUserInput,
          OrganizationMemberUncheckedCreateWithoutUserInput
        >
      | OrganizationMemberCreateWithoutUserInput[]
      | OrganizationMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OrganizationMemberCreateOrConnectWithoutUserInput
      | OrganizationMemberCreateOrConnectWithoutUserInput[];
    upsert?:
      | OrganizationMemberUpsertWithWhereUniqueWithoutUserInput
      | OrganizationMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: OrganizationMemberCreateManyUserInputEnvelope;
    set?:
      | OrganizationMemberWhereUniqueInput
      | OrganizationMemberWhereUniqueInput[];
    disconnect?:
      | OrganizationMemberWhereUniqueInput
      | OrganizationMemberWhereUniqueInput[];
    delete?:
      | OrganizationMemberWhereUniqueInput
      | OrganizationMemberWhereUniqueInput[];
    connect?:
      | OrganizationMemberWhereUniqueInput
      | OrganizationMemberWhereUniqueInput[];
    update?:
      | OrganizationMemberUpdateWithWhereUniqueWithoutUserInput
      | OrganizationMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | OrganizationMemberUpdateManyWithWhereWithoutUserInput
      | OrganizationMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | OrganizationMemberScalarWhereInput
      | OrganizationMemberScalarWhereInput[];
  };

  export type MessageUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          MessageCreateWithoutAuthorInput,
          MessageUncheckedCreateWithoutAuthorInput
        >
      | MessageCreateWithoutAuthorInput[]
      | MessageUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutAuthorInput
      | MessageCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutAuthorInput
      | MessageUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: MessageCreateManyAuthorInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutAuthorInput
      | MessageUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutAuthorInput
      | MessageUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          SessionCreateWithoutUserInput,
          SessionUncheckedCreateWithoutUserInput
        >
      | SessionCreateWithoutUserInput[]
      | SessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SessionCreateOrConnectWithoutUserInput
      | SessionCreateOrConnectWithoutUserInput[];
    upsert?:
      | SessionUpsertWithWhereUniqueWithoutUserInput
      | SessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: SessionCreateManyUserInputEnvelope;
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    update?:
      | SessionUpdateWithWhereUniqueWithoutUserInput
      | SessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | SessionUpdateManyWithWhereWithoutUserInput
      | SessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[];
  };

  export type ChannelMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ChannelMemberCreateWithoutUserInput,
          ChannelMemberUncheckedCreateWithoutUserInput
        >
      | ChannelMemberCreateWithoutUserInput[]
      | ChannelMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ChannelMemberCreateOrConnectWithoutUserInput
      | ChannelMemberCreateOrConnectWithoutUserInput[];
    upsert?:
      | ChannelMemberUpsertWithWhereUniqueWithoutUserInput
      | ChannelMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ChannelMemberCreateManyUserInputEnvelope;
    set?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[];
    disconnect?:
      | ChannelMemberWhereUniqueInput
      | ChannelMemberWhereUniqueInput[];
    delete?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[];
    connect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[];
    update?:
      | ChannelMemberUpdateWithWhereUniqueWithoutUserInput
      | ChannelMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ChannelMemberUpdateManyWithWhereWithoutUserInput
      | ChannelMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | ChannelMemberScalarWhereInput
      | ChannelMemberScalarWhereInput[];
  };

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AuditLogCreateWithoutUserInput,
          AuditLogUncheckedCreateWithoutUserInput
        >
      | AuditLogCreateWithoutUserInput[]
      | AuditLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutUserInput
      | AuditLogCreateOrConnectWithoutUserInput[];
    upsert?:
      | AuditLogUpsertWithWhereUniqueWithoutUserInput
      | AuditLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AuditLogCreateManyUserInputEnvelope;
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    update?:
      | AuditLogUpdateWithWhereUniqueWithoutUserInput
      | AuditLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AuditLogUpdateManyWithWhereWithoutUserInput
      | AuditLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
  };

  export type OrganizationInviteUncheckedUpdateManyWithoutInvitedByNestedInput =
    {
      create?:
        | XOR<
            OrganizationInviteCreateWithoutInvitedByInput,
            OrganizationInviteUncheckedCreateWithoutInvitedByInput
          >
        | OrganizationInviteCreateWithoutInvitedByInput[]
        | OrganizationInviteUncheckedCreateWithoutInvitedByInput[];
      connectOrCreate?:
        | OrganizationInviteCreateOrConnectWithoutInvitedByInput
        | OrganizationInviteCreateOrConnectWithoutInvitedByInput[];
      upsert?:
        | OrganizationInviteUpsertWithWhereUniqueWithoutInvitedByInput
        | OrganizationInviteUpsertWithWhereUniqueWithoutInvitedByInput[];
      createMany?: OrganizationInviteCreateManyInvitedByInputEnvelope;
      set?:
        | OrganizationInviteWhereUniqueInput
        | OrganizationInviteWhereUniqueInput[];
      disconnect?:
        | OrganizationInviteWhereUniqueInput
        | OrganizationInviteWhereUniqueInput[];
      delete?:
        | OrganizationInviteWhereUniqueInput
        | OrganizationInviteWhereUniqueInput[];
      connect?:
        | OrganizationInviteWhereUniqueInput
        | OrganizationInviteWhereUniqueInput[];
      update?:
        | OrganizationInviteUpdateWithWhereUniqueWithoutInvitedByInput
        | OrganizationInviteUpdateWithWhereUniqueWithoutInvitedByInput[];
      updateMany?:
        | OrganizationInviteUpdateManyWithWhereWithoutInvitedByInput
        | OrganizationInviteUpdateManyWithWhereWithoutInvitedByInput[];
      deleteMany?:
        | OrganizationInviteScalarWhereInput
        | OrganizationInviteScalarWhereInput[];
    };

  export type ChannelReadStateUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ChannelReadStateCreateWithoutUserInput,
          ChannelReadStateUncheckedCreateWithoutUserInput
        >
      | ChannelReadStateCreateWithoutUserInput[]
      | ChannelReadStateUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ChannelReadStateCreateOrConnectWithoutUserInput
      | ChannelReadStateCreateOrConnectWithoutUserInput[];
    upsert?:
      | ChannelReadStateUpsertWithWhereUniqueWithoutUserInput
      | ChannelReadStateUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ChannelReadStateCreateManyUserInputEnvelope;
    set?: ChannelReadStateWhereUniqueInput | ChannelReadStateWhereUniqueInput[];
    disconnect?:
      | ChannelReadStateWhereUniqueInput
      | ChannelReadStateWhereUniqueInput[];
    delete?:
      | ChannelReadStateWhereUniqueInput
      | ChannelReadStateWhereUniqueInput[];
    connect?:
      | ChannelReadStateWhereUniqueInput
      | ChannelReadStateWhereUniqueInput[];
    update?:
      | ChannelReadStateUpdateWithWhereUniqueWithoutUserInput
      | ChannelReadStateUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ChannelReadStateUpdateManyWithWhereWithoutUserInput
      | ChannelReadStateUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | ChannelReadStateScalarWhereInput
      | ChannelReadStateScalarWhereInput[];
  };

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PasswordResetTokenCreateWithoutUserInput,
          PasswordResetTokenUncheckedCreateWithoutUserInput
        >
      | PasswordResetTokenCreateWithoutUserInput[]
      | PasswordResetTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PasswordResetTokenCreateOrConnectWithoutUserInput
      | PasswordResetTokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput
      | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope;
    set?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
    disconnect?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
    delete?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
    connect?:
      | PasswordResetTokenWhereUniqueInput
      | PasswordResetTokenWhereUniqueInput[];
    update?:
      | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput
      | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PasswordResetTokenUpdateManyWithWhereWithoutUserInput
      | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | PasswordResetTokenScalarWhereInput
      | PasswordResetTokenScalarWhereInput[];
  };

  export type OrganizationMemberCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          OrganizationMemberCreateWithoutOrganizationInput,
          OrganizationMemberUncheckedCreateWithoutOrganizationInput
        >
      | OrganizationMemberCreateWithoutOrganizationInput[]
      | OrganizationMemberUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | OrganizationMemberCreateOrConnectWithoutOrganizationInput
      | OrganizationMemberCreateOrConnectWithoutOrganizationInput[];
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope;
    connect?:
      | OrganizationMemberWhereUniqueInput
      | OrganizationMemberWhereUniqueInput[];
  };

  export type ChannelCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          ChannelCreateWithoutOrganizationInput,
          ChannelUncheckedCreateWithoutOrganizationInput
        >
      | ChannelCreateWithoutOrganizationInput[]
      | ChannelUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | ChannelCreateOrConnectWithoutOrganizationInput
      | ChannelCreateOrConnectWithoutOrganizationInput[];
    createMany?: ChannelCreateManyOrganizationInputEnvelope;
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[];
  };

  export type AuditLogCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          AuditLogCreateWithoutOrganizationInput,
          AuditLogUncheckedCreateWithoutOrganizationInput
        >
      | AuditLogCreateWithoutOrganizationInput[]
      | AuditLogUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutOrganizationInput
      | AuditLogCreateOrConnectWithoutOrganizationInput[];
    createMany?: AuditLogCreateManyOrganizationInputEnvelope;
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
  };

  export type AiSummaryCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          AiSummaryCreateWithoutOrganizationInput,
          AiSummaryUncheckedCreateWithoutOrganizationInput
        >
      | AiSummaryCreateWithoutOrganizationInput[]
      | AiSummaryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | AiSummaryCreateOrConnectWithoutOrganizationInput
      | AiSummaryCreateOrConnectWithoutOrganizationInput[];
    createMany?: AiSummaryCreateManyOrganizationInputEnvelope;
    connect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
  };

  export type AiReportCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          AiReportCreateWithoutOrganizationInput,
          AiReportUncheckedCreateWithoutOrganizationInput
        >
      | AiReportCreateWithoutOrganizationInput[]
      | AiReportUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | AiReportCreateOrConnectWithoutOrganizationInput
      | AiReportCreateOrConnectWithoutOrganizationInput[];
    createMany?: AiReportCreateManyOrganizationInputEnvelope;
    connect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[];
  };

  export type OrganizationInviteCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          OrganizationInviteCreateWithoutOrganizationInput,
          OrganizationInviteUncheckedCreateWithoutOrganizationInput
        >
      | OrganizationInviteCreateWithoutOrganizationInput[]
      | OrganizationInviteUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | OrganizationInviteCreateOrConnectWithoutOrganizationInput
      | OrganizationInviteCreateOrConnectWithoutOrganizationInput[];
    createMany?: OrganizationInviteCreateManyOrganizationInputEnvelope;
    connect?:
      | OrganizationInviteWhereUniqueInput
      | OrganizationInviteWhereUniqueInput[];
  };

  export type OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput =
    {
      create?:
        | XOR<
            OrganizationMemberCreateWithoutOrganizationInput,
            OrganizationMemberUncheckedCreateWithoutOrganizationInput
          >
        | OrganizationMemberCreateWithoutOrganizationInput[]
        | OrganizationMemberUncheckedCreateWithoutOrganizationInput[];
      connectOrCreate?:
        | OrganizationMemberCreateOrConnectWithoutOrganizationInput
        | OrganizationMemberCreateOrConnectWithoutOrganizationInput[];
      createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope;
      connect?:
        | OrganizationMemberWhereUniqueInput
        | OrganizationMemberWhereUniqueInput[];
    };

  export type ChannelUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          ChannelCreateWithoutOrganizationInput,
          ChannelUncheckedCreateWithoutOrganizationInput
        >
      | ChannelCreateWithoutOrganizationInput[]
      | ChannelUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | ChannelCreateOrConnectWithoutOrganizationInput
      | ChannelCreateOrConnectWithoutOrganizationInput[];
    createMany?: ChannelCreateManyOrganizationInputEnvelope;
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[];
  };

  export type AuditLogUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          AuditLogCreateWithoutOrganizationInput,
          AuditLogUncheckedCreateWithoutOrganizationInput
        >
      | AuditLogCreateWithoutOrganizationInput[]
      | AuditLogUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutOrganizationInput
      | AuditLogCreateOrConnectWithoutOrganizationInput[];
    createMany?: AuditLogCreateManyOrganizationInputEnvelope;
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
  };

  export type AiSummaryUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          AiSummaryCreateWithoutOrganizationInput,
          AiSummaryUncheckedCreateWithoutOrganizationInput
        >
      | AiSummaryCreateWithoutOrganizationInput[]
      | AiSummaryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | AiSummaryCreateOrConnectWithoutOrganizationInput
      | AiSummaryCreateOrConnectWithoutOrganizationInput[];
    createMany?: AiSummaryCreateManyOrganizationInputEnvelope;
    connect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
  };

  export type AiReportUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          AiReportCreateWithoutOrganizationInput,
          AiReportUncheckedCreateWithoutOrganizationInput
        >
      | AiReportCreateWithoutOrganizationInput[]
      | AiReportUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | AiReportCreateOrConnectWithoutOrganizationInput
      | AiReportCreateOrConnectWithoutOrganizationInput[];
    createMany?: AiReportCreateManyOrganizationInputEnvelope;
    connect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[];
  };

  export type OrganizationInviteUncheckedCreateNestedManyWithoutOrganizationInput =
    {
      create?:
        | XOR<
            OrganizationInviteCreateWithoutOrganizationInput,
            OrganizationInviteUncheckedCreateWithoutOrganizationInput
          >
        | OrganizationInviteCreateWithoutOrganizationInput[]
        | OrganizationInviteUncheckedCreateWithoutOrganizationInput[];
      connectOrCreate?:
        | OrganizationInviteCreateOrConnectWithoutOrganizationInput
        | OrganizationInviteCreateOrConnectWithoutOrganizationInput[];
      createMany?: OrganizationInviteCreateManyOrganizationInputEnvelope;
      connect?:
        | OrganizationInviteWhereUniqueInput
        | OrganizationInviteWhereUniqueInput[];
    };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type OrganizationMemberUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          OrganizationMemberCreateWithoutOrganizationInput,
          OrganizationMemberUncheckedCreateWithoutOrganizationInput
        >
      | OrganizationMemberCreateWithoutOrganizationInput[]
      | OrganizationMemberUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | OrganizationMemberCreateOrConnectWithoutOrganizationInput
      | OrganizationMemberCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput
      | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope;
    set?:
      | OrganizationMemberWhereUniqueInput
      | OrganizationMemberWhereUniqueInput[];
    disconnect?:
      | OrganizationMemberWhereUniqueInput
      | OrganizationMemberWhereUniqueInput[];
    delete?:
      | OrganizationMemberWhereUniqueInput
      | OrganizationMemberWhereUniqueInput[];
    connect?:
      | OrganizationMemberWhereUniqueInput
      | OrganizationMemberWhereUniqueInput[];
    update?:
      | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput
      | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput
      | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?:
      | OrganizationMemberScalarWhereInput
      | OrganizationMemberScalarWhereInput[];
  };

  export type ChannelUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          ChannelCreateWithoutOrganizationInput,
          ChannelUncheckedCreateWithoutOrganizationInput
        >
      | ChannelCreateWithoutOrganizationInput[]
      | ChannelUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | ChannelCreateOrConnectWithoutOrganizationInput
      | ChannelCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | ChannelUpsertWithWhereUniqueWithoutOrganizationInput
      | ChannelUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: ChannelCreateManyOrganizationInputEnvelope;
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[];
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[];
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[];
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[];
    update?:
      | ChannelUpdateWithWhereUniqueWithoutOrganizationInput
      | ChannelUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | ChannelUpdateManyWithWhereWithoutOrganizationInput
      | ChannelUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[];
  };

  export type AuditLogUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          AuditLogCreateWithoutOrganizationInput,
          AuditLogUncheckedCreateWithoutOrganizationInput
        >
      | AuditLogCreateWithoutOrganizationInput[]
      | AuditLogUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutOrganizationInput
      | AuditLogCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | AuditLogUpsertWithWhereUniqueWithoutOrganizationInput
      | AuditLogUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: AuditLogCreateManyOrganizationInputEnvelope;
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    update?:
      | AuditLogUpdateWithWhereUniqueWithoutOrganizationInput
      | AuditLogUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | AuditLogUpdateManyWithWhereWithoutOrganizationInput
      | AuditLogUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
  };

  export type AiSummaryUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          AiSummaryCreateWithoutOrganizationInput,
          AiSummaryUncheckedCreateWithoutOrganizationInput
        >
      | AiSummaryCreateWithoutOrganizationInput[]
      | AiSummaryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | AiSummaryCreateOrConnectWithoutOrganizationInput
      | AiSummaryCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | AiSummaryUpsertWithWhereUniqueWithoutOrganizationInput
      | AiSummaryUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: AiSummaryCreateManyOrganizationInputEnvelope;
    set?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
    disconnect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
    delete?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
    connect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
    update?:
      | AiSummaryUpdateWithWhereUniqueWithoutOrganizationInput
      | AiSummaryUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | AiSummaryUpdateManyWithWhereWithoutOrganizationInput
      | AiSummaryUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: AiSummaryScalarWhereInput | AiSummaryScalarWhereInput[];
  };

  export type AiReportUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          AiReportCreateWithoutOrganizationInput,
          AiReportUncheckedCreateWithoutOrganizationInput
        >
      | AiReportCreateWithoutOrganizationInput[]
      | AiReportUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | AiReportCreateOrConnectWithoutOrganizationInput
      | AiReportCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | AiReportUpsertWithWhereUniqueWithoutOrganizationInput
      | AiReportUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: AiReportCreateManyOrganizationInputEnvelope;
    set?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[];
    disconnect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[];
    delete?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[];
    connect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[];
    update?:
      | AiReportUpdateWithWhereUniqueWithoutOrganizationInput
      | AiReportUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | AiReportUpdateManyWithWhereWithoutOrganizationInput
      | AiReportUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: AiReportScalarWhereInput | AiReportScalarWhereInput[];
  };

  export type OrganizationInviteUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          OrganizationInviteCreateWithoutOrganizationInput,
          OrganizationInviteUncheckedCreateWithoutOrganizationInput
        >
      | OrganizationInviteCreateWithoutOrganizationInput[]
      | OrganizationInviteUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | OrganizationInviteCreateOrConnectWithoutOrganizationInput
      | OrganizationInviteCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | OrganizationInviteUpsertWithWhereUniqueWithoutOrganizationInput
      | OrganizationInviteUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: OrganizationInviteCreateManyOrganizationInputEnvelope;
    set?:
      | OrganizationInviteWhereUniqueInput
      | OrganizationInviteWhereUniqueInput[];
    disconnect?:
      | OrganizationInviteWhereUniqueInput
      | OrganizationInviteWhereUniqueInput[];
    delete?:
      | OrganizationInviteWhereUniqueInput
      | OrganizationInviteWhereUniqueInput[];
    connect?:
      | OrganizationInviteWhereUniqueInput
      | OrganizationInviteWhereUniqueInput[];
    update?:
      | OrganizationInviteUpdateWithWhereUniqueWithoutOrganizationInput
      | OrganizationInviteUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | OrganizationInviteUpdateManyWithWhereWithoutOrganizationInput
      | OrganizationInviteUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?:
      | OrganizationInviteScalarWhereInput
      | OrganizationInviteScalarWhereInput[];
  };

  export type OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput =
    {
      create?:
        | XOR<
            OrganizationMemberCreateWithoutOrganizationInput,
            OrganizationMemberUncheckedCreateWithoutOrganizationInput
          >
        | OrganizationMemberCreateWithoutOrganizationInput[]
        | OrganizationMemberUncheckedCreateWithoutOrganizationInput[];
      connectOrCreate?:
        | OrganizationMemberCreateOrConnectWithoutOrganizationInput
        | OrganizationMemberCreateOrConnectWithoutOrganizationInput[];
      upsert?:
        | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput
        | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput[];
      createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope;
      set?:
        | OrganizationMemberWhereUniqueInput
        | OrganizationMemberWhereUniqueInput[];
      disconnect?:
        | OrganizationMemberWhereUniqueInput
        | OrganizationMemberWhereUniqueInput[];
      delete?:
        | OrganizationMemberWhereUniqueInput
        | OrganizationMemberWhereUniqueInput[];
      connect?:
        | OrganizationMemberWhereUniqueInput
        | OrganizationMemberWhereUniqueInput[];
      update?:
        | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput
        | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput[];
      updateMany?:
        | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput
        | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput[];
      deleteMany?:
        | OrganizationMemberScalarWhereInput
        | OrganizationMemberScalarWhereInput[];
    };

  export type ChannelUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          ChannelCreateWithoutOrganizationInput,
          ChannelUncheckedCreateWithoutOrganizationInput
        >
      | ChannelCreateWithoutOrganizationInput[]
      | ChannelUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | ChannelCreateOrConnectWithoutOrganizationInput
      | ChannelCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | ChannelUpsertWithWhereUniqueWithoutOrganizationInput
      | ChannelUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: ChannelCreateManyOrganizationInputEnvelope;
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[];
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[];
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[];
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[];
    update?:
      | ChannelUpdateWithWhereUniqueWithoutOrganizationInput
      | ChannelUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | ChannelUpdateManyWithWhereWithoutOrganizationInput
      | ChannelUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[];
  };

  export type AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          AuditLogCreateWithoutOrganizationInput,
          AuditLogUncheckedCreateWithoutOrganizationInput
        >
      | AuditLogCreateWithoutOrganizationInput[]
      | AuditLogUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutOrganizationInput
      | AuditLogCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | AuditLogUpsertWithWhereUniqueWithoutOrganizationInput
      | AuditLogUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: AuditLogCreateManyOrganizationInputEnvelope;
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    update?:
      | AuditLogUpdateWithWhereUniqueWithoutOrganizationInput
      | AuditLogUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | AuditLogUpdateManyWithWhereWithoutOrganizationInput
      | AuditLogUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
  };

  export type AiSummaryUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          AiSummaryCreateWithoutOrganizationInput,
          AiSummaryUncheckedCreateWithoutOrganizationInput
        >
      | AiSummaryCreateWithoutOrganizationInput[]
      | AiSummaryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | AiSummaryCreateOrConnectWithoutOrganizationInput
      | AiSummaryCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | AiSummaryUpsertWithWhereUniqueWithoutOrganizationInput
      | AiSummaryUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: AiSummaryCreateManyOrganizationInputEnvelope;
    set?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
    disconnect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
    delete?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
    connect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
    update?:
      | AiSummaryUpdateWithWhereUniqueWithoutOrganizationInput
      | AiSummaryUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | AiSummaryUpdateManyWithWhereWithoutOrganizationInput
      | AiSummaryUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: AiSummaryScalarWhereInput | AiSummaryScalarWhereInput[];
  };

  export type AiReportUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          AiReportCreateWithoutOrganizationInput,
          AiReportUncheckedCreateWithoutOrganizationInput
        >
      | AiReportCreateWithoutOrganizationInput[]
      | AiReportUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | AiReportCreateOrConnectWithoutOrganizationInput
      | AiReportCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | AiReportUpsertWithWhereUniqueWithoutOrganizationInput
      | AiReportUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: AiReportCreateManyOrganizationInputEnvelope;
    set?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[];
    disconnect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[];
    delete?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[];
    connect?: AiReportWhereUniqueInput | AiReportWhereUniqueInput[];
    update?:
      | AiReportUpdateWithWhereUniqueWithoutOrganizationInput
      | AiReportUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | AiReportUpdateManyWithWhereWithoutOrganizationInput
      | AiReportUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: AiReportScalarWhereInput | AiReportScalarWhereInput[];
  };

  export type OrganizationInviteUncheckedUpdateManyWithoutOrganizationNestedInput =
    {
      create?:
        | XOR<
            OrganizationInviteCreateWithoutOrganizationInput,
            OrganizationInviteUncheckedCreateWithoutOrganizationInput
          >
        | OrganizationInviteCreateWithoutOrganizationInput[]
        | OrganizationInviteUncheckedCreateWithoutOrganizationInput[];
      connectOrCreate?:
        | OrganizationInviteCreateOrConnectWithoutOrganizationInput
        | OrganizationInviteCreateOrConnectWithoutOrganizationInput[];
      upsert?:
        | OrganizationInviteUpsertWithWhereUniqueWithoutOrganizationInput
        | OrganizationInviteUpsertWithWhereUniqueWithoutOrganizationInput[];
      createMany?: OrganizationInviteCreateManyOrganizationInputEnvelope;
      set?:
        | OrganizationInviteWhereUniqueInput
        | OrganizationInviteWhereUniqueInput[];
      disconnect?:
        | OrganizationInviteWhereUniqueInput
        | OrganizationInviteWhereUniqueInput[];
      delete?:
        | OrganizationInviteWhereUniqueInput
        | OrganizationInviteWhereUniqueInput[];
      connect?:
        | OrganizationInviteWhereUniqueInput
        | OrganizationInviteWhereUniqueInput[];
      update?:
        | OrganizationInviteUpdateWithWhereUniqueWithoutOrganizationInput
        | OrganizationInviteUpdateWithWhereUniqueWithoutOrganizationInput[];
      updateMany?:
        | OrganizationInviteUpdateManyWithWhereWithoutOrganizationInput
        | OrganizationInviteUpdateManyWithWhereWithoutOrganizationInput[];
      deleteMany?:
        | OrganizationInviteScalarWhereInput
        | OrganizationInviteScalarWhereInput[];
    };

  export type OrganizationCreateNestedOneWithoutInvitesInput = {
    create?: XOR<
      OrganizationCreateWithoutInvitesInput,
      OrganizationUncheckedCreateWithoutInvitesInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutInvitesInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutSentInvitesInput = {
    create?: XOR<
      UserCreateWithoutSentInvitesInput,
      UserUncheckedCreateWithoutSentInvitesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSentInvitesInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumOrganizationRoleFieldUpdateOperationsInput = {
    set?: $Enums.OrganizationRole;
  };

  export type EnumOrganizationInviteStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrganizationInviteStatus;
  };

  export type OrganizationUpdateOneRequiredWithoutInvitesNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutInvitesInput,
      OrganizationUncheckedCreateWithoutInvitesInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutInvitesInput;
    upsert?: OrganizationUpsertWithoutInvitesInput;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutInvitesInput,
        OrganizationUpdateWithoutInvitesInput
      >,
      OrganizationUncheckedUpdateWithoutInvitesInput
    >;
  };

  export type UserUpdateOneRequiredWithoutSentInvitesNestedInput = {
    create?: XOR<
      UserCreateWithoutSentInvitesInput,
      UserUncheckedCreateWithoutSentInvitesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSentInvitesInput;
    upsert?: UserUpsertWithoutSentInvitesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutSentInvitesInput,
        UserUpdateWithoutSentInvitesInput
      >,
      UserUncheckedUpdateWithoutSentInvitesInput
    >;
  };

  export type OrganizationCreateNestedOneWithoutMembersInput = {
    create?: XOR<
      OrganizationCreateWithoutMembersInput,
      OrganizationUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutOrganizationsInput = {
    create?: XOR<
      UserCreateWithoutOrganizationsInput,
      UserUncheckedCreateWithoutOrganizationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationsInput;
    connect?: UserWhereUniqueInput;
  };

  export type OrganizationUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutMembersInput,
      OrganizationUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput;
    upsert?: OrganizationUpsertWithoutMembersInput;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutMembersInput,
        OrganizationUpdateWithoutMembersInput
      >,
      OrganizationUncheckedUpdateWithoutMembersInput
    >;
  };

  export type UserUpdateOneRequiredWithoutOrganizationsNestedInput = {
    create?: XOR<
      UserCreateWithoutOrganizationsInput,
      UserUncheckedCreateWithoutOrganizationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationsInput;
    upsert?: UserUpsertWithoutOrganizationsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutOrganizationsInput,
        UserUpdateWithoutOrganizationsInput
      >,
      UserUncheckedUpdateWithoutOrganizationsInput
    >;
  };

  export type OrganizationCreateNestedOneWithoutChannelsInput = {
    create?: XOR<
      OrganizationCreateWithoutChannelsInput,
      OrganizationUncheckedCreateWithoutChannelsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutChannelsInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type ChannelMemberCreateNestedManyWithoutChannelInput = {
    create?:
      | XOR<
          ChannelMemberCreateWithoutChannelInput,
          ChannelMemberUncheckedCreateWithoutChannelInput
        >
      | ChannelMemberCreateWithoutChannelInput[]
      | ChannelMemberUncheckedCreateWithoutChannelInput[];
    connectOrCreate?:
      | ChannelMemberCreateOrConnectWithoutChannelInput
      | ChannelMemberCreateOrConnectWithoutChannelInput[];
    createMany?: ChannelMemberCreateManyChannelInputEnvelope;
    connect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[];
  };

  export type MessageCreateNestedManyWithoutChannelInput = {
    create?:
      | XOR<
          MessageCreateWithoutChannelInput,
          MessageUncheckedCreateWithoutChannelInput
        >
      | MessageCreateWithoutChannelInput[]
      | MessageUncheckedCreateWithoutChannelInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutChannelInput
      | MessageCreateOrConnectWithoutChannelInput[];
    createMany?: MessageCreateManyChannelInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type AiSummaryCreateNestedManyWithoutChannelInput = {
    create?:
      | XOR<
          AiSummaryCreateWithoutChannelInput,
          AiSummaryUncheckedCreateWithoutChannelInput
        >
      | AiSummaryCreateWithoutChannelInput[]
      | AiSummaryUncheckedCreateWithoutChannelInput[];
    connectOrCreate?:
      | AiSummaryCreateOrConnectWithoutChannelInput
      | AiSummaryCreateOrConnectWithoutChannelInput[];
    createMany?: AiSummaryCreateManyChannelInputEnvelope;
    connect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
  };

  export type ChannelReadStateCreateNestedManyWithoutChannelInput = {
    create?:
      | XOR<
          ChannelReadStateCreateWithoutChannelInput,
          ChannelReadStateUncheckedCreateWithoutChannelInput
        >
      | ChannelReadStateCreateWithoutChannelInput[]
      | ChannelReadStateUncheckedCreateWithoutChannelInput[];
    connectOrCreate?:
      | ChannelReadStateCreateOrConnectWithoutChannelInput
      | ChannelReadStateCreateOrConnectWithoutChannelInput[];
    createMany?: ChannelReadStateCreateManyChannelInputEnvelope;
    connect?:
      | ChannelReadStateWhereUniqueInput
      | ChannelReadStateWhereUniqueInput[];
  };

  export type ChannelMemberUncheckedCreateNestedManyWithoutChannelInput = {
    create?:
      | XOR<
          ChannelMemberCreateWithoutChannelInput,
          ChannelMemberUncheckedCreateWithoutChannelInput
        >
      | ChannelMemberCreateWithoutChannelInput[]
      | ChannelMemberUncheckedCreateWithoutChannelInput[];
    connectOrCreate?:
      | ChannelMemberCreateOrConnectWithoutChannelInput
      | ChannelMemberCreateOrConnectWithoutChannelInput[];
    createMany?: ChannelMemberCreateManyChannelInputEnvelope;
    connect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[];
  };

  export type MessageUncheckedCreateNestedManyWithoutChannelInput = {
    create?:
      | XOR<
          MessageCreateWithoutChannelInput,
          MessageUncheckedCreateWithoutChannelInput
        >
      | MessageCreateWithoutChannelInput[]
      | MessageUncheckedCreateWithoutChannelInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutChannelInput
      | MessageCreateOrConnectWithoutChannelInput[];
    createMany?: MessageCreateManyChannelInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type AiSummaryUncheckedCreateNestedManyWithoutChannelInput = {
    create?:
      | XOR<
          AiSummaryCreateWithoutChannelInput,
          AiSummaryUncheckedCreateWithoutChannelInput
        >
      | AiSummaryCreateWithoutChannelInput[]
      | AiSummaryUncheckedCreateWithoutChannelInput[];
    connectOrCreate?:
      | AiSummaryCreateOrConnectWithoutChannelInput
      | AiSummaryCreateOrConnectWithoutChannelInput[];
    createMany?: AiSummaryCreateManyChannelInputEnvelope;
    connect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
  };

  export type ChannelReadStateUncheckedCreateNestedManyWithoutChannelInput = {
    create?:
      | XOR<
          ChannelReadStateCreateWithoutChannelInput,
          ChannelReadStateUncheckedCreateWithoutChannelInput
        >
      | ChannelReadStateCreateWithoutChannelInput[]
      | ChannelReadStateUncheckedCreateWithoutChannelInput[];
    connectOrCreate?:
      | ChannelReadStateCreateOrConnectWithoutChannelInput
      | ChannelReadStateCreateOrConnectWithoutChannelInput[];
    createMany?: ChannelReadStateCreateManyChannelInputEnvelope;
    connect?:
      | ChannelReadStateWhereUniqueInput
      | ChannelReadStateWhereUniqueInput[];
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type OrganizationUpdateOneRequiredWithoutChannelsNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutChannelsInput,
      OrganizationUncheckedCreateWithoutChannelsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutChannelsInput;
    upsert?: OrganizationUpsertWithoutChannelsInput;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutChannelsInput,
        OrganizationUpdateWithoutChannelsInput
      >,
      OrganizationUncheckedUpdateWithoutChannelsInput
    >;
  };

  export type ChannelMemberUpdateManyWithoutChannelNestedInput = {
    create?:
      | XOR<
          ChannelMemberCreateWithoutChannelInput,
          ChannelMemberUncheckedCreateWithoutChannelInput
        >
      | ChannelMemberCreateWithoutChannelInput[]
      | ChannelMemberUncheckedCreateWithoutChannelInput[];
    connectOrCreate?:
      | ChannelMemberCreateOrConnectWithoutChannelInput
      | ChannelMemberCreateOrConnectWithoutChannelInput[];
    upsert?:
      | ChannelMemberUpsertWithWhereUniqueWithoutChannelInput
      | ChannelMemberUpsertWithWhereUniqueWithoutChannelInput[];
    createMany?: ChannelMemberCreateManyChannelInputEnvelope;
    set?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[];
    disconnect?:
      | ChannelMemberWhereUniqueInput
      | ChannelMemberWhereUniqueInput[];
    delete?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[];
    connect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[];
    update?:
      | ChannelMemberUpdateWithWhereUniqueWithoutChannelInput
      | ChannelMemberUpdateWithWhereUniqueWithoutChannelInput[];
    updateMany?:
      | ChannelMemberUpdateManyWithWhereWithoutChannelInput
      | ChannelMemberUpdateManyWithWhereWithoutChannelInput[];
    deleteMany?:
      | ChannelMemberScalarWhereInput
      | ChannelMemberScalarWhereInput[];
  };

  export type MessageUpdateManyWithoutChannelNestedInput = {
    create?:
      | XOR<
          MessageCreateWithoutChannelInput,
          MessageUncheckedCreateWithoutChannelInput
        >
      | MessageCreateWithoutChannelInput[]
      | MessageUncheckedCreateWithoutChannelInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutChannelInput
      | MessageCreateOrConnectWithoutChannelInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutChannelInput
      | MessageUpsertWithWhereUniqueWithoutChannelInput[];
    createMany?: MessageCreateManyChannelInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutChannelInput
      | MessageUpdateWithWhereUniqueWithoutChannelInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutChannelInput
      | MessageUpdateManyWithWhereWithoutChannelInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type AiSummaryUpdateManyWithoutChannelNestedInput = {
    create?:
      | XOR<
          AiSummaryCreateWithoutChannelInput,
          AiSummaryUncheckedCreateWithoutChannelInput
        >
      | AiSummaryCreateWithoutChannelInput[]
      | AiSummaryUncheckedCreateWithoutChannelInput[];
    connectOrCreate?:
      | AiSummaryCreateOrConnectWithoutChannelInput
      | AiSummaryCreateOrConnectWithoutChannelInput[];
    upsert?:
      | AiSummaryUpsertWithWhereUniqueWithoutChannelInput
      | AiSummaryUpsertWithWhereUniqueWithoutChannelInput[];
    createMany?: AiSummaryCreateManyChannelInputEnvelope;
    set?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
    disconnect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
    delete?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
    connect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
    update?:
      | AiSummaryUpdateWithWhereUniqueWithoutChannelInput
      | AiSummaryUpdateWithWhereUniqueWithoutChannelInput[];
    updateMany?:
      | AiSummaryUpdateManyWithWhereWithoutChannelInput
      | AiSummaryUpdateManyWithWhereWithoutChannelInput[];
    deleteMany?: AiSummaryScalarWhereInput | AiSummaryScalarWhereInput[];
  };

  export type ChannelReadStateUpdateManyWithoutChannelNestedInput = {
    create?:
      | XOR<
          ChannelReadStateCreateWithoutChannelInput,
          ChannelReadStateUncheckedCreateWithoutChannelInput
        >
      | ChannelReadStateCreateWithoutChannelInput[]
      | ChannelReadStateUncheckedCreateWithoutChannelInput[];
    connectOrCreate?:
      | ChannelReadStateCreateOrConnectWithoutChannelInput
      | ChannelReadStateCreateOrConnectWithoutChannelInput[];
    upsert?:
      | ChannelReadStateUpsertWithWhereUniqueWithoutChannelInput
      | ChannelReadStateUpsertWithWhereUniqueWithoutChannelInput[];
    createMany?: ChannelReadStateCreateManyChannelInputEnvelope;
    set?: ChannelReadStateWhereUniqueInput | ChannelReadStateWhereUniqueInput[];
    disconnect?:
      | ChannelReadStateWhereUniqueInput
      | ChannelReadStateWhereUniqueInput[];
    delete?:
      | ChannelReadStateWhereUniqueInput
      | ChannelReadStateWhereUniqueInput[];
    connect?:
      | ChannelReadStateWhereUniqueInput
      | ChannelReadStateWhereUniqueInput[];
    update?:
      | ChannelReadStateUpdateWithWhereUniqueWithoutChannelInput
      | ChannelReadStateUpdateWithWhereUniqueWithoutChannelInput[];
    updateMany?:
      | ChannelReadStateUpdateManyWithWhereWithoutChannelInput
      | ChannelReadStateUpdateManyWithWhereWithoutChannelInput[];
    deleteMany?:
      | ChannelReadStateScalarWhereInput
      | ChannelReadStateScalarWhereInput[];
  };

  export type ChannelMemberUncheckedUpdateManyWithoutChannelNestedInput = {
    create?:
      | XOR<
          ChannelMemberCreateWithoutChannelInput,
          ChannelMemberUncheckedCreateWithoutChannelInput
        >
      | ChannelMemberCreateWithoutChannelInput[]
      | ChannelMemberUncheckedCreateWithoutChannelInput[];
    connectOrCreate?:
      | ChannelMemberCreateOrConnectWithoutChannelInput
      | ChannelMemberCreateOrConnectWithoutChannelInput[];
    upsert?:
      | ChannelMemberUpsertWithWhereUniqueWithoutChannelInput
      | ChannelMemberUpsertWithWhereUniqueWithoutChannelInput[];
    createMany?: ChannelMemberCreateManyChannelInputEnvelope;
    set?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[];
    disconnect?:
      | ChannelMemberWhereUniqueInput
      | ChannelMemberWhereUniqueInput[];
    delete?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[];
    connect?: ChannelMemberWhereUniqueInput | ChannelMemberWhereUniqueInput[];
    update?:
      | ChannelMemberUpdateWithWhereUniqueWithoutChannelInput
      | ChannelMemberUpdateWithWhereUniqueWithoutChannelInput[];
    updateMany?:
      | ChannelMemberUpdateManyWithWhereWithoutChannelInput
      | ChannelMemberUpdateManyWithWhereWithoutChannelInput[];
    deleteMany?:
      | ChannelMemberScalarWhereInput
      | ChannelMemberScalarWhereInput[];
  };

  export type MessageUncheckedUpdateManyWithoutChannelNestedInput = {
    create?:
      | XOR<
          MessageCreateWithoutChannelInput,
          MessageUncheckedCreateWithoutChannelInput
        >
      | MessageCreateWithoutChannelInput[]
      | MessageUncheckedCreateWithoutChannelInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutChannelInput
      | MessageCreateOrConnectWithoutChannelInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutChannelInput
      | MessageUpsertWithWhereUniqueWithoutChannelInput[];
    createMany?: MessageCreateManyChannelInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutChannelInput
      | MessageUpdateWithWhereUniqueWithoutChannelInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutChannelInput
      | MessageUpdateManyWithWhereWithoutChannelInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type AiSummaryUncheckedUpdateManyWithoutChannelNestedInput = {
    create?:
      | XOR<
          AiSummaryCreateWithoutChannelInput,
          AiSummaryUncheckedCreateWithoutChannelInput
        >
      | AiSummaryCreateWithoutChannelInput[]
      | AiSummaryUncheckedCreateWithoutChannelInput[];
    connectOrCreate?:
      | AiSummaryCreateOrConnectWithoutChannelInput
      | AiSummaryCreateOrConnectWithoutChannelInput[];
    upsert?:
      | AiSummaryUpsertWithWhereUniqueWithoutChannelInput
      | AiSummaryUpsertWithWhereUniqueWithoutChannelInput[];
    createMany?: AiSummaryCreateManyChannelInputEnvelope;
    set?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
    disconnect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
    delete?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
    connect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[];
    update?:
      | AiSummaryUpdateWithWhereUniqueWithoutChannelInput
      | AiSummaryUpdateWithWhereUniqueWithoutChannelInput[];
    updateMany?:
      | AiSummaryUpdateManyWithWhereWithoutChannelInput
      | AiSummaryUpdateManyWithWhereWithoutChannelInput[];
    deleteMany?: AiSummaryScalarWhereInput | AiSummaryScalarWhereInput[];
  };

  export type ChannelReadStateUncheckedUpdateManyWithoutChannelNestedInput = {
    create?:
      | XOR<
          ChannelReadStateCreateWithoutChannelInput,
          ChannelReadStateUncheckedCreateWithoutChannelInput
        >
      | ChannelReadStateCreateWithoutChannelInput[]
      | ChannelReadStateUncheckedCreateWithoutChannelInput[];
    connectOrCreate?:
      | ChannelReadStateCreateOrConnectWithoutChannelInput
      | ChannelReadStateCreateOrConnectWithoutChannelInput[];
    upsert?:
      | ChannelReadStateUpsertWithWhereUniqueWithoutChannelInput
      | ChannelReadStateUpsertWithWhereUniqueWithoutChannelInput[];
    createMany?: ChannelReadStateCreateManyChannelInputEnvelope;
    set?: ChannelReadStateWhereUniqueInput | ChannelReadStateWhereUniqueInput[];
    disconnect?:
      | ChannelReadStateWhereUniqueInput
      | ChannelReadStateWhereUniqueInput[];
    delete?:
      | ChannelReadStateWhereUniqueInput
      | ChannelReadStateWhereUniqueInput[];
    connect?:
      | ChannelReadStateWhereUniqueInput
      | ChannelReadStateWhereUniqueInput[];
    update?:
      | ChannelReadStateUpdateWithWhereUniqueWithoutChannelInput
      | ChannelReadStateUpdateWithWhereUniqueWithoutChannelInput[];
    updateMany?:
      | ChannelReadStateUpdateManyWithWhereWithoutChannelInput
      | ChannelReadStateUpdateManyWithWhereWithoutChannelInput[];
    deleteMany?:
      | ChannelReadStateScalarWhereInput
      | ChannelReadStateScalarWhereInput[];
  };

  export type ChannelCreateNestedOneWithoutMembersInput = {
    create?: XOR<
      ChannelCreateWithoutMembersInput,
      ChannelUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: ChannelCreateOrConnectWithoutMembersInput;
    connect?: ChannelWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutChannelMembersInput = {
    create?: XOR<
      UserCreateWithoutChannelMembersInput,
      UserUncheckedCreateWithoutChannelMembersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutChannelMembersInput;
    connect?: UserWhereUniqueInput;
  };

  export type ChannelUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<
      ChannelCreateWithoutMembersInput,
      ChannelUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: ChannelCreateOrConnectWithoutMembersInput;
    upsert?: ChannelUpsertWithoutMembersInput;
    connect?: ChannelWhereUniqueInput;
    update?: XOR<
      XOR<
        ChannelUpdateToOneWithWhereWithoutMembersInput,
        ChannelUpdateWithoutMembersInput
      >,
      ChannelUncheckedUpdateWithoutMembersInput
    >;
  };

  export type UserUpdateOneRequiredWithoutChannelMembersNestedInput = {
    create?: XOR<
      UserCreateWithoutChannelMembersInput,
      UserUncheckedCreateWithoutChannelMembersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutChannelMembersInput;
    upsert?: UserUpsertWithoutChannelMembersInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutChannelMembersInput,
        UserUpdateWithoutChannelMembersInput
      >,
      UserUncheckedUpdateWithoutChannelMembersInput
    >;
  };

  export type ChannelCreateNestedOneWithoutMessagesInput = {
    create?: XOR<
      ChannelCreateWithoutMessagesInput,
      ChannelUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: ChannelCreateOrConnectWithoutMessagesInput;
    connect?: ChannelWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<
      UserCreateWithoutMessagesInput,
      UserUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput;
    connect?: UserWhereUniqueInput;
  };

  export type ChannelUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<
      ChannelCreateWithoutMessagesInput,
      ChannelUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: ChannelCreateOrConnectWithoutMessagesInput;
    upsert?: ChannelUpsertWithoutMessagesInput;
    connect?: ChannelWhereUniqueInput;
    update?: XOR<
      XOR<
        ChannelUpdateToOneWithWhereWithoutMessagesInput,
        ChannelUpdateWithoutMessagesInput
      >,
      ChannelUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<
      UserCreateWithoutMessagesInput,
      UserUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput;
    upsert?: UserUpsertWithoutMessagesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutMessagesInput,
        UserUpdateWithoutMessagesInput
      >,
      UserUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput;
    upsert?: UserUpsertWithoutSessionsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutSessionsInput,
        UserUpdateWithoutSessionsInput
      >,
      UserUncheckedUpdateWithoutSessionsInput
    >;
  };

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<
      UserCreateWithoutAuditLogsInput,
      UserUncheckedCreateWithoutAuditLogsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput;
    connect?: UserWhereUniqueInput;
  };

  export type OrganizationCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<
      OrganizationCreateWithoutAuditLogsInput,
      OrganizationUncheckedCreateWithoutAuditLogsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutAuditLogsInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<
      UserCreateWithoutAuditLogsInput,
      UserUncheckedCreateWithoutAuditLogsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput;
    upsert?: UserUpsertWithoutAuditLogsInput;
    disconnect?: UserWhereInput | boolean;
    delete?: UserWhereInput | boolean;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutAuditLogsInput,
        UserUpdateWithoutAuditLogsInput
      >,
      UserUncheckedUpdateWithoutAuditLogsInput
    >;
  };

  export type OrganizationUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutAuditLogsInput,
      OrganizationUncheckedCreateWithoutAuditLogsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutAuditLogsInput;
    upsert?: OrganizationUpsertWithoutAuditLogsInput;
    disconnect?: OrganizationWhereInput | boolean;
    delete?: OrganizationWhereInput | boolean;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutAuditLogsInput,
        OrganizationUpdateWithoutAuditLogsInput
      >,
      OrganizationUncheckedUpdateWithoutAuditLogsInput
    >;
  };

  export type OrganizationCreateNestedOneWithoutAiSummariesInput = {
    create?: XOR<
      OrganizationCreateWithoutAiSummariesInput,
      OrganizationUncheckedCreateWithoutAiSummariesInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutAiSummariesInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type ChannelCreateNestedOneWithoutAiSummariesInput = {
    create?: XOR<
      ChannelCreateWithoutAiSummariesInput,
      ChannelUncheckedCreateWithoutAiSummariesInput
    >;
    connectOrCreate?: ChannelCreateOrConnectWithoutAiSummariesInput;
    connect?: ChannelWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type OrganizationUpdateOneRequiredWithoutAiSummariesNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutAiSummariesInput,
      OrganizationUncheckedCreateWithoutAiSummariesInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutAiSummariesInput;
    upsert?: OrganizationUpsertWithoutAiSummariesInput;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutAiSummariesInput,
        OrganizationUpdateWithoutAiSummariesInput
      >,
      OrganizationUncheckedUpdateWithoutAiSummariesInput
    >;
  };

  export type ChannelUpdateOneWithoutAiSummariesNestedInput = {
    create?: XOR<
      ChannelCreateWithoutAiSummariesInput,
      ChannelUncheckedCreateWithoutAiSummariesInput
    >;
    connectOrCreate?: ChannelCreateOrConnectWithoutAiSummariesInput;
    upsert?: ChannelUpsertWithoutAiSummariesInput;
    disconnect?: ChannelWhereInput | boolean;
    delete?: ChannelWhereInput | boolean;
    connect?: ChannelWhereUniqueInput;
    update?: XOR<
      XOR<
        ChannelUpdateToOneWithWhereWithoutAiSummariesInput,
        ChannelUpdateWithoutAiSummariesInput
      >,
      ChannelUncheckedUpdateWithoutAiSummariesInput
    >;
  };

  export type OrganizationCreateNestedOneWithoutAiReportsInput = {
    create?: XOR<
      OrganizationCreateWithoutAiReportsInput,
      OrganizationUncheckedCreateWithoutAiReportsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutAiReportsInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type OrganizationUpdateOneRequiredWithoutAiReportsNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutAiReportsInput,
      OrganizationUncheckedCreateWithoutAiReportsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutAiReportsInput;
    upsert?: OrganizationUpsertWithoutAiReportsInput;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutAiReportsInput,
        OrganizationUpdateWithoutAiReportsInput
      >,
      OrganizationUncheckedUpdateWithoutAiReportsInput
    >;
  };

  export type ChannelCreateNestedOneWithoutReadStatesInput = {
    create?: XOR<
      ChannelCreateWithoutReadStatesInput,
      ChannelUncheckedCreateWithoutReadStatesInput
    >;
    connectOrCreate?: ChannelCreateOrConnectWithoutReadStatesInput;
    connect?: ChannelWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutChannelReadStatesInput = {
    create?: XOR<
      UserCreateWithoutChannelReadStatesInput,
      UserUncheckedCreateWithoutChannelReadStatesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutChannelReadStatesInput;
    connect?: UserWhereUniqueInput;
  };

  export type ChannelUpdateOneRequiredWithoutReadStatesNestedInput = {
    create?: XOR<
      ChannelCreateWithoutReadStatesInput,
      ChannelUncheckedCreateWithoutReadStatesInput
    >;
    connectOrCreate?: ChannelCreateOrConnectWithoutReadStatesInput;
    upsert?: ChannelUpsertWithoutReadStatesInput;
    connect?: ChannelWhereUniqueInput;
    update?: XOR<
      XOR<
        ChannelUpdateToOneWithWhereWithoutReadStatesInput,
        ChannelUpdateWithoutReadStatesInput
      >,
      ChannelUncheckedUpdateWithoutReadStatesInput
    >;
  };

  export type UserUpdateOneRequiredWithoutChannelReadStatesNestedInput = {
    create?: XOR<
      UserCreateWithoutChannelReadStatesInput,
      UserUncheckedCreateWithoutChannelReadStatesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutChannelReadStatesInput;
    upsert?: UserUpsertWithoutChannelReadStatesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutChannelReadStatesInput,
        UserUpdateWithoutChannelReadStatesInput
      >,
      UserUncheckedUpdateWithoutChannelReadStatesInput
    >;
  };

  export type UserCreateNestedOneWithoutPasswordResetTokensInput = {
    create?: XOR<
      UserCreateWithoutPasswordResetTokensInput,
      UserUncheckedCreateWithoutPasswordResetTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput = {
    create?: XOR<
      UserCreateWithoutPasswordResetTokensInput,
      UserUncheckedCreateWithoutPasswordResetTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput;
    upsert?: UserUpsertWithoutPasswordResetTokensInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPasswordResetTokensInput,
        UserUpdateWithoutPasswordResetTokensInput
      >,
      UserUncheckedUpdateWithoutPasswordResetTokensInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumGlobalRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalRole | EnumGlobalRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.GlobalRole[] | ListEnumGlobalRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GlobalRole[] | ListEnumGlobalRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumGlobalRoleFilter<$PrismaModel> | $Enums.GlobalRole;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedEnumGlobalRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalRole | EnumGlobalRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.GlobalRole[] | ListEnumGlobalRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GlobalRole[] | ListEnumGlobalRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumGlobalRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.GlobalRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumGlobalRoleFilter<$PrismaModel>;
    _max?: NestedEnumGlobalRoleFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumOrganizationRoleFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.OrganizationRole
      | EnumOrganizationRoleFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.OrganizationRole[]
      | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrganizationRole[]
      | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumOrganizationRoleFilter<$PrismaModel>
      | $Enums.OrganizationRole;
  };

  export type NestedEnumOrganizationInviteStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.OrganizationInviteStatus
      | EnumOrganizationInviteStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.OrganizationInviteStatus[]
      | ListEnumOrganizationInviteStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrganizationInviteStatus[]
      | ListEnumOrganizationInviteStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumOrganizationInviteStatusFilter<$PrismaModel>
      | $Enums.OrganizationInviteStatus;
  };

  export type NestedEnumOrganizationRoleWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.OrganizationRole
      | EnumOrganizationRoleFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.OrganizationRole[]
      | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrganizationRole[]
      | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumOrganizationRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.OrganizationRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumOrganizationRoleFilter<$PrismaModel>;
    _max?: NestedEnumOrganizationRoleFilter<$PrismaModel>;
  };

  export type NestedEnumOrganizationInviteStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.OrganizationInviteStatus
      | EnumOrganizationInviteStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.OrganizationInviteStatus[]
      | ListEnumOrganizationInviteStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrganizationInviteStatus[]
      | ListEnumOrganizationInviteStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumOrganizationInviteStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.OrganizationInviteStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumOrganizationInviteStatusFilter<$PrismaModel>;
    _max?: NestedEnumOrganizationInviteStatusFilter<$PrismaModel>;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonNullableFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>
      >;

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type OrganizationMemberCreateWithoutUserInput = {
    id?: string;
    role?: $Enums.OrganizationRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutMembersInput;
  };

  export type OrganizationMemberUncheckedCreateWithoutUserInput = {
    id?: string;
    organizationId: string;
    role?: $Enums.OrganizationRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizationMemberCreateOrConnectWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput;
    create: XOR<
      OrganizationMemberCreateWithoutUserInput,
      OrganizationMemberUncheckedCreateWithoutUserInput
    >;
  };

  export type OrganizationMemberCreateManyUserInputEnvelope = {
    data:
      | OrganizationMemberCreateManyUserInput
      | OrganizationMemberCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type MessageCreateWithoutAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    channel: ChannelCreateNestedOneWithoutMessagesInput;
  };

  export type MessageUncheckedCreateWithoutAuthorInput = {
    id?: string;
    content: string;
    channelId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MessageCreateOrConnectWithoutAuthorInput = {
    where: MessageWhereUniqueInput;
    create: XOR<
      MessageCreateWithoutAuthorInput,
      MessageUncheckedCreateWithoutAuthorInput
    >;
  };

  export type MessageCreateManyAuthorInputEnvelope = {
    data: MessageCreateManyAuthorInput | MessageCreateManyAuthorInput[];
    skipDuplicates?: boolean;
  };

  export type SessionCreateWithoutUserInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput;
    create: XOR<
      SessionCreateWithoutUserInput,
      SessionUncheckedCreateWithoutUserInput
    >;
  };

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ChannelMemberCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    channel: ChannelCreateNestedOneWithoutMembersInput;
  };

  export type ChannelMemberUncheckedCreateWithoutUserInput = {
    id?: string;
    channelId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ChannelMemberCreateOrConnectWithoutUserInput = {
    where: ChannelMemberWhereUniqueInput;
    create: XOR<
      ChannelMemberCreateWithoutUserInput,
      ChannelMemberUncheckedCreateWithoutUserInput
    >;
  };

  export type ChannelMemberCreateManyUserInputEnvelope = {
    data: ChannelMemberCreateManyUserInput | ChannelMemberCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type AuditLogCreateWithoutUserInput = {
    id?: string;
    action: string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    organization?: OrganizationCreateNestedOneWithoutAuditLogsInput;
  };

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string;
    organizationId?: string | null;
    action: string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput;
    create: XOR<
      AuditLogCreateWithoutUserInput,
      AuditLogUncheckedCreateWithoutUserInput
    >;
  };

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type OrganizationInviteCreateWithoutInvitedByInput = {
    id?: string;
    token: string;
    email: string;
    role?: $Enums.OrganizationRole;
    status?: $Enums.OrganizationInviteStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutInvitesInput;
  };

  export type OrganizationInviteUncheckedCreateWithoutInvitedByInput = {
    id?: string;
    token: string;
    email: string;
    organizationId: string;
    role?: $Enums.OrganizationRole;
    status?: $Enums.OrganizationInviteStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizationInviteCreateOrConnectWithoutInvitedByInput = {
    where: OrganizationInviteWhereUniqueInput;
    create: XOR<
      OrganizationInviteCreateWithoutInvitedByInput,
      OrganizationInviteUncheckedCreateWithoutInvitedByInput
    >;
  };

  export type OrganizationInviteCreateManyInvitedByInputEnvelope = {
    data:
      | OrganizationInviteCreateManyInvitedByInput
      | OrganizationInviteCreateManyInvitedByInput[];
    skipDuplicates?: boolean;
  };

  export type ChannelReadStateCreateWithoutUserInput = {
    id?: string;
    lastReadAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    channel: ChannelCreateNestedOneWithoutReadStatesInput;
  };

  export type ChannelReadStateUncheckedCreateWithoutUserInput = {
    id?: string;
    channelId: string;
    lastReadAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ChannelReadStateCreateOrConnectWithoutUserInput = {
    where: ChannelReadStateWhereUniqueInput;
    create: XOR<
      ChannelReadStateCreateWithoutUserInput,
      ChannelReadStateUncheckedCreateWithoutUserInput
    >;
  };

  export type ChannelReadStateCreateManyUserInputEnvelope = {
    data:
      | ChannelReadStateCreateManyUserInput
      | ChannelReadStateCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type PasswordResetTokenCreateWithoutUserInput = {
    id?: string;
    token: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PasswordResetTokenUncheckedCreateWithoutUserInput = {
    id?: string;
    token: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PasswordResetTokenCreateOrConnectWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput;
    create: XOR<
      PasswordResetTokenCreateWithoutUserInput,
      PasswordResetTokenUncheckedCreateWithoutUserInput
    >;
  };

  export type PasswordResetTokenCreateManyUserInputEnvelope = {
    data:
      | PasswordResetTokenCreateManyUserInput
      | PasswordResetTokenCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type OrganizationMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput;
    update: XOR<
      OrganizationMemberUpdateWithoutUserInput,
      OrganizationMemberUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      OrganizationMemberCreateWithoutUserInput,
      OrganizationMemberUncheckedCreateWithoutUserInput
    >;
  };

  export type OrganizationMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput;
    data: XOR<
      OrganizationMemberUpdateWithoutUserInput,
      OrganizationMemberUncheckedUpdateWithoutUserInput
    >;
  };

  export type OrganizationMemberUpdateManyWithWhereWithoutUserInput = {
    where: OrganizationMemberScalarWhereInput;
    data: XOR<
      OrganizationMemberUpdateManyMutationInput,
      OrganizationMemberUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type OrganizationMemberScalarWhereInput = {
    AND?:
      | OrganizationMemberScalarWhereInput
      | OrganizationMemberScalarWhereInput[];
    OR?: OrganizationMemberScalarWhereInput[];
    NOT?:
      | OrganizationMemberScalarWhereInput
      | OrganizationMemberScalarWhereInput[];
    id?: StringFilter<'OrganizationMember'> | string;
    userId?: StringFilter<'OrganizationMember'> | string;
    organizationId?: StringFilter<'OrganizationMember'> | string;
    role?:
      | EnumOrganizationRoleFilter<'OrganizationMember'>
      | $Enums.OrganizationRole;
    createdAt?: DateTimeFilter<'OrganizationMember'> | Date | string;
    updatedAt?: DateTimeFilter<'OrganizationMember'> | Date | string;
  };

  export type MessageUpsertWithWhereUniqueWithoutAuthorInput = {
    where: MessageWhereUniqueInput;
    update: XOR<
      MessageUpdateWithoutAuthorInput,
      MessageUncheckedUpdateWithoutAuthorInput
    >;
    create: XOR<
      MessageCreateWithoutAuthorInput,
      MessageUncheckedCreateWithoutAuthorInput
    >;
  };

  export type MessageUpdateWithWhereUniqueWithoutAuthorInput = {
    where: MessageWhereUniqueInput;
    data: XOR<
      MessageUpdateWithoutAuthorInput,
      MessageUncheckedUpdateWithoutAuthorInput
    >;
  };

  export type MessageUpdateManyWithWhereWithoutAuthorInput = {
    where: MessageScalarWhereInput;
    data: XOR<
      MessageUpdateManyMutationInput,
      MessageUncheckedUpdateManyWithoutAuthorInput
    >;
  };

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[];
    OR?: MessageScalarWhereInput[];
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[];
    id?: StringFilter<'Message'> | string;
    content?: StringFilter<'Message'> | string;
    channelId?: StringFilter<'Message'> | string;
    authorId?: StringFilter<'Message'> | string;
    createdAt?: DateTimeFilter<'Message'> | Date | string;
    updatedAt?: DateTimeFilter<'Message'> | Date | string;
  };

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput;
    update: XOR<
      SessionUpdateWithoutUserInput,
      SessionUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      SessionCreateWithoutUserInput,
      SessionUncheckedCreateWithoutUserInput
    >;
  };

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput;
    data: XOR<
      SessionUpdateWithoutUserInput,
      SessionUncheckedUpdateWithoutUserInput
    >;
  };

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput;
    data: XOR<
      SessionUpdateManyMutationInput,
      SessionUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[];
    OR?: SessionScalarWhereInput[];
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[];
    id?: StringFilter<'Session'> | string;
    userId?: StringFilter<'Session'> | string;
    tokenHash?: StringFilter<'Session'> | string;
    expiresAt?: DateTimeFilter<'Session'> | Date | string;
    createdAt?: DateTimeFilter<'Session'> | Date | string;
  };

  export type ChannelMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ChannelMemberWhereUniqueInput;
    update: XOR<
      ChannelMemberUpdateWithoutUserInput,
      ChannelMemberUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ChannelMemberCreateWithoutUserInput,
      ChannelMemberUncheckedCreateWithoutUserInput
    >;
  };

  export type ChannelMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ChannelMemberWhereUniqueInput;
    data: XOR<
      ChannelMemberUpdateWithoutUserInput,
      ChannelMemberUncheckedUpdateWithoutUserInput
    >;
  };

  export type ChannelMemberUpdateManyWithWhereWithoutUserInput = {
    where: ChannelMemberScalarWhereInput;
    data: XOR<
      ChannelMemberUpdateManyMutationInput,
      ChannelMemberUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ChannelMemberScalarWhereInput = {
    AND?: ChannelMemberScalarWhereInput | ChannelMemberScalarWhereInput[];
    OR?: ChannelMemberScalarWhereInput[];
    NOT?: ChannelMemberScalarWhereInput | ChannelMemberScalarWhereInput[];
    id?: StringFilter<'ChannelMember'> | string;
    channelId?: StringFilter<'ChannelMember'> | string;
    userId?: StringFilter<'ChannelMember'> | string;
    createdAt?: DateTimeFilter<'ChannelMember'> | Date | string;
    updatedAt?: DateTimeFilter<'ChannelMember'> | Date | string;
  };

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput;
    update: XOR<
      AuditLogUpdateWithoutUserInput,
      AuditLogUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      AuditLogCreateWithoutUserInput,
      AuditLogUncheckedCreateWithoutUserInput
    >;
  };

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput;
    data: XOR<
      AuditLogUpdateWithoutUserInput,
      AuditLogUncheckedUpdateWithoutUserInput
    >;
  };

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput;
    data: XOR<
      AuditLogUpdateManyMutationInput,
      AuditLogUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
    OR?: AuditLogScalarWhereInput[];
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
    id?: StringFilter<'AuditLog'> | string;
    userId?: StringNullableFilter<'AuditLog'> | string | null;
    organizationId?: StringNullableFilter<'AuditLog'> | string | null;
    action?: StringFilter<'AuditLog'> | string;
    metadata?: JsonNullableFilter<'AuditLog'>;
    createdAt?: DateTimeFilter<'AuditLog'> | Date | string;
  };

  export type OrganizationInviteUpsertWithWhereUniqueWithoutInvitedByInput = {
    where: OrganizationInviteWhereUniqueInput;
    update: XOR<
      OrganizationInviteUpdateWithoutInvitedByInput,
      OrganizationInviteUncheckedUpdateWithoutInvitedByInput
    >;
    create: XOR<
      OrganizationInviteCreateWithoutInvitedByInput,
      OrganizationInviteUncheckedCreateWithoutInvitedByInput
    >;
  };

  export type OrganizationInviteUpdateWithWhereUniqueWithoutInvitedByInput = {
    where: OrganizationInviteWhereUniqueInput;
    data: XOR<
      OrganizationInviteUpdateWithoutInvitedByInput,
      OrganizationInviteUncheckedUpdateWithoutInvitedByInput
    >;
  };

  export type OrganizationInviteUpdateManyWithWhereWithoutInvitedByInput = {
    where: OrganizationInviteScalarWhereInput;
    data: XOR<
      OrganizationInviteUpdateManyMutationInput,
      OrganizationInviteUncheckedUpdateManyWithoutInvitedByInput
    >;
  };

  export type OrganizationInviteScalarWhereInput = {
    AND?:
      | OrganizationInviteScalarWhereInput
      | OrganizationInviteScalarWhereInput[];
    OR?: OrganizationInviteScalarWhereInput[];
    NOT?:
      | OrganizationInviteScalarWhereInput
      | OrganizationInviteScalarWhereInput[];
    id?: StringFilter<'OrganizationInvite'> | string;
    token?: StringFilter<'OrganizationInvite'> | string;
    email?: StringFilter<'OrganizationInvite'> | string;
    organizationId?: StringFilter<'OrganizationInvite'> | string;
    invitedById?: StringFilter<'OrganizationInvite'> | string;
    role?:
      | EnumOrganizationRoleFilter<'OrganizationInvite'>
      | $Enums.OrganizationRole;
    status?:
      | EnumOrganizationInviteStatusFilter<'OrganizationInvite'>
      | $Enums.OrganizationInviteStatus;
    expiresAt?: DateTimeFilter<'OrganizationInvite'> | Date | string;
    createdAt?: DateTimeFilter<'OrganizationInvite'> | Date | string;
    updatedAt?: DateTimeFilter<'OrganizationInvite'> | Date | string;
  };

  export type ChannelReadStateUpsertWithWhereUniqueWithoutUserInput = {
    where: ChannelReadStateWhereUniqueInput;
    update: XOR<
      ChannelReadStateUpdateWithoutUserInput,
      ChannelReadStateUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ChannelReadStateCreateWithoutUserInput,
      ChannelReadStateUncheckedCreateWithoutUserInput
    >;
  };

  export type ChannelReadStateUpdateWithWhereUniqueWithoutUserInput = {
    where: ChannelReadStateWhereUniqueInput;
    data: XOR<
      ChannelReadStateUpdateWithoutUserInput,
      ChannelReadStateUncheckedUpdateWithoutUserInput
    >;
  };

  export type ChannelReadStateUpdateManyWithWhereWithoutUserInput = {
    where: ChannelReadStateScalarWhereInput;
    data: XOR<
      ChannelReadStateUpdateManyMutationInput,
      ChannelReadStateUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ChannelReadStateScalarWhereInput = {
    AND?: ChannelReadStateScalarWhereInput | ChannelReadStateScalarWhereInput[];
    OR?: ChannelReadStateScalarWhereInput[];
    NOT?: ChannelReadStateScalarWhereInput | ChannelReadStateScalarWhereInput[];
    id?: StringFilter<'ChannelReadState'> | string;
    channelId?: StringFilter<'ChannelReadState'> | string;
    userId?: StringFilter<'ChannelReadState'> | string;
    lastReadAt?: DateTimeFilter<'ChannelReadState'> | Date | string;
    createdAt?: DateTimeFilter<'ChannelReadState'> | Date | string;
    updatedAt?: DateTimeFilter<'ChannelReadState'> | Date | string;
  };

  export type PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput;
    update: XOR<
      PasswordResetTokenUpdateWithoutUserInput,
      PasswordResetTokenUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      PasswordResetTokenCreateWithoutUserInput,
      PasswordResetTokenUncheckedCreateWithoutUserInput
    >;
  };

  export type PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput;
    data: XOR<
      PasswordResetTokenUpdateWithoutUserInput,
      PasswordResetTokenUncheckedUpdateWithoutUserInput
    >;
  };

  export type PasswordResetTokenUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetTokenScalarWhereInput;
    data: XOR<
      PasswordResetTokenUpdateManyMutationInput,
      PasswordResetTokenUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type PasswordResetTokenScalarWhereInput = {
    AND?:
      | PasswordResetTokenScalarWhereInput
      | PasswordResetTokenScalarWhereInput[];
    OR?: PasswordResetTokenScalarWhereInput[];
    NOT?:
      | PasswordResetTokenScalarWhereInput
      | PasswordResetTokenScalarWhereInput[];
    id?: StringFilter<'PasswordResetToken'> | string;
    userId?: StringFilter<'PasswordResetToken'> | string;
    token?: StringFilter<'PasswordResetToken'> | string;
    expiresAt?: DateTimeFilter<'PasswordResetToken'> | Date | string;
    usedAt?:
      | DateTimeNullableFilter<'PasswordResetToken'>
      | Date
      | string
      | null;
    createdAt?: DateTimeFilter<'PasswordResetToken'> | Date | string;
    updatedAt?: DateTimeFilter<'PasswordResetToken'> | Date | string;
  };

  export type OrganizationMemberCreateWithoutOrganizationInput = {
    id?: string;
    role?: $Enums.OrganizationRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutOrganizationsInput;
  };

  export type OrganizationMemberUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    userId: string;
    role?: $Enums.OrganizationRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizationMemberCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput;
    create: XOR<
      OrganizationMemberCreateWithoutOrganizationInput,
      OrganizationMemberUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type OrganizationMemberCreateManyOrganizationInputEnvelope = {
    data:
      | OrganizationMemberCreateManyOrganizationInput
      | OrganizationMemberCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type ChannelCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    description?: string | null;
    isPrivate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: ChannelMemberCreateNestedManyWithoutChannelInput;
    messages?: MessageCreateNestedManyWithoutChannelInput;
    aiSummaries?: AiSummaryCreateNestedManyWithoutChannelInput;
    readStates?: ChannelReadStateCreateNestedManyWithoutChannelInput;
  };

  export type ChannelUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    description?: string | null;
    isPrivate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: ChannelMemberUncheckedCreateNestedManyWithoutChannelInput;
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput;
    aiSummaries?: AiSummaryUncheckedCreateNestedManyWithoutChannelInput;
    readStates?: ChannelReadStateUncheckedCreateNestedManyWithoutChannelInput;
  };

  export type ChannelCreateOrConnectWithoutOrganizationInput = {
    where: ChannelWhereUniqueInput;
    create: XOR<
      ChannelCreateWithoutOrganizationInput,
      ChannelUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type ChannelCreateManyOrganizationInputEnvelope = {
    data:
      | ChannelCreateManyOrganizationInput
      | ChannelCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type AuditLogCreateWithoutOrganizationInput = {
    id?: string;
    action: string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    user?: UserCreateNestedOneWithoutAuditLogsInput;
  };

  export type AuditLogUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    userId?: string | null;
    action: string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type AuditLogCreateOrConnectWithoutOrganizationInput = {
    where: AuditLogWhereUniqueInput;
    create: XOR<
      AuditLogCreateWithoutOrganizationInput,
      AuditLogUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type AuditLogCreateManyOrganizationInputEnvelope = {
    data:
      | AuditLogCreateManyOrganizationInput
      | AuditLogCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type AiSummaryCreateWithoutOrganizationInput = {
    id?: string;
    summary: string;
    rangeStart?: Date | string | null;
    rangeEnd?: Date | string | null;
    createdAt?: Date | string;
    channel?: ChannelCreateNestedOneWithoutAiSummariesInput;
  };

  export type AiSummaryUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    channelId?: string | null;
    summary: string;
    rangeStart?: Date | string | null;
    rangeEnd?: Date | string | null;
    createdAt?: Date | string;
  };

  export type AiSummaryCreateOrConnectWithoutOrganizationInput = {
    where: AiSummaryWhereUniqueInput;
    create: XOR<
      AiSummaryCreateWithoutOrganizationInput,
      AiSummaryUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type AiSummaryCreateManyOrganizationInputEnvelope = {
    data:
      | AiSummaryCreateManyOrganizationInput
      | AiSummaryCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type AiReportCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    content: string;
    rangeStart?: Date | string | null;
    rangeEnd?: Date | string | null;
    createdAt?: Date | string;
  };

  export type AiReportUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    content: string;
    rangeStart?: Date | string | null;
    rangeEnd?: Date | string | null;
    createdAt?: Date | string;
  };

  export type AiReportCreateOrConnectWithoutOrganizationInput = {
    where: AiReportWhereUniqueInput;
    create: XOR<
      AiReportCreateWithoutOrganizationInput,
      AiReportUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type AiReportCreateManyOrganizationInputEnvelope = {
    data:
      | AiReportCreateManyOrganizationInput
      | AiReportCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type OrganizationInviteCreateWithoutOrganizationInput = {
    id?: string;
    token: string;
    email: string;
    role?: $Enums.OrganizationRole;
    status?: $Enums.OrganizationInviteStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invitedBy: UserCreateNestedOneWithoutSentInvitesInput;
  };

  export type OrganizationInviteUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    token: string;
    email: string;
    invitedById: string;
    role?: $Enums.OrganizationRole;
    status?: $Enums.OrganizationInviteStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizationInviteCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationInviteWhereUniqueInput;
    create: XOR<
      OrganizationInviteCreateWithoutOrganizationInput,
      OrganizationInviteUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type OrganizationInviteCreateManyOrganizationInputEnvelope = {
    data:
      | OrganizationInviteCreateManyOrganizationInput
      | OrganizationInviteCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput =
    {
      where: OrganizationMemberWhereUniqueInput;
      update: XOR<
        OrganizationMemberUpdateWithoutOrganizationInput,
        OrganizationMemberUncheckedUpdateWithoutOrganizationInput
      >;
      create: XOR<
        OrganizationMemberCreateWithoutOrganizationInput,
        OrganizationMemberUncheckedCreateWithoutOrganizationInput
      >;
    };

  export type OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput =
    {
      where: OrganizationMemberWhereUniqueInput;
      data: XOR<
        OrganizationMemberUpdateWithoutOrganizationInput,
        OrganizationMemberUncheckedUpdateWithoutOrganizationInput
      >;
    };

  export type OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationMemberScalarWhereInput;
    data: XOR<
      OrganizationMemberUpdateManyMutationInput,
      OrganizationMemberUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type ChannelUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ChannelWhereUniqueInput;
    update: XOR<
      ChannelUpdateWithoutOrganizationInput,
      ChannelUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      ChannelCreateWithoutOrganizationInput,
      ChannelUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type ChannelUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ChannelWhereUniqueInput;
    data: XOR<
      ChannelUpdateWithoutOrganizationInput,
      ChannelUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type ChannelUpdateManyWithWhereWithoutOrganizationInput = {
    where: ChannelScalarWhereInput;
    data: XOR<
      ChannelUpdateManyMutationInput,
      ChannelUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type ChannelScalarWhereInput = {
    AND?: ChannelScalarWhereInput | ChannelScalarWhereInput[];
    OR?: ChannelScalarWhereInput[];
    NOT?: ChannelScalarWhereInput | ChannelScalarWhereInput[];
    id?: StringFilter<'Channel'> | string;
    organizationId?: StringFilter<'Channel'> | string;
    name?: StringFilter<'Channel'> | string;
    description?: StringNullableFilter<'Channel'> | string | null;
    isPrivate?: BoolFilter<'Channel'> | boolean;
    createdAt?: DateTimeFilter<'Channel'> | Date | string;
    updatedAt?: DateTimeFilter<'Channel'> | Date | string;
  };

  export type AuditLogUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AuditLogWhereUniqueInput;
    update: XOR<
      AuditLogUpdateWithoutOrganizationInput,
      AuditLogUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      AuditLogCreateWithoutOrganizationInput,
      AuditLogUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type AuditLogUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AuditLogWhereUniqueInput;
    data: XOR<
      AuditLogUpdateWithoutOrganizationInput,
      AuditLogUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type AuditLogUpdateManyWithWhereWithoutOrganizationInput = {
    where: AuditLogScalarWhereInput;
    data: XOR<
      AuditLogUpdateManyMutationInput,
      AuditLogUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type AiSummaryUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AiSummaryWhereUniqueInput;
    update: XOR<
      AiSummaryUpdateWithoutOrganizationInput,
      AiSummaryUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      AiSummaryCreateWithoutOrganizationInput,
      AiSummaryUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type AiSummaryUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AiSummaryWhereUniqueInput;
    data: XOR<
      AiSummaryUpdateWithoutOrganizationInput,
      AiSummaryUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type AiSummaryUpdateManyWithWhereWithoutOrganizationInput = {
    where: AiSummaryScalarWhereInput;
    data: XOR<
      AiSummaryUpdateManyMutationInput,
      AiSummaryUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type AiSummaryScalarWhereInput = {
    AND?: AiSummaryScalarWhereInput | AiSummaryScalarWhereInput[];
    OR?: AiSummaryScalarWhereInput[];
    NOT?: AiSummaryScalarWhereInput | AiSummaryScalarWhereInput[];
    id?: StringFilter<'AiSummary'> | string;
    organizationId?: StringFilter<'AiSummary'> | string;
    channelId?: StringNullableFilter<'AiSummary'> | string | null;
    summary?: StringFilter<'AiSummary'> | string;
    rangeStart?: DateTimeNullableFilter<'AiSummary'> | Date | string | null;
    rangeEnd?: DateTimeNullableFilter<'AiSummary'> | Date | string | null;
    createdAt?: DateTimeFilter<'AiSummary'> | Date | string;
  };

  export type AiReportUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AiReportWhereUniqueInput;
    update: XOR<
      AiReportUpdateWithoutOrganizationInput,
      AiReportUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      AiReportCreateWithoutOrganizationInput,
      AiReportUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type AiReportUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AiReportWhereUniqueInput;
    data: XOR<
      AiReportUpdateWithoutOrganizationInput,
      AiReportUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type AiReportUpdateManyWithWhereWithoutOrganizationInput = {
    where: AiReportScalarWhereInput;
    data: XOR<
      AiReportUpdateManyMutationInput,
      AiReportUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type AiReportScalarWhereInput = {
    AND?: AiReportScalarWhereInput | AiReportScalarWhereInput[];
    OR?: AiReportScalarWhereInput[];
    NOT?: AiReportScalarWhereInput | AiReportScalarWhereInput[];
    id?: StringFilter<'AiReport'> | string;
    organizationId?: StringFilter<'AiReport'> | string;
    title?: StringFilter<'AiReport'> | string;
    content?: StringFilter<'AiReport'> | string;
    rangeStart?: DateTimeNullableFilter<'AiReport'> | Date | string | null;
    rangeEnd?: DateTimeNullableFilter<'AiReport'> | Date | string | null;
    createdAt?: DateTimeFilter<'AiReport'> | Date | string;
  };

  export type OrganizationInviteUpsertWithWhereUniqueWithoutOrganizationInput =
    {
      where: OrganizationInviteWhereUniqueInput;
      update: XOR<
        OrganizationInviteUpdateWithoutOrganizationInput,
        OrganizationInviteUncheckedUpdateWithoutOrganizationInput
      >;
      create: XOR<
        OrganizationInviteCreateWithoutOrganizationInput,
        OrganizationInviteUncheckedCreateWithoutOrganizationInput
      >;
    };

  export type OrganizationInviteUpdateWithWhereUniqueWithoutOrganizationInput =
    {
      where: OrganizationInviteWhereUniqueInput;
      data: XOR<
        OrganizationInviteUpdateWithoutOrganizationInput,
        OrganizationInviteUncheckedUpdateWithoutOrganizationInput
      >;
    };

  export type OrganizationInviteUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationInviteScalarWhereInput;
    data: XOR<
      OrganizationInviteUpdateManyMutationInput,
      OrganizationInviteUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type OrganizationCreateWithoutInvitesInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput;
    channels?: ChannelCreateNestedManyWithoutOrganizationInput;
    auditLogs?: AuditLogCreateNestedManyWithoutOrganizationInput;
    aiSummaries?: AiSummaryCreateNestedManyWithoutOrganizationInput;
    aiReports?: AiReportCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutInvitesInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    channels?: ChannelUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
    aiSummaries?: AiSummaryUncheckedCreateNestedManyWithoutOrganizationInput;
    aiReports?: AiReportUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutInvitesInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutInvitesInput,
      OrganizationUncheckedCreateWithoutInvitesInput
    >;
  };

  export type UserCreateWithoutSentInvitesInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizations?: OrganizationMemberCreateNestedManyWithoutUserInput;
    messages?: MessageCreateNestedManyWithoutAuthorInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    channelMembers?: ChannelMemberCreateNestedManyWithoutUserInput;
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput;
    channelReadStates?: ChannelReadStateCreateNestedManyWithoutUserInput;
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutSentInvitesInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizations?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput;
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    channelMembers?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput;
    channelReadStates?: ChannelReadStateUncheckedCreateNestedManyWithoutUserInput;
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutSentInvitesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutSentInvitesInput,
      UserUncheckedCreateWithoutSentInvitesInput
    >;
  };

  export type OrganizationUpsertWithoutInvitesInput = {
    update: XOR<
      OrganizationUpdateWithoutInvitesInput,
      OrganizationUncheckedUpdateWithoutInvitesInput
    >;
    create: XOR<
      OrganizationCreateWithoutInvitesInput,
      OrganizationUncheckedCreateWithoutInvitesInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutInvitesInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutInvitesInput,
      OrganizationUncheckedUpdateWithoutInvitesInput
    >;
  };

  export type OrganizationUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput;
    channels?: ChannelUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutOrganizationNestedInput;
    aiSummaries?: AiSummaryUpdateManyWithoutOrganizationNestedInput;
    aiReports?: AiReportUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    channels?: ChannelUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
    aiSummaries?: AiSummaryUncheckedUpdateManyWithoutOrganizationNestedInput;
    aiReports?: AiReportUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type UserUpsertWithoutSentInvitesInput = {
    update: XOR<
      UserUpdateWithoutSentInvitesInput,
      UserUncheckedUpdateWithoutSentInvitesInput
    >;
    create: XOR<
      UserCreateWithoutSentInvitesInput,
      UserUncheckedCreateWithoutSentInvitesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSentInvitesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutSentInvitesInput,
      UserUncheckedUpdateWithoutSentInvitesInput
    >;
  };

  export type UserUpdateWithoutSentInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizations?: OrganizationMemberUpdateManyWithoutUserNestedInput;
    messages?: MessageUpdateManyWithoutAuthorNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    channelMembers?: ChannelMemberUpdateManyWithoutUserNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput;
    channelReadStates?: ChannelReadStateUpdateManyWithoutUserNestedInput;
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutSentInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizations?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    channelMembers?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    channelReadStates?: ChannelReadStateUncheckedUpdateManyWithoutUserNestedInput;
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type OrganizationCreateWithoutMembersInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    channels?: ChannelCreateNestedManyWithoutOrganizationInput;
    auditLogs?: AuditLogCreateNestedManyWithoutOrganizationInput;
    aiSummaries?: AiSummaryCreateNestedManyWithoutOrganizationInput;
    aiReports?: AiReportCreateNestedManyWithoutOrganizationInput;
    invites?: OrganizationInviteCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutMembersInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    channels?: ChannelUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
    aiSummaries?: AiSummaryUncheckedCreateNestedManyWithoutOrganizationInput;
    aiReports?: AiReportUncheckedCreateNestedManyWithoutOrganizationInput;
    invites?: OrganizationInviteUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutMembersInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutMembersInput,
      OrganizationUncheckedCreateWithoutMembersInput
    >;
  };

  export type UserCreateWithoutOrganizationsInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: MessageCreateNestedManyWithoutAuthorInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    channelMembers?: ChannelMemberCreateNestedManyWithoutUserInput;
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput;
    sentInvites?: OrganizationInviteCreateNestedManyWithoutInvitedByInput;
    channelReadStates?: ChannelReadStateCreateNestedManyWithoutUserInput;
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutOrganizationsInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    channelMembers?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput;
    sentInvites?: OrganizationInviteUncheckedCreateNestedManyWithoutInvitedByInput;
    channelReadStates?: ChannelReadStateUncheckedCreateNestedManyWithoutUserInput;
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutOrganizationsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutOrganizationsInput,
      UserUncheckedCreateWithoutOrganizationsInput
    >;
  };

  export type OrganizationUpsertWithoutMembersInput = {
    update: XOR<
      OrganizationUpdateWithoutMembersInput,
      OrganizationUncheckedUpdateWithoutMembersInput
    >;
    create: XOR<
      OrganizationCreateWithoutMembersInput,
      OrganizationUncheckedCreateWithoutMembersInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutMembersInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutMembersInput,
      OrganizationUncheckedUpdateWithoutMembersInput
    >;
  };

  export type OrganizationUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    channels?: ChannelUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutOrganizationNestedInput;
    aiSummaries?: AiSummaryUpdateManyWithoutOrganizationNestedInput;
    aiReports?: AiReportUpdateManyWithoutOrganizationNestedInput;
    invites?: OrganizationInviteUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    channels?: ChannelUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
    aiSummaries?: AiSummaryUncheckedUpdateManyWithoutOrganizationNestedInput;
    aiReports?: AiReportUncheckedUpdateManyWithoutOrganizationNestedInput;
    invites?: OrganizationInviteUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type UserUpsertWithoutOrganizationsInput = {
    update: XOR<
      UserUpdateWithoutOrganizationsInput,
      UserUncheckedUpdateWithoutOrganizationsInput
    >;
    create: XOR<
      UserCreateWithoutOrganizationsInput,
      UserUncheckedCreateWithoutOrganizationsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutOrganizationsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutOrganizationsInput,
      UserUncheckedUpdateWithoutOrganizationsInput
    >;
  };

  export type UserUpdateWithoutOrganizationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: MessageUpdateManyWithoutAuthorNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    channelMembers?: ChannelMemberUpdateManyWithoutUserNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput;
    sentInvites?: OrganizationInviteUpdateManyWithoutInvitedByNestedInput;
    channelReadStates?: ChannelReadStateUpdateManyWithoutUserNestedInput;
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutOrganizationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    channelMembers?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    sentInvites?: OrganizationInviteUncheckedUpdateManyWithoutInvitedByNestedInput;
    channelReadStates?: ChannelReadStateUncheckedUpdateManyWithoutUserNestedInput;
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type OrganizationCreateWithoutChannelsInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput;
    auditLogs?: AuditLogCreateNestedManyWithoutOrganizationInput;
    aiSummaries?: AiSummaryCreateNestedManyWithoutOrganizationInput;
    aiReports?: AiReportCreateNestedManyWithoutOrganizationInput;
    invites?: OrganizationInviteCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutChannelsInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
    aiSummaries?: AiSummaryUncheckedCreateNestedManyWithoutOrganizationInput;
    aiReports?: AiReportUncheckedCreateNestedManyWithoutOrganizationInput;
    invites?: OrganizationInviteUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutChannelsInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutChannelsInput,
      OrganizationUncheckedCreateWithoutChannelsInput
    >;
  };

  export type ChannelMemberCreateWithoutChannelInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutChannelMembersInput;
  };

  export type ChannelMemberUncheckedCreateWithoutChannelInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ChannelMemberCreateOrConnectWithoutChannelInput = {
    where: ChannelMemberWhereUniqueInput;
    create: XOR<
      ChannelMemberCreateWithoutChannelInput,
      ChannelMemberUncheckedCreateWithoutChannelInput
    >;
  };

  export type ChannelMemberCreateManyChannelInputEnvelope = {
    data:
      | ChannelMemberCreateManyChannelInput
      | ChannelMemberCreateManyChannelInput[];
    skipDuplicates?: boolean;
  };

  export type MessageCreateWithoutChannelInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: UserCreateNestedOneWithoutMessagesInput;
  };

  export type MessageUncheckedCreateWithoutChannelInput = {
    id?: string;
    content: string;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MessageCreateOrConnectWithoutChannelInput = {
    where: MessageWhereUniqueInput;
    create: XOR<
      MessageCreateWithoutChannelInput,
      MessageUncheckedCreateWithoutChannelInput
    >;
  };

  export type MessageCreateManyChannelInputEnvelope = {
    data: MessageCreateManyChannelInput | MessageCreateManyChannelInput[];
    skipDuplicates?: boolean;
  };

  export type AiSummaryCreateWithoutChannelInput = {
    id?: string;
    summary: string;
    rangeStart?: Date | string | null;
    rangeEnd?: Date | string | null;
    createdAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutAiSummariesInput;
  };

  export type AiSummaryUncheckedCreateWithoutChannelInput = {
    id?: string;
    organizationId: string;
    summary: string;
    rangeStart?: Date | string | null;
    rangeEnd?: Date | string | null;
    createdAt?: Date | string;
  };

  export type AiSummaryCreateOrConnectWithoutChannelInput = {
    where: AiSummaryWhereUniqueInput;
    create: XOR<
      AiSummaryCreateWithoutChannelInput,
      AiSummaryUncheckedCreateWithoutChannelInput
    >;
  };

  export type AiSummaryCreateManyChannelInputEnvelope = {
    data: AiSummaryCreateManyChannelInput | AiSummaryCreateManyChannelInput[];
    skipDuplicates?: boolean;
  };

  export type ChannelReadStateCreateWithoutChannelInput = {
    id?: string;
    lastReadAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutChannelReadStatesInput;
  };

  export type ChannelReadStateUncheckedCreateWithoutChannelInput = {
    id?: string;
    userId: string;
    lastReadAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ChannelReadStateCreateOrConnectWithoutChannelInput = {
    where: ChannelReadStateWhereUniqueInput;
    create: XOR<
      ChannelReadStateCreateWithoutChannelInput,
      ChannelReadStateUncheckedCreateWithoutChannelInput
    >;
  };

  export type ChannelReadStateCreateManyChannelInputEnvelope = {
    data:
      | ChannelReadStateCreateManyChannelInput
      | ChannelReadStateCreateManyChannelInput[];
    skipDuplicates?: boolean;
  };

  export type OrganizationUpsertWithoutChannelsInput = {
    update: XOR<
      OrganizationUpdateWithoutChannelsInput,
      OrganizationUncheckedUpdateWithoutChannelsInput
    >;
    create: XOR<
      OrganizationCreateWithoutChannelsInput,
      OrganizationUncheckedCreateWithoutChannelsInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutChannelsInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutChannelsInput,
      OrganizationUncheckedUpdateWithoutChannelsInput
    >;
  };

  export type OrganizationUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutOrganizationNestedInput;
    aiSummaries?: AiSummaryUpdateManyWithoutOrganizationNestedInput;
    aiReports?: AiReportUpdateManyWithoutOrganizationNestedInput;
    invites?: OrganizationInviteUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
    aiSummaries?: AiSummaryUncheckedUpdateManyWithoutOrganizationNestedInput;
    aiReports?: AiReportUncheckedUpdateManyWithoutOrganizationNestedInput;
    invites?: OrganizationInviteUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type ChannelMemberUpsertWithWhereUniqueWithoutChannelInput = {
    where: ChannelMemberWhereUniqueInput;
    update: XOR<
      ChannelMemberUpdateWithoutChannelInput,
      ChannelMemberUncheckedUpdateWithoutChannelInput
    >;
    create: XOR<
      ChannelMemberCreateWithoutChannelInput,
      ChannelMemberUncheckedCreateWithoutChannelInput
    >;
  };

  export type ChannelMemberUpdateWithWhereUniqueWithoutChannelInput = {
    where: ChannelMemberWhereUniqueInput;
    data: XOR<
      ChannelMemberUpdateWithoutChannelInput,
      ChannelMemberUncheckedUpdateWithoutChannelInput
    >;
  };

  export type ChannelMemberUpdateManyWithWhereWithoutChannelInput = {
    where: ChannelMemberScalarWhereInput;
    data: XOR<
      ChannelMemberUpdateManyMutationInput,
      ChannelMemberUncheckedUpdateManyWithoutChannelInput
    >;
  };

  export type MessageUpsertWithWhereUniqueWithoutChannelInput = {
    where: MessageWhereUniqueInput;
    update: XOR<
      MessageUpdateWithoutChannelInput,
      MessageUncheckedUpdateWithoutChannelInput
    >;
    create: XOR<
      MessageCreateWithoutChannelInput,
      MessageUncheckedCreateWithoutChannelInput
    >;
  };

  export type MessageUpdateWithWhereUniqueWithoutChannelInput = {
    where: MessageWhereUniqueInput;
    data: XOR<
      MessageUpdateWithoutChannelInput,
      MessageUncheckedUpdateWithoutChannelInput
    >;
  };

  export type MessageUpdateManyWithWhereWithoutChannelInput = {
    where: MessageScalarWhereInput;
    data: XOR<
      MessageUpdateManyMutationInput,
      MessageUncheckedUpdateManyWithoutChannelInput
    >;
  };

  export type AiSummaryUpsertWithWhereUniqueWithoutChannelInput = {
    where: AiSummaryWhereUniqueInput;
    update: XOR<
      AiSummaryUpdateWithoutChannelInput,
      AiSummaryUncheckedUpdateWithoutChannelInput
    >;
    create: XOR<
      AiSummaryCreateWithoutChannelInput,
      AiSummaryUncheckedCreateWithoutChannelInput
    >;
  };

  export type AiSummaryUpdateWithWhereUniqueWithoutChannelInput = {
    where: AiSummaryWhereUniqueInput;
    data: XOR<
      AiSummaryUpdateWithoutChannelInput,
      AiSummaryUncheckedUpdateWithoutChannelInput
    >;
  };

  export type AiSummaryUpdateManyWithWhereWithoutChannelInput = {
    where: AiSummaryScalarWhereInput;
    data: XOR<
      AiSummaryUpdateManyMutationInput,
      AiSummaryUncheckedUpdateManyWithoutChannelInput
    >;
  };

  export type ChannelReadStateUpsertWithWhereUniqueWithoutChannelInput = {
    where: ChannelReadStateWhereUniqueInput;
    update: XOR<
      ChannelReadStateUpdateWithoutChannelInput,
      ChannelReadStateUncheckedUpdateWithoutChannelInput
    >;
    create: XOR<
      ChannelReadStateCreateWithoutChannelInput,
      ChannelReadStateUncheckedCreateWithoutChannelInput
    >;
  };

  export type ChannelReadStateUpdateWithWhereUniqueWithoutChannelInput = {
    where: ChannelReadStateWhereUniqueInput;
    data: XOR<
      ChannelReadStateUpdateWithoutChannelInput,
      ChannelReadStateUncheckedUpdateWithoutChannelInput
    >;
  };

  export type ChannelReadStateUpdateManyWithWhereWithoutChannelInput = {
    where: ChannelReadStateScalarWhereInput;
    data: XOR<
      ChannelReadStateUpdateManyMutationInput,
      ChannelReadStateUncheckedUpdateManyWithoutChannelInput
    >;
  };

  export type ChannelCreateWithoutMembersInput = {
    id?: string;
    name: string;
    description?: string | null;
    isPrivate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutChannelsInput;
    messages?: MessageCreateNestedManyWithoutChannelInput;
    aiSummaries?: AiSummaryCreateNestedManyWithoutChannelInput;
    readStates?: ChannelReadStateCreateNestedManyWithoutChannelInput;
  };

  export type ChannelUncheckedCreateWithoutMembersInput = {
    id?: string;
    organizationId: string;
    name: string;
    description?: string | null;
    isPrivate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput;
    aiSummaries?: AiSummaryUncheckedCreateNestedManyWithoutChannelInput;
    readStates?: ChannelReadStateUncheckedCreateNestedManyWithoutChannelInput;
  };

  export type ChannelCreateOrConnectWithoutMembersInput = {
    where: ChannelWhereUniqueInput;
    create: XOR<
      ChannelCreateWithoutMembersInput,
      ChannelUncheckedCreateWithoutMembersInput
    >;
  };

  export type UserCreateWithoutChannelMembersInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizations?: OrganizationMemberCreateNestedManyWithoutUserInput;
    messages?: MessageCreateNestedManyWithoutAuthorInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput;
    sentInvites?: OrganizationInviteCreateNestedManyWithoutInvitedByInput;
    channelReadStates?: ChannelReadStateCreateNestedManyWithoutUserInput;
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutChannelMembersInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizations?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput;
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput;
    sentInvites?: OrganizationInviteUncheckedCreateNestedManyWithoutInvitedByInput;
    channelReadStates?: ChannelReadStateUncheckedCreateNestedManyWithoutUserInput;
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutChannelMembersInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutChannelMembersInput,
      UserUncheckedCreateWithoutChannelMembersInput
    >;
  };

  export type ChannelUpsertWithoutMembersInput = {
    update: XOR<
      ChannelUpdateWithoutMembersInput,
      ChannelUncheckedUpdateWithoutMembersInput
    >;
    create: XOR<
      ChannelCreateWithoutMembersInput,
      ChannelUncheckedCreateWithoutMembersInput
    >;
    where?: ChannelWhereInput;
  };

  export type ChannelUpdateToOneWithWhereWithoutMembersInput = {
    where?: ChannelWhereInput;
    data: XOR<
      ChannelUpdateWithoutMembersInput,
      ChannelUncheckedUpdateWithoutMembersInput
    >;
  };

  export type ChannelUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isPrivate?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutChannelsNestedInput;
    messages?: MessageUpdateManyWithoutChannelNestedInput;
    aiSummaries?: AiSummaryUpdateManyWithoutChannelNestedInput;
    readStates?: ChannelReadStateUpdateManyWithoutChannelNestedInput;
  };

  export type ChannelUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isPrivate?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput;
    aiSummaries?: AiSummaryUncheckedUpdateManyWithoutChannelNestedInput;
    readStates?: ChannelReadStateUncheckedUpdateManyWithoutChannelNestedInput;
  };

  export type UserUpsertWithoutChannelMembersInput = {
    update: XOR<
      UserUpdateWithoutChannelMembersInput,
      UserUncheckedUpdateWithoutChannelMembersInput
    >;
    create: XOR<
      UserCreateWithoutChannelMembersInput,
      UserUncheckedCreateWithoutChannelMembersInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutChannelMembersInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutChannelMembersInput,
      UserUncheckedUpdateWithoutChannelMembersInput
    >;
  };

  export type UserUpdateWithoutChannelMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizations?: OrganizationMemberUpdateManyWithoutUserNestedInput;
    messages?: MessageUpdateManyWithoutAuthorNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput;
    sentInvites?: OrganizationInviteUpdateManyWithoutInvitedByNestedInput;
    channelReadStates?: ChannelReadStateUpdateManyWithoutUserNestedInput;
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutChannelMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizations?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    sentInvites?: OrganizationInviteUncheckedUpdateManyWithoutInvitedByNestedInput;
    channelReadStates?: ChannelReadStateUncheckedUpdateManyWithoutUserNestedInput;
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type ChannelCreateWithoutMessagesInput = {
    id?: string;
    name: string;
    description?: string | null;
    isPrivate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutChannelsInput;
    members?: ChannelMemberCreateNestedManyWithoutChannelInput;
    aiSummaries?: AiSummaryCreateNestedManyWithoutChannelInput;
    readStates?: ChannelReadStateCreateNestedManyWithoutChannelInput;
  };

  export type ChannelUncheckedCreateWithoutMessagesInput = {
    id?: string;
    organizationId: string;
    name: string;
    description?: string | null;
    isPrivate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: ChannelMemberUncheckedCreateNestedManyWithoutChannelInput;
    aiSummaries?: AiSummaryUncheckedCreateNestedManyWithoutChannelInput;
    readStates?: ChannelReadStateUncheckedCreateNestedManyWithoutChannelInput;
  };

  export type ChannelCreateOrConnectWithoutMessagesInput = {
    where: ChannelWhereUniqueInput;
    create: XOR<
      ChannelCreateWithoutMessagesInput,
      ChannelUncheckedCreateWithoutMessagesInput
    >;
  };

  export type UserCreateWithoutMessagesInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizations?: OrganizationMemberCreateNestedManyWithoutUserInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    channelMembers?: ChannelMemberCreateNestedManyWithoutUserInput;
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput;
    sentInvites?: OrganizationInviteCreateNestedManyWithoutInvitedByInput;
    channelReadStates?: ChannelReadStateCreateNestedManyWithoutUserInput;
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizations?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    channelMembers?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput;
    sentInvites?: OrganizationInviteUncheckedCreateNestedManyWithoutInvitedByInput;
    channelReadStates?: ChannelReadStateUncheckedCreateNestedManyWithoutUserInput;
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutMessagesInput,
      UserUncheckedCreateWithoutMessagesInput
    >;
  };

  export type ChannelUpsertWithoutMessagesInput = {
    update: XOR<
      ChannelUpdateWithoutMessagesInput,
      ChannelUncheckedUpdateWithoutMessagesInput
    >;
    create: XOR<
      ChannelCreateWithoutMessagesInput,
      ChannelUncheckedCreateWithoutMessagesInput
    >;
    where?: ChannelWhereInput;
  };

  export type ChannelUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChannelWhereInput;
    data: XOR<
      ChannelUpdateWithoutMessagesInput,
      ChannelUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type ChannelUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isPrivate?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutChannelsNestedInput;
    members?: ChannelMemberUpdateManyWithoutChannelNestedInput;
    aiSummaries?: AiSummaryUpdateManyWithoutChannelNestedInput;
    readStates?: ChannelReadStateUpdateManyWithoutChannelNestedInput;
  };

  export type ChannelUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isPrivate?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: ChannelMemberUncheckedUpdateManyWithoutChannelNestedInput;
    aiSummaries?: AiSummaryUncheckedUpdateManyWithoutChannelNestedInput;
    readStates?: ChannelReadStateUncheckedUpdateManyWithoutChannelNestedInput;
  };

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<
      UserUpdateWithoutMessagesInput,
      UserUncheckedUpdateWithoutMessagesInput
    >;
    create: XOR<
      UserCreateWithoutMessagesInput,
      UserUncheckedCreateWithoutMessagesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutMessagesInput,
      UserUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizations?: OrganizationMemberUpdateManyWithoutUserNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    channelMembers?: ChannelMemberUpdateManyWithoutUserNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput;
    sentInvites?: OrganizationInviteUpdateManyWithoutInvitedByNestedInput;
    channelReadStates?: ChannelReadStateUpdateManyWithoutUserNestedInput;
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizations?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    channelMembers?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    sentInvites?: OrganizationInviteUncheckedUpdateManyWithoutInvitedByNestedInput;
    channelReadStates?: ChannelReadStateUncheckedUpdateManyWithoutUserNestedInput;
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutSessionsInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizations?: OrganizationMemberCreateNestedManyWithoutUserInput;
    messages?: MessageCreateNestedManyWithoutAuthorInput;
    channelMembers?: ChannelMemberCreateNestedManyWithoutUserInput;
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput;
    sentInvites?: OrganizationInviteCreateNestedManyWithoutInvitedByInput;
    channelReadStates?: ChannelReadStateCreateNestedManyWithoutUserInput;
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizations?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput;
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput;
    channelMembers?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput;
    sentInvites?: OrganizationInviteUncheckedCreateNestedManyWithoutInvitedByInput;
    channelReadStates?: ChannelReadStateUncheckedCreateNestedManyWithoutUserInput;
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >;
  };

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<
      UserUpdateWithoutSessionsInput,
      UserUncheckedUpdateWithoutSessionsInput
    >;
    create: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutSessionsInput,
      UserUncheckedUpdateWithoutSessionsInput
    >;
  };

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizations?: OrganizationMemberUpdateManyWithoutUserNestedInput;
    messages?: MessageUpdateManyWithoutAuthorNestedInput;
    channelMembers?: ChannelMemberUpdateManyWithoutUserNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput;
    sentInvites?: OrganizationInviteUpdateManyWithoutInvitedByNestedInput;
    channelReadStates?: ChannelReadStateUpdateManyWithoutUserNestedInput;
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizations?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput;
    channelMembers?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    sentInvites?: OrganizationInviteUncheckedUpdateManyWithoutInvitedByNestedInput;
    channelReadStates?: ChannelReadStateUncheckedUpdateManyWithoutUserNestedInput;
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutAuditLogsInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizations?: OrganizationMemberCreateNestedManyWithoutUserInput;
    messages?: MessageCreateNestedManyWithoutAuthorInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    channelMembers?: ChannelMemberCreateNestedManyWithoutUserInput;
    sentInvites?: OrganizationInviteCreateNestedManyWithoutInvitedByInput;
    channelReadStates?: ChannelReadStateCreateNestedManyWithoutUserInput;
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizations?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput;
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    channelMembers?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput;
    sentInvites?: OrganizationInviteUncheckedCreateNestedManyWithoutInvitedByInput;
    channelReadStates?: ChannelReadStateUncheckedCreateNestedManyWithoutUserInput;
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutAuditLogsInput,
      UserUncheckedCreateWithoutAuditLogsInput
    >;
  };

  export type OrganizationCreateWithoutAuditLogsInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput;
    channels?: ChannelCreateNestedManyWithoutOrganizationInput;
    aiSummaries?: AiSummaryCreateNestedManyWithoutOrganizationInput;
    aiReports?: AiReportCreateNestedManyWithoutOrganizationInput;
    invites?: OrganizationInviteCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutAuditLogsInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    channels?: ChannelUncheckedCreateNestedManyWithoutOrganizationInput;
    aiSummaries?: AiSummaryUncheckedCreateNestedManyWithoutOrganizationInput;
    aiReports?: AiReportUncheckedCreateNestedManyWithoutOrganizationInput;
    invites?: OrganizationInviteUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutAuditLogsInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutAuditLogsInput,
      OrganizationUncheckedCreateWithoutAuditLogsInput
    >;
  };

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<
      UserUpdateWithoutAuditLogsInput,
      UserUncheckedUpdateWithoutAuditLogsInput
    >;
    create: XOR<
      UserCreateWithoutAuditLogsInput,
      UserUncheckedCreateWithoutAuditLogsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutAuditLogsInput,
      UserUncheckedUpdateWithoutAuditLogsInput
    >;
  };

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizations?: OrganizationMemberUpdateManyWithoutUserNestedInput;
    messages?: MessageUpdateManyWithoutAuthorNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    channelMembers?: ChannelMemberUpdateManyWithoutUserNestedInput;
    sentInvites?: OrganizationInviteUpdateManyWithoutInvitedByNestedInput;
    channelReadStates?: ChannelReadStateUpdateManyWithoutUserNestedInput;
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizations?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    channelMembers?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput;
    sentInvites?: OrganizationInviteUncheckedUpdateManyWithoutInvitedByNestedInput;
    channelReadStates?: ChannelReadStateUncheckedUpdateManyWithoutUserNestedInput;
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type OrganizationUpsertWithoutAuditLogsInput = {
    update: XOR<
      OrganizationUpdateWithoutAuditLogsInput,
      OrganizationUncheckedUpdateWithoutAuditLogsInput
    >;
    create: XOR<
      OrganizationCreateWithoutAuditLogsInput,
      OrganizationUncheckedCreateWithoutAuditLogsInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutAuditLogsInput,
      OrganizationUncheckedUpdateWithoutAuditLogsInput
    >;
  };

  export type OrganizationUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput;
    channels?: ChannelUpdateManyWithoutOrganizationNestedInput;
    aiSummaries?: AiSummaryUpdateManyWithoutOrganizationNestedInput;
    aiReports?: AiReportUpdateManyWithoutOrganizationNestedInput;
    invites?: OrganizationInviteUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    channels?: ChannelUncheckedUpdateManyWithoutOrganizationNestedInput;
    aiSummaries?: AiSummaryUncheckedUpdateManyWithoutOrganizationNestedInput;
    aiReports?: AiReportUncheckedUpdateManyWithoutOrganizationNestedInput;
    invites?: OrganizationInviteUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationCreateWithoutAiSummariesInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput;
    channels?: ChannelCreateNestedManyWithoutOrganizationInput;
    auditLogs?: AuditLogCreateNestedManyWithoutOrganizationInput;
    aiReports?: AiReportCreateNestedManyWithoutOrganizationInput;
    invites?: OrganizationInviteCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutAiSummariesInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    channels?: ChannelUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
    aiReports?: AiReportUncheckedCreateNestedManyWithoutOrganizationInput;
    invites?: OrganizationInviteUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutAiSummariesInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutAiSummariesInput,
      OrganizationUncheckedCreateWithoutAiSummariesInput
    >;
  };

  export type ChannelCreateWithoutAiSummariesInput = {
    id?: string;
    name: string;
    description?: string | null;
    isPrivate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutChannelsInput;
    members?: ChannelMemberCreateNestedManyWithoutChannelInput;
    messages?: MessageCreateNestedManyWithoutChannelInput;
    readStates?: ChannelReadStateCreateNestedManyWithoutChannelInput;
  };

  export type ChannelUncheckedCreateWithoutAiSummariesInput = {
    id?: string;
    organizationId: string;
    name: string;
    description?: string | null;
    isPrivate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: ChannelMemberUncheckedCreateNestedManyWithoutChannelInput;
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput;
    readStates?: ChannelReadStateUncheckedCreateNestedManyWithoutChannelInput;
  };

  export type ChannelCreateOrConnectWithoutAiSummariesInput = {
    where: ChannelWhereUniqueInput;
    create: XOR<
      ChannelCreateWithoutAiSummariesInput,
      ChannelUncheckedCreateWithoutAiSummariesInput
    >;
  };

  export type OrganizationUpsertWithoutAiSummariesInput = {
    update: XOR<
      OrganizationUpdateWithoutAiSummariesInput,
      OrganizationUncheckedUpdateWithoutAiSummariesInput
    >;
    create: XOR<
      OrganizationCreateWithoutAiSummariesInput,
      OrganizationUncheckedCreateWithoutAiSummariesInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutAiSummariesInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutAiSummariesInput,
      OrganizationUncheckedUpdateWithoutAiSummariesInput
    >;
  };

  export type OrganizationUpdateWithoutAiSummariesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput;
    channels?: ChannelUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutOrganizationNestedInput;
    aiReports?: AiReportUpdateManyWithoutOrganizationNestedInput;
    invites?: OrganizationInviteUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutAiSummariesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    channels?: ChannelUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
    aiReports?: AiReportUncheckedUpdateManyWithoutOrganizationNestedInput;
    invites?: OrganizationInviteUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type ChannelUpsertWithoutAiSummariesInput = {
    update: XOR<
      ChannelUpdateWithoutAiSummariesInput,
      ChannelUncheckedUpdateWithoutAiSummariesInput
    >;
    create: XOR<
      ChannelCreateWithoutAiSummariesInput,
      ChannelUncheckedCreateWithoutAiSummariesInput
    >;
    where?: ChannelWhereInput;
  };

  export type ChannelUpdateToOneWithWhereWithoutAiSummariesInput = {
    where?: ChannelWhereInput;
    data: XOR<
      ChannelUpdateWithoutAiSummariesInput,
      ChannelUncheckedUpdateWithoutAiSummariesInput
    >;
  };

  export type ChannelUpdateWithoutAiSummariesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isPrivate?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutChannelsNestedInput;
    members?: ChannelMemberUpdateManyWithoutChannelNestedInput;
    messages?: MessageUpdateManyWithoutChannelNestedInput;
    readStates?: ChannelReadStateUpdateManyWithoutChannelNestedInput;
  };

  export type ChannelUncheckedUpdateWithoutAiSummariesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isPrivate?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: ChannelMemberUncheckedUpdateManyWithoutChannelNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput;
    readStates?: ChannelReadStateUncheckedUpdateManyWithoutChannelNestedInput;
  };

  export type OrganizationCreateWithoutAiReportsInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput;
    channels?: ChannelCreateNestedManyWithoutOrganizationInput;
    auditLogs?: AuditLogCreateNestedManyWithoutOrganizationInput;
    aiSummaries?: AiSummaryCreateNestedManyWithoutOrganizationInput;
    invites?: OrganizationInviteCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutAiReportsInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput;
    channels?: ChannelUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
    aiSummaries?: AiSummaryUncheckedCreateNestedManyWithoutOrganizationInput;
    invites?: OrganizationInviteUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutAiReportsInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutAiReportsInput,
      OrganizationUncheckedCreateWithoutAiReportsInput
    >;
  };

  export type OrganizationUpsertWithoutAiReportsInput = {
    update: XOR<
      OrganizationUpdateWithoutAiReportsInput,
      OrganizationUncheckedUpdateWithoutAiReportsInput
    >;
    create: XOR<
      OrganizationCreateWithoutAiReportsInput,
      OrganizationUncheckedCreateWithoutAiReportsInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutAiReportsInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutAiReportsInput,
      OrganizationUncheckedUpdateWithoutAiReportsInput
    >;
  };

  export type OrganizationUpdateWithoutAiReportsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput;
    channels?: ChannelUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutOrganizationNestedInput;
    aiSummaries?: AiSummaryUpdateManyWithoutOrganizationNestedInput;
    invites?: OrganizationInviteUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutAiReportsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput;
    channels?: ChannelUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
    aiSummaries?: AiSummaryUncheckedUpdateManyWithoutOrganizationNestedInput;
    invites?: OrganizationInviteUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type ChannelCreateWithoutReadStatesInput = {
    id?: string;
    name: string;
    description?: string | null;
    isPrivate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutChannelsInput;
    members?: ChannelMemberCreateNestedManyWithoutChannelInput;
    messages?: MessageCreateNestedManyWithoutChannelInput;
    aiSummaries?: AiSummaryCreateNestedManyWithoutChannelInput;
  };

  export type ChannelUncheckedCreateWithoutReadStatesInput = {
    id?: string;
    organizationId: string;
    name: string;
    description?: string | null;
    isPrivate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: ChannelMemberUncheckedCreateNestedManyWithoutChannelInput;
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput;
    aiSummaries?: AiSummaryUncheckedCreateNestedManyWithoutChannelInput;
  };

  export type ChannelCreateOrConnectWithoutReadStatesInput = {
    where: ChannelWhereUniqueInput;
    create: XOR<
      ChannelCreateWithoutReadStatesInput,
      ChannelUncheckedCreateWithoutReadStatesInput
    >;
  };

  export type UserCreateWithoutChannelReadStatesInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizations?: OrganizationMemberCreateNestedManyWithoutUserInput;
    messages?: MessageCreateNestedManyWithoutAuthorInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    channelMembers?: ChannelMemberCreateNestedManyWithoutUserInput;
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput;
    sentInvites?: OrganizationInviteCreateNestedManyWithoutInvitedByInput;
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutChannelReadStatesInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizations?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput;
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    channelMembers?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput;
    sentInvites?: OrganizationInviteUncheckedCreateNestedManyWithoutInvitedByInput;
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutChannelReadStatesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutChannelReadStatesInput,
      UserUncheckedCreateWithoutChannelReadStatesInput
    >;
  };

  export type ChannelUpsertWithoutReadStatesInput = {
    update: XOR<
      ChannelUpdateWithoutReadStatesInput,
      ChannelUncheckedUpdateWithoutReadStatesInput
    >;
    create: XOR<
      ChannelCreateWithoutReadStatesInput,
      ChannelUncheckedCreateWithoutReadStatesInput
    >;
    where?: ChannelWhereInput;
  };

  export type ChannelUpdateToOneWithWhereWithoutReadStatesInput = {
    where?: ChannelWhereInput;
    data: XOR<
      ChannelUpdateWithoutReadStatesInput,
      ChannelUncheckedUpdateWithoutReadStatesInput
    >;
  };

  export type ChannelUpdateWithoutReadStatesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isPrivate?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutChannelsNestedInput;
    members?: ChannelMemberUpdateManyWithoutChannelNestedInput;
    messages?: MessageUpdateManyWithoutChannelNestedInput;
    aiSummaries?: AiSummaryUpdateManyWithoutChannelNestedInput;
  };

  export type ChannelUncheckedUpdateWithoutReadStatesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isPrivate?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: ChannelMemberUncheckedUpdateManyWithoutChannelNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput;
    aiSummaries?: AiSummaryUncheckedUpdateManyWithoutChannelNestedInput;
  };

  export type UserUpsertWithoutChannelReadStatesInput = {
    update: XOR<
      UserUpdateWithoutChannelReadStatesInput,
      UserUncheckedUpdateWithoutChannelReadStatesInput
    >;
    create: XOR<
      UserCreateWithoutChannelReadStatesInput,
      UserUncheckedCreateWithoutChannelReadStatesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutChannelReadStatesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutChannelReadStatesInput,
      UserUncheckedUpdateWithoutChannelReadStatesInput
    >;
  };

  export type UserUpdateWithoutChannelReadStatesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizations?: OrganizationMemberUpdateManyWithoutUserNestedInput;
    messages?: MessageUpdateManyWithoutAuthorNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    channelMembers?: ChannelMemberUpdateManyWithoutUserNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput;
    sentInvites?: OrganizationInviteUpdateManyWithoutInvitedByNestedInput;
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutChannelReadStatesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizations?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    channelMembers?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    sentInvites?: OrganizationInviteUncheckedUpdateManyWithoutInvitedByNestedInput;
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutPasswordResetTokensInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizations?: OrganizationMemberCreateNestedManyWithoutUserInput;
    messages?: MessageCreateNestedManyWithoutAuthorInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    channelMembers?: ChannelMemberCreateNestedManyWithoutUserInput;
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput;
    sentInvites?: OrganizationInviteCreateNestedManyWithoutInvitedByInput;
    channelReadStates?: ChannelReadStateCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutPasswordResetTokensInput = {
    id?: string;
    email: string;
    displayName: string;
    password: string;
    role?: $Enums.GlobalRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizations?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput;
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    channelMembers?: ChannelMemberUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput;
    sentInvites?: OrganizationInviteUncheckedCreateNestedManyWithoutInvitedByInput;
    channelReadStates?: ChannelReadStateUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutPasswordResetTokensInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPasswordResetTokensInput,
      UserUncheckedCreateWithoutPasswordResetTokensInput
    >;
  };

  export type UserUpsertWithoutPasswordResetTokensInput = {
    update: XOR<
      UserUpdateWithoutPasswordResetTokensInput,
      UserUncheckedUpdateWithoutPasswordResetTokensInput
    >;
    create: XOR<
      UserCreateWithoutPasswordResetTokensInput,
      UserUncheckedCreateWithoutPasswordResetTokensInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPasswordResetTokensInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPasswordResetTokensInput,
      UserUncheckedUpdateWithoutPasswordResetTokensInput
    >;
  };

  export type UserUpdateWithoutPasswordResetTokensInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizations?: OrganizationMemberUpdateManyWithoutUserNestedInput;
    messages?: MessageUpdateManyWithoutAuthorNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    channelMembers?: ChannelMemberUpdateManyWithoutUserNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput;
    sentInvites?: OrganizationInviteUpdateManyWithoutInvitedByNestedInput;
    channelReadStates?: ChannelReadStateUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutPasswordResetTokensInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    displayName?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizations?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    channelMembers?: ChannelMemberUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    sentInvites?: OrganizationInviteUncheckedUpdateManyWithoutInvitedByNestedInput;
    channelReadStates?: ChannelReadStateUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type OrganizationMemberCreateManyUserInput = {
    id?: string;
    organizationId: string;
    role?: $Enums.OrganizationRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MessageCreateManyAuthorInput = {
    id?: string;
    content: string;
    channelId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SessionCreateManyUserInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type ChannelMemberCreateManyUserInput = {
    id?: string;
    channelId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AuditLogCreateManyUserInput = {
    id?: string;
    organizationId?: string | null;
    action: string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type OrganizationInviteCreateManyInvitedByInput = {
    id?: string;
    token: string;
    email: string;
    organizationId: string;
    role?: $Enums.OrganizationRole;
    status?: $Enums.OrganizationInviteStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ChannelReadStateCreateManyUserInput = {
    id?: string;
    channelId: string;
    lastReadAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PasswordResetTokenCreateManyUserInput = {
    id?: string;
    token: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizationMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutMembersNestedInput;
  };

  export type OrganizationMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    channel?: ChannelUpdateOneRequiredWithoutMessagesNestedInput;
  };

  export type MessageUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    channelId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    channelId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChannelMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    channel?: ChannelUpdateOneRequiredWithoutMembersNestedInput;
  };

  export type ChannelMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    channelId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChannelMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    channelId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneWithoutAuditLogsNestedInput;
  };

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null;
    action?: StringFieldUpdateOperationsInput | string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null;
    action?: StringFieldUpdateOperationsInput | string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationInviteUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    status?:
      | EnumOrganizationInviteStatusFieldUpdateOperationsInput
      | $Enums.OrganizationInviteStatus;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutInvitesNestedInput;
  };

  export type OrganizationInviteUncheckedUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    status?:
      | EnumOrganizationInviteStatusFieldUpdateOperationsInput
      | $Enums.OrganizationInviteStatus;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationInviteUncheckedUpdateManyWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    status?:
      | EnumOrganizationInviteStatusFieldUpdateOperationsInput
      | $Enums.OrganizationInviteStatus;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChannelReadStateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    channel?: ChannelUpdateOneRequiredWithoutReadStatesNestedInput;
  };

  export type ChannelReadStateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    channelId?: StringFieldUpdateOperationsInput | string;
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChannelReadStateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    channelId?: StringFieldUpdateOperationsInput | string;
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PasswordResetTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PasswordResetTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationMemberCreateManyOrganizationInput = {
    id?: string;
    userId: string;
    role?: $Enums.OrganizationRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ChannelCreateManyOrganizationInput = {
    id?: string;
    name: string;
    description?: string | null;
    isPrivate?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AuditLogCreateManyOrganizationInput = {
    id?: string;
    userId?: string | null;
    action: string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type AiSummaryCreateManyOrganizationInput = {
    id?: string;
    channelId?: string | null;
    summary: string;
    rangeStart?: Date | string | null;
    rangeEnd?: Date | string | null;
    createdAt?: Date | string;
  };

  export type AiReportCreateManyOrganizationInput = {
    id?: string;
    title: string;
    content: string;
    rangeStart?: Date | string | null;
    rangeEnd?: Date | string | null;
    createdAt?: Date | string;
  };

  export type OrganizationInviteCreateManyOrganizationInput = {
    id?: string;
    token: string;
    email: string;
    invitedById: string;
    role?: $Enums.OrganizationRole;
    status?: $Enums.OrganizationInviteStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizationMemberUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutOrganizationsNestedInput;
  };

  export type OrganizationMemberUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationMemberUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChannelUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isPrivate?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: ChannelMemberUpdateManyWithoutChannelNestedInput;
    messages?: MessageUpdateManyWithoutChannelNestedInput;
    aiSummaries?: AiSummaryUpdateManyWithoutChannelNestedInput;
    readStates?: ChannelReadStateUpdateManyWithoutChannelNestedInput;
  };

  export type ChannelUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isPrivate?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    members?: ChannelMemberUncheckedUpdateManyWithoutChannelNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput;
    aiSummaries?: AiSummaryUncheckedUpdateManyWithoutChannelNestedInput;
    readStates?: ChannelReadStateUncheckedUpdateManyWithoutChannelNestedInput;
  };

  export type ChannelUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    isPrivate?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutAuditLogsNestedInput;
  };

  export type AuditLogUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: NullableStringFieldUpdateOperationsInput | string | null;
    action?: StringFieldUpdateOperationsInput | string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: NullableStringFieldUpdateOperationsInput | string | null;
    action?: StringFieldUpdateOperationsInput | string;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AiSummaryUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    rangeStart?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    rangeEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    channel?: ChannelUpdateOneWithoutAiSummariesNestedInput;
  };

  export type AiSummaryUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    channelId?: NullableStringFieldUpdateOperationsInput | string | null;
    summary?: StringFieldUpdateOperationsInput | string;
    rangeStart?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    rangeEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AiSummaryUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    channelId?: NullableStringFieldUpdateOperationsInput | string | null;
    summary?: StringFieldUpdateOperationsInput | string;
    rangeStart?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    rangeEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AiReportUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rangeStart?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    rangeEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AiReportUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rangeStart?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    rangeEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AiReportUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rangeStart?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    rangeEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationInviteUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    status?:
      | EnumOrganizationInviteStatusFieldUpdateOperationsInput
      | $Enums.OrganizationInviteStatus;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    invitedBy?: UserUpdateOneRequiredWithoutSentInvitesNestedInput;
  };

  export type OrganizationInviteUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    invitedById?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    status?:
      | EnumOrganizationInviteStatusFieldUpdateOperationsInput
      | $Enums.OrganizationInviteStatus;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationInviteUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    invitedById?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    status?:
      | EnumOrganizationInviteStatusFieldUpdateOperationsInput
      | $Enums.OrganizationInviteStatus;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChannelMemberCreateManyChannelInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MessageCreateManyChannelInput = {
    id?: string;
    content: string;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AiSummaryCreateManyChannelInput = {
    id?: string;
    organizationId: string;
    summary: string;
    rangeStart?: Date | string | null;
    rangeEnd?: Date | string | null;
    createdAt?: Date | string;
  };

  export type ChannelReadStateCreateManyChannelInput = {
    id?: string;
    userId: string;
    lastReadAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ChannelMemberUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutChannelMembersNestedInput;
  };

  export type ChannelMemberUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChannelMemberUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutMessagesNestedInput;
  };

  export type MessageUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    authorId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    authorId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AiSummaryUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    rangeStart?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    rangeEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutAiSummariesNestedInput;
  };

  export type AiSummaryUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    rangeStart?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    rangeEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AiSummaryUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    rangeStart?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    rangeEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChannelReadStateUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutChannelReadStatesNestedInput;
  };

  export type ChannelReadStateUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChannelReadStateUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    lastReadAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ChannelCountOutputTypeDefaultArgs instead
   */
  export type ChannelCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ChannelCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserDefaultArgs instead
   */
  export type UserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UserDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OrganizationDefaultArgs instead
   */
  export type OrganizationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = OrganizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OrganizationInviteDefaultArgs instead
   */
  export type OrganizationInviteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = OrganizationInviteDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OrganizationMemberDefaultArgs instead
   */
  export type OrganizationMemberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = OrganizationMemberDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ChannelDefaultArgs instead
   */
  export type ChannelArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ChannelDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ChannelMemberDefaultArgs instead
   */
  export type ChannelMemberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ChannelMemberDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use MessageDefaultArgs instead
   */
  export type MessageArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = MessageDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use SessionDefaultArgs instead
   */
  export type SessionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = SessionDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AuditLogDefaultArgs instead
   */
  export type AuditLogArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = AuditLogDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AiSummaryDefaultArgs instead
   */
  export type AiSummaryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = AiSummaryDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AiReportDefaultArgs instead
   */
  export type AiReportArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = AiReportDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ChannelReadStateDefaultArgs instead
   */
  export type ChannelReadStateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ChannelReadStateDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use PasswordResetTokenDefaultArgs instead
   */
  export type PasswordResetTokenArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = PasswordResetTokenDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
