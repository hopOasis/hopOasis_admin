import {
  ArrayField,
	Datagrid,
	Show,
	TabbedShowLayout,
	TextField,
} from "react-admin";

export const OfferShow = () => { 
  return (
	<Show>
		<TabbedShowLayout>
			<TabbedShowLayout.Tab label={"beers"}>
        <ArrayField source="specialOfferBeers">
          <Datagrid>
            <TextField source="id"/>
            <TextField source="beerName" />
            <TextField source="description" />
          </Datagrid>
        </ArrayField>
			</TabbedShowLayout.Tab>
			<TabbedShowLayout.Tab label={"ciders"}>
        <ArrayField source="specialOfferCiders">
          <Datagrid>
            <TextField source="id"/>
            <TextField source="ciderName" />
          </Datagrid>
        </ArrayField>
			</TabbedShowLayout.Tab>
			<TabbedShowLayout.Tab label={"snacks"}>
      <ArrayField source="specialOfferSnacks">
          <Datagrid>
            <TextField source="id"/>
            <TextField source="snackName" />
          </Datagrid>
        </ArrayField>
			</TabbedShowLayout.Tab>
			<TabbedShowLayout.Tab label={"Product bundles"}>
      <ArrayField source="specialOfferProductBundles">
          <Datagrid>
            <TextField source="id"/>
            <TextField source="name" />
          </Datagrid>
        </ArrayField>
			</TabbedShowLayout.Tab>
		</TabbedShowLayout>
	</Show>
)};
