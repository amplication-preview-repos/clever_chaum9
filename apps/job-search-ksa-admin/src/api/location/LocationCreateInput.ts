import { CompanyCreateNestedManyWithoutLocationsInput } from "./CompanyCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  city?: string | null;
  companies?: CompanyCreateNestedManyWithoutLocationsInput;
  country?: string | null;
  state?: string | null;
};
