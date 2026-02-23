import { ApplicantProfileStatus } from "@/app/features/applicants/components/applicant-profile-status";
import { ApplicantStats } from "@/app/features/applicants/components/applicant-stats";
import { RecentApplications } from "@/app/features/applicants/components/recent-applications";
import { getCurrentUser } from "@/app/features/auth/server/auth.quires";
import { redirect } from "next/navigation";

export default async function ApplicantDashboard() {
  const user = await getCurrentUser();

  // Redirect if not logged in
  if (!user) return redirect("/login");

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Hello, <span className="capitalize">{user.name}</span>
        </h1>
        <p className="text-gray-500">
          Here is your daily activities and job alerts
        </p>
      </div>

      {/* 1. Stats Row */}
      <ApplicantStats />

      {/* 2. Red Alert Banner (Profile Incomplete) */}
      <ApplicantProfileStatus />

      {/* 3. Recently Applied Table */}
      <RecentApplications />
    </div>
  );
}