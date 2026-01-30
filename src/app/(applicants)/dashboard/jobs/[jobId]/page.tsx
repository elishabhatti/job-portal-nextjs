import { getJobById } from "@/app/features/employers/jobs/server/jobs.queries";
import { notFound } from "next/navigation";

interface EditJobPageProps {
  params: { jobId: string };
}

const JobId = async ({ params }: EditJobPageProps) => {
  const jobId = parseInt(params.jobId);
  if (isNaN(jobId)) return notFound();

  const job = await getJobById(jobId);
  console.log("job", job);

  if (!job) return notFound();

  return (
    <>
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-muted-foreground mb-6"></nav>
      {/* Job Details */}
      <div>{jobId}</div>
    </>
  );
};

export default JobId;
