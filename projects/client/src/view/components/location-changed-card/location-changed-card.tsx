import { Link } from "@mui/material";

type LocationSectionProps = {
	name: string;
	amount: number;
}

export const LocationSection = (props: LocationSectionProps) => (
	<div className="flex flex-col flex-1">
		<span className="w-max">מקום שהיה קודם:</span>
		<Link href="#" underline="none" className="w-max font-medium">{props.name}</Link>
		<span className="h-2"></span>
		<span className="w-max">מס’ תושבים במלון:</span>
		<span className="w-max font-bold">{props.amount}</span>
	</div>
)

export type LocationChangeCardProps = {
	amount: number;
	location1: LocationSectionProps;
	location2: LocationSectionProps;
};

export const LocationChangeCard = (props: LocationChangeCardProps) => {
	return (
		<div className="shadow p-4 rounded-lg flex flex-col w-full">
			<div className="font-bold text-lg">{props.amount} תושבים</div>
			גילי
			<div className="flex gap-6 items-center">
				<LocationSection {...props.location1} />
				<i className="fas fa-arrow-alt-right mb-8"></i>
				<LocationSection {...props.location2} />
			</div>
		</div>
	);
};