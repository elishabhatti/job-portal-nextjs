import { Card, CardContent } from "@/components/ui/card";
import { Bell, Bookmark, Briefcase } from "lucide-react";

export const ApplicantStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1: Applied Jobs (Blue) */}
      <Card className="bg-blue-50 border-blue-100 shadow-sm">
        <CardContent className="p-6 flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900">589</p>
            <p className="text-sm font-medium text-gray-500">Applied Jobs</p>
          </div>
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <Briefcase className="h-6 w-6 text-blue-600" />
          </div>
        </CardContent>
      </Card>

      {/* Card 1: Favorite Jobs (Orange) */}
      <Card className="bg-orange-50 border-orange-100 shadow-sm">
        <CardContent className="p-6 flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900">589</p>
            <p className="text-sm font-medium text-gray-500">Applied Jobs</p>
          </div>
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <Bookmark className="h-6 w-6 text-orange-600" />
          </div>
        </CardContent>
      </Card>

      {/* Card 3: Job Alerts (Green) */}
      <Card
        style={{ backgroundColor: "#f0fdf4", borderColor: "#dcfce7" }}
        className="border shadow-sm"
      >
        <CardContent className="p-6 flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900">589</p>
            <p className="text-sm font-medium text-gray-500">Job Alerts</p>
          </div>
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <Bell className="h-6 w-6 text-[#16a34a]" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
