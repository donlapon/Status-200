export class UserDetail {

    title: string;
    firstName: string;
    lastName: string;
    citizenId: string;
    dateOfBirth: string;
    beneficially: string;
    numberOfTraveller: number;
    email: string;
    constructor(
        title: string,
        firstName: string,
        lastName: string,
        citizenId: string,
        dateOfBirth: string,
        beneficially: string,
        email: string) {
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.citizenId = citizenId;
        this.dateOfBirth = dateOfBirth;
        this.beneficially = beneficially;
        this.email = email;
    }
}
