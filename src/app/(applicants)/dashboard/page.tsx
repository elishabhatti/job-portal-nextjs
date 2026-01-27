import { logoutUserAction } from "@/app/features/auth/server/auth.action";

const Applicant = async () => {
  // const user = await getCurrentUser();
  // console.log("user data employer:", user);

  // if (!user) return redirect("/login");

  return (
    <div className="p-6">
      <h1>Hello Applicant Dashboard.</h1>
      <button onClick={logoutUserAction}>Logout</button>
    </div>
  );
};

export default Applicant;
