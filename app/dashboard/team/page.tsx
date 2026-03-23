import { Button } from "@/components/ui/button";

export default function DashboardTeamPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Team</h1>
      <div className="rounded-lg bg-muted p-6 flex flex-col items-center justify-center">
        <p className="mb-4 text-muted-foreground text-center">
          No team members added. Invite your team to AgencyFlow.
        </p>
        <Button>Invite Team Member</Button>
      </div>
    </div>
  );
}