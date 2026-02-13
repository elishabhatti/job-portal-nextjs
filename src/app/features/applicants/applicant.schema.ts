import { z } from "zod";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEOTED_DOCUMENT_TYPES = ["applicantion/pdf"];

const GENDER_OPTIONS = ["male", "female", "other"] as const;
const MARITAL_STATUS_OPTIONS = ["single", "married", "divorced"] as const;

const EDUCATION_OPTIONS = [
  "none",
  "high school",
  "undergraduate",
  "masters",
  "phd",
] as const;

export const applicantSettingsSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 charachters"),
  email: z.email("Invalid email address"),
  phoneNumber: z.string().min(11, "Phone number must be atlest 11 digits"),
  location: z.string().min(2, "Location is required"),
  dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date of birth",
  }),
  nationality: z.string().min(2, "Nationality is required"),
  gender: z.enum(GENDER_OPTIONS, {
    error: () => "Please select a gender",
  }),
  maritalStatus: z.enum(MARITAL_STATUS_OPTIONS, {
    error: () => "Please select a marital status",
  }),
  education: z.enum(EDUCATION_OPTIONS, {
    error: () => "Please select your education level",
  }),
  experience: z.string().min(1, "Experiecne is required"),
  websiteUrl: z.url("Invalid URL").optional().or(z.literal("")),
  biography: z
    .string()
    .max(500, "Bio must be less than 500 characters")
    .optional(),
  resume: z
    .any()
    .refine((files) => files?.length == 1, "Resume is required")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Max file size is 5MB",
    )
    .refine(
      (files) => ACCEOTED_DOCUMENT_TYPES.includes(files?.[0]?.type),
      "Only .pdf format is supported",
    ),
});

export type ApplicantSettingsSchema = z.infer<typeof applicantSettingsSchema>;
