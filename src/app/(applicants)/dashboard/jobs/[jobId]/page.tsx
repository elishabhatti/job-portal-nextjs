interface EditJobPageProps {
  params: { jobId: string };
}

const JobId = async ({ params }: EditJobPageProps) => {
  const { jobId } = await params;
  return (
    <>
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-muted-foreground mb-6"></nav>
      {/* Job Details */}
      <div>{jobId}</div>
    </>
  );
};

export default JobId;
