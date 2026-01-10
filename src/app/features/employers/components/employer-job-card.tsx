import { Card, CardContent } from "@/components/ui/card";
import { JobCardProps } from "../jobs/types/job.types";
import { Button } from "@/components/ui/button";
import { MapPin, Pencil, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EmployerJobCard = ({ job, onDelete }: JobCardProps) => {
  return (
    <Card className="hover:shadow-,d transition cursor-pointer">
      <CardContent className="space-y-3 py-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{job.title}</h3>

          <div className="flex gap-2">
            <Button size="icon" variant="ghost">
              <Pencil className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="ghost" className="hover:bg-red-200">
              <Trash className="w-4 h-4 text-destructive" />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-sm">
          <Badge variant="secondary">{job.jobType}</Badge>
          <Badge variant="secondary">{job.workType}</Badge>
          <Badge variant="secondary">{job.jobLevel}</Badge>
        </div>

        {job.location && (
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            {job.location}
          </p>
        )}

        {job.minSalary && job.maxSalary && (
          <p className="text-sm font-medium">
            {job.salaryCurrency} {job.minSalary} - {job.maxSalary} /
            {job.salaryPeriod}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default EmployerJobCard;
