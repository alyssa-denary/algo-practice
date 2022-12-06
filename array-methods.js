const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP*** - Creates a new array
//1. Get array of all names

//2. Get array of all heights

//3. Get array of objects with just name and height properties

//4. Get array of all first names

//***REDUCE***
//1. Get total mass of all characters

//2. Get total height of all characters

//3. Get total number of characters by eye color

//3.1 Given an array of characters (characters ) , and a string, ( eyeColor) , create a function that returns the number of characters that have that eyeColor.  Use reduce .    getEyeColorCount(characters, blue) should return 2;

//3.2 Given an array of characters (characters), create a function that returns an object that contains the count of how many characters have each eye color.  Use reduce.  In your case, try not to use eyeColorCount variable and spread operator.  getEyeColorCountObj(characters) should return:

//4. Get total number of characters in all the character names

//***FILTER*** - Makes a shallow copy of an array
//1. Get characters with mass greater than 100

//2. Get characters with height less than 200

//3. Get all male characters

//4. Get all female characters

// ***SORT*** - Sorts elements in place
//1. Sort by mass - ASCENDING

//2. Sort by height - DESCENDING

//3. Sort by name - A to Z

//4. Sort by gender

//***EVERY*** - Tests if all elements in array pass the callback test, returns a boolean
//1. Does every character have blue eyes?

//2. Does every character have mass more than 40?

//3. Is every character shorter than 200?

//4. Is every character male?

//***SOME*** - Tests if at least 1 el passes callback test
//1. Is there at least one male character?

//2. Is there at least one character with blue eyes?

//3. Is there at least one character taller than 210?

//4. Is there at least one character that has mass less than 50?
