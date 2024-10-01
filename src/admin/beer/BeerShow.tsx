import {
	ImageField,
	NumberField,
	Show,
	TabbedShowLayout,
	TextField,
} from "react-admin";
import '../StylesAdmin.css';

export const BeerShow = () => (
	<Show className="list-common">
		<TabbedShowLayout className="list-common">
			<TabbedShowLayout.Tab label={"information"} className="list-common">
				<TextField source="id" />
				<TextField source="beerName" label="Name" />
				<TextField source="beerColor" />
			</TabbedShowLayout.Tab>
			<TabbedShowLayout.Tab label={"price and volume"} className="list-common">
				<NumberField source="priceLarge" />
				<NumberField source="priceSmall" />
				<NumberField source="volumeLarge" />
				<NumberField source="volumeSmall" />
			</TabbedShowLayout.Tab>
			<TabbedShowLayout.Tab label={"description"} className="list-common">
				<TextField source="description" />
			</TabbedShowLayout.Tab>
			<TabbedShowLayout.Tab label={"images"} className="list-common">
				<ImageField source="imageName" label="Image"/>
			</TabbedShowLayout.Tab>
		</TabbedShowLayout>
	</Show>
);
