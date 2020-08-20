export class DateTime {
    departureDate:string
    arrivalDate :string;
    duration: number;
    totalPrice: number;
    // endDate?: string
    constructor( departureDate:string, arrivalDate:string){
        this.departureDate =departureDate;
        this.arrivalDate = arrivalDate;
    }
}



