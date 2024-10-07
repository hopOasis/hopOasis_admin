import {
	Create,
	ImageField,
	ImageInput,
	TabbedForm,
	TextInput,
	required,
} from "react-admin";

export const CiderCreate = () => (
	<Create className="list-common">
		<TabbedForm className="list-common">
			<TabbedForm.Tab label="Information" className="list-common">
				<TextInput source="ciderName" label="Name" validate={[required()]} className="list-common" />
			</TabbedForm.Tab>

			<TabbedForm.Tab label="Price and Volume" className="list-common">
				<TextInput source="priceSmall" validate={[required()]} className="list-common" />
				<TextInput source="priceLarge" validate={[required()]} className="list-common" />
				<TextInput source="volumeLarge" validate={[required()]} className="list-common" />
				<TextInput source="volumeSmall" validate={[required()]} className="list-common" />
			</TabbedForm.Tab>

			<TabbedForm.Tab label="Description" className="list-common">
				<TextInput
					source="description"
					variant="outlined"
					multiline
					fullWidth
					validate={[required()]}
					className="list-common"
				/>
			</TabbedForm.Tab>

			<TabbedForm.Tab label="Images" className="list-common">
				<ImageInput
					source="image"
					accept="image/*"
					validate={[required()]}
					multiple
					className="list-common"
				>
					<ImageField source="src" title="name" className="list-common" />
				</ImageInput>
			</TabbedForm.Tab>
		</TabbedForm>
	</Create>
);
