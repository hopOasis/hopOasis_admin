import {
	Datagrid,
	EditButton,
	ImageField,
	List,
	NumberField,
	TextField,
} from "react-admin";

export const CiderList = () => (
	<List>
		<Datagrid rowClick={"show"}>
			<TextField source="id" />
			<TextField source="ciderName" label="Name" textAlign={"center"} />
			<NumberField source="priceLarge" />
			<NumberField source="priceSmall" />
			<NumberField source="volumeLarge" />
			<NumberField source="volumeSmall" />
			<TextField source="description" overflow={"hidden"} />
			{/* <TextField source="ciderColor" /> */}
			<ImageField source="ciderImageName" label="Image" textAlign="center" />
			<EditButton />
		</Datagrid>
	</List>
);
