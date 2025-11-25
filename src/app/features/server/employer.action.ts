import { db } from "@/config/db";
import { getCurrentUser } from "../auth/server/auth.quires";
import { employers } from "@/drizzle/schema";

const organizationTypeOptions = ["development", "business", "design"] as const;
type OrganizationType = (typeof organizationTypeOptions)[number];
const teamSizeOptions = ["1-5", "6-20", "21-50"] as const;
type TeamSize = (typeof teamSizeOptions)[number];

interface IFormInput {
  name: string;
  description: string;
  yearOfEstablishment: string;
  location: string;
  websiteUrl: string;
  organizationType: OrganizationType;
  teamSize: TeamSize;
}

export const updateEmployerProfileAction = async (data: IFormInput) => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== "employer") {
      return { status: "ERROR", message: "Unauthorized" };
    }
    const {
      name,
      description,
      yearOfEstablishment,
      location,
      websiteUrl,
      organizationType,
      teamSize,
    } = data;

    await db.update(employers).set({
      name,
      description,
      location,
      websiteUrl,
      organizationType,
      teamSize,
      yearOfEstablishment: yearOfEstablishment
        ? parseInt(yearOfEstablishment)
        : null,
    });
  } catch (error) {}
};
