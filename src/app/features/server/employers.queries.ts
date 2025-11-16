import { redirect } from "next/navigation";
import { getCurrentUser } from "../auth/server/auth.quires";

export const getCurrentEmployerDetails = async () => {
  const currentUser = await getCurrentUser();
  console.log("user data employer: ", currentUser);

  if (!currentUser) return redirect("/login");
};
