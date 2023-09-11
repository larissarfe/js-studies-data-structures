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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

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

// ONLY THE VALUES THAT WERE UNDEFINED BEFORE WILL BECOME ONE WHEN WE SET DEFAULT VALUES
