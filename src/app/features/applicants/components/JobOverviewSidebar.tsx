import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JobDetailsType } from "../../employers/jobs/server/jobs.queries";
import { Banknote } from "lucide-react";
import { OverviewItem } from "./jobOverViewSidebar";

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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JobOverviewSidebar;
