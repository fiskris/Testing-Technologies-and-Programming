/*
    Write the class User and add the properties.
    Add the method that says hello.
    Create the first instance, and call it user1. 
    Use the new keyword to create an object from the class.

    Set the values for the first and last name to user1.

    firstName = 'John'
    lastName = 'Doe'

    Get the user first and last name, and print it to the screen.

    Use the hello() method with the first and last name variables
     in order to say hello to the user:

    Expected result:
    hello, John Doe

    Add another object, call it user2, give it a first name of 'Jane'
     and last name of 'Doe', then say hello to the user.

    Expected result:
    hello, John Doe
    hello, Jane Doe

*/
// define the class User
class User {
// create the constructor and add the properties
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // create the method that says hello and print the full name
    hello() {
        console.log(`hello, ${this.firstName} ${this.lastName}`);
    }
}
// create the first instance as user1
const user1 = new User('John', 'Doe');
const user2 = new User('Jane', 'Doe');
console.log(user1.firstName + " " + user1.lastName);  // John Doe
user1.hello();  // hello, John Doe
user2.hello();  // hello, Jane Doe