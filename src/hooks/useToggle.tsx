import {
	useDelete,
	useGetOne,
	useRecordContext,
	useResourceContext,
	useStore,
} from "react-admin";
import { useProductState } from "./useProductState";

export const useToggle = () => {
	const record = useRecordContext();
	const resource = useResourceContext();
	const [offer] = useStore("currentOffer");
	console.log(offer);
	const { refetch } = useGetOne(
		`special-offers/${offer}/${resource}`,
		{
			id: record.id,
		},
		{
			enabled: false,
		},
	);
	const [deleteOne] = useDelete(`special-offers/${offer}/${resource}`, {
		id: record.id,
		previousData: record,
	});
	const { isChecked, setIsChecked } = useProductState();

	const setProduct = (value: boolean) => {
		if (value) {
			deleteOne();
		}
		if (!value) {
			refetch();
		}
	};
	const onHandleCheck = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = target;
		setIsChecked(checked);
		setProduct(!checked);
	};

	return { onHandleCheck, isChecked };
};
