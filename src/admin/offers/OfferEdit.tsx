import {
    Edit,
    SimpleForm,
    TextInput,
    BooleanInput,
    ReferenceArrayInput,
    SelectArrayInput,
    required,
    EditProps,
  } from "react-admin";
  
  export const OfferEdit = (props: EditProps) => (
    <Edit {...props}>
      <SimpleForm className="list-common">
        <TextInput
          source="name"
          label="Offer Name"
          validate={[required()]}
          className="list-common"
        />
        <BooleanInput
          source="active"
          label="Is Active?"
          className="list-common"
        />
        <ReferenceArrayInput
          source="specialOfferBeers"
          reference="beers"
          className="list-common"
        >
          <SelectArrayInput optionText="beerName" className="list-common" />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="specialOfferCiders"
          reference="ciders"
          className="list-common"
        >
          <SelectArrayInput optionText="ciderName" className="list-common" />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="specialOfferSnacks"
          reference="snacks"
          className="list-common"
        >
          <SelectArrayInput optionText="snackName" className="list-common" />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="specialOfferProductBundles"
          reference="productBundles"
          className="list-common"
        >
          <SelectArrayInput optionText="name" className="list-common" />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
  