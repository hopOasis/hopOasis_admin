import {
	Create,
	ImageField,
	ImageInput,
	TabbedForm,
	TextInput,
	required,
	NumberInput,
	CreateProps,
} from "react-admin";
import { ProductBundleParams } from "../../types"; // Импортируем типы
import '../StylesAdmin.css';

export const BundleCreate = (props: CreateProps) => (
	<Create<ProductBundleParams> {...props} className="list-common">
			<TabbedForm className="list-common">
					<TabbedForm.Tab label="Information" className="list-common">
							<TextInput
									source="name"
									label="Name"
									validate={[required()]}
									className="list-common"
							/>
							<TextInput
									source="description"
									label="Description"
									multiline
									fullWidth
									validate={[required()]}
									className="list-common"
							/>
					</TabbedForm.Tab>

					<TabbedForm.Tab label="Images" className="list-common">
							<ImageInput
									source="productImageName"
									accept="image/*"
									validate={[required()]}
									className="list-common-image"
							>
									<ImageField source="src" title="title" />
							</ImageInput>
					</TabbedForm.Tab>

					<TabbedForm.Tab label="Ratings" className="list-common">
							<NumberInput
									source="averageRating"
									label="Average Rating"
									validate={[required()]}
									className="list-common"
							/>
							<NumberInput
									source="ratingCount"
									label="Rating Count"
									validate={[required()]}
									className="list-common"
							/>
					</TabbedForm.Tab>
			</TabbedForm>
	</Create>
);
