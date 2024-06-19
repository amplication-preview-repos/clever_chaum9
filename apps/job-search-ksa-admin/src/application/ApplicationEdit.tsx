import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { CandidateTitle } from "../candidate/CandidateTitle";
import { JobTitle } from "../job/JobTitle";

export const ApplicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
