import Image from "next/image";
import Link from "next/link";
import { JobCardType } from "../server/jobs.queries";

interface JobCardProps {
  job: JobCardType;
}

const JobCard = ({ job }: JobCardProps) => {
  const formatSalary = () => {
    if (!job.minSalary || !job.maxSalary) return "Not Disclosed";
    return `${job.salaryCurrency} ${job.minSalary.toLocalString()} - ${job.maxSalary.toLocalString()}`;
  };

  return (
    <div>
      <Link
        href={`/dashboard/jobs/${job.id}`}
        className="group flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-blue-500/50 hover:shadow-md"
      >
        {/* Header Logo & Title */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
              {job.companyLogo ? (
                <Image
                  src={job.companyLogo}
                  alt={job.companyName || "Company Logo"}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-100 font-bold text-gray-400">
                  {job.companyName?.slice(0, 2).toUpperCase() || "CO"}
                </div>
              )}
            </div>

            <div>
              <h3 className="max-w-45 truncate font-semibold text-gray-900 group-hover:text-blue-600">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500">{job.companyName}</p>
            </div>
          </div>
        </div>

        {/* Badge */}
      </Link>
    </div>
  );
};

export default JobCard;
