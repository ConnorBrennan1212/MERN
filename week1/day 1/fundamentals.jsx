//Hoisting
console.log(dog)
//this first log will give undefined as the var is defined after the function is called

var dog = "Petey"
console.log(dog)

//const and let-----------------------

const food = "duck"
console.log(food)


const skills = ["debugging", "sleeping", "making coffee"]
skills.push("tetris")
console.log(skills)

//scope-----------------------
let myName = "Reuben"
function changeName() {
    let myName = "Pepper";
    myName = "Petey";
    console.log(myName);

}
console.log(myName);
changeName();
console.log(myName);

// destructuring--------------------------
const post = {
    title: "first day in Mern",
    viewers: 1000,
    likes: 500,
    description: "An aswesome day with MERN. It works",
    hashtags: ["excellent", "great", "fun"],
}
console.log(post.title)
const {title: newTitle} = post
console.log(post)


//rest and spread---------------------

const trips = ["Japan", "Spain", "France", "Norway"];
console.log("trips")
console.log(trips)

const tripsCopy = [...trips]
console.log("tripsCopy")
console.log(tripsCopy)

tripsCopy.push("Costa Rica")
console.log("tripscopy + costa rica")
console.log(tripsCopy)
console.log("trips original")
console.log(trips)

const bigTrip = [...trips, "Thailand"]
console.log("big trip")
console.log(bigTrip)

// arrow functions -----------------------
function printHello() {
    console.log("Hello")
}
printHello();

const printHello2 = () => {
    console.log("Hello ES6");
}
printHello2();
//shorten this with arrow
function changePrice(price, discount){
    return price * discount
}
console.log(changePrice(100,0.9))
//arrow
const changePrice2 = (price, discount) => {
    return price * discount;
}
console.log(changePrice2(100,.9))
//shortest
const changePrice3 = (price, discount) => price * discount;
console.log(changePrice3(100,.9))

//ternary operator--------------------------------------------
//takes three operands: condition followed by a ?, then an expression to execute if the condition is true followed by colon
//and finally the expression is to execute if the condition is false. a short if statement

//if statement
const rating = 8;
if(rating >7){
    console.log("Yes Im great")
}else{
    console.log("No i am not great")
}

//condition ? true : false

(rating>7)?console.log("true"): console.log("false")