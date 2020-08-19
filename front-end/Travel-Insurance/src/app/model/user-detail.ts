export class UserDetail {

    titleName: string;
    firstname: string;
    lastname: string;
    citizenId: string;
    dateOfBirth: string;
    beneficially: string;
    numberOfTraveller: number;
    email: string;
    constructor(
        titleName: string,
        firstname: string,
        lastname: string,
        citizenId: string,
        dateOfBirth: string,
        beneficially: string,
        email: string){
            this.titleName = titleName;
            this.firstname = firstname;
            this.lastname = lastname;
            this.citizenId = citizenId;
            this.dateOfBirth = dateOfBirth;
            this.beneficially = beneficially;
            this.email = email;
    }
}
