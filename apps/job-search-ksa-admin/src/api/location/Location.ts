import { Company } from "../company/Company";

export type Location = {
  city: string | null;
  companies?: Array<Company>;
  country: string | null;
  createdAt: Date;
  id: string;
  state: string | null;
  updatedAt: Date;
};
