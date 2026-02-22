"use server";

import { db } from "@/config/db";
import { getCurrentUser } from "../../auth/server/auth.quires";
import {
  applicantSettingsSchema,
  ApplicantSettingsSchema,
} from "../applicant.schema";
import { eq } from "drizzle-orm";
import { applicants, resumes, users } from "@/drizzle/schema";

export const createdApplicantProfile = async (
  data: ApplicantSettingsSchema,
) => {
  try {
    console.log("data", data);

    const user = await getCurrentUser();
    if (!user) return { status: "ERROR", message: "Unauthorized" };

    const { data: validatedData, error } =
      applicantSettingsSchema.safeParse(data);

    if (error) {
      return { status: "ERROR", message: error.issues[0].message };
    }

    const {
      name,
      phoneNumber,
      avatarUrl,
      location,
      dateOfBirth,
      nationality,
      gender,
      maritalStatus,
      education,
      experience,
      websiteUrl,
      biography,
      resumeUrl,
      resumeName,
      resumeSize,
    } = validatedData;

    await db.transaction(async (tx) => {
      // update the user's table
      await tx
        .update(users)
        .set({
          name,
          phoneNumber,
          avatarUrl,
        })
        .where(eq(users.id, user.id));

      await tx.insert(applicants).values({
        id: user.id,
        location,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
        nationality,
        gender,
        maritalStatus,
        education,
        experience,
        websiteUrl,
        biography,
      });

      if (resumeName && resumeUrl) {
        await tx.insert(resumes).values({
          applicantId: user.id,
          fileUrl: resumeUrl,
          fileName: resumeName,
          fileSize: resumeSize,
        });
      }
    });

    return { status: "SUCCESS", message: "Profile created successfully!" };
  } catch (error) {
    console.error("CREATE PROFILE ERROR", error);
    return { status: "ERROR", message: "Failed to create Profile." };
  }
};
