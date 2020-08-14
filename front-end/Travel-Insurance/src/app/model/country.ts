export class Country {
  constructor(public country_code: number, public country_name: String) {}
}
export const allCountry: Country[] = [
  {
    country_code: 1,
    country_name: 'Switzerland',
  },
  {
    country_code: 2,
    country_name: 'Japan',
  },
  {
    country_code: 3,
    country_name: 'England',
  },
];
