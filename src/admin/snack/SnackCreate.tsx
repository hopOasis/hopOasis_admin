import {
  Create,
  ImageField,
  ImageInput,
  TabbedForm,
  TextInput,
  required,
  NumberInput,
} from "react-admin";

export const SnackCreate = () => (
  <Create>
      <TabbedForm>
          <TabbedForm.Tab label={"Information"}>
              <TextInput source="snackName" label="Name" validate={[required()]} />
              <TextInput source="description" validate={[required()]} />
          </TabbedForm.Tab>
          <TabbedForm.Tab label={"Price"}>
              <NumberInput source="price" validate={[required()]} />
          </TabbedForm.Tab>
          <TabbedForm.Tab label={"Images"}>
              <ImageInput
                  source="image"
                  accept="image/*" 
                  validate={[required()]}
              >
                  <ImageField source="src" title="title" />
              </ImageInput>
          </TabbedForm.Tab>
      </TabbedForm>
  </Create>
);
