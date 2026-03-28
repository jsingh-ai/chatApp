DO $$
BEGIN
  CREATE TYPE "OrganizationInviteStatus" AS ENUM ('PENDING', 'ACCEPTED', 'EXPIRED', 'CANCELLED');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$
BEGIN
  CREATE TYPE "GlobalRole" AS ENUM ('SUPER_ADMIN', 'USER');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

ALTER TABLE "User"
  ADD COLUMN IF NOT EXISTS "role" "GlobalRole" NOT NULL DEFAULT 'USER';

UPDATE "User"
SET "role" = 'SUPER_ADMIN'
WHERE lower("email") = 'jsingh@fivestar.com';

DROP TABLE IF EXISTS "OrganizationInvite" CASCADE;
CREATE TABLE "OrganizationInvite" (
  "id" TEXT NOT NULL DEFAULT gen_random_uuid()::text,
  "token" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "organizationId" TEXT NOT NULL,
  "invitedById" TEXT NOT NULL,
  "role" "OrganizationRole" NOT NULL DEFAULT 'MEMBER',
  "status" "OrganizationInviteStatus" NOT NULL DEFAULT 'PENDING',
  "expiresAt" TIMESTAMP(3) NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "OrganizationInvite_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "OrganizationInvite_organizationId_fkey"
    FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "OrganizationInvite_invitedById_fkey"
    FOREIGN KEY ("invitedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE UNIQUE INDEX IF NOT EXISTS "OrganizationInvite_token_key" ON "OrganizationInvite"("token");
CREATE INDEX IF NOT EXISTS "OrganizationInvite_organizationId_email_status_idx"
  ON "OrganizationInvite"("organizationId", "email", "status");

DROP TABLE IF EXISTS "ChannelReadState" CASCADE;
CREATE TABLE "ChannelReadState" (
  "id" TEXT NOT NULL DEFAULT gen_random_uuid()::text,
  "channelId" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "lastReadAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ChannelReadState_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "ChannelReadState_channelId_fkey"
    FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ChannelReadState_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE UNIQUE INDEX IF NOT EXISTS "ChannelReadState_channelId_userId_key"
  ON "ChannelReadState"("channelId", "userId");
CREATE INDEX IF NOT EXISTS "ChannelReadState_userId_idx" ON "ChannelReadState"("userId");

DROP TABLE IF EXISTS "PasswordResetToken" CASCADE;
CREATE TABLE "PasswordResetToken" (
  "id" TEXT NOT NULL DEFAULT gen_random_uuid()::text,
  "userId" TEXT NOT NULL,
  "token" TEXT NOT NULL,
  "expiresAt" TIMESTAMP(3) NOT NULL,
  "usedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "PasswordResetToken_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "PasswordResetToken_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE UNIQUE INDEX IF NOT EXISTS "PasswordResetToken_token_key" ON "PasswordResetToken"("token");
CREATE INDEX IF NOT EXISTS "PasswordResetToken_userId_idx" ON "PasswordResetToken"("userId");
