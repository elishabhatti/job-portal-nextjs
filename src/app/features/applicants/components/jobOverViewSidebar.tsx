function OverviewItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | null | undefined;
}) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="text-sm font-medium text-gray-500 uppercase">{label}</p>
        <p className="text-sm font-semibold text-gray-900 capitalize">
          {value}
        </p>
      </div>
    </div>
  );
}

export default OverviewItem;