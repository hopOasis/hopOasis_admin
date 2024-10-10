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
import { CiderParams } from "../../types"; // Импортируем типы
import '../StylesAdmin.css';

export const CiderCreate = (props: CreateProps) => (
	<Create<CiderParams> {...props} className="list-common">
			<TabbedForm className="list-common">
					<TabbedForm.Tab label="Information" className="list-common">
							<TextInput
									source="ciderName"
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
									source="ciderImageName"
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
