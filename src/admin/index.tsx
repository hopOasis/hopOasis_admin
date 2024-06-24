import jsonServerProvider from "ra-data-json-server";
// import simpleRestProvider from "ra-data-simple-rest";
import { Admin, ListGuesser, Resource } from "react-admin";
// import { BeerList } from "./beer";
// const dataProvider = simpleRestProvider("");
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => {
	return (
		<Admin dataProvider={dataProvider}>
			<Resource name="posts" list={ListGuesser} />
			{/* <Resource name="beers" list={BeerList} /> */}
		</Admin>
	);
};

export default App;
