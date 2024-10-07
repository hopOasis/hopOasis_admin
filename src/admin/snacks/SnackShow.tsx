import {
  ImageField,
  NumberField,
  Show,
  TabbedShowLayout,
  TextField,
} from "react-admin";

export const SnackShow = () => (
  <Show className="list-common">
    <TabbedShowLayout className="list-common">
      <TabbedShowLayout.Tab label={"Information"} className="list-common">
        <TextField source="id" className="list-common" />
        <TextField source="snackName" label="Name" className="list-common" />
        <TextField source="snackType" label="Type" className="list-common" />
      </TabbedShowLayout.Tab>

      <TabbedShowLayout.Tab label={"Price and Weight"} className="list-common">
        <NumberField source="priceLarge" label="Price (Large)" className="list-common" />
        <NumberField source="priceSmall" label="Price (Small)" className="list-common" />
        <NumberField source="weightLarge" label="Weight (Large)" className="list-common" />
        <NumberField source="weightSmall" label="Weight (Small)" className="list-common" />
      </TabbedShowLayout.Tab>

      <TabbedShowLayout.Tab label={"Description"} className="list-common">
        <TextField source="description" label="Description" className="list-common" />
      </TabbedShowLayout.Tab>

      <TabbedShowLayout.Tab label={"Images"} className="list-common">
        <ImageField source="snackImageName" label="Image" className="list-common-image" />
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);
