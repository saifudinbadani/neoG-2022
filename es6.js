// Convert to ES6


var aloo = 1;
if (aloo == 1) {
   var a = 2;
   console.log(a);
}
console.log(aloo);

// 2
// var multiply = function(x, y) {
//     return x * y;
//   };

const multiply = (x,y) => x*y

console.log(multiply(2,3))


//3
var customer = {
   name: "Bhaalo"
 };
 var card = {
   amount: 20,
   product: "Aaalo",
   unitprice: 50
 };
 var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"


 let message = `Hello ${customer.name} wants to buy ${card.amount} ${card.product} for price of ${card.unitprice} per peice.`

 //4
 var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];
// CEO = Neog[0],
// Mentor = Neog[2];

let [Ceo, ,Mentor, ...rest] = Neog;



var Aaloo = "Tasty";
var Bhaloo = "Cute";
let Obj = {
  Aaloo,
  Bhaloo
};
console.log(obj.aloo);


var a = 5;
var b = 10;
console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));
console.log(`Fifteen is ${a+b} and not ${2*a+b}.`)

// Somewhat complicated
// using arrow functions and shorthand property
var arithmeticsObj = {
   sum: function sum(num1, num2) {
     return num1 + num2;
   },
   multiply: function multiply(num1, num2) {
     return num1 * num2;
   }
 };

 const sum = (num1, num2) => num1 + num2
 const multiply = (num1, num2) => num1 * num2

 const arithmeticsObj = {
    sum,
    multiply
 }


 // 2

var avengers = {
  operation: "Assemble",
  members: [
    {
      ironMan: "Tony Stark"
    },
    {
      captainAmerica: "Steve Rogers"
    },
    {
      blackWidow: "Natasha Romanoff"
    }
  ]
};
// var operation = avengers.operation,
//   members = avengers.members;

const {operation, members} = avengers;

//3

const packItEs6 = (...args) => console.log(args)

packItEs6(1,2,3,5,5)

function packIt(){
   console.log(arguments)
}

packIt(1,2,3,5,5)

//Guess the output

const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
console.log(Hello, Welcome)

