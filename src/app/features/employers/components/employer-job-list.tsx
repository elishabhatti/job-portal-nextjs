import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Job } from "../jobs/types/job.types";

const EmployerJobList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      setIsLoading(true);
      try {
        const res = await getEmployerJobsAction();

        if (res.status === "SUCCESS" && res.data) {
          setJobs(res.data);
        } else {
          toast.error(res.message || "Failed to load jobs");
        }
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
    fetchJobs();
  }, []);
  return <div>EmployerJobList</div>;
};

export default EmployerJobList;
