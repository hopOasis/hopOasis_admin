import { Box, Button } from "@mui/material";
import axios from "axios";
const API_URL = "https://prod.eba-33ij8qpt.eu-central-1.elasticbeanstalk.com";

const getData = async () => {
	const response = await axios.get(
		`${API_URL}/cart/items?itemId=3&quantity=1&itemType=BEER`,
		{
			withCredentials: true,
		},
	);
	console.log(response.data);
};

const getOneData = async () => {
	const response = await axios.get(`${API_URL}/cart`, {
		withCredentials: true,
	});
	console.log(response.data);
};

export const ButtonGroup = () => {
	return (
		<Box>
			<Button onClick={() => getData()}>Add</Button>
			<Button onClick={() => getOneData()}>Get</Button>
		</Box>
	);
};
