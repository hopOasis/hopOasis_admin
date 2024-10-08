import {
	Datagrid,
	EditButton,
	ImageField,
	List,
	NumberField,
	TextField,
} from "react-admin";

export const CiderList = () => (
	<List className="list-common">
		<Datagrid rowClick="show" className="list-common">
			<TextField source="id" />
			<TextField source="ciderName" label="Name" className="list-common" />
			<NumberField source="priceLarge" />
			<NumberField source="priceSmall" />
			<NumberField source="volumeLarge" />
			<NumberField source="volumeSmall" />
			<TextField source="description" className="list-common" />
			<ImageField source="ciderImageName" label="Image" className="list-common-image" />
			<EditButton className="list-common-edit-button" />
		</Datagrid>
	</List>
);
