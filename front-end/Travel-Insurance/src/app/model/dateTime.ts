export class DateTime {
    departureDate:string
    arrivalDate :string;
    duration: number;
    totalPrice: number;
    countryName: string;
    packageName: string;
    // endDate?: string
    constructor( departureDate:string, arrivalDate:string, countryName: string, packageName: string){
        this.departureDate =departureDate;
        this.arrivalDate = arrivalDate;
        this.countryName = countryName;
        this.packageName = packageName;
    }
}



