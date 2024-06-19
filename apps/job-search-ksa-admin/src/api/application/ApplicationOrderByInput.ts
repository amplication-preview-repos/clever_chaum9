import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  applicationDate?: SortOrder;
  applicationStatus?: SortOrder;
  candidateId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  updatedAt?: SortOrder;
};
