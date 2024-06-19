import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type LocationWhereInput = {
  city?: StringNullableFilter;
  companies?: CompanyListRelationFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  state?: StringNullableFilter;
};
