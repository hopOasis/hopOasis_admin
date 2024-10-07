import {
    ImageField,
    NumberField,
    Show,
    TabbedShowLayout,
    TextField,
} from "react-admin";
import '../StylesAdmin.css';

export const BeerShow = () => (
    <Show className="list-common">
        <TabbedShowLayout className="list-common">
            <TabbedShowLayout.Tab label="Information" className="list-common">
                <TextField source="id" className="list-common" />
                <TextField source="beerName" label="Name" className="list-common" />
                <TextField source="beerColor" className="list-common" />
            </TabbedShowLayout.Tab>

            <TabbedShowLayout.Tab label="Price and Volume" className="list-common">
                <NumberField source="priceLarge" className="list-common" />
                <NumberField source="priceSmall" className="list-common" />
                <NumberField source="volumeLarge" className="list-common" />
                <NumberField source="volumeSmall" className="list-common" />
            </TabbedShowLayout.Tab>

            <TabbedShowLayout.Tab label="Description" className="list-common">
                <TextField source="description" className="list-common" />
            </TabbedShowLayout.Tab>

            <TabbedShowLayout.Tab label="Images" className="list-common">
                <ImageField source="image" label="Image" className="list-common-image" />
            </TabbedShowLayout.Tab>
        </TabbedShowLayout>
    </Show>
);
