import JobForm from "@/app/features/employers/components/employer-job-form";
import { JobFormData } from "@/app/features/employers/jobs/jobs.schema";
import { getJobByIdAction } from "@/app/features/server/jobs.action";
import { JOB_LEVEL, JOB_TYPE, WORK_TYPE } from "@/config/constant";
import { redirect } from "next/navigation";

interface EditJobPageProps {
  params: { jobId: string };
}

const JobId = async ({ params }: EditJobPageProps) => {
  const jobId = Number(params.jobId);

  if (Number.isNaN(jobId)) redirect("/employer-dashboard/jobs");

  const { status, data: job } = await getJobByIdAction(jobId);

  if (status === "ERROR" || !job) {
    redirect("/employer-dashboard/jobs");
  }

  // Normalize job for the form
  const safeJob: JobFormData & { id: number } = {
    ...job,
    jobType: job.jobType ?? JOB_TYPE[0],
    workType: job.workType ?? WORK_TYPE[0],
    jobLevel: job.jobLevel ?? JOB_LEVEL[0],
    minEducation: job.minEducation ?? undefined,
    location: job.location ?? "",
    tags: job.tags ?? "",
    minSalary: job.minSalary != null ? String(job.minSalary) : "",
    maxSalary: job.maxSalary != null ? String(job.maxSalary) : "",
    salaryCurrency: job.salaryCurrency ?? undefined,
    salaryPeriod: job.salaryPeriod ?? undefined,
    expiresAt: job.expiresAt
      ? new Date(job.expiresAt).toISOString().split("T")[0]
      : "",
    experience: job.experience ?? "",
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-8"></div>
      <JobForm initialData={safeJob} isEditMode={true} />
    </div>
  );
};

export default JobId;
