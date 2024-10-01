// offers/OfferList.tsx

import {
  Datagrid,
  List,
  TextField,
  BooleanField,
  EditButton,
  ShowButton,
} from "react-admin";

export const OfferList = () => (
  <List className="list-common">
      <Datagrid rowClick="edit" className="list-common">
          <TextField source="id" label="ID" />
          <TextField source="name" label="Offer Name" className="list-common"/>
          <BooleanField source="active" label="Is Active?" className="list-common"/>
          <EditButton />
          <ShowButton className="list-common-edit-button"/>
      </Datagrid>
  </List>
);
