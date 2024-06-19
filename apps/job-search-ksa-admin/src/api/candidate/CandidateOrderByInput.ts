import { SortOrder } from "../../util/SortOrder";

export type CandidateOrderByInput = {
  candidateName?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  phoneNumber?: SortOrder;
  skills?: SortOrder;
  updatedAt?: SortOrder;
};
