
export class UserDTO {

    firstName: string
    login: string
    password: string


    constructor(firstName: string, login: string, password: string){
        this.firstName = firstName
        this.login = login
        this.password = password
    }


}