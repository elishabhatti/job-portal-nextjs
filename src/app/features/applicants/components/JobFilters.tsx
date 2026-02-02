"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const JobFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log("searchParams: ", searchParams);
  console.log("searchingParams string: ", searchParams.toString());

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [jobType, setJobType] = useState(searchParams.get("jobType") || "");
  const [jobLevel, setJobLevel] = useState(searchParams.get("jobLevel") || "");
  const [workType, setWorkType] = useState(searchParams.get("workType") || "");

  useEffect(() => {}, [search]);

  const updateFilters = (newParams: Record<string, string | null>) => {};

  const clearFilters = () => {
    setSearch("");
    setJobType("");
    setJobLevel("");
    setWorkType("");

    const pathname = "/dashboard/jobs";
    router.push(pathname); // reset the base url
  };

  return (
    <div className="space-y-4 rounded-xl bg-white p-4 shadow-sm border border-gray-100">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Search by title, skill, or company..."
          className="pl-10 h-11 bg-gray-50/50"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default JobFilters;
