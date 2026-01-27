import React from "react";

const JobsPage = async () => {
  const jobs = await getAllJobs();

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

      {/* Job Grid */}
      {jobs.lenght > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jobs.map((job) => (
            <JobCard key={jobs.id} job={job} />
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
