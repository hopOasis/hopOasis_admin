import { Edit, NumberInput, TabbedForm, TextInput } from "react-admin";

export const SnackEdit = () => {
	return (
		<Edit>
			<TabbedForm>
				<TabbedForm.Tab label={"Information"}>
					<TextInput
						source="snackName"
						label="Name"
						variant="outlined"
						size="medium"
					/>
				</TabbedForm.Tab>

				<TabbedForm.Tab label={"Price and Weight"}>
					<NumberInput source="priceLarge" label="Price (Large)" variant="outlined" size="medium" />
					<NumberInput source="priceSmall" label="Price (Small)" variant="outlined" size="medium" />
					<NumberInput source="weightLarge" label="Weight (Large)" variant="outlined" size="medium" />
					<NumberInput source="weightSmall" label="Weight (Small)" variant="outlined" size="medium" />
				</TabbedForm.Tab>

				<TabbedForm.Tab label={"Description"}>
					<TextInput
						variant="outlined"
						source="description"
						label="Description"
						multiline
						fullWidth
					/>
				</TabbedForm.Tab>
			</TabbedForm>
		</Edit>
	);
};
