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
      <Link href={`/dashboard/jobs/${job.id}`} className="group flex flex-col gap-4 rounded-xl border border-gray-200 bg"></Link>
    </div>
  )
};

export default JobCard;
