import { db } from "@/config/db";
import { employers, jobs, users } from "@/drizzle/schema";
import { desc, eq, gte, isNull, or } from "drizzle-orm";

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
    )
  )
  .orderBy(desc(jobs.createdAt));
  return jobsData;
