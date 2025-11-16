import { db } from "@/config/db";
import { getCurrentUser } from "../auth/server/auth.quires";
import { employers } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export const getCurrentEmployerDetails = async () => {
  const currentUser = await getCurrentUser();
  console.log("user data employer: ", currentUser);

  if (!currentUser) return null;
  if (currentUser.role !== "employer") return null;

  const [employer] = await db
    .select()
    .from(employers)
    .where(eq(employers.id, currentUser.id));

  console.log("employer: ", employer);
};
