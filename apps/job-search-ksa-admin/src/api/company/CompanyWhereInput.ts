import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type CompanyWhereInput = {
  companyName?: StringNullableFilter;
  companySize?: IntNullableFilter;
  id?: StringFilter;
  industry?: StringNullableFilter;
  jobs?: JobListRelationFilter;
  location?: LocationWhereUniqueInput;
  officeLocation?: StringNullableFilter;
};
