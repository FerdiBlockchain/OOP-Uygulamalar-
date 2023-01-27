// Car -> Electrical Car -> Self Driving Car

class Car {
  constructor(range, model) {
    this.range = range;
    this.model = model;
  }

  getModelRange() {
    return this.range + " " + this.model;
  }
}

class ElectricCar extends Car {
  constructor(range, model, battery) {
    super(range, model);
    this.battery = battery;
  }

  charge() {
    return this.model + " is charging...";
  }
}

class SelfDrivingCar extends ElectricCar {
  constructor(range, model, battery, auto) {
    super(range, model, battery);
    this.auto = auto;
  }

  drive() {
    return this.model + " AI is driving";
  }
}

let mercedes = new SelfDrivingCar(0, "Mercedes", 100, "Autopilot");

console.log(mercedes.getModelRange());

console.log(mercedes.charge());

console.log(mercedes.drive());

// Public, Private, Protected

class Person {
  #name = ""; // #name; <-- Bu şekil de yeterli, hata vermez.

  constructor(name, age) {
    this.#name = name; // Private
    this._age = age; // Public
  }

  get age(){
    return this._age;
  }

  set age(newAge){
    if(newAge < 0){ // Protected Logic 
        newAge = 0;
    }
    this._age = newAge;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }
}

let p = new Person("John", 20);

console.log(p.name);

p.name = "Emre";
console.log(p.name);

p.age = -20;
console.log(p.age);


