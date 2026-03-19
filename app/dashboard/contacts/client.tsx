"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  listContacts,
  deleteContact,
} from "./actions";
import { useRouter } from "next/navigation";

type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  jobTitle?: string | null;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export default function ContactsClient() {
  const [contacts, setContacts] = useState<Contact[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    let ignore = false;
    async function fetchContacts() {
      setLoading(true);
      setError(null);
      try {
        const data = await listContacts();
        if (!ignore) setContacts(data ?? []);
      } catch (e: any) {
        setError("Failed to load contacts");
      }
      setLoading(false);
    }
    fetchContacts();
    return () => {
      ignore = true;
    };
  }, []);

  async function handleDelete(id: string) {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    setDeleting(id);
    try {
      await deleteContact({ id });
      setContacts((prev) => prev?.filter((c) => c.id !== id) ?? []);
      router.refresh();
    } catch (e: any) {
      setError("Failed to delete contact");
    } finally {
      setDeleting(null);
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">Loading...</div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-destructive">{error}</div>
        </CardContent>
      </Card>
    );
  }

  if (!contacts || contacts.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="mb-4 text-muted-foreground">
              You haven’t added any contacts yet.
            </div>
            <Button asChild>
              <Link href="/dashboard/contacts/new">Add Contact</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Contacts</CardTitle>
        <Button asChild>
          <Link href="/dashboard/contacts/new">Add Contact</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-muted bg-background text-sm">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left font-medium">Name</th>
                <th className="px-3 py-2 text-left font-medium">Email</th>
                <th className="px-3 py-2 text-left font-medium">Phone</th>
                <th className="px-3 py-2 text-left font-medium">Company</th>
                <th className="px-3 py-2 text-left font-medium">Job Title</th>
                <th className="px-3 py-2 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="px-3 py-2">{contact.firstName} {contact.lastName}</td>
                  <td className="px-3 py-2">{contact.email}</td>
                  <td className="px-3 py-2">{contact.phone || "-"}</td>
                  <td className="px-3 py-2">{contact.company || "-"}</td>
                  <td className="px-3 py-2">{contact.jobTitle || "-"}</td>
                  <td className="px-3 py-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="mr-2"
                    >
                      <Link href={`/dashboard/contacts/${contact.id}/edit`}>Edit</Link>
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(contact.id)}
                      disabled={deleting === contact.id}
                    >
                      {deleting === contact.id ? "Deleting..." : "Delete"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}