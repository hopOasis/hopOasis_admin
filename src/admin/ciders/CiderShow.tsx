import {
	ImageField,
	NumberField,
	Show,
	TabbedShowLayout,
	TextField,
	ShowProps,
} from "react-admin";
import { CiderParams } from "../../types";
import '../StylesAdmin.css';

export const CiderShow = (props: ShowProps) => (
	<Show<CiderParams> {...props} className="list-common">
			<TabbedShowLayout className="list-common">
					<TabbedShowLayout.Tab label="Information" className="list-common">
							<TextField source="id" className="list-common" />
							<TextField source="ciderName" label="Name" className="list-common" />
					</TabbedShowLayout.Tab>
					<TabbedShowLayout.Tab label="Price and Volume" className="list-common">
							<NumberField source="options[0]?.price" label="Price Option 1" className="list-common" />
							<NumberField source="options[0]?.volume" label="Volume Option 1" className="list-common" />
							<NumberField source="options[1]?.price" label="Price Option 2" className="list-common" />
							<NumberField source="options[1]?.volume" label="Volume Option 2" className="list-common" />
					</TabbedShowLayout.Tab>
					<TabbedShowLayout.Tab label="Description" className="list-common">
							<TextField source="description" className="list-common" />
					</TabbedShowLayout.Tab>
					<TabbedShowLayout.Tab label="Images" className="list-common">
							<ImageField source="ciderImageName" label="Image" className="list-common-image" />
					</TabbedShowLayout.Tab>
			</TabbedShowLayout>
	</Show>
);
