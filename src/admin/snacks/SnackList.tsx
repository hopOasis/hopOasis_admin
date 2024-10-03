import {
	Datagrid,
	EditButton,
	ImageField,
	List,
	NumberField,
	TextField,
} from "react-admin";

export const SnackList = () => (
	<List className="list-common">
		<Datagrid rowClick="show" className="list-common">
			<TextField source="id" />
			<TextField source="snackName" label="Name" className="list-common" />
			<NumberField source="priceLarge" />
			<NumberField source="priceSmall" />
			<NumberField source="weightLarge" />
			<NumberField source="weightSmall" />
			<TextField source="description" className="list-common" />
			<ImageField source="snackImageName" label="Image" className="list-common-image" />
			<EditButton className="list-common-edit-button" />
		</Datagrid>
	</List>
);
