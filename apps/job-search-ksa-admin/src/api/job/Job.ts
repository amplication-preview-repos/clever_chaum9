import { Application } from "../application/Application";
import { Company } from "../company/Company";

export type Job = {
  applications?: Array<Application>;
  company?: Company | null;
  createdAt: Date;
  id: string;
  jobDescription: string | null;
  jobTitle: string | null;
  jobType?: "Option1" | null;
  salary: number | null;
  updatedAt: Date;
};
