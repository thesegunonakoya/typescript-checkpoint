import { Vehicle } from "./Vehicle";

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// Create an instance of Car and call start
const myCar = new Car("Toyota", "Corolla", 2022);
myCar.start();
