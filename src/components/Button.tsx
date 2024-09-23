import { Box, Button, CircularProgress } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const API_URL = "https://prod.eba-33ij8qpt.eu-central-1.elasticbeanstalk.com";

const getData = async () => {
    try {
        const response = await axios.get(
            `${API_URL}/cart/items?itemId=3&quantity=1&itemType=BEER`,
            {
                withCredentials: true,
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const getOneData = async () => {
    try {
        const response = await axios.get(`${API_URL}/cart`, {
            withCredentials: true,
        });
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const ButtonGroup = () => {
    const [loading, setLoading] = useState(false);

    const handleGetData = async () => {
        setLoading(true);
        await getData();
        setLoading(false);
    };

    const handleGetOneData = async () => {
        setLoading(true);
        await getOneData();
        setLoading(false);
    };

    return (
        <Box>
            <Button onClick={handleGetData} disabled={loading}>
                {loading ? <CircularProgress size={24} /> : "Add"}
            </Button>
            <Button onClick={handleGetOneData} disabled={loading}>
                {loading ? <CircularProgress size={24} /> : "Get"}
            </Button>
        </Box>
    );
};
