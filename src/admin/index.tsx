import { Admin, Resource, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import { customProvider } from "../api";
import { BeerCreate } from "./Beer/BeerCreate";
import { BeerEdit } from "./Beer/BeerEdit";
import { BeerList } from "./Beer/BeerList";
import { BeerShow } from "./Beer/BeerShow";
import { SnackCreate } from "./Snacks/SnackCreate";
import { SnackEdit } from "./Snacks/SnackEdit";
import { SnackList } from "./Snacks/SnackList";
import { SnackShow } from "./Snacks/SnackShow";
import { CiderList } from "./Ciders/CiderList";
import { CiderShow } from "./Ciders/CiderShow";
import { CiderEdit } from "./Ciders/CiderEdit";
import { CiderCreate } from "./Ciders/CiderCreate";
import { OfferCreate } from "./Offers/OfferCreate";
import { OfferEdit } from "./Offers/OfferEdit";
import { OfferList } from "./Offers/OfferList";
import { OfferShow } from "./Offers/OfferShow";
import { BundleCreate } from "./Bundles/BundleCreate"; 
import { BundleEdit } from "./Bundles/BundleEdit"; 
import { BundleList } from "./Bundles/BundleList"; 
import { BundleShow } from "./Bundles/BundleShow"; 
import { ButtonGroup } from "../components/Button"; 
import CustomLayout from "../components/CustomLayout"; 
import './StylesAdmin.css';

const MyAdmin = () => (
    <Admin dataProvider={customProvider} layout={CustomLayout}>
        <Resource
            name="beers"
            list={BeerList}
            show={BeerShow}
            edit={BeerEdit}
            create={BeerCreate}
            options={{ label: 'Beers' }}
        />
        <Resource
            name="snacks"
            list={SnackList}
            show={SnackShow}
            edit={SnackEdit}
            create={SnackCreate}
            options={{ label: 'Snacks' }} 
        />
        <Resource
            name="ciders"
            list={CiderList}
            show={CiderShow}
            edit={CiderEdit}
            create={CiderCreate}
            options={{ label: 'Ciders' }} 
        />
        <Resource
            name="special-offers"
            list={OfferList}
            show={OfferShow}
            edit={OfferEdit}
            create={OfferCreate}
            options={{ label: 'Special Offers' }} 
        />
        <Resource
            name="products-bundle" 
            list={BundleList}
            show={BundleShow}
            edit={BundleEdit}
            create={BundleCreate}
            options={{ label: 'Products Bundle' }} 
        />
        <CustomRoutes>
            <Route path="buttons" element={<ButtonGroup />} />                  
        </CustomRoutes>
    </Admin>
);

export default MyAdmin;
