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
        countryName,
        packageName,
        dateDetailValue,
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
        this.destinationCountry = countryName;
        this.packageName = packageName;
        this.departureDate = dateDetailValue.departureDate;
        this.arrivalDate = dateDetailValue.arrivalDate;
        this.duration = dateDetailValue.duration;
        this.totalPrice = dateDetailValue.totalPrice;
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
