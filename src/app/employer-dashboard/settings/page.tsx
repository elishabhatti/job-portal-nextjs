import EmployerSettingsForm from "@/app/features/employers/components/employer-setting-form";
import { getCurrentEmployerDetails } from "@/app/features/server/employers.queries";
import { redirect } from "next/navigation";

const EmployerSettings = async () => {
  const currentEmployer = await getCurrentEmployerDetails();
  if (!currentEmployer) return redirect("/login");
  console.log("current employer:", currentEmployer);

  return (
    <div>
      <EmployerSettingsForm
        initialData={{
          name: currentEmployer.employerDetails.name,
          description: currentEmployer.employerDetails.description,
          organizationType: currentEmployer.employerDetails.organizationType,
          teamSize: currentEmployer.employerDetails.teamSize,
          location: currentEmployer.employerDetails.location,
          websiteUrl: currentEmployer.employerDetails.websiteUrl,
          yearOfEstablishment:
            currentEmployer.employerDetails.yearOfEstablishment?.toString(),
        }}
      />
    </div>
  );
};

export default EmployerSettings;
