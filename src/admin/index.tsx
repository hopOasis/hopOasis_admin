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

// const API_URL = "https://prod.eba-33ij8qpt.eu-central-1.elasticbeanstalk.com";

const App = () => {
	// useEffect(() => {
	// const getCart = async () => {
	// 	const response = await axios.get(`${API_URL}/cart/session-id`, {
	// 		withCredentials: true,
	// 	});
	// 	console.log(response.data);
	// };
	// const addProduct = async () => {
	// 	const response = await axios.post(`${API_URL}/cart/items`, {
	// 		itemId: 3,
	// 		quantity: 1,
	// 		itemType: "BEER",
	// 	});
	// 	console.log(response.data);
	// };
	// addProduct();
	// const getOneCart = async () => {
	// 	const response = await axios.get(`${API_URL}/cart`, {
	// 		withCredentials: true,
	// 	});
	// 	console.log(response.data);
	// };
	// getOneCart();
	// getCart();
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
			<CustomRoutes>
				<Route path="buttons" element={<ButtonGroup />} />
			</CustomRoutes>
		</Admin>
	);
};

export default App;
