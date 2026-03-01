import ApplicantSettingsForm from "@/app/features/applicants/components/applicant-settings-form";
import { getApplicantProfileData } from "@/app/features/applicants/server/applicant.queries";
import { getCurrentUser } from "@/app/features/auth/server/auth.quires";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const user = await getCurrentUser();
  if (!user) return redirect("/login");

  const initialData = await getApplicantProfileData(user.id);

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-8">
      <ApplicantSettingsForm initialData={initialData} />
    </div>
  );
}