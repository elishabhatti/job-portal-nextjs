import { redirect } from "next/navigation";
import RegistrationForm from "../features/auth/components/register-form";
import { getCurrentUser } from "../features/auth/server/auth.quires";

const Registration = async () => {
  const user = await getCurrentUser();
  console.log("user", user);

  if (!user) return redirect("/login");

  if (user) {
    if (user.role === "applicant") return redirect("/dashboard");
    if (user.role === "employer") return redirect("/employer-dashboard");
  }
  return (
    <>
      <RegistrationForm />
    </>
  );
};

export default Registration;
