import JobForm from "@/app/features/employers/components/employer-job-form";
import { getJobByIdAction } from "@/app/features/server/jobs.action";
import { redirect } from "next/navigation";

interface EditJobPageProps {
  params: { jobId: string };
}

export const JobID = async ({ params }: EditJobPageProps) => {
  const jobId = Number(params.jobId);

  // if (Number.isNaN(jobId)) {
  //   throw new Error("Invalid job ID");
  // }

  if (Number.isNaN(jobId)) redirect("/employer-dashboard/jobs");

  const { status, data: job } = await getJobByIdAction(jobId);
  console.log("Job Data:", job);

  if (status === "ERROR" || !job) {
    redirect("/employer-dashboard/jobs");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-8"></div>
      <JobForm initialData={job} isEditMode={true} />
    </div>
  );
};

export default JobID;
