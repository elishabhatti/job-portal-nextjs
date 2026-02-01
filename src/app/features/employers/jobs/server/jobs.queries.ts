import { db } from "@/config/db";
import { employers, jobs, users } from "@/drizzle/schema";
import { and, desc, eq, gte, isNull, or } from "drizzle-orm";

export const getAllJobs = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const jobsData = await db
    .select({
      id: jobs.id,
      title: jobs.title,
      description: jobs.description,
      minSalary: jobs.minSalary,
      maxSalary: jobs.maxSalary,
      salaryCurrency: jobs.salaryCurrency,
      salaryPeriod: jobs.salaryPeriod,
      location: jobs.location,
      jobType: jobs.jobType,
      workType: jobs.workType,
      createdAt: jobs.createdAt,
      companyName: employers.name,
      companyLogo: users.avatarUrl,
    })
    .from(jobs)
    .innerJoin(employers, eq(jobs.employerId, employers.id))
    .innerJoin(users, eq(employers.id, users.id))
    .where(
      and(
        isNull(jobs.deletedAt),
        or(isNull(jobs.expiresAt), gte(jobs.expiresAt, today)),
      ),
    )
    .orderBy(desc(jobs.createdAt));
  return jobsData;
};

export type JobCardType = Awaited<ReturnType<typeof getAllJobs>>[number];

export const getJobById = async (jobId: number) => {
  const job = await db
    .select({
      // Basic Info
      id: jobs.id,
      title: jobs.title,
      description: jobs.description,
      tags: jobs.tags,

      // Salary Details
      minSalary: jobs.minSalary,
      maxSalary: jobs.maxSalary,
      salaryCurrency: jobs.salaryCurrency,
      salaryPeriod: jobs.salaryPeriod,

      // Job Meta Data
      location: jobs.location,
      jobType: jobs.jobType,
      workType: jobs.workType,
      jobLevel: jobs.jobLevel,
      experience: jobs.experience,
      minEducation: jobs.minEducation,

      // Timestamps
      createdAt: jobs.createdAt,
      expiresAt: jobs.expiresAt,

      // Employers Info
      companyLogo: users.avatarUrl,
      companyName: employers.name,
      companyBio: employers.description,
      companyWebsite: employers.websiteUrl,
      companyLocation: employers.location,
    })
    .from(jobs)
    .innerJoin(employers, eq(jobs.employerId, employers.id))
    .innerJoin(users, eq(employers.id, users.id))
    .where(eq(jobs.id, jobId)) // filter by id
    .limit(1); // we only want one result

  // Return the first item
  return job[0];
};

export type JobDetailsType = Awaited<ReturnType<typeof getJobById>>;