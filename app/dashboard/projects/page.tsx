import { Button } from "@/components/ui/button";

export default function DashboardProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Projects</h1>
      <div className="rounded-lg bg-muted p-6 flex flex-col items-center justify-center">
        <p className="mb-4 text-muted-foreground text-center">
          No projects yet. Start by creating a new project for your clients.
        </p>
        <Button>Create Project</Button>
      </div>
    </div>
  );
}