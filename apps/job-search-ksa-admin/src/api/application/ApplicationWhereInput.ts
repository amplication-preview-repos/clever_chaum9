import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ApplicationWhereInput = {
  applicationDate?: DateTimeNullableFilter;
  applicationStatus?: "Option1";
  candidate?: CandidateWhereUniqueInput;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
};
