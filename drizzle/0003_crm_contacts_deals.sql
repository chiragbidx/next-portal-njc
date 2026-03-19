-- Up Migration: Create Contacts and Deals tables for DealNest CRM

CREATE TABLE IF NOT EXISTS "contacts" (
    "id" text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "team_id" text NOT NULL REFERENCES "teams"("id") ON DELETE CASCADE,
    "first_name" text NOT NULL,
    "last_name" text NOT NULL,
    "email" text NOT NULL,
    "phone" text,
    "company" text,
    "job_title" text,
    "notes" text,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS "contacts_team_email_idx" ON "contacts" ("team_id", "email");

CREATE TABLE IF NOT EXISTS "deals" (
    "id" text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "team_id" text NOT NULL REFERENCES "teams"("id") ON DELETE CASCADE,
    "contact_id" text REFERENCES "contacts"("id") ON DELETE SET NULL,
    "title" text NOT NULL,
    "value" integer NOT NULL,
    "currency" text NOT NULL DEFAULT 'USD',
    "stage" text NOT NULL DEFAULT 'lead',
    "status" text NOT NULL DEFAULT 'active',
    "notes" text,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz NOT NULL DEFAULT now()
);