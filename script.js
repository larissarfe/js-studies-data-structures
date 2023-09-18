'use strict';
/*
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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    `Here is your delicious pizza with ${mainIngredient} and with extra ${otherIngredient}`;
    console.log(
      `Here is your delicious pizza with ${mainIngredient} and with extra ${otherIngredient}`
    );
    //console.log(otherIngredient);
  },
};*/

// -------------------------------------- CODING CHALLENGE
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...players) {
    console.log(...players);
    console.log(`${players.length} goals were scored`);
  },
};

game.printGoals('Davis', 'Miller', 'Lewandowski', 'Kimmich');
game.printGoals('Davis', 'Miller');
game.printGoals(...game.scored);
// 1- Create one player array for each team (variables 'players1' and 'players2'):

const [players1, []] = game.players;
console.log(players1);

const [, players2] = game.players;

console.log(players2);

// 2- The first player in any player array is the goalkeeper and the others are field players.
// For bayern munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') for field players with all the remaining 10 field players

const gkTeam1 = players1[0];
console.log(gkTeam1);

const [a, ...fieldPlayers1] = players1;

console.log(fieldPlayers1);

const gkTeam2 = players2[0];
console.log(gkTeam2);
const [b, ...fieldPlayers2] = players2;

console.log(fieldPlayers2);

// 3- create an array 'allPlayers' containing all players of both teams (22 players)

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4- during the game, team1  used 3 substitute players. So create a new array ('playersFinal') containing all the original team1 players plus 'Thiago', 'Coutinho', 'Perisic'

const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

console.log(playersFinal);

// 5- based on the game.odds object, create one variable for each odd (called 'team1', 'draw', 'team2')

const { team1, x: draw, team2 } = game.odds;

console.log(team1, draw, team2);

// 6- write a function ('printGoals') that receives an arbitrary number of player names (NOT AN ARRAY) and print each of them in the console
// along with the number of goals who were scored (number of player names passed in)

// 7- Print to the console which team is more likely to win based on the odds variable WITHOUT if/else statement or ternary operator
// the team with a lowe odd is more likely to win

// the and operator
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// we want the evaluation console.log to be printed if the result of the operation before is true

// the or operator short circuits if the first value is true but that's not what we want because if so the cl won't be evaluated

/*

// ---> Logical ASSIGNMENT OPERATOR:

const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Gioovanni Rossi',
};

//  set a default number of guests for all the restaurant objects that do not have that property
// doing it with the  || operator: in the or operator if the first value is truthy it will immediately return it

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

// =================================> THE OR ASSIGNMENT OPERATOR

// Writing the same thing with the || assignment operator

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

// THIS OPERATOR BASICALLY ASSIGNS A VALUE TO A VARIABLE IF THAT VARIABLE IS CURRENTLY FALSY

// so if we set the number of guests to zero it is a falsy value so the or operator will assign the value of 10

// SO WHAT IF WE DO NOT WANT ANOTHER VALUE TO BE ASSIGNED TO OUR VARIABLE? SO WE USE THE NULLISH OPERATOR (null or undefined)

rest1.numGuests ??= 10;
rest2.numbGuests ??= 10;

console.log(rest1);
console.log(rest2);

// NOW WHENEVER THE RESTAURANT HAS A OWNER, WE WANT TO REPLACE IT WITH ANONYMOUS

//rest2.owner = rest2.owner && '<ANONYMOUS>'; // THE && OPERATOR SHORT CURCUTS WHEN THE FIRST VALUE IS FALSY AND THEN IMMEDIATELY RETURNS THAT FALSY VALUE
// SO IF IT'S TRUTHY THE SECOND VALUE WILL BE EVALUATED AND RETURNED

//rest1.owner = rest1.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>'; // now it doesn't show undefined anymore
rest2.owner &&= '<ANONYMOUS>';

// WHAT THE && ASSIGNMENT OPERATOR DOES IS TO ASSIGN A VALUE TO A VARIABLE IF IT IS CURRENTLY TRUTHY
// IF WE NEED TO ASSIGN A VALUE TO A VARIABLE THAT IS ALREADY DEFINED WE CAN USE THIS && ASSIGNMENT OPERATOR
console.log(rest2);
console.log(rest1);

/*

                    // ===================> NULLISH OPERATOR 
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//                          ---------> SHORT CIRCUITING

// && AND || (OR) - The result of || opperator doesn't have to be a boolean

// 3 PROPERTIES ABOUT LOGICAL OPERATORS: A) They can use any data type, B) They can return any data type, C) They do something called short circuting
// short circuiting or short circuting evaluation

// SHORT CIRCUTING: For the || it means that if the first value is a truthy value it will immediately return that first value - the other value wont' even be evaluated

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0); // 0 FALSY VALUE
console.log(undefined || null); // UNDEFINED IS A FALSY VALUE - NULL IS ALSO A FALSY VALUE

// checking if the object restaurant has a property called numGuests, if not set a default value
// if it does not exists it will be undefined so therefore 10 will be the default value

//restaurant.numGuests = 23;
//const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
//console.log(guests1);

// if we already have this property with a value, it will return, in this case 23

//const guests2 = restaurant.numGuests || 10;
//console.log(guests2);
// BUT ANY OF THESES SOLUTIONS WILL WORK IF THE NUMBER OF GUESTS IS ZERO

// SHORT CIRCUiTING IS A BETTER WAY TO SET DEFAULT VALUES

// In the or operation the result is true if AT LEAST ONE operand is true

//                    ------------------- THE AND OPERATOR &&:

// When it comes to short circuit evaluation - THE AND OPERATOR WORKS IN THE EXACT OPPOSITE WAY OF THE OR OPERATOR

console.log(0 && 'Jonas'); // = 0
console.log(7 && 'Jonas'); // IF IT IS TRUTHY THE EVELUATION CONTINUES AND THE LAST VALUE WILL BE RETURNED
console.log(7 && null && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');
// the and operator is only true if all operands (values) are true - so if the first value is false IT MEANS THAT THE ENTIRE RESULT OF THE AND OPERATION WILL ALREADY BE FALSE ANYWAY

// IT MEANS THAT THE AND OPERATOR SHORT CIRCUITS WHEN THE FIRST VALUE IS FALSY!!!!!!!!!

//if (restaurant.orderPizza) {
//restaurant.orderPizza('cheese', 'broccoli');
//}

// WE COULD AVOID THE IF STATEMENT WHERE ALL WE WANT TO DO IS TO CHECK IF A CERTAIN PROPERTY OR VALUE ACTUALLY EXISTS

// WE COULD DO THE SAME THING WITH THE && OPERATOR:

restaurant.orderPizza && restaurant.orderPizza('cheese');

// SO IF THE PROPERTY EXISTS WE CALL THE FUNCTION

// ALL IN ALL =====> THE OR OPERATOR WILL RETURN THE FIRST TRUTHY VALUE OFF ALL THE OPERANDS OR SIMPLY THE LAST VALUE IF ALL OF THEM ARE FALSY
// THE AND OPERATOR WILL RETURN THE FIRST FALSY VALUE OFF ALL THE OPERANDS OR SIMPLY THE LAST VALUE IF ALL OF THEM ARE TRUTHY

/*

// ==============================> THE REST PATTERN

// uses the exact same syntax - HOWEVER, TO COLLECT MULTIPLE ELEMENTS AND CONDENSE THEM INTO AN ARRAY

// THE OPOSSITE OF SPREAD - THE SPREAD OPERATOR IS TO UNPACK AN ARRAY WHILE REST IS TO PACK ELEMENTS INTO AN ARRAY

// WE KNOW WE ARE USING AN SPREAD OPERATOR BECAUSE WE ARE USING IT ON THE RIGHT HAND SIGHT OF THE = SIGN

// spread before the =

// THE REST PATTERN CAN BE USED WHERE WE WOULD WRITE VARIABLE NAMES SEPARATED BY COMMAS AND NOT VALUES SEPARATED BY COMMAS

// ========================== > 1) DESTRUCTURING:

const arr = [1, 2, ...[3, 4]];

// REST ON THE LEFT OF THE =
// the rest pattern basically collects the elements that are unused in the destructuring assignment

const [a, b, ...others] = [1, 2, 3, 4, 5]; // the remaining elements of the array will be put in a new array called others

console.log(a, b, others);

// USING BOTH THE SPREAD OPERATOR AND THE REST PATTERN:

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // the other food that a didn't put into variables are in the array called otherFood

// the rest syntax collects all the array elements after the last variable - IT DOES NOT INCLUDED ANY SKIPED ELEMENTS

// NOW WITH OBJECTS: THE REST OF THE ELEMENTS WILL BE INSIDE OF AN OBJECT NOT INTO A NEW ARRAY

const { sat, ...weekDays } = restaurant.openingHours;

console.log(weekDays);

// =========================================> 2) FUNCTIONS: somar todos os argumentos independente do numero de argumentos passados para a função
// the rest syntax will take all multiple numbers and packs them all into one array
const add = function (...numbers) {
  let sum = 0; // is going to be accumulating;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i]; // we go in this loop as long as the counter i is bellow the length of the array
  // we add the current number to the sum
  console.log(sum);
};

add(2, 3); // numbers is an array because the function will take my arguments an turn it into an array the rest syntax
add(1, 4, 8, 9);
add(7, 5, 9, 7, 4, 1);

const x = [23, 5, 7];
add(...x); //here we use the spread operator to unpack the numbers from the array

restaurant.orderPizza('cheese', 'bacon', 'pineapple', 'mayo');


/*

//================================> SPREAD OPERATOR

// we want to create a new array based on this one - but with some new elements at the beginning:

const arr = [7, 8, 9];

// doing manually:

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

console.log(badNewArr);
// But now since ES6 we can do it in a much better way: using the spread operator ...

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // HERE IT SHOWS ALL THE ELEMENTS INDIVIDUALLY

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // HERE WE ARE CREATING A COMPLETELY NEW ARRAY

console.log(newMenu);

// TO IMPORTANT USE CASES OF THE SPREAD OPERATOR: CREATE SHALLOW COPIES OF ARRAYS, AND TO MERGE TWO ARRAYS TOGETHER;

const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy

// Join two arrays together:

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// we can use the spread operator on a string as well
// so I want to creat an array which contains all the individual letters plus some other elements

const str = 'Jonas';
const letters = [...str, '', 'S.'];

// so we use the spread operator only on an array or when we passa values into a function - WE NEED TO USE IT IN PLACES WHERE YOU EXPECT MULTIPLES ELEMENTS
// SEPARATED BY A COMMA

console.log(letters);

//------> EVER SINCE 2018 THE SPREAD OPERATOR ALSO WORKS FOR OBJECTS EVEN THOUGH THEY'RE NOT ITERABLE

// Create a new restaurant object with all the data from the original one plus some aditional data

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' }; // the order doesn't really matter. the spread could be the second element

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';

console.log(restaurant.name);
console.log(restaurantCopy.name);

// each element will be defined by a prompt window:

/*const ingredients = [
  prompt("Let's make pasta! Ingredient 1? "),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
]; 

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients); */

/*
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
