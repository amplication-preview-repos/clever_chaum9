import { JobCreateNestedManyWithoutCompaniesInput } from "./JobCreateNestedManyWithoutCompaniesInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type CompanyCreateInput = {
  companyName?: string | null;
  companySize?: number | null;
  industry?: string | null;
  jobs?: JobCreateNestedManyWithoutCompaniesInput;
  location?: LocationWhereUniqueInput | null;
  officeLocation?: string | null;
};
