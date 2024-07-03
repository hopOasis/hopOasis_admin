type TAddress = {
  addressLine1: string;
  addressLine2?: string;
  postCode: number | string;
  city: string;
  state: string;
  country: string;
};

type UserKeys = "username" | "email" | "firstName" | "lastName" | "address";
type TUser = Record<UserKeys, string | TAddress>;

const joe = {
  username: "joe_hiyden",
  email: "joe@exmaple.com",
  firstName: "Joe",
  lastName: "Hiyden",

  // Complains about property overloading
  role: "Admin", // Object literal may only specify known properties, and 'role' does not exist in type 'TUser'.(1360)
  address: {
    addressLine1: "1, New Avenue",
    addressLine2: "Mission Bay",
    postCode: 12345,
    city: "California",
    state: "California",
    country: "USA",
  },
} satisfies TUser;

console.log(joe.address.postCode); // 12345