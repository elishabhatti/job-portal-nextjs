import JobFilters from "@/app/features/applicants/components/job-filters";
import JobCard from "@/app/features/employers/jobs/components/jobCard";
import { getAllJobs, JobFilterParams } from "@/app/features/employers/jobs/server/jobs.queries";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const JobsPage = async ({ searchParams }: PageProps) => {
  const resolveParams = await searchParams;
  console.log("resolveParams:", resolveParams);

  const filters: JobFilterParams = {
    search:
      typeof resolveParams.search === "string"
        ? resolveParams.search
        : undefined,
    jobType:
      typeof resolveParams.jobType === "string"
        ? resolveParams.jobType
        : undefined,
    jobLevel:
      typeof resolveParams.jobLevel === "string"
        ? resolveParams.jobLevel
        : undefined,
    workType:
      typeof resolveParams.workType === "string"
        ? resolveParams.workType
        : undefined,
  };

  const jobs = await getAllJobs(filters);

  return (
    <div className="space-y-6 p-6">
      {/* Page Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Find Your Next Dream Job
        </h1>
        <p className="text-gray-500">
          Browse latest job openings from top companies
        </p>
      </div>

      {/* Add the Filter Component Here */}
      <JobFilters />

      {/* Job Grid */}
      {jobs.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="flex h-100 flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 text-center">
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            No Jobs Found
          </h3>
          <p>Check back later for new opportunities.</p>
        </div>
      )}
    </div>
  );
};

export default JobsPage;
