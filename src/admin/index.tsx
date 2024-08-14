import { Admin, Resource } from "react-admin";
import { customProvider } from "../api";
import { MyLayout } from "../components/CustomLayout";
import { BeerCreate } from "./beer/BeerCreate";
import { BeerEdit } from "./beer/BeerEdit";
import { BeerList } from "./beer/BeerList";
import { BeerShow } from "./beer/BeerShow";
import { OfferCreate } from "./offer/OfferCreate";
import { OffersList } from "./offer/OfferList";
import { OfferShow } from "./offer/OfferShow";

const App = () => {
	return (
		<Admin layout={MyLayout} dataProvider={customProvider}>
			<Resource
				name="beers"
				list={BeerList}
				show={BeerShow}
				edit={BeerEdit}
				create={BeerCreate}
			/>
			<Resource
				name="special-offers"
				list={OffersList}
				show={OfferShow}
				create={OfferCreate}
			/>
		</Admin>
	);
};

export default App;
