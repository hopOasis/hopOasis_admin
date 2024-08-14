import { Checkbox, type CheckboxProps } from "@mui/material";
import { useState } from "react";
import { useRecordContext } from "react-admin";
import type { Offer } from "../types/offer";

type Props = {
	props?: CheckboxProps;
};

export const ActiveButton: React.FC<Props> = ({ props }) => {
	const { active } = useRecordContext<Offer>();
	const [isChecked, setIsChecked] = useState(active);
	const onHandleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(target.checked);
	};

	return <Checkbox {...props} checked={isChecked} onChange={onHandleChange} />;
};
