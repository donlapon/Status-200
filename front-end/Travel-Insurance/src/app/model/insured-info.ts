import { UserDetail } from './user-detail';

export class InsuredInfo {
    destinationCountry: string;
    packageName: string;
    departureDate: string;
    arrivalDate: string;
    duration: number;
    totalPrice: number;
    idNumber: string;
    title: string;
    firstName: string;
    lastName: string;
    dateOfBirth: any;
    beneficiaryName: string;
    phoneNumber: string;
    email: string;
    constructor({
        destinationCountry,
        packageName,
        departureDate,
        arrivalDate,
        duration,
        totalPrice,
        idNumber,
        title,
        firstName,
        lastName,
        dateOfBirth,
        beneficiaryName,
        phoneNumber,
        email
    }: any
    ) {
        this.destinationCountry = destinationCountry;
        this.packageName = packageName;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.duration = duration;
        this.totalPrice = totalPrice;
        this.idNumber = idNumber;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth,
        this.beneficiaryName = beneficiaryName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}
