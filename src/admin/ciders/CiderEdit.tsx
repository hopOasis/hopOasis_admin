import { Edit, NumberInput, TabbedForm, TextInput } from "react-admin";

export const CiderEdit = () => {
	return (
		<Edit>
			<TabbedForm>
				<TabbedForm.Tab label={"information"}>
					<TextInput
						source="ciderName"
						label="Name"
						variant="outlined"
						size="medium"
					/>
					{/* <TextInput source="ciderColor" variant="outlined" size="medium" /> */}
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
};
