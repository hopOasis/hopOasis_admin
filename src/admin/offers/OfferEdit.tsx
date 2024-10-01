import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

export const OfferEdit = () => (
  <Edit>
      <SimpleForm>
          <TextInput source="name" label="Offer Name" />
          <BooleanInput source="active" label="Is Active?" />

          {/* Поля для работы с массивами продуктов */}
          <ArrayInput source="specialOfferBeers">
              <SimpleFormIterator>
                  <TextInput source="beerName" label="Beer Name" />
              </SimpleFormIterator>
          </ArrayInput>

          <ArrayInput source="specialOfferCiders">
              <SimpleFormIterator>
                  <TextInput source="ciderName" label="Cider Name" />
              </SimpleFormIterator>
          </ArrayInput>

          <ArrayInput source="specialOfferSnacks">
              <SimpleFormIterator>
                  <TextInput source="snackName" label="Snack Name" />
              </SimpleFormIterator>
          </ArrayInput>
      </SimpleForm>
  </Edit>
);
