class Athlete {
    constructor(name, country, sport, awards){
        this.name = name;
        this.country = country;
        this.sport = sport;
        this.awards = awards;
        this.energyLevel = 100;
        this.salary = 10000;
    }
    sayName(){
        console.log("Hi my name is "+this.name)
    }
    displayStatus(){
        console.log(`${this.name}'s energy level is ${this.energyLevel} and they have ${this.awards}`)
    }

    playSports(){
        this.energyLevel -= 75;
    }
    takeIceBath(){
        this.energyLevel = 100;
    }
}
let mack = new Athlete("Brittney Spears", "USA", "Singer", 2);

mack.sayName();
mack.playSports();
mack.displayStatus();
mack.takeIceBath();
mack.displayStatus();

class Swimmer extends Athlete{
    constructor(name, country, lapSpeed){
        super(name, country, "Swimming")
        this.lapSpeed = lapSpeed
    }
    swim(){
        console.log("swimming");
        this.energyLevel -= 10;
    }
}

let s1 = new Swimmer("Michael Phelps", "USA", 9)

s1.displayStatus();
s1.swim();
s1.displayStatus();