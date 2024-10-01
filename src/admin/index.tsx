
import { Admin, Resource, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import { customProvider } from "../api";
import { BeerCreate } from "./beer/BeerCreate";
import { BeerEdit } from "./beer/BeerEdit";
import { BeerList } from "./beer/BeerList";
import { BeerShow } from "./beer/BeerShow";
import { SnackCreate } from "./snacks/SnackCreate";
import { SnackEdit } from "./snacks/SnackEdit";
import { SnackList } from "./snacks/SnackList";
import { SnackShow } from "./snacks/SnackShow";
import { CiderList } from "./ciders/CiderList";
import { CiderShow } from "./ciders/CiderShow";
import { CiderEdit } from "./ciders/CiderEdit";
import { CiderCreate } from "./ciders/CiderCreate";
import { OfferCreate } from "./offers/OfferCreate";
import { OfferEdit } from "./offers/OfferEdit";
import { OfferList } from "./offers/OfferList";
import { OfferShow } from "./offers/OfferShow";
import { ButtonGroup } from "../components/Button";
import './StylesAdmin.css';

const MyAdmin = () => (
    <Admin dataProvider={customProvider}>
        <Resource
            name="beers"
            list={BeerList}
            show={BeerShow}
            edit={BeerEdit}
            create={BeerCreate}
        />
        <Resource
            name="snacks"
            list={SnackList}
            show={SnackShow}
            edit={SnackEdit}
            create={SnackCreate}
        />
        <Resource
            name="ciders"
            list={CiderList}
            show={CiderShow}
            edit={CiderEdit}
            create={CiderCreate}
        />
        <Resource
            name="special-offers"
            list={OfferList}
            show={OfferShow}
            edit={OfferEdit}
            create={OfferCreate}
        />
        <CustomRoutes>
            <Route path="buttons" element={<ButtonGroup />} />
        </CustomRoutes>
    </Admin>
);

export default MyAdmin;
