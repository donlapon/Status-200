export class Country {
    constructor(public code: string,
                public name: string) {}
}

export const mockCountries: Country[] = [
    {code: 'TH', name: 'Thailand'},
    {code: 'CH', name: 'Switzerland'},
    {code: 'JP', name: 'Japan'}
];
