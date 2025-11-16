import { db } from "@/config/db";
// import { getCurrentUser } from "../auth/server/auth.quires";

import { employers } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { getCurrentUser } from "../auth/server/auth.querie";

export const getCurrentEmployerDetails = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "employer") return null;

  const [employer] = await db
    .select()
    .from(employers)
    .where(eq(employers.id, currentUser.id));

  return employer ?? null;
};
