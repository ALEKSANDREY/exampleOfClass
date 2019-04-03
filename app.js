<script>

class Vehicle {
  constructor(make,model,year,color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color
  }
  getThisMake(){
    return this.make;
  }
  getThisModel(){
    return this.model;
  }
  getThisYear(){
    return this.year;
  }
  setThisColor(data){
    this.color = data;
  }
  getThisColor(){
    return this.color;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, tankSize, remoteSpeed,trunkSize) {
    super(make, model, year, color);
    this.tankSize = tankSize;
    this.remoteSpeed = remoteSpeed;
    this.trunkSize = trunkSize;
  }
  drive(){
    console.log('my car drives');
  }
  setColor(data){
    this.color = data;
  }
  getColor(){
    return this.color;
  }
}

class ElectricCar extends Vehicle {
  constructor(make, model, year, color, batterySize, currentCharge, batteryAge) {
    super(make, model, year, color);
    this.batterySize = batterySize;
    this.currentCharge = currentCharge;
    this.batteryAge = batteryAge;
  }
  setBatterySize(data){
    this.batterySize = data;
  }
  getBatterySize(){
    return this.batterySize;
  }
}

class Truck extends Vehicle {
  constructor(make, model, year, color, tankSize, fuelType, topSpeed,mpg){

    super(make, model, year, color);
    this.tankSizeGallons = tankSize;
    this.currentFuelGallons = tankSize;
    this.fuelType = 'diesel';
    this.topSpeedMPH = topSpeed;
    this.mpg = mpg;
  }

  getTankSizeGallons(){
    return this.tankSizeGallons;
  }
  getCurrentFuelGallons(){
    return this.currentFuelGallons;
  }
  setTankSizeGallons(data){
    this.tankSizeGallons = data;
  }
  getTankSizeGallons(){
    return this.tankSizeGallons;
  }
  setFuelTyoe(data){
    this.fuelType  = data;
  }
  getFuelType(){
    return this.fuelType;
  }
  setTopSpeedMPH(data){
    this.topSpeedMPH = data;
  }
  getTopSpeedMPH(){
    return this.topSpeedMPH;
  }
  getMPG() {
    return this.mpg;
  }

  refuelGallons(gallons){

    let totalFuel = this.currentFuelGallons + gallons;
    if (totalFuel <= this.tankSizeGallons) {


    console.log(this.make + ' ' + this.model + ' was refueled with ' + gallons + 'gallons');

    this.currentFuelGallons = this.currentFuelGallons + gallons;

    console.log(this.make + ' ' + this.model + ' now has a total of ' +   this.currentFuelGallons + 'gallons');
    }else{
    console.log('not enough room in the tank');

    let freeSpace = this.tankSizeGallons = this.currentFuelGallons;
    console.log('you have enough room to add' + freeSpace + ' gallons.');
    }
  }

  drive(distance,speed){
    let totalDistance = this.currentFuelGallons - 5 * this.mpg;

    if(distance <= totalDistance){

      if(speed <= this.topSpeedMPH){
        this.currentFuelGallons = this.currentFuelGallons - (distance/ this.mpg);
        console.log('this truck drove for ' + distance + ' miles.');
        console.log('this truck has ' + this.currentFuelGallons + ' gallons left.');
        this.scenario();

     } else{
        console.log('this truck cvan not that fast. THis trucks top speed is' + this.topSpeedMPH);
      }
    }else{
      console.log('the truck can not go that far. It can only go a total of  ' + totalDistance + 'miles before refueling');
    }

  }

  scenario() {
    let number = Math.random();

    let incidents = [
      'your engine blew',
      'your tire blew out',
      'a coyote crosses the path.',
      'you get a DUI',
      'a snowstorm approaches',
      'you crash into a light pole'
    ];

    if (number > .2){
      console.log('congrats nun happed');
    }else{
      let incidentNumber = Math.floor (Math.random() * 6);
      console.log(incidents[incidentNumber]);
      }

  }

}
//variables defined
let semiTruck = new Truck('kenworth','T500',2019,'black',100,'diesel',75,10);
semiTruck.drive(50,40)

</script>
O
