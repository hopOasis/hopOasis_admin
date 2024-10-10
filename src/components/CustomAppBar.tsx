import { AppBar, AppBarProps, useResourceContext } from "react-admin";
import { Button, CircularProgress, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const REVALIDATE_URL = "https://hop-oasis-fr.vercel.app/api/revalidate/main"; 

const CustomAppBar = (props: AppBarProps) => {
    const [loadingReval, setLoadingReval] = useState(false);
    const resource = useResourceContext();

    const revalidateData = async () => {
        try {
            const response = await axios.get(REVALIDATE_URL);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching:", error);
        }
    };

    const handleRevalidateData = async () => {
        setLoadingReval(true);
        await revalidateData();
        setLoadingReval(false);
    };

    const getReadableTitle = () => {
        if (!resource) return 'My Admin';
        const labels: { [key: string]: string } = {
            'beers': 'Beers',
            'snacks': 'Snacks',
            'ciders': 'Ciders',
            'special-offers': 'Special Offers'
        };
        return labels[resource as keyof typeof labels] || resource.charAt(0).toUpperCase() + resource.slice(1);
    };

    return (
        <AppBar {...props}>  
        <Toolbar className="toolbar-container">
            <Typography variant="h6" className="toolbar-title">
                {getReadableTitle()}
            </Typography>
            <div className="toolbar-actions">
                <Button 
                    onClick={handleRevalidateData} 
                    disabled={loadingReval} 
                    variant="contained"
                >
                    {loadingReval ? <CircularProgress size={24} /> : "Reval"}
                </Button>
            </div>
        </Toolbar>
    </AppBar>
    );
};

export default CustomAppBar;
