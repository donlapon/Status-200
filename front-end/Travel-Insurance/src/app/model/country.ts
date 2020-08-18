export class Country {
    countryCode: string
    countryName: string
    imgUrl :string
    age : number;
    status:boolean =true;
    constructor( countryCode: string,
                 countryName: string,
                 status :boolean
                 ) {
                     this.countryCode = countryCode
                     this.countryName = countryName
                     this.status = status;
                 }

}

// export const mockCountries: Country[] = [
//     {countryCode: 'TH', countryName: 'Thailand'},
//     {countryCode: 'CH', countryName: 'Switzerland'},
//     {countryCode: 'JP', countryName: 'Japan'}
// ];

export interface CountryResponse{
    countryCode: string;
    countryName: string;
    imgUrl : string;

}