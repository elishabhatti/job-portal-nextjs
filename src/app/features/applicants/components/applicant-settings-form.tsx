import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Globe,
  Loader,
  Mail,
  MapPin,
  Phone,
  UploadCloud,
  User,
} from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import {
  ApplicantSettingsSchema,
  applicantSettingsSchema,
} from "../applicant.schema";
import { zodResolver } from "@hookform/resolvers/zod";

type ApplicantProfileData = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  dateOfBirth: string;
  nationality: string;
  gender: string;
  maritalStatus: string;
  education: string;
  experience: string;
  websiteUrl: string;
  biography: string;
};

const ApplicantSettingsForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isDirty, isSubmitting },
  } = useForm<ApplicantSettingsSchema>({
    resolver: zodResolver(applicantSettingsSchema),
    defaultValues: {
      email: "example@gmail.com",
    },
  });

  const onSubmit = async (data: ApplicantSettingsSchema) => {
    console.log("Saving Date:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Profile Updated (Check Console)");
  };

  return (
    <div className="max-w-6xl mx-autow">
      <form className="flex gap-6 flex-col" onSubmit={handleSubmit(onSubmit)}>
        {/* ================= BASIC INFORMATION ================= */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>
              This is how employers will see you.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex items-start gap-8">
              {/* Photo */}
              <div className="pr-10 flex flex-col items-center gap-3">
                <div className="h-24 w-24 rounded-full bg-gray-50 flex items-center justify-center border-2 border-dashed border-gray-200 hover:border-gray-400 cursor-pointer transition">
                  <UploadCloud className="h-6 w-6 text-muted-foreground" />
                </div>

                <div className="text-xs text-muted-foreground text-center max-w-[160px]">
                  <p>Max file size is 5MB</p>
                  <p>Minimum dimension: 150x150</p>
                  <p>JPG / PNG</p>
                </div>
              </div>

              {/* Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      {...register("fullName")}
                      placeholder="John Doe"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      {...register("email")}
                      placeholder="john@example.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      {...register("phone")}
                      placeholder="+92 123 456789"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      {...register("location")}
                      placeholder="Karachi, Islamabad, Lahore"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ================= PERSONAL DETAILS ================= */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Personal Details</CardTitle>
          </CardHeader>

          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Date of Birth</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  {...register("dateOfBirth")}
                  type="date"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Nationality</Label>
              <Input {...register("nationality")} placeholder="Pakistani" />
            </div>

            <div className="space-y-2">
              <Label>Gender</Label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="space-y-2">
              <Label>Marital Status</Label>
              <Controller
                name="maritalStatus"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married">Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* ================= PROFESSIONAL PROFILE ================= */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Professional Profile</CardTitle>
            <CardDescription>
              Highlight your skills and experience
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Highest Education</Label>
                <Controller
                  name="education"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Education" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="high_school">High School</SelectItem>
                        <SelectItem value="bachelors">Bachelors</SelectItem>
                        <SelectItem value="masters">Masters</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="space-y-2">
                <Label>Portfolio Website</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    {...register("websiteUrl")}
                    placeholder="https://..."
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Biography</Label>
              <Textarea
                {...register("biography")}
                className="min-h-[120px]"
                placeholder="Tell us about yourself..."
              />
              <p className="text-xs text-right text-muted-foreground">
                Max 500 characters
              </p>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label className="text-base">Resume / CV</Label>
              <div className="border border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition cursor-pointer">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-full mb-3">
                  <UploadCloud className="h-6 w-6" />
                </div>
                <h4 className="font-medium text-sm">
                  Click to upload or drag and drop
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  PDF (MAX 2MB)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ================= FOOTER ================= */}
        <div className="flex items-center gap-4">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader className="w-4 h-4 mr-2 animate-spin" />}
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>

          {!isDirty && (
            <p className="text-sm text-muted-foreground">No changes to save</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ApplicantSettingsForm;
