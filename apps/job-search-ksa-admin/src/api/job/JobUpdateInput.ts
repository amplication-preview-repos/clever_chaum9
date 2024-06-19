import { ApplicationUpdateManyWithoutJobsInput } from "./ApplicationUpdateManyWithoutJobsInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type JobUpdateInput = {
  applications?: ApplicationUpdateManyWithoutJobsInput;
  company?: CompanyWhereUniqueInput | null;
  jobDescription?: string | null;
  jobTitle?: string | null;
  jobType?: "Option1" | null;
  salary?: number | null;
};
