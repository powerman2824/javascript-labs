function Racer(racerName, racerAge, runTime = Math.floor(Math.random()*2), raceNumber = Math.floor(Math.random() * 1000)) {
    racerName;
    racerAge;
    runTime;
    raceNumber;
    this.racerName = () => `${racerName}`;
    this.racerAge = () => `${racerAge}`;
    this.runTime = () => `${runTime}`;
    this.raceNumber = () => `${raceNumber}`   
};
// Change the name and age of racer. 
let newRacer = new Racer("Joe", "17"); 

if (`${Number(newRacer.runTime())}` >= 1 && `${Number(newRacer.racerAge())}` >= 18) {
    console.log(`Hello ${newRacer.racerName()}, your early registration as adults over the age of 18 earns you a start time of 9:30 am. Your race number is ${Number(newRacer.raceNumber())+999}.`);
} else if (`${Number(newRacer.runTime())}` == 0 && `${Number(newRacer.racerAge())}` >= 18) {
    console.log(`Hello ${newRacer.racerName()}, your late registration as adults over the age of 18 earns you a start time of 11:00 am. Your race number is ${Number(newRacer.raceNumber())}.`);
} else if (`${Number(newRacer.racerAge())}` <= 18) {
    console.log(`Hello ${newRacer.racerName()}, as a younth under the age of 18 your start time is at 12:30pm. Your race number is ${Number(newRacer.raceNumber())}.`)
} else {
    console.log(`Something Broke`);
};
