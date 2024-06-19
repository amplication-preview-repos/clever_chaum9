import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { JobTitle } from "../job/JobTitle";
import { LocationTitle } from "../location/LocationTitle";

export const CompanyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="companyName" source="companyName" />
        <NumberInput step={1} label="companySize" source="companySize" />
        <TextInput label="industry" source="industry" />
        <ReferenceArrayInput
          source="jobs"
          reference="Job"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <TextInput label="officeLocation" source="officeLocation" />
      </SimpleForm>
    </Create>
  );
};
