"use server";

import {
  JobFormData,
  jobSchema,
} from "@/app/employer-dashboard/jobs/jobs.schema";
import { getCurrentUser } from "../auth/server/auth.quires";
import { jobs } from "@/drizzle/schema";
import { db } from "@/config/db";

export const createJobAction = async (data: JobFormData) => {
  try {
    const { success, data: result, error } = jobSchema.safeParse(data);

    if (!success) {
      return { status: "ERROR", message: error.issues[0].message };
    }

    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== "employer") {
      return { status: "ERROR", message: "Unauthorized" };
    }

    await db.insert(jobs).values({
      ...result,
      employerId: currentUser.id,
    });

    return { status: "SUCCESS", message: "Job Posted Successfully!" };
  } catch (error) {
    console.error(error);
    return { status: "ERROR", message: "Something went wrong" };
  }
};
