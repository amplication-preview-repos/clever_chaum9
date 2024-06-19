import { JobUpdateManyWithoutCompaniesInput } from "./JobUpdateManyWithoutCompaniesInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type CompanyUpdateInput = {
  companyName?: string | null;
  companySize?: number | null;
  industry?: string | null;
  jobs?: JobUpdateManyWithoutCompaniesInput;
  location?: LocationWhereUniqueInput | null;
  officeLocation?: string | null;
};
