import { logoutUserAction } from "@/app/features/auth/server/auth.action";

const Applicant = () => {
  return (
    <div>
      <h1>Hello Applicant Dashboard.</h1>
      <button onClick={logoutUserAction}>Logout</button>
    </div>
  );
};

export default Applicant;
