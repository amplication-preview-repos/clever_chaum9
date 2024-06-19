import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COMPANY_TITLE_FIELD } from "./CompanyTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const CompanyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="companyName" source="companyName" />
        <TextField label="companySize" source="companySize" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="industry" source="industry" />
        <ReferenceField
          label="location"
          source="location.id"
          reference="Location"
        >
          <TextField source={LOCATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="officeLocation" source="officeLocation" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Job" target="companyId" label="Jobs">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="jobDescription" source="jobDescription" />
            <TextField label="jobTitle" source="jobTitle" />
            <TextField label="jobType" source="jobType" />
            <TextField label="salary" source="salary" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
