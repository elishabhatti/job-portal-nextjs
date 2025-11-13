import { redirect } from "next/navigation";
import LoginForm from "../features/auth/components/login-form";
import { getCurrentUser } from "../features/auth/server/auth.quires";

const Login = async () => {
  const user = await getCurrentUser();
  if (!user) return redirect("/login");

  if (user) {
    if (user.role === "applicant") return redirect("/dashboard");
    if (user.role === "employer") return redirect("/employer-dashboard");
  }
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
