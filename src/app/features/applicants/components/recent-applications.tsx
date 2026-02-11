import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";

const RECENT_APPLICATIONS = [
  {
    id: 1,
    title: "Networking Engineer",
    type: "Remote",
    salary: "$50k/month",
    date: "Feb 2, 2025 19:28",
    status: "Active",
    company: "Google",
    location: "Washington",
  },
  {
    id: 2,
    title: "Product Designer",
    type: "Full Time",
    salary: "$60k/month",
    date: "Dec 7, 2025 23:26",
    status: "Active",
    company: "Dribbble",
    location: "India",
  },
  {
    id: 3,
    title: "Junior Graphic Designer",
    type: "Temporary",
    salary: "$50k/month",
    date: "Feb 2, 2025 19:28",
    status: "Active",
    company: "AP",
    location: "Brazil",
  },
];

const RecentApplications = () => {
  return (
    <div
      style={{ marginTop: "20px" }}
      className="rounded-xl border bg-white shadow-sm border-gray-200"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b p-6">
        <h3 style={{ color: "oklch(20% 0.1 250)" }} className="font-semibold">
          Recently Applied
        </h3>
        <Link
          href="/dashboard/applied-jobs"
          className="flex items-center gap-1"
          style={{ color: "oklch(50% 0.05 250)" }}
        >
          <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>
            View all
          </span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow style={{ textAlign: "left" }}>
            <TableHead
              className="text-left" // ← add text-left
              style={{
                color: "oklch(30% 0.05 250)",
                paddingLeft: "40px",
              }}
            >
              Job
            </TableHead>
            <TableHead style={{ color: "oklch(30% 0.05 250)" }}>
              Date Applied
            </TableHead>
            <TableHead style={{ color: "oklch(30% 0.05 250)" }}>
              Status
            </TableHead>
            <TableHead
              className="pr-6 text-right"
              style={{ color: "oklch(30% 0.05 250)" }}
            >
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {RECENT_APPLICATIONS.map((job) => (
            <TableRow key={job.id}>
              {/* Job Column */}
              <TableCell style={{ paddingLeft: "30px" }} className="pl-6 py-4">
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg font-bold text-xs"
                    style={{
                      backgroundColor: "oklch(95% 0.01 250)",
                      color: "oklch(20% 0.1 250)",
                    }}
                  >
                    {job.company.slice(0, 2).toUpperCase()}
                  </div>

                  <div className="flex flex-col gap-1">
                    <span
                      style={{ color: "oklch(20% 0.1 250)" }}
                      className="font-semibold"
                    >
                      {job.title}
                      <Badge
                        className="rounded-full px-2 py-0.5 font-normal border-0"
                        style={{
                          marginLeft: "10px",
                          backgroundColor: "oklch(60% 0.25 250)",
                          color: "oklch(95% 0 250)",
                        }}
                      >
                        {job.type}
                      </Badge>
                    </span>
                    <div
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "oklch(37.3% 0.034 259.733)" }}
                    >
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-4" />
                        {job.location}
                      </span>
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>
              </TableCell>

              {/* Date Column */}
              <TableCell style={{ color: "oklch(50% 0.05 250)" }}>
                {job.date}
              </TableCell>

              {/* Status Column */}
              <TableCell>
                <div
                  className="flex items-center gap-1.5 font-medium text-sm"
                  style={{ color: "oklch(62.7% 0.194 149.214)" }}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {job.status}
                </div>
              </TableCell>

              {/* Action Column */}
              <TableCell>
                <Button
                  size="sm"
                  variant="secondary"
                  className="font-medium"
                  style={{
                    backgroundColor: "oklch(96.7% 0.003 264.542)",
                    color: "oklch(54.6% 0.245 262.881)",
                  }}
                >
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentApplications;
