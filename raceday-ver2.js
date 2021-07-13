function Racer(racerName = Math.floor(Math.random()*4), racerAge = Math.floor(Math.random()*2), runTime = Math.floor(Math.random()*2), raceNumber = Math.floor(Math.random() * 1000)) {
    racerName;
    racerAge;
    runTime;
    raceNumber;
    this.racerName = () => `${racerName}`;
    this.racerAge = () => `${racerAge}`;
    this.runTime = () => `${runTime}`;
    this.raceNumber = () => `${raceNumber}`   
};

let newRacer = new Racer();

if (`${Number(newRacer.racerName())}` == 0) {
    newRacer = new Racer(String(`Joe`));
} else if (`${Number(newRacer.racerName())}` == 1) {
    newRacer = new Racer(String(`Sally`));
} else if (`${Number(newRacer.racerName())}` == 2) {
    newRacer = new Racer(String(`Molly`));
} else if (`${Number(newRacer.racerName())}` == 3) {
    newRacer = new Racer(String(`Tommy`));
} else {
    console.log(`Somthing Broke`);
};

if (`${Number(newRacer.runTime())}` >= 1 && `${Number(newRacer.racerAge())}` >= 1) {
    console.log(`Hello ${newRacer.racerName()}, your early registration as adults over the age of 18 earns you a start time of 9:30 am. Your race number is ${Number(newRacer.raceNumber())+999}.`);
    console.log(`**Race Record** Name: ${newRacer.racerName()}| Age: 36| regTime: Early| RaceNumber: ${Number(newRacer.raceNumber())+999} `);
} else if (`${Number(newRacer.runTime())}` == 0 && `${Number(newRacer.racerAge())}` >= 1) {
    console.log(`Hello ${newRacer.racerName()}, your late registration as adults over the age of 18 earns you a start time of 11:00 am. Your race number is ${Number(newRacer.raceNumber())}.`);
    console.log(`**Race Record** Name: ${newRacer.racerName()}| Age: 18| regTime: Late| RaceNumber: ${Number(newRacer.raceNumber())} `);
} else if (`${Number(newRacer.racerAge())}` == 0) {
    console.log(`Hello ${newRacer.racerName()}, as a younth under the age of 18 your start time is at 12:30pm. Your race number is ${Number(newRacer.raceNumber())}.`);
    console.log(`**Race Record** Name: ${newRacer.racerName()}| Age: 15| RaceNumber: ${Number(newRacer.raceNumber())} `);
} else {
    console.log(`Something Broke`);
};
