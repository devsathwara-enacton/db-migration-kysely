import type { ColumnType } from "kysely";

export type AuthAalLevel = "aal1" | "aal2" | "aal3";

export type AuthCodeChallengeMethod = "plain" | "s256";

export type AuthFactorStatus = "unverified" | "verified";

export type AuthFactorType = "totp" | "webauthn";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Int8 = ColumnType<
  string,
  bigint | number | string,
  bigint | number | string
>;

export type Json = ColumnType<JsonValue, string, string>;

export type JsonArray = JsonValue[];

export type JsonObject = {
  [K in string]?: JsonValue;
};

export type JsonPrimitive = boolean | number | string | null;

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export type Numeric = ColumnType<string, number | string, number | string>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface _PrismaMigrations {
  applied_steps_count: Generated<number>;
  checksum: string;
  finished_at: Timestamp | null;
  id: string;
  logs: string | null;
  migration_name: string;
  rolled_back_at: Timestamp | null;
  started_at: Generated<Timestamp>;
}

export interface AuthAuditLogEntries {
  created_at: Timestamp | null;
  id: string;
  instance_id: string | null;
  ip_address: Generated<string>;
  payload: Json | null;
}

export interface AuthFlowState {
  auth_code: string;
  authentication_method: string;
  code_challenge: string;
  code_challenge_method: AuthCodeChallengeMethod;
  created_at: Timestamp | null;
  id: string;
  provider_access_token: string | null;
  provider_refresh_token: string | null;
  provider_type: string;
  updated_at: Timestamp | null;
  user_id: string | null;
}

export interface AuthIdentities {
  created_at: Timestamp | null;
  email: Generated<string | null>;
  id: Generated<string>;
  identity_data: Json;
  last_sign_in_at: Timestamp | null;
  provider: string;
  provider_id: string;
  updated_at: Timestamp | null;
  user_id: string;
}

export interface AuthInstances {
  created_at: Timestamp | null;
  id: string;
  raw_base_config: string | null;
  updated_at: Timestamp | null;
  uuid: string | null;
}

export interface AuthMfaAmrClaims {
  authentication_method: string;
  created_at: Timestamp;
  id: string;
  session_id: string;
  updated_at: Timestamp;
}

export interface AuthMfaChallenges {
  created_at: Timestamp;
  factor_id: string;
  id: string;
  ip_address: string;
  verified_at: Timestamp | null;
}

export interface AuthMfaFactors {
  created_at: Timestamp;
  factor_type: AuthFactorType;
  friendly_name: string | null;
  id: string;
  secret: string | null;
  status: AuthFactorStatus;
  updated_at: Timestamp;
  user_id: string;
}

export interface AuthRefreshTokens {
  created_at: Timestamp | null;
  id: Generated<Int8>;
  instance_id: string | null;
  parent: string | null;
  revoked: boolean | null;
  session_id: string | null;
  token: string | null;
  updated_at: Timestamp | null;
  user_id: string | null;
}

export interface AuthSamlProviders {
  attribute_mapping: Json | null;
  created_at: Timestamp | null;
  entity_id: string;
  id: string;
  metadata_url: string | null;
  metadata_xml: string;
  sso_provider_id: string;
  updated_at: Timestamp | null;
}

export interface AuthSamlRelayStates {
  created_at: Timestamp | null;
  flow_state_id: string | null;
  for_email: string | null;
  from_ip_address: string | null;
  id: string;
  redirect_to: string | null;
  request_id: string;
  sso_provider_id: string;
  updated_at: Timestamp | null;
}

export interface AuthSchemaMigrations {
  version: string;
}

export interface AuthSessions {
  aal: AuthAalLevel | null;
  created_at: Timestamp | null;
  factor_id: string | null;
  id: string;
  ip: string | null;
  not_after: Timestamp | null;
  refreshed_at: Timestamp | null;
  tag: string | null;
  updated_at: Timestamp | null;
  user_agent: string | null;
  user_id: string;
}

export interface AuthSsoDomains {
  created_at: Timestamp | null;
  domain: string;
  id: string;
  sso_provider_id: string;
  updated_at: Timestamp | null;
}

export interface AuthSsoProviders {
  created_at: Timestamp | null;
  id: string;
  resource_id: string | null;
  updated_at: Timestamp | null;
}

export interface AuthUsers {
  aud: string | null;
  banned_until: Timestamp | null;
  confirmation_sent_at: Timestamp | null;
  confirmation_token: string | null;
  confirmed_at: Generated<Timestamp | null>;
  created_at: Timestamp | null;
  deleted_at: Timestamp | null;
  email: string | null;
  email_change: string | null;
  email_change_confirm_status: Generated<number | null>;
  email_change_sent_at: Timestamp | null;
  email_change_token_current: Generated<string | null>;
  email_change_token_new: string | null;
  email_confirmed_at: Timestamp | null;
  encrypted_password: string | null;
  id: string;
  instance_id: string | null;
  invited_at: Timestamp | null;
  is_sso_user: Generated<boolean>;
  is_super_admin: boolean | null;
  last_sign_in_at: Timestamp | null;
  phone: Generated<string | null>;
  phone_change: Generated<string | null>;
  phone_change_sent_at: Timestamp | null;
  phone_change_token: Generated<string | null>;
  phone_confirmed_at: Timestamp | null;
  raw_app_meta_data: Json | null;
  raw_user_meta_data: Json | null;
  reauthentication_sent_at: Timestamp | null;
  reauthentication_token: Generated<string | null>;
  recovery_sent_at: Timestamp | null;
  recovery_token: string | null;
  role: string | null;
  updated_at: Timestamp | null;
}

export interface EventData {
  created_at: Generated<Timestamp | null>;
  data_type: number;
  date_value: Timestamp | null;
  event_data_id: string;
  event_key: string;
  number_value: Numeric | null;
  string_value: string | null;
  website_event_id: string;
  website_id: string;
}

export interface ExtensionsPgStatStatements {
  blk_read_time: number | null;
  blk_write_time: number | null;
  calls: Int8 | null;
  dbid: number | null;
  jit_emission_count: Int8 | null;
  jit_emission_time: number | null;
  jit_functions: Int8 | null;
  jit_generation_time: number | null;
  jit_inlining_count: Int8 | null;
  jit_inlining_time: number | null;
  jit_optimization_count: Int8 | null;
  jit_optimization_time: number | null;
  local_blks_dirtied: Int8 | null;
  local_blks_hit: Int8 | null;
  local_blks_read: Int8 | null;
  local_blks_written: Int8 | null;
  max_exec_time: number | null;
  max_plan_time: number | null;
  mean_exec_time: number | null;
  mean_plan_time: number | null;
  min_exec_time: number | null;
  min_plan_time: number | null;
  plans: Int8 | null;
  query: string | null;
  queryid: Int8 | null;
  rows: Int8 | null;
  shared_blks_dirtied: Int8 | null;
  shared_blks_hit: Int8 | null;
  shared_blks_read: Int8 | null;
  shared_blks_written: Int8 | null;
  stddev_exec_time: number | null;
  stddev_plan_time: number | null;
  temp_blk_read_time: number | null;
  temp_blk_write_time: number | null;
  temp_blks_read: Int8 | null;
  temp_blks_written: Int8 | null;
  toplevel: boolean | null;
  total_exec_time: number | null;
  total_plan_time: number | null;
  userid: number | null;
  wal_bytes: Numeric | null;
  wal_fpi: Int8 | null;
  wal_records: Int8 | null;
}

export interface ExtensionsPgStatStatementsInfo {
  dealloc: Int8 | null;
  stats_reset: Timestamp | null;
}

export interface Links {
  analytics: Json | null;
  analytics_code: Generated<string | null>;
  appearance: Json | null;
  banner: Generated<string | null>;
  bio: string | null;
  blocks: Generated<Json | null>;
  code: string;
  created_at: Generated<Timestamp>;
  deleted_at: Timestamp | null;
  id: Generated<Int8>;
  is_archived: Generated<number | null>;
  is_enabled: Generated<boolean | null>;
  profile: Generated<string | null>;
  seo: Json | null;
  slug: string;
  social_handles: Generated<Json | null>;
  social_handles_location: Generated<string | null>;
  stats: Json | null;
  status: Generated<string>;
  template: Generated<string | null>;
  title: string;
  tracking: Json | null;
  updated_at: Generated<Timestamp>;
  user_id: Int8;
  utm_params: Json | null;
}

export interface Report {
  created_at: Generated<Timestamp | null>;
  description: string;
  name: string;
  parameters: string;
  report_id: string;
  type: string;
  updated_at: Timestamp | null;
  user_id: string;
  website_id: string;
}

export interface Session {
  browser: string | null;
  city: string | null;
  country: string | null;
  created_at: Generated<Timestamp | null>;
  device: string | null;
  hostname: string | null;
  language: string | null;
  os: string | null;
  screen: string | null;
  session_id: string;
  subdivision1: string | null;
  subdivision2: string | null;
  website_id: string;
}

export interface SessionData {
  created_at: Generated<Timestamp | null>;
  data_type: number;
  date_value: Timestamp | null;
  deleted_at: Generated<Timestamp | null>;
  number_value: Numeric | null;
  session_data_id: string;
  session_id: string;
  session_key: string;
  string_value: string | null;
  website_id: string;
}

export interface StorageBuckets {
  allowed_mime_types: string[] | null;
  avif_autodetection: Generated<boolean | null>;
  created_at: Generated<Timestamp | null>;
  file_size_limit: Int8 | null;
  id: string;
  name: string;
  owner: string | null;
  owner_id: string | null;
  public: Generated<boolean | null>;
  updated_at: Generated<Timestamp | null>;
}

export interface StorageMigrations {
  executed_at: Generated<Timestamp | null>;
  hash: string;
  id: number;
  name: string;
}

export interface StorageObjects {
  bucket_id: string | null;
  created_at: Generated<Timestamp | null>;
  id: Generated<string>;
  last_accessed_at: Generated<Timestamp | null>;
  metadata: Json | null;
  name: string | null;
  owner: string | null;
  owner_id: string | null;
  path_tokens: Generated<string[] | null>;
  updated_at: Generated<Timestamp | null>;
  version: string | null;
}

export interface SubscriptionLogs {
  created_at: Generated<Timestamp | null>;
  id: Generated<number>;
  payload: string | null;
  status: string | null;
  updated_at: Generated<Timestamp | null>;
}

export interface Subscriptions {
  created_at: Generated<Timestamp | null>;
  id: Generated<number>;
  subscription_billing_cycle_anchor: Timestamp | null;
  subscription_canceled_at: Timestamp | null;
  subscription_created: Timestamp | null;
  subscription_currency: string | null;
  subscription_current_period_end: Timestamp | null;
  subscription_current_period_start: Timestamp | null;
  subscription_customer_id: string | null;
  subscription_discount: Json | null;
  subscription_discount_amount: Generated<Numeric | null>;
  subscription_ended_at: Timestamp | null;
  subscription_id: string | null;
  subscription_price_amount: Int8 | null;
  subscription_price_id: string | null;
  subscription_start_date: Timestamp | null;
  subscription_status: string | null;
  subscription_test_clock: string | null;
  subscription_trial_end: Timestamp | null;
  subscription_trial_start: Timestamp | null;
  updated_at: Generated<Timestamp | null>;
  user_id: number | null;
}

export interface Team {
  access_code: string | null;
  created_at: Generated<Timestamp | null>;
  name: string;
  team_id: string;
  updated_at: Timestamp | null;
}

export interface TeamUser {
  created_at: Generated<Timestamp | null>;
  role: string;
  team_id: string;
  team_user_id: string;
  updated_at: Timestamp | null;
  user_id: string;
}

export interface TeamWebsite {
  created_at: Generated<Timestamp | null>;
  team_id: string;
  team_website_id: string;
  website_id: string;
}

export interface Templates {
  block_styles: Json | null;
  created_at: Generated<Timestamp | null>;
  deleted_at: Generated<Timestamp | null>;
  id: Generated<number>;
  page_styles: Json | null;
  updated_at: Generated<Timestamp | null>;
  user_id: Int8;
}

export interface User {
  created_at: Generated<Timestamp | null>;
  deleted_at: Timestamp | null;
  password: string;
  role: string;
  updated_at: Timestamp | null;
  user_id: string;
  username: string;
}

export interface UserReferralEarnings {
  amount: Numeric;
  created_at: Generated<Timestamp | null>;
  id: Generated<number>;
  referred_user_id: Int8;
  status: Generated<string | null>;
  updated_at: Generated<Timestamp | null>;
  user_id: Int8;
}

export interface Users {
  billing_info: Json | null;
  created_at: Generated<Timestamp | null>;
  deleted_at: Timestamp | null;
  email: string;
  id: Generated<number>;
  is_deleted: Generated<boolean>;
  is_verified: Generated<boolean | null>;
  name: string;
  password: string;
  provider_id: string | null;
  provider_type: string | null;
  referral_code: string | null;
  referred_by: Int8 | null;
  rememberme_token: string | null;
  role: Generated<string | null>;
  signup_ip: string | null;
  signup_secret: string | null;
  signup_ua: string | null;
  status: Generated<string | null>;
  stripe_customer_id: string | null;
  subscription_end_date: Timestamp | null;
  subscription_id: string | null;
  subscription_plan: string | null;
  subscription_start_date: Timestamp | null;
  subscription_status: Generated<string | null>;
  subscription_trial_ends_at: Timestamp | null;
  supabase_user_id: string | null;
  updated_at: Generated<Timestamp | null>;
}

export interface Website {
  created_at: Generated<Timestamp | null>;
  deleted_at: Timestamp | null;
  domain: string | null;
  name: string;
  reset_at: Timestamp | null;
  share_id: string | null;
  updated_at: Timestamp | null;
  user_id: string | null;
  website_id: string;
}

export interface WebsiteEvent {
  created_at: Generated<Timestamp | null>;
  event_id: string;
  event_name: string | null;
  event_type: Generated<number>;
  page_title: string | null;
  referrer_domain: string | null;
  referrer_path: string | null;
  referrer_query: string | null;
  session_id: string;
  url_path: string;
  url_query: string | null;
  website_id: string;
}

export interface DB {
  _prisma_migrations: _PrismaMigrations;
  "auth.audit_log_entries": AuthAuditLogEntries;
  "auth.flow_state": AuthFlowState;
  "auth.identities": AuthIdentities;
  "auth.instances": AuthInstances;
  "auth.mfa_amr_claims": AuthMfaAmrClaims;
  "auth.mfa_challenges": AuthMfaChallenges;
  "auth.mfa_factors": AuthMfaFactors;
  "auth.refresh_tokens": AuthRefreshTokens;
  "auth.saml_providers": AuthSamlProviders;
  "auth.saml_relay_states": AuthSamlRelayStates;
  "auth.schema_migrations": AuthSchemaMigrations;
  "auth.sessions": AuthSessions;
  "auth.sso_domains": AuthSsoDomains;
  "auth.sso_providers": AuthSsoProviders;
  "auth.users": AuthUsers;
  event_data: EventData;
  "extensions.pg_stat_statements": ExtensionsPgStatStatements;
  "extensions.pg_stat_statements_info": ExtensionsPgStatStatementsInfo;
  links: Links;
  report: Report;
  session: Session;
  session_data: SessionData;
  "storage.buckets": StorageBuckets;
  "storage.migrations": StorageMigrations;
  "storage.objects": StorageObjects;
  subscription_logs: SubscriptionLogs;
  subscriptions: Subscriptions;
  team: Team;
  team_user: TeamUser;
  team_website: TeamWebsite;
  templates: Templates;
  user: User;
  user_referral_earnings: UserReferralEarnings;
  users: Users;
  website: Website;
  website_event: WebsiteEvent;
}
