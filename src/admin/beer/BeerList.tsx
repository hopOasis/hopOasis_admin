import {
	Datagrid,
	EditButton,
	ImageField,
	List,
	NumberField,
	TextField,
} from "react-admin";

export const BeerList = () => (
	<List className="list-common">
		<Datagrid rowClick="show" className="list-common">
			<TextField source="id" />
			<TextField source="beerName" label="Name" className="list-common" />
			<NumberField source="priceLarge" />
			<NumberField source="priceSmall" />
			<NumberField source="volumeLarge" />
			<NumberField source="volumeSmall" />
			<TextField source="description" className="list-common" />
			<TextField source="beerColor" />
			<ImageField source="imageName" label="Image" className="list-common-image" />
			<EditButton className="list-common-edit-button" />
		</Datagrid>
	</List>
);
