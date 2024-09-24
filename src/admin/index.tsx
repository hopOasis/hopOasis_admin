// import axios from "axios";
// import { useEffect } from "react";
import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";
import { customProvider } from "../api";
import { ButtonGroup } from "../components/Button";
import { BeerCreate } from "./beer/BeerCreate";
import { BeerEdit } from "./beer/BeerEdit";
import { BeerList } from "./beer/BeerList";
import { BeerShow } from "./beer/BeerShow";
import { SnackCreate } from "./snack/SnackCreate";
import { SnackEdit } from "./snack/SnackEdit";
import { SnackList } from "./snack/SnackList";
import { SnackShow } from "./snack/SnackShow";
import { CiderList } from "./ciders/CiderList";
import { CiderShow } from "./ciders/CiderShow";
import { CiderEdit } from "./ciders/CiderEdit";
import { CiderCreate } from "./ciders/CiderCreate";

// const API_URL = "https://giou6fh6yg2ogdsh7uzcaobhte0wtwha.lambda-url.eu-central-1.on.aws";

const App = () => {

// useEffect(() => {
//     const getCart = async () => {
//         try {
//             const response = await axios.get(`${API_URL}/carts/{cartId}`, {
//                 withCredentials: true,
//             });
//             console.log("Cart session ID:", response.data);
//         } catch (error) {
//             console.error("Error fetching cart session ID:", error);
//         }
//     };

//     const addProduct = async () => {
//         try {
//             const response = await axios.post(`${API_URL}/carts/items`, {
//                 itemId: 3,
//                 quantity: 1,
//                 itemType: "BEER",
//             });
//             console.log("Product added:", response.data);
//         } catch (error) {
//             console.error("Error adding product:", error);
//         }
//     };

//     const getOneCart = async () => {
//         try {
//             const response = await axios.get(`${API_URL}/carts`, {
//                 withCredentials: true,
//             });
//             console.log("One cart data:", response.data);
//         } catch (error) {
//             console.error("Error fetching one cart:", error);
//         }
//     };

//     addProduct();
//     getOneCart();
//     getCart();
// }, []);



    return (
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
            <CustomRoutes>
                <Route path="buttons" element={<ButtonGroup />} />
            </CustomRoutes>
        </Admin>
    );
};

export default App;
