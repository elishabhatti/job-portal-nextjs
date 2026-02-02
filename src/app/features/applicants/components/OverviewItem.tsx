import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JobDetailsType } from "../../employers/jobs/server/jobs.queries";
import {
  Banknote,
  Briefcase,
  CalendarDays,
  Globe,
  GraduationCap,
} from "lucide-react";
import OverviewItem from "./jobOverViewSidebar";
import Link from "next/link";

interface JobSideBarProps {
  job: NonNullable<JobDetailsType>;
}
const JobOverviewSidebar = ({ job }: JobSideBarProps) => {
  const salaryDisplay =
    job.minSalary && job.maxSalary
      ? `${job.salaryCurrency} ${job.minSalary.toLocaleString()} - ${job.maxSalary.toLocaleString()}`
      : "Not Disclosed";
  return (
    <div>
      <div className="space-y-6">
        {/* Job Overview Card */}
        <Card>
          <CardHeader className="bg-gray-50/50 pb-4">
            <CardTitle className="text-lg">Job Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 pt-6">
            <OverviewItem
              icon={<Banknote className="h-5 w-5 text-gray-500" />}
              label="Salary"
              value={salaryDisplay}
            />
            <OverviewItem
              icon={<Briefcase className="h-5 w-5 text-gray-500" />}
              label="Job Type"
              value={job.jobType?.replace("-", "")}
            />
            <OverviewItem
              icon={<CalendarDays className="h-5 w-5 text-gray-500" />}
              label="Work Type"
              value={job.workType?.replace("-", "")}
            />
            <OverviewItem
              icon={<GraduationCap className="h-5 w-5 text-gray-500" />}
              label="Job Level"
              value={job.jobLevel?.replace("-", "")}
            />
            <OverviewItem
              icon={<GraduationCap className="h-5 w-5 text-gray-500" />}
              label="Education"
              value={job.minEducation?.replace("-", "")}
            />
          </CardContent>
        </Card>

        {/* Company Snippet Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">About The Company</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p
              className="text-sm text-gray-600 line-clamp-4 prose prose-sm"
              dangerouslySetInnerHTML={{
                __html: job.companyBio || "No Company description available",
              }}
            />

            {job.companyWebsite && (
              <Link
                href={job.companyWebsite}
                target="_blank"
                rel="noonpener noreferrer"
                aria-label="Visit company website (opens in new tab)"
                className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
              >
                <Globe className="h4 w-4" />
                Visit Website
              </Link>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JobOverviewSidebar;
