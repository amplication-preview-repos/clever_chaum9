import { ApplicationCreateNestedManyWithoutCandidatesInput } from "./ApplicationCreateNestedManyWithoutCandidatesInput";

export type CandidateCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutCandidatesInput;
  candidateName?: string | null;
  email?: string | null;
  phoneNumber?: number | null;
  skills?: Array<"Option1">;
};
