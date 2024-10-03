import {
	ImageField,
	NumberField,
	Show,
	TabbedShowLayout,
	TextField,
} from "react-admin";

export const CiderShow = () => (
	<Show className="list-common">
		<TabbedShowLayout>
			<TabbedShowLayout.Tab label={"information"} className="list-common">
				<TextField source="id" />
				<TextField source="ciderName" label="Name" />
				{/* <TextField source="ciderColor" /> */}
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
				<ImageField source="ciderImageName" label="Image" />
			</TabbedShowLayout.Tab>
		</TabbedShowLayout>
	</Show>
);
