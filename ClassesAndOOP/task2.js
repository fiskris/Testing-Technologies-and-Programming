//declare class User
    class User {
    //create constructor and add properties
    constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
    //create getter for first and last name
    get firstName() {
      return this._firstName;
    }
    get lastName() {
      return this._lastName;
    }
    //create setter for first and last name
    set firstName(firstName) {
      this._firstName = firstName;
    }   
    set lastName(lastName) {
      this._lastName = lastName;
    }
    //create method that says hello
    hello() {
      return "\n Hello World!";
    }  
  }
    //create first instance as user
    const user = new User;
    //set the values for the first and last name to user
    user.firstName = 'firstName';
    user.lastName = 'lastName';
    console.log(user.hello());  // Hello World!
    console.log("My name is " + user.firstName + " " + user.lastName + "\n");  // firstName lastName