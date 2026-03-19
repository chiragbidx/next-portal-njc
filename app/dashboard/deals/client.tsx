"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  listDeals,
  deleteDeal
} from "./actions";
import { useRouter } from "next/navigation";

type Deal = {
  id: string;
  title: string;
  value: number;
  currency: string;
  stage: string;
  status: string;
  contactId?: string | null;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export default function DealsClient() {
  const [deals, setDeals] = useState<Deal[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    let ignore = false;
    async function fetchDeals() {
      setLoading(true);
      setError(null);
      try {
        const data = await listDeals();
        if (!ignore) setDeals(data ?? []);
      } catch (e: any) {
        setError("Failed to load deals");
      }
      setLoading(false);
    }
    fetchDeals();
    return () => {
      ignore = true;
    };
  }, []);

  async function handleDelete(id: string) {
    if (!window.confirm("Are you sure you want to delete this deal?")) return;
    setDeleting(id);
    try {
      await deleteDeal({ id });
      setDeals((prev) => prev?.filter((c) => c.id !== id) ?? []);
      router.refresh();
    } catch (e: any) {
      setError("Failed to delete deal");
    } finally {
      setDeleting(null);
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Deals</CardTitle>
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
          <CardTitle>Deals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-destructive">{error}</div>
        </CardContent>
      </Card>
    );
  }

  if (!deals || deals.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Deals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="mb-4 text-muted-foreground">
              You haven’t added any deals yet.
            </div>
            <Button asChild>
              <Link href="/dashboard/deals/new">Add Deal</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Deals</CardTitle>
        <Button asChild>
          <Link href="/dashboard/deals/new">Add Deal</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-muted bg-background text-sm">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left font-medium">Title</th>
                <th className="px-3 py-2 text-left font-medium">Value</th>
                <th className="px-3 py-2 text-left font-medium">Stage</th>
                <th className="px-3 py-2 text-left font-medium">Status</th>
                <th className="px-3 py-2 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {deals.map((deal) => (
                <tr key={deal.id}>
                  <td className="px-3 py-2">{deal.title}</td>
                  <td className="px-3 py-2">
                    {deal.value.toLocaleString()} {deal.currency}
                  </td>
                  <td className="px-3 py-2 capitalize">{deal.stage.replace("_", " ")}</td>
                  <td className="px-3 py-2 capitalize">{deal.status}</td>
                  <td className="px-3 py-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="mr-2"
                    >
                      <Link href={`/dashboard/deals/${deal.id}/edit`}>Edit</Link>
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(deal.id)}
                      disabled={deleting === deal.id}
                    >
                      {deleting === deal.id ? "Deleting..." : "Delete"}
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