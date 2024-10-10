import {
	ImageField,
	NumberField,
	Show,
	TabbedShowLayout,
	TextField,
	ShowProps,
} from "react-admin";
import { ProductBundleParams } from "../../types"; // Импортируем типы
import '../StylesAdmin.css';

export const BundleShow = (props: ShowProps) => (
	<Show<ProductBundleParams> {...props} className="list-common">
			<TabbedShowLayout className="list-common">
					<TabbedShowLayout.Tab label="Information" className="list-common">
							<TextField source="id" className="list-common" />
							<TextField source="name" label="Name" className="list-common" />
							<TextField source="description" label="Description" className="list-common" />
					</TabbedShowLayout.Tab>

					<TabbedShowLayout.Tab label="Images" className="list-common">
							<ImageField source="productImageName" label="Images" className="list-common-image" />
					</TabbedShowLayout.Tab>

					<TabbedShowLayout.Tab label="Ratings" className="list-common">
							<NumberField source="averageRating" label="Average Rating" className="list-common" />
							<NumberField source="ratingCount" label="Rating Count" className="list-common" />
					</TabbedShowLayout.Tab>
			</TabbedShowLayout>
	</Show>
);
