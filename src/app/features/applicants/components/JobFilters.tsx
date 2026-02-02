import { useRouter, useSearchParams } from "next/navigation"
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

    useEffect(() => {

    },[search])

    const updateFilters = (newParams: Record<string, string | null>) => {}
    
  return (
    <div>JobFilters</div>
  )
}

export default JobFilters