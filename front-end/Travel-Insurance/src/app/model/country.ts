export class Country {
    countryCode: string
    countryName: string
    imgUrl :string
    constructor( countryCode: string,
                 countryName: string) {
                     this.countryCode = countryCode
                     this.countryName = countryName
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