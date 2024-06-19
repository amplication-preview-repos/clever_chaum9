import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { CandidateTitle } from "../candidate/CandidateTitle";
import { JobTitle } from "../job/JobTitle";

export const ApplicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="applicationDate" source="applicationDate" />
        <SelectInput
          source="applicationStatus"
          label="applicationStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="candidate.id"
          reference="Candidate"
          label="Candidate"
        >
          <SelectInput optionText={CandidateTitle} />
        </ReferenceInput>
        <ReferenceInput source="job.id" reference="Job" label="job">
          <SelectInput optionText={JobTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
