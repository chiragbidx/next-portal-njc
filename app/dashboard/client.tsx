"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">{greeting}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-2 text-muted-foreground">
            Your central hub for contacts and deals
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Sales Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-10">
            <div className="mb-4 text-muted-foreground">
              No data to display yet. Add contacts and deals to get started.
            </div>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="/dashboard/contacts/new">Add Contact</Link>
              </Button>
              <Button asChild>
                <Link href="/dashboard/deals/new">Add Deal</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}