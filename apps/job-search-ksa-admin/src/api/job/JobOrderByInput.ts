import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jobDescription?: SortOrder;
  jobTitle?: SortOrder;
  jobType?: SortOrder;
  salary?: SortOrder;
  updatedAt?: SortOrder;
};
