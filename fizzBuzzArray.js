var myArray = [];
var counter = 1;

function fizzBuzz() {
    if (counter%15===0) {
        myArray.push("FizzBuzz");
        counter++;
        console.log(myArray);
    }
    else if (counter%3===0) {
        myArray.push("Fizz");
        counter++;
        console.log(myArray);
    }
    else if (counter%5===0) {
        myArray.push("Buzz");
        counter++;
        console.log(myArray);
    } 
    else {
    myArray.push(counter);
    counter++;
    console.log(myArray);
    }
}