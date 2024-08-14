import {
	Datagrid,
	EditButton,
	ImageField,
	List,
	NumberField,
	TextField,
	// WrapperField,
} from "react-admin";

export const BeerList = () => (
	<List>
		<Datagrid>
			<TextField source="id" />
			<TextField source="beerName" label="Name" textAlign={"center"} />
			<NumberField source="priceLarge" />
			<NumberField source="priceSmall" />
			<NumberField source="volumeLarge" />
			<NumberField source="volumeSmall" />
			<TextField source="description" overflow={"hidden"} />
			<TextField source="beerColor" />
			<ImageField source="imageName" label="Image" textAlign="center" />
			<EditButton label="Edit" />
			{/* <WrapperField label='Add to offer'>
        <AddToOfferButton />
      </WrapperField> */}
		</Datagrid>
	</List>
);
