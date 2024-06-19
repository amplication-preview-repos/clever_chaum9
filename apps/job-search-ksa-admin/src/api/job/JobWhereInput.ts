import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type JobWhereInput = {
  applications?: ApplicationListRelationFilter;
  company?: CompanyWhereUniqueInput;
  id?: StringFilter;
  jobDescription?: StringNullableFilter;
  jobTitle?: StringNullableFilter;
  jobType?: "Option1";
  salary?: FloatNullableFilter;
};
