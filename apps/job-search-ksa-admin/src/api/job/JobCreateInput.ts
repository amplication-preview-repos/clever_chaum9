import { ApplicationCreateNestedManyWithoutJobsInput } from "./ApplicationCreateNestedManyWithoutJobsInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type JobCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutJobsInput;
  company?: CompanyWhereUniqueInput | null;
  jobDescription?: string | null;
  jobTitle?: string | null;
  jobType?: "Option1" | null;
  salary?: number | null;
};
