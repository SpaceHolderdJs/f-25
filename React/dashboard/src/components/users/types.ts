export interface DashboardUserInterface {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: AddressInterface;
    company: CompanyInterface;
}

export interface AddressInterface {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoInterface;
}

export interface GeoInterface {
    lat: number;
    lng: number;
}

export interface CompanyInterface {
    name: string;
    catchPhrase: string;
    bs: string;
}
