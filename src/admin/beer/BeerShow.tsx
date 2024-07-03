import {
	ImageField,
	NumberField,
	Show,
	TabbedShowLayout,
	TextField,
} from "react-admin";

export const BeerShow = () => (
	<Show>
		<TabbedShowLayout>
			<TabbedShowLayout.Tab label={"information"}>
				<TextField source="id" />
				<TextField source="beerName" label="Name" />
				<TextField source="beerColor" />
			</TabbedShowLayout.Tab>
			<TabbedShowLayout.Tab label={"price and volume"}>
				<NumberField source="priceLarge" />
				<NumberField source="priceSmall" />
				<NumberField source="volumeLarge" />
				<NumberField source="volumeSmall" />
			</TabbedShowLayout.Tab>
			<TabbedShowLayout.Tab label={"description"}>
				<TextField source="description" />
			</TabbedShowLayout.Tab>
			<TabbedShowLayout.Tab label={"images"}>
				<ImageField source="imageName" label="Image" />
			</TabbedShowLayout.Tab>
		</TabbedShowLayout>
	</Show>
);
