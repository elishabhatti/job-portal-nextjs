const organizationTypeOptions = ["development", "business", "design"] as const;
type OrganizationType = (typeof organizationTypeOptions)[number];
const teamSizeOptions = ["1-5", "6-20", "21-50"] as const;
type TeamSize = (typeof teamSizeOptions)[number];

interface IFormInput {
  username: string;
  email: string;
  name: string;
  description: string;
  yearOfEstablishment: string;
  location: string;
  websiteUrl: string;
  organizationType: OrganizationType;
  teamSize: TeamSize;
}

export const updateEmployerProfileAction = (data: IFormInput) => {};
