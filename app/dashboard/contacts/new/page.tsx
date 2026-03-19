import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactsNewPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Contact</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="py-8 text-muted-foreground">
          Enter contact details to create a new customer record.
        </div>
        {/* Future: Contact creation form */}
      </CardContent>
    </Card>
  );
}