// offers/OfferShow.tsx

import {
  Show,
  SimpleShowLayout,
  TextField,
  BooleanField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
} from "react-admin";

export const OfferShow = () => (
  <Show className="list-common">
      <SimpleShowLayout className="list-common">
          <TextField source="id" label="ID" />
          <TextField source="name" label="Offer Name" />
          <BooleanField source="active" label="Is Active?" />
          
          <ReferenceArrayField
              label="Beers"
              reference="beers"
              source="specialOfferBeers"
          >
              <SingleFieldList>
                  <ChipField source="beerName" />
              </SingleFieldList>
          </ReferenceArrayField>
          
          <ReferenceArrayField
              label="Ciders"
              reference="ciders"
              source="specialOfferCiders"
          >
              <SingleFieldList>
                  <ChipField source="ciderName" />
              </SingleFieldList>
          </ReferenceArrayField>
          
          <ReferenceArrayField
              label="Snacks"
              reference="snacks"
              source="specialOfferSnacks"
          >
              <SingleFieldList>
                  <ChipField source="snackName" />
              </SingleFieldList>
          </ReferenceArrayField>
          
          <ReferenceArrayField
              label="Product Bundles"
              reference="productBundles" 
              source="specialOfferProductBundles"
          >
              <SingleFieldList>
                  <ChipField source="bundleName" />
              </SingleFieldList>
          </ReferenceArrayField>
      </SimpleShowLayout>
  </Show>
);
