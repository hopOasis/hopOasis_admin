import {
	ImageField,
	NumberField,
	Show,
	TabbedShowLayout,
	TextField,
} from "react-admin";

export const SnackShow = () => (
	<Show className="list-common">
		<TabbedShowLayout className="list-common">
			<TabbedShowLayout.Tab label={"information"} className="list-common">
				<TextField source="id" />
				<TextField source="snackName" label="Name" />
				<TextField source="snackType" label="Type" />
			</TabbedShowLayout.Tab>
			<TabbedShowLayout.Tab label={"price and weight"} className="list-common">
				<NumberField source="priceLarge" label="Price (Large)" />
				<NumberField source="priceSmall" label="Price (Small)" />
				<NumberField source="weightLarge" label="Weight (Large)" />
				<NumberField source="weightSmall" label="Weight (Small)" />
			</TabbedShowLayout.Tab>
			<TabbedShowLayout.Tab label={"description"}className="list-common">
				<TextField source="description" label="Description" />
			</TabbedShowLayout.Tab>

			{/* Вкладка с изображениями */}
			<TabbedShowLayout.Tab label={"images"}className="list-common">
				<ImageField source="snackImageName" label="Image" />
			</TabbedShowLayout.Tab>
		</TabbedShowLayout>
	</Show>
);
