import {
    Datagrid,
    EditButton,
    ImageField,
    List,
    NumberField,
    TextField,
    ListProps
} from "react-admin";
import { SnackParams } from "../../types"; // Импортируем типы
import '../StylesAdmin.css';

export const SnackList = (props: ListProps) => (
    <List<SnackParams> {...props} title="Snacks" className="list-common">
        <Datagrid rowClick="show" className="list-common">
            <TextField source="id" className="list-common" />
            <TextField source="snackName" label="Name" className="list-common" />
            <NumberField source="priceLarge" className="list-common" />
            <NumberField source="priceSmall" className="list-common" />
            <NumberField source="weightLarge" className="list-common" />
            <NumberField source="weightSmall" className="list-common" />
            <TextField source="description" className="list-common" />
            <TextField source="snackImageName" label="Image Name" className="list-common" />
            <ImageField source="image" label="Image" className="list-common-image" />
            <EditButton className="list-common-edit-button" />
        </Datagrid>
    </List>
);
