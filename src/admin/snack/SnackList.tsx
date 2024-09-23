import {
	Datagrid,
	EditButton,
	ImageField,
	List,
	NumberField,
	TextField,
} from "react-admin";

export const SnackList = () => (
	<List>
		<Datagrid rowClick={"show"}>
			<TextField source="id" />
			<TextField source="snackName" label="Name" textAlign={"center"} />
			<NumberField source="priceLarge" />
			<NumberField source="priceSmall" />
			<NumberField source="weightLarge" />
			<NumberField source="weightSmall" />
			<TextField source="description" overflow={"hidden"} />
			<ImageField source="snackImageName" label="Image" textAlign="center" />
			<EditButton />
		</Datagrid>
	</List>
);
