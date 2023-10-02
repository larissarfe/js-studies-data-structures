'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    [weekDays[3]]: {
      open: 12,
      close: 22,
    },
    [weekDays[4]]: {
      open: 11,
      close: 23,
    },
    [weekDays[5]]: {
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
};

// -------------------------------------------> MAPS : FUNDAMENTALS

// new feature

// more useful than sets

// IN JS - MAP IS A DATA STRUCTURE THAT WE CAN USE TO MAP VALUES TO KEYS

// SO JUST LIKE IN OBJECTS - DATA IS STORES IN KEY VALUE PAIRS IN MAPS

// ---------->>>>> THE BIG DIFFERENCE BETWEEN OBJECTS AND MAPS IS THAT IN MAPS THE KEYS CAN HAVE ANY TYPE!!!!!!!!

// THE EASIEST WAY TO CREATE A MAP IS TO CREATE AN EMPTY MAP:

const rest = new Map();

// then to fill up the map we can use the set method

rest.set('name', 'Classico Italiano'); // here we pass it into arguments - THE FIRST IS THE KEY NAME - THE SET METHOD IS SIMILAR TO THE ADD METHOD IN SETS (DATA TYPE)
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

// THE SET METHOD ALSO RETURNS THE MAP

console.log(rest.set(3, 'Campos, Brazil'));

// THE FACT THAT THE SET METHOD ACTUALLY RETURNS THE UPDATED MAP ALLOWS US TO CHANGE THE SET METHOD LIKE THIS: CHAIN THE SET METHOD:

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

// IN ORDER TO READ DATA FROM THE MAP WE USE THE GET METHOD - THE GET METHOD IS AVAILABLE ON ALL MAPS
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;

console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // HAVING BOOLEANS AS MAP KEYS

// ---------------------------->  OTHER METHODS BESIDES GET ANS SET TO USE WITH MAPS:

// 3- CHECK IF A MAP CONTAINS A CERTAIN KEY:

console.log(rest.has('categories'));

// DELETING ITENS - WE SPECIFY WITH THE KEY

rest.delete(2); // location 2

// WE CAN ALSO DELETE PROPERTIES FROM OBJECTS USING SOMETHING CALLED DELETE OPERATOR

// OBJECTS HAVE A METHOD CALLED hasOwnProperty

// MAPS ALSO HAVE THE SIZE PROPERTY

console.log(rest);
console.log(rest.size);

// REMOVE ALL THE ELEMENTS FROM THE MAP

// rest.clear();

// WE CAN USE ARRAYS OR OBJECTS AS MAP KEYS

const array = [1, 2];
rest.set(array, 'Test'); // BEFORE IT WASN'T IN A VARIABLE
rest.set(document.querySelector('h1'), 'Heading'); // -------- > THE RESULT OF THIS WILL BE AN OBJECT

console.log(rest);

// BUT NOW TO GET THE DATA FROM THIS ARRAY

console.log(rest.get(array)); // IT'S NOT GOING TO WORK BECAUSE ITS NOT A PRIMITIVE VALUE - IT DOES NOT REFER TO THE SAME PLACE IN MEMORY

// TO MAKE IT WORK WE NEED TO STORE THE ARRAY IN A VARIABLE

// const array = [1, 2];

// SO WE CAN USE OBJECTS AS MAP KEYS - SO WE CAN USE IT WITH DOM ELEMENTS

// ----------------------------------- > SETS

// A SET IS BASICALLY JUST A COLLECTION OF UNIQUE VALUES:

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]); // write new Set and we pass in an iterable. the most common is an array - THERE ARE NO KEY VALUE PAIRS

// SET CAN HOLD MIXED DATA TYPES
console.log(ordersSet); // ALL THE DUPLICATES ARE GONE

// JUST LIKE ARRAYS, SETS ARE ALSO ITERABLES

// A SET IS STILL VERY DIFFERENT FROM AN ARRAY: 1- ITS ELEMENTS ARE UNIQUE, 2- BECAUSE OF THE ORDER OF ELEMENTS IN THE SET IS IRRELEVANT

// Obs: strings are also iterables

console.log(new Set('Jonas'));
console.log(new Set()); // empty set

// 1 - we can get the size of a set:

console.log(ordersSet.size);

// 2 - we can check if a certain element is in a set:

console.log(ordersSet.has('Pasta'));

// 3- ADDING ITEMS TO THE SET

ordersSet.add('Garlic Bread');

console.log(ordersSet.size);

// 4- DELETE AN ITEM FROM THE SET
ordersSet.delete('Pizza');
console.log(ordersSet.size);

// 5- HOW DO WE RETRIEVE VALUES OUT OF A SET? CAN WE USE INDEX? NOOOOOO

// IN SETS THERE ARE NO INDEXES -> THERE'S NO WAY OF GETTING OUT OF A SET - AND THERE'S NO NEED OF THAT BECAUSE ALL VALUES ARE UNIQUE

// ALL WE NEED TO KNOW IS WHETHER A CERTAIN VALUE IS IN A SET OR NOT - HAS METHOD

// If your goal is to store values in order and retrieve it

// 6 - DELETE ALL OF THE ELEMENTS OS A SET:

//ordersSet.clear()

// SETS ARE ALSO ITERABLES AND THEREFORE WE CAN LOOP OVER THEM - we can loop over any iterable

for (const order of ordersSet) {
  console.log(order);
}

// ---------------------------------- USE CASE FOR SETS::

// THE MAIN USE FOR SETS IS TO REMOVE DUPLICATE VALUES FROM ARRAYS:

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// to know only which different positionsthere are in our restaurant - AN UNIQUE ARRAY OF STAFF

const staffUnique = [...new Set(staff)]; // CREATE AN ARRAY AROUND THIS AND UNPACK IT  // WE PASS THE ITERABLE IN

console.log(staffUnique);

// NOW WE WANT THE staffUnique TO BE AN ARRAY - TO CONVERT IT - THE CONVERSION IS EASY BECAUSE THEY'RE BOTH ITERABLES

// THE SPREAD OPERATOR WORKS ON ALL ITERABLES

// SO WE CAN USE THE SPREAD OPERATOR AND UNPACK THE ENTIRE SET USING THE SPREAD OPERATOR AND THEN THESE ELEMENTS WILL BE PUT INTO THE NEW ARRAY

// ================== THE SPREAD OPERATOR TAKES ALL THE ELEMENTS OUT OF THE ITERABLE AND WILL WRTIE THEM INTO AN ARRAY

// WE CAN ALSO DO IT LIKE THAT:

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('larissarodriguesferreira').size);

// SETS ARE NOT INTENDED TO REPLACE ARRAYS AT ALL

//=================================> LOOPING OBJECTS : OBJECT KEYS, VALUES AND ENTRIES:

// Objects are not iterables but we can loop over them in an indirect way:

// -> Let's start by simply looping over property names - THEY'RE ALSO CALLED KEYS

// Ultimately we will still have to use the for of loop to loop over the array but we're going to do that in an indirect way

// SO WE'RE NOT ACTUALLY LOOPING OVER THE OBJECT ITSELF - INSTEAD, WE'RE GONNA LOOP OVER AN ARRAY

//onst days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// we can use this to compute how many properties are in the object
// print a string to say how many days the restaurant is open:

// PROPERTY NAMES
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `The restaurant is open ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// PROPERTY VALUES

const values = Object.values(restaurant.openingHours);
console.log(values);

// TO LOOP OVER THE ENTIRE OBJECT WE ACTUALLY NEED ENTRIES

// ENTRIES = NAMES PLUS THE VALUES TOGETHER -
// --------------------------------------------- LOOPING OVER THE ENTIRE OBJECT

const entries = Object.entries(restaurant.openingHours);

console.log(entries);

// using the entries to loop over the object:

// the two variable names inside of that object are open and close - here we specified these property names - so they get destructured
// { open, close } WAS NECESSARY BECAUSE THE VALUE ITSELF IS ALSO AN OBJECT - IF IT WAS A SIMPLER OBJECT: [KEY, VALUE]
for (const [key, { open, close }] of entries) {
  // where would be the values we put open, close
  console.log(`On ${key} we open at ${open} and close at ${close} `); // USING VARIABLES BEFORE WE DEFINE THEM (key, open, close) BUT HOW? USING DESTRUCTURING
}

/*
//-------------------- OPTIMAL CHAINING

// 1. TO CHECK IF A PROPERTY EXISTS

// so let's say that we wanted to get the openingHours of our restaurant for monday

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.fri.open);

// Now with optimal chaining:
console.log(restaurant.openingHours.mon?.open); // ONLY IF THE PROPERTY THAT IS BEFORE THE QUESTION MARK - SO ONLY IF MONDAY EXISTS
// ONLY IF MONDAY EXISTS THIS OPEN PROPERTY WILL BE READ FROM THERE

// A PROPERTY EXISTS IF IT'S NOT NULL OR UNDEFINED
// IF IT'S ZERO OR AN EMPTY STRING IT STILL EXISTS

// IF NOT, THEN UNDEFINED WILL BE IMMEDIATELY RETURNED

// We can have multiple optimal chainings

// Example - loop over this array then lock to the console whether the restaurant is open or closed on each of the days
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// obs: if we want to use a variable name as the property name we need to use [day]

// the days that we get undefined because th restaurant does not open we want to SET A DEFAULT VALUE - we use the nullish operator so it will not trigger an error on saturday because it openas at 0
// because for the nullish operator nullish values are null and undefined

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // the day is coming dynamically from this array
  // this would be the same as restaurant.openingHours.mon/tue/wed
  console.log(`On ${day}, we open at ${open} `); // we used the open variable that we created not the property
}

// 2- FOR CALLING METHODS: WE CAN CHECK IF A METHOD EXISTS BEFORE WE CALL IT:::

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // IF THE METHOD EXISTS WE CAN CALL IT
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// 3- OPTIONAL CHAINING EVEN WORKS ON ARRAYS: we can use it if an array is empty

// users array so we can put user's objects:

const users = [{ name: 'jonas', email: 'hello.jonas@jonas.io' }];

// now to get the name of the first element of this array:- IT CHECKS IF THE ELEMENT ON THE LEFT EXISTS SO users[0]

console.log(users[0]?.name ?? 'User array empty'); // check if the first element of the array exists and only then take its .name


// -------------------------------------the for of loop  -> loop over our entire menu

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); // all the items will be logged individually in the console

// so this loop will automatically loop over the intire array and in each iteration it will give us access to the current array element
// which we specify with the variable item - the item variable is always the current element in each iteration

// WE CAN ALSO USE THE KEYWORD CONTINUE AND BREAK HERE
// just like an if/else statement we don't need a code block when we only have one statement to execute

// What if we want also the current index and not just the current element?
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//BUT WE CAN DESTRUCTURE IT -> const [i, el]

console.log(menu.entries()); */

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

//const { team1, x: draw, team2 } = game.odds;

//console.log(team1, draw, team2);

// 6- write a function ('printGoals') that receives an arbitrary number of player names (NOT AN ARRAY) and print each of them in the console
// along with the number of goals who were scored (number of player names passed in)

// 7- Print to the console which team is more likely to win based on the odds variable WITHOUT if/else statement or ternary operator
// the team with a lowe odd is more likely to win

// the and operator
//team1 < team2 && console.log('Team 1 is more likely to win');
//team1 > team2 && console.log('Team 2 is more likely to win');

// we want the evaluation console.log to be printed if the result of the operation before is true

// the or operator short circuits if the first value is true but that's not what we want because if so the cl won't be evaluated

// ============================================================= > CODING CHALLENGE 2

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number, along with the goal number (ex "Goal 1: Lewandowski")

const arr = game.scored;

console.log(arr);
console.log(arr.entries()); // entries gives the indexes

for (const [i, el] of arr.entries()) {
  console.log(` Goal ${i + 1} scored by: ${el}!!`);
}

// 2. Use a loop to calculate the average odd and log it to the console
// loop over the object

const value = Object.values(game.odds);
console.log(value);

//const sum = value[0] + value[1] + value[2];
//console.log(sum / 2);

let sum = 0;
for (let i = 0; i < value.length; i++) {
  sum += value[i];
}

console.log(sum / value.length);

// 3. Print the 3 odds to the console, but in a nice formatted way: odd of victory Bayern Munich: 1.33), odd of draw: 3.25... get the team names directly from the game object,

const names = [game.team1, 'Draw', game.team2];

console.log(names);
const odds = Object.entries(game.odds);
console.log(odds);

for (const [team, value] of odds) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`; // it will read the property with the same name from the game object
  console.log(`odd of victory ${teamStr}: ${value}`);
}

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

// ==============================> THE REST PATTERN

// uses the exact same syntax - HOWEVER, TO COLLECT MULTIPLE ELEMENTS AND CONDENSE THEM INTO AN ARRAY

// THE OPOSSITE OF SPREAD - THE SPREAD OPERATOR IS TO UNPACK AN ARRAY WHILE REST IS TO PACK ELEMENTS INTO AN ARRAY

// WE KNOW WE ARE USING AN SPREAD OPERATOR BECAUSE WE ARE USING IT ON THE RIGHT HAND SIGHT OF THE = SIGN

// spread after the =

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

const ingredients = [
  prompt("Let's make pasta! Ingredient 1? "),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);

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
