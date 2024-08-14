import { Create, SimpleForm, TextInput } from "react-admin";

export const OfferCreate = () => {
	return (
		<Create>
			<SimpleForm>
				<TextInput source="name" required />
			</SimpleForm>
		</Create>
	);
};
