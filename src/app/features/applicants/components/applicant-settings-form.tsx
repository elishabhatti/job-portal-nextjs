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
  Flag,
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
  EDUCATION_OPTIONS,
  GENDER_OPTIONS,
  MARITAL_STATUS_OPTIONS,
} from "../applicant.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Tiptap from "@/components/text-editor";

const ApplicantSettingsForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isDirty, isSubmitting, errors },
  } = useForm<ApplicantSettingsSchema>({
    resolver: zodResolver(applicantSettingsSchema),
  });

  const onSubmit = async (data: ApplicantSettingsSchema) => {
    console.log("Saving Date:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Profile Updated (Check Console)");
  };

  return (
    <div className="max-w-5xl mx-auto">
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

                <div className="text-xs text-muted-foreground text-center max-w-40">
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
                      {...register("name")}
                      placeholder="John Doe"
                      className={`pl-10 ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-sm text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      {...register("email")}
                      placeholder="john@example.com"
                      className={`pl-10 ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      {...register("phoneNumber")}
                      placeholder="+92 123 456789"
                      className={`pl-10 ${errors.phoneNumber ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-sm text-destructive">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      {...register("location")}
                      placeholder="Karachi, Islamabad, Lahore"
                      className={`pl-10 ${errors.location ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    />
                  </div>
                  {errors.location && (
                    <p className="text-sm text-destructive">
                      {errors.location.message}
                    </p>
                  )}
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
                  className={`pl-10 ${errors.dateOfBirth ? "border-destructive focus-visible:ring-destructive" : ""}`}
                />
              </div>
              {errors.dateOfBirth && (
                <p className="text-sm text-destructive">
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Nationality</Label>
              <div className="relative">
                <Flag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  {...register("nationality")}
                  placeholder="Pakistani"
                  className={`pl-10 ${errors.nationality ? "border-destructive focus-visible:ring-destructive" : ""}`}
                />
              </div>
              {errors.nationality && (
                <p className="text-sm text-destructive">
                  {errors.nationality.message}
                </p>
              )}
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
                      {GENDER_OPTIONS.map((val, idx) => (
                        <SelectItem key={idx} value={val}>
                          {val}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.gender && (
                <p className="text-sm text-destructive">
                  {errors.gender.message}
                </p>
              )}
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
                      {MARITAL_STATUS_OPTIONS.map((val, idx) => (
                        <SelectItem key={idx} value={val}>
                          {val}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.maritalStatus && (
                <p className="text-sm text-destructive">
                  {errors.maritalStatus.message}
                </p>
              )}
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
                        {EDUCATION_OPTIONS.map((val, idx) => (
                          <SelectItem key={idx} value={val}>
                            {val}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.education && (
                  <p className="text-sm text-destructive">
                    {errors.education.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Portfolio Website</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    {...register("websiteUrl")}
                    placeholder="https://..."
                    className={`pl-10 ${errors.websiteUrl ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  />
                  {errors.websiteUrl && (
                    <p className="text-sm text-destructive">
                      {errors.websiteUrl.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* <div className="space-y-2">
              <Label>Biography</Label>
              <Textarea
                {...register("biography")}
                className={`${errors.biography ? "border-destructive focus-visible:ring-destructive" : ""}`}
                placeholder="Tell us about yourself..."
              />
              <p className="text-xs text-right text-muted-foreground">
                Max 500 characters
              </p>
            </div> */}

            <div className="space-y-2">
              <Controller
                name="biography"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="space-y-2">
                    <Label>Biography *</Label>
                    <Tiptap content={field.value} onChange={field.onChange} />

                    {fieldState.error && (
                      <p className="text-sm text-destructive">
                        {fieldState.error.message}
                      </p>
                    )}
                  </div>
                )}
              />
              {errors.biography && (
                <p className="text-sm text-destructive">
                  {errors.biography.message}
                </p>
              )}
            </div>

            <Separator />

            <div className="space-y-4">
              <Label className="text-base">Resume / CV</Label>
              <input
                type="file"
                id="resume-upload"
                className="hidden"
                accept=".pdf"
                {...register("resume")}
              />

              <label
                htmlFor="resume-upload"
                className="border border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition cursor-pointer"
              >
                <div className="p-3 bg-blue-50 text-blue-600 rounded-full mb-3">
                  <UploadCloud className="h-6 w-6" />
                </div>
                <h4 className="font-medium text-sm">
                  Click to upload or drag and drop
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  PDF (MAX 2MB)
                </p>
              </label>
            </div>
            {errors.resume && (
              <p className="text-sm text-destructive">
                {errors.resume.message as string}
              </p>
            )}
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
