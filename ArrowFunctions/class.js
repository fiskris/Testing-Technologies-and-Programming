class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
        this.year = year;
    }  
    drive() {
      console.log(" I am driving a " + this.make + " " + this.model + " " + this.year);
    }
  }
  const myToyota = new Car('Toyota', 'C-HR', 2020);
  const myFord = new Car('Ford', 'Focus', 2019);
  const carArrey = [];
  carArrey.push(myToyota);
  carArrey.push(myFord);  

  carArrey[0].drive();
  console.log(carArrey[1]);