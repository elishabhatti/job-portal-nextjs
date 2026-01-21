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

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Edit Job</h1>
      <p>Editing job with ID: {jobId}</p>
    </div>
  );
};

export default JobID;
