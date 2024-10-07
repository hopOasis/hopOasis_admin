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
			<TextField source="id" className="list-common" />
			<TextField source="ciderName" label="Name" className="list-common" />
			<NumberField source="priceLarge" className="list-common" />
			<NumberField source="priceSmall" className="list-common" />
			<NumberField source="volumeLarge" className="list-common" />
			<NumberField source="volumeSmall" className="list-common" />
			<TextField source="description" className="list-common" />
			<ImageField source="image" label="Image" className="list-common-image" />
			<EditButton className="list-common-edit-button" />
		</Datagrid>
	</List>
);
