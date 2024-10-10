import {
    ImageField,
    NumberField,
    Show,
    TabbedShowLayout,
    TextField,
    ShowProps,
} from "react-admin";
import { BeerParams } from "../../types";
import '../StylesAdmin.css';

export const BeerShow = (props: ShowProps) => (
    <Show<BeerParams> {...props} className="list-common">
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
                <ImageField source="imageName" label="Image" className="list-common-image" />
            </TabbedShowLayout.Tab>
        </TabbedShowLayout>
    </Show>
);
