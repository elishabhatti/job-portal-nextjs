import { getCurrentUser } from "@/app/features/auth/server/auth.quires";
import { redirect } from "next/navigation";

const EmployersApplicationPage = async () => {
  const user = await getCurrentUser();
  if (!user || user.role !== "employer") return redirect("/login");

  // const applications = await getEmployerApplications(user.id);

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
    </div>
  );
};

export default EmployersApplicationPage;
