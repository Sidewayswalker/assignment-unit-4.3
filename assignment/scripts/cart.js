console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// Create a global variable named basket and set it to an empty array.
let basket = ['Almonds', 'Apples'];

const maxItems = 5;

// Create a function called addItem. It should:
// take an input parameter for a string item
// add the new item to the global array basket.
// return true indicating the item was added
function addItem(item) {
    if(item && isFull() === false){
    basket.push(item);
    return true
    }else {
    return false
    }
}
console.log(addItem('Bread'));
console.log('Everything in the basket', basket);


// Create a function called listItems. It should:
// loop over the items in the basket array
// console.log each individual item on a new line

function listItems(){
    for(i=0; i<basket.length; i++){
        console.log(basket[i]);
    }
return basket
}
console.log(listItems());


// Create a function called empty. It should:
// reset the basket to an empty array
// do not use basket = [] to reset the array

function empty(){
    for(i=0; i<basket.length; i++){
        basket.length = 0;
        //basket.splice(0, basket.length);
    }
return basket
}
console.log('Remove everything from basket', empty());

// For example, to test addItem:
// console.log(`Basket is ${basket}`);
// console.log('Adding apples (expect true)', addItem('apples'));
// console.log(`Basket is now ${basket}`);
console.log(addItem('Chocolate'));
console.log('Everything in the basket', basket);


//STRETCH
// Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.
// Using functions in other functions!

//START STRETCH HERE**********************
// Add a global const named maxItems and set it to 5.
// SEEEE LINE 9: const maxItems = 5;

// Create a function called isFull(). It should:
//      return false if the basket contains less than max number of items
//      return true otherwise (equal or more than maxItems)
function isFull(){
    if(basket.length<maxItems){
        return false // More Space
    } else {
        return true // All Full
    }
}
console.log('What is in the Basket', basket);
console.log('current length of basket', basket.length);
console.log('maxItems is: ', maxItems);
console.log('Is the basket full? ', isFull()); //false


// Update the required addItem function to:
//      Use the isFull function to prevent more than maxItems from being added to the basket.
//      If an item was added to the array, return true
//      If there was no room and the item could not be added return false

//DONE SEE FUNCTION ABOVE





// Using Array built-in functions! (Topic Overview Statement)
// Create a function called removeItem. It should:
//      Take an input parameter for a string item
//      Use Array.indexOf to find the index of the first matching item in the basket.
//      Use Array.splice to remove the first matching item from the basket.
//      Return the item removed or null if the item was not found






// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
