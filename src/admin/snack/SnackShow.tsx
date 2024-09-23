import {
	ImageField,
	NumberField,
	Show,
	TabbedShowLayout,
	TextField,
} from "react-admin";

export const SnackShow = () => (
	<Show>
		<TabbedShowLayout>
			{/* Вкладка с информацией о снеке */}
			<TabbedShowLayout.Tab label={"information"}>
				<TextField source="id" />
				<TextField source="snackName" label="Name" />
				<TextField source="snackType" label="Type" />
			</TabbedShowLayout.Tab>
			
			{/* Вкладка с ценой и весом */}
			<TabbedShowLayout.Tab label={"price and weight"}>
				<NumberField source="priceLarge" label="Price (Large)" />
				<NumberField source="priceSmall" label="Price (Small)" />
				<NumberField source="weightLarge" label="Weight (Large)" />
				<NumberField source="weightSmall" label="Weight (Small)" />
			</TabbedShowLayout.Tab>

			{/* Вкладка с описанием */}
			<TabbedShowLayout.Tab label={"description"}>
				<TextField source="description" label="Description" />
			</TabbedShowLayout.Tab>

			{/* Вкладка с изображениями */}
			<TabbedShowLayout.Tab label={"images"}>
				<ImageField source="snackImageName" label="Image" />
			</TabbedShowLayout.Tab>
		</TabbedShowLayout>
	</Show>
);
