/*
 create an abstract User class and two child classes 
 (Admin and Viewer classes) that inherit from the abstract class.

1. Create an abstract class with the name of User 
    Add to the class, a property with the name of username. 
    Add to the class, an abstract method with the name of stateYourRole().
    Add to the class, the setter and getter methods to set and get the username.
2. Create an Admin class that inherits the User abstract class: 
    Add to the class a method stateYourRole() and let it return the string "admin".
3. Create another class, Viewer that inherits the User abstract class: 
    Add to the class a method stateYourRole() and let it return the string "viewer".
4. Create an object, admin, from the Admin class, set the username to "Balthazar", 
    and make it return the string "admin".
5. Create an object, viewer, from the Viewer class, set the username to "Melchior", 
    and make it return the string "viewer".
*/
// define the abstract class User
class User {
    // create the constructor
    constructor() {
        if (this.constructor === User) {
            throw new TypeError("Cannot construct Abstract instances directly.");
          }
        // initialize the userName property
        this._userName = "";
    }
    // create the setter method
    set userName(userName) {
        this._userName = userName;
    }
    // create the getter method
    get userName() {
        return this._userName;
    }
    // create the abstract method
    stateYourRole() {
        throw new Error("Do not call abstract method stateYourRole from child.");
    }
}
// define the class Admin that inherits from User
class Admin extends User {
    // create the constructor
    constructor() {
        super();
    }
    // create the method that returns the string "admin"
    stateYourRole() {
        return "admin";
    }
}
// define the class Viewer that inherits from User
class Viewer extends User {
    // create the constructor
    constructor() {
        super();
    }
    // create the method that returns the string "viewer"
    stateYourRole() {
        return "viewer";
    }
}

// create an object admin from the class Admin
const admin = new Admin(); 
admin.userName = "Balthazar";
console.log(admin.stateYourRole());  // admin

// create an object viewer from the class Viewer
const viewer = new Viewer();
viewer.userName = "Melchior";
console.log(viewer.stateYourRole());  // viewer