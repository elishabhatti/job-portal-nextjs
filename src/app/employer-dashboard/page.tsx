import { redirect } from "next/navigation";
import { getCurrentUser } from "../features/auth/server/auth.quires";

const EmployerDashboard = async () => {
  const user = await getCurrentUser();
  console.log("user data employer: ", user);

  if (!user) return redirect("/login");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          Hello, <span className="capitalize">{user?.name.toLowerCase()}</span>
        </h1>
        <p className="text-muted-foreground">
          Here is your daily activities and appLications
        </p>
      </div>

      {/* Stats Cards */}
      {/* <StatsCards /> */}
    </div>
  );
};
export default EmployerDashboard;
