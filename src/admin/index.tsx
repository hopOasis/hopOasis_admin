import { Admin, Resource } from "react-admin";
import { customProvider } from "../api";
import { BeerCreate } from "./beer/BeerCreate";
import { BeerEdit } from "./beer/BeerEdit";
import { BeerList } from "./beer/BeerList";
import { BeerShow } from "./beer/BeerShow";

const App = () => {
	return (
		<Admin dataProvider={customProvider}>
			<Resource
				name="beers"
				list={BeerList}
				show={BeerShow}
				edit={BeerEdit}
				create={BeerCreate}
			/>
		</Admin>
	);
};

export default App;
