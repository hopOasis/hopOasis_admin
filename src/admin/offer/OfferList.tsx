import { Datagrid, List, TextField, WrapperField } from "react-admin";
import { ActiveButton } from "../../components/ActiveButton";

export const OffersList = () => (
	<List>
		<Datagrid rowClick="show">
			<TextField source="id" />
			<TextField source="name" />
			<WrapperField label="active offer">
				<ActiveButton />
			</WrapperField>
		</Datagrid>
	</List>
);
