"use server";

import { z } from "zod";
import { db } from "@/lib/db/client";
import { contacts } from "@/lib/db/schema";
import { getAuthSession } from "@/lib/auth/session";
import { eq, and } from "drizzle-orm";

// Zod schema for contact
export const contactSchema = z.object({
  id: z.string().optional(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  jobTitle: z.string().optional(),
  notes: z.string().optional(),
});

export async function listContacts() {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");

  return db
    .select()
    .from(contacts)
    .where(eq(contacts.teamId, session.teamId))
    .orderBy(contacts.firstName, contacts.lastName)
    .all();
}

export async function createContact(input: z.infer<typeof contactSchema>) {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");

  const data = contactSchema.omit({ id: true }).parse(input);

  // Insert new contact
  await db.insert(contacts).values({
    ...data,
    teamId: session.teamId,
  });

  return { success: true };
}

export async function updateContact(input: z.infer<typeof contactSchema>) {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");
  const { id, ...data } = contactSchema.parse(input);
  if (!id) throw new Error("Missing contact id");

  await db
    .update(contacts)
    .set({ ...data })
    .where(and(eq(contacts.id, id), eq(contacts.teamId, session.teamId)));

  return { success: true };
}

export async function deleteContact({ id }: { id: string }) {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");
  if (!id) throw new Error("Missing contact id");

  await db
    .delete(contacts)
    .where(and(eq(contacts.id, id), eq(contacts.teamId, session.teamId)));

  return { success: true };
}

export async function getContactById(id: string) {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");
  if (!id) throw new Error("Missing contact id");

  return db
    .select()
    .from(contacts)
    .where(and(eq(contacts.id, id), eq(contacts.teamId, session.teamId)))
    .first();
}