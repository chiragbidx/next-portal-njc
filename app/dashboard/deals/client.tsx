"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DealsClient() {
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