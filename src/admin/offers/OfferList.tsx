import {
  Datagrid,
  EditButton,
  List,
  TextField,
  BooleanField,
} from "react-admin";

export const OfferList = () => (
  <List className="list-common">
    <Datagrid rowClick="edit" className="list-common">
      <TextField source="id" className="list-common" />
      <TextField source="name" label="Offer Name" className="list-common" />
      <BooleanField source="active" label="Is Active?" className="list-common" />
      <EditButton className="list-common-edit-button" />
    </Datagrid>
  </List>
);
