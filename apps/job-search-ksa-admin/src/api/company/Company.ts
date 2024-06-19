import { Job } from "../job/Job";
import { Location } from "../location/Location";

export type Company = {
  companyName: string | null;
  companySize: number | null;
  createdAt: Date;
  id: string;
  industry: string | null;
  jobs?: Array<Job>;
  location?: Location | null;
  officeLocation: string | null;
  updatedAt: Date;
};
