import {
	Datagrid,
	EditButton,
	List,
	NumberField,
	TextField,
	ListProps
} from "react-admin";
import '../StylesAdmin.css';

export const BundleList = (props: ListProps) => (
	<List {...props} title="Product Bundles" className="list-common">
			<Datagrid rowClick="show" className="list-common">
					<TextField source="id" className="list-common" />
					<TextField source="name" label="Name" className="list-common" />
					<NumberField source="averageRating" label="Average Rating" className="list-common" />
					<NumberField source="ratingCount" label="Rating Count" className="list-common" />
					<EditButton className="list-common-edit-button" />
			</Datagrid>
	</List>
);
