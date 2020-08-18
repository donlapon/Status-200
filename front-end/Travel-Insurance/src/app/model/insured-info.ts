export class InsuredInfo {
    destinationCountry: string;
    packageName: string;
    departureDate: string;
    arrivalDate: string;
    duration: number;
    totalPrice: number;
    idNumber: string;
    titleName: string;
    firstname: string;
    lastname: string;
    dateOfBirth: string;
    beneficiaryName: string;
    phoneNumber: string;
    email: string;
    constructor(
        destinationCountry: string,
        packageName: string,
        departureDate: string,
        arrivalDate: string,
        duration: number,
        totalPrice: number,
        idNumber: string,
        titleName: string,
        firstname: string,
        lastname: string,
        dateOfBirth: string,
        beneficiaryName: string,
        phoneNumber: string,
        email: string
    ){
        this.destinationCountry = destinationCountry;
        this.packageName = packageName;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.duration = duration;
        this.totalPrice = totalPrice;
        this.idNumber = idNumber;
        this.titleName = titleName;
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateOfBirth = dateOfBirth,
        this.beneficiaryName = beneficiaryName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}
