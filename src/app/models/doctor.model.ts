export class Doctor {
    id?:number | any;
    firstName:string | any;
    surname:string | any;
    age:number | any;

    constructor(firstName:string, surname:string, age:number, id:number){
        this.age = age;
        this.firstName = firstName;
        this.surname = surname;
        this.id = id;
    }
}