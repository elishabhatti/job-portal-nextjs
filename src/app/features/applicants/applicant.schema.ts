import { z } from "zod";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEOTED_DOCUMENT_TYPES = ["applicantion/pdf"];

const GENDER_OPTIONS = ["male", "female", "other"] as const;
const MARTIAL_STATUS_OPTIONS = ["single", "married", "divorced"] as const;

const EDUCATION_OPTIONS = [
  "none",
  "high school",
  "undergraduate",
  "masters",
  "phd",
] as const;

