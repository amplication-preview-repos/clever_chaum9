import { Candidate } from "../candidate/Candidate";
import { Job } from "../job/Job";

export type Application = {
  applicationDate: Date | null;
  applicationStatus?: "Option1" | null;
  candidate?: Candidate | null;
  createdAt: Date;
  id: string;
  job?: Job | null;
  updatedAt: Date;
};
