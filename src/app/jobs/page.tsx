import JobFilters from "@/app/features/applicants/jobs/components/job-filters";
import JobCard from "@/app/features/employers/jobs/components/jobCard";
import {
  getAllJobs,
  JobFilterParams,
} from "@/app/features/employers/jobs/server/jobs.queries";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function JobsPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;

  const currentPage = Number(resolvedParams.page) || 1;
  const ITEMS_PER_PAGE = 9;

  console.log("resolvedParams: ", resolvedParams);

  const filters: JobFilterParams = {
    search:
      typeof resolvedParams.search === "string"
        ? resolvedParams.search
        : undefined,
    jobType:
      typeof resolvedParams.jobType === "string"
        ? resolvedParams.jobType
        : undefined,
    jobLevel:
      typeof resolvedParams.jobLevel === "string"
        ? resolvedParams.jobLevel
        : undefined,
    workType:
      typeof resolvedParams.workType === "string"
        ? resolvedParams.workType
        : undefined,
    page: currentPage,
    limit: ITEMS_PER_PAGE,
  };

  // 1. Fetch data directly on the server
  const { jobs, totalCount } = await getAllJobs(filters);

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, currentPage + 1);

  if (currentPage === 1) {
    endPage = Math.min(totalPages, 3);
  } else if (currentPage === totalPages) {
    startPage = Math.max(1, totalCount - 2);
  }

  const visiblePages = [];
  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  const createPageUrl = (pageNum: number) => {
    const params = new URLSearchParams();

    Object.entries(resolvedParams).forEach(([key, value]) => {
      if (value && key !== "page") {
        params.set(key, String(value));
      }
    });

    params.set("page", pageNum.toString());
    return `/jobs?${params.toString()}`;
  };

  return (
    <div className="space-y-6 p-6">
      {/* Page Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Find your Next Dream Job
        </h1>
        <p className="text-gray-500">
          Browse latest job openings from top companies.
        </p>
      </div>

      {/* 3. Add the Filter Component Here */}
      <JobFilters />

      {/* Job Grid */}
      {jobs.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        // Empty State
        <div className="flex h-100 flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 text-center">
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            No jobs found
          </h3>
          <p className="text-gray-500">
            Check back later for new opportunities.
          </p>
        </div>
      )}
    </div>
  );
}
