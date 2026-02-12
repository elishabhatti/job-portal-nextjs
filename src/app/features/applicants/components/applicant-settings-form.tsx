import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Mail, MapPin, Phone, UploadCloud, User } from "lucide-react";
import { useForm } from "react-hook-form";

const ApplicantSettingsForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isDirty, isSubmitting },
  } = useForm();
  //   <ApplicantProfileData>;

  const onSubmit = async (data: any) => {
    console.log("Saving Date:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Profile Updated (Check Console)");
  };
  return (
    <div className="max-w-5xl mx-auto py-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Section 1: Basic Info */}
        <Card>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>This is how employers will see you.</CardDescription>
          <CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6 mb-6">
                <div className="h-24 w-24 rounded-full bg-gray-50 flex items-center justify-center border-2 border-dashed border-gray-200 hover:border-gray-400 cursor-pointer transition">
                  <div className="text-center space-y-1">
                    <UploadCloud className="h-6 w-6 mx-auto text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground block">
                      Upload Photo
                    </span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Max file size is 5MB. Minimum dimension: 150x150</p>
                  <p>Suitable files are .jgp and .png</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      {...register("fullName")}
                      placeholder="John Doe"
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      {...register("email")}
                      placeholder="john@example.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      {...register("phone")}
                      placeholder="+92 123 456789"
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      {...register("location")}
                      placeholder="Karachi, Islamabad, Lahore"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </form>
    </div>
  );
};

export default ApplicantSettingsForm;
