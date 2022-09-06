class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name
        this. health = health
        this.speed = speed
        this.strength = strength
    }
    sayName(){
        console.log(`${this.name}`)
    }
    showStats(){
        console.log(this)
    }
    drinkSake(){
        this.health += 10
        console.log("Tasty")
    }
}
// const connor = new Ninja("connor", 100)
// connor.sayName()
// connor.drinkSake()
// connor.showStats()

class Sensei extends Ninja{
    constructor(name, health =100, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength);
        this.wisdom = wisdom
    }
    speakWisdom(){
        this.drinkSake();
        console.log("wisdom")
    }
    drinkSake(){
        
    }
}

const sensei1 = new Sensei("Connor", 50);
sensei1.sayName();
sensei1.speakWisdom();
sensei1.showStats();
