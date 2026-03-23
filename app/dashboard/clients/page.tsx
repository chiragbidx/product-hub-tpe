import { Button } from "@/components/ui/button";

export default function DashboardClientsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Clients</h1>
      <div className="rounded-lg bg-muted p-6 flex flex-col items-center justify-center">
        <p className="mb-4 text-muted-foreground text-center">
          No clients yet. Add your first client to begin managing your agency relationships.
        </p>
        <Button>Add Client</Button>
      </div>
    </div>
  );
}