import {
  Create,
  ImageField,
  ImageInput,
  TabbedForm,
  TextInput,
  required,
} from "react-admin";

export const BeerCreate = () => (
  <Create>
    <TabbedForm>
      <TabbedForm.Tab label={"information"}>
        <TextInput source="beerName" label="Name" validate={[required()]} />
        <TextInput source="beerColor" validate={[required()]} />
      </TabbedForm.Tab>
      <TabbedForm.Tab label={"price and volume"}>
        <TextInput source="priceSmall" validate={[required()]} />
        <TextInput source="priceLarge" validate={[required()]} />
        <TextInput source="volumeLarge" validate={[required()]} />
        <TextInput source="volumeSmall" validate={[required()]} />
      </TabbedForm.Tab>
      <TabbedForm.Tab label={"description"}>
        <TextInput
          source="description"
          variant="outlined"
          multiline
          fullWidth
          validate={[required()]}
        />
      </TabbedForm.Tab>
      {/* <TabbedForm.Tab label={"images"}>
        <ImageInput
          source="image"
          accept={[".png", ".jpg"]}
          validate={[required()]}
        >
          <ImageField source="src" title="title" />
        </ImageInput>
      </TabbedForm.Tab> */}
    </TabbedForm>
  </Create>
);
