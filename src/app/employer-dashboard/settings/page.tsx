import EmployerSettingsForm from "@/app/features/employers/components/employer-setting-form";
import { getCurrentEmployerDetails } from "@/app/features/server/employers.queries";

const EmployerSettings = async () => {
  const currentEmployer = await getCurrentEmployerDetails();
  console.log(currentEmployer);

  return (
    <div>
      <EmployerSettingsForm />
    </div>
  );
};

export default EmployerSettings;
