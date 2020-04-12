export class User {
    username: string;
    firstName: string;
    lastName: string;

    constructor(data: Partial<User>) {
        this.username = data.username;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
    }
}
