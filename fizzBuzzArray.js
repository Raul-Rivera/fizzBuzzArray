var myArray = [];
var counter = 1;

function fizzBuzz() {
    if (counter%15===0) {
        myArray.push("FizzBuzz");
    }
    else if (counter%3===0) {
        myArray.push("Fizz");
    }
    else if (counter%5===0) {
        myArray.push("Buzz");
    } 
    else {
    myArray.push(counter);
    }
    
    counter++;
    console.log(myArray);
}
