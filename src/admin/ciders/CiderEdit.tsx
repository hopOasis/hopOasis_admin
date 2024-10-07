import { Edit, NumberInput, TabbedForm, TextInput } from "react-admin";

export const CiderEdit = () => (
	<Edit className="list-common">
		<TabbedForm className="list-common">
			<TabbedForm.Tab label="Information" className="list-common">
				<TextInput source="ciderName" label="Name" variant="outlined" size="medium" className="list-common" />
			</TabbedForm.Tab>

			<TabbedForm.Tab label="Price and Volume" className="list-common">
				<NumberInput source="priceLarge" variant="outlined" size="medium" className="list-common" />
				<NumberInput source="priceSmall" variant="outlined" size="medium" className="list-common" />
				<NumberInput source="volumeLarge" variant="outlined" size="medium" className="list-common" />
				<NumberInput source="volumeSmall" variant="outlined" size="medium" className="list-common" />
			</TabbedForm.Tab>

			<TabbedForm.Tab label="Description" className="list-common">
				<TextInput
					variant="outlined"
					source="description"
					multiline
					fullWidth
					className="list-common"
				/>
			</TabbedForm.Tab>
		</TabbedForm>
	</Edit>
);
