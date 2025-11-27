import EmployerSettingsForm from "@/app/features/employers/components/employer-setting-form";
import { getCurrentEmployerDetails } from "@/app/features/server/employers.queries";
import { redirect } from "next/navigation";

const EmployerSettings = async () => {
  const currentEmployer = await getCurrentEmployerDetails();
  if (!currentEmployer) return redirect("/login");
  console.log(currentEmployer);

  return (
    <div>
      <EmployerSettingsForm />
    </div>
  );
};

export default EmployerSettings;
