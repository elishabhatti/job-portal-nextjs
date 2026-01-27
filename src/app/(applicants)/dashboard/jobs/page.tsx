import React from "react";

const JobsPage = async () => {
  // const jobs = await getAllJobs();

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
    </div>
  );
};

export default JobsPage;
