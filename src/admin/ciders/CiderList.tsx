import {
	Datagrid,
	EditButton,
	List,
	NumberField,
	TextField,
	ListProps
} from "react-admin";
import '../StylesAdmin.css';

export const CiderList = (props: ListProps) => (
	<List {...props} title="Ciders" className="list-common">
			<Datagrid rowClick="show" className="list-common">
					<TextField source="id" className="list-common" />
					<TextField source="ciderName" label="Name" className="list-common" />
					<NumberField source="averageRating" label="Average Rating" className="list-common" />
					<NumberField source="ratingCount" label="Rating Count" className="list-common" />
					<EditButton className="list-common-edit-button" />
			</Datagrid>
	</List>
);
