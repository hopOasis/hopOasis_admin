import {
	Datagrid,
	EditButton,
	ImageField,
	List,
	NumberField,
	TextField,
} from "react-admin";

export const BeerList = () => (
	<List>
		<Datagrid rowClick={"show"}>
			<TextField source="id" />
			<TextField source="beerName" label="Name" textAlign={"center"} />
			<NumberField source="priceLarge" />
			<NumberField source="priceSmall" />
			<NumberField source="volumeLarge" />
			<NumberField source="volumeSmall" />
			<TextField source="description" overflow={"hidden"} />
			<TextField source="beerColor" />
			<ImageField source="imageName" label="Image" textAlign="center" />
			<EditButton />
		</Datagrid>
	</List>
);
