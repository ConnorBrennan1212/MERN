class Developer {
    constructor(name, health = 100, braincell = 1){
        this.name = name
        this.languages = ["python", "Mern", "java", "C#"]
        this.health = health
        this.braincell = braincell
    }
    sleep(){
        console.log("zzzzzzz")
        this.braincell += 5
        this.health += 10
        return this;
    }
    completeProject(title){
        console.log(`${this.name} completed a project named ${title}`)
        this.health -=15
        this.braincell +=2
        return this;
    }
}
const theo = new Developer("Theo", 150, 5)

theo.sleep()
theo.completeProject("MERN project")
console.log(theo)