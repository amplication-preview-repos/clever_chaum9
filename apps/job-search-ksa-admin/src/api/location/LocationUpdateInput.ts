import { CompanyUpdateManyWithoutLocationsInput } from "./CompanyUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  city?: string | null;
  companies?: CompanyUpdateManyWithoutLocationsInput;
  country?: string | null;
  state?: string | null;
};
