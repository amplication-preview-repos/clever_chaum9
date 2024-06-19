import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ApplicationCreateInput = {
  applicationDate?: Date | null;
  applicationStatus?: "Option1" | null;
  candidate?: CandidateWhereUniqueInput | null;
  job?: JobWhereUniqueInput | null;
};