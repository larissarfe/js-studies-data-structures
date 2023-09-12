'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    // WE COULD ALSO PUT DEFAULT VALUES HERE EX startIndex = 1, mainIndex = 0
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// calling the function and passing it an object of options
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// WE ONLY PASSED ONE OBJECT INTO THIS FUNCTION -> WE DID NOT PASS 4 ARGUMENTS - IT'S REALLY JUST ONE ARGUMENT, ONE OBJECT - AS SOON AS WE RECIEVE THE OBJECT WE TO IMMEDIATELY DESTRUCTURING
// THAT'S WHY ({ starterIndex, mainIndex, time, address }) - NEED TO BE EXACTLY THE NAMES THAT WE HAVE DOWN HERE

//THE PROPERTIES IN THE INDEX DO NOT HAVE TO MATCH THE ORDER IN WHICH WE DO DESTRUCTURING IN THE METHOD'S ARGUMENT

////// OBJECT DESTRUCTURING:
// Since in an object the order of elements does not matter - WE DON'T NEED TO MANUALLY SKIP ELEMENTS LIKE WE DO WITH ARRAYS

const { name, openingHours, categories } = restaurant; // this will crate three new variables based on this restaurant object

console.log(name, openingHours, categories);

// But what if we wanted the variable names to be different from the property names?

// like this - but we still need to reference the property names like before, otherwise JS has no way ok knowing what we actually want

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// It can be useful to have default values for the case that we're trying to read a property that does not exist on the object

// THE DEFAULT VALUE WILL BE AN EMPTY ARRAY

const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

// THE DEFAULT VALUE WILL NOT BE APPLIED TO THE PROPERTIES THAT EXIST

// MUTATING VARIABLES WHILE DESTRUCTURING OBJECTS:

// I need to have the variables I want to mutate declared first
let a = 111;
let b = 999;

const obj = {
  a: 23,
  b: 7,
  c: 14,
};

({ a, b } = obj); // I need to wrap the curly braces with parenthesis
console.log(a, b);

// NESTED OBJECTS: for ex openingHours - friday is an object inside of an object

const { fri } = openingHours;
const { sat } = openingHours;
console.log(fri);
console.log(sat);

// but we want it to create too variables open and close:

const {
  fri: { open: o, close: c },
} = openingHours; // colon and the exact property name of the inner object
console.log(o, c);

// Many times in JS we have functions with a lot of parameters - but then it can be hard to know the order of parameters for someone who is using this function

// And so instead of defining  the parameters manually, WE CAN JUST PASS AN OBJECT INTO THE FUNCTION AS AN ARGUMENT AND THE FUNCTION WILL IMMEDIATLY DESTRUCTURE THAT OBJECT

/*
// if we wanted to retrieve each one into its own variables without destructuring:

const array = [2, 3, 4];

const a = array[0];
const b = array[1];
const c = array[2];

console.log(a, b, c);

// Now with desctructuring we could declare all the variables at the same time:

const [x, y, z] = array;
console.log(x, y, z);

// even though we did desctructuring (UNPACKING) the original array IS NOT AFFECTED

// WE DO NOT NEED TO TAKE ALL THE ELEMENTS OF THE ARRAY:

//const [first, second] = restaurant.categories;

//console.log(first, second);

// IF I WANT TO SKIP AN ELEMENT:

let [main, , secondary] = restaurant.categories;
// SO THE SECOND WILL BE THE THIRD

console.log(main, secondary);

// so like this we do not need to create a variable for all the stuff we might not even need.

// SWITCHING VARIABLES

[main, secondary] = [secondary, main];

console.log(main, secondary);

// another trick with destructuring is that we can have a function to return an array - and then we can immediately destruct the result into different variables
// so this basically allows us to return multiple values from a function

console.log(restaurant.order(2, 0));

// RECEIVE 2 RETURN VALUES FROM A FUNCTION - IMMEDIATELY CREATING TWO VARIABLES OUT OF ONE FUNCTION CALL
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Now with a nested array: destructuring inside of destructuring;

const nested = [2, 4, [5, 6]];

// selecting just the 2 and [5, 6]
//const [i, ,  j] = nested;
//console.log(i, j);

// what if we want all the individual values? Then we would essentially have to do destructuring inside of destructuring:

const [i, , [j, k]] = nested;
console.log(i, j, k);

// we can also set default values for the variables when we are extracting them - that's useful for the case that we don't know the length of the array;

// so if we have an array that is shorter than we might think then we might try to unpack the array in positions that don't even exist

// defaut values:

//const [p, q, r] = [8, 9];

//console.log(p, q, r); // the second element that don't exist is undefined

// so how to set default values?
const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r); // ----- OUTPUT: 8, 9, 1

// IF WE WANT TO REMOVE THE ELEMENT 9 THAN Q WILL ALSO BECOME ONE

// ONLY THE VALUES THAT WERE UNDEFINED BEFORE WILL BECOME ONE WHEN WE SET DEFAULT VALUES */
