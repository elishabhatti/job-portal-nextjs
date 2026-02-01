import { getJobById } from "@/app/features/employers/jobs/server/jobs.queries";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
    <div className="container mx-auto max-w-6xl py-10 px-4 space-y-8">
      {/* Hero Header */}
      <div className="flex flex-col gap-6 md:flex-row md:item-start md:justify-between border-b pb-8">
        <div className="flex gap-5">
          {/* Logo */}
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border bg-gray-50">
            {job.companyLogo ? (
              <Image
                src={job.companyLogo}
                alt={job.companyName || "Company"}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex he-full items-center justify-center bg-gray-100 text-lg font-bold text-gray-400">
                {job.companyName?.slice(0, 2).toUpperCase()}
              </div>
            )}
          </div>
          {/* Title & Meta */}
          <div className="space-y-1"></div>
        </div>
        {/* Action Button */}
        <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
          <Button size="lg" className="w-full md:w-auto font-semibold">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobId;
