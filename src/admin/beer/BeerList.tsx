import {
    Datagrid,
    EditButton,
    ImageField,
    List,
    NumberField,
    TextField,
    ListProps
} from "react-admin";
import { BeerParams } from "../../types";

export const BeerList = (props: ListProps) => (
    <List<BeerParams> {...props} title="Beers" className="list-common">
        <Datagrid rowClick="show" className="list-common">
            <TextField source="id" className="list-common" />
            <TextField source="beerName" label="Name" className="list-common" />
            <NumberField source="priceLarge" className="list-common" />
            <NumberField source="priceSmall" className="list-common" />
            <NumberField source="volumeLarge" className="list-common" />
            <NumberField source="volumeSmall" className="list-common" />
            <TextField source="description" className="list-common" />
            <TextField source="beerColor" className="list-common" />
            <ImageField source="imageName" label="Image" className="list-common-image" />
            <EditButton className="list-common-edit-button" />
        </Datagrid>
    </List>
);
