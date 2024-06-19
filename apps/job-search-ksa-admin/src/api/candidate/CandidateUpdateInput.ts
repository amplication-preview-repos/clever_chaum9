import { ApplicationUpdateManyWithoutCandidatesInput } from "./ApplicationUpdateManyWithoutCandidatesInput";

export type CandidateUpdateInput = {
  applications?: ApplicationUpdateManyWithoutCandidatesInput;
  candidateName?: string | null;
  email?: string | null;
  phoneNumber?: number | null;
  skills?: Array<"Option1">;
};
