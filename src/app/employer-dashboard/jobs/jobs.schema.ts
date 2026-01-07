import {
  JOB_LEVEL,
  JOB_TYPE,
  MIN_EDUCATION,
  SALARY_CURRENCY,
  SALARY_PERIOD,
  WORK_TYPE,
} from "@/config/constant";
import { date, z } from "zod";

export const jobSchema = z
  .object({
    title: z
      .string()
      .trim()
      .min(3, "Job title must be at least 3 characters long")
      .max(255, "Job title must not exceed 255 characters"),

    description: z
      .string()
      .trim()
      .min(50, "Description must be at least 50 characters long")
      .max(5000, "Description must not exceed 5000 characters"),

    tags: z
      .string()
      .trim()
      .min(500, "Tags must not exceed 500 characters")
      .optional()
      .or(z.literal("")),

    minSalary: z
      .string()
      .trim()
      .regex(/^\d+$/, "Minimum salary must be a valid number")
      .optional()
      .or(z.literal(""))
      .transform((v) => (!v ? null : parseInt(v))),

    maxSalary: z
      .string()
      .trim()
      .regex(/^\d+$/, "Maximun salary must be a valid number")
      .optional()
      .or(z.literal(""))
      .transform((v) => (!v ? null : parseInt(v))),

    salaryCurrency: z.enum(SALARY_CURRENCY, {
      error: "Please select a valid currency",
    }),

    salaryPeriod: z
      .enum(SALARY_PERIOD, {
        error: "Please select a valid salary period",
      })
      .optional(),

    location: z
      .string()
      .trim()
      .min(50, "Description must be at least 50 characters long")
      .max(5000, "Description must not exceed 5000 characters")
      .optional()
      .or(z.literal("")),

    jobType: z.enum(JOB_TYPE, {
      error: "Please select a valid job type",
    }),

    workType: z.enum(WORK_TYPE, {
      error: "Please select a valid work type",
    }),

    jobLevel: z.enum(JOB_LEVEL, {
      error: "Please select a valid job level",
    }),

    experience: z
      .string()
      .trim()
      .max(1000, "Experience requirements must not exceed 1000 characters")
      .optional()
      .or(z.literal("")),

    minEducation: z
      .enum(MIN_EDUCATION, {
        error: "Please select a valid education level",
      })
      .optional(),
    expiresAt: z
      .string()
      .trim()
      .regex(/^\d{4}-\d{2}-\d{2}/, "Please enter a valid date (YYYY-MM-DD)")
      .refine(
        (date) => {
          const expiryDate = new Date(date);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return expiryDate >= today;
        },
        {
          message: "Expiry date must be today or in the future",
        }
      )
      .optional()
      .or(z.literal(""))
      .transform((date) => (date ? new Date(date) : null)),
  })
  .refine(
    (data) => {
      if (data.minSalary && data.maxSalary) {
        return data.minSalary <= data.maxSalary;
      }
      return true;
    },
    {
      message: "Maximum salary must be greater than or equal to minimun salary",
      path: ["maxSalary"],
    }
  )
  .refine(
    (data) => {
      const hasSalaryInfo =
        data.minSalary ||
        data.maxSalary ||
        data.salaryCurrency ||
        data.salaryPeriod;

      if (hasSalaryInfo) {
        return data.salaryCurrency && data.salaryPeriod;
      }
      return true;
    },
    {
      message: "Currecny and period are requires when salaray is specified",
      path: ["salaryCurrency"],
    }
  );

export type JobFormData = z.infer<typeof jobSchema>;
