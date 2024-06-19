import { Candidate as TCandidate } from "../api/candidate/Candidate";

export const CANDIDATE_TITLE_FIELD = "candidateName";

export const CandidateTitle = (record: TCandidate): string => {
  return record.candidateName?.toString() || String(record.id);
};
