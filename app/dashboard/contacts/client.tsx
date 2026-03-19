"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactsClient() {
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