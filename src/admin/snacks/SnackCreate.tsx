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
        <TabbedForm.Tab label={"Information"} className="list-common">
          <TextInput
            source="snackName"
            label="Name"
            validate={[required()]}
            className="list-common"
          />
          <TextInput
            source="description"
            label="Description"
            multiline
            fullWidth
            validate={[required()]}
            className="list-common"
          />
        </TabbedForm.Tab>
  
        <TabbedForm.Tab label={"Price and Weight"} className="list-common">
          <NumberInput
            source="priceLarge"
            label="Price (Large)"
            validate={[required()]}
            className="list-common"
          />
          <NumberInput
            source="priceSmall"
            label="Price (Small)"
            validate={[required()]}
            className="list-common"
          />
          <NumberInput
            source="weightLarge"
            label="Weight (Large)"
            validate={[required()]}
            className="list-common"
          />
          <NumberInput
            source="weightSmall"
            label="Weight (Small)"
            validate={[required()]}
            className="list-common"
          />
        </TabbedForm.Tab>
  
        <TabbedForm.Tab label={"Images"} className="list-common">
          <ImageInput
            source="image"
            accept="image/*"
            validate={[required()]}
            className="list-common-image"
          >
            <ImageField source="src" title="title" />
          </ImageInput>
        </TabbedForm.Tab>
      </TabbedForm>
    </Create>
  );
  