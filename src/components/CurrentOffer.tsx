import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	type SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
	useDataProvider,
	useGetList,
	useRefresh,
	useUpdate,
} from "react-admin";
import type { Offer } from "../types/offer";
// import { useMutation, useQuery } from '@tanstack/react-query';

export const CurrentOffer: React.FC = () => {
	// const dataProvider = useDataProvider();
	const [activeId, setActiveId] = useState<string>("None");
	const [offersId, setOffersId] = useState<Offer[] | null>(null);
	const { data } = useGetList<Offer>(
		"special-offers",
		{},
		{
			queryKey: [activeId],
		},
	);
	const activeOfferId =
		String(data?.find(({ active }) => active)?.id) || "None";
	const [setActiveOffer] = useUpdate();
	const refresh = useRefresh();
	const handleChange = async ({ target }: SelectChangeEvent) => {
		await setActiveOffer("special-offers", {
			id: target.value,
			data: {
				offerId: target.value,
			},
		});
		setActiveId(target.value);
		refresh();
	};

	useEffect(() => {
		if (data) {
			setOffersId(data);
			setActiveId(activeOfferId);
		}
	}, [data, activeOfferId]);

	return (
		<FormControl variant="outlined" sx={{ minWidth: 120, color: "white" }}>
			<InputLabel sx={{ color: "white" }}>Current offer</InputLabel>
			<Select
				value={activeId}
				label="Current offer"
				sx={{
					height: "2.5rem",
					color: "white",
					"& .MuiOutlinedInput-notchedOutline": {
						borderColor: "white",
					},
					"& .MuiSvgIcon-root": {
						color: "white",
					},
				}}
				onChange={handleChange}
			>
				<MenuItem value="None">
					<em>None</em>
				</MenuItem>
				{(offersId || []).map(({ id }) => (
					<MenuItem value={id} key={id}>
						{id}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
