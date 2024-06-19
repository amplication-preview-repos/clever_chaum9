import { Application } from "../application/Application";

export type Candidate = {
  applications?: Array<Application>;
  candidateName: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  phoneNumber: number | null;
  skills?: Array<"Option1">;
  updatedAt: Date;
};
