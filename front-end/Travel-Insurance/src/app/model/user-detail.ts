export class UserDetail {

    title: string;
    firstName: string;
    lastName: string;
    citizenId: string;
    dateOfBirth: string;
    beneficially: string;
    numberOfTraveller: number;

    constructor(
        title: string,
        firstName: string,
        lastName: string,
        citizenId: string,
        dateOfBirth: string,
        beneficially: string,
        numberOfTraveller: number ){
            this.title = title;
            this.firstName = firstName;
            this.lastName = lastName;
            this.citizenId = citizenId;
            this.dateOfBirth = dateOfBirth;
            this.beneficially = beneficially;
            this.numberOfTraveller = numberOfTraveller;
    }
}
