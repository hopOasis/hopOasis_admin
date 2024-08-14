// import { PropsWithChildren } from "react";
import { Button } from "react-admin";
type Props = {
	label: string;
};

export const WeeklyButton: React.FC<Props> = ({ label }) => {
	return <Button label={label} />;
};
