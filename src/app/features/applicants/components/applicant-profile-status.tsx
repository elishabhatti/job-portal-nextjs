import { Button } from "@/components/ui/button";
import { ArrowRight, UserCircle } from "lucide-react";
import Link from "next/link";

export const ApplicantProfileStatus = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-red-500 px-6 py-4 shadow-sm">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute right-24 -bottom-14 h-28 w-28 rounded-full bg-white/10" />

      <div className="relative flex items-center justify-between gap-6">
        {/* Left */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-400">
            <UserCircle className="h-6 w-6 text-white" />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              Your profile editing is not completed
            </h3>
            <p className="mt-1 max-w-md text-xs text-red-100">
              Complete your profile editing to build your custom resume and get
              better job recommendations.
            </p>
          </div>
        </div>

        {/* Right */}
        <Link href="/dashboard/settings">
          <Button
            variant="secondary"
            className="h-9 whitespace-nowrap rounded-full bg-white px-4 text-sm font-semibold text-red-600 hover:bg-gray-100"
          >
            Edit Profile
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
