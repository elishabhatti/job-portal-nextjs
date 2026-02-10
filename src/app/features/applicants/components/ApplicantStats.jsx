import { Card, CardContent } from "@/components/ui/card";
import { Bell, Bookmark, Briefcase, Users } from "lucide-react";

export const ApplicantStats = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
      {/* Card 1: Applied Jobs (Blue) */}
      <Card className="bg-blue-50 border-blue-100">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-foreground">589</p>
              <p className="text-sm text-muted-foreground">Applied Jobs</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Briefcase className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Card 1: Favorite Jobs (Orange) */}
      <Card className="bg-orange-50 border-orange-100">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-foreground">238</p>
              <p className="text-sm text-muted-foreground">Favorite jobs</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <Bookmark className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Card 3: Job Alerts (Green) */}
      <Card className="bg-green-600 border-green-100">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-foreground">574</p>
              <p className="text-sm text-muted-foreground">Job Alerts</p>
            </div>
            <div className="p-3 bg-green-500 rounded-lg">
              <Bell className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
