import { Datagrid, List, TextField } from 'react-admin';

export const BeerList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="price_large" />
            <TextField source="price_small" />
            <TextField source="description" />
            <TextField source="color_bear" />
            <TextField source="image" />
        </Datagrid>
    </List>
);