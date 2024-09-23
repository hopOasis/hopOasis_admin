import { useRecordContext, Show, TabbedShowLayout, TextField, NumberField, ImageField } from "react-admin";

export const SnackShow = () => {
  const record = useRecordContext();

  if (!record) return null;

  return (
    <Show>
      <TabbedShowLayout>
        <TabbedShowLayout.Tab label={"Information"}>
          <TextField source="id" />
          <TextField source="snackName" label="Name" />
          <TextField source="description" />
        </TabbedShowLayout.Tab>

        <TabbedShowLayout.Tab label={"Price and Weight"}>
          <NumberField source="priceLarge" label="Price (Large)" />
          <NumberField source="priceSmall" label="Price (Small)" />
          <NumberField source="weightLarge" label="Weight (Large)" />
          <NumberField source="weightSmall" label="Weight (Small)" />
        </TabbedShowLayout.Tab>

        <TabbedShowLayout.Tab label={"Images"}>
          {Array.isArray(record.snackImageName) && record.snackImageName.length > 0 ? (
            <ImageField source="snackImageName" label="Image" />
          ) : (
            <div>No Images</div>
          )}
        </TabbedShowLayout.Tab>

        <TabbedShowLayout.Tab label={"Ratings"}>
          <NumberField source="averageRating" label="Average Rating" />
          <NumberField source="ratingCount" label="Rating Count" />
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
};
