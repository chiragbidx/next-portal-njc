import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DealsNewPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Deal</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="py-8 text-muted-foreground">
          Enter deal details to start tracking a new opportunity.
        </div>
        {/* Future: Deal creation form */}
      </CardContent>
    </Card>
  );
}