"use server";

import { getCurrentUser } from "../auth/server/auth.quires";
import { jobs } from "@/drizzle/schema";
import { db } from "@/config/db";
import { eq } from "drizzle-orm";
import { Job } from "../employers/jobs/types/job.types";
import { JobFormData, jobSchema } from "../employers/jobs/jobs.schema";

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

export const getEmployerJobsAction = async (): Promise<{
  status: "SUCCESS" | "ERROR";
  data?: Job[];
  message?: string;
}> => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== "employer") {
      return { status: "ERROR", data: [] };
    }
    const result = await db
      .select()
      .from(jobs)
      .where(eq(jobs.employerId, currentUser.id))
      .orderBy(jobs.createdAt);

    return { status: "SUCCESS", data: result as Job[] };
  } catch (error) {
    return { status: "ERROR", message: "Something went wrong" };
  }
};
