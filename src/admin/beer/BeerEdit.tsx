import { Edit, NumberInput, TabbedForm, TextInput } from "react-admin";

export const BeerEdit = () => (
	<Edit>
		<TabbedForm>
			<TabbedForm.Tab label={"information"}>
				<TextInput
					source="beerName"
					label="Name"
					variant="outlined"
					size="medium"
				/>
				<TextInput source="beerColor" variant="outlined" size="medium" />
			</TabbedForm.Tab>
			<TabbedForm.Tab label={"price and volume"}>
				<NumberInput source="priceLarge" variant="outlined" size="medium" />
				<NumberInput source="priceSmall" variant="outlined" size="medium" />
				<NumberInput source="volumeLarge" variant="outlined" size="medium" />
				<NumberInput source="volumeSmall" variant="outlined" size="medium" />
			</TabbedForm.Tab>
			<TabbedForm.Tab label={"description"}>
				<TextInput
					variant="outlined"
					source="description"
					multiline
					fullWidth
				/>
			</TabbedForm.Tab>
		</TabbedForm>
	</Edit>
);
