/*
In this task your are required to create an Admin class, which is a  child class of the User  class:
1. Create a  User class:

§ Add to the class a property with the name of username.

§ Create a setter method that can set the value of the username.

2. Create the Admin class that inherits the User class:

§ Add a method by the name of expressYourRole(), and make it return the string: "Admin".

§ Add to the Admin class another method, sayHello(), that returns the string "Hello admin, XXX" with the username instead of XXX.

3. Create an object admin out of the class Admin:

§ Set its name to "Balthazar" and say hello to the user.
*/
// define a class User 
class User {
    // create a constructor 
    constructor(userName) {
        this._userName = userName;       
    }
    // create a getter method
    get userName() {
        return this._userName;
    }
    // create a setter method
    set userName(userName) {
        this._userName = userName;
    }
     hello() {
        return "\n Hello World!";
    }
}
// define a class Admin that inherits from User
class Admin extends User {
    // create a constructor
    constructor(userName) {
        super(userName);
    }
    // create a method that returns the string "Admin"
    expressYourRole() {
        return "Admin \n";
    }
    // create a method that returns the string "Hello admin, XXX" with the username instead of XXX
    sayHello() {
        return "\n Hello admin, " + this.userName;
    }
}
// create an object admin from the class Admin
const admin = new Admin("Balthazar"); 
console.log(admin.sayHello());  // Hello admin, Balthazar
console.log(admin.expressYourRole());  // Admin