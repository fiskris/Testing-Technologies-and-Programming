 //Activity 3.1
 var greet = name => console.log("Hi " + name);
 
 greet("John"); //"Hi John!"
 greet("James"); //"Hi James!"

 //Activity 3.2
 
  var isEven = num => num % 2 === 0;
  console.log(isEven(22)); //true
  console.log(isEven(55)); //false

//Activity 3.3
    /*
    function counterFunc(counter) {
     if (counter > 100) {
      counter = 0;
    } else {
     counter++;
     }
  
     return counter;
    }
    */
    var counterFunc = counter => {
        if (counter > 100) {
          counter = 0;
        } 
        else {
          counter++;
        }        
        return counter;
      }

    console.log(counterFunc(10)); //11
    console.log(counterFunc(100)); //101
    console.log(counterFunc(101)); //0

//Activity 3.4
    /*
    function nameAge(name, age) {
        console.log("Hello " + name);
        console.log("You are " + age + " years old");
    }
    */
  var nameAge = (name, age) => {
    console.log("Hello " + name);
    console.log("You are " + age + " years old");
  }

  nameAge("Liz", 33);

//Activity 3.5
    /*
    function printOnly() {
    console.log("printing");
    }
    */
 var printOnly = () => console.log("printing");

printOnly(); //printing

//Activity 3.6
    /*
    function sum(num1, num2) {
        return num1 + num2
    }
    */
var sum = (num1, num2) => num1 + num2;

console.log(sum(55, 66)); 
