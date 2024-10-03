
import {
    Create,
    SimpleForm,
    TextInput,
    BooleanInput,
    ReferenceArrayInput,
    SelectArrayInput,
} from "react-admin";

export const OfferCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" label="Offer Name" />
            <BooleanInput source="active" label="Is Active?" />

            <ReferenceArrayInput source="specialOfferBeers" reference="beers">
                <SelectArrayInput optionText="beerName" />
            </ReferenceArrayInput>

            <ReferenceArrayInput source="specialOfferCiders" reference="ciders">
                <SelectArrayInput optionText="ciderName" />
            </ReferenceArrayInput>

            <ReferenceArrayInput source="specialOfferSnacks" reference="snacks">
                <SelectArrayInput optionText="snackName" />
            </ReferenceArrayInput>

            <ReferenceArrayInput source="specialOfferProductBundles" reference="productBundles">
                <SelectArrayInput optionText="bundleName" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);
