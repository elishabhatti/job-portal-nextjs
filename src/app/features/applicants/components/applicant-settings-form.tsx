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

        {/* SECTION 2: Personal Details */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date of Birth */}
            <div className="space-y-2">
              <Label>Date of Birth</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  {...register("dateOfBirth")}
                  type="date"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Nationaly */}
            <div className="space-y-2">
              <Label>Nationality</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  {...register("dateOfBirth")}
                  type="date"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Gender */}
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

            {/* Marital Status */}
            <div className="space-y-2">
              <Label>Martial Status</Label>
              <Controller
                name="maritalStatus"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Single</SelectItem>
                      <SelectItem value="female">Married</SelectItem>
                      <SelectItem value="other">Divorced</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* SECTION 3: Professional Profile */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Profile</CardTitle>
            <CardDescription>
              Highlight your skills and experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Highest Education */}
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

              {/* Portfolio Website */}
              <div className="space-y-2">
                <Label>Portfolio Website</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    {...register("websiteUrl")}
                    placeholder="https://..."
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Biography */}
              <div className="space-y-2">
                <Label>Biography</Label>
                <Textarea
                  {...register("biography")}
                  className="min-h-40"
                  placeholder="Tell us about yourself..."
                />
                <p className="text-[10px] text-right text-muted-foreground">
                  Max 500 characters
                </p>
              </div>

              <Separator />

              {/* Resume Upload (Visual Only) */}
              <div className="space-y-4">
                <Label className="text-base">Resume / CV</Label>
                <div className="border border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray  transition cursor-pointer">
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
            </div>
          </CardContent>
        </Card>

        {/* Footer Actions */}
        <div className="flex items-center gap-4">
          <Button type="submit" disabled={isSubmitting} className="min-w-37.5">
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
