import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CandidateWhereInput = {
  applications?: ApplicationListRelationFilter;
  candidateName?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  phoneNumber?: IntNullableFilter;
};
