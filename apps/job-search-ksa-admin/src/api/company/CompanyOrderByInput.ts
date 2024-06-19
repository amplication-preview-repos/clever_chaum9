import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  companyName?: SortOrder;
  companySize?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  industry?: SortOrder;
  locationId?: SortOrder;
  officeLocation?: SortOrder;
  updatedAt?: SortOrder;
};
