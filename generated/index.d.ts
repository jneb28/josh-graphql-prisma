// Code generated by Prisma (prisma@1.32.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  player: (where?: PlayerWhereInput) => Promise<boolean>;
  realm: (where?: RealmWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  player: (where: PlayerWhereUniqueInput) => PlayerNullablePromise;
  players: (args?: {
    where?: PlayerWhereInput;
    orderBy?: PlayerOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Player>;
  playersConnection: (args?: {
    where?: PlayerWhereInput;
    orderBy?: PlayerOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PlayerConnectionPromise;
  realm: (where: RealmWhereUniqueInput) => RealmNullablePromise;
  realms: (args?: {
    where?: RealmWhereInput;
    orderBy?: RealmOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Realm>;
  realmsConnection: (args?: {
    where?: RealmWhereInput;
    orderBy?: RealmOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => RealmConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPlayer: (data: PlayerCreateInput) => PlayerPromise;
  updatePlayer: (args: {
    data: PlayerUpdateInput;
    where: PlayerWhereUniqueInput;
  }) => PlayerPromise;
  updateManyPlayers: (args: {
    data: PlayerUpdateManyMutationInput;
    where?: PlayerWhereInput;
  }) => BatchPayloadPromise;
  upsertPlayer: (args: {
    where: PlayerWhereUniqueInput;
    create: PlayerCreateInput;
    update: PlayerUpdateInput;
  }) => PlayerPromise;
  deletePlayer: (where: PlayerWhereUniqueInput) => PlayerPromise;
  deleteManyPlayers: (where?: PlayerWhereInput) => BatchPayloadPromise;
  createRealm: (data: RealmCreateInput) => RealmPromise;
  updateRealm: (args: {
    data: RealmUpdateInput;
    where: RealmWhereUniqueInput;
  }) => RealmPromise;
  updateManyRealms: (args: {
    data: RealmUpdateManyMutationInput;
    where?: RealmWhereInput;
  }) => BatchPayloadPromise;
  upsertRealm: (args: {
    where: RealmWhereUniqueInput;
    create: RealmCreateInput;
    update: RealmUpdateInput;
  }) => RealmPromise;
  deleteRealm: (where: RealmWhereUniqueInput) => RealmPromise;
  deleteManyRealms: (where?: RealmWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  player: (
    where?: PlayerSubscriptionWhereInput
  ) => PlayerSubscriptionPayloadSubscription;
  realm: (
    where?: RealmSubscriptionWhereInput
  ) => RealmSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PlayerOrderByInput =
  | "_id_ASC"
  | "_id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "wins_ASC"
  | "wins_DESC"
  | "losses_ASC"
  | "losses_DESC"
  | "race_ASC"
  | "race_DESC";

export type RealmOrderByInput =
  | "_id_ASC"
  | "_id_DESC"
  | "name_ASC"
  | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type PlayerWhereUniqueInput = AtLeastOne<{
  _id: Maybe<ID_Input>;
}>;

export interface PlayerWhereInput {
  _id?: Maybe<ID_Input>;
  _id_not?: Maybe<ID_Input>;
  _id_in?: Maybe<ID_Input[] | ID_Input>;
  _id_not_in?: Maybe<ID_Input[] | ID_Input>;
  _id_lt?: Maybe<ID_Input>;
  _id_lte?: Maybe<ID_Input>;
  _id_gt?: Maybe<ID_Input>;
  _id_gte?: Maybe<ID_Input>;
  _id_contains?: Maybe<ID_Input>;
  _id_not_contains?: Maybe<ID_Input>;
  _id_starts_with?: Maybe<ID_Input>;
  _id_not_starts_with?: Maybe<ID_Input>;
  _id_ends_with?: Maybe<ID_Input>;
  _id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  wins?: Maybe<Int>;
  wins_not?: Maybe<Int>;
  wins_in?: Maybe<Int[] | Int>;
  wins_not_in?: Maybe<Int[] | Int>;
  wins_lt?: Maybe<Int>;
  wins_lte?: Maybe<Int>;
  wins_gt?: Maybe<Int>;
  wins_gte?: Maybe<Int>;
  losses?: Maybe<Int>;
  losses_not?: Maybe<Int>;
  losses_in?: Maybe<Int[] | Int>;
  losses_not_in?: Maybe<Int[] | Int>;
  losses_lt?: Maybe<Int>;
  losses_lte?: Maybe<Int>;
  losses_gt?: Maybe<Int>;
  losses_gte?: Maybe<Int>;
  race?: Maybe<String>;
  race_not?: Maybe<String>;
  race_in?: Maybe<String[] | String>;
  race_not_in?: Maybe<String[] | String>;
  race_lt?: Maybe<String>;
  race_lte?: Maybe<String>;
  race_gt?: Maybe<String>;
  race_gte?: Maybe<String>;
  race_contains?: Maybe<String>;
  race_not_contains?: Maybe<String>;
  race_starts_with?: Maybe<String>;
  race_not_starts_with?: Maybe<String>;
  race_ends_with?: Maybe<String>;
  race_not_ends_with?: Maybe<String>;
  realm?: Maybe<RealmWhereInput>;
  AND?: Maybe<PlayerWhereInput[] | PlayerWhereInput>;
}

export interface RealmWhereInput {
  _id?: Maybe<ID_Input>;
  _id_not?: Maybe<ID_Input>;
  _id_in?: Maybe<ID_Input[] | ID_Input>;
  _id_not_in?: Maybe<ID_Input[] | ID_Input>;
  _id_lt?: Maybe<ID_Input>;
  _id_lte?: Maybe<ID_Input>;
  _id_gt?: Maybe<ID_Input>;
  _id_gte?: Maybe<ID_Input>;
  _id_contains?: Maybe<ID_Input>;
  _id_not_contains?: Maybe<ID_Input>;
  _id_starts_with?: Maybe<ID_Input>;
  _id_not_starts_with?: Maybe<ID_Input>;
  _id_ends_with?: Maybe<ID_Input>;
  _id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  population_some?: Maybe<PlayerWhereInput>;
  AND?: Maybe<RealmWhereInput[] | RealmWhereInput>;
}

export type RealmWhereUniqueInput = AtLeastOne<{
  _id: Maybe<ID_Input>;
}>;

export interface PlayerCreateInput {
  _id?: Maybe<ID_Input>;
  name: String;
  wins: Int;
  losses: Int;
  race: String;
  realm: RealmCreateOneWithoutPopulationInput;
}

export interface RealmCreateOneWithoutPopulationInput {
  create?: Maybe<RealmCreateWithoutPopulationInput>;
  connect?: Maybe<RealmWhereUniqueInput>;
}

export interface RealmCreateWithoutPopulationInput {
  _id?: Maybe<ID_Input>;
  name: String;
}

export interface PlayerUpdateInput {
  name?: Maybe<String>;
  wins?: Maybe<Int>;
  losses?: Maybe<Int>;
  race?: Maybe<String>;
  realm?: Maybe<RealmUpdateOneRequiredWithoutPopulationInput>;
}

export interface RealmUpdateOneRequiredWithoutPopulationInput {
  create?: Maybe<RealmCreateWithoutPopulationInput>;
  update?: Maybe<RealmUpdateWithoutPopulationDataInput>;
  upsert?: Maybe<RealmUpsertWithoutPopulationInput>;
  connect?: Maybe<RealmWhereUniqueInput>;
}

export interface RealmUpdateWithoutPopulationDataInput {
  name?: Maybe<String>;
}

export interface RealmUpsertWithoutPopulationInput {
  update: RealmUpdateWithoutPopulationDataInput;
  create: RealmCreateWithoutPopulationInput;
}

export interface PlayerUpdateManyMutationInput {
  name?: Maybe<String>;
  wins?: Maybe<Int>;
  losses?: Maybe<Int>;
  race?: Maybe<String>;
}

export interface RealmCreateInput {
  _id?: Maybe<ID_Input>;
  name: String;
  population?: Maybe<PlayerCreateManyWithoutRealmInput>;
}

export interface PlayerCreateManyWithoutRealmInput {
  create?: Maybe<
    PlayerCreateWithoutRealmInput[] | PlayerCreateWithoutRealmInput
  >;
  connect?: Maybe<PlayerWhereUniqueInput[] | PlayerWhereUniqueInput>;
}

export interface PlayerCreateWithoutRealmInput {
  _id?: Maybe<ID_Input>;
  name: String;
  wins: Int;
  losses: Int;
  race: String;
}

export interface RealmUpdateInput {
  name?: Maybe<String>;
  population?: Maybe<PlayerUpdateManyWithoutRealmInput>;
}

export interface PlayerUpdateManyWithoutRealmInput {
  create?: Maybe<
    PlayerCreateWithoutRealmInput[] | PlayerCreateWithoutRealmInput
  >;
  delete?: Maybe<PlayerWhereUniqueInput[] | PlayerWhereUniqueInput>;
  connect?: Maybe<PlayerWhereUniqueInput[] | PlayerWhereUniqueInput>;
  set?: Maybe<PlayerWhereUniqueInput[] | PlayerWhereUniqueInput>;
  disconnect?: Maybe<PlayerWhereUniqueInput[] | PlayerWhereUniqueInput>;
  update?: Maybe<
    | PlayerUpdateWithWhereUniqueWithoutRealmInput[]
    | PlayerUpdateWithWhereUniqueWithoutRealmInput
  >;
  upsert?: Maybe<
    | PlayerUpsertWithWhereUniqueWithoutRealmInput[]
    | PlayerUpsertWithWhereUniqueWithoutRealmInput
  >;
  deleteMany?: Maybe<PlayerScalarWhereInput[] | PlayerScalarWhereInput>;
  updateMany?: Maybe<
    | PlayerUpdateManyWithWhereNestedInput[]
    | PlayerUpdateManyWithWhereNestedInput
  >;
}

export interface PlayerUpdateWithWhereUniqueWithoutRealmInput {
  where: PlayerWhereUniqueInput;
  data: PlayerUpdateWithoutRealmDataInput;
}

export interface PlayerUpdateWithoutRealmDataInput {
  name?: Maybe<String>;
  wins?: Maybe<Int>;
  losses?: Maybe<Int>;
  race?: Maybe<String>;
}

export interface PlayerUpsertWithWhereUniqueWithoutRealmInput {
  where: PlayerWhereUniqueInput;
  update: PlayerUpdateWithoutRealmDataInput;
  create: PlayerCreateWithoutRealmInput;
}

export interface PlayerScalarWhereInput {
  _id?: Maybe<ID_Input>;
  _id_not?: Maybe<ID_Input>;
  _id_in?: Maybe<ID_Input[] | ID_Input>;
  _id_not_in?: Maybe<ID_Input[] | ID_Input>;
  _id_lt?: Maybe<ID_Input>;
  _id_lte?: Maybe<ID_Input>;
  _id_gt?: Maybe<ID_Input>;
  _id_gte?: Maybe<ID_Input>;
  _id_contains?: Maybe<ID_Input>;
  _id_not_contains?: Maybe<ID_Input>;
  _id_starts_with?: Maybe<ID_Input>;
  _id_not_starts_with?: Maybe<ID_Input>;
  _id_ends_with?: Maybe<ID_Input>;
  _id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  wins?: Maybe<Int>;
  wins_not?: Maybe<Int>;
  wins_in?: Maybe<Int[] | Int>;
  wins_not_in?: Maybe<Int[] | Int>;
  wins_lt?: Maybe<Int>;
  wins_lte?: Maybe<Int>;
  wins_gt?: Maybe<Int>;
  wins_gte?: Maybe<Int>;
  losses?: Maybe<Int>;
  losses_not?: Maybe<Int>;
  losses_in?: Maybe<Int[] | Int>;
  losses_not_in?: Maybe<Int[] | Int>;
  losses_lt?: Maybe<Int>;
  losses_lte?: Maybe<Int>;
  losses_gt?: Maybe<Int>;
  losses_gte?: Maybe<Int>;
  race?: Maybe<String>;
  race_not?: Maybe<String>;
  race_in?: Maybe<String[] | String>;
  race_not_in?: Maybe<String[] | String>;
  race_lt?: Maybe<String>;
  race_lte?: Maybe<String>;
  race_gt?: Maybe<String>;
  race_gte?: Maybe<String>;
  race_contains?: Maybe<String>;
  race_not_contains?: Maybe<String>;
  race_starts_with?: Maybe<String>;
  race_not_starts_with?: Maybe<String>;
  race_ends_with?: Maybe<String>;
  race_not_ends_with?: Maybe<String>;
  AND?: Maybe<PlayerScalarWhereInput[] | PlayerScalarWhereInput>;
  OR?: Maybe<PlayerScalarWhereInput[] | PlayerScalarWhereInput>;
  NOT?: Maybe<PlayerScalarWhereInput[] | PlayerScalarWhereInput>;
}

export interface PlayerUpdateManyWithWhereNestedInput {
  where: PlayerScalarWhereInput;
  data: PlayerUpdateManyDataInput;
}

export interface PlayerUpdateManyDataInput {
  name?: Maybe<String>;
  wins?: Maybe<Int>;
  losses?: Maybe<Int>;
  race?: Maybe<String>;
}

export interface RealmUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface PlayerSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PlayerWhereInput>;
  AND?: Maybe<PlayerSubscriptionWhereInput[] | PlayerSubscriptionWhereInput>;
}

export interface RealmSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<RealmWhereInput>;
  AND?: Maybe<RealmSubscriptionWhereInput[] | RealmSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Player {
  _id: ID_Output;
  name: String;
  wins: Int;
  losses: Int;
  race: String;
}

export interface PlayerPromise extends Promise<Player>, Fragmentable {
  _id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  wins: () => Promise<Int>;
  losses: () => Promise<Int>;
  race: () => Promise<String>;
  realm: <T = RealmPromise>() => T;
}

export interface PlayerSubscription
  extends Promise<AsyncIterator<Player>>,
    Fragmentable {
  _id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  wins: () => Promise<AsyncIterator<Int>>;
  losses: () => Promise<AsyncIterator<Int>>;
  race: () => Promise<AsyncIterator<String>>;
  realm: <T = RealmSubscription>() => T;
}

export interface PlayerNullablePromise
  extends Promise<Player | null>,
    Fragmentable {
  _id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  wins: () => Promise<Int>;
  losses: () => Promise<Int>;
  race: () => Promise<String>;
  realm: <T = RealmPromise>() => T;
}

export interface Realm {
  _id: ID_Output;
  name: String;
}

export interface RealmPromise extends Promise<Realm>, Fragmentable {
  _id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  population: <T = FragmentableArray<Player>>(args?: {
    where?: PlayerWhereInput;
    orderBy?: PlayerOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface RealmSubscription
  extends Promise<AsyncIterator<Realm>>,
    Fragmentable {
  _id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  population: <T = Promise<AsyncIterator<PlayerSubscription>>>(args?: {
    where?: PlayerWhereInput;
    orderBy?: PlayerOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface RealmNullablePromise
  extends Promise<Realm | null>,
    Fragmentable {
  _id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  population: <T = FragmentableArray<Player>>(args?: {
    where?: PlayerWhereInput;
    orderBy?: PlayerOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface PlayerConnection {
  pageInfo: PageInfo;
  edges: PlayerEdge[];
}

export interface PlayerConnectionPromise
  extends Promise<PlayerConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PlayerEdge>>() => T;
  aggregate: <T = AggregatePlayerPromise>() => T;
}

export interface PlayerConnectionSubscription
  extends Promise<AsyncIterator<PlayerConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PlayerEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePlayerSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface PlayerEdge {
  node: Player;
  cursor: String;
}

export interface PlayerEdgePromise extends Promise<PlayerEdge>, Fragmentable {
  node: <T = PlayerPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PlayerEdgeSubscription
  extends Promise<AsyncIterator<PlayerEdge>>,
    Fragmentable {
  node: <T = PlayerSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePlayer {
  count: Int;
}

export interface AggregatePlayerPromise
  extends Promise<AggregatePlayer>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePlayerSubscription
  extends Promise<AsyncIterator<AggregatePlayer>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface RealmConnection {
  pageInfo: PageInfo;
  edges: RealmEdge[];
}

export interface RealmConnectionPromise
  extends Promise<RealmConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<RealmEdge>>() => T;
  aggregate: <T = AggregateRealmPromise>() => T;
}

export interface RealmConnectionSubscription
  extends Promise<AsyncIterator<RealmConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<RealmEdgeSubscription>>>() => T;
  aggregate: <T = AggregateRealmSubscription>() => T;
}

export interface RealmEdge {
  node: Realm;
  cursor: String;
}

export interface RealmEdgePromise extends Promise<RealmEdge>, Fragmentable {
  node: <T = RealmPromise>() => T;
  cursor: () => Promise<String>;
}

export interface RealmEdgeSubscription
  extends Promise<AsyncIterator<RealmEdge>>,
    Fragmentable {
  node: <T = RealmSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateRealm {
  count: Int;
}

export interface AggregateRealmPromise
  extends Promise<AggregateRealm>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRealmSubscription
  extends Promise<AsyncIterator<AggregateRealm>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PlayerSubscriptionPayload {
  mutation: MutationType;
  node: Player;
  updatedFields: String[];
  previousValues: PlayerPreviousValues;
}

export interface PlayerSubscriptionPayloadPromise
  extends Promise<PlayerSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PlayerPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PlayerPreviousValuesPromise>() => T;
}

export interface PlayerSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PlayerSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PlayerSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PlayerPreviousValuesSubscription>() => T;
}

export interface PlayerPreviousValues {
  _id: ID_Output;
  name: String;
  wins: Int;
  losses: Int;
  race: String;
}

export interface PlayerPreviousValuesPromise
  extends Promise<PlayerPreviousValues>,
    Fragmentable {
  _id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  wins: () => Promise<Int>;
  losses: () => Promise<Int>;
  race: () => Promise<String>;
}

export interface PlayerPreviousValuesSubscription
  extends Promise<AsyncIterator<PlayerPreviousValues>>,
    Fragmentable {
  _id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  wins: () => Promise<AsyncIterator<Int>>;
  losses: () => Promise<AsyncIterator<Int>>;
  race: () => Promise<AsyncIterator<String>>;
}

export interface RealmSubscriptionPayload {
  mutation: MutationType;
  node: Realm;
  updatedFields: String[];
  previousValues: RealmPreviousValues;
}

export interface RealmSubscriptionPayloadPromise
  extends Promise<RealmSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = RealmPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RealmPreviousValuesPromise>() => T;
}

export interface RealmSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RealmSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RealmSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RealmPreviousValuesSubscription>() => T;
}

export interface RealmPreviousValues {
  _id: ID_Output;
  name: String;
}

export interface RealmPreviousValuesPromise
  extends Promise<RealmPreviousValues>,
    Fragmentable {
  _id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface RealmPreviousValuesSubscription
  extends Promise<AsyncIterator<RealmPreviousValues>>,
    Fragmentable {
  _id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Player",
    embedded: false
  },
  {
    name: "Realm",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
