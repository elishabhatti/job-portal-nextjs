import { Button } from "@/components/ui/button";
import { UserCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const ApplicantProfileStatus = () => {
  return (
    <div className="mt-6" style={{ width: "100%", marginTop: "20px" }}>
      {/* Container with forced Red Background */}
      <div
        style={{
          backgroundColor: "#FF3B30",
          borderRadius: "16px",
          padding: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          boxShadow: "0 10px 15px -3px rgba(255, 59, 48, 0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Icon Circle */}
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: "8px",
              borderRadius: "9999px",
              display: "flex",
            }}
          >
            <UserCircle size={40} color="white" />
          </div>

          {/* Text Content */}
          <div style={{ color: "white" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "700",
                margin: 0,
                color: "white",
                lineHeight: "1.2",
              }}
            >
              Your profile editing is not completed.
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.9)",
                fontWeight: "500",
                margin: "4px 0 0 0",
              }}
            >
              Complete your profile editing & build your custom Resume to get
              better job recommendations.
            </p>
          </div>
        </div>

        {/* White Button */}
        <Link href="/dashboard/settings">
          <Button
            style={{ padding: "20px", backgroundColor: "white", color: "red" }}
            className="font-bold rounded-md flex items-center text-lg whitespace-nowrap gap-2"
          >
            Edit Profile <ArrowRight className="ml-2" size={16} />
          </Button>
        </Link>
      </div>
    </div>
  );
};
