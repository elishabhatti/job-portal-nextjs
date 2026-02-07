import { db } from "@/config/db";
import { employers, jobs, users } from "@/drizzle/schema";
import { and, desc, eq, gte, isNull, like, or, SQL } from "drizzle-orm";

export interface JobFilterParams {
  search?: string;
  jobType?: string;
  jobLevel?: string;
  workType?: string;
}

export const getAllJobs = async (filters: JobFilterParams) => {
  console.log("filters real:", filters);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Base Rule
  const conditions: (SQL | undefined)[] = [
    isNull(jobs.deletedAt),
    or(isNull(jobs.expiresAt), gte(jobs.expiresAt, today)),
  ];

  // search
  if (filters?.search) {
    // 1: react - mern stack react title, react, react elisha
    // % - wildcard
    // 2: company name, tags, title - LIKE() - contains
    // 3: OR

    const searchTerm = `%${filters.search}%`;
    conditions.push(
      or(
        like(jobs.title, searchTerm),
        like(employers.name, searchTerm),
        like(jobs.tags, searchTerm),
      ),
    );
  }

  if (filters?.jobType && filters.jobType !== "all") {
    conditions.push(eq(jobs.jobType, filters.jobType as any));
  }
  if (filters?.jobLevel && filters.jobLevel !== "all") {
    conditions.push(eq(jobs.jobLevel, filters.jobLevel as any));
  }

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
    // .where(
    //   and(
    //     isNull(jobs.deletedAt),
    //     or(isNull(jobs.expiresAt), gte(jobs.expiresAt, today)),
    //   ),
    // )
    .where(and(...conditions))
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
