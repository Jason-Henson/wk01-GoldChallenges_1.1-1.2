/* 
    - write an object literal that stores information about your favorite movie. nameOfMovie, runTime, characters, and genre should be keys directly inside the object.
        - characters will be an array that should store no more than 2 character objects, each of which stores name, age, and items.
        - items itself will also be an array that should store no more than 2 item objects. These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}).

    - use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has. Your console should look similar to the screenshot below.
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

let movie = [
    'Coming to America',
    '1h 57mim',
    'Cast:',
        {name: 'Eddie Murphy', age: 28, charachters: ['Prince Hakeem', 'Eddie The Barber', 'Randy Whatson']},
        {name: 'Arseno Hall', age: 33, charachters: ['Semi', 'Pastor Jenkins', 'Old Man']}
]

// log name of movie
console.log(movie[0])
// log the length
console.log(movie[1])
// log cast E. Murphy
console.log(movie[2])
console.log(movie[3].name)
console.log(movie[3].age)
console.log(movie[3].charachters)
// log cast - A. Hall
console.log(movie[4].name)
console.log(movie[4].age)
console.log(movie[4].charachters)