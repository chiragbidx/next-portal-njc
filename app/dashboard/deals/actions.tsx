"use server";

import { z } from "zod";
import { db } from "@/lib/db/client";
import { deals } from "@/lib/db/schema";
import { getAuthSession } from "@/lib/auth/session";
import { eq, and } from "drizzle-orm";

// Zod schema for deal
export const dealSchema = z.object({
  id: z.string().optional(),
  contactId: z.string().optional().nullable(),
  title: z.string().min(1),
  value: z.coerce.number().int().nonnegative(), // stored as integer (e.g., cents)
  currency: z.string().max(8).default("USD"),
  stage: z
    .string()
    .default("lead")
    .refine((val) =>
      ["lead", "proposal", "negotiation", "closed_won", "closed_lost"].includes(val)
    ),
  status: z.string().default("active"),
  notes: z.string().optional(),
});

export async function listDeals() {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");
  return db
    .select()
    .from(deals)
    .where(eq(deals.teamId, session.teamId))
    .orderBy(deals.createdAt)
    .all();
}

export async function createDeal(input: z.infer<typeof dealSchema>) {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");
  const data = dealSchema.omit({ id: true }).parse(input);

  await db.insert(deals).values({
    ...data,
    teamId: session.teamId,
  });

  return { success: true };
}

export async function updateDeal(input: z.infer<typeof dealSchema>) {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");
  const { id, ...data } = dealSchema.parse(input);

  if (!id) throw new Error("Missing deal id");

  await db
    .update(deals)
    .set({ ...data })
    .where(and(eq(deals.id, id), eq(deals.teamId, session.teamId)));

  return { success: true };
}

export async function deleteDeal({ id }: { id: string }) {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");
  if (!id) throw new Error("Missing deal id");

  await db
    .delete(deals)
    .where(and(eq(deals.id, id), eq(deals.teamId, session.teamId)));

  return { success: true };
}

export async function getDealById(id: string) {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");
  if (!id) throw new Error("Missing deal id");

  return db
    .select()
    .from(deals)
    .where(and(eq(deals.id, id), eq(deals.teamId, session.teamId)))
    .first();
}