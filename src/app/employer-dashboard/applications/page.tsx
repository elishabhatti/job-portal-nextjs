import { getCurrentUser } from "@/app/features/auth/server/auth.quires";
import { getEmployerApplications } from "@/app/features/server/employers.queries";
import { Briefcase } from "lucide-react";
import { redirect } from "next/navigation";

const EmployersApplicationPage = async () => {
  const user = await getCurrentUser();
  if (!user || user.role !== "employer") return redirect("/login");

  const applications = await getEmployerApplications(user.id);

  return (
    <div className="max-w-7xl mx-auto py-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Received Applications
        </h2>
        <p className="text-muted-foreground">
          Review and manage candidates who applied to your job postings.
        </p>
      </div>

      {applications.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed">
          <Briefcase className="w-12 h-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900">
            No applications yet.
          </h3>
          <p className="text-gray-500">
            When candidates to your jobs, they will appear here.
          </p>
        </div>
      ) : (
        <div className="rounded-md border bg-white shadow-sm"></div>
      )}
    </div>
  );
};

export default EmployersApplicationPage;
