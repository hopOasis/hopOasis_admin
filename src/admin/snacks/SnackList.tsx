import {
  Datagrid,
  EditButton,
  ImageField,
  List,
  NumberField,
  TextField,
} from "react-admin";

export const SnackList = () => (
  <List className="list-common">
    <Datagrid rowClick="show" className="list-common">
      <TextField source="id" className="list-common" />
      <TextField source="snackName" label="Name" className="list-common" />
      <NumberField source="priceLarge" label="Price (Large)" className="list-common" />
      <NumberField source="priceSmall" label="Price (Small)" className="list-common" />
      <NumberField source="weightLarge" label="Weight (Large)" className="list-common" />
      <NumberField source="weightSmall" label="Weight (Small)" className="list-common" />
      <TextField source="description" label="Description" className="list-common" />
      <ImageField source="snackImageName" label="Image" className="list-common-image" />
      <EditButton className="list-common-edit-button" />
    </Datagrid>
  </List>
);
