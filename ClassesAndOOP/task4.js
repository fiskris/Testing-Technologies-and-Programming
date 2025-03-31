/*create a User class that commits the classes that inherit from it to calculate the number of scores 
that a user has depending on the number of articles that he has authored or edited.

On the basis of the User class, we are going to create the Author and Editor classes, 
and both will calculate the number of scores with the method calcScores(), 
although the calculated value will differ between the two classes.
This is the skeleton for the User class:
Example:
class User {
  constructor() {
    this.numberOfArticles = 0;
  }
}
  }
1. Add to the User class the methods to set and get the number of articles:
    setNumberOfArticles(int numberOfArticles)
    getNumberOfArticles() 
2. Add to the User class a third method: 
    calcScores(), that performs the scores calculations separately for each class.
3. Create an Author class that inherits from the User class. 
In the Author create a calcScores() method that returns the number of scores from the following 
calculation: 
    numberOfArticles * 10 + 20
4. Create an Editor class that inherits from the User class. 
In the Editor create a calcScores() method that returns the number of scores from the following
 calculation: 
    numberOfArticles * 6 + 15
5. Create an object, author, from the Author class, set the number of articles to 8, 
and print the scores that the author gained.
6. Create another object, editor, from the Editor class, set the number of articles to 15, 
and print the scores that the editor gained.

*/
// define the class User
class User {
    // create the constructor
    constructor() {
        this.numberOfArticles = 0;
    }
    // create the setter method
    setNumberOfArticles(numberOfArticles) {
        this.numberOfArticles = numberOfArticles;
    }
    // create the getter method
    getNumberOfArticles() {
        return this.numberOfArticles;
    }
    // create the method that calculates the scores
    calcScores() {
       // return this.numberOfArticles;
        //throw error message
        throw new Error("Method calcScores()must be implemented in the child class");
    }
}
// define the class Author that inherits from User
class Author extends User {
    // create the constructor
    constructor() {
        super();
    }
    // create the method that calculates the scores
    calcScores() {
        return this.numberOfArticles * 10 + 20;
    }
}
// define the class Editor that inherits from User
class Editor extends User {
    // create the constructor
    constructor() {
        super();
    }
    // create the method that calculates the scores
    calcScores() {
        return this.numberOfArticles * 6 + 15;
    }
}
// create the object author from the class Author
const author = new Author();
author.setNumberOfArticles(8);  // setting the number of articles to 8
console.log(author.calcScores());  // print the scores that the author gained
// create the object editor from the class Editor
const editor = new Editor();   
editor.setNumberOfArticles(15);  // setting the number of articles to 15
console.log(editor.calcScores());  // print the scores that the editor gained